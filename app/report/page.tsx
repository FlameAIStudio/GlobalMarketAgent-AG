'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import LoadingSteps from '@/components/LoadingSteps';
import CompetitorCard from '@/components/CompetitorCard';
import PriceChart from '@/components/PriceChart';
import GTMPanel from '@/components/GTMPanel';
import { ReportData, CustomerInsight } from '@/data/types';
import { matchReport } from '@/lib/matcher';

const INSIGHT_META: Record<CustomerInsight['type'], { label: string; cls: string }> = {
  values:     { label: 'What users value', cls: 'border-l-2 border-l-blue-500'   },
  complaints: { label: 'Pain points',       cls: 'border-l-2 border-l-yellow-500' },
  gap:        { label: 'Market gap',        cls: 'border-l-2 border-l-green-500'  },
};

interface RoutingMeta {
  matchedBy: 'model' | 'local';
  matchedKeyword: string;
  reason: string;
  confidence: number;
}

const STATIC_EXPORT_MODE = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

// ── Section header component ──────────────────────────────────────
interface SectionHeaderProps {
  num: string;
  title: string;
  sub?: string;
  accent: string; // tailwind border-top color class
  tag?: string;
}
function SectionHeader({ num, title, sub, accent, tag }: SectionHeaderProps) {
  return (
    <div className={`border-t-2 ${accent} pt-5 mb-6 flex items-end justify-between gap-4`}>
      <div className="flex items-baseline gap-4">
        <span className="mono text-5xl font-bold text-[#334155] leading-none select-none">{num}</span>
        <div>
          <h2 className="text-xl font-bold text-[#e8edf3] tracking-tight leading-tight">{title}</h2>
          {sub && <p className="mono text-xs text-[#cbd5e1] mt-1">{sub}</p>}
        </div>
      </div>
      {tag && <span className="tag flex-shrink-0">{tag}</span>}
    </div>
  );
}

function Nav({ phase, report, onBack }: {
  phase: string;
  report: ReportData | null;
  onBack: () => void;
}) {
  return (
    <header className="border-b border-[#334155] bg-[#080c14]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2.5 group">
          <svg className="w-4 h-4 text-[#cbd5e1] group-hover:text-[#cbd5e1] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-base font-semibold text-[#e8edf3]">Global Market Agent</span>
        </button>
        <div className="flex items-center gap-2.5">
          {phase === 'report' && report && (
            <>
              <span className="tag tag-green hidden sm:inline-flex">report ready</span>
              <span className="tag hidden sm:inline-flex">{report.platform} · {report.region}</span>
              <button
                onClick={onBack}
                className="tag hover:border-[#334155] hover:text-[#cbd5e1] transition-all duration-150 cursor-pointer"
              >
                New analysis
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function ReportContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const keyword  = searchParams.get('keyword')  || '';
  const region   = searchParams.get('region')   || 'US';
  const platform = searchParams.get('platform') || 'Amazon';

  const [phase,   setPhase]   = useState<'loading' | 'report'>('loading');
  const [report,  setReport]  = useState<ReportData | null>(null);
  const [visible, setVisible] = useState(false);
  const [routing, setRouting] = useState<RoutingMeta | null>(null);
  const [analysisDone, setAnalysisDone] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function runAnalysis() {
      if (!keyword) {
        router.push('/');
        return;
      }

      try {
        setError('');
        setAnalysisDone(false);

        if (STATIC_EXPORT_MODE) {
          const localReport = matchReport(keyword, region, platform);
          if (cancelled) return;
          setReport(localReport);
          setRouting({
            matchedBy: 'local',
            matchedKeyword: localReport.keyword,
            reason: 'Static export preview uses bundled mock data.',
            confidence: 0.82,
          });
          setAnalysisDone(true);
          return;
        }

        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ keyword, region, platform }),
          cache: 'no-store',
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || 'Analysis failed');
        }

        if (cancelled) return;

        setReport(data.report);
        setRouting(data.routing ?? null);
        setAnalysisDone(true);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : 'Analysis failed');
        setAnalysisDone(true);
      }
    }

    runAnalysis();

    return () => {
      cancelled = true;
    };
  }, [keyword, region, platform, router]);

  const onLoadingComplete = useCallback(() => {
    setLoadingDone(true);
  }, []);

  useEffect(() => {
    if (!analysisDone || !loadingDone || !report) return;

    setPhase('report');
    setTimeout(() => setVisible(true), 80);
  }, [analysisDone, loadingDone, report]);

  return (
    <main className="min-h-screen grid-bg flex flex-col">
      <Nav phase={phase} report={report} onBack={() => router.push('/')} />

      {/* Loading */}
      {phase === 'loading' && (
        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <LoadingSteps onComplete={onLoadingComplete} />
        </div>
      )}

      {phase === 'loading' && analysisDone && error && (
        <div className="px-6 pb-10">
          <div className="max-w-xl mx-auto panel p-5 border border-red-500/30">
            <div className="label mb-2">analysis error</div>
            <p className="text-sm text-[#94a3b8]">{error}</p>
          </div>
        </div>
      )}

      {/* Report */}
      {phase === 'report' && report && (
        <div className={`flex-1 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 space-y-14">

            {/* ── Report hero ──────────────────────── */}
            <div className="flex items-end justify-between gap-4 pb-8 border-b border-[#334155]">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="dot-live" />
                  <span className="mono text-[#34d399] text-sm">report.complete</span>
                  <span className="mono text-[#cbd5e1] text-sm">· generated in ~4s</span>
                </div>
                <h1 className="text-4xl font-bold text-[#e8edf3] tracking-tight capitalize">{report.keyword}</h1>
                <p className="mono text-[#cbd5e1] text-sm mt-2">
                  {report.platform} · {report.region} · market intelligence report
                </p>
                {routing && (
                  <p className="mono text-[#64748b] text-xs mt-3">
                    routed via {routing.matchedBy === 'model' ? 'ai relay' : 'local fallback'}
                    {' · '}
                    matched mock: {routing.matchedKeyword}
                    {' · '}
                    confidence {(routing.confidence * 100).toFixed(0)}%
                  </p>
                )}
              </div>
              <div className="hidden sm:flex gap-8 text-right flex-shrink-0">
                {[
                  { v: String(report.competitors.length), l: 'Competitors' },
                  { v: '3', l: 'Price tiers' },
                  { v: '3', l: 'GTM pillars' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="mono text-3xl font-bold text-[#e8edf3] leading-none mb-1">{s.v}</div>
                    <div className="label">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 01 Executive Summary ─────────────── */}
            <section>
              <SectionHeader
                num="01"
                title="Executive Summary"
                sub="AI-synthesized market overview"
                accent="border-t-[#3b82f6]"
              />
              <div className="panel p-6 flex gap-5 bg-[#0d1321]">
                <div className="accent-bar" />
                <div className="space-y-3">
                  <p className="text-base text-[#cbd5e1] leading-relaxed">{report.summary}</p>
                  {routing && (
                    <p className="mono text-xs text-[#64748b]">
                      routing note: {routing.reason}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* ── 02 Competitor Mapping ────────────── */}
            <section>
              <SectionHeader
                num="02"
                title="Competitor Mapping"
                sub={`${report.competitors.length} players analyzed`}
                accent="border-t-[#6366f1]"
                tag="amazon · scraped"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {report.competitors.map((c, i) => (
                  <CompetitorCard key={i} competitor={c} rank={i + 1} />
                ))}
              </div>
            </section>

            {/* ── 03 Price Analysis ────────────────── */}
            <section>
              <SectionHeader
                num="03"
                title="Price Analysis"
                sub="market price distribution by tier"
                accent="border-t-[#0ea5e9]"
                tag="3 tiers"
              />
              <div className="max-w-2xl">
                <PriceChart data={report.price_analysis} />
              </div>
            </section>

            {/* ── 04 Customer Insights ─────────────── */}
            <section>
              <SectionHeader
                num="04"
                title="Customer Insights"
                sub="synthesized from 100k+ reviews"
                accent="border-t-[#f59e0b]"
                tag="nlp — sentiment"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {report.customer_insights.map((ins, i) => {
                  const meta = INSIGHT_META[ins.type] ?? INSIGHT_META.values;
                  return (
                    <div key={i} className={`panel p-5 pl-6 ${meta.cls}`}>
                      <div className="label mb-3">{meta.label}</div>
                      <p className="text-base text-[#cbd5e1] leading-relaxed">{ins.content}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ── 05 GTM Strategy ──────────────────── */}
            <section>
              <SectionHeader
                num="05"
                title="GTM Strategy"
                sub="go-to-market recommendations"
                accent="border-t-[#34d399]"
                tag="ai-generated"
              />
              <GTMPanel gtm={report.gtm} />
            </section>

            {/* ── Footer CTA ───────────────────────── */}
            <div className="border-t border-[#334155] pt-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-[#e8edf3]">Run another analysis</p>
                <p className="mono text-sm text-[#cbd5e1] mt-1">
                  Try: pet grooming brush · SEA · TikTok
                </p>
              </div>
              <button
                onClick={() => router.push('/')}
                className="px-6 py-3 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-base transition-all duration-150"
              >
                New analysis
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen grid-bg flex items-center justify-center">
        <span className="mono text-[#cbd5e1] text-sm">initializing...</span>
      </div>
    }>
      <ReportContent />
    </Suspense>
  );
}

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

function Nav({ phase, report, onBack }: {
  phase: string;
  report: ReportData | null;
  onBack: () => void;
}) {
  return (
    <header className="border-b border-[#1a2435] bg-[#080c14]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2.5 group">
          <svg className="w-4 h-4 text-[#3a4e63] group-hover:text-[#8499b0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="tag hover:border-[#2d3f55] hover:text-[#8499b0] transition-all duration-150 cursor-pointer"
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

  useEffect(() => {
    if (!keyword) { router.push('/'); return; }
    // Client-side: call matcher directly (no API route needed for static export)
    const result = matchReport(keyword, region, platform);
    setReport(result);
  }, [keyword, region, platform, router]);

  const onLoadingComplete = useCallback(() => {
    setPhase('report');
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <main className="min-h-screen grid-bg flex flex-col">
      <Nav phase={phase} report={report} onBack={() => router.push('/')} />

      {/* Loading */}
      {phase === 'loading' && (
        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <LoadingSteps onComplete={onLoadingComplete} />
        </div>
      )}

      {/* Report */}
      {phase === 'report' && report && (
        <div className={`flex-1 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">

            {/* ── Header ─── */}
            <div className="flex items-end justify-between gap-4 pb-8 mb-8 border-b border-[#1a2435]">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="dot-live" />
                  <span className="mono text-[#34d399] text-sm">report.complete</span>
                  <span className="mono text-[#3a4e63] text-sm">· generated in ~4s</span>
                </div>
                <h1 className="text-4xl font-bold text-[#e8edf3] tracking-tight capitalize">{report.keyword}</h1>
                <p className="mono text-[#3a4e63] text-sm mt-2">
                  {report.platform} · {report.region} · market intelligence report
                </p>
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

            {/* ── Executive Summary ─── */}
            <section className="mb-8">
              <div className="panel p-6 flex gap-5">
                <div className="accent-bar" />
                <div>
                  <div className="label mb-3">executive summary</div>
                  <p className="text-base text-[#8499b0] leading-relaxed">{report.summary}</p>
                </div>
              </div>
            </section>

            {/* ── Competitors + Price ─── */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">
              <section className="xl:col-span-2">
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-lg font-semibold text-[#e8edf3]">Competitor Mapping</h2>
                  <span className="label">{report.competitors.length} players analyzed</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {report.competitors.map((c, i) => (
                    <CompetitorCard key={i} competitor={c} rank={i + 1} />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#e8edf3] mb-4">Price Analysis</h2>
                <PriceChart data={report.price_analysis} />
              </section>
            </div>

            {/* ── Insights + GTM ─── */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-10">
              <section>
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-lg font-semibold text-[#e8edf3]">Customer Insights</h2>
                  <span className="label">from 100k+ reviews</span>
                </div>
                <div className="space-y-3">
                  {report.customer_insights.map((ins, i) => {
                    const meta = INSIGHT_META[ins.type] ?? INSIGHT_META.values;
                    return (
                      <div key={i} className={`panel p-5 pl-6 ${meta.cls}`}>
                        <div className="label mb-2.5">{meta.label}</div>
                        <p className="text-base text-[#8499b0] leading-relaxed">{ins.content}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-lg font-semibold text-[#e8edf3]">GTM Strategy</h2>
                  <span className="label">ai-generated</span>
                </div>
                <GTMPanel gtm={report.gtm} />
              </section>
            </div>

            {/* ── Footer CTA ─── */}
            <div className="border-t border-[#1a2435] pt-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-[#e8edf3]">Run another analysis</p>
                <p className="mono text-sm text-[#3a4e63] mt-1">
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
        <span className="mono text-[#3a4e63] text-sm">initializing...</span>
      </div>
    }>
      <ReportContent />
    </Suspense>
  );
}

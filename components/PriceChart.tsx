import { PriceAnalysis } from '@/data/types';

interface PriceChartProps {
  data: PriceAnalysis;
}

const TIERS = [
  { key: 'budget',  label: 'Budget',   pct: 30, color: 'bg-[#1f3148]'      },
  { key: 'mid',     label: 'Mid-tier', pct: 62, color: 'bg-[#3b82f6]/70'   },
  { key: 'premium', label: 'Premium',  pct: 92, color: 'bg-[#e8edf3]/25'   },
] as const;

export default function PriceChart({ data }: PriceChartProps) {
  return (
    <div className="panel p-6 h-full flex flex-col">
      <div className="label mb-6">price distribution</div>

      <div className="space-y-6 flex-1">
        {TIERS.map((tier) => {
          const raw    = data[tier.key as keyof PriceAnalysis] as string;
          const parts  = raw.split(' — ');
          const range  = parts[0];
          const detail = parts[1] ?? '';

          return (
            <div key={tier.key}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-[#8499b0]">{tier.label}</span>
                <span className="mono text-sm font-bold text-[#e8edf3]">{range}</span>
              </div>
              <div className="track mb-2">
                <div
                  className={`h-full rounded transition-all duration-1000 ${tier.color}`}
                  style={{ width: `${tier.pct}%` }}
                />
              </div>
              {detail && <p className="text-xs text-[#3a4e63] leading-snug">{detail}</p>}
            </div>
          );
        })}
      </div>

      {/* Insight */}
      <div className="mt-6 pt-5 border-t border-[#1a2435]">
        <div className="label mb-2">analyst note</div>
        <p className="text-sm text-[#8499b0] leading-relaxed">{data.insight}</p>
      </div>
    </div>
  );
}

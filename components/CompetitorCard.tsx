import { Competitor } from '@/data/types';

interface CompetitorCardProps {
  competitor: Competitor;
  rank: number;
}

export default function CompetitorCard({ competitor, rank }: CompetitorCardProps) {
  const fullStars = Math.floor(competitor.rating);
  const half = competitor.rating - fullStars >= 0.5;

  return (
    <div className="panel p-5 hover:border-[#334155] transition-all duration-150">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-2.5 min-w-0">
          <span className="mono text-[#64748b] text-sm pt-0.5 flex-shrink-0">#{rank}</span>
          <div className="min-w-0">
            <p className="text-base font-semibold text-[#e8edf3] leading-tight truncate">{competitor.name}</p>
            {competitor.badge && (
              <span className="tag tag-blue mt-1.5 inline-block">{competitor.badge}</span>
            )}
          </div>
        </div>
        <span className="mono text-base font-bold text-[#e8edf3] flex-shrink-0">{competitor.price}</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-3.5 h-2 rounded-sm"
              style={{
                background: i < fullStars
                  ? '#e8edf3'
                  : i === fullStars && half
                  ? '#3b82f6'
                  : '#1e293b',
              }}
            />
          ))}
        </div>
        <span className="mono text-sm text-[#94a3b8] font-semibold">{competitor.rating}</span>
        <span className="mono text-sm text-[#64748b]">·</span>
        <span className="mono text-sm text-[#64748b]">{competitor.reviews} reviews</span>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-1.5">
        {competitor.features.map((f, i) => (
          <span key={i} className="tag">{f}</span>
        ))}
      </div>
    </div>
  );
}

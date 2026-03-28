import { GTMStrategy } from '@/data/types';

interface GTMPanelProps {
  gtm: GTMStrategy;
}

const SECTIONS: { key: keyof GTMStrategy; label: string }[] = [
  { key: 'positioning',      label: 'Positioning'      },
  { key: 'messaging',        label: 'Messaging'        },
  { key: 'channel_strategy', label: 'Channel Strategy' },
];

export default function GTMPanel({ gtm }: GTMPanelProps) {
  return (
    <div className="space-y-3">
      {SECTIONS.map((section, i) => (
        <div
          key={section.key}
          className="panel p-5 flex gap-4 hover:border-[#2d3f55] transition-all duration-150"
        >
          <div className="accent-bar" />
          <div className="flex-1 min-w-0">
            <div className="label mb-2.5">
              {String(i + 1).padStart(2, '0')} · {section.label}
            </div>
            <p className="text-sm text-[#8499b0] leading-relaxed">{gtm[section.key]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

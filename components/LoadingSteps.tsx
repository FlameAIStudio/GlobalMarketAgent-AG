'use client';

import { useEffect, useState } from 'react';

const STEPS = [
  { id: 'planner',   label: 'Planner',   desc: 'Defining research scope and market parameters' },
  { id: 'browser',   label: 'Browser',   desc: 'Collecting competitor signals and pricing data' },
  { id: 'analyst',   label: 'Analyst',   desc: 'Synthesizing market patterns and customer insights' },
  { id: 'architect', label: 'Architect', desc: 'Generating GTM strategy and positioning framework' },
];

function ts() {
  const d = new Date();
  return [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((n) => String(n).padStart(2, '0'))
    .join(':');
}

interface LoadingStepsProps {
  onComplete: () => void;
}

export default function LoadingSteps({ onComplete }: LoadingStepsProps) {
  const [activeStep,      setActiveStep]      = useState(-1);
  const [completedSteps,  setCompletedSteps]  = useState<number[]>([]);
  const [log,             setLog]             = useState<{ time: string; text: string; ok?: boolean }[]>([]);

  useEffect(() => {
    let current = 0;
    const push = (text: string, ok?: boolean) =>
      setLog((prev) => [...prev, { time: ts(), text, ok }]);

    push('Initializing agent environment...');

    const advance = () => {
      if (current >= STEPS.length) return;
      const step = STEPS[current];
      setActiveStep(current);
      push(`[${step.label.toUpperCase()}] ${step.desc}`);

      setTimeout(() => {
        push(`[${step.label.toUpperCase()}] Done.`, true);
        setCompletedSteps((prev) => [...prev, current]);
        current++;
        if (current < STEPS.length) {
          setTimeout(advance, 100);
        } else {
          push('Report generation complete.');
          setTimeout(() => onComplete(), 400);
        }
      }, 900 + Math.random() * 400);
    };

    setTimeout(advance, 400);
  }, [onComplete]);

  const pct = Math.round((completedSteps.length / STEPS.length) * 100);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="dot-live" />
        <span className="mono text-[#7a8fa6] text-xs">agent.running</span>
        <span className="mono text-[#cbd5e1] text-xs ml-auto">{pct}% complete</span>
      </div>

      {/* Master progress */}
      <div className="track mb-7">
        <div className="track-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Steps */}
      <div className="space-y-2 mb-6">
        {STEPS.map((step, idx) => {
          const done    = completedSteps.includes(idx);
          const active  = activeStep === idx && !done;
          const pending = !done && !active;

          return (
            <div
              key={step.id}
              className={`panel flex items-center gap-4 px-4 py-3 transition-all duration-200 ${
                pending ? 'opacity-20' : active ? 'border-[#3b82f6]/40' : ''
              }`}
            >
              <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                {done ? (
                  <svg className="w-4 h-4 text-[#34d399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : active ? (
                  <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
                ) : (
                  <div className="w-2 h-2 rounded-full border border-[#cbd5e1]" />
                )}
              </div>

              <span className={`mono text-xs font-medium w-20 flex-shrink-0 ${
                done ? 'text-[#34d399]' : active ? 'text-[#3b82f6]' : 'text-[#cbd5e1]'
              }`}>
                {step.label}
              </span>

              <span className={`text-xs flex-1 truncate ${
                done ? 'text-[#cbd5e1]' : active ? 'text-[#7a8fa6] cursor-blink' : 'text-[#cbd5e1]'
              }`}>
                {done ? 'complete' : step.desc}
              </span>

              <span className={`mono text-xs flex-shrink-0 ${done ? 'text-[#34d399]/60' : active ? 'text-[#3b82f6]/60' : 'text-[#cbd5e1]'}`}>
                {done ? 'ok' : active ? 'run' : '—'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Terminal log */}
      <div className="panel-sm">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#334155]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#334155]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#334155]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#334155]" />
          </div>
          <span className="mono text-[#cbd5e1] text-xs ml-1">execution.log</span>
        </div>
        <div className="p-3 space-y-1 max-h-36 overflow-y-auto">
          {log.map((line, i) => (
            <div key={i} className="flex gap-3 scan-in">
              <span className="mono text-[#cbd5e1] text-xs flex-shrink-0">{line.time}</span>
              <span className={`mono text-xs ${line.ok ? 'text-[#34d399]/70' : 'text-[#cbd5e1]'}`}>
                {line.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import InputForm from '@/components/InputForm';

export default function Home() {
  return (
    <main className="min-h-screen grid-bg flex flex-col">
      {/* Nav */}
      <header className="border-b border-[#334155] bg-[#080c14]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-[#334155] rounded-sm flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span className="text-base font-semibold text-[#e8edf3]">Global Market Agent</span>
            <span className="tag tag-blue">BETA</span>
          </div>
          <span className="mono text-[#cbd5e1] text-xs">v0.1.0</span>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: pitch */}
          <div>
            <div className="flex items-center gap-2 mb-7">
              <div className="dot-live" />
              <span className="mono text-[#cbd5e1] text-sm">agent.ready</span>
            </div>

            <h1 className="text-5xl font-bold text-[#e8edf3] leading-[1.1] tracking-tight mb-5">
              Market Intelligence,<br />
              <span className="text-[#3b82f6]">on demand.</span>
            </h1>
            <p className="text-[#cbd5e1] text-base leading-relaxed mb-10 max-w-sm">
              Input a product. Select a market. Get a structured GTM report — competitor mapping, price benchmarking, and go-to-market strategy — in seconds.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 pt-7 border-t border-[#334155]">
              {[
                { v: 'US · SEA · JP',    l: 'Markets' },
                { v: 'Amazon · TikTok',  l: 'Platforms' },
                { v: '~4s',              l: 'Avg. time' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="mono text-[#e8edf3] text-sm font-semibold mb-1">{s.v}</div>
                  <div className="label">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Demo scripts */}
            <div className="mt-7 pt-7 border-t border-[#334155]">
              <div className="label mb-3">demo scripts</div>
              <div className="space-y-2">
                {[
                  { kw: 'wireless earbuds',   r: 'US',  p: 'Amazon', note: 'primary' },
                  { kw: 'pet grooming brush', r: 'SEA', p: 'TikTok', note: 'backup'  },
                  { kw: 'yoga mat',           r: 'US',  p: 'Amazon', note: ''        },
                ].map((d) => (
                  <div key={d.kw} className="flex items-center gap-2">
                    <span className="mono text-[#cbd5e1] text-sm">→</span>
                    <span className="mono text-[#cbd5e1] text-sm">{d.kw}</span>
                    <span className="mono text-[#cbd5e1] text-sm">· {d.r} · {d.p}</span>
                    {d.note && <span className="tag tag-blue">{d.note}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="panel p-7">
            <div className="label mb-6">configure analysis</div>
            <InputForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#334155] py-3.5 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="mono text-[#cbd5e1] text-xs">global-market-agent · hackathon build · mock data</span>
          <span className="mono text-[#cbd5e1] text-xs hidden sm:block">not just a chatbot — a market intelligence agent</span>
        </div>
      </footer>
    </main>
  );
}

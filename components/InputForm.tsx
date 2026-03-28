'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const REGIONS   = ['US', 'SEA', 'JP', 'EU', 'UK'];
const PLATFORMS = ['Amazon', 'TikTok', 'Shopee', 'Lazada'];

export default function InputForm() {
  const router = useRouter();
  const [keyword,  setKeyword]  = useState('');
  const [region,   setRegion]   = useState('US');
  const [platform, setPlatform] = useState('Amazon');
  const [focused,  setFocused]  = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    router.push(`/report?${new URLSearchParams({ keyword: keyword.trim(), region, platform })}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      {/* Keyword */}
      <div>
        <label className="label block mb-2.5">Product keyword</label>
        <div className={`panel flex items-center px-4 py-3.5 gap-3 transition-colors duration-150 ${
          focused ? 'border-[#3b82f6]/60' : ''
        }`}>
          <svg className="w-4 h-4 text-[#64748b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            id="product-keyword"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="e.g. wireless earbuds"
            className="flex-1 bg-transparent text-[#e8edf3] placeholder-[#64748b] text-base outline-none"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-2.5">
          <span className="mono text-[#64748b] text-xs self-center">try:</span>
          {['wireless earbuds', 'pet grooming brush', 'yoga mat'].map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => setKeyword(ex)}
              className="tag tag-dim hover:border-[#334155] hover:text-[#94a3b8] transition-all duration-150 cursor-pointer"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* Region + Platform */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { id: 'target-region',   label: 'Region',   value: region,   opts: REGIONS,   set: setRegion   },
          { id: 'target-platform', label: 'Platform', value: platform, opts: PLATFORMS, set: setPlatform },
        ].map((field) => (
          <div key={field.id}>
            <label className="label block mb-2.5">{field.label}</label>
            <div className="panel px-4 py-3.5 relative">
              <select
                id={field.id}
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                className="w-full bg-transparent text-[#e8edf3] text-base outline-none appearance-none cursor-pointer pr-6"
              >
                {field.opts.map((o) => (
                  <option key={o} value={o} className="bg-[#0d1117]">{o}</option>
                ))}
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <button
        type="submit"
        id="generate-report-btn"
        disabled={!keyword.trim()}
        className="w-full py-3.5 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-base flex items-center justify-center gap-2.5 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Run Analysis
      </button>
    </form>
  );
}

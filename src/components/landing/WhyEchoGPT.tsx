'use client';

import React from 'react';
import { Check, X, Sparkles, HelpCircle } from 'lucide-react';

export const WhyEchoGPT = () => {
  const comparisons = [
    {
      feature: 'Multi-AI Model Access (GPT-4o, Claude 3.5, Gemini 1.5, DeepSeek)',
      echogpt: true,
      standardChat: false,
    },
    {
      feature: 'Side-by-Side Dual AI Output Comparison',
      echogpt: true,
      standardChat: false,
    },
    {
      feature: 'Chrome Extension Overlay on Any Active Website',
      echogpt: true,
      standardChat: false,
    },
    {
      feature: '1M+ Token Context Digest (Google Gemini 1.5 Pro)',
      echogpt: true,
      standardChat: false,
    },
    {
      feature: 'Bring Your Own API Keys (BYOK Privacy & Low Cost)',
      echogpt: true,
      standardChat: false,
    },
    {
      feature: 'Zero Data Retention & Privacy Encryption',
      echogpt: true,
      standardChat: 'Varies',
    },
    {
      feature: 'Code Block Execution & Multi-Format Exporter (PDF/MD/JSON)',
      echogpt: true,
      standardChat: false,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Direct Comparison
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Switch to EchoGPT?
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            See how EchoGPT eliminates subscription fragmentation and supercharges your AI productivity.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80">
                  <th className="p-4 sm:p-6 text-sm font-bold text-white">Product Feature</th>
                  <th className="p-4 sm:p-6 text-sm font-extrabold text-cyan-400 bg-cyan-500/10 border-x border-cyan-500/20 text-center">
                    EchoGPT Ecosystem
                  </th>
                  <th className="p-4 sm:p-6 text-sm font-bold text-slate-400 text-center">
                    Standard AI Chatbots
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 sm:p-6 font-medium text-slate-200">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 bg-cyan-500/5 border-x border-cyan-500/10 text-center">
                      {row.echogpt ? (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500">{row.echogpt}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      {row.standardChat === false ? (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/10 text-rose-500">
                          <X className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-xs font-semibold text-slate-500">{row.standardChat}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

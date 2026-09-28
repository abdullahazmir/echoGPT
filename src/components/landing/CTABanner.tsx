'use client';

import React from 'react';
import Link from 'next/link';
import { Bot, Puzzle, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CTABanner = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-cyan-500/30 relative overflow-hidden text-center shadow-2xl shadow-cyan-500/10">
          
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Ready to Transform Your Multi-AI Productivity?
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Supercharge Your AI Workflow with EchoGPT Today
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Experience the power of Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, and DeepSeek R1 side-by-side in your web browser.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/app"
              onClick={triggerConfetti}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-2xl shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all group"
            >
              <Bot className="w-5 h-5 text-cyan-200" />
              Launch EchoGPT Web App
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/extension"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-200 glass-card hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <Puzzle className="w-5 h-5 text-amber-400" />
              Explore Extension Sandbox
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

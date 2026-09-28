'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bot, Puzzle, Play, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<'claude' | 'gpt4' | 'compare'>('compare');

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-8 shadow-lg shadow-cyan-500/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>EchoGPT v2.0 Ecosystem Released</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.15]"
        >
          Unify, Compare & Command <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Top-Tier AI Models
          </span>{' '}
          In One Hub
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal"
        >
          Seamlessly orchestrate <strong className="text-white">Claude 3.5 Sonnet</strong>, <strong className="text-white">GPT-4o</strong>, <strong className="text-white">Gemini 1.5 Pro</strong>, and <strong className="text-white">DeepSeek R1</strong>. Compare answers side-by-side and bring instant AI power to any webpage with our Chrome Extension.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/app"
            onClick={triggerConfetti}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2.5 transition-all group"
          >
            <Bot className="w-5 h-5 text-cyan-200" />
            Launch Web App Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/extension"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-200 glass-card hover:bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/50 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-md group"
          >
            <Puzzle className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
            Explore Chrome Extension
          </Link>
        </motion.div>

        {/* Key USPs list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero API Key Required to Test</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Side-by-Side Dual AI Output</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Chrome Popup & Web Overlay</span>
          </div>
        </motion.div>

        {/* Interactive Hero Graphic / Split-Screen Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 w-full max-w-5xl glass-panel rounded-3xl p-3 sm:p-5 border border-slate-800 shadow-2xl shadow-cyan-950/40 text-left relative overflow-hidden"
        >
          {/* Header Bar of Interactive Graphic */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 mb-4 bg-slate-950/60 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-slate-400">EchoGPT Multi-AI Dual Comparator</span>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('compare')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'compare' ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Dual Compare
              </button>
              <button
                onClick={() => setActiveTab('claude')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'claude' ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Claude 3.5
              </button>
              <button
                onClick={() => setActiveTab('gpt4')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'gpt4' ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                GPT-4o
              </button>
            </div>
          </div>

          {/* Sample Interactive Content */}
          <div className="space-y-4 px-2 sm:px-4 pb-2">
            
            {/* User Prompt */}
            <div className="flex gap-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
                You
              </div>
              <div className="flex-1">
                <div className="text-xs text-slate-400 font-medium mb-1">User Request</div>
                <p className="text-sm text-slate-200 font-medium">
                  "Write a clean TypeScript React hook for fetching real-time streaming data with automatic retries and exponential backoff."
                </p>
              </div>
            </div>

            {/* AI Responses */}
            {activeTab === 'compare' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Claude 3.5 Sonnet Response */}
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-amber-500/30 relative">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="text-xs font-bold text-white">Claude 3.5 Sonnet</span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">810ms • 100% Type-Safe</span>
                  </div>
                  <pre className="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded-xl overflow-x-auto leading-relaxed border border-slate-800">
{`export function useSSE<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  // Robust retry state logic
  useEffect(() => {
    const es = new EventSource(url);
    es.onmessage = (e) => setData(JSON.parse(e.data));
    return () => es.close();
  }, [url]);
  return { data };
}`}
                  </pre>
                </div>

                {/* GPT-4o Response */}
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-emerald-500/30 relative">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-white">GPT-4o</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">640ms • Optimized</span>
                  </div>
                  <pre className="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded-xl overflow-x-auto leading-relaxed border border-slate-800">
{`export function useRealtimeStream<T>(endpoint: string) {
  const [stream, setStream] = useState<T[]>([]);
  // High speed buffer collection
  const pushChunk = (chunk: T) => setStream(prev => [...prev, chunk]);
  return { stream, pushChunk };
}`}
                  </pre>
                </div>
              </div>
            ) : activeTab === 'claude' ? (
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-amber-500/40">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="text-sm font-bold text-amber-300">Claude 3.5 Sonnet Full Synthesis</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Claude 3.5 Sonnet provides deeper architectural error handling with AbortController cancellation and exponential backoff retry algorithms.
                </p>
              </div>
            ) : (
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-emerald-500/40">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm font-bold text-emerald-300">GPT-4o Full Synthesis</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  GPT-4o focuses on concise memory footprints and fast execution callback triggers for client-side state hydration.
                </p>
              </div>
            )}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

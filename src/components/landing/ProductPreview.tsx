'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Puzzle, Bot, Sparkles, CheckCircle, ArrowRight, MousePointerClick, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export const ProductPreview = () => {
  const [activeTab, setActiveTab] = useState<'webapp' | 'extension'>('webapp');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Monitor className="w-3.5 h-3.5" /> Experience Preview
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for Speed, Beauty & Usability
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A unified interface that scales seamlessly across your desktop web browser and active Chrome toolbar.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="glass-card p-1.5 rounded-2xl border border-slate-800 flex gap-2">
            <button
              onClick={() => setActiveTab('webapp')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'webapp'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" />
              1. Redesigned Web App Interface
            </button>
            <button
              onClick={() => setActiveTab('extension')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'extension'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Puzzle className="w-4 h-4 text-amber-400" />
              2. Chrome Extension Concept
            </button>
          </div>
        </div>

        {/* Preview Container */}
        <div className="glass-panel rounded-3xl border border-slate-800 p-4 sm:p-8 relative overflow-hidden shadow-2xl">
          
          {activeTab === 'webapp' ? (
            <motion.div
              key="webapp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Bot className="w-5 h-5 text-cyan-400" /> Web App Multi-AI Workspace
                  </h3>
                  <p className="text-xs text-slate-400">Side-by-side prompt output stream, code highlight, system prompts, and history sidebar.</p>
                </div>
                <Link
                  href="/app"
                  className="px-4 py-2 text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl flex items-center gap-1.5 shadow-md"
                >
                  Try Live Web App <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Web App UI Mockup Graphic */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
                {/* Window header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-xs font-mono text-slate-400">https://echogpt.live/app</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                      Dual Mode Active
                    </span>
                  </div>
                </div>

                {/* Window Body Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 min-h-[380px]">
                  
                  {/* Mock Sidebar */}
                  <div className="hidden md:block bg-slate-900/60 p-4 border-r border-slate-800/80 space-y-4">
                    <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-xs font-bold text-white shadow-md">
                      + New Multi-AI Chat
                    </button>

                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Recent Chats</div>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-300 font-medium truncate">
                        ⚡ Next.js 15 Server Actions
                      </div>
                      <div className="p-2 rounded-lg hover:bg-slate-800/40 text-slate-400 truncate">
                        🤖 Claude vs DeepSeek Logic
                      </div>
                      <div className="p-2 rounded-lg hover:bg-slate-800/40 text-slate-400 truncate">
                        📄 PDF Paper Summary (Gemini)
                      </div>
                    </div>
                  </div>

                  {/* Mock Main Chat Content */}
                  <div className="md:col-span-3 p-4 sm:p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div className="bg-slate-900 p-3.5 rounded-xl text-xs text-slate-200 border border-slate-800">
                        <strong className="text-cyan-400">Prompt:</strong> Explain the key differences between Tailwind CSS v4 and Tailwind CSS v3 for a Next.js project.
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-slate-900/90 p-3.5 rounded-xl border border-amber-500/30 text-xs">
                          <div className="font-bold text-amber-300 mb-1">Claude 3.5 Sonnet</div>
                          <p className="text-slate-300 text-[11px]">Tailwind v4 introduces dynamic <code className="text-amber-400">@import "tailwindcss";</code> without requiring legacy tailwind.config.js boilerplate.</p>
                        </div>
                        <div className="bg-slate-900/90 p-3.5 rounded-xl border border-emerald-500/30 text-xs">
                          <div className="font-bold text-emerald-300 mb-1">GPT-4o</div>
                          <p className="text-slate-300 text-[11px]">Tailwind v4 delivers faster compilation powered by Rust and Lightning CSS engine, reducing incremental build times by 5x.</p>
                        </div>
                      </div>
                    </div>

                    {/* Mock Input Bar */}
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                      <span className="text-xs text-slate-500">Ask any question to multi-models...</span>
                      <div className="px-3 py-1 bg-cyan-600 rounded-lg text-xs font-bold text-white">Send</div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="extension"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Puzzle className="w-5 h-5 text-amber-400" /> Reimagined Chrome Extension Popup & Overlay
                  </h3>
                  <p className="text-xs text-slate-400">Compact 380px toolbar popup, quick model selector, webpage text highlight action button.</p>
                </div>
                <Link
                  href="/extension"
                  className="px-4 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl flex items-center gap-1.5 shadow-md"
                >
                  Test Extension Sandbox <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Extension UI Graphic */}
              <div className="flex justify-center py-4">
                <div className="w-full max-w-sm bg-slate-950 rounded-2xl border-2 border-amber-500/40 p-4 shadow-2xl shadow-amber-500/10 space-y-4">
                  {/* Extension Top bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                        E
                      </div>
                      <span className="text-xs font-bold text-white">EchoGPT Companion</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Active Tab Connected
                    </span>
                  </div>

                  {/* Active Page Context Box */}
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Current Tab</div>
                    <div className="text-slate-200 font-medium truncate">github.com/facebook/react/pull/28912</div>
                  </div>

                  {/* Action Triggers */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Summarize Tab
                    </button>
                    <button className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold flex items-center gap-2">
                      <MousePointerClick className="w-3.5 h-3.5 text-purple-400" /> Explain Selection
                    </button>
                  </div>

                  {/* Quick Output */}
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                    <span className="text-amber-400 font-bold">Claude 3.5 Sonnet Summary:</span> This PR refactors React DOM hydration listeners to reduce main-thread execution time by 18ms.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};

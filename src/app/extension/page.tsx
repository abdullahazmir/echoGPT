'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Puzzle, Sparkles, Bot, MousePointerClick, SlidersHorizontal, Layout, Zap, Check, Copy, Key, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';
import { AI_MODELS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ExtensionPage() {
  const [activeTab, setActiveTab] = useState<'popup' | 'overlay' | 'actions' | 'settings'>('popup');
  const [selectedModel, setSelectedModel] = useState<string>('claude-3-5-sonnet');
  const [promptText, setPromptText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [simulatedOutput, setSimulatedOutput] = useState<string>(
    'Summarizing active tab (github.com/facebook/react)... \n\nClaude 3.5 Sonnet: This page introduces React 19 features including Server Actions, useOptimistic hook, and automatic memoization via React Compiler.'
  );

  const triggerConfetti = () => {
    confetti({ particleCount: 70, spread: 60 });
  };

  const handleRunAction = (actionName: string) => {
    setSimulatedOutput(`Running "${actionName}" using ${AI_MODELS.find(m => m.id === selectedModel)?.name} on current webpage DOM... \n\nGenerated output: Extracted 3 core technical takeaways and zero security vulnerabilities detected.`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Page Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Puzzle className="w-3.5 h-3.5" /> Task 3 — Chrome Extension Redesign Concept
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            EchoGPT Chrome Extension Experience
          </h1>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Reimagined browser popup UI, floating webpage side-panel, instant context summarization, and quick productivity workflows.
          </p>
        </div>

        {/* Feature Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Puzzle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Sleek Popup UI</h4>
              <p className="text-[11px] text-slate-400">380px compact frame with instant model switcher.</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <MousePointerClick className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Highlight & Prompt</h4>
              <p className="text-[11px] text-slate-400">Highlight text on any site to trigger AI synthesis.</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Side-Panel Overlay</h4>
              <p className="text-[11px] text-slate-400">Injectable side drawer for multi-page research.</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Instant Shortcuts</h4>
              <p className="text-[11px] text-slate-400">Press Alt + E to summon EchoGPT anywhere.</p>
            </div>
          </div>
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="glass-card p-1.5 rounded-2xl border border-slate-800 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('popup')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'popup'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Puzzle className="w-4 h-4" /> Popup UI Sandbox
            </button>
            <button
              onClick={() => setActiveTab('overlay')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'overlay'
                  ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layout className="w-4 h-4" /> Floating Overlay Panel
            </button>
            <button
              onClick={() => setActiveTab('actions')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'actions'
                  ? 'bg-purple-500 text-white font-extrabold shadow-lg shadow-purple-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" /> Quick Productivity Actions
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'settings'
                  ? 'bg-blue-600 text-white font-extrabold shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" /> Extension Settings
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Popup UI Simulation */}
        {activeTab === 'popup' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="text-xs text-slate-400 mb-3 font-mono">
              Live Preview of Chrome Extension Toolbar Popup Window (Width: 380px)
            </div>

            {/* Simulated Chrome Extension Popup Box */}
            <div className="w-full max-w-sm glass-panel rounded-3xl border-2 border-amber-500/40 p-5 shadow-2xl shadow-amber-500/10 space-y-4 text-left">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 p-[1.5px]">
                    <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">EchoGPT Companion</h3>
                    <p className="text-[9px] text-slate-400">v2.4 Chrome Extension</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    DOM Connected
                  </span>
                </div>
              </div>

              {/* Active Webpage Context Bar */}
              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                  <span>Target Page</span>
                  <span className="text-cyan-400">Active Tab</span>
                </div>
                <div className="text-xs text-slate-200 font-semibold truncate">
                  https://github.com/facebook/react/pull/28912
                </div>
              </div>

              {/* AI Model Selector Pills */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Select AI Engine
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {AI_MODELS.slice(0, 4).map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModel(m.id)}
                      className={`p-2 rounded-xl text-[11px] font-bold flex items-center gap-2 transition-all ${
                        selectedModel === m.id
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.iconColor }} />
                      <span className="truncate">{m.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt Input Box */}
              <div className="space-y-2">
                <textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Ask anything about this webpage context..."
                  rows={2}
                  className="w-full glass-input rounded-xl p-2.5 text-xs text-slate-100 focus:outline-none placeholder:text-slate-500 resize-none"
                />
                <button
                  onClick={() => handleRunAction('Custom Page Prompt')}
                  className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Zap className="w-3.5 h-3.5 fill-slate-950" />
                  Run Model on Active Tab
                </button>
              </div>

              {/* Simulated Output Output Box */}
              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold text-amber-400">
                  <span>AI Response Output</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(simulatedOutput);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-wrap max-h-32 overflow-y-auto">
                  {simulatedOutput}
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* Tab 2: Floating Overlay Panel */}
        {activeTab === 'overlay' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Layout className="w-6 h-6 text-cyan-400" /> Webpage Side-Panel Injector Overlay
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  EchoGPT renders a non-intrusive floating sidebar directly inside target browser tabs for continuous multi-page research.
                </p>
              </div>
              <button
                onClick={triggerConfetti}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
              >
                Test Overlay Trigger
              </button>
            </div>

            {/* Simulated Webpage Container with Overlay Panel */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden min-h-[400px] flex relative shadow-inner">
              {/* Webpage Content Representation */}
              <div className="flex-1 p-6 space-y-4 opacity-70">
                <div className="h-6 bg-slate-800 rounded-md w-3/4" />
                <div className="space-y-2">
                  <div className="h-3 bg-slate-900 rounded w-full" />
                  <div className="h-3 bg-slate-900 rounded w-5/6" />
                  <div className="h-3 bg-slate-900 rounded w-4/5" />
                  <div className="h-3 bg-slate-900 rounded w-full" />
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-cyan-500/30 text-xs text-cyan-300">
                  Highlighted Paragraph: "React 19 Server Actions allow developers to pass async functions down to client components with optimistic UI states."
                </div>
              </div>

              {/* Injected Side Panel Overlay */}
              <div className="w-80 glass-panel border-l border-cyan-500/40 p-4 flex flex-col justify-between shadow-2xl relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> EchoGPT Assistant
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">Side Panel</span>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl text-xs space-y-2 border border-slate-800">
                    <div className="font-bold text-amber-300">Claude 3.5 Sonnet Analysis:</div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Server Actions automatically serialize form payloads. Optimistic states eliminate wait spinners during API round-trips.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <input
                    type="text"
                    placeholder="Ask follow-up..."
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs text-slate-100 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Quick Productivity Actions */}
        {activeTab === 'actions' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'Summarize Active Webpage', desc: 'Synthesize long articles into 3 bullet points.', icon: Zap, color: 'text-amber-400' },
              { title: 'Explain Selected Text', desc: 'Simplify complex jargon or research paper formulas.', icon: MousePointerClick, color: 'text-cyan-400' },
              { title: 'Extract Code Blocks', desc: 'Extract clean code snippets from articles & GitHub.', icon: Bot, color: 'text-purple-400' },
              { title: 'Translate Web Context', desc: 'Instant multi-language translation using GPT-4o.', icon: Sparkles, color: 'text-emerald-400' },
              { title: 'Security & Bug Auditor', desc: 'Analyze open PR code for vulnerabilities.', icon: SlidersHorizontal, color: 'text-rose-400' },
              { title: 'Export Session to PDF', desc: 'Download research notes with one click.', icon: Copy, color: 'text-blue-400' },
            ].map((action, idx) => {
              const IconComp = action.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleRunAction(action.title)}
                  className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800 cursor-pointer space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <IconComp className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{action.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{action.desc}</p>
                  </div>
                  <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1 pt-2">
                    <span>Trigger Action</span> →
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Tab 4: Extension Settings */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="glass-panel max-w-2xl mx-auto p-8 rounded-3xl border border-slate-800 space-y-6 text-left"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <SlidersHorizontal className="w-5 h-5 text-amber-400" /> Chrome Extension Configuration
            </h3>

            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-200">Default AI Model for Quick Popup</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl glass-input text-slate-100 bg-slate-900 focus:outline-none">
                  <option value="claude-3-5-sonnet">Claude 3.5 Sonnet (Recommended for Code)</option>
                  <option value="gpt-4o">GPT-4o (Recommended for Speed)</option>
                  <option value="gemini-1-5-pro">Gemini 1.5 Pro (Recommended for Long Text)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-200">Global Activation Keyboard Shortcut</label>
                <input
                  type="text"
                  readOnly
                  value="Alt + E"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-cyan-300 font-mono focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-200">Floating Web Overlay Behavior</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-slate-300">
                    <input type="checkbox" defaultChecked className="rounded accent-amber-400" />
                    <span>Automatically display floating action button when text is selected on webpages</span>
                  </label>
                  <label className="flex items-center gap-2 text-slate-300">
                    <input type="checkbox" defaultChecked className="rounded accent-amber-400" />
                    <span>Sync prompt history with EchoGPT Web App workspace</span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </main>

      <Footer />
    </div>
  );
}

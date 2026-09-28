'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Layers, Puzzle, ShieldCheck, Cpu, Code2, Sparkles, Zap, Columns2, FileSpreadsheet } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Columns2,
      title: 'Dual & Multi AI Comparison',
      description: 'Run queries across GPT-4o, Claude 3.5 Sonnet, and DeepSeek R1 simultaneously to evaluate code quality, reasoning accuracy, and speed.',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
    },
    {
      icon: Puzzle,
      title: 'Chrome Extension Overlay',
      description: 'Highlight text on any website (GitHub, research papers, news) to activate the floating overlay for instant summarization and translation.',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
    },
    {
      icon: Cpu,
      title: '1M+ Token Context Memory',
      description: 'Harness Google Gemini 1.5 Pro’s massive context window to digest entire codebases, research papers, and technical books in one query.',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
    },
    {
      icon: Code2,
      title: 'Artifacts & Code Execution',
      description: 'Render clean markdown, syntax-highlighted code blocks, tables, and export responses directly to JSON, Markdown, or PDF.',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
    },
    {
      icon: ShieldCheck,
      title: 'Privacy-First & BYOK',
      description: 'Zero data retention guarantee. Connect your own API keys for raw provider pricing with enterprise-grade encryption.',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
    },
    {
      icon: Zap,
      title: 'Sub-Second Latency Pipeline',
      description: 'Optimized serverless edge streaming delivers instant real-time tokens without client lag or heavy bundle overhead.',
      color: 'from-rose-500 to-red-600',
      textColor: 'text-rose-400',
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Developers & AI Power Users
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Stop switching between tabs and separate subscriptions. EchoGPT consolidates every leading AI frontier model into one fluid workflow.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Background Accent Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} p-[1px] mb-5 shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                      <IconComponent className={`w-6 h-6 ${feature.textColor}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span>Explore in Web App</span> →
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

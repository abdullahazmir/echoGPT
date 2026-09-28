'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AI_MODELS } from '@/lib/data';
import { AIModel } from '@/types';
import { Bot, Check, Zap, Code, Brain, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ModelsShowcase = () => {
  const [selectedModel, setSelectedModel] = useState<AIModel>(AI_MODELS[1]); // Claude 3.5 Sonnet default

  return (
    <section id="models" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" /> Frontier Model Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Supported World-Class AI Engines
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Switch between models on the fly or combine them in dual-mode to get the exact strengths of each AI provider.
          </p>
        </div>

        {/* Model Tabs Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {AI_MODELS.map((model) => {
            const isSelected = selectedModel.id === model.id;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`px-5 py-3 rounded-2xl text-sm font-bold flex items-center gap-3 transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500 text-white shadow-xl shadow-cyan-500/20 scale-105'
                    : 'glass-card border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: model.iconColor }}
                />
                <span>{model.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                  {model.provider}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Model Details Card */}
        <motion.div
          key={selectedModel.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Header background accent */}
          <div
            className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${selectedModel.gradient} opacity-10 blur-3xl pointer-events-none`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info & Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
                  {selectedModel.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Provider: <strong className="text-white">{selectedModel.provider}</strong>
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Context Window: <strong className="text-cyan-300">{selectedModel.contextWindow}</strong>
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                {selectedModel.name}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {selectedModel.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/app"
                  className="px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 flex items-center gap-2"
                >
                  Prompt {selectedModel.name} Live
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/extension"
                  className="px-6 py-3 text-sm font-bold text-slate-300 glass-card border border-slate-700 hover:text-white hover:border-slate-600 rounded-xl flex items-center gap-2"
                >
                  Use in Chrome Extension
                </Link>
              </div>
            </div>

            {/* Ratings & Metrics */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-800 pb-2">
                Benchmark Ratings (Out of 5.0)
              </h4>

              {/* Reasoning */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Brain className="w-4 h-4 text-purple-400" /> Complex Reasoning
                  </span>
                  <span className="text-purple-400 font-mono">{selectedModel.reasoningRating} / 5.0</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-700"
                    style={{ width: `${(selectedModel.reasoningRating / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Coding */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Code className="w-4 h-4 text-cyan-400" /> Coding & Architecture
                  </span>
                  <span className="text-cyan-400 font-mono">{selectedModel.codingRating} / 5.0</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
                    style={{ width: `${(selectedModel.codingRating / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Speed */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400" /> Response Speed
                  </span>
                  <span className="text-amber-400 font-mono">{selectedModel.speedRating} / 5.0</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-700"
                    style={{ width: `${(selectedModel.speedRating / 5) * 100}%` }}
                  />
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

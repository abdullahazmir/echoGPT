'use client';

import React, { useState } from 'react';
import { X, Key, ShieldCheck, Cpu, Sliders, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [openAIKey, setOpenAIKey] = useState('');
  const [anthropicKey, setAnthropicKey] = useState('');
  const [geminiKey, setGeminiKey] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('You are an expert software engineer and AI orchestrator assistant.');
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl glass-panel rounded-3xl border border-slate-800 p-6 shadow-2xl space-y-6 relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">EchoGPT Preferences & API Keys</h3>
              <p className="text-xs text-slate-400">Configure BYOK custom keys and system behavior.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-xs">
          
          {/* OpenAI Key */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-200 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-emerald-400" /> OpenAI API Key (GPT-4o)
            </label>
            <input
              type="password"
              placeholder="sk-proj-..."
              value={openAIKey}
              onChange={(e) => setOpenAIKey(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-slate-100 focus:outline-none font-mono"
            />
          </div>

          {/* Anthropic Key */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-200 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-amber-400" /> Anthropic API Key (Claude 3.5 Sonnet)
            </label>
            <input
              type="password"
              placeholder="sk-ant-..."
              value={anthropicKey}
              onChange={(e) => setAnthropicKey(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-slate-100 focus:outline-none font-mono"
            />
          </div>

          {/* System Prompt Override */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-200">Global System Prompt Instruction</label>
            <textarea
              rows={3}
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-slate-100 focus:outline-none font-sans"
            />
          </div>

          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>API keys are stored securely in local state and client memory only. Zero backend retention.</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 flex items-center gap-1.5 shadow-md"
          >
            {saved ? <Check className="w-4 h-4 text-emerald-300" /> : null}
            <span>{saved ? 'Saved!' : 'Save Preferences'}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

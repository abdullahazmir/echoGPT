'use client';

import React from 'react';
import { AIModel } from '@/types';
import { AI_MODELS } from '@/lib/data';
import { Columns2, Bot, Download, Trash2, Settings, Sparkles, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeModelId: string;
  onSelectModel: (modelId: string) => void;
  isCompareMode: boolean;
  onToggleCompareMode: () => void;
  onClearChat: () => void;
  onExportChat: () => void;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeModelId,
  onSelectModel,
  isCompareMode,
  onToggleCompareMode,
  onClearChat,
  onExportChat,
  onOpenSettings,
}) => {
  const currentModel = AI_MODELS.find((m) => m.id === activeModelId) || AI_MODELS[0];

  return (
    <header className="h-16 px-4 sm:px-6 glass-panel border-b border-slate-800 flex items-center justify-between shrink-0">
      
      {/* Active Model Info & Dropdown */}
      <div className="flex items-center gap-3">
        <div className="relative group">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-white cursor-pointer hover:border-slate-700 transition-colors">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: currentModel.iconColor }}
            />
            <span>{currentModel.name}</span>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
              {currentModel.provider}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Model Selector Dropdown Menu */}
          <div className="absolute top-full left-0 mt-1 w-64 glass-panel border border-slate-800 rounded-2xl p-2 hidden group-hover:block shadow-2xl z-30 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
              Select Primary AI Engine
            </div>
            {AI_MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => onSelectModel(m.id)}
                className={`w-full p-2 rounded-xl text-xs font-semibold flex items-center justify-between text-left transition-colors ${
                  activeModelId === m.id ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.iconColor }} />
                  <span>{m.name}</span>
                </div>
                <span className="text-[10px] text-slate-500">{m.badge}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dual Mode Active Status Indicator */}
        {isCompareMode && (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold animate-pulse">
            <Columns2 className="w-3.5 h-3.5" />
            Compare Mode (Dual AI Active)
          </span>
        )}
      </div>

      {/* Mode Switcher & Action Tools */}
      <div className="flex items-center gap-2">
        
        {/* Compare Mode Toggle Switch */}
        <button
          onClick={onToggleCompareMode}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            isCompareMode
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
          title="Toggle side-by-side Dual Model Comparison Mode"
        >
          <Columns2 className="w-4 h-4" />
          <span className="hidden sm:inline">Compare Mode</span>
        </button>

        {/* Export Button */}
        <button
          onClick={onExportChat}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          title="Export Conversation Artifact (Markdown / JSON)"
        >
          <Download className="w-4 h-4" />
        </button>

        {/* Clear Chat Button */}
        <button
          onClick={onClearChat}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-slate-700 transition-colors"
          title="Clear Chat Messages"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        {/* Settings Toggle */}
        <button
          onClick={onOpenSettings}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
          title="Settings & API Keys"
        >
          <Settings className="w-4 h-4" />
        </button>

      </div>
    </header>
  );
};

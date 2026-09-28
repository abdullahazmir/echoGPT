'use client';

import React, { useState } from 'react';
import { AIModel } from '@/types';
import { AI_MODELS } from '@/lib/data';
import { Send, Paperclip, Sparkles, Columns2, ChevronUp, Mic, X } from 'lucide-react';

interface PromptDockProps {
  onSendMessage: (prompt: string) => void;
  isGenerating: boolean;
  activeModelId: string;
  onSelectModel: (modelId: string) => void;
  isCompareMode: boolean;
  onToggleCompareMode: () => void;
}

export const PromptDock: React.FC<PromptDockProps> = ({
  onSendMessage,
  isGenerating,
  activeModelId,
  onSelectModel,
  isCompareMode,
  onToggleCompareMode,
}) => {
  const [prompt, setPrompt] = useState('');
  const [attachedFile, setAttachedFile] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;
    onSendMessage(prompt);
    setPrompt('');
    setAttachedFile(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const currentModel = AI_MODELS.find((m) => m.id === activeModelId) || AI_MODELS[0];

  return (
    <div className="p-4 glass-panel border-t border-slate-800 shrink-0">
      <div className="max-w-4xl mx-auto space-y-2">
        
        {/* Attachment Pill if present */}
        {attachedFile && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <Paperclip className="w-3.5 h-3.5 text-cyan-400" />
            <span>{attachedFile}</span>
            <button onClick={() => setAttachedFile(null)} className="text-slate-500 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Input Box Form */}
        <form onSubmit={handleSubmit} className="relative glass-input rounded-2xl p-2 sm:p-3 border border-slate-800">
          
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              isCompareMode
                ? "Ask a question to compare Claude 3.5 Sonnet and GPT-4o side-by-side..."
                : `Prompt ${currentModel.name} (Press Enter to send)...`
            }
            rows={2}
            className="w-full bg-transparent text-slate-100 text-sm focus:outline-none resize-none placeholder:text-slate-500 px-2"
          />

          {/* Bottom Controls Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 mt-1">
            
            <div className="flex items-center gap-2">
              {/* Attachment Mock */}
              <button
                type="button"
                onClick={() => setAttachedFile('architecture_spec.pdf')}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                title="Attach Document / Codebase Context"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              {/* Compare Mode Toggle Quick Pill */}
              <button
                type="button"
                onClick={onToggleCompareMode}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isCompareMode
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Columns2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isCompareMode ? 'Compare ON' : 'Dual Compare'}</span>
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!prompt.trim() || isGenerating}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

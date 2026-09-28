'use client';

import React, { useState } from 'react';
import { ChatMessage, AIModel } from '@/types';
import { AI_MODELS } from '@/lib/data';
import { Bot, User, Copy, Check, RefreshCw, Zap, Sparkles, Terminal, Code, MessageSquareCode } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatStreamProps {
  messages: ChatMessage[];
  isGenerating: boolean;
  activeModelId: string;
  isCompareMode: boolean;
  onSendPresetPrompt: (prompt: string) => void;
}

export const ChatStream: React.FC<ChatStreamProps> = ({
  messages,
  isGenerating,
  activeModelId,
  isCompareMode,
  onSendPresetPrompt,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentModel = AI_MODELS.find((m) => m.id === activeModelId) || AI_MODELS[0];

  const presetPrompts = [
    'Write a Next.js 15 Server Action for user authentication with state handling.',
    'Compare Claude 3.5 Sonnet and DeepSeek R1 for algorithmic problem solving.',
    'Summarize how EchoGPT Chrome Extension overlay interacts with active DOM elements.',
    'Refactor a React useEffect data fetching loop into custom SWR hook.'
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      
      {/* Empty State / Quick Suggestions */}
      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8 py-12">
          
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-2xl shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-white">
              Welcome to <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">EchoGPT Multi-AI Hub</span>
            </h2>
            <p className="text-sm text-slate-400">
              Orchestrate <strong className="text-white">{currentModel.name}</strong> or enable <strong className="text-cyan-400">Compare Mode</strong> to run queries across multiple frontier models simultaneously.
            </p>
          </div>

          {/* Quick Preset Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
            {presetPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => onSendPresetPrompt(prompt)}
                className="p-3.5 rounded-2xl glass-card glass-card-hover border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5 transition-all group"
              >
                <MessageSquareCode className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">{prompt}</span>
              </button>
            ))}
          </div>

        </div>
      )}

      {/* Messages Stream */}
      {messages.map((msg) => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex flex-col space-y-2 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
        >
          
          {/* User Message Bubble */}
          {msg.sender === 'user' ? (
            <div className="max-w-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4 rounded-3xl rounded-tr-sm shadow-lg shadow-cyan-600/10 text-sm leading-relaxed font-medium">
              {msg.content}
            </div>
          ) : (
            /* Assistant Response (Single vs Multi-Compare Mode) */
            <div className="w-full max-w-4xl glass-panel p-4 sm:p-6 rounded-3xl border border-slate-800 space-y-4">
              
              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">
                    {msg.isComparing ? 'Multi-Model Comparative Synthesis' : (AI_MODELS.find(m => m.id === msg.modelId)?.name || currentModel.name)}
                  </span>
                  {msg.latency && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-400" /> {msg.latency}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => copyToClipboard(msg.content, msg.id)}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                >
                  {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Response Body (Compare Mode Grid vs Standard View) */}
              {msg.isComparing && msg.modelResponses ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(msg.modelResponses).map(([mId, responseText]) => {
                    const modelObj = AI_MODELS.find((m) => m.id === mId);
                    return (
                      <div key={mId} className="bg-slate-950 p-4 rounded-2xl border border-slate-800/90 space-y-2">
                        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: modelObj?.iconColor || '#3b82f6' }} />
                          <span className="text-xs font-bold text-white">{modelObj?.name || mId}</span>
                          <span className="text-[10px] text-slate-500 font-mono ml-auto">{modelObj?.provider}</span>
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap font-sans pt-1">
                          {responseText}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap font-sans">
                  {msg.content}
                </div>
              )}

            </div>
          )}

        </motion.div>
      ))}

      {/* Typing Spinner Simulation */}
      {isGenerating && (
        <div className="flex items-center gap-3 p-4 glass-panel rounded-2xl border border-slate-800 max-w-md">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center animate-spin">
            <RefreshCw className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold text-slate-300 animate-pulse">
            Generating real-time multi-AI response...
          </span>
        </div>
      )}

    </div>
  );
};

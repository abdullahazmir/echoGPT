'use client';

import React from 'react';
import Link from 'next/link';
import { Conversation, AIModel } from '@/types';
import { AI_MODELS } from '@/lib/data';
import { Plus, MessageSquare, Trash2, Settings, Sparkles, ChevronLeft, ChevronRight, Bot, Columns2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  conversations: Conversation[];
  activeConvId: string;
  onSelectConv: (id: string) => void;
  onNewChat: () => void;
  onDeleteConv: (id: string) => void;
  selectedModelId: string;
  onSelectModel: (modelId: string) => void;
  onOpenSettings: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  activeConvId,
  onSelectConv,
  onNewChat,
  onDeleteConv,
  selectedModelId,
  onSelectModel,
  onOpenSettings,
  isCollapsed,
  onToggleCollapse,
}) => {
  return (
    <aside
      className={`h-full glass-panel border-r border-slate-800 flex flex-col justify-between transition-all duration-300 relative z-20 ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Top Header & New Chat */}
      <div className="p-4 space-y-4">
        
        {/* Brand & Collapse Toggle */}
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[6.5px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                Echo<span className="text-cyan-400">GPT</span>
              </span>
            </Link>
          )}

          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors mx-auto"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* New Chat Button */}
        <button
          onClick={onNewChat}
          className={`w-full py-3 rounded-2xl font-bold text-xs bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all ${
            isCollapsed ? 'px-0' : 'px-4'
          }`}
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          {!isCollapsed && <span>New Multi-AI Chat</span>}
        </button>

        {/* AI Model Selector Pills (Sidebar Quick Switcher) */}
        {!isCollapsed && (
          <div className="space-y-2 pt-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">
              Active Primary AI
            </div>
            <div className="grid grid-cols-1 gap-1.5 max-h-36 overflow-y-auto pr-1">
              {AI_MODELS.map((model) => {
                const isActive = selectedModelId === model.id;
                return (
                  <button
                    key={model.id}
                    onClick={() => onSelectModel(model.id)}
                    className={`w-full p-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-slate-800 text-white border border-cyan-500/40 shadow-sm'
                        : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: model.iconColor }}
                      />
                      <span className="truncate">{model.name}</span>
                    </div>
                    <span className="text-[9px] text-slate-500 font-mono">{model.provider}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        {!isCollapsed && (
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 mb-2">
            History & Sessions ({conversations.length})
          </div>
        )}

        {conversations.map((conv) => {
          const isActive = activeConvId === conv.id;
          return (
            <div
              key={conv.id}
              onClick={() => onSelectConv(conv.id)}
              className={`group w-full p-2.5 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/15 to-blue-600/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <MessageSquare className={`w-4 h-4 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                {!isCollapsed && (
                  <div className="truncate text-xs">
                    <div className="truncate">{conv.title}</div>
                    <div className="text-[10px] text-slate-500">{conv.lastUpdated}</div>
                  </div>
                )}
              </div>

              {!isCollapsed && conversations.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteConv(conv.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-slate-500 hover:text-rose-400 transition-opacity"
                  title="Delete Chat"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Settings & Footer */}
      <div className="p-3 border-t border-slate-800/80 space-y-2">
        <button
          onClick={onOpenSettings}
          className={`w-full p-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center transition-colors ${
            isCollapsed ? 'justify-center' : 'justify-start gap-2.5'
          }`}
        >
          <Settings className="w-4 h-4 text-cyan-400" />
          {!isCollapsed && <span>API Keys & Settings</span>}
        </button>

        {!isCollapsed && (
          <div className="text-[10px] text-center text-slate-500 pt-1">
            EchoGPT v2.0 • Multi-AI Engine
          </div>
        )}
      </div>
    </aside>
  );
};

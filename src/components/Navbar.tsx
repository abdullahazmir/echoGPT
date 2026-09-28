'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Bot, Puzzle, Menu, X, ArrowRight, MessageSquareCode, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-gray-800/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Echo<span className="text-cyan-400">GPT</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
                Multi-AI Ecosystem
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
          <Link
            href="/"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              isCurrent('/') 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Landing Page
          </Link>
          <Link
            href="/app"
            className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all ${
              isCurrent('/app') 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Bot className="w-4 h-4 text-cyan-400" />
            Web App
          </Link>
          <Link
            href="/extension"
            className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all ${
              isCurrent('/extension') 
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Puzzle className="w-4 h-4 text-amber-400" />
            Chrome Extension
          </Link>
          
          {pathname === '/' && (
            <>
              <a href="#models" className="px-3 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40">
                Models
              </a>
              <a href="#features" className="px-3 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40">
                Features
              </a>
              <a href="#pricing" className="px-3 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40">
                Pricing
              </a>
              <a href="#faq" className="px-3 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40">
                FAQ
              </a>
            </>
          )}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/extension"
            className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700/80 hover:border-amber-500/50 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 flex items-center gap-2 transition-all shadow-sm"
          >
            <Puzzle className="w-3.5 h-3.5 text-amber-400" />
            Add Extension
          </Link>
          <Link
            href="/app"
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-xl flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all group"
          >
            Launch Web App
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-xl bg-slate-800/60 border border-slate-700/50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 flex flex-col gap-3"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3 rounded-xl text-sm font-medium flex items-center gap-3 ${
                isCurrent('/') ? 'bg-blue-600/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              Landing Page
            </Link>
            <Link
              href="/app"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3 rounded-xl text-sm font-medium flex items-center gap-3 ${
                isCurrent('/app') ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              EchoGPT Web App Demo
            </Link>
            <Link
              href="/extension"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3 rounded-xl text-sm font-medium flex items-center gap-3 ${
                isCurrent('/extension') ? 'bg-amber-600/20 text-amber-300 border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <Puzzle className="w-4 h-4 text-amber-400" />
              Chrome Extension Sandbox
            </Link>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <Link
                href="/app"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20"
              >
                Launch Web App
              </Link>
              <Link
                href="/extension"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center gap-2"
              >
                <Puzzle className="w-4 h-4 text-amber-400" />
                Add Chrome Extension
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

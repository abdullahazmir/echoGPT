import React from 'react';
import Link from 'next/link';
import { Sparkles, Code2, Globe, Puzzle, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        
        {/* Brand & Mission */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px]">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              Echo<span className="text-cyan-400">GPT</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Reimagining AI productivity. Connect, compare, and command top-tier AI models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, DeepSeek R1) in one unified Web App and Chrome Extension.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors">
              <Code2 className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors">
              <Globe className="w-4 h-4 text-cyan-400" />
            </a>
            <a href="https://chromewebstore.google.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-amber-500/40 transition-colors">
              <Puzzle className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Product Navigation */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Ecosystem</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors">Single-Page Website</Link>
            </li>
            <li>
              <Link href="/app" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Web App Interface
                <span className="px-1.5 py-0.5 text-[9px] bg-cyan-500/10 text-cyan-400 rounded font-semibold">Live</span>
              </Link>
            </li>
            <li>
              <Link href="/extension" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                Chrome Extension Sandbox
                <span className="px-1.5 py-0.5 text-[9px] bg-amber-500/10 text-amber-400 rounded font-semibold">Concept</span>
              </Link>
            </li>
            <li>
              <a href="#models" className="hover:text-cyan-400 transition-colors">Supported AI Models</a>
            </li>
          </ul>
        </div>

        {/* Resources & Links */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="https://echogpt.live/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                Original EchoGPT Site <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                Chrome Web Store <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>

        {/* Assignment & Legal */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Assignment Info</h4>
          <div className="space-y-3 text-xs bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
            <div className="text-slate-300 font-semibold">AppifyDevs SWE Internship</div>
            <div className="text-slate-400">Practical Frontend Assignment Submission</div>
            <div className="flex items-center gap-1 text-emerald-400 font-mono text-[11px] pt-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Fully Responsive & Compliant
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} EchoGPT Ecosystem Redesign. Crafted for AppifyDevs Candidate Review.</p>
        <div className="flex items-center gap-1 text-slate-400">
          Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using Next.js, Tailwind CSS & Framer Motion
        </div>
      </div>
    </footer>
  );
};

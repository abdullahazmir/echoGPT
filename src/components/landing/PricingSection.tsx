'use client';

import React, { useState } from 'react';
import { PRICING_PLANS } from '@/lib/data';
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import Link from 'next/link';

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" /> Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple Plans for Every AI Workflow
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Start free with zero API key required, or upgrade for unlimited multi-model streaming & team features.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 rounded-full bg-slate-800 p-1 relative border border-slate-700 transition-colors"
            >
              <div
                className={`w-6 h-6 rounded-full bg-cyan-400 transition-transform ${
                  isYearly ? 'translate-x-6 bg-emerald-400' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isYearly ? 'text-white' : 'text-slate-400'}`}>
              Yearly Billing
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`glass-card p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-cyan-500 bg-slate-900/90 shadow-2xl shadow-cyan-500/20 scale-105 z-10'
                    : 'border-slate-800 hover:border-slate-700 bg-slate-900/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-extrabold text-white uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{plan.description}</p>
                    </div>
                  </div>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white">
                        ${price}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">
                        / month {isYearly && '(billed annually)'}
                      </span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3 text-xs text-slate-300 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href="/app"
                    onClick={triggerConfetti}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 shadow-cyan-500/30'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

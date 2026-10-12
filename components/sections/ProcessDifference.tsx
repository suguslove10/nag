"use client";

import React from "react";
import { X, Check, Target, BarChart2, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ProcessDifference() {
  return (
    <section className="py-12 sm:py-16 bg-[#0D3D47] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, #FDFCF5 0px, #FDFCF5 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, #FDFCF5 0px, #FDFCF5 1px, transparent 1px, transparent 30px)'
      }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4782A] mb-6 inline-block">
                The Difference is the Process
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Stop trying to predict every move.
                <br />
                <span className="text-[#93A7CB] font-normal">
                  Learn to read what the market is showing you.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[#B8C5D0] text-base leading-relaxed mb-6">
                Markets don't reward random predictions. They reward preparation, context, and disciplined execution.
              </p>
              <p className="text-[#B8C5D0] text-base leading-relaxed mb-6">
                <span className="text-[#D4782A] font-bold">The Capital Market</span> teaches traders to understand how liquidity, structure, and order flow interact across NSE and BSE — then turn that understanding into a repeatable trading process.
              </p>
              <p className="text-[#B8C5D0] text-base leading-relaxed">
                Learn with mentors who actively study and trade the same markets they teach, using real setups, structured analysis, and data-backed review.
              </p>
            </Reveal>
          </div>

          {/* Right Column - Comparison Card */}
          <Reveal delay={0.1}>
            <div className="bg-[#13515D] rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-8 mb-10">
                {/* Guessing Column */}
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#93A7CB] mb-4 inline-block">
                      Guessing
                    </span>
                    <div className="h-32 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <polyline
                          points="0,50 30,30 60,70 90,20 120,60 150,40 180,80 200,30"
                          fill="none"
                          stroke="#6B7280"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-[#93A7CB] text-xs">
                      <X className="w-4 h-4 shrink-0 mt-0.5 text-red-400" strokeWidth={2} />
                      <span>Reacting after the move.</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#93A7CB] text-xs">
                      <X className="w-4 h-4 shrink-0 mt-0.5 text-red-400" strokeWidth={2} />
                      <span>Chasing candles.</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#93A7CB] text-xs">
                      <X className="w-4 h-4 shrink-0 mt-0.5 text-red-400" strokeWidth={2} />
                      <span>Entering without context.</span>
                    </div>
                  </div>
                </div>

                {/* Structure Column */}
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D4782A] mb-4 inline-block">
                      Structure
                    </span>
                    <div className="h-32 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <polyline
                          points="0,80 40,80 40,60 80,60 80,40 120,40 120,30 160,30 160,20 200,20"
                          fill="none"
                          stroke="#D4782A"
                          strokeWidth="3"
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-[#E5EDEE] text-xs">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#6EE7B7]" strokeWidth={2.5} />
                      <span>Reading liquidity before the move.</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#E5EDEE] text-xs">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#6EE7B7]" strokeWidth={2.5} />
                      <span>Understanding imbalance and intent.</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#E5EDEE] text-xs">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#6EE7B7]" strokeWidth={2.5} />
                      <span>Executing with a defined plan.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote section */}
              <div className="border-t border-white/10 pt-6 mb-8">
                <blockquote className="text-white text-base leading-relaxed">
                  <span className="text-[#D4782A] text-3xl leading-none">"</span>
                  {" "}We don't teach you to predict the market. We teach you how to prepare, read, and respond to it.
                </blockquote>
              </div>


            </div>
          </Reveal>

          {/* Full Width 3 Feature Cards Spanning Entire Right & Left Space */}
          <div className="lg:col-span-2 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delay={0.15} className="h-full">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#D4782A]/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-[#D4782A]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1.5">Precision Execution</h3>
                    <p className="text-[#93A7CB] text-xs leading-relaxed">
                      Build entries around liquidity and market structure — not indicator overload.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="h-full">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#CBA35C]/20 flex items-center justify-center shrink-0">
                    <BarChart2 className="w-5 h-5 text-[#CBA35C]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1.5">Data-Driven Method</h3>
                    <p className="text-[#93A7CB] text-xs leading-relaxed">
                      Analyse every setup. Track the decision. Review the outcome. Improve the process.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25} className="h-full">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#7A8C5F]/20 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#7A8C5F]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1.5">Live Market Mentorship</h3>
                    <p className="text-[#93A7CB] text-xs leading-relaxed">
                      Learn alongside mentors who actively follow the markets and break down real trading scenarios.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


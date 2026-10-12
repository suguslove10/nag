"use client";

import React from "react";
import { Crosshair, Quote, Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function LivePractice() {
  return (
    <section id="live-practice" className="py-12 sm:py-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stop-Hunt Detection - Clean White Card */}
          <Reveal>
            <div className="rounded-[28px] bg-white p-10 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              
              {/* Header - Exact spacing and styling */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4782A]/10 to-[#CBA35C]/10 flex items-center justify-center">
                    <Crosshair className="w-5 h-5 text-[#D4782A]" strokeWidth={2.5} />
                  </div>
                  <span className="text-base font-bold tracking-[0.02em] text-[#0f4c5c] uppercase">
                    Stop-Hunt Detection — Active
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              </div>

              {/* Chart Container - Exact beige background */}
              <div className="relative h-[280px] mb-8 bg-[#faf8f3] rounded-[24px] p-8 overflow-hidden">
                
                {/* Radar Indicator - Top Left Corner */}
                <div className="absolute top-8 left-8 w-[58px] h-[58px]">
                  <div className="relative w-full h-full">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-[#13515D]/15" />
                    {/* Orbiting dots */}
                    <div className="absolute w-2 h-2 rounded-full bg-[#D4782A] top-1 left-[26px]" />
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-[#CBA35C] bottom-2 right-2" />
                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#D4782A]" />
                  </div>
                </div>

                {/* Volume Bars Container */}
                <div className="absolute inset-x-8 bottom-8 top-24 flex items-end justify-center gap-[2.5px]">
                  {[
                    { h: 70, c: 'red' }, { h: 120, c: 'green' }, { h: 95, c: 'green' }, { h: 80, c: 'green' },
                    { h: 155, c: 'green' }, { h: 105, c: 'green' }, { h: 130, c: 'red' }, { h: 90, c: 'red' },
                    { h: 75, c: 'green' }, { h: 165, c: 'red' }, { h: 140, c: 'red' }, { h: 85, c: 'red' },
                    { h: 180, c: 'green' }, { h: 110, c: 'green' }, { h: 95, c: 'red' }, { h: 185, c: 'red' },
                    { h: 145, c: 'green' }, { h: 75, c: 'green' }, { h: 205, c: 'red' }, { h: 215, c: 'red' },
                    { h: 165, c: 'green' }, { h: 125, c: 'green' }, { h: 85, c: 'green' }, { h: 155, c: 'green' },
                    { h: 175, c: 'green' }, { h: 135, c: 'red' }, { h: 195, c: 'red' }, { h: 165, c: 'green' },
                    { h: 145, c: 'red' }, { h: 185, c: 'green' }, { h: 135, c: 'red' }, { h: 175, c: 'green' }
                  ].map((bar, i) => (
                    <div 
                      key={i} 
                      className="flex-1 rounded-t-[2px]"
                      style={{ 
                        height: `${bar.h}px`,
                        maxHeight: '100%',
                        backgroundColor: bar.c === 'green' ? '#16a34a' : '#dc2626'
                      }}
                    />
                  ))}
                </div>

                {/* Liquidity Sweep Line - Orange Dashed */}
                <svg className="absolute inset-x-8 bottom-8 top-24 pointer-events-none" viewBox="0 0 320 180" preserveAspectRatio="none">
                  <path 
                    d="M 10,140 L 40,130 L 70,115 L 100,105 L 130,95 L 160,85 L 190,75 L 220,60 L 250,50 L 280,35 L 310,25" 
                    fill="none" 
                    stroke="#D4782A" 
                    strokeWidth="3" 
                    strokeDasharray="8,6"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  {/* Key entry points */}
                  <circle cx="190" cy="75" r="4" fill="#D4782A" />
                  <circle cx="220" cy="60" r="4" fill="#D4782A" />
                </svg>
              </div>

              {/* Entry Confirmation Badge - Exact peach color */}
              <div className="flex items-start gap-3 px-6 py-[18px] rounded-[20px] bg-[#fef3e7]">
                <div className="w-2 h-2 rounded-full bg-[#D4782A] mt-1 flex-shrink-0" />
                <span className="text-[15px] font-semibold text-[#b8651f] leading-relaxed">
                  LIQUIDITY SWEEP @ 24,812.00 — ENTRY CONFIRMED 1:3.4 R:R
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: Testimonial & Stats */}
          <Reveal delay={0.15}>
            <span className="eyebrow mb-5 inline-block">Practical Experience</span>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-8">
              Signals built on real orderflow — not guesswork.
            </h2>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#CBA35C] text-[#CBA35C]" />
              ))}
            </div>

            <div className="relative pl-8 mb-8">
              <Quote className="w-8 h-8 text-[#13515D]/10 absolute top-0 left-0" />
              <p className="text-xl sm:text-2xl font-medium text-[#142B2E] leading-relaxed font-heading">
                "Finally understood the DOM on Nifty futures. Within three weeks I could see the sweeps happening before the reversal printed."
              </p>
            </div>

            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-full bg-[#13515D]/5 border border-[#13515D]/10 flex items-center justify-center text-sm font-semibold text-[#13515D] font-mono">
                RS
              </div>
              <div>
                <div className="text-sm font-semibold text-[#13515D]">R. Sharma</div>
                <div className="text-xs text-[#4A6062] font-mono">Mumbai, India</div>
              </div>
            </div>

            {/* Stats Section - CEO Credentials */}
            <div className="rounded-2xl bg-gradient-to-br from-[#13515D] to-[#0C3841] p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(30deg, #D4782A 12%, transparent 12.5%, transparent 87%, #D4782A 87.5%, #D4782A), linear-gradient(150deg, #D4782A 12%, transparent 12.5%, transparent 87%, #D4782A 87.5%, #D4782A)', backgroundSize: '40px 70px' }} />
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-6">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#CBA35C] mb-2 font-mono">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-[#93A7CB] leading-tight">
                    Years Experience
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center border-x border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-[#D4782A] mb-2 font-mono">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-[#93A7CB] leading-tight">
                    Traders Mentored
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#CBA35C] mb-2 font-mono">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-[#93A7CB] leading-tight">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-[#D4782A]/20 border border-[#D4782A]/30 text-xs font-semibold text-[#CBA35C]">
                  Psychology Expert
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#7A8C5F]/20 border border-[#7A8C5F]/30 text-xs font-semibold text-[#CBA35C]">
                  Risk Management
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#CBA35C]/20 border border-[#CBA35C]/30 text-xs font-semibold text-[#CBA35C]">
                  CEO & Founder
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


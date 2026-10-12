"use client";

import React from "react";
import { Target, Users, LineChart } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const PILLARS = [
  { icon: Target, label: "Precision Execution", detail: "Entries built on liquidity, not indicators." },
  { icon: LineChart, label: "Data-Driven Method", detail: "Every setup is measured, logged, reviewed." },
  { icon: Users, label: "Community Mentorship", detail: "Mentors who trade the sessions they teach." },
];

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-[#13515D] py-12 sm:py-16">
      <div className="absolute inset-0 market-grid market-grid-dark opacity-[0.1]" />
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-[#D4782A]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Positioning */}
        <Reveal>
          <span className="eyebrow mb-6 inline-block !text-[#CBA35C]">The Difference</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1] text-[#FDFCF5] mb-7">
            Most traders lose money predicting.
            <br />
            <span className="text-[#93A7CB]">We teach you to react to structure.</span>
          </h2>
          <p className="text-[#CBD9DA] text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            Many traders have already faced losses trading patterns without understanding why liquidity really moves. If that's you, you're not alone — and it's not too late. IND-GLOBAL exists to help traders who've struggled get back on track with institutional-grade orderflow methodology, real execution on NSE and BSE, and mentors who trade the same markets they teach. We rebuild confidence through education that actually works.
          </p>

          <div className="flex flex-col gap-5">
            {PILLARS.map((p) => (
              <div key={p.label} className="flex items-start gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0">
                <div className="p-2.5 rounded-lg bg-white/10 shrink-0">
                  <p.icon className="w-4 h-4 text-[#D4782A]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#FDFCF5] mb-0.5">{p.label}</div>
                  <div className="text-sm text-[#93A7CB]">{p.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right: Real Trading Charts Comparison */}
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-white/10 bg-[#0C3841] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-2 divide-x divide-white/10">
              {/* Guessing - Random Candles */}
              <div className="p-6">
                <div className="eyebrow !text-[#93A7CB] mb-4">Guessing</div>
                <svg viewBox="0 0 160 110" className="w-full h-28" fill="none">
                  {/* Grid lines */}
                  {[20, 40, 60, 80, 100].map((y) => (
                    <line key={y} x1="10" y1={y} x2="150" y2={y} stroke="#ffffff" strokeWidth="0.3" opacity="0.1" />
                  ))}
                  
                  {/* Random candlesticks - showing confusion */}
                  {[
                    { x: 20, open: 70, close: 50, high: 75, low: 45, type: 'bear' },
                    { x: 35, open: 50, close: 65, high: 68, low: 48, type: 'bull' },
                    { x: 50, open: 65, close: 40, high: 70, low: 38, type: 'bear' },
                    { x: 65, open: 40, close: 60, high: 62, low: 35, type: 'bull' },
                    { x: 80, open: 60, close: 45, high: 65, low: 40, type: 'bear' },
                    { x: 95, open: 45, close: 70, high: 72, low: 43, type: 'bull' },
                    { x: 110, open: 70, close: 55, high: 73, low: 50, type: 'bear' },
                    { x: 125, open: 55, close: 48, high: 58, low: 45, type: 'bear' },
                  ].map((candle, i) => (
                    <g key={i} className="animate-candle-fade" style={{ animationDelay: `${i * 0.2}s` }}>
                      {/* Wick */}
                      <line 
                        x1={candle.x} y1={candle.high} 
                        x2={candle.x} y2={candle.low} 
                        stroke={candle.type === 'bull' ? '#059669' : '#DC2626'} 
                        strokeWidth="1.5" 
                        opacity="0.7"
                      />
                      {/* Body */}
                      <rect 
                        x={candle.x - 4} 
                        y={Math.min(candle.open, candle.close)} 
                        width="8" 
                        height={Math.abs(candle.open - candle.close)} 
                        fill={candle.type === 'bull' ? '#059669' : '#DC2626'} 
                        opacity="0.8"
                      />
                      {/* Question marks showing confusion */}
                      {i % 3 === 0 && (
                        <text x={candle.x} y={candle.high - 8} fill="#93A7CB" fontSize="10" textAnchor="middle" opacity="0" className="animate-question">?</text>
                      )}
                    </g>
                  ))}
                  
                  {/* Erratic entry points (wrong timing) */}
                  <circle cx="50" cy="40" r="4" fill="none" stroke="#DC2626" strokeWidth="2" opacity="0" className="animate-wrong-entry" />
                  <circle cx="80" cy="45" r="4" fill="none" stroke="#DC2626" strokeWidth="2" opacity="0" className="animate-wrong-entry" style={{ animationDelay: '0.8s' }} />
                </svg>
                <p className="text-xs text-[#93A7CB] leading-relaxed mt-2">Reacting to price after the move — no read on who's actually in control.</p>
              </div>
              
              {/* Structure - Order Flow */}
              <div className="p-6">
                <div className="eyebrow mb-4">Structure</div>
                <svg viewBox="0 0 160 110" className="w-full h-28" fill="none">
                  {/* Grid lines */}
                  {[20, 40, 60, 80, 100].map((y) => (
                    <line key={y} x1="10" y1={y} x2="150" y2={y} stroke="#ffffff" strokeWidth="0.3" opacity="0.15" />
                  ))}
                  
                  {/* Structured candlesticks - showing trend */}
                  {[
                    { x: 20, open: 85, close: 80, high: 87, low: 78, type: 'bear', vol: 30 },
                    { x: 35, open: 80, close: 75, high: 82, low: 73, type: 'bear', vol: 35 },
                    { x: 50, open: 75, close: 72, high: 76, low: 70, type: 'bear', vol: 25 },
                    { x: 65, open: 72, close: 55, high: 73, low: 52, type: 'bear', vol: 60 }, // Break
                    { x: 80, open: 55, close: 48, high: 58, low: 46, type: 'bear', vol: 50 },
                    { x: 95, open: 48, close: 45, high: 50, low: 43, type: 'bear', vol: 40 },
                    { x: 110, open: 45, close: 52, high: 55, low: 44, type: 'bull', vol: 45 }, // Reversal
                    { x: 125, open: 52, close: 60, high: 62, low: 51, type: 'bull', vol: 55 },
                  ].map((candle, i) => (
                    <g key={i} className="animate-candle-draw" style={{ animationDelay: `${i * 0.25}s` }}>
                      {/* Wick */}
                      <line 
                        x1={candle.x} y1={candle.high} 
                        x2={candle.x} y2={candle.low} 
                        stroke={candle.type === 'bull' ? '#059669' : '#DC2626'} 
                        strokeWidth="1.5"
                      />
                      {/* Body */}
                      <rect 
                        x={candle.x - 4} 
                        y={Math.min(candle.open, candle.close)} 
                        width="8" 
                        height={Math.abs(candle.open - candle.close) || 1} 
                        fill={candle.type === 'bull' ? '#059669' : '#DC2626'}
                      />
                      {/* Volume bars at bottom */}
                      <rect 
                        x={candle.x - 3} 
                        y={105 - candle.vol * 0.4} 
                        width="6" 
                        height={candle.vol * 0.4} 
                        fill={candle.type === 'bull' ? '#059669' : '#DC2626'} 
                        opacity="0.3"
                      />
                    </g>
                  ))}
                  
                  {/* Liquidity zone (support/resistance) */}
                  <rect x="10" y="70" width="140" height="6" fill="#CBA35C" opacity="0" className="animate-zone-appear" style={{ animationDelay: '1s' }} />
                  
                  {/* Perfect entry point with arrow */}
                  <g className="animate-perfect-entry" style={{ animationDelay: '2s' }}>
                    <circle cx="65" cy="55" r="5" fill="none" stroke="#CBA35C" strokeWidth="2.5" />
                    <path d="M65,55 L65,35 M60,40 L65,35 L70,40" stroke="#CBA35C" strokeWidth="2" fill="none" />
                    <text x="72" y="38" fill="#CBA35C" fontSize="8" fontWeight="bold">ENTRY</text>
                  </g>
                  
                  {/* Stop loss line */}
                  <line x1="65" y1="78" x2="150" y2="78" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3,3" opacity="0" className="animate-sl-line" style={{ animationDelay: '2.3s' }} />
                  
                  {/* Target line */}
                  <line x1="65" y1="45" x2="150" y2="45" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,3" opacity="0" className="animate-tp-line" style={{ animationDelay: '2.5s' }} />
                  
                  {/* Profit path */}
                  <path d="M65,55 L80,48 L95,45 L110,52 L125,60" stroke="#CBA35C" strokeWidth="2" fill="none" opacity="0" className="animate-profit-path" style={{ animationDelay: '2.7s' }} />
                </svg>
                <p className="text-xs text-[#CBD9DA] leading-relaxed mt-2">Reading liquidity before the move — absorption, imbalance, and intent.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


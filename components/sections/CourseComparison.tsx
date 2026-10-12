"use client";

import React from "react";
import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const COMPARISON_ROWS = [
  {
    feature: "Main purpose",
    online: "Teach knowledge & concepts",
    mentorship: "Develop the trader's skills and decision-making",
  },
  {
    feature: "Learning style",
    online: "Mostly structured lessons",
    mentorship: "Personalized, practical guidance",
  },
  {
    feature: "Content",
    online: "Same curriculum for everyone",
    mentorship: "Customized to the trader",
  },
  {
    feature: "Market analysis",
    online: "Pre-recorded/live explanations",
    mentorship: "Mentor reviews your actual analysis",
  },
  {
    feature: "Trade feedback",
    online: "Limited or none",
    mentorship: "Regular feedback on your trades",
  },
  {
    feature: "Risk management",
    online: "General rules",
    mentorship: "Personalized risk-management guidance",
  },
  {
    feature: "Psychology",
    online: "Concepts/theory",
    mentorship: "Helps identify and correct your behavioral mistakes",
  },
  {
    feature: "Accountability",
    online: "Low",
    mentorship: "High",
  },
  {
    feature: "Interaction",
    online: "Q&A / class discussions",
    mentorship: "Direct mentor interaction",
  },
  {
    feature: "Duration",
    online: "Usually fixed",
    mentorship: "Often ongoing",
  },
  {
    feature: "Cost",
    online: "Generally lower",
    mentorship: "Generally higher",
  },
  {
    feature: "Best for",
    online: "Beginners building fundamentals",
    mentorship: "Traders wanting structured improvement",
  },
];

export default function CourseComparison() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F5EA]">
      <div className="container-custom">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5 inline-block">Feature Comparison</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1]">
            What Mentorship unlocks.
          </h2>
        </Reveal>

        <div className="max-w-6xl mx-auto">
          {/* Feature comparison table */}
          <Reveal className="relative bg-white rounded-3xl border-2 border-[#13515D]/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A8C5F] via-[#D4782A] to-[#CBA35C]" />
            
            <div className="p-6 sm:p-10">
              {/* Header */}
              <div className="grid grid-cols-3 gap-6 pb-6 mb-8 border-b-2 border-[#13515D]/10">
                <div className="flex items-center">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#13515D]">Feature</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📚</div>
                    <span className="text-sm font-bold text-[#4A6062]">Online Trading Classes</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🧑‍🏫</div>
                    <span className="text-sm font-bold text-[#D4782A]">Trading Mentorship</span>
                  </div>
                </div>
              </div>

              {/* Comparison rows */}
              <div className="space-y-4">
                {COMPARISON_ROWS.map((row, idx) => (
                  <div 
                    key={row.feature}
                    className="grid grid-cols-3 gap-6 items-start p-4 rounded-xl hover:bg-[#FDFCF5] transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <span className="text-sm font-semibold text-[#142B2E]">
                        {row.feature}
                      </span>
                    </div>
                    <div className="flex items-start justify-center">
                      <span className="text-sm text-[#4A6062] text-center">
                        {row.online}
                      </span>
                    </div>
                    <div className="flex items-start justify-center">
                      <span className="text-sm font-medium text-[#13515D] text-center">
                        {row.mentorship}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-10 pt-6 border-t border-[#13515D]/10 flex items-center justify-center gap-3">
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D4782A] to-[#CBA35C] animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm font-mono text-[#4A6062]">
                  Unlock personalized growth with mentorship
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


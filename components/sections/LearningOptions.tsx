"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Users } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import CountUp from "@/components/ui/CountUp";

const COURSES = [
  {
    name: "Indian Market Foundation",
    tagline: "Build a Strong Foundation in Indian Markets",
    featured: false,
  },
  {
    name: "Forex Foundation",
    tagline: "Master the Fundamentals of Global Currency Markets",
    featured: false,
  },
  {
    name: "Technical Analysis Mastery",
    tagline: "Read Markets. Identify Setups. Trade with Precision.",
    featured: false,
  },
  {
    name: "F & O Trading",
    tagline: "Understand Derivatives. Execute with Confidence.",
    featured: false,
  },
  {
    name: "Forex + Indian Market Pro",
    tagline: "Master Two Markets. Expand Your Edge.",
    featured: false,
  },
  {
    name: "Complete Trader Program",
    tagline: "One Complete Path to Trading Mastery",
    featured: true,
  },
];

const MENTORSHIP = [
  {
    name: "3-Day Trading Mentorship",
    groupNote: "The trader who loose the trades and capital",
    features: [
      "Learn how to identify high-quality setups",
      "Manage risk",
      "Execute with discipline",
      "Psychology",
      "Build a trading plan designed for consistency — not gambling",
    ],
    badge: null,
  },
  {
    name: "1-to-1 Mentorship",
    groupNote: "We help both winning & losing traders",
    features: [
      "Live chart analysis & trade setup identification",
      "Entry, stop-loss & target planning",
      "Weekly backtesting & trade journal review",
      "Identify mistakes & improve your execution",
      "Direct mentor access & dedicated guidance",
    ],
    badge: "MOST EXCLUSIVE",
  },
  {
    name: "1-to-2 Mentorship",
    groupNote: "We help both winning & losing traders",
    features: [
      "Live chart analysis & trade setup identification",
      "Entry, stop-loss & target planning",
      "Weekly backtesting & trade journal review",
      "Direct mentor access & dedicated guidance",
    ],
    badge: null,
  },
];

const MENTORSHIP_FEATURES = [
  "Live chart analysis & trade setup identification",
  "Entry, stop-loss & target planning",
  "Weekly backtesting & trade journal review",
  "Direct mentor access & dedicated guidance",
];

export default function LearningOptions() {
  return (
    <section id="pricing" className="py-12 sm:py-16 bg-[#FDFCF5]">
      <div className="container-custom">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <span className="eyebrow mb-5 inline-block">Programs</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-5">
            Choose your path.
          </h2>
          <p className="text-[#4A6062] text-base sm:text-lg leading-relaxed">
            Curated programs designed for disciplined market execution. Every program includes our full risk-management framework.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch" stagger={0.08}>
          {COURSES.map((course) => (
            <RevealItem key={course.name} className="h-full">
              <div
                className={`h-full rounded-2xl p-6 flex flex-col justify-between relative transition-colors duration-300 ${
                  course.featured
                    ? "bg-[#13515D] border-2 border-[#D4782A] shadow-[0_25px_60px_-20px_rgba(212,120,42,0.35)]"
                    : "bg-white border border-[#13515D]/[0.1] shadow-sm hover:shadow-xl"
                }`}
              >
                {course.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4782A] text-[#FDFCF5] text-[11px] font-mono font-extrabold uppercase tracking-widest rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship
                  </div>
                )}

                <div>
                  <h3 
                    className={`text-base sm:text-[1.1rem] font-bold font-heading tracking-wide uppercase mb-2 ${course.featured ? "text-[#FDFCF5]" : "text-[#13515D]"}`}
                    style={{ fontWeight: 800 }}
                  >
                    {course.name}
                  </h3>
                  <p 
                    className={`text-xs sm:text-[13px] leading-relaxed font-semibold ${course.featured ? "text-[#C5D5D8]" : "text-[#3D5254]"}`}
                    style={{ fontWeight: 600 }}
                  >
                    {course.tagline}
                  </p>
                </div>

                <Magnetic strength={0.15} className="w-full mt-6">
                  <a
                    href="#contact"
                    className={`btn-shine w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all interactive ${
                      course.featured
                        ? "bg-[#D4782A] text-[#FDFCF5] hover:bg-[#B8651F]"
                        : "bg-[#13515D] text-[#FDFCF5] hover:bg-[#0C3841]"
                    }`}
                  >
                    Enroll Now
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Mentorship tiers */}
        <div id="mentorship-pricing" className="mt-24 max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="eyebrow mb-4 inline-block">Mentorship</span>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-4">
              Personal mentorship &amp; intensive cohorts.
            </h3>
            <p className="text-[#4A6062] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Same disciplined methodology, tailored group size — from intensive execution to dedicated 1-on-1 guidance.
            </p>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch" stagger={0.08}>
            {MENTORSHIP.map((tier) => (
              <RevealItem key={tier.name} className="h-full">
                <div
                  className="h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 bg-[#13515D] border-2 border-[#D4782A] shadow-[0_20px_50px_-15px_rgba(19,81,93,0.35)] hover:shadow-[0_25px_60px_-15px_rgba(212,120,42,0.25)]"
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#D4782A] text-[#FDFCF5] text-[11px] font-mono font-extrabold uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-md whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5 fill-[#FDFCF5]" />
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <Users className="w-5 h-5 text-[#CBA35C]" />
                      <h4 className="text-lg sm:text-xl font-bold text-[#FDFCF5] font-serif">
                        {tier.name}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm mb-5 text-[#8BB4BD] font-normal">{tier.groupNote}</p>

                    <ul className="space-y-3 mb-6 mt-4">
                      {(tier.features || MENTORSHIP_FEATURES).map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed text-[#F0F5F6]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#CBA35C]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Magnetic strength={0.15} className="w-full mt-auto pt-4">
                    <a
                      href="#contact"
                      className="btn-shine w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all interactive bg-[#D4782A] text-[#FDFCF5] hover:bg-[#B8651F] shadow-sm"
                    >
                      Apply for Mentorship
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Magnetic>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}


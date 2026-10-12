"use client";

import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function FinalCta() {
  return (
    <section className="py-14 sm:py-18 bg-[#13515D] relative overflow-hidden">
      <div className="absolute inset-0 market-grid market-grid-dark opacity-[0.1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4782A]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow mb-6 inline-block !text-[#CBA35C]">Your Learning. Your Achievement.</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] text-[#FDFCF5] mb-8">
            Learn the Markets.{" "}
            <br className="hidden sm:inline" />
            <span className="italic text-shimmer-gold bg-clip-text text-transparent">Master the Skills.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD9DA] leading-relaxed max-w-xl mx-auto mb-10">
            Build your trading knowledge with expert mentorship and earn a certificate to recognize your learning journey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Magnetic strength={0.25}>
              <a
                href="/the-capital-market-certificate.jpg"
                download="The-Capital-Market-Certificate.jpg"
                className="btn-shine inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D4782A] text-[#FDFCF5] font-bold text-sm uppercase tracking-wider hover:bg-[#B8651F] transition-all interactive"
              >
                Download Our Certificate
                <Download className="w-4 h-4" />
              </a>
            </Magnetic>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-[#FDFCF5] font-semibold text-sm hover:bg-white/[0.06] transition-all interactive"
            >
              Explore Programs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


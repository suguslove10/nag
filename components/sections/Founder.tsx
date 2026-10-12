"use client";

import React from "react";
import { TrendingUp, Code, Shield, BarChart3 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

const EXPERTISE = [
  {
    number: "01",
    icon: TrendingUp,
    title: "FOREX & INDIAN MARKET",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "NISM CERTIFIED",
  },
  {
    number: "03",
    icon: Code,
    title: "TECHNICAL & FUNDAMENTAL",
  },
  {
    number: "04",
    icon: Shield,
    title: "PSYCHOLOGY & RISK MANAGEMENT",
  },
];

export default function Founder() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#FDFCF5] overflow-hidden">
      {/* Subtle Market Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #13515D 1px, transparent 1px),
              linear-gradient(to bottom, #13515D 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Subtle Candlestick Pattern */}
      <motion.div 
        className="absolute top-10 right-10 w-64 h-64 opacity-[0.03]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <line x1="50" y1="100" x2="50" y2="200" stroke="#13515D" strokeWidth="1" />
          <rect x="40" y="120" width="20" height="60" fill="#D4782A" />
          <line x1="120" y1="80" x2="120" y2="220" stroke="#13515D" strokeWidth="1" />
          <rect x="110" y="100" width="20" height="100" fill="#13515D" />
          <line x1="190" y1="120" x2="190" y2="240" stroke="#13515D" strokeWidth="1" />
          <rect x="180" y="140" width="20" height="80" fill="#D4782A" />
          <line x1="260" y1="60" x2="260" y2="180" stroke="#13515D" strokeWidth="1" />
          <rect x="250" y="80" width="20" height="80" fill="#13515D" />
        </svg>
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Asymmetric Two-Column Layout */}
          <div className="grid lg:grid-cols-[35%_65%] gap-8 lg:gap-12 items-center">
            {/* LEFT: Portrait Hero */}
            <Reveal>
              <div className="relative">
                {/* Vertical Label */}
                <motion.div 
                  className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden lg:block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[9px] font-mono tracking-[0.3em] text-[#4A6062] uppercase whitespace-nowrap">
                    MARKETS • TECHNOLOGY • EDUCATION
                  </p>
                </motion.div>

                {/* Portrait Container */}
                <div className="relative group">
                  {/* Layered Depth Background */}
                  <motion.div 
                    className="absolute -inset-6 bg-gradient-to-br from-[#D4782A]/5 via-transparent to-[#13515D]/5 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute -inset-3 border border-[#13515D]/[0.04] rounded-xl"
                    initial={{ opacity: 0, rotate: -5 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />

                  {/* Main Portrait Frame */}
                  <motion.div 
                    className="relative aspect-[3/4] max-w-xs mx-auto overflow-hidden rounded-xl border border-[#13515D]/10 bg-white shadow-[0_15px_40px_-10px_rgba(19,81,93,0.2)]"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/images/ceo.jpg"
                      alt="Lokesh Kumar - Founder & CEO"
                      fill
                      className="object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      priority
                    />

                    {/* Subtle Market Line Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#13515D]/5 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Floating Experience Badge */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#D4782A] to-[#C96D1F] text-white px-4 py-3 rounded-lg shadow-lg border border-[#D4782A]/20"
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <p className="text-lg font-bold leading-none mb-0.5">13+ YEARS</p>
                    <p className="text-[9px] font-mono tracking-widest uppercase opacity-90">
                      MARKET EXPERIENCE
                    </p>
                  </motion.div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT: Content */}
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  {/* Eyebrow */}
                  <motion.p 
                    className="text-[10px] font-mono tracking-[0.25em] text-[#D4782A] uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    THE MIND BEHIND THE METHOD
                  </motion.p>

                  {/* Headline - Premium Serif with Letter Animation */}
                  <motion.h2 
                    className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#13515D] tracking-tight leading-none flex flex-wrap items-center gap-x-3.5 sm:gap-x-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {["Lokesh", "Kumar"].map((word, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              duration: 0.5,
                              delay: i * 0.15,
                              ease: [0.22, 1, 0.36, 1]
                            }
                          }
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h2>

                  {/* Role / Title */}
                  <motion.p 
                    className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#D4782A] uppercase font-medium -mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    CEO &amp; Founder
                  </motion.p>

                  {/* Supporting Statement */}
                  <motion.p 
                    className="text-base text-[#4A6062] leading-relaxed max-w-xl font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Expert in Indian and Forex markets, specializing in technical and fundamental
                    analysis, trading psychology, and advanced risk management.
                  </motion.p>
                </div>
              </Reveal>

              {/* Expertise Modules */}
              <Reveal delay={0.2}>
                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {EXPERTISE.map((item, index) => (
                    <motion.div
                      key={item.number}
                      className="group relative bg-white/60 backdrop-blur-sm border border-[#13515D]/[0.08] rounded-lg p-4 hover:border-[#D4782A]/30 hover:shadow-md transition-all duration-500"
                      initial={{ opacity: 0, x: -30, rotateY: -15 }}
                      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Number */}
                      <motion.div 
                        className="absolute top-3 right-3 text-2xl font-serif font-bold text-[#13515D]/[0.06] group-hover:text-[#D4782A]/10 transition-colors"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 0.06, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item.number}
                      </motion.div>

                      {/* Icon */}
                      <motion.div 
                        className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4782A]/10 to-[#CBA35C]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.1 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                      >
                        <item.icon className="w-4 h-4 text-[#D4782A]" strokeWidth={2} />
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-xs sm:text-[13px] font-mono tracking-wide text-[#13515D] uppercase font-bold"
                        style={{ fontWeight: 700 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item.title}
                      </motion.h3>
                    </motion.div>
                  ))}
                </div>
              </Reveal>

              {/* Philosophy Statement */}
              <Reveal delay={0.3}>
                <motion.div 
                  className="relative mt-8 pt-6 border-t border-[#13515D]/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  viewport={{ once: true }}
                >
                  {/* Decorative Quote Mark */}
                  <motion.div 
                    className="absolute -top-4 left-0 text-5xl font-serif text-[#D4782A]/20 leading-none"
                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                    whileInView={{ opacity: 0.2, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                    viewport={{ once: true }}
                  >
                    "
                  </motion.div>

                  <div className="relative pl-6">
                    {/* Quote */}
                    <motion.p 
                      className="text-lg sm:text-xl font-serif text-[#13515D] mb-2 italic leading-tight"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                      viewport={{ once: true }}
                    >
                      Anyone can enter a trade. Few know when to exit.
                    </motion.p>

                    {/* Subtext */}
                    <motion.p 
                      className="text-sm text-[#4A6062] font-light"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2 }}
                      viewport={{ once: true }}
                    >
                      A disciplined approach to learning, analysing and navigating the markets.
                    </motion.p>

                    {/* Signature Line */}
                    <motion.div 
                      className="mt-4 flex items-center gap-3"
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 2.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="h-[1px] w-10 bg-gradient-to-r from-[#D4782A] to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                        viewport={{ once: true }}
                      />
                      <motion.p 
                        className="text-[10px] font-mono tracking-widest text-[#4A6062] uppercase"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 2.4 }}
                        viewport={{ once: true }}
                      >
                        Lokesh Kumar
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


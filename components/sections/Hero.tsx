"use client";

import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-24 pb-12 sm:pb-14 bg-[#FDFCF5]">
      {/* Background Video - Desktop Only */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden lg:block absolute inset-0 z-0"
      >
        <video
          className="w-full h-full object-cover object-right"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/hero-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FDFCF5_0%,#FDFCF5_32%,transparent_62%)]" />
      </motion.div>

      {/* Market Grid - Mobile Only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8 }}
        className="market-grid opacity-70 lg:hidden"
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Headline */}
          <h1 className="mb-6 sm:mb-7 text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-medium leading-[1.05] tracking-tight text-[#13515D] [perspective:1000px]">
            {/* Line 1: Your Journey From */}
            <span className="inline-block overflow-hidden pb-1">
              <motion.span variants={wordVariants} className="inline-block">
                <span className="hero-word-hover">Your Journey From</span>
              </motion.span>
            </span>{" "}
            {/* Line 1: Learner */}
            <span className="inline-block overflow-hidden pb-1">
              <motion.span variants={wordVariants} className="inline-block">
                <span className="hero-word-hover">Learner</span>
              </motion.span>
            </span>
            <br />
            {/* Line 2: to Professional Trader */}
            <span className="inline-block overflow-visible pb-2">
              <motion.span variants={wordVariants} className="inline-block">
                <span className="hero-word-hover relative inline-block">
                  <span
                    className="relative inline-block text-[#D4782A] italic"
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontWeight: 500,
                      fontSize: "1.05em",
                    }}
                  >
                    {["t", "o", " ", "P", "r", "o", "f", "e", "s", "s", "i", "o", "n", "a", "l", " ", "T", "r", "a", "d", "e", "r"].map(
                      (letter, i) => (
                        <motion.span
                          key={i}
                          className="inline-block"
                          initial={{ y: 0 }}
                          animate={{
                            y: [0, -8, 0],
                            textShadow: [
                              "0 2px 8px rgba(212, 120, 42, 0.3)",
                              "0 4px 16px rgba(212, 120, 42, 0.6), 0 0 30px rgba(212, 120, 42, 0.4)",
                              "0 2px 8px rgba(212, 120, 42, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                      )
                    )}
                  </span>
                </span>
              </motion.span>
            </span>
            <br />
            {/* Line 3: Starts Here. */}
            <span className="inline-block overflow-hidden pb-1">
              <motion.span variants={wordVariants} className="inline-block">
                <span className="hero-word-hover text-[#7A8C5F]">Starts Here.</span>
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUpVariants}
            className="mb-7 sm:mb-9 text-sm sm:text-base md:text-lg text-[#4A6062] leading-relaxed max-w-lg"
          >
            <span className="block mb-3 sm:mb-4">
              "The market rewards knowledge, discipline, and patience not luck. Start your journey to
              becoming a smarter trader today."
            </span>
            <span className="block">
              "From Confused Trader to Disciplined Trader — Learn the Skills, Strategies, and Mindset
              Behind Smarter Trading."
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-5"
          >
            <Magnetic strength={0.25}>
              <motion.a
                href="#pricing"
                className="btn-shine group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#13515D] text-[#FDFCF5] font-semibold text-sm hover:bg-[#0C3841] transition-all interactive w-full sm:w-auto justify-center sm:justify-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Programs
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </Magnetic>
            <motion.a
              href="#learning-system"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4A6062] hover:text-[#13515D] transition-all interactive"
              whileHover={{ x: 5 }}
            >
              See the method
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}


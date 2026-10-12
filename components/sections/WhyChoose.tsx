"use client";

import React from "react";
import { BookOpen, Target, Brain, Shield, BarChart3, Users, Rocket, FileText } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const FEATURES = [
  {
    icon: BookOpen,
    emoji: "📚",
    title: "Practical Market Education",
    description: "Learn the concepts behind the Indian Stock Market, F&O and Forex through structured, practical training.",
    gradient: "from-[#7A8C5F]/10 to-[#7A8C5F]/5",
    iconBg: "bg-[#7A8C5F]/10",
    iconColor: "text-[#7A8C5F]",
    accentColor: "#7A8C5F",
  },
  {
    icon: Target,
    emoji: "🎯",
    title: "Strategy-Focused Learning",
    description: "Understand market structure, technical analysis, price action, liquidity, and advanced trading concepts.",
    gradient: "from-[#D4782A]/10 to-[#D4782A]/5",
    iconBg: "bg-[#D4782A]/10",
    iconColor: "text-[#D4782A]",
    accentColor: "#D4782A",
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "Trading Psychology",
    description: "Develop discipline, patience, emotional control, and the mindset required for consistent decision-making.",
    gradient: "from-[#13515D]/10 to-[#13515D]/5",
    iconBg: "bg-[#13515D]/10",
    iconColor: "text-[#13515D]",
    accentColor: "#13515D",
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "Risk Management",
    description: "Learn how to manage capital, position size, stop-loss, risk-to-reward, and drawdowns before focusing on potential returns.",
    gradient: "from-[#CBA35C]/10 to-[#CBA35C]/5",
    iconBg: "bg-[#CBA35C]/10",
    iconColor: "text-[#CBA35C]",
    accentColor: "#CBA35C",
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Real Market Practice",
    description: "Apply your knowledge through chart analysis, backtesting, trade planning, and market observation.",
    gradient: "from-[#7A8C5F]/10 to-[#7A8C5F]/5",
    iconBg: "bg-[#7A8C5F]/10",
    iconColor: "text-[#7A8C5F]",
    accentColor: "#7A8C5F",
  },
  {
    icon: Users,
    emoji: "👨‍🏫",
    title: "Structured Mentorship",
    description: "Get guidance throughout your learning journey with clear modules, practical exercises, and regular feedback.",
    gradient: "from-[#D4782A]/10 to-[#D4782A]/5",
    iconBg: "bg-[#D4782A]/10",
    iconColor: "text-[#D4782A]",
    accentColor: "#D4782A",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Beginner to Advanced",
    description: "Programs designed for different experience levels — from market fundamentals to advanced trading frameworks.",
    gradient: "from-[#13515D]/10 to-[#13515D]/5",
    iconBg: "bg-[#13515D]/10",
    iconColor: "text-[#13515D]",
    accentColor: "#13515D",
  },
  {
    icon: FileText,
    emoji: "💼",
    title: "Build Your Own Trading Plan",
    description: "Learn to create a structured plan covering setup → entry → stop-loss → target → risk",
    gradient: "from-[#CBA35C]/10 to-[#CBA35C]/5",
    iconBg: "bg-[#CBA35C]/10",
    iconColor: "text-[#CBA35C]",
    accentColor: "#CBA35C",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-12 sm:py-16 bg-gradient-to-b from-[#F8F5EA] to-[#FDFCF5] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#7A8C5F]/5 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#D4782A]/5 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '3s' }} />
      
      <div className="container-custom relative z-10">
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <span className="eyebrow mb-5 inline-block">Why Choose Us</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-5">
            Why Choose The Capital Market?
          </h2>
          <p className="text-[#4A6062] text-base sm:text-lg leading-relaxed">
            A comprehensive learning experience designed to transform you from a beginner to a disciplined, strategic trader.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.06}>
          {FEATURES.map((feature) => (
            <RevealItem key={feature.title} className="h-full">
              <TiltCard max={6} className="group h-full relative">
                <div className="relative h-full flex flex-col p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#13515D]/5 hover:border-[#13515D]/15 transition-all duration-500 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] overflow-hidden">
                  
                  {/* Gradient background overlay */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${feature.gradient}`}
                  />
                  
                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-0.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                    style={{ backgroundColor: feature.accentColor }}
                  />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with emoji */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="relative">
                        <div 
                          className={`p-3.5 rounded-xl ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition-all duration-500`}
                        >
                          <feature.icon className={`w-6 h-6 ${feature.iconColor} transition-transform duration-500 group-hover:rotate-12`} />
                        </div>
                      </div>
                      
                      {/* Floating emoji */}
                      <div className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                        {feature.emoji}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-lg font-bold mb-3 leading-snug transition-all duration-500 group-hover:translate-x-1"
                      style={{ color: feature.accentColor }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#4A6062] text-sm leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className="mt-5 pt-4 border-t border-[#13515D]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: feature.accentColor }}
                        />
                        <div 
                          className="h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                          style={{ backgroundColor: `${feature.accentColor}40` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner glow */}
                  <div 
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl pointer-events-none"
                    style={{ backgroundColor: feature.accentColor }}
                  />
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}


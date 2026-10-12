"use client";

import React from "react";
import { Landmark, LineChart, BarChart3, Target, Layers3, ShieldCheck, Brain, PlayCircle } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const MODULES = [
  {
    n: "Module 1",
    icon: Landmark,
    accent: "#7A8C5F",
    tint: "bg-[#7A8C5F]/10",
    title: "Indian Financial Markets",
    topics: [],
  },
  {
    n: "Module 2",
    icon: LineChart,
    accent: "#D4782A",
    tint: "bg-[#D4782A]/10",
    title: "Forex Market",
    topics: [],
  },
  {
    n: "Module 3",
    icon: BarChart3,
    accent: "#13515D",
    tint: "bg-[#13515D]/10",
    title: "Technical Analysis",
    topics: [],
  },
  {
    n: "Module 4",
    icon: Target,
    accent: "#CBA35C",
    tint: "bg-[#CBA35C]/15",
    title: "Trading Strategies",
    topics: [],
  },
  {
    n: "Module 5",
    icon: Layers3,
    accent: "#7A8C5F",
    tint: "bg-[#7A8C5F]/10",
    title: "Features & Options",
    topics: [],
  },
  {
    n: "Module 6",
    icon: ShieldCheck,
    accent: "#D4782A",
    tint: "bg-[#D4782A]/10",
    title: "Risk Management",
    topics: [],
  },
  {
    n: "Module 7",
    icon: Brain,
    accent: "#13515D",
    tint: "bg-[#13515D]/10",
    title: "Psychology",
    topics: [],
  },
  {
    n: "Module 8",
    icon: PlayCircle,
    accent: "#CBA35C",
    tint: "bg-[#CBA35C]/15",
    title: "Live Practical Training",
    topics: [],
  },
];

export default function CurriculumMap() {
  return (
    <section id="learning-system" className="py-12 sm:py-16 bg-[#FDFCF5] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7A8C5F]/5 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4782A]/5 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container-custom relative z-10">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5 inline-block">Learning System</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-5">
            Everything inside The Capital Room.
          </h2>
          <p className="text-[#4A6062] text-base sm:text-lg leading-relaxed">
            Eight modules take you from exchange fundamentals to live, mentored execution — the full curriculum behind our Complete Trader Program.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          {MODULES.map((mod, idx) => (
            <RevealItem key={mod.title} className="h-full">
              <TiltCard max={8} className="group h-full relative">
                {/* Card container with advanced styling */}
                <div className="relative h-full flex flex-col p-7 rounded-3xl bg-white border-2 border-transparent hover:border-[#13515D]/10 transition-all duration-700 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] curriculum-card-advanced overflow-hidden">
                  
                  {/* Gradient background overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-radial"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, ${mod.accent}06 0%, transparent 60%)`
                    }}
                  />
                  
                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                    style={{ backgroundColor: mod.accent }}
                  />
                  
                  {/* Animated corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${mod.accent}08 0%, transparent 70%)`
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Header section */}
                    <div className="flex items-center justify-between mb-8">
                      {/* Icon with advanced hover effect */}
                      <div className="relative">
                        <div 
                          className={`p-3.5 rounded-2xl ${mod.tint} flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative z-10 icon-container-advanced`}
                        >
                          <mod.icon className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{ color: mod.accent }} />
                        </div>
                        
                        {/* Orbiting dot */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                          <div 
                            className="w-2 h-2 rounded-full absolute animate-orbit"
                            style={{ backgroundColor: mod.accent }}
                          />
                        </div>
                      </div>
                      
                      {/* Module number with animation */}
                      <div className="flex flex-col items-end">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E8385]/60 mb-1">Module</span>
                        <span 
                          className="font-mono text-2xl font-bold transition-all duration-500 group-hover:scale-125 inline-block"
                          style={{ 
                            color: mod.accent,
                            textShadow: '0 0 20px transparent',
                            transition: 'all 0.5s ease'
                          }}
                        >
                          {idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#13515D] font-heading leading-snug mb-6 group-hover:translate-x-1 transition-all duration-500">
                      {mod.title}
                    </h3>

                    {/* Animated progress bar */}
                    <div className="h-1.5 w-full bg-[#FDFCF5] rounded-full overflow-hidden mb-4">
                      <div 
                        className="h-full w-0 group-hover:w-full transition-all duration-[1.5s] ease-out rounded-full"
                        style={{ backgroundColor: mod.accent }}
                      />
                    </div>
                  </div>
                  
                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-white to-transparent" />
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}


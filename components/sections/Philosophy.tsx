"use client";

import React from "react";
import { Star, Users, Clock, Globe, TrendingUp } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

const STATS = [
  {
    icon: Star,
    value: "4.9",
    suffix: " / 5",
    label: "Learner Rating",
    stars: 5,
    color: "#CBA35C",
    gradient: "from-[#CBA35C] to-[#D4782A]",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Learners Trained",
    color: "#7A8C5F",
    gradient: "from-[#7A8C5F] to-[#93A7CB]",
  },
  {
    icon: Clock,
    value: 2000,
    suffix: "+",
    label: "Learning Hours",
    color: "#D4782A",
    gradient: "from-[#D4782A] to-[#CBA35C]",
  },
  {
    icon: Globe,
    value: 4,
    suffix: "",
    label: "Languages",
    sublabel: "Kannada • English • Telugu • Hindi",
    color: "#93A7CB",
    gradient: "from-[#93A7CB] to-[#13515D]",
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: "+",
    label: "Live Market Sessions",
    color: "#7A8C5F",
    gradient: "from-[#7A8C5F] to-[#6EE7B7]",
  },
];

export default function Philosophy() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#0A2C35] via-[#0D3D47] to-[#0A2C35] relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, #FDFCF5 0px, #FDFCF5 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #FDFCF5 0px, #FDFCF5 1px, transparent 1px, transparent 40px)'
      }} />
      
      {/* Multiple floating gradient orbs with animations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4782A]/10 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#CBA35C]/10 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7A8C5F]/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#0A2C35_100%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header with epic styling */}
        <Reveal className="text-center mb-20">
          <div className="relative inline-block mb-8">
            {/* Glowing lines */}
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-px w-24 bg-gradient-to-r from-transparent via-[#D4782A] to-[#D4782A] opacity-50" />
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-px w-24 bg-gradient-to-l from-transparent via-[#D4782A] to-[#D4782A] opacity-50" />
            
            {/* Floating dots */}
            <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D4782A] animate-pulse" />
            <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#CBA35C] animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <span className="relative text-xs font-mono uppercase tracking-[0.4em] text-[#D4782A] px-6 py-2 rounded-full border border-[#D4782A]/30 bg-[#D4782A]/5 backdrop-blur-sm">
              Our Mission
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto mb-6">
            <span className="inline-block relative">
              <span className="relative z-10">&ldquo;We build </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93A7CB] via-[#CBA35C] to-[#93A7CB] animate-gradient">
                knowledge, discipline,
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#D4782A]/20 to-[#CBA35C]/20 blur-sm" />
            </span>
            <br />
            and a structured approach to the markets.&rdquo;
          </h2>

          {/* Decorative accent */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-1 h-1 rounded-full bg-[#D4782A] animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-[#CBA35C] animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-1 h-1 rounded-full bg-[#7A8C5F] animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </Reveal>

        {/* Stats Grid */}
        <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5" stagger={0.05}>
          {STATS.map((stat, idx) => (
            <RevealItem key={stat.label}>
              <div className="group relative h-full">
                {/* Outer glow effect */}
                <div 
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"
                  style={{ background: `linear-gradient(135deg, ${stat.color}40, transparent)` }}
                />
                
                {/* Main card */}
                <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Animated gradient background */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${stat.gradient}`}
                    style={{ opacity: 0.05 }}
                  />

                  {/* Corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl"
                    style={{ background: `radial-gradient(circle at top right, ${stat.color}, transparent)` }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with multiple effects */}
                    <div className="relative w-12 h-12 mb-4">
                      {/* Rotating ring */}
                      <div 
                        className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-spin"
                        style={{ 
                          borderColor: `${stat.color}40`,
                          animationDuration: '3s'
                        }}
                      />
                      
                      {/* Icon container */}
                      <div 
                        className="relative w-full h-full rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                        style={{ 
                          background: `linear-gradient(135deg, ${stat.color}30, ${stat.color}10)`,
                          boxShadow: `0 0 20px ${stat.color}00, inset 0 1px 1px ${stat.color}40`
                        }}
                      >
                        <stat.icon 
                          className="w-6 h-6 transition-all duration-500" 
                          style={{ color: stat.color }}
                          strokeWidth={2}
                        />
                      </div>

                      {/* Orbiting dot */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <div 
                          className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full animate-spin"
                          style={{ 
                            backgroundColor: stat.color,
                            animationDuration: '2s',
                            boxShadow: `0 0 8px ${stat.color}`
                          }}
                        />
                      </div>
                    </div>

                    {/* Value with gradient text */}
                    <div className="mb-3">
                      {stat.stars ? (
                        <div className="flex flex-col gap-2">
                          <div 
                            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r"
                            style={{ 
                              backgroundImage: `linear-gradient(135deg, ${stat.color}, white)`
                            }}
                          >
                            {stat.value}{stat.suffix}
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(stat.stars)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="w-3 h-3 fill-[#CBA35C] text-[#CBA35C] group-hover:scale-110 transition-transform" 
                                style={{ transitionDelay: `${i * 50}ms` }}
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div 
                          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r"
                          style={{ 
                            backgroundImage: `linear-gradient(135deg, ${stat.color}, white)`
                          }}
                        >
                          <CountUp value={typeof stat.value === "number" ? stat.value : parseFloat(stat.value) || 0} duration={2} />
                          {stat.suffix}
                        </div>
                      )}
                    </div>

                    {/* Label */}
                    <div className="text-xs font-semibold text-white/90 leading-snug mb-1 group-hover:text-white transition-colors">
                      {stat.label}
                    </div>

                    {/* Sublabel */}
                    {stat.sublabel && (
                      <div className="text-[10px] text-[#93A7CB] leading-tight">
                        {stat.sublabel}
                      </div>
                    )}

                    {/* Animated bottom line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl overflow-hidden">
                      <div 
                        className={`h-full w-0 group-hover:w-full transition-all duration-[1.5s] ease-out bg-gradient-to-r ${stat.gradient}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}


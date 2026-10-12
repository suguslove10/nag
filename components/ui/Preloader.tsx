"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Particle {
  size: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Generate random particles only on the client to avoid SSR hydration mismatch
    const generated: Particle[] = Array.from({ length: 40 }, () => {
      const size = 2 + Math.random() * 4;
      const left = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = 2 + Math.random() * 3;
      const color = Math.random() > 0.5 ? "#D4782A" : "#CBA35C";
      return { size, left, delay, duration, color };
    });
    setParticles(generated);

    const timer = setTimeout(() => {
      animateOut();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const animateOut = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        document.body.style.overflow = "";
      },
    });

    tl.to(contentRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
    }).to(
      preloaderRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.3"
    );
  };

  if (!isLoading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#FDFCF5] flex items-center justify-center overflow-hidden"
    >
      {/* Fire Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-fire-rise"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              bottom: `-10px`,
              background: `radial-gradient(circle, ${p.color}, transparent)`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* Center Content */}
      <div ref={contentRef} className="relative z-10 flex items-center justify-center">
        {/* Circles with Fire Effect - Smaller Size */}
        <div className="relative w-[320px] h-[320px] flex items-center justify-center">
          {/* Outer Circle */}
          <div className="absolute inset-0 rounded-full border-3 border-[#D4782A]/20 animate-pulse-circle"></div>
          
          {/* Middle Circle */}
          <div className="absolute inset-8 rounded-full border-3 border-[#13515D]/30 animate-pulse-circle-delayed"></div>

          {/* Inner Glowing Circle with Text Inside - Static (no rotation) */}
          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#D4782A] via-[#CBA35C] to-[#13515D] shadow-[0_0_60px_rgba(212,120,42,0.6)] flex items-center justify-center">
            {/* Flame particles orbiting */}
            {[...Array(10)].map((_, i) => {
              const angle = (i * 360) / 10;
              return (
                <div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full bg-[#D4782A] animate-orbit-flame"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${angle}deg) translateX(75px)`,
                    animationDelay: `${i * 0.15}s`,
                    boxShadow: "0 0 12px #D4782A",
                  }}
                ></div>
              );
            })}

            {/* Text - CAPITAL MARKETS - Inside Inner Circle (Static) */}
            <div className="relative z-10 text-center px-6">
              <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight leading-tight mb-1.5" style={{ textShadow: '0 0 25px rgba(253, 252, 245, 0.8), 0 0 50px rgba(253, 252, 245, 0.5)' }}>
                <div className="animate-word-fade" style={{ animationDelay: "0s" }}>
                  <span className="text-[#FDFCF5]">
                    THE CAPITAL
                  </span>
                </div>
                <div className="animate-word-fade" style={{ animationDelay: "0.2s" }}>
                  <span className="text-[#FDFCF5]">MARKET</span>
                </div>
              </h1>
              
              <div className="font-sans text-[11px] md:text-xs text-[#FDFCF5]/90 tracking-wide animate-fade-in italic" style={{ animationDelay: "0.4s", textShadow: '0 0 15px rgba(253, 252, 245, 0.6)' }}>
                Learn. Invest. Grow.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fire-rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes pulse-circle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
        }

        @keyframes pulse-circle-delayed {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.7;
          }
        }

        @keyframes word-fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes orbit-flame {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fire-rise {
          animation: fire-rise linear infinite;
        }

        .animate-pulse-circle {
          animation: pulse-circle 2s ease-in-out infinite;
        }

        .animate-pulse-circle-delayed {
          animation: pulse-circle-delayed 2s ease-in-out infinite 0.3s;
        }

        .animate-word-fade {
          animation: word-fade 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-orbit-flame {
          animation: orbit-flame 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

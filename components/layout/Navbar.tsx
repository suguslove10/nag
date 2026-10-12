"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { siteConfig } from "@/config";

const NAV_LINKS = siteConfig.mainNav;

export function Logo({ className = "h-14 sm:h-16 w-auto", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt="The Capital Market"
      width={160}
      height={160}
      className={`${className} rounded-md object-contain transition-transform hover:scale-105 duration-200`}
      priority
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? "bg-[#2a1a4d]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : "bg-[#2a1a4d]"
      }`}
    >
      <nav className="max-w-7xl mx-auto py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 interactive group shrink-0">
            <Logo className="h-14 sm:h-16 w-auto" invert />
          </a>

          {/* Desktop Navigation Links - Pill Style */}
          <div className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 border border-white/20">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all interactive ${
                  index === 0 
                    ? "bg-white text-[#2a1a4d] shadow-lg" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Magnetic className="hidden sm:inline-block" strength={0.25}>
              <a
                href="#contact"
                className="btn-shine inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#2a1a4d] font-semibold text-sm hover:bg-white/90 transition-all interactive shadow-lg"
              >
                Book a Consultation
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Magnetic>

            {/* Mobile Toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg bg-[#F2EDDC] border border-[#13515D]/10 text-[#13515D] interactive"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden pt-4 pb-4 border-t border-[#13515D]/[0.08] mt-3 flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#4A6062] hover:text-[#13515D] hover:bg-[#F2EDDC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#13515D]/[0.08]">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-2.5 rounded-lg bg-[#13515D] text-[#FDFCF5] font-semibold text-center text-sm flex items-center justify-center gap-2"
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

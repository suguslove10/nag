import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";
import { siteConfig } from "@/config";

const FOOTER_COLUMNS = siteConfig.footerNav;

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-[#13515D] text-[#93A7CB]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 border-b border-white/10 mb-10">
          <div className="space-y-4 max-w-sm">
            <h2 className="text-2xl font-serif font-bold tracking-wide text-[#FDFCF5]">
              <span className="text-[#CBA35C]">THE</span> CAPITAL MARKET
            </h2>
            <p className="text-xs leading-relaxed text-[#FDFCF5]">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href={siteConfig.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FDFCF5] hover:text-[#CBA35C] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href={siteConfig.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FDFCF5] hover:text-[#CBA35C] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20}/>
              </a>
              <a 
                href={siteConfig.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FDFCF5] hover:text-[#CBA35C] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href={siteConfig.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FDFCF5] hover:text-[#CBA35C] transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a 
                href={siteConfig.socials.telegram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FDFCF5] hover:text-[#CBA35C] transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#FDFCF5] mb-4">
                  {col.title}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-xs text-[#FDFCF5] hover:text-[#D4782A] transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[11px] font-mono text-center text-[#93A7CB]">
          &copy; {new Date().getFullYear()} The Capital Market. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

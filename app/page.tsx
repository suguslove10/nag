import type { Metadata } from "next";
import { siteConfig } from "@/config";
import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  ProcessDifference,
  CurriculumMap,
  Founder,
  WhyChoose,
  LearningOptions,
  CourseComparison,
  Philosophy,
  MentorProfile,
  FAQ,
  FinalCta,
  Contact,
} from "@/components/sections";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
};

export default function Home() {
  return (
    <main className="bg-[#FDFCF5] text-[#142B2E]">
      <Navbar />

      {/* 01 HERO */}
      <Hero />

      {/* 02 THE DIFFERENCE IS THE PROCESS */}
      <ProcessDifference />

      {/* 03 LEARNING SYSTEM */}
      <CurriculumMap />

      {/* 04 FOUNDER */}
      <Founder />

      {/* 05 WHY CHOOSE US */}
      <WhyChoose />

      {/* 06 PROGRAMS / PRICING */}
      <LearningOptions />

      {/* 08 CASE STUDY / COMPARISON */}
      <CourseComparison />

      {/* 09 OUR MISSION */}
      <Philosophy />

      {/* 10 MENTORS & RESULTS */}
      <MentorProfile />

      {/* 11 FAQ */}
      <FAQ />

      {/* 12 FINAL CTA */}
      <FinalCta />

      {/* 13 CONTACT & HQ */}
      <Contact />

      {/* 14 FOOTER */}
      <Footer />
    </main>
  );
}

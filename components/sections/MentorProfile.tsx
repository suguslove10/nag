"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "@/components/ui/Reveal";

const STUDENT_REVIEWS = [
  {
    name: "Kavya Reddy",
    location: "Bengaluru",
    quote: "The mentorship structure is unlike anything else — weekly reviews kept me accountable to my risk rules.",
  },
  {
    name: "Aditya Singh",
    location: "Delhi NCR",
    quote: "Passed my prop firm challenge in six weeks using the orderflow playbook from Module 3.",
  },
  {
    name: "Meera Nair",
    location: "Kochi",
    quote: "I finally trade with a plan instead of emotion. The global correlation module changed how I read Nifty.",
  },
];

function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6 -ml-6">
          {STUDENT_REVIEWS.map((r) => (
            <div key={r.name} className="pl-6 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="h-full bg-white rounded-2xl border border-[#13515D]/[0.08] p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#CBA35C] text-[#CBA35C]" />
                  ))}
                </div>
                <p className="text-sm text-[#142B2E] leading-relaxed mb-6">"{r.quote}"</p>
                <div className="text-sm font-bold text-[#13515D]">{r.name}</div>
                <div className="text-xs text-[#4A6062] font-mono">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-7">
        <div className="flex items-center gap-2">
          {STUDENT_REVIEWS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 interactive ${
                selected === i ? "w-6 bg-[#D4782A]" : "w-1.5 bg-[#13515D]/15"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous"
            onClick={() => emblaApi?.scrollPrev()}
            className="w-9 h-9 rounded-full border border-[#13515D]/15 flex items-center justify-center text-[#4A6062] hover:text-[#13515D] hover:border-[#13515D]/30 transition-all interactive"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => emblaApi?.scrollNext()}
            className="w-9 h-9 rounded-full border border-[#13515D]/15 flex items-center justify-center text-[#4A6062] hover:text-[#13515D] hover:border-[#13515D]/30 transition-all interactive"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MentorProfile() {
  return (
    <section id="mentorship" className="py-12 sm:py-16 bg-[#FDFCF5]">
      <div className="container-custom">
        <Reveal className="mb-12 max-w-2xl">
          <span className="eyebrow mb-5 inline-block">Student Results</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1]">
            Hear From Traders Who’ve Grown With Us
          </h2>
        </Reveal>

        {/* Student Testimonials — draggable carousel */}
        <Reveal delay={0.1}>
          <TestimonialCarousel />
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Send, Mail, Phone, ChevronDown, Loader2, ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import { sendLeadInquiry } from "@/lib/emailjs";
import { siteConfig } from "@/config";
import type { LeadFormData, FormErrors } from "@/types/lead";

const PROGRAM_OPTIONS = [
  "Indian Stock Market (NSE/BSE)",
  "Forex",
  "Gold (XAU/USD)",
  "Cryptocurrency (Bitcoin)",
  "F&O",
] as const;

const MENTORSHIP_PROGRAMS = ["1-to-4 Mentorship", "1-to-2 Mentorship", "1-to-1 Mentorship", "3-Day Trading Mentorship"];

const EXPERIENCE_OPTIONS = [
  "Complete Beginner",
  "Beginner — Learning Basics",
  "Intermediate Trader",
  "Experienced Trader",
  "Already Trading but Not Consistently Profitable",
];

const MENTORSHIP_EXPERIENCE_OPTIONS = ["Never traded", "Less than 6 months", "6–12 months", "1–3 years", "3+ years"];

const PRIMARY_GOAL_OPTIONS = [
  "Learn Trading from Scratch",
  "Improve My Technical Analysis",
  "Become Consistently Profitable",
  "Improve Risk Management",
  "Build a Professional Trading Career",
];

const START_TIMELINE_OPTIONS = ["Immediately", "Within 1 Week", "Within 1 Month", "Just Exploring"];

const INDIAN_PHONE_REGEX = /^(?:\+?91)?[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM_DATA: LeadFormData = {
  fullName: "",
  whatsappNumber: "",
  email: "",
  interestedIn: "",
  experience: "",
  goals: "",
  mentorshipExperience: "",
  primaryGoal: "",
  startTimeline: "",
};

function validate(data: LeadFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Name looks too short.";
  }

  const phone = data.whatsappNumber.replace(/[\s-]/g, "");
  if (!phone) {
    errors.whatsappNumber = "Please enter your WhatsApp number.";
  } else if (!INDIAN_PHONE_REGEX.test(phone)) {
    errors.whatsappNumber = "Enter a valid 10-digit Indian mobile number.";
  }

  if (data.email.trim() && !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.interestedIn) errors.interestedIn = "Please select a program.";
  if (!data.experience) errors.experience = "Please select your experience level.";


  if (MENTORSHIP_PROGRAMS.includes(data.interestedIn)) {
    if (!data.mentorshipExperience) errors.mentorshipExperience = "Please select your trading experience.";
    if (!data.primaryGoal) errors.primaryGoal = "Please select your primary goal.";
    if (!data.startTimeline) errors.startTimeline = "Please select a start timeline.";
  }

  return errors;
}

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-xs font-mono uppercase tracking-wider text-[#4A6062] mb-2">
      {children}
      {required && <span className="text-[#D4782A] ml-1">*</span>}
    </label>
  );
}

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-[#DC2626]">{message}</p>;
}

function SelectField({
  label,
  required,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-[#FDFCF5] border text-sm ${
            value ? "text-[#142B2E]" : "text-[#4A6062]/50"
          } ${error ? "border-[#DC2626]" : "border-[#13515D]/[0.12]"}`}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-[#142B2E]">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-[#4A6062] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
      <ErrorText message={error} />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const showMentorshipFields = MENTORSHIP_PROGRAMS.includes(formData.interestedIn);

  function updateField<K extends keyof LeadFormData>(key: K, value: LeadFormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await sendLeadInquiry(formData);

      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);

      // Auto-hide success message after 10 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 10000);
    } catch (err: unknown) {
      console.error("EmailJS submission error:", err);
      setSubmitError("Failed to send message. Please try again or reach out to us on WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#F8F5EA]">
      <div className="container-custom">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5 inline-block">Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1]">
            Want to become a professional trader?
          </h2>
        </Reveal>

        <div className="max-w-5xl grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Enquiry form */}
          <Reveal className="rounded-2xl bg-white border border-[#13515D]/[0.08] p-7 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="mb-1">
                <h3 className="text-xl font-bold font-heading text-[#13515D] mb-2">Start Your Trading Journey</h3>
                <p className="text-sm text-[#4A6062] leading-relaxed">
                  Fill in your details and our team will help you choose the right trading program.
                </p>
              </div>

              <div>
                <FieldLabel required>Full Name</FieldLabel>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FDFCF5] border text-sm text-[#142B2E] placeholder:text-[#4A6062]/50 ${
                    errors.fullName ? "border-[#DC2626]" : "border-[#13515D]/[0.12]"
                  }`}
                />
                <ErrorText message={errors.fullName} />
              </div>

              <div>
                <FieldLabel required>WhatsApp Number</FieldLabel>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="Enter your WhatsApp number"
                  value={formData.whatsappNumber}
                  onChange={(e) => updateField("whatsappNumber", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FDFCF5] border text-sm text-[#142B2E] placeholder:text-[#4A6062]/50 ${
                    errors.whatsappNumber ? "border-[#DC2626]" : "border-[#13515D]/[0.12]"
                  }`}
                />
                <ErrorText message={errors.whatsappNumber} />
              </div>

              <div>
                <FieldLabel>Email Address</FieldLabel>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FDFCF5] border text-sm text-[#142B2E] placeholder:text-[#4A6062]/50 ${
                    errors.email ? "border-[#DC2626]" : "border-[#13515D]/[0.12]"
                  }`}
                />
                <ErrorText message={errors.email} />
              </div>

              <SelectField
                label="I'm Interested In"
                required
                value={formData.interestedIn}
                onChange={(v) => updateField("interestedIn", v)}
                options={PROGRAM_OPTIONS}
                placeholder="Select a program"
                error={errors.interestedIn}
              />

              <SelectField
                label="My Trading Experience"
                required
                value={formData.experience}
                onChange={(v) => updateField("experience", v)}
                options={EXPERIENCE_OPTIONS}
                placeholder="Select your experience level"
                error={errors.experience}
              />

              <AnimatePresence initial={false}>
                {showMentorshipFields && (
                  <motion.div
                    key="mentorship-fields"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-5 pt-5 border-t border-[#13515D]/[0.08]">
                      <p className="-mt-1 text-xs text-[#4A6062]">
                        A few more details so we can match you with the right mentor.
                      </p>
                      <SelectField
                        label="Current Trading Experience"
                        required
                        value={formData.mentorshipExperience}
                        onChange={(v) => updateField("mentorshipExperience", v)}
                        options={MENTORSHIP_EXPERIENCE_OPTIONS}
                        placeholder="Select an option"
                        error={errors.mentorshipExperience}
                      />
                      <SelectField
                        label="What Is Your Primary Goal?"
                        required
                        value={formData.primaryGoal}
                        onChange={(v) => updateField("primaryGoal", v)}
                        options={PRIMARY_GOAL_OPTIONS}
                        placeholder="Select your primary goal"
                        error={errors.primaryGoal}
                      />
                      <SelectField
                        label="How Soon Do You Want to Start?"
                        required
                        value={formData.startTimeline}
                        onChange={(v) => updateField("startTimeline", v)}
                        options={START_TIMELINE_OPTIONS}
                        placeholder="Select a timeline"
                        error={errors.startTimeline}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <FieldLabel>Tell Us About Your Trading Goals</FieldLabel>
                <textarea
                  rows={4}
                  placeholder="Tell us about your trading goals or ask any questions."
                  value={formData.goals}
                  onChange={(e) => updateField("goals", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FDFCF5] border border-[#13515D]/[0.12] text-sm text-[#142B2E] placeholder:text-[#4A6062]/50 resize-none"
                />
              </div>

              {submitError && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-[#DC2626] text-xs leading-relaxed">
                  {submitError}
                </div>
              )}

              <Magnetic strength={0.15} className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-shine w-full py-3.5 rounded-full bg-[#D4782A] text-[#FDFCF5] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#B8651F] transition-all interactive disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Submitting
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Start My Trading Journey
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </Magnetic>

              {/* Success Notification - Displays for 10 seconds below the form */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="p-4 rounded-xl bg-[#7A8C5F]/15 border border-[#7A8C5F]/35 flex items-start gap-3.5 mt-1"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#7A8C5F]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#7A8C5F]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#13515D] mb-0.5">Thank you! Your enquiry has been received.</h4>
                      <p className="text-xs text-[#4A6062] leading-relaxed">
                        Our team will contact you within one business day to discuss your trading goals.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>

          {/* Right: India map with HQ pin */}
          <Reveal delay={0.15} className="rounded-2xl bg-gradient-to-br from-[#13515D] to-[#0C3841] p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[420px]">
            {/* Animated background */}
            <div className="absolute inset-0 market-grid market-grid-dark opacity-[0.08]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4782A]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#CBA35C]/10 blur-[100px] rounded-full" />
            
            {/* Detailed India map with better styling */}
            <div className="relative z-10 flex flex-col items-center w-full">
              <svg viewBox="0 0 220 260" className="w-64 h-auto mb-6" fill="none">
                {/* India outline - more detailed */}
                <path
                  d="M95 12 L105 14 L115 16 L124 22 L130 32 L138 38 L146 42 L152 52 L156 64 L150 72 L154 82 L148 94 L152 106 L146 118 L148 130 L142 142 L136 154 L130 166 L122 176 L116 186 L110 196 L104 206 L98 216 L92 210 L88 200 L82 190 L76 180 L70 172 L64 162 L58 152 L52 142 L48 132 L44 122 L42 112 L38 102 L36 92 L40 82 L36 72 L40 62 L44 52 L50 44 L58 38 L66 32 L74 26 L82 20 L88 16 Z"
                  fill="url(#mapGradient)"
                  stroke="#93A7CB"
                  strokeWidth="2"
                  className="drop-shadow-lg"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(147, 167, 203, 0.15))'
                  }}
                />
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1B6A79" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0C3841" stopOpacity="0.9" />
                  </linearGradient>
                  
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Major cities indicators */}
                <g opacity="0.5">
                  <circle cx="72" cy="80" r="2" fill="#CBA35C" /> {/* Mumbai */}
                  <circle cx="118" cy="96" r="2" fill="#CBA35C" /> {/* Hyderabad */}
                  <circle cx="136" cy="136" r="2" fill="#CBA35C" /> {/* Chennai */}
                  <circle cx="65" cy="35" r="2" fill="#CBA35C" /> {/* Delhi */}
                </g>
                
                {/* Bangalore HQ - Animated pin */}
                <g className="animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                  {/* Pulsing rings */}
                  <circle cx="98" cy="182" r="20" fill="#D4782A" opacity="0" className="animate-ping-ring">
                    <animate attributeName="r" values="12;28;12" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="98" cy="182" r="16" fill="#D4782A" opacity="0" className="animate-ping-ring" style={{ animationDelay: '1s' }}>
                    <animate attributeName="r" values="10;24;10" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Location pin */}
                  <g filter="url(#glow)">
                    <path 
                      d="M98 172 C92 172 87 177 87 183 C87 191 98 198 98 198 C98 198 109 191 109 183 C109 177 104 172 98 172 Z" 
                      fill="#D4782A"
                      stroke="#FDFCF5"
                      strokeWidth="2"
                    />
                    <circle cx="98" cy="183" r="3" fill="#FDFCF5" />
                  </g>
                  
                  {/* Label */}
                  <text x="98" y="210" fill="#FDFCF5" fontSize="11" fontWeight="600" textAnchor="middle" className="font-sans">
                    Bangalore
                  </text>
                </g>
                
                {/* Connecting lines to HQ (subtle) */}
                <g opacity="0.2" stroke="#CBA35C" strokeWidth="1" strokeDasharray="2,2">
                  <line x1="72" y1="80" x2="98" y2="182" />
                  <line x1="118" y1="96" x2="98" y2="182" />
                  <line x1="65" y1="35" x2="98" y2="182" />
                </g>
              </svg>
              
              {/* HQ Badge */}
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#FDFCF5] shadow-lg">
                <div className="p-1.5 rounded-full bg-[#D4782A]">
                  <MapPin className="w-4 h-4 text-[#FDFCF5]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#CBA35C]">Academy</div>
                  <div className="text-sm font-semibold">{siteConfig.contact.location}</div>
                </div>
              </div>

              {/* Contact details */}
              <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-[#D4782A]/20 group-hover:bg-[#D4782A]/30 transition-colors">
                    <Mail className="w-4 h-4 text-[#CBA35C]" />
                  </div>
                  <span className="text-sm text-[#CBD9DA] group-hover:text-[#FDFCF5] transition-colors">{siteConfig.contact.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-[#D4782A]/20 group-hover:bg-[#D4782A]/30 transition-colors">
                    <Phone className="w-4 h-4 text-[#CBA35C]" />
                  </div>
                  <span className="text-sm text-[#CBD9DA] group-hover:text-[#FDFCF5] transition-colors">{siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


import emailjs from "@emailjs/browser";
import { env } from "@/config/env";
import type { LeadFormData, EmailJSTemplateParams } from "@/types/lead";

/**
 * Service to send lead inquiries via EmailJS using environment variables.
 * Ensures zero hardcoding of service IDs or public keys.
 */
export async function sendLeadInquiry(formData: LeadFormData): Promise<void> {
  const { serviceId, templateId, publicKey } = env.emailjs;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS configuration missing. Please check your environment variables in .env.local"
    );
  }

  const templateParams: EmailJSTemplateParams = {
    from_name: formData.fullName,
    phone_number: formData.whatsappNumber,
    user_email: formData.email || "Not provided",
    course_interest: formData.interestedIn,
    experience_level: formData.experience,
    contactMethod: formData.contactMethod || "WhatsApp",
    goals: formData.goals || "None specified",
    primary_goal: formData.primaryGoal || "None",
    start_timeline: formData.startTimeline || "None",
    message: `
New Lead Submission:
Name: ${formData.fullName}
WhatsApp: ${formData.whatsappNumber}
Email: ${formData.email || "Not provided"}
Interested In: ${formData.interestedIn}
Experience: ${formData.experience}
Preferred Contact Method: ${formData.contactMethod || "WhatsApp"}
Goals / Notes: ${formData.goals || "None"}
    `.trim(),
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey);
}

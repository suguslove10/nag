export interface LeadFormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
  interestedIn: string;
  experience: string;
  contactMethod?: string;
  goals: string;
  mentorshipExperience: string;
  primaryGoal: string;
  startTimeline: string;
}

export interface LeadSubmission extends LeadFormData {
  submittedAt: string;
  source: "website-contact-form";
}

export type FormErrors = Partial<Record<keyof LeadFormData, string>>;

export interface EmailJSTemplateParams extends Record<string, unknown> {
  from_name: string;
  phone_number: string;
  user_email: string;
  course_interest: string;
  experience_level: string;
  contactMethod: string;
  goals: string;
  primary_goal: string;
  start_timeline: string;
  message: string;
}

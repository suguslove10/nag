import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name} - Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF5]">
      {/* Header */}
      <header className="bg-[#13515D] py-6 border-b border-white/10">
        <div className="container-custom">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#FDFCF5] hover:text-[#CBA35C] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 sm:py-24">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-slate max-w-none">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#13515D] mb-4">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-[#4A6062] mb-2">
              <strong>The Capital Market</strong>
            </p>
            
            <p className="text-sm text-[#4A6062] mb-8">
              <strong>Last Updated:</strong> 10 October 2026
            </p>

            <div className="space-y-8 text-[#4A6062] leading-relaxed">
              <p>
                At The Capital Market, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, explore our trading education programmes, enquire about mentorship, or contact our team.
              </p>

              <p>
                By using our website, you acknowledge that you have read this Privacy Policy.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  1. Information We Collect
                </h2>
                <p>
                  We may collect the following types of information when you interact with our website or services.
                </p>

                <h3 className="text-xl font-bold text-[#13515D] mt-6 mb-3">
                  Personal Information
                </h3>
                <p>
                  When you submit an enquiry, request information about our courses, or contact our team, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Mobile number or WhatsApp number</li>
                  <li>Preferred trading course or mentorship programme</li>
                  <li>Trading experience or learning preferences, if requested</li>
                  <li>Any additional information you voluntarily provide through our contact forms or communications</li>
                </ul>

                <h3 className="text-xl font-bold text-[#13515D] mt-6 mb-3">
                  Technical Information
                </h3>
                <p>
                  When you browse our website, certain technical information may be collected automatically, depending on the tools and services enabled on our website. This may include your IP address, browser type, device information, pages visited, referral source, and approximate usage data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  2. How We Use Your Information
                </h2>
                <p>
                  We use the information collected for legitimate business and service-related purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responding to course and mentorship enquiries.</li>
                  <li>Providing details about our trading education programmes, fees, and schedules.</li>
                  <li>Contacting you regarding your requested consultation or enrolment.</li>
                  <li>Sharing relevant programme updates and educational information where permitted.</li>
                  <li>Improving our website experience, content, performance, and services.</li>
                  <li>Understanding visitor interactions and website performance through analytics, where enabled.</li>
                  <li>Maintaining website security, preventing misuse, and complying with applicable legal obligations.</li>
                </ul>
                <p className="mt-4">
                  We aim to collect and use only the information reasonably necessary for these purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  3. Course Enquiries and Mentorship
                </h2>
                <p>
                  Our website allows visitors to explore trading education, market analysis, mentorship opportunities, and learning programmes.
                </p>
                <p>
                  When you submit an enquiry, we may use your contact details to discuss your learning goals, explain programme options, answer questions, and help you understand the enrolment process.
                </p>
                <p>
                  Submitting an enquiry does not automatically enrol you in a programme or create a financial advisory relationship.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  4. Marketing Communications
                </h2>
                <p>
                  If you have requested information about our programmes or provided permission where required, we may contact you through email, phone calls, or WhatsApp regarding relevant courses, mentorship opportunities, announcements, and educational updates.
                </p>
                <p>
                  You may request to stop receiving promotional communications at any time by contacting us or using an available unsubscribe option.
                </p>
                <p>
                  We will continue to send essential service-related communications where necessary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  5. Cookies and Analytics
                </h2>
                <p>
                  Our website may use cookies, analytics tools, or similar technologies to understand how visitors interact with our pages and to improve website performance.
                </p>
                <p>
                  Depending on the tools implemented, these technologies may help us understand page visits, traffic sources, visitor behaviour, and interactions with enquiry forms.
                </p>
                <p>
                  You can manage cookies through your browser settings. Disabling certain cookies may affect some website functionality.
                </p>
                <p>
                  Where required, we will request consent before using cookies or tracking technologies that require it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  6. Sharing of Information
                </h2>
                <p>
                  We do not sell your personal information to third parties.
                </p>
                <p>
                  We may share relevant information only when reasonably necessary for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service providers:</strong> Website hosting, form processing, email delivery, analytics, and communication services.</li>
                  <li><strong>Business operations:</strong> Managing course enquiries, registrations, and customer support.</li>
                  <li><strong>Legal requirements:</strong> Responding to lawful requests from authorised authorities or meeting applicable legal obligations.</li>
                  <li><strong>Security and protection:</strong> Investigating fraud, misuse, unauthorised access, or threats to our website and services.</li>
                </ul>
                <p className="mt-4">
                  Where third-party service providers process personal information on our behalf, we aim to use appropriate safeguards and limit access to what is necessary.
                </p>
                <p>
                  Third-party services may process information according to their own privacy policies and applicable terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  7. Data Security
                </h2>
                <p>
                  We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss, or misuse.
                </p>
                <p>
                  However, no website, electronic transmission, or data storage system can be guaranteed to be completely secure. We therefore cannot promise absolute security of information transmitted over the internet.
                </p>
                <p>
                  We encourage visitors to share only the information necessary for their enquiry and to avoid submitting passwords, banking credentials, or other highly sensitive information through general contact forms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  8. Data Retention
                </h2>
                <p>
                  We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this policy, manage enquiries and enrolments, maintain appropriate records, resolve disputes, or comply with applicable legal requirements.
                </p>
                <p>
                  When information is no longer required, we will take reasonable steps to delete it or anonymise it, subject to applicable retention obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  9. Your Privacy Rights and Choices
                </h2>
                <p>
                  Subject to applicable law, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request information about the personal data we hold about you.</li>
                  <li>Request correction of inaccurate or incomplete information.</li>
                  <li>Request deletion of personal information where applicable.</li>
                  <li>Withdraw consent for processing where consent is the relevant legal basis.</li>
                  <li>Opt out of promotional communications.</li>
                  <li>Raise a concern or submit a privacy-related request.</li>
                </ul>
                <p className="mt-4">
                  To exercise an applicable right, please contact us using the details provided in the Contact Us section below. We may need to verify your identity before processing certain requests.
                </p>
                <p>
                  We will handle requests in accordance with applicable Indian data protection law and other laws that apply to our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  10. Third-Party Links and Services
                </h2>
                <p>
                  Our website may contain links to external websites, social media platforms, video platforms, messaging services, or other third-party resources.
                </p>
                <p>
                  These external services are not necessarily controlled by The Capital Market. We are not responsible for their privacy practices, security measures, or content.
                </p>
                <p>
                  We encourage you to review the relevant third-party privacy policies before sharing personal information with those services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  11. Children's Privacy
                </h2>
                <p>
                  Our website and trading education programmes are not intended to knowingly collect personal information from children without any legally required consent or authorisation.
                </p>
                <p>
                  If you believe a child has provided personal information inappropriately, please contact us so that we can review the matter and take appropriate action in accordance with applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  12. Trading Education and Financial Information
                </h2>
                <p>
                  The Capital Market provides trading education, market-related learning resources, and mentorship intended to support the development of trading knowledge and skills.
                </p>
                <p>
                  Personal information submitted through our website is used for the purposes described in this Privacy Policy. We do not require you to disclose brokerage account passwords, trading account login credentials, or payment card security codes through our general enquiry forms.
                </p>
                <p>
                  Any educational content, market examples, or trading-related material on the website should not be interpreted as a guarantee of trading profits or financial outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  13. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our website, business practices, technology, or applicable legal requirements.
                </p>
                <p>
                  Any updated version will be published on this page with a revised "Last Updated" date. We encourage you to review this page periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#13515D] mt-12 mb-4">
                  14. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy, wish to exercise an applicable privacy right, or have concerns about how your personal information is handled, please contact us.
                </p>
                <p className="mt-4">
                  <strong>{siteConfig.name}</strong>
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-[#13515D] underline">{siteConfig.contact.email}</a></li>
                  <li><strong>Phone / WhatsApp:</strong> <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-[#13515D] underline">{siteConfig.contact.phone}</a></li>
                  <li><strong>Business Address:</strong> {siteConfig.contact.location}</li>
                  <li><strong>Website:</strong> <a href={siteConfig.url} className="text-[#13515D] underline">{siteConfig.url}</a></li>
                </ul>
                <p className="mt-4">
                  We will review privacy-related enquiries and respond in accordance with applicable requirements.
                </p>
              </section>

              <div className="mt-12 p-6 bg-[#13515D]/5 rounded-xl border border-[#13515D]/10">
                <p className="text-center text-[#13515D] font-semibold italic">
                  Your trust matters to us. We are committed to handling your information responsibly while helping you explore your trading education journey.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer Link Section */}
      <footer className="bg-[#13515D] py-8 border-t border-white/10">
        <div className="container-custom text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#FDFCF5] hover:text-[#CBA35C] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}

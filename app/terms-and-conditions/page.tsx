import React from 'react';
import { SITE_CONFIG } from '@/constants/metadata';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#6D1B2B] mb-8">Terms and Conditions</h1>

        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          <p><strong>Effective Date:</strong> January 1, 2026</p>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using the {SITE_CONFIG.name} website ({SITE_CONFIG.url}), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">2. Medical Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">3. Appointments and Services</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Appointments are not booked directly through our website form; you can contact us via WhatsApp or call our emergency hotlines. All consultations are subject to doctor availability and confirmation by hospital staff.</li>
              <li>In case of medical emergencies, please do not rely solely on website messages. Visit the nearest emergency room or call our 24/7 hotline immediately.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">4. User Responsibilities</h2>
            <p>When using our website, you agree to provide accurate, current, and complete information. You are prohibited from using the site to post or transmit any unlawful, threatening, libelous, defamatory, obscene, or pornographic material.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">5. Intellectual Property</h2>
            <p>All content included on this site, such as text, graphics, logos, images, and software, is the property of {SITE_CONFIG.name} and protected by Indian and international copyright laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">6. Visual Content and AI Usage</h2>
            <p>To enhance the visual experience of our website, certain images and illustrations have been generated or enhanced using artificial intelligence (AI). These visuals are used solely for illustrative and promotional purposes and should not be interpreted as photographs of actual patients, medical professionals, or hospital facilities unless explicitly stated. Ojas Hospital is committed to providing accurate information regarding its healthcare services, doctors, and medical facilities.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">7. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India. You irrevocably submit to the exclusive jurisdiction of the courts in {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

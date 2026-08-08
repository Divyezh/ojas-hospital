import React from 'react';
import { SITE_CONFIG } from '@/constants/metadata';
import { EMERGENCY_INFO } from '@/constants/hospitalData';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#6D1B2B] mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          <p><strong>Effective Date:</strong> January 1, 2026</p>
          
          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">1. Introduction</h2>
            <p>Welcome to {SITE_CONFIG.name}. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ({SITE_CONFIG.url}), use our services, or interact with us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">2. Information We Collect</h2>
            <p>We do not collect any personal data or identifiable information through this website. You are free to browse our website anonymously to learn about our hospital, services, and doctors without providing any personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">3. Use of Information</h2>
            <p>Since we do not collect personal information through this website, we do not use, store, or share your personal data. Any communication initiated by you through external channels (like direct phone calls or WhatsApp) is strictly confidential and used solely for the purpose of addressing your medical inquiries.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">4. Security</h2>
            <p>While we do not collect personal information on this website, we are committed to ensuring that our website remains a secure environment for all visitors. Any direct communications with our hospital are handled with strict confidentiality in accordance with standard medical privacy practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6D1B2B] mb-3">5. Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#BFA15F] font-medium hover:underline">{SITE_CONFIG.email}</a> or by post to:</p>
            <address className="not-italic mt-2 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <strong>{SITE_CONFIG.name}</strong><br />
              {SITE_CONFIG.address.street}, {SITE_CONFIG.address.suite}<br />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}<br />
              {SITE_CONFIG.address.country}<br /><br />
              <strong>Hotline:</strong> {EMERGENCY_INFO?.hotline || SITE_CONFIG.telephone}
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}

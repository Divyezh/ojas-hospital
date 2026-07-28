'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import { SITE_CONFIG } from '@/constants/metadata';
import { EMERGENCY_INFO } from '@/constants/hospitalData';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeyPot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeyPot) {
      reset();
      return;
    }

    setIsSubmitting(true);

    const message = `*New Inquiry from ${data.fullName}*\n\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Subject:* ${data.subject}\n\n*Message:*\n${data.message}`;
    
    // Obfuscate phone number parts
    const p1 = '9175';
    const p2 = '7484';
    const p3 = '0735';
    const whatsappUrl = `https://wa.me/${p1}${p2}${p3}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    showToast('Redirecting to WhatsApp...', 'success');
    reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-block relative">
                <span className="text-xs font-bold uppercase tracking-widest text-maroon-700">Get In Touch</span>
                <div className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-maroon-700 rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-charcoal tracking-tight">
                Contact <span className="text-maroon-700">Ojas Hospital</span>
              </h2>
              <p className="text-base text-charcoal/80 leading-relaxed">
                Whether you have clinical inquiries, insurance questions, or need guidance on travel for care, our patient services team is available around the clock.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-maroon-100 shadow-soft-sm">
                <div className="p-3 rounded-xl bg-maroon-100 text-maroon-700 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal">Hospital Campus Address</h3>
                  <p className="text-xs text-charcoal/70 mt-1">{EMERGENCY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-maroon-100 shadow-soft-sm">
                <div className="p-3 rounded-xl bg-maroon-100 text-maroon-700 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal">Emergency & General Hotlines</h3>
                  <p className="text-xs text-charcoal/70 mt-1">
                    Phone: <a href={`tel:+91${'75748'}${'40735'}`} className="font-bold text-charcoal">+91 75748 40735</a>
                  </p>
                  <p className="text-xs text-charcoal/70">
                    Alternate: <a href={`tel:+91${'97372'}${'90729'}`} className="font-bold text-charcoal">+91 97372 90729</a>
                  </p>
                  <p className="text-xs text-charcoal/70 mt-1">
                    Emergency: <a href={`tel:+91${'98251'}${'37768'}`} className="font-bold text-maroon-700">+91 98251 37768</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-maroon-100 shadow-soft-sm">
                <div className="p-3 rounded-xl bg-maroon-100 text-maroon-700 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal">Operational Hours</h3>
                  <p className="text-xs text-charcoal/70 mt-1">Hospital: <strong>Open 24 Hours</strong></p>
                  <p className="text-xs text-charcoal/70">Emergency: <strong>Available 24×7</strong></p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-maroon-100 shadow-md bg-white">
              <iframe
                src="https://maps.google.com/maps?q=Ojas+Hospital,+Jasval+Bhavan,+Char+Rasta,+Rakhial,+Ahmedabad,+Gujarat+380021,+India&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ojas Hospital Google Map"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 border-maroon-100 shadow-soft-lg bg-white">
              <h3 className="text-2xl font-bold text-charcoal tracking-tight mb-2">Send Us a Direct Message</h3>
              <p className="text-xs sm:text-sm text-charcoal/60 mb-6">
                Fill out the form below. For immediate medical emergencies, please dial our emergency hotline directly.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Anti-spam Honeypot */}
                <input
                  type="text"
                  {...register('honeyPot')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal/80 mb-1">Full Name *</label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl border border-maroon-100 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700 focus:border-transparent transition-all bg-cream/30"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-maroon-700 mt-1 font-medium">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal/80 mb-1">Email Address *</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="eleanor@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-maroon-100 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700 focus:border-transparent transition-all bg-cream/30"
                    />
                    {errors.email && (
                      <p className="text-xs text-maroon-700 mt-1 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal/80 mb-1">Phone Number *</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-maroon-100 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700 focus:border-transparent transition-all bg-cream/30"
                    />
                    {errors.phone && (
                      <p className="text-xs text-maroon-700 mt-1 font-medium">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal/80 mb-1">Subject *</label>
                    <input
                      {...register('subject')}
                      type="text"
                      placeholder="Appointment or General Inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-maroon-100 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700 focus:border-transparent transition-all bg-cream/30"
                    />
                    {errors.subject && (
                      <p className="text-xs text-maroon-700 mt-1 font-medium">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal/80 mb-1">Message Details *</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Describe your inquiry or preferred dates..."
                    className="w-full px-4 py-3 rounded-xl border border-maroon-100 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700 focus:border-transparent transition-all resize-none bg-cream/30"
                  />
                  {errors.message && (
                    <p className="text-xs text-maroon-700 mt-1 font-medium">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-maroon-700 text-white py-3 rounded-xl hover:bg-maroon-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg shadow-maroon-900/20"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Sparkles, ShieldCheck, Award } from 'lucide-react';

export function About() {
  const pillars = [
    {
      title: "Mission",
      description: "Deliver compassionate and affordable healthcare for every patient.",
      icon: Heart,
    },
    {
      title: "Vision",
      description: "To become one of Ahmedabad's most trusted community healthcare providers.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Featured Hospital Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full h-95 sm:h-120 lg:h-135 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-maroon-100 group">
              <Image
                src="/hospital.png"
                alt="Ojas Multispeciality Hospital Building in Rakhial, Ahmedabad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block relative">
              <span className="text-xs font-bold uppercase tracking-widest text-maroon-700">About Us</span>
              <div className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-maroon-700 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-charcoal tracking-tight leading-tight">
              About <span className="gradient-text-primary">Ojas Hospital</span>
            </h2>

            <p className="text-base text-charcoal/80 leading-relaxed">
              Ojas Hospital is a trusted multispeciality hospital located in Rakhial, Ahmedabad. Our mission is to provide quality healthcare with compassion, modern medical facilities, and experienced doctors while ensuring every patient receives personalized attention.
            </p>

            {/* Pillars */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-4 pt-2"
            >
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-maroon-100 hover:bg-cream/50 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-maroon-100 text-maroon-700 shrink-0">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-charcoal">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-charcoal/70 mt-1 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature Checklist - Why Choose Us */}
            <div className="grid grid-cols-2 gap-3 pt-2 mt-6">
              {[
                "24×7 Emergency Care",
                "Experienced Medical Professionals",
                "Affordable Healthcare",
                "Modern Diagnostic Facilities",
                "Patient-Centered Treatment",
                "Clean & Comfortable Infrastructure"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-charcoal/90">
                  <CheckCircle2 className="h-4 w-4 text-maroon-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Patient Journey Flow */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold text-charcoal mb-3 uppercase tracking-wider">Patient Journey</h3>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-charcoal/70">
                <span className="bg-maroon-50 text-maroon-700 px-2 py-1 rounded">Appointment</span>
                <span className="text-maroon-300">→</span>
                <span className="bg-maroon-50 text-maroon-700 px-2 py-1 rounded">Consultation</span>
                <span className="text-maroon-300">→</span>
                <span className="bg-maroon-50 text-maroon-700 px-2 py-1 rounded">Diagnosis</span>
                <span className="text-maroon-300">→</span>
                <span className="bg-maroon-50 text-maroon-700 px-2 py-1 rounded">Treatment</span>
                <span className="text-maroon-300">→</span>
                <span className="bg-maroon-50 text-maroon-700 px-2 py-1 rounded">Recovery</span>
                <span className="text-maroon-300">→</span>
                <span className="bg-maroon-50 text-maroon-700 px-2 py-1 rounded">Follow-Up Care</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

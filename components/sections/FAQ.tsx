'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, PhoneCall } from 'lucide-react';
import { Accordion, AccordionItemData } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FAQ_ITEMS, EMERGENCY_INFO } from '@/constants/hospitalData';

export function FAQ() {
  const accordionItems: AccordionItemData[] = FAQ_ITEMS.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: (
      <div className="space-y-2">
        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
        <div className="pt-2 flex items-center space-x-2">
          <Badge variant="secondary" className="text-[10px]">Category: {faq.category}</Badge>
        </div>
      </div>
    ),
  }));

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="primary">Questions & Guidance</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="gradient-text-primary">Questions</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Find answers regarding appointments, insurance providers, emergency protocols, and patient visitor policies.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion items={accordionItems} allowMultiple={false} />

        {/* Bottom Help Box */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-maroon-600/20 text-gold">
              <HelpCircle className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Have a specific clinical inquiry?</h3>
              <p className="text-xs sm:text-sm text-slate-300">Speak directly with our 24/7 patient concierge team.</p>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => window.location.href = `tel:${EMERGENCY_INFO.hotline}`}
            leftIcon={<PhoneCall className="h-4 w-4" />}
            className="w-full sm:w-auto shrink-0"
          >
            Call Concierge
          </Button>
        </div>
      </div>
    </section>
  );
}

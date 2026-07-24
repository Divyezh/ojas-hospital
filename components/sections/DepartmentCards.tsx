'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeartPulse, Brain, ShieldPlus, Activity, Baby, Siren, ArrowRight, CheckCircle2, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { DEPARTMENTS } from '@/constants/hospitalData';
import { Department } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  Brain,
  ShieldPlus,
  Activity,
  Baby,
  Siren,
};

interface DepartmentCardsProps {
  onSelectDepartment: (deptId: string) => void;
}

export function DepartmentCards({ onSelectDepartment }: DepartmentCardsProps) {
  return (
    <section id="departments" className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="primary">Centers of Excellence</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
            Specialized <span className="text-maroon-700">Clinical Departments</span>
          </h2>
          <p className="text-base text-charcoal/80 leading-relaxed">
            Multi-disciplinary medical wings powered by board-certified specialists, ultra-modern diagnostics, and patient-tailored care programs.
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept, index) => {
            const IconComponent = iconMap[dept.iconName] || Activity;

            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,10,12,0.06)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(34,10,12,0.14)] transition-all duration-300 group">
                  {/* Card Image Banner */}
                  <div className="relative h-55 w-full overflow-hidden">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-400 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[rgba(34,10,12,0.55)] from-0% via-transparent to-transparent to-50%" />
                    
                    {/* Department Logo Badge */}
                    <div className="absolute top-4 left-4 h-12 w-32 flex items-center justify-center rounded-xl bg-white shadow-md px-3 py-1.5">
                      <img src="/logo.png" alt="Ojas Logo" className="w-full h-full object-contain" />
                    </div>

                    {/* Stats Badges */}
                    {dept.stats.surgeries !== "N/A" && (
                      <span className="absolute bottom-3.5 left-3.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-maroon-900 shadow-sm">
                        {dept.stats.surgeries} Procedures
                      </span>
                    )}
                    <span className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gold text-maroon-900 shadow-sm">
                      {dept.stats.satisfaction} Satisfaction
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-maroon-700 transition-colors">
                        {dept.name}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal/80">
                        {dept.description}
                      </p>
                    </div>

                    {/* Head of Dept */}
                    <div className="flex items-center space-x-2 text-sm font-medium text-maroon-800 bg-maroon-100 p-2.5 rounded-[10px] my-4">
                      <User className="h-4 w-4 text-maroon-700 shrink-0" />
                      <span className="truncate">Director: {dept.headOfDepartment}</span>
                    </div>

                    {/* Feature Bullet Points */}
                    <div className="space-y-2 mb-6">
                      {dept.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-charcoal">
                          <CheckCircle2 className="h-4 w-4 text-maroon-700 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Footer CTA */}
                    <a
                      href={`#department-${dept.id}`}
                      className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] border-[1.5px] border-maroon-700 text-maroon-700 font-semibold no-underline transition-all duration-250 ease-in-out hover:bg-maroon-700 hover:text-white group/btn w-max"
                    >
                      View Department Details 
                      <ArrowRight className="h-4 w-4 transition-transform duration-250 ease-in-out group-hover/btn:translate-x-0.75" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

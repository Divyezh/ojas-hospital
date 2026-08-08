'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Clock, Award } from 'lucide-react';
import { Card, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs } from '@/components/ui/tabs';
import { DOCTORS } from '@/constants/hospitalData';
import { Doctor } from '@/types';

interface DoctorCardsProps {
  selectedDepartmentFilter?: string;
}

export function DoctorCards({ selectedDepartmentFilter }: DoctorCardsProps) {
  const [activeTab, setActiveTab] = useState<string>(selectedDepartmentFilter || 'all');

  const filterTabs = [
    { id: 'all', label: 'All Specialists', count: DOCTORS.length },
    { id: 'general-surgery', label: 'General Surgery' },
    { id: 'gynecology', label: 'Gynecology' },
    { id: 'orthopedics', label: 'Orthopedics' },
    { id: 'dermatology', label: 'Skin & Hair' },
    { id: 'ent', label: 'ENT' },
    { id: 'physiotherapy', label: 'Physiotherapy' },
  ];

  const filteredDoctors = activeTab === 'all'
    ? DOCTORS
    : DOCTORS.filter((doc) => doc.departmentId === activeTab);

  // Distribute filtered doctors into 4 columns with round-robin fallback
  const getCol = (colIndex: number) => {
    if (filteredDoctors.length === 0) return [];
    const col = filteredDoctors.filter((_, i) => i % 4 === colIndex);
    return col.length > 0 ? col : [filteredDoctors[colIndex % filteredDoctors.length]];
  };

  const col1 = getCol(0);
  const col2 = getCol(1);
  const col3 = getCol(2);
  const col4 = getCol(3);

  return (
    <section id="doctors" className="py-16 sm:py-20 lg:py-32 bg-maroon-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-120 sm:w-175 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="primary" className="bg-maroon-800 text-gold border-maroon-600/60">
            Automated Showcase
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white">
            World-Class <span className="text-gold">Specialist Doctors</span>
          </h2>

          <p className="text-sm sm:text-base text-cream/70 leading-relaxed">
            Board-certified surgeons and medical department directors leading world-recognized patient care teams.
          </p>

          {/* Department Filter Tabs */}
          <div className="pt-4 flex justify-center">
            <Tabs
              tabs={filterTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              className="bg-maroon-800 border border-maroon-700"
            />
          </div>
        </div>
      </div>

      {/* Automated Multi-Column Gallery */}
      <div className="relative h-[65vh] sm:h-[75vh] min-h-120 sm:min-h-150 overflow-hidden bg-maroon-900/60 border-y border-maroon-800/80 px-3 sm:px-8 py-4">
        {/* Top/Bottom Fade Overlays */}
        <div className="absolute top-0 left-0 w-full h-1/5 bg-linear-to-b from-maroon-900 via-maroon-900/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-linear-to-t from-maroon-900 via-maroon-900/80 to-transparent z-10 pointer-events-none" />

        {/* Single Responsive Columns Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 h-full relative z-0">
          <DoctorColumn doctors={col1} direction="up" speed={35} />
          <DoctorColumn doctors={col2} direction="down" speed={40} />
          <div className="hidden lg:block h-full">
            <DoctorColumn doctors={col3} direction="up" speed={38} />
          </div>
          <div className="hidden lg:block h-full">
            <DoctorColumn doctors={col4} direction="down" speed={42} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface DoctorColumnProps {
  doctors: Doctor[];
  direction: 'up' | 'down';
  speed?: number;
}

const getColorGradient = (colorName: string) => {
  const colorMap: Record<string, string> = {
    'Royal Blue': 'from-blue-600 to-blue-900',
    'Emerald Green': 'from-emerald-500 to-emerald-800',
    'Crimson Red': 'from-rose-600 to-rose-900',
    'Deep Purple': 'from-purple-700 to-purple-950',
    'Navy Blue': 'from-slate-700 to-slate-950',
    'Orange': 'from-orange-500 to-orange-800',
    'Forest Green': 'from-green-700 to-green-950',
    'Teal': 'from-teal-600 to-teal-900',
    'Rose Pink': 'from-pink-500 to-pink-800',
    'Lime Green': 'from-lime-500 to-lime-800',
    'Magenta': 'from-fuchsia-600 to-fuchsia-900',
    'Indigo': 'from-indigo-600 to-indigo-900',
    'Cyan': 'from-cyan-500 to-cyan-800',
    'Gold': 'from-yellow-500 to-amber-700',
    'Dark Red': 'from-red-700 to-red-950',
    'Steel Blue': 'from-sky-600 to-sky-900',
    'Violet': 'from-violet-600 to-violet-900',
    'Turquoise': 'from-teal-400 to-teal-700',
    'Amber': 'from-amber-500 to-amber-800',
    'Deep Cyan': 'from-cyan-700 to-cyan-950',
  };
  return colorMap[colorName] || 'from-blue-600 to-blue-900';
};

function DoctorColumn({ doctors, direction, speed = 30 }: DoctorColumnProps) {
  // Use exactly 2 repeats (1 original + 1 clone) for optimal DOM size and 60fps performance
  const repeatCount = 2;
  const displayDoctors = Array(repeatCount).fill(doctors).flat();

  return (
    <div className="relative h-full overflow-hidden flex flex-col group/column">
      <motion.div
        animate={{
          y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        className="flex flex-col gap-4 sm:gap-6 w-full group-hover/column:[animation-play-state:paused]"
      >
        {displayDoctors.map((doc: Doctor, idx: number) => (
          <Card
            key={`${doc.id}-${idx}`}
            glass={false}
            hoverLift
            className="bg-white text-slate-900 border-maroon-100 p-0 overflow-hidden shadow-lg group transition-transform duration-300 shrink-0"
          >
            <Link href={`/doctors/${doc.id}`} className="block h-full cursor-pointer">
              {/* Doctor Avatar */}
              <div className="relative h-36 sm:h-56 lg:h-64 w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                {doc.image ? (
                  <Image
                    src={doc.image}
                    alt={`${doc.name}, Specialist at Ojas Hospital Ahmedabad`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-100"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${getColorGradient(doc.color || 'Royal Blue')} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                  >
                    <span className="text-4xl sm:text-7xl lg:text-8xl font-black text-white/90 tracking-tighter drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {doc.initials}
                    </span>
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-white/10 opacity-60" />
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-maroon-900/60 to-transparent opacity-60 pointer-events-none" />

                {/* Rating Pill */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center space-x-1 bg-white/95 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-maroon-900 border border-slate-100 shadow-xs">
                  <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-maroon-600 text-maroon-600" />
                  <span>{doc.rating} <span className="hidden sm:inline">({doc.reviewCount})</span></span>
                </div>

                {/* Department Badge */}
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-4">
                  <Badge variant="primary" className="bg-maroon-900 text-white border-maroon-700/60 text-[9px] sm:text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-0.5">
                    {doc.departmentName}
                  </Badge>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-3 sm:p-5 lg:p-6 space-y-2 sm:space-y-4">
                <div>
                  <CardTitle className="text-sm sm:text-lg lg:text-xl text-maroon-950 group-hover:text-maroon-700 transition-colors leading-tight">
                    {doc.name}
                  </CardTitle>
                  <p className="text-[10px] sm:text-xs font-bold text-maroon-700 mt-0.5 sm:mt-1 truncate">{doc.title}</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 truncate">{doc.qualifications}</p>
                </div>

                <p className="text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-2">
                  {doc.bio}
                </p>

                {/* Availability & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 pt-2 border-t border-slate-100 text-[10px] sm:text-xs text-slate-600">
                  <div className="flex items-center space-x-1 sm:space-x-1.5 font-medium">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 text-maroon-700 shrink-0" />
                    <span>{doc.experienceYears}+ Yrs</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-1.5 font-medium">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-maroon-700 shrink-0" />
                    <span className="truncate">{doc.availability}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                  {doc.specialties.slice(0, 2).map((spec: string, i: number) => (
                    <span key={i} className="text-[9px] sm:text-[11px] bg-slate-100 text-slate-700 font-medium px-1.5 sm:px-2.5 py-0.5 rounded-full border border-slate-200">
                      {spec}
                    </span>
                  ))}
                  {doc.specialties.length > 2 && (
                    <span className="text-[9px] sm:text-[11px] bg-slate-100 text-slate-700 font-medium px-1.5 sm:px-2.5 py-0.5 rounded-full border border-slate-200">
                      +{doc.specialties.length - 2}
                    </span>
                  )}
                </div>

              </div>
            </Link>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}


'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  Stethoscope,
  Star,
  ArrowUpRight,
  ShieldCheck,
  Table as TableIcon,
  LayoutGrid
} from 'lucide-react';
import { DOCTORS, CONSULTATION_SCHEDULE, ScheduleDoctor } from '@/constants/hospitalData';
import { cn } from '@/lib/utils';

/**
 * Interface representing a normalized consultation card item
 * combining the consultation timetable with the full doctor profile.
 */
interface ConsultationDoctorCard {
  id: string;
  name: string;
  qualification: string;
  department: string;
  departmentSubtitle?: string;
  timing: string;
  title: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  bio: string;
  initials: string;
  color: string;
  image?: string;
  specialties: string[];
  isCrossedOut?: boolean;
}

interface DoctorCardsProps {
  selectedDepartmentFilter?: string;
}

export function DoctorCards({ selectedDepartmentFilter }: DoctorCardsProps) {
  // State to toggle between Card Grid View and Table View
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  /**
   * Flatten and normalize all active doctors from the CONSULTATION_SCHEDULE,
   * enriching each with detailed profile attributes from the DOCTORS repository.
   */
  const allConsultationDoctors = useMemo<ConsultationDoctorCard[]>(() => {
    const list: ConsultationDoctorCard[] = [];

    CONSULTATION_SCHEDULE.forEach((dept) => {
      dept.doctors.forEach((doc: ScheduleDoctor) => {
        // Skip crossed out/placeholder entries like "No Doctor Listed"
        if (doc.isCrossedOut) return;

        // Clean name to match with DOCTORS
        const cleanName = doc.name.toLowerCase().replace(/^dr\.\s*/, '').trim();
        const matched = DOCTORS.find((d) => {
          const dClean = d.name.toLowerCase().replace(/^dr\.\s*/, '').trim();
          return dClean === cleanName || dClean.includes(cleanName) || cleanName.includes(dClean);
        });

        list.push({
          id: matched?.id || `doc-${doc.name.replace(/\s+/g, '-').toLowerCase()}`,
          name: doc.name,
          qualification: doc.qualification !== '—' ? doc.qualification : (matched?.qualifications || ''),
          department: dept.department,
          departmentSubtitle: dept.subtitle,
          timing: doc.timing,
          title: matched?.title || `${dept.department} Specialist`,
          experienceYears: matched?.experienceYears || 10,
          rating: matched?.rating || 4.8,
          reviewCount: matched?.reviewCount || 100,
          bio: matched?.bio || `Consultant medical specialist at Ojas Hospital providing professional clinical evaluations and OPD consultations.`,
          initials: matched?.initials || doc.name.replace(/[^A-Z]/g, '').slice(0, 2) || 'DR',
          color: matched?.color || 'Royal Blue',
          image: matched?.image,
          specialties: matched?.specialties || [dept.department],
        });
      });
    });

    return list;
  }, []);

  return (
    <section id="doctors" className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-maroon-900 via-maroon-950 to-maroon-950 text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-120 sm:w-180 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-maroon-800/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-maroon-800/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-800/80 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-gold" />
              OPD Schedule & Consultation Timings
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Department <span className="text-gold">Consultation Timings</span>
            </h2>
            <p className="text-xs sm:text-sm text-cream/70 max-w-2xl leading-relaxed">
              Find your doctor, check everyday OPD consultation hours, and schedule your appointment with top medical practitioners at Ojas Multispeciality Hospital.
            </p>
          </div>

          {/* View Mode Toggle: Cards vs Table */}
          <div className="inline-flex items-center p-1 bg-maroon-900/90 rounded-xl border border-maroon-700/80 shrink-0 self-start md:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer',
                viewMode === 'cards'
                  ? 'bg-gold text-maroon-950 shadow-xs font-bold'
                  : 'text-cream/70 hover:text-white'
              )}
              title="Card Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Doctor Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer',
                viewMode === 'table'
                  ? 'bg-gold text-maroon-950 shadow-xs font-bold'
                  : 'text-cream/70 hover:text-white'
              )}
              title="Table View"
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Timetable View</span>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: CLEAN WHITE DOCTOR CONSULTATION CARDS                 */}
        {/* ------------------------------------------------------------- */}
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {allConsultationDoctors.map((doc) => (
              <div
                key={doc.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-5 flex flex-row items-center gap-3.5 sm:gap-5 relative overflow-hidden"
              >
                {/* ----------------------------------------------------------- */}
                {/* LEFT: DOCTOR AVATAR / CARD VISUAL (NO BLUE / NO ORANGE)     */}
                {/* ----------------------------------------------------------- */}
                <div className="relative shrink-0 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex items-center justify-center">
                  {doc.image ? (
                    /* Authentic Doctor Photo */
                    <Image
                      src={doc.image}
                      alt={`${doc.name} - ${doc.title} at Ojas Hospital`}
                      fill
                      sizes="(max-width: 640px) 96px, 144px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Doctor's Own Styled Card (Maroon & Dark Palette, No Blue, No Orange) */
                    <div className="absolute inset-0 bg-linear-to-br from-maroon-950 via-maroon-900 to-maroon-800 flex flex-col items-center justify-between p-2.5 text-center select-none group-hover:scale-105 transition-transform duration-500">
                      {/* Top Header Badge */}
                      <span className="relative z-10 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-gold bg-black/40 px-2 py-0.5 rounded-md border border-white/10">
                        OJAS DOCTOR
                      </span>

                      {/* Prominent Initials in Simple Bold Sans-Serif */}
                      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                        <span
                          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
                          style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif' }}
                        >
                          {doc.initials}
                        </span>
                      </div>

                      {/* Footer Qualification */}
                      <span className="relative z-10 text-[9px] sm:text-[10px] font-semibold text-white/90 line-clamp-1 w-full px-1">
                        {doc.qualification || 'Specialist'}
                      </span>
                    </div>
                  )}

                  {/* Circular Maroon Verified Badge with Gold Shield (No Orange / No Blue) */}
                  <div
                    className="absolute -bottom-1 -right-1 sm:bottom-1 sm:right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-maroon-800 shadow-md border-2 border-white flex items-center justify-center text-gold z-10"
                    title="Verified Medical Practitioner at Ojas Hospital"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold drop-shadow-xs" />
                  </div>
                </div>

                {/* ----------------------------------------------------------- */}
                {/* RIGHT: DOCTOR DETAILS (2 MAROON TEXTS, CLEAN BOLD FONT)    */}
                {/* ----------------------------------------------------------- */}
                <div className="min-w-0 flex-1 flex flex-col justify-between h-full py-0.5 space-y-2">
                  {/* Doctor Name & Header */}
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <Link
                        href={`/doctors/${doc.id}`}
                        className="group/name block truncate"
                        title={`View ${doc.name}'s profile`}
                      >
                        {/* 1st Maroon Text: Doctor Name in Simple Bold Font */}
                        <h3
                          className="text-base sm:text-lg md:text-xl font-bold text-maroon-900 group-hover/name:text-maroon-700 transition-colors leading-tight truncate"
                          style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif' }}
                        >
                          {doc.name}
                        </h3>
                      </Link>
                      
                      <Link
                        href={`/doctors/${doc.id}`}
                        className="text-slate-400 hover:text-maroon-800 transition-colors p-0.5 shrink-0"
                        title="View Doctor Profile"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Department Tag & Qualifications */}
                    <div className="flex items-center gap-1.5 flex-wrap mt-1">
                      <span className="text-[10px] sm:text-[11px] font-bold text-maroon-800 bg-maroon-50 px-2.5 py-0.5 rounded-md border border-maroon-200">
                        {doc.department.replace(/ Department$/, '')}
                      </span>
                      {doc.qualification && (
                        <span className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                          • {doc.qualification}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Doctor Bio Snippet */}
                  <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* 2nd Maroon Text: Consultation Timing Chip in Maroon */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-maroon-50 text-maroon-800 border border-maroon-200 text-[11px] sm:text-xs font-bold max-w-full">
                      <Clock className="w-3.5 h-3.5 text-maroon-700 shrink-0" />
                      <span className="truncate">{doc.timing}</span>
                    </div>
                  </div>

                  {/* Bottom Stats Row (Experience & Patient Rating) */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-slate-700">
                    <div className="flex items-center gap-2.5 sm:gap-5 min-w-0">
                      {/* Experience Stat */}
                      <div className="shrink-0">
                        <div className="text-[11px] sm:text-sm font-bold text-slate-900 leading-none">
                          {doc.experienceYears}+ Yrs
                        </div>
                        <div className="text-[9px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                          Experience
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-px h-6 bg-slate-200 shrink-0" />

                      {/* Ratings Stat */}
                      <div className="shrink-0">
                        <div className="text-[11px] sm:text-sm font-bold text-slate-900 flex items-center gap-1 leading-none">
                          <Star className="w-3 h-3 fill-gold text-gold shrink-0" />
                          <span>{doc.rating}</span>
                        </div>
                        <div className="text-[9px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                          {doc.reviewCount}+ Patients
                        </div>
                      </div>
                    </div>

                    {/* View Profile Action Link */}
                    <Link
                      href={`/doctors/${doc.id}`}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-white bg-maroon-800 hover:bg-maroon-900 transition-colors shrink-0 px-3 py-1.5 rounded-lg shadow-xs"
                      title={`View ${doc.name}'s profile`}
                    >
                      <span>Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ----------------------------------------------------------- */
          /* VIEW 2: ACCESSIBLE COMPLETE OPD TIMINGS TABLE               */
          /* ----------------------------------------------------------- */
          <div className="overflow-x-auto rounded-2xl border border-maroon-800 bg-maroon-900/60 backdrop-blur-md shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm text-cream/90 border-collapse">
              <thead>
                <tr className="bg-maroon-800/90 text-gold font-bold uppercase text-[11px] sm:text-xs tracking-wider border-b border-maroon-700">
                  <th scope="col" className="py-3.5 px-4 sm:px-6 w-1/3">Department</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 w-1/3">Doctor&apos;s Name & Qualification</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 w-1/3">Consultation Timings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-maroon-800/60">
                {CONSULTATION_SCHEDULE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-maroon-800/40 transition-colors">
                    <td className="py-4 px-4 sm:px-6 align-top">
                      <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-gold shrink-0 hidden sm:inline-block" />
                        {item.department}
                      </div>
                      {item.subtitle && (
                        <div className="text-[11px] sm:text-xs text-gold/80 font-medium mt-0.5">
                          ({item.subtitle})
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 align-top space-y-2.5">
                      {item.doctors.map((doc, dIdx) => {
                        const cleanName = doc.name.toLowerCase().replace(/^dr\.\s*/, '').trim();
                        const matchedDoctor = DOCTORS.find((d) => {
                          const dClean = d.name.toLowerCase().replace(/^dr\.\s*/, '').trim();
                          return dClean === cleanName || dClean.includes(cleanName) || cleanName.includes(dClean);
                        });

                        return (
                          <div key={dIdx} className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-gold font-bold">•</span>
                            {doc.isCrossedOut ? (
                              <span className="line-through text-slate-400 italic text-xs sm:text-sm">
                                {doc.name} {doc.qualification !== '—' && `(${doc.qualification})`}
                              </span>
                            ) : matchedDoctor ? (
                              <Link
                                href={`/doctors/${matchedDoctor.id}`}
                                className="group/btn inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-maroon-800/80 hover:bg-gold text-white hover:text-maroon-950 font-bold text-xs sm:text-sm border border-maroon-700/80 hover:border-gold transition-all duration-200 shadow-xs cursor-pointer"
                                title={`View ${doc.name}'s profile & details`}
                              >
                                <span>{doc.name}</span>
                                <span className="text-[10px] text-gold group-hover/btn:text-maroon-950 font-bold transition-colors">↗</span>
                              </Link>
                            ) : (
                              <span className="font-semibold text-white">{doc.name}</span>
                            )}
                            {!doc.isCrossedOut && doc.qualification !== '—' && (
                              <span className="text-xs text-cream/70 font-mono">({doc.qualification})</span>
                            )}
                          </div>
                        );
                      })}
                    </td>
                    <td className="py-4 px-4 sm:px-6 align-top space-y-2">
                      {item.doctors.map((doc, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5">
                          {doc.isCrossedOut || doc.timing === '—' ? (
                            <span className="text-slate-400 font-mono">—</span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 bg-maroon-800/80 text-gold px-2.5 py-1 rounded-md text-xs font-medium border border-maroon-700">
                              <Clock className="w-3 h-3 text-gold shrink-0" />
                              {doc.timing}
                            </span>
                          )}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}

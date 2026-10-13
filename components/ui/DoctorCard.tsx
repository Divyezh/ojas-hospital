import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { Doctor } from '@/types';
import { CONSULTATION_SCHEDULE } from '@/constants/hospitalData';

interface DoctorCardProps {
  doctor: Doctor;
  className?: string;
}

/**
 * Resolves doctor's OPD consultation timing from CONSULTATION_SCHEDULE,
 * falling back to doctor.availability.
 */
function getDoctorTiming(doctor: Doctor): string {
  const cleanName = doctor.name.toLowerCase().replace(/^dr\.\s*/, '').trim();
  for (const dept of CONSULTATION_SCHEDULE) {
    for (const d of dept.doctors) {
      if (d.isCrossedOut) continue;
      const dClean = d.name.toLowerCase().replace(/^dr\.\s*/, '').trim();
      if (dClean === cleanName || dClean.includes(cleanName) || cleanName.includes(dClean)) {
        if (d.timing && d.timing !== '—') return d.timing;
      }
    }
  }
  return doctor.availability || 'By Appointment';
}

export function DoctorCard({ doctor, className = '' }: DoctorCardProps) {
  const timing = getDoctorTiming(doctor);
  const initials =
    doctor.initials ||
    doctor.name
      .replace(/^dr\.\s*/i, '')
      .split(' ')
      .filter(Boolean)
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() ||
    'DR';

  return (
    <div
      className={`group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-5 flex flex-row items-center gap-3.5 sm:gap-5 relative overflow-hidden ${className}`}
    >
      {/* ----------------------------------------------------------- */}
      {/* LEFT: DOCTOR AVATAR / CARD VISUAL                           */}
      {/* ----------------------------------------------------------- */}
      <div className="relative shrink-0 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex items-center justify-center">
        {doctor.image ? (
          <Image
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.title} at Ojas Hospital`}
            fill
            sizes="(max-width: 640px) 96px, 144px"
            className="object-cover object-top origin-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-maroon-950 via-maroon-900 to-maroon-800 flex flex-col items-center justify-between p-2.5 text-center select-none group-hover:scale-105 transition-transform duration-500">
            {/* Top Header Badge */}
            <span className="relative z-10 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-gold bg-black/40 px-2 py-0.5 rounded-md border border-white/10">
              OJAS DOCTOR
            </span>

            {/* Prominent Initials */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto">
              <span
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
                style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif' }}
              >
                {initials}
              </span>
            </div>

            {/* Footer Qualification */}
            <span className="relative z-10 text-[9px] sm:text-[10px] font-semibold text-white/90 line-clamp-1 w-full px-1">
              {doctor.qualifications || 'Specialist'}
            </span>
          </div>
        )}

        {/* Circular Maroon Verified Badge with Gold Shield */}
        <div
          className="absolute -bottom-1 -right-1 sm:bottom-1 sm:right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-maroon-800 shadow-md border-2 border-white flex items-center justify-center text-gold z-10"
          title="Verified Medical Practitioner at Ojas Hospital"
        >
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold drop-shadow-xs" />
        </div>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* RIGHT: DOCTOR DETAILS                                       */}
      {/* ----------------------------------------------------------- */}
      <div className="min-w-0 flex-1 flex flex-col justify-between h-full py-0.5 space-y-2">
        {/* Doctor Name & Header */}
        <div>
          <div className="flex items-start justify-between gap-1">
            <Link
              href={`/doctors/${doctor.id}`}
              className="group/name block truncate"
              title={`View ${doctor.name}'s profile`}
            >
              <h3
                className="text-base sm:text-lg md:text-xl font-bold text-maroon-900 group-hover/name:text-maroon-700 transition-colors leading-tight truncate"
                style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif' }}
              >
                {doctor.name}
              </h3>
            </Link>

            <Link
              href={`/doctors/${doctor.id}`}
              className="text-slate-400 hover:text-maroon-800 transition-colors p-0.5 shrink-0"
              title="View Doctor Profile"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Department Tag & Qualifications */}
          <div className="flex items-center gap-1.5 flex-wrap mt-1">
            <span className="text-[10px] sm:text-[11px] font-bold text-maroon-800 bg-maroon-50 px-2.5 py-0.5 rounded-md border border-maroon-200">
              {(doctor.departmentName || doctor.departmentId || 'General').replace(/ Department$/, '')}
            </span>
            {doctor.qualifications && (
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                • {doctor.qualifications}
              </span>
            )}
          </div>
        </div>

        {/* Doctor Bio Snippet */}
        <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {doctor.bio}
        </p>

        {/* Consultation Timing Chip */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-maroon-50 text-maroon-800 border border-maroon-200 text-[11px] sm:text-xs font-bold max-w-full">
            <Clock className="w-3.5 h-3.5 text-maroon-700 shrink-0" />
            <span className="truncate">{timing}</span>
          </div>
          {doctor.branch && (
            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/80 text-[10px] sm:text-[11px] font-semibold max-w-full">
              <MapPin className="w-3 h-3 text-amber-700 shrink-0" />
              <span className="truncate">{doctor.branch}</span>
            </div>
          )}
        </div>

        {/* Bottom Stats Row (Experience & Patient Rating) */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-slate-700">
          <div className="flex items-center gap-2.5 sm:gap-5 min-w-0">
            {/* Experience Stat */}
            <div className="shrink-0">
              <div className="text-[11px] sm:text-sm font-bold text-slate-900 leading-none">
                {doctor.experienceYears}+ Yrs
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
                <span>{doctor.rating}</span>
              </div>
              <div className="text-[9px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                {doctor.reviewCount}+ Patients
              </div>
            </div>
          </div>

          {/* View Profile Action Link */}
          <Link
            href={`/doctors/${doctor.id}`}
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-white bg-maroon-800 hover:bg-maroon-900 transition-colors shrink-0 px-3 py-1.5 rounded-lg shadow-xs"
            title={`View ${doctor.name}'s profile`}
          >
            <span>Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

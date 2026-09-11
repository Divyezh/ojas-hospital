import React, { useMemo } from 'react';
import Link from 'next/link';
import { Clock, Stethoscope } from 'lucide-react';
import { DOCTORS, CONSULTATION_SCHEDULE } from '@/constants/hospitalData';

interface DoctorCardsProps {
  selectedDepartmentFilter?: string;
}

export function DoctorCards({ selectedDepartmentFilter }: DoctorCardsProps) {
  const filteredSchedule = useMemo(() => {
    if (!selectedDepartmentFilter) return CONSULTATION_SCHEDULE;
    return CONSULTATION_SCHEDULE.filter((s) =>
      s.department.toLowerCase().includes(selectedDepartmentFilter.toLowerCase())
    );
  }, [selectedDepartmentFilter]);

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
              Check everyday OPD consultation hours, specialist availability, and schedule your appointment at Ojas Multispeciality Hospital.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COMPLETE OPD TIMETABLE VIEW                                   */}
        {/* ------------------------------------------------------------- */}
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
              {filteredSchedule.map((item, idx) => (
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

      </div>
    </section>
  );
}

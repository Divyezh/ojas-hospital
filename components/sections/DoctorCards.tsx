import React, { useMemo } from 'react';
import Link from 'next/link';
import { Clock, Stethoscope, ArrowUpRight } from 'lucide-react';
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-800/80 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider shadow-xs">
              <Clock className="w-3.5 h-3.5 text-gold" />
              OPD Schedule &amp; Consultation Timings
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
        {/* COMPLETE OPD TIMETABLE VIEW (PREMIUM MODERN TABLE)            */}
        {/* ------------------------------------------------------------- */}
        <div className="relative rounded-2xl border border-gold/20 bg-maroon-900/70 backdrop-blur-xl shadow-2xl shadow-maroon-950/80 overflow-hidden">
          {/* Subtle top ambient glow accent line */}
          <div className="h-0.5 w-full bg-linear-to-r from-transparent via-gold/50 to-transparent" />

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-cream/90 border-collapse">
              <thead>
                <tr className="bg-maroon-950/90 text-gold font-bold uppercase text-[11px] sm:text-xs tracking-wider border-b border-maroon-800/90 backdrop-blur-md">
                  <th scope="col" className="py-4 px-4 sm:px-6 w-[30%]">Department</th>
                  <th scope="col" className="py-4 px-4 sm:px-6 w-[42%]">Doctor&apos;s Name &amp; Qualification</th>
                  <th scope="col" className="py-4 px-4 sm:px-6 w-[28%]">Consultation Timings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-maroon-800/50">
                {filteredSchedule.map((item, deptIdx) => (
                  <React.Fragment key={deptIdx}>
                    {item.doctors.map((doc, dIdx) => {
                      const cleanName = doc.name.toLowerCase().replace(/^dr\.\s*/, '').trim();
                      const matchedDoctor = DOCTORS.find((d) => {
                        const dClean = d.name.toLowerCase().replace(/^dr\.\s*/, '').trim();
                        return dClean === cleanName || dClean.includes(cleanName) || cleanName.includes(dClean);
                      });
                      const isFirst = dIdx === 0;

                      return (
                        <tr
                          key={`${deptIdx}-${dIdx}`}
                          className={`transition-colors duration-150 hover:bg-maroon-800/30 ${isFirst && deptIdx > 0 ? 'border-t-2 border-maroon-800' : ''
                            }`}
                        >
                          {/* Department Column - spans all doctors in this department */}
                          {isFirst && (
                            <td
                              rowSpan={item.doctors.length}
                              className="py-4 px-4 sm:px-6 align-top border-r border-maroon-800/40 bg-maroon-950/30"
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="p-1.5 rounded-lg bg-gold/10 text-gold border border-gold/25 shrink-0 mt-0.5 hidden sm:inline-flex shadow-xs">
                                  <Stethoscope className="w-3.5 h-3.5" />
                                </span>
                                <div>
                                  <div className="font-bold text-white text-sm sm:text-base tracking-tight">
                                    {item.department}
                                  </div>
                                  {item.subtitle && (
                                    <div className="text-[11px] sm:text-xs text-gold-soft/85 font-medium mt-0.5">
                                      ({item.subtitle})
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                          )}

                          {/* Doctor's Name & Qualification Column */}
                          <td className="py-3 px-4 sm:px-6 align-middle border-r border-maroon-800/30">
                            <div className="flex items-center gap-2 flex-wrap">
                              {doc.isCrossedOut ? (
                                <span className="line-through text-slate-400 italic text-xs sm:text-sm">
                                  {doc.name} {doc.qualification !== '—' && `(${doc.qualification})`}
                                </span>
                              ) : matchedDoctor ? (
                                <Link
                                  href={`/doctors/${matchedDoctor.id}`}
                                  className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-maroon-800/70 hover:bg-gold text-white hover:text-maroon-950 font-semibold text-xs sm:text-sm border border-maroon-700/80 hover:border-gold transition-all duration-200 shadow-xs cursor-pointer"
                                  title={`View ${doc.name}'s profile & details`}
                                >
                                  <span>{doc.name}</span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover/btn:text-maroon-950 transition-colors shrink-0" />
                                </Link>
                              ) : (
                                <span className="font-semibold text-white text-xs sm:text-sm py-1">
                                  {doc.name}
                                </span>
                              )}

                              {!doc.isCrossedOut && doc.qualification !== '—' && (
                                <span className="text-xs text-cream/70 font-normal">
                                  ({doc.qualification})
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Consultation Timings Column */}
                          <td className="py-3 px-4 sm:px-6 align-middle">
                            {doc.isCrossedOut || doc.timing === '—' ? (
                              <span className="text-slate-400 text-xs">—</span>
                            ) : (
                              <span className="inline-flex items-center gap-2 bg-maroon-950/70 text-gold-soft px-3 py-1.5 rounded-lg text-xs font-medium border border-gold/20 shadow-xs backdrop-blur-xs">
                                <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                                <span>{doc.timing}</span>
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}


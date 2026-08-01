import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { DEPARTMENTS } from '@/constants/hospitalData';
import CircularGallery from '@/components/ui/CircularGallery';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Departments — Specialized Clinical Departments | Ojas Hospital Ahmedabad',
  description: 'Explore all specialized departments at Ojas Multispeciality Hospital — General Medicine, Surgery, Orthopedics, Gynecology, Cardiology, Emergency Care and more in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/departments` },
};

const galleryItems = DEPARTMENTS.map((dept) => ({
  image: dept.image.split('?')[0],
  text: dept.name,
}));

export default function DepartmentsPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-28 pb-8 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Departments</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Clinical <span className="text-gold">Departments</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Multi-disciplinary medical wings powered by board-certified specialists and advanced diagnostic technology.
        </p>
      </div>

      {/* CircularGallery WebGL slider */}
      <div className="bg-slate-950" style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.02}
          font="bold 26px Inter, sans-serif"
        />
      </div>

      {/* Department buttons */}
      <section className="bg-slate-950 pb-16 pt-2 px-4">
        <p className="text-center text-xs text-white/40 tracking-wide mb-10">
          ← Drag or scroll to explore departments →
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {DEPARTMENTS.map((dept) => (
            <Link
              key={dept.id}
              href={`/departments/${dept.id}`}
              className="group flex items-center justify-between gap-2 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-maroon-700 hover:border-maroon-600 text-white text-sm font-semibold transition-all duration-300"
            >
              <span className="truncate">{dept.name}</span>
              <ArrowRight className="h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

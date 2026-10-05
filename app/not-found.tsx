import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Stethoscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found | Ojas Hospital Multispeciality',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-28 bg-slate-50">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100">
        <span className="text-6xl sm:text-7xl font-extrabold text-maroon-700 tracking-tight font-serif block mb-2">
          404
        </span>
        <h1 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mb-8">
          The medical service or page you are looking for has moved or does not exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-maroon-700 text-white font-medium hover:bg-maroon-800 transition-colors shadow-md shadow-maroon-700/20 text-sm"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/departments"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm"
          >
            <Stethoscope size={16} />
            All Departments
          </Link>
        </div>
      </div>
    </div>
  );
}

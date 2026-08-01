import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import Link from 'next/link';
import { Award, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Awards & Recognition — Ojas Hospital Ahmedabad',
  description: 'Awards, certifications, and recognitions received by Ojas Multispeciality Hospital and its doctors in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/awards` },
};

interface HospitalAward {
  id: string;
  title: string;
  issuingBody: string;
  year: string;
  recipient: string;
  description?: string;
  image?: string;
}

// Awaiting client-supplied award data — honest empty state displayed.
const AWARDS: HospitalAward[] = [];

export default function AwardsPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Awards</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Awards & <span className="text-gold">Recognition</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Certifications, accreditations, and honours received by Ojas Hospital and our medical team.
        </p>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {AWARDS.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gold/40 bg-cream p-16 text-center max-w-2xl mx-auto">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <h2 className="text-xl font-bold text-charcoal mb-3">Awards listing coming soon</h2>
              <p className="text-sm text-charcoal/65 leading-relaxed mb-6">
                Ojas Hospital has been serving the Rakhial community for over 24 years. We are currently compiling our awards and certifications list.
                If you have information about a specific recognition, please contact us.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-maroon-200 text-sm font-semibold text-maroon-700 hover:bg-maroon-700 hover:text-white transition-all"
                >
                  <ShieldCheck className="h-4 w-4" />
                  About Ojas Hospital
                </Link>
                <a
                  href="mailto:dr.hjsoni@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-maroon-200 text-sm font-semibold text-charcoal/70 hover:bg-maroon-50 transition-all"
                >
                  Submit Award Info →
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AWARDS.map((award) => (
                <div key={award.id} className="bg-white rounded-2xl border border-maroon-100 shadow-soft-sm p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold/10 shrink-0">
                      <Award className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-maroon-600">{award.year}</span>
                      <h3 className="text-base font-bold text-charcoal mt-0.5 leading-tight">{award.title}</h3>
                      <p className="text-xs text-charcoal/60 mt-1">{award.issuingBody}</p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-cream text-xs font-semibold text-charcoal/70">{award.recipient}</span>
                      {award.description && <p className="text-sm text-charcoal/70 mt-3 leading-relaxed">{award.description}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}

import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import Link from 'next/link';
import { Tv, Newspaper, Radio } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Media Coverage — Press & News | Ojas Hospital Ahmedabad',
  description: 'Media coverage of Ojas Multispeciality Hospital in Rakhial, Ahmedabad — electronic media, print media, and press features.',
  alternates: { canonical: `${SITE_CONFIG.url}/media` },
};

interface MediaCoverage {
  id: string;
  title: string;
  outlet: string;
  type: 'Electronic Media' | 'Print Media';
  date: string;
  link?: string;
  thumbnail: string;
  summary: string;
}

// No verified press coverage data available yet — honest empty state.
const MEDIA_ITEMS: MediaCoverage[] = [];

const electronic = MEDIA_ITEMS.filter((m) => m.type === 'Electronic Media');
const print = MEDIA_ITEMS.filter((m) => m.type === 'Print Media');

function EmptyState({ label, icon: Icon }: { label: string; icon: React.ElementType }) {
  return (
    <div className="rounded-2xl border border-dashed border-maroon-200 bg-cream p-12 text-center">
      <Icon className="h-10 w-10 text-maroon-300 mx-auto mb-4" />
      <h3 className="text-base font-bold text-charcoal mb-2">No {label} coverage listed yet</h3>
      <p className="text-sm text-charcoal/60">
        If you are a journalist or media organisation and would like to feature Ojas Hospital, please reach out to us directly.
      </p>
      <a
        href="mailto:dr.hjsoni@gmail.com"
        className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-maroon-200 text-sm font-semibold text-maroon-700 hover:bg-maroon-700 hover:text-white transition-all"
      >
        Media Inquiry →
      </a>
    </div>
  );
}

export default function MediaPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Media</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Media <span className="text-gold">Coverage</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Press features, TV coverage, and print media stories about Ojas Hospital and our community health work.
        </p>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Electronic Media */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-blue-50">
                <Tv className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-charcoal">Electronic Media</h2>
                <p className="text-sm text-charcoal/60">TV, online video, and radio coverage</p>
              </div>
            </div>
            {electronic.length === 0 ? (
              <EmptyState label="electronic media" icon={Radio} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Cards here once data is available */}
              </div>
            )}
          </section>

          {/* Print Media */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-amber-50">
                <Newspaper className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-charcoal">Print Media</h2>
                <p className="text-sm text-charcoal/60">Newspaper and magazine clippings</p>
              </div>
            </div>
            {print.length === 0 ? (
              <EmptyState label="print media" icon={Newspaper} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Cards here once data is available */}
              </div>
            )}
          </section>

        </div>
      </div>
    </>
  );
}

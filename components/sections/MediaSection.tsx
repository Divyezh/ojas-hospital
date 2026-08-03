'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Eye, Newspaper, Radio, Tv, ExternalLink } from 'lucide-react';
import { Modal } from '@/components/ui/modal';

export interface MediaCoverage {
  id: string;
  title: string;
  outlet: string;
  type: 'Electronic Media' | 'Print Media';
  date: string;
  link?: string;
  thumbnail: string;
  summary: string;
}

const MEDIA_ITEMS: MediaCoverage[] = [
  {
    id: 'm1',
    title: 'Free Diabetes Diagnosis, HbA1c Test & Treatment Camp Flyer',
    outlet: 'Ojas Hospital',
    type: 'Print Media',
    date: '17/05/2026',
    thumbnail: '/media1.webp',
    summary: 'A public campaign flyer announcing the free diabetes diagnosis, HbA1c testing, and medical treatment camp organized under the "Defeat Diabetes" initiative by Ojas Hospital and Dr. Hasmukh Soni at Rakhial, Ahmedabad.',
  },
  {
    id: 'm2',
    title: 'Kite String Safety & Cleanliness Drive during Uttarayan Festival',
    outlet: 'Divya Bhaskar',
    type: 'Print Media',
    date: '17/01/2026',
    thumbnail: '/media2.webp',
    summary: 'Press coverage highlighting the civic initiative led by Ojas Charitable Trust Managing Trustee Dr. Hasmukh Soni and local leaders to safely collect and dispose of dangerous kite strings (manjha) from roads and trees.',
  },
  {
    id: 'm3',
    title: 'Free Multi-Specialty Health Diagnosis & Concessional Treatment Camp',
    outlet: 'Ojas Hospital Press',
    type: 'Print Media',
    date: '01/02/2026',
    thumbnail: '/media3.webp',
    summary: 'Flyer details of the mega free diagnosis camp at Bapunagar, sponsored by Prerak Swa Sahay Juth Trust. Offering screening profiles for kidney, liver, cancer, thyroid, anemia, and diabetes.',
  },
  {
    id: 'm4',
    title: 'Free Health Services for 2,000 Municipal School Children in Rakhial',
    outlet: 'Bhaskar News',
    type: 'Print Media',
    date: '26/01/2026',
    thumbnail: '/media4.webp',
    summary: 'News article detailing the free medical checkup drive and emergency primary treatment care launched by Gujarat Ayurved Medical Association (GAMA) Chairman & Ojas Hospital founder Dr. Hasmukh Soni.',
  },
  {
    id: 'm5',
    title: 'Press Feature: Bapunagar Free Multi-Specialty Diagnosis Camp',
    outlet: 'Local News Print',
    type: 'Print Media',
    date: '01/02/2026',
    thumbnail: '/media5.webp',
    summary: 'Newspaper clipping covering the announcement and detailed clinical tests offered at the Bapunagar free multi-specialty diagnosis camp on 1st February by Ojas Hospital.',
  },
];

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

export function MediaSection() {
  const [selectedMedia, setSelectedMedia] = useState<MediaCoverage | null>(null);

  const electronic = MEDIA_ITEMS.filter((m) => m.type === 'Electronic Media');
  const print = MEDIA_ITEMS.filter((m) => m.type === 'Print Media');

  const handleOpenMedia = (media: MediaCoverage) => {
    setSelectedMedia(media);
  };

  return (
    <div className="py-20 bg-slate-50">
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
              {electronic.map((media) => (
                <MediaCard key={media.id} media={media} onOpen={handleOpenMedia} />
              ))}
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
              <h2 className="text-2xl font-extrabold text-charcoal">Print & Press Media</h2>
              <p className="text-sm text-charcoal/60">Newspaper clippings, flyers, and camp announcements</p>
            </div>
          </div>
          {print.length === 0 ? (
            <EmptyState label="print media" icon={Newspaper} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {print.map((media) => (
                <MediaCard key={media.id} media={media} onOpen={handleOpenMedia} />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Media Lightbox Modal */}
      {selectedMedia && (
        <Modal
          isOpen={!!selectedMedia}
          onClose={() => setSelectedMedia(null)}
          title={selectedMedia.title}
          description={`${selectedMedia.outlet} — ${selectedMedia.date}`}
        >
          <div className="relative h-[70vh] w-full rounded-2xl overflow-hidden mt-4 bg-slate-950 flex items-center justify-center border border-slate-100 shadow-inner">
            <Image
              src={selectedMedia.thumbnail}
              alt={selectedMedia.title}
              fill
              sizes="(max-width: 768px) 100vw, 608px"
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-800 mb-1">Details & Description</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{selectedMedia.summary}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

function MediaCard({ media, onOpen }: { media: MediaCoverage; onOpen: (m: MediaCoverage) => void }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div 
        onClick={() => onOpen(media)}
        className="relative h-56 w-full cursor-pointer group bg-slate-100 overflow-hidden"
      >
        <Image 
          src={media.thumbnail} 
          alt={media.title} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw" 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
          <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold">
            <Eye className="h-4 w-4" /> View Full Image
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-2.5 py-1 bg-maroon-50 text-maroon-700 rounded-md text-[10px] font-bold tracking-wider uppercase">
            {media.outlet}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
            <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
            {media.date}
          </span>
        </div>
        
        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
          {media.title}
        </h3>
        
        <p className="text-sm text-slate-600 leading-relaxed flex-1 line-clamp-3 mb-4">
          {media.summary}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onOpen(media)}
            className="flex-1 text-center py-2.5 rounded-xl border border-maroon-200 text-maroon-700 hover:bg-maroon-700 hover:text-white text-xs font-semibold transition-all cursor-pointer"
          >
            View Document
          </button>
          {media.link && (
            <a
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all"
              aria-label="Visit external link"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

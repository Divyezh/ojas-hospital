
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Eye, Newspaper, Radio, Tv, ExternalLink, Play, Video } from 'lucide-react';
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
  video?: string;
}

const MEDIA_ITEMS: MediaCoverage[] = [
  {
    id: 'm-gastro-conference-2020',
    title: 'Zee 24 Kalak Coverage: Single Theme Master Class of Gastroenterology (MGCON 2020)',
    outlet: 'Zee 24 Kalak',
    type: 'Electronic Media',
    date: '19/01/2020',
    thumbnail: '/gastro-conference-poster.jpg',
    video: '/gastro-conference.mp4',
    summary:
      'Television news feature broadcast by Zee 24 Kalak covering the mega Single Theme Master Class of Gastroenterology (MGCON 2020) in Ahmedabad. Organized by Mission Gastro Hospital in joint association with Gujarat Ayurved Medical Association (GAMA), featuring clinical dialogues and addresses by Dr. Hasmukh Soni alongside prominent gastroenterology and medical specialists.',
  },
  {
    id: 'm1',
    title: 'Free Diabetes Diagnosis, HbA1c Test & Treatment Camp Flyer',
    outlet: 'Ojas Hospital',
    type: 'Print Media',
    date: '17/05/2026',
    thumbnail: '/media1.webp',
    summary:
      'A public campaign flyer announcing the free diabetes diagnosis, HbA1c testing, and medical treatment camp organized under the "Defeat Diabetes" initiative by Ojas Hospital and Dr. Hasmukh Soni at Rakhial, Ahmedabad.',
  },
  {
    id: 'm2',
    title: 'Kite String Safety & Cleanliness Drive during Uttarayan Festival',
    outlet: 'Divya Bhaskar',
    type: 'Print Media',
    date: '17/01/2026',
    thumbnail: '/media2.webp',
    summary:
      'Press coverage highlighting the civic initiative led by Ojas Charitable Trust Managing Trustee Dr. Hasmukh Soni and local leaders to safely collect and dispose of dangerous kite strings (manjha) from roads and trees.',
  },
  {
    id: 'm3',
    title: 'Free Multi-Specialty Health Diagnosis & Concessional Treatment Camp',
    outlet: 'Ojas Hospital Press',
    type: 'Print Media',
    date: '01/02/2026',
    thumbnail: '/media3.webp',
    summary:
      'Flyer details of the mega free diagnosis camp at Bapunagar, sponsored by Prerak Swa Sahay Juth Trust. Offering screening profiles for kidney, liver, cancer, thyroid, anemia, and diabetes.',
  },
  {
    id: 'm4',
    title: 'Free Health Services for 2,000 Municipal School Children in Rakhial',
    outlet: 'Bhaskar News',
    type: 'Print Media',
    date: '26/01/2026',
    thumbnail: '/media4.webp',
    summary:
      'News article detailing the free medical checkup drive and emergency primary treatment care launched by Gujarat Ayurved Medical Association (GAMA) Chairman & Ojas Hospital founder Dr. Hasmukh Soni.',
  },
  {
    id: 'm5',
    title: 'Press Feature: Bapunagar Free Multi-Specialty Diagnosis Camp',
    outlet: 'Local News Print',
    type: 'Print Media',
    date: '01/02/2026',
    thumbnail: '/media5.webp',
    summary:
      'Newspaper clipping covering the announcement and detailed clinical tests offered at the Bapunagar free multi-specialty diagnosis camp on 1st February by Ojas Hospital.',
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
        href="mailto:ojashospital104@gmail.com"
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
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 shadow-xs">
              <Tv className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-charcoal">Electronic Media</h2>
              <p className="text-sm text-charcoal/60">TV news broadcasts, online conference coverage, and video press releases</p>
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
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 shadow-xs">
              <Newspaper className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-charcoal">Print & Press Media</h2>
              <p className="text-sm text-charcoal/60">Newspaper clippings, press releases, and health camp announcements</p>
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
          className={selectedMedia.video ? 'max-w-3xl sm:max-w-4xl' : undefined}
        >
          <div className="relative h-[55vh] sm:h-[65vh] w-full rounded-2xl overflow-hidden mt-4 bg-slate-950 flex items-center justify-center border border-slate-100 shadow-inner">
            {selectedMedia.video ? (
              <video
                src={selectedMedia.video}
                poster={selectedMedia.thumbnail}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[65vh] object-contain"
              />
            ) : (
              <Image
                src={selectedMedia.thumbnail}
                alt={selectedMedia.title}
                fill
                sizes="(max-width: 768px) 100vw, 608px"
                className="object-contain"
                priority
              />
            )}
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
  const isVideo = !!media.video || media.type === 'Electronic Media';

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      <div
        onClick={() => onOpen(media)}
        className="relative h-56 w-full cursor-pointer bg-slate-900 overflow-hidden"
      >
        <Image
          src={media.thumbnail}
          alt={media.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        {isVideo ? (
          <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center text-white">
            <div className="h-12 w-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="h-5 w-5 fill-white ml-0.5" />
            </div>
            <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/10">
              <Video className="h-3.5 w-3.5 text-red-400" /> TV Broadcast
            </span>
          </div>
        ) : (
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
            <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold">
              <Eye className="h-4 w-4" /> View Full Image
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase ${
              isVideo
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-maroon-50 text-maroon-700'
            }`}
          >
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
            className="flex-1 text-center py-2.5 rounded-xl border border-maroon-200 text-maroon-700 hover:bg-maroon-700 hover:text-white text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            {isVideo ? (
              <>
                <Play className="h-3.5 w-3.5 fill-current" /> Watch Broadcast
              </>
            ) : (
              'View Document'
            )}
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

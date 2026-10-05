'use client';

import React, { useState, useRef, useEffect, useId } from 'react';
import Image from 'next/image';
import { Star, Play, Pause, Volume2, VolumeX, Maximize, Video as VideoIcon } from 'lucide-react';
import { Marquee } from '@/registry/magicui/marquee';
import { TESTIMONIALS } from '@/constants/hospitalData';
import { Testimonial } from '@/types';

const IconGoogle = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const IconStar = ({ filled }: { filled: boolean }) => (
  <Star
    fill={filled ? "currentColor" : "none"}
    className={filled ? "text-gold" : "text-gold/30"}
    size={15}
    strokeWidth={filled ? 1 : 2}
  />
);

function VideoTestimonialCardItem({
  test,
  activeVideoId,
  onTogglePlay,
  onEnded,
}: {
  test: Testimonial;
  activeVideoId: string | null;
  onTogglePlay: (id: string) => void;
  onEnded: () => void;
}) {
  const instanceId = useId();
  const isActive = activeVideoId === instanceId;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);

  // Sync playback with isActive state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy requires mute on autoplay, mute and play
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => { });
        });
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
    }
  }, [isActive]);

  const handleCardClick = () => {
    onTogglePlay(instanceId);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = percent * duration;
    setCurrentTime(percent * duration);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`testimonial-card relative overflow-hidden group/video cursor-pointer p-0 select-none ${isActive ? 'is-active ring-2 ring-gold/70 shadow-2xl' : ''
        }`}
      onClick={handleCardClick}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      role="button"
      tabIndex={0}
      aria-label={isActive ? "Pause patient video review" : "Play patient video review"}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={test.videoUrl}
        poster={test.videoPoster || test.avatar}
        playsInline
        preload="none"
        onTimeUpdate={() => {
          if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (videoRef.current) setDuration(videoRef.current.duration);
        }}
        onEnded={onEnded}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Ambient Vignette Gradients */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${isActive
          ? showControls
            ? 'bg-linear-to-t from-maroon-950/95 via-transparent to-maroon-950/70 opacity-100'
            : 'bg-linear-to-t from-maroon-950/80 via-transparent to-maroon-950/40 opacity-70'
          : 'bg-linear-to-t from-maroon-950/95 via-maroon-950/40 to-maroon-950/80 opacity-95 group-hover/video:opacity-90'
          }`}
      />

      {/* Interactive Overlay Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 pointer-events-none">
        {/* Top Header: Badge & Star Rating */}
        <div className="flex items-center justify-between w-full">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase backdrop-blur-md border border-white/15 text-white bg-black/80 shadow-xs">
            {isActive ? (
              <>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Playing
              </>
            ) : (
              <>
                <VideoIcon size={12} className="text-red-400" />
                Patient Story
              </>
            )}
          </span>

          <div className="flex items-center gap-1 bg-maroon-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} filled={i < test.rating} />
            ))}
          </div>
        </div>

        {/* Center Play / Pause Indicator */}
        <div className="flex flex-col items-center justify-center my-auto transition-all duration-300">
          {!isActive ? (
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 rounded-full bg-red-600/30 animate-ping opacity-75" />
                <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover/video:scale-110 transition-transform duration-300">
                  <Play size={24} className="ml-0.5 fill-white text-white" />
                </div>
              </div>
              <span className="text-xs font-semibold text-white/95 bg-black/80 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/15 shadow-md flex items-center gap-1.5">
                <VideoIcon size={12} className="text-red-400" /> Watch Story
              </span>
            </div>
          ) : (
            <div
              className={`w-12 h-12 rounded-full bg-maroon-950/75 backdrop-blur-md border border-gold/40 text-gold flex items-center justify-center transition-opacity duration-300 ${showControls ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
            >
              <Pause size={20} className="fill-gold" />
            </div>
          )}
        </div>

        {/* Bottom Details & Controls */}
        <div className="space-y-3 pt-2">
          <div>
            <strong className="text-white text-base font-serif font-bold block drop-shadow-sm">
              {test.name}
            </strong>
            {test.meta && (
              <span className="text-xs text-gold/90 font-medium drop-shadow-sm">
                {test.meta}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-white/80 pointer-events-auto">
            <span className="font-mono text-[11px] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded text-white/90">
              {isActive ? `${formatTime(currentTime)} / ${formatTime(duration)}` : '2:51 min'}
            </span>

            {isActive && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleMuteToggle}
                  className="p-1.5 rounded-full bg-maroon-900/80 hover:bg-gold hover:text-maroon-950 border border-white/20 transition-colors text-white"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="p-1.5 rounded-full bg-maroon-900/80 hover:bg-gold hover:text-maroon-950 border border-white/20 transition-colors text-white"
                  aria-label="Fullscreen"
                >
                  <Maximize size={14} />
                </button>
              </div>
            )}
          </div>

          {!isActive && (
            <div className="pt-1 pointer-events-auto">
              <button
                type="button"
                onClick={handleCardClick}
                className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-red-600 text-white border border-white/20 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                <Play size={13} className="fill-white" /> Watch Story
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scrubber Progress Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 z-20 cursor-pointer pointer-events-auto"
        onClick={isActive ? handleSeek : undefined}
        title={isActive ? "Seek playback" : undefined}
      >
        <div
          className="h-full bg-gold transition-all duration-100"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

function TestimonialCardItem({ test }: { test: any }) {
  const [expanded, setExpanded] = useState(false);

  // If text already ends in ellipsis, we don't need a read more button
  const textEndsWithEllipsis = test.text.endsWith('…');
  const showReadMore = !expanded && test.text.length > 150 && !textEndsWithEllipsis;

  return (
    <div className="testimonial-card">
      <span className="quote-mark" aria-hidden="true">"</span>

      <div className="reviewer-row">
        <Image src={test.avatar} alt={test.name} width={48} height={48} className="reviewer-avatar" />
        <div className="reviewer-info">
          <strong>{test.name}</strong>
          {test.meta && <span className="reviewer-meta">{test.meta}</span>}
        </div>
      </div>

      <div className="rating-row">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} filled={i < test.rating} />
        ))}
        <span className="rating-time">{test.timeAgo}</span>
      </div>

      <p
        className={`quote-text ${expanded || textEndsWithEllipsis ? 'expanded' : ''}`}
        aria-live="polite"
      >
        {test.text}
      </p>

      {showReadMore && (
        <button className="read-more" onClick={() => setExpanded(true)}>
          Read more
        </button>
      )}

      <span className="badge-google">
        <IconGoogle /> Posted on Google
      </span>
    </div>
  );
}

export function TestimonialCards() {
  const firstRow = TESTIMONIALS;
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handleTogglePlay = (id: string) => {
    setPlayingVideoId((prev) => (prev === id ? null : id));
  };

  const handleVideoEnded = () => {
    setPlayingVideoId(null);
  };

  const averageRating = firstRow.reduce((acc, curr) => acc + curr.rating, 0) / firstRow.length;

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Ojas Hospital',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': averageRating.toFixed(1),
      'reviewCount': firstRow.length.toString()
    },
    'review': firstRow.map(test => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': test.name
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': test.rating.toString(),
        'bestRating': '5'
      },
      'reviewBody': test.text
    }))
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-block relative">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon-700">Patient Stories</span>
            <div className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-maroon-700 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-charcoal tracking-tight">
            Real Experiences from Our <span className="text-maroon-700">Patients & Families</span>
          </h2>
          <p className="text-base text-charcoal/80 leading-relaxed">
            Read authentic feedback and recovery journeys from individuals who placed their trust in Ojas.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Viewport */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover paused={Boolean(playingVideoId)} className="[--duration:40s]">
          {firstRow.map((test, index) => (
            <div key={`r1-${test.id}-${index}`} className="w-64 sm:w-72 shrink-0 mx-2">
              {test.videoUrl ? (
                <VideoTestimonialCardItem
                  test={test}
                  activeVideoId={playingVideoId}
                  onTogglePlay={handleTogglePlay}
                  onEnded={handleVideoEnded}
                />
              ) : (
                <TestimonialCardItem test={test} />
              )}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 sm:w-1/4 bg-linear-to-r from-maroon-900 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 sm:w-1/4 bg-linear-to-l from-maroon-900 to-transparent"></div>
      </div>
    </section>
  );
}


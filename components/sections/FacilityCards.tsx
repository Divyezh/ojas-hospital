'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { FACILITIES } from '@/constants/hospitalData';
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";
import { cn } from "@/lib/utils";

export function FacilityCards() {
  const images = FACILITIES.map(f => ({
    src: f.image,
    alt: `Ojas Hospital ${f.title} Facility in Ahmedabad`
  }));

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="secondary">Infrastructure & Tech</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            State-of-the-Art <span className="gradient-text-primary">Medical Facilities</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Engineered for optimum surgical precision, ultra-low diagnostic noise, and maximum patient comfort during recovery.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="flex w-full items-center justify-center overflow-hidden">
          <Carousel_003 images={images} showPagination loop autoplay />
        </div>
      </div>
    </section>
  );
}

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 400px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.3);
  }

  .swiper-pagination-bullet {
    background-color: var(--color-maroon-700) !important;
  }
`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className={cn("relative w-full max-w-5xl px-5", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 2500,
                  disableOnInteraction: false,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="h-full w-full object-cover"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-linear-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold text-lg text-center tracking-wide">{image.alt}</h3>
              </div>
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white drop-shadow-md" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white drop-shadow-md" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

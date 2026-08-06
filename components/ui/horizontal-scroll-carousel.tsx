'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, User, Activity } from "lucide-react";
import { DEPARTMENTS } from "@/constants/hospitalData";
import { Department } from "@/types";

export interface DepartmentCardItem {
  id: string | number;
  title: string;
  url: string;
  description?: string;
  features?: string[];
  headOfDepartment?: string;
  stats?: {
    surgeries?: string;
    satisfaction?: string;
    specialists?: number;
  };
  href?: string;
}

interface HorizontalScrollCarouselProps {
  items?: DepartmentCardItem[];
}

export const HorizontalScrollCarousel = ({ items }: HorizontalScrollCarouselProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [travelDistance, setTravelDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map DEPARTMENTS data if items are not passed explicitly
  const cardItems: DepartmentCardItem[] = items || DEPARTMENTS.map((dept: Department) => ({
    id: dept.id,
    title: dept.name,
    url: dept.image,
    description: dept.description,
    features: dept.features,
    headOfDepartment: dept.headOfDepartment,
    stats: dept.stats,
    href: `/departments/${dept.id}`,
  }));

  // Dynamically calculate exact travel distance in pixels to show 100% of cards on any viewport size
  useEffect(() => {
    const updateDistance = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth;
        const visibleWidth = window.innerWidth;
        const padding = visibleWidth < 640 ? 32 : 64;
        setTravelDistance(Math.max(0, totalWidth - visibleWidth + padding));
      }
    };

    updateDistance();
    window.addEventListener('resize', updateDistance);
    return () => window.removeEventListener('resize', updateDistance);
  }, [cardItems]);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${travelDistance}px`]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-maroon-950">
      <div className="sticky top-0 z-20 flex h-screen items-center overflow-hidden py-8 sm:py-12">
        <motion.div
          ref={carouselRef}
          style={{ x, willChange: 'transform' }}
          className="flex gap-4 sm:gap-6 px-4 sm:px-12"
        >
          {cardItems.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: DepartmentCardItem }) => {
  const href = card.href || `/departments/${card.id}`;

  return (
    <Link
      href={href}
      className="group relative h-120 w-85 sm:w-100 shrink-0 overflow-hidden rounded-3xl bg-maroon-950 border border-maroon-700/50 shadow-2xl transition-all duration-300 hover:border-gold/60 hover:shadow-[0_20px_50px_rgba(155,28,48,0.4)] flex flex-col justify-between p-6 cursor-pointer"
    >
      {/* Background Image with Zoom & Dark Maroon Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={card.url}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-linear-to-t from-maroon-950 via-maroon-950/85 to-maroon-950/40 group-hover:from-maroon-950 group-hover:via-maroon-950/90 transition-colors duration-300" />

      {/* Top Header info (Stats & Badge) */}
      <div className="relative z-20 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-maroon-900/90 text-gold border border-gold/30 backdrop-blur-md shadow-md">
          <Activity className="h-3.5 w-3.5 text-gold" />
          {card.stats?.satisfaction ? `${card.stats.satisfaction} Satisfaction` : 'Center of Excellence'}
        </span>
        {card.stats?.surgeries && card.stats.surgeries !== "N/A" && (
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-white/90 backdrop-blur-md border border-white/10">
            {card.stats.surgeries}
          </span>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-20 mt-auto space-y-3">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight group-hover:text-gold transition-colors duration-300 drop-shadow-md">
          {card.title}
        </h3>

        {/* Description */}
        {card.description && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
            {card.description}
          </p>
        )}

        {/* Head of department tag */}
        {card.headOfDepartment && (
          <div className="flex items-center gap-2 text-xs font-medium text-amber-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-sm w-fit">
            <User className="h-3.5 w-3.5 text-gold shrink-0" />
            <span className="truncate">{card.headOfDepartment}</span>
          </div>
        )}

        {/* Key Features */}
        {card.features && card.features.length > 0 && (
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {card.features.slice(0, 4).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action CTA Button */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white group-hover:text-gold transition-colors">
          <span>Explore Department</span>
          <div className="h-8 w-8 rounded-full bg-maroon-700 group-hover:bg-gold group-hover:text-maroon-950 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-md">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalScrollCarousel;

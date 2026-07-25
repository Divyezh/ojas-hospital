'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Maximize2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs } from '@/components/ui/tabs';
import { Modal } from '@/components/ui/modal';
import { GALLERY_ITEMS } from '@/constants/hospitalData';
import { GalleryItem } from '@/types';

export function Gallery() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'camps', label: 'Medical Camps' },
  ];

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="primary">Virtual Tour</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Our <span className="gradient-text-primary">Medical Camps</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Take a visual tour of our community healthcare initiatives and free medical camps organized for public welfare.
          </p>

          <div className="pt-2 pb-6 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Community Health Programs</h3>
            <p className="text-sm text-slate-600 mb-4 max-w-2xl mx-auto">
              Ojas Hospital regularly organizes health awareness camps and community healthcare initiatives to promote preventive healthcare.
            </p>
            <button className="bg-maroon-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-maroon-800 transition-colors">
              View Upcoming Camps
            </button>
          </div>

          <div className="pt-6 flex justify-center">
            <Tabs
              tabs={galleryTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-64 rounded-3xl overflow-hidden shadow-soft-sm cursor-pointer border border-slate-200"
              >
                <Image
                  src={item.image}
                  alt={`Ojas Hospital ${item.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.title}
          description={selectedImage.caption}
        >
          <div className="relative h-[60vh] w-full rounded-2xl overflow-hidden mt-4 bg-slate-950">
            <Image
              src={selectedImage.image}
              alt={`Ojas Hospital ${selectedImage.title}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </Modal>
      )}
    </section>
  );
}

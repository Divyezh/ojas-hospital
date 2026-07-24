'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep loader on screen for 1.2s before starting exit animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const columns = 5;
  const stairVariants: Variants = {
    initial: { height: '100%' },
    exit: (i: number) => ({
      height: '0%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as any,
        delay: 0.05 * i,
      }
    })
  };

  const logoVariants: Variants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" as any }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen overflow-hidden">
          {/* Stairs Background Columns */}
          {[...Array(columns)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={stairVariants}
              initial="initial"
              exit="exit"
              className="relative h-full w-full bg-maroon-900 border-r border-maroon-800/20 last:border-0 origin-top"
            />
          ))}

          {/* Centered Logo Container */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            exit="exit"
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.03, 1],
                opacity: [0.9, 1, 0.9] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative w-40 h-40 sm:w-56 sm:h-56 drop-shadow-2xl"
            >
              <Image 
                src="/logo.png"
                alt="Ojas Hospital Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 160px, 224px"
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

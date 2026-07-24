'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emergency' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer rounded-full';

    const variants = {
      primary:
        'bg-maroon-700 hover:bg-maroon-800 text-white shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-maroon-700',
      secondary:
        'bg-slate-900 hover:bg-slate-800 text-white shadow-soft-sm hover:shadow-soft-md focus-visible:ring-slate-900',
      outline:
        'border-2 border-maroon-700/30 bg-transparent hover:bg-maroon-100 text-maroon-700 hover:border-maroon-700 focus-visible:ring-maroon-700',
      ghost:
        'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 focus-visible:ring-slate-400',
      emergency:
        'bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-rose-500',
      glass:
        'glass-card hover:bg-white/90 text-slate-900 border border-white/60 shadow-soft-sm hover:shadow-soft-md focus-visible:ring-maroon-700',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs tracking-wide',
      md: 'h-11 px-6 text-sm tracking-wide',
      lg: 'h-13 px-8 text-base tracking-wide',
      icon: 'h-10 w-10 p-0 rounded-full',
    };

    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        ref={ref}
        type={type}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin text-current" />
        ) : leftIcon ? (
          <span className="mr-2 inline-flex items-center">{leftIcon}</span>
        ) : null}
        <span>{children}</span>
        {!isLoading && rightIcon ? (
          <span className="ml-2 inline-flex items-center">{rightIcon}</span>
        ) : null}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'emergency' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-800 border-slate-200',
    primary: 'bg-maroon-100 text-maroon-800 border-maroon-200/60 font-semibold',
    secondary: 'bg-sky-50 text-sky-800 border-sky-200/60 font-semibold',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200/60 font-semibold',
    warning: 'bg-amber-50 text-amber-800 border-amber-200/60 font-semibold',
    emergency: 'bg-rose-50 text-rose-800 border-rose-200/60 font-semibold animate-pulse',
    outline: 'bg-transparent text-slate-700 border-slate-300',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

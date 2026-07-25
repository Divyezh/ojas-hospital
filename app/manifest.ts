import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ojas Hospital',
    short_name: 'Ojas',
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8B0000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'GoogleOther',
          'OAI-SearchBot',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Bingbot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.ojashospitalmultispecility.com/sitemap.xml',
  };
}


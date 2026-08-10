import { MetadataRoute } from 'next';
import { DEPARTMENTS, DOCTORS } from '@/constants/hospitalData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ojashospitalmultispecility.com';

  const staticRoutes = [
    '',
    '/about',
    '/departments',
    '/doctors',
    '/facilities',
    '/gallery',
    '/events',
    '/media',
    '/awards',
    '/testimonials',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const departmentRoutes = DEPARTMENTS.map((dept) => ({
    url: `${baseUrl}/departments/${dept.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const doctorRoutes = DOCTORS.map((doc) => ({
    url: `${baseUrl}/doctors/${doc.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...departmentRoutes, ...doctorRoutes];
}

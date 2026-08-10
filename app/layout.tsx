import type { Metadata } from 'next';
import Script from 'next/script';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
import { DEFAULT_METADATA, generateHospitalJsonLd, generatePhysicianJsonLd, generateFaqJsonLd } from '@/constants/metadata';
import { ToastProvider } from '@/components/ui/toast';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { BackToTop } from '@/components/layout/BackToTop';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hospitalJsonLd = generateHospitalJsonLd();
  const physicianJsonLd = generatePhysicianJsonLd();
  const faqJsonLd = generateFaqJsonLd();

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4DNVY9LXEJ" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4DNVY9LXEJ');
        `}
      </Script>
      <head>
        {/* SEO Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          .skiptranslate, iframe.skiptranslate, #google_translate_element {
            display: none !important;
          }
          body {
            top: 0 !important;
          }
        `}} />
      </head>
      <body
        className={`antialiased min-h-screen bg-white text-charcoal selection:bg-maroon-700 selection:text-white ${fraunces.variable} ${inter.variable}`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <div id="google_translate_element" style={{ display: 'none' }} suppressHydrationWarning />
        <div suppressHydrationWarning>
          <ToastProvider>
            <CustomCursor />
            <LoadingScreen />
            <ScrollProgress />
            <Navbar />

            <main suppressHydrationWarning>{children}</main>

            <Footer />
            <FloatingWhatsApp />
            <BackToTop />
          </ToastProvider>
        </div>
      </body>
    </html>
  );
}

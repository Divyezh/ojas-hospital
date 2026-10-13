import type { Metadata } from 'next';
import Script from 'next/script';
import { Fraunces, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sinkinSans = localFont({
  src: [
    {
      path: '../public/fonts/SinkinSans-700Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sinkin',
  display: 'swap',
});
import { DEFAULT_METADATA, generateHospitalJsonLd, generatePhysicianJsonLd, generateFaqJsonLd } from '@/constants/metadata';
import { ToastProvider } from '@/components/ui/toast';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { BackToTop } from '@/components/layout/BackToTop';
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4DNVY9LXEJ" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4DNVY9LXEJ');
          `}
        </Script>
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
        <style dangerouslySetInnerHTML={{
          __html: `
          .skiptranslate, iframe.skiptranslate, #google_translate_element {
            display: none !important;
          }
          body {
            top: 0 !important;
          }
        `}} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const observer = new MutationObserver(function(mutations) {
                    for (let i = 0; i < mutations.length; i++) {
                      const m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                        m.target.removeAttribute('bis_skin_checked');
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['bis_skin_checked']
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`antialiased min-h-screen bg-white text-charcoal selection:bg-maroon-700 selection:text-white ${fraunces.variable} ${inter.variable} ${sinkinSans.variable}`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <div id="google_translate_element" style={{ display: 'none' }} suppressHydrationWarning />
        <div suppressHydrationWarning>
          <ToastProvider>
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

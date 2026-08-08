'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'hi', name: 'हिन्दी (Hindi)', label: 'HI' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)', label: 'GU' },
];

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let intervalId: any = null;
    let mutationObserver: MutationObserver | null = null;

    const safeDocument = typeof document !== 'undefined' ? document : null;
    const safeWindow = typeof window !== 'undefined' ? window : null;

    const getCookie = (name: string): string | null => {
      try {
        if (!safeDocument) return null;
        const value = `; ${safeDocument.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
        return null;
      } catch {
        return null;
      }
    };

    const initTranslate = () => {
      try {
        if (!safeWindow) return;
        const g = (safeWindow as any).google;
        if (g?.translate?.TranslateElement) {
          new g.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,hi,gu',
              autoDisplay: false,
            },
            'google_translate_element'
          );
        }
      } catch {
        // silent in production
      }
    };

    // Add Google Translate initialization script (client only)
    try {
      if (safeWindow && safeDocument) {
        (safeWindow as any).googleTranslateElementInit = initTranslate;

        const g = (safeWindow as any).google;
        if (!g?.translate?.TranslateElement) {
          if (!safeDocument.getElementById('google-translate-script')) {
            const script = safeDocument.createElement('script');
            script.id = 'google-translate-script';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            safeDocument.body?.appendChild(script);
          }
        } else {
          initTranslate();
        }
      }
    } catch {
      // ignore
    }

    // restore language from cookie if present
    try {
      const cookieVal = getCookie('googtrans');
      if (cookieVal) {
        const lang = cookieVal.split('/').pop();
        if (lang && LANGUAGES.some((l) => l.code === lang)) {
          setCurrentLang(lang);
        }
      }
    } catch {
      // ignore
    }

    // Poll for the Google Translate select element (if present) and sync it
    try {
      if (safeWindow) {
        intervalId = safeWindow.setInterval(() => {
          try {
            if (!safeDocument) return;
            const selectEl = safeDocument.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
            if (selectEl) {
              const currentCookie = getCookie('googtrans');
              if (currentCookie) {
                const lang = currentCookie.split('/').pop();
                if (lang && LANGUAGES.some((l) => l.code === lang)) {
                  const hasOption = Array.from(selectEl.options).some((opt) => opt.value === lang);
                  if (hasOption) {
                    selectEl.value = lang;
                  } else {
                    selectEl.selectedIndex = 0;
                  }
                  selectEl.dispatchEvent(new Event('change'));
                  setCurrentLang(lang);
                }
              }
              if (intervalId && safeWindow) {
                safeWindow.clearInterval(intervalId);
                intervalId = null;
              }
            }
          } catch {
            // ignore
          }
        }, 300);
      }
    } catch {
      // ignore
    }

    // Fix specific Hindi translation string in hero headline (defensive & infinite-loop protected)
    let isFixing = false;
    const applyHindiFix = () => {
      try {
        if (isFixing || !safeDocument) return;
        const currentCookie = getCookie('googtrans');
        if (!currentCookie || !currentCookie.includes('/hi')) return;

        isFixing = true;
        const replaceText = (node: Node) => {
          try {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue && node.nodeValue.includes('सर्वश्रेष्ठ')) {
              node.nodeValue = node.nodeValue.replace(/सर्वश्रेष्ठ/g, 'श्रेष्ठ');
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              const tagName = (node as Element).tagName?.toLowerCase();
              if (tagName === 'script' || tagName === 'style' || tagName === 'svg') return;
              Array.from(node.childNodes).forEach(replaceText);
            }
          } catch {
            // continue
          }
        };

        const heroHeadline = safeDocument.querySelector('#hero h1');
        if (heroHeadline) {
          replaceText(heroHeadline);
        } else if (safeDocument.body) {
          replaceText(safeDocument.body);
        }
        isFixing = false;
      } catch {
        isFixing = false;
      }
    };

    applyHindiFix();

    // Observe DOM so we can re-apply the Hindi fix when translations mutate DOM
    try {
      if (typeof MutationObserver !== 'undefined' && safeDocument?.body) {
        mutationObserver = new MutationObserver(() => {
          try {
            applyHindiFix();
          } catch {
            // ignore
          }
        });
        mutationObserver.observe(safeDocument.body, { childList: true, subtree: true, characterData: true });
      }
    } catch {
      // ignore
    }

    // Click outside to close dropdown (only if DOM available)
    const handleClickOutside = (event: MouseEvent) => {
      try {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      } catch {
        // ignore
      }
    };
    try {
      if (safeDocument) safeDocument.addEventListener('mousedown', handleClickOutside);
    } catch {
      // ignore
    }

    // cleanup
    return () => {
      try {
        if (intervalId && safeWindow) {
          safeWindow.clearInterval(intervalId);
          intervalId = null;
        }
      } catch {
        // ignore
      }
      try {
        if (mutationObserver) {
          mutationObserver.disconnect();
          mutationObserver = null;
        }
      } catch {
        // ignore
      }
      try {
        if (safeDocument) safeDocument.removeEventListener('mousedown', handleClickOutside);
      } catch {
        // ignore
      }
      try {
        if (safeWindow) {
          (safeWindow as any).googleTranslateElementInit = undefined;
        }
      } catch {
        // ignore
      }
    };
  }, []);

  const clearGoogleTranslateCookies = () => {
    try {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;

      const host = window.location.hostname || '';
      const hostParts = host.split('.').filter(Boolean);

      const domains = ['', host, `.${host}`].filter(Boolean);
      if (hostParts.length >= 2) {
        const rootDomain = hostParts.slice(-2).join('.');
        domains.push(rootDomain, `.${rootDomain}`);
      }
      if (hostParts.length >= 3) {
        const subDomain = hostParts.slice(-3).join('.');
        domains.push(subDomain, `.${subDomain}`);
      }

      const paths = ['/', '/en', '/en/'];
      const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host.includes('::1');

      domains.forEach((d) => {
        paths.forEach((p) => {
          try {
            const domainPart = d ? `domain=${d};` : '';
            const securePart = isLocalhost ? '' : ' Secure; SameSite=None;';
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; max-age=0; ${domainPart} path=${p};${securePart}`;
          } catch {
            // ignore
          }
        });
      });
    } catch {
      // ignore
    }
  };

  const setGoogleTranslateCookie = (langCode: string) => {
    try {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;

      clearGoogleTranslateCookies();

      const host = window.location.hostname || '';
      const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host.includes('::1');

      if (langCode === 'en') {
        // Reset cookie to English
        document.cookie = `googtrans=/en/en; path=/;${isLocalhost ? '' : ' Secure; SameSite=None;'}`;
        if (!isLocalhost) {
          try {
            document.cookie = `googtrans=/en/en; path=/; domain=${host}; Secure; SameSite=None;`;
            document.cookie = `googtrans=/en/en; path=/; domain=.${host}; Secure; SameSite=None;`;
          } catch {
            // ignore
          }
        }
        return;
      }

      const cookieValue = `/en/${langCode}`;

      // Always set a basic cookie for path=/
      document.cookie = `googtrans=${cookieValue}; path=/;${isLocalhost ? '' : ' Secure; SameSite=None;'}`;

      if (!isLocalhost) {
        try {
          const hostParts = host.split('.').filter(Boolean);
          document.cookie = `googtrans=${cookieValue}; path=/; domain=${host}; Secure; SameSite=None;`;
          document.cookie = `googtrans=${cookieValue}; path=/; domain=.${host}; Secure; SameSite=None;`;

          if (hostParts.length >= 2) {
            const rootDomain = hostParts.slice(-2).join('.');
            document.cookie = `googtrans=${cookieValue}; path=/; domain=${rootDomain}; Secure; SameSite=None;`;
            document.cookie = `googtrans=${cookieValue}; path=/; domain=.${rootDomain}; Secure; SameSite=None;`;
          }
        } catch {
          // ignore
        }
      }
    } catch {
      // ignore
    }
  };

  const syncGoogleTranslateSelect = (langCode: string) => {
    try {
      if (typeof document === 'undefined') return;
      const selectEl = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
      if (!selectEl) return;

      if (langCode === 'en') {
        const hasEnOption = Array.from(selectEl.options).some((opt) => opt.value === 'en');
        if (hasEnOption) {
          selectEl.value = 'en';
        } else {
          selectEl.selectedIndex = 0;
        }
      } else {
        const hasOption = Array.from(selectEl.options).some((opt) => opt.value === langCode);
        if (hasOption) selectEl.value = langCode;
        else selectEl.selectedIndex = 0;
      }
      selectEl.dispatchEvent(new Event('change'));
    } catch {
      // ignore
    }
  };

  const handleLanguageChange = (langCode: string) => {
    try {
      setGoogleTranslateCookie(langCode);
      setCurrentLang(langCode);
      setIsOpen(false);

      syncGoogleTranslateSelect(langCode);

      // Reload shortly after to ensure Translate Element picks up the cookie
      setTimeout(() => {
        try {
          if (typeof window !== 'undefined') {
            window.location.reload();
          }
        } catch {
          // ignore
        }
      }, 150);
    } catch {
      // ignore
    }
  };

  const selectedLang = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-full border border-slate-200 text-charcoal hover:text-maroon-700 hover:border-maroon-300 transition-all bg-white"
        aria-label="Change Language"
        aria-expanded={isOpen}
      >
        <Globe className="h-3.5 w-3.5 text-maroon-700" />
        <span>{selectedLang.label}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors ${
                currentLang === lang.code
                  ? 'bg-maroon-50 text-maroon-700'
                  : 'text-charcoal hover:bg-maroon-50 hover:text-maroon-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

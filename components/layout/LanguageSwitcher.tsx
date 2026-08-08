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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initTranslate = () => {
      if ((window as any).google && (window as any).google.translate && (window as any).google.translate.TranslateElement) {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,gu',
          autoDisplay: false
        }, 'google_translate_element');
      }
    };

    // Add Google Translate initialization script
    if (typeof window !== 'undefined') {
      (window as any).googleTranslateElementInit = initTranslate;

      if (!(window as any).google?.translate?.TranslateElement) {
        if (!document.getElementById('google-translate-script')) {
          const script = document.createElement('script');
          script.id = 'google-translate-script';
          script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          script.async = true;
          document.body.appendChild(script);
        }
      } else {
        initTranslate();
      }
    }

    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const cookieVal = getCookie('googtrans');
    if (cookieVal) {
      const lang = cookieVal.split('/').pop();
      if (lang && LANGUAGES.some(l => l.code === lang)) {
        setCurrentLang(lang);
      }
    }

    // Poll for the Google Translate dropdown to initialize in the DOM, then force-sync it
    const interval = setInterval(() => {
      const selectEl = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
      if (selectEl) {
        const currentCookie = getCookie('googtrans');
        if (currentCookie) {
          const lang = currentCookie.split('/').pop();
          if (lang && lang !== 'en' && LANGUAGES.some(l => l.code === lang)) {
            selectEl.value = lang;
            selectEl.dispatchEvent(new Event('change'));
            setCurrentLang(lang);
          }
        } else {
          selectEl.selectedIndex = 0;
          selectEl.value = '';
          setCurrentLang('en');
        }
        clearInterval(interval);
      }
    }, 300);

    // Fix Hindi translation string "सर्वश्रेष्ठ" -> "श्रेष्ठ" for hero headline
    let isFixing = false;
    const applyHindiFix = () => {
      if (isFixing) return;
      const currentCookie = getCookie('googtrans');
      if (currentCookie && currentCookie.includes('/hi')) {
        isFixing = true;
        const replaceText = (node: Node) => {
          if (node.nodeType === Node.TEXT_NODE && node.nodeValue && node.nodeValue.includes('सर्वश्रेष्ठ')) {
            node.nodeValue = node.nodeValue.replace(/सर्वश्रेष्ठ/g, 'श्रेष्ठ');
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const tagName = (node as Element).tagName?.toLowerCase();
            if (tagName === 'script' || tagName === 'style' || tagName === 'svg') return;
            node.childNodes.forEach(replaceText);
          }
        };
        
        const heroHeadline = document.querySelector('#hero h1');
        if (heroHeadline) {
          replaceText(heroHeadline);
        } else {
          replaceText(document.body);
        }
        isFixing = false;
      }
    };

    applyHindiFix();

    const mutationObserver = new MutationObserver(() => {
      applyHindiFix();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true, characterData: true });

    // Click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearInterval(interval);
      mutationObserver.disconnect();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const clearGoogleTranslateCookies = () => {
    if (typeof window === 'undefined') return;
    const host = window.location.hostname;
    const hostParts = host.split('.');

    const domains = ['', host, `.${host}`];
    if (hostParts.length >= 2) {
      const rootDomain = hostParts.slice(-2).join('.');
      domains.push(rootDomain, `.${rootDomain}`);
    }
    if (hostParts.length >= 3) {
      const subDomain = hostParts.slice(-3).join('.');
      domains.push(subDomain, `.${subDomain}`);
    }

    const paths = ['/', '/en', '/en/'];

    domains.forEach((d) => {
      paths.forEach((p) => {
        const domainStr = d ? `domain=${d};` : '';
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; max-age=0; ${domainStr} path=${p};`;
      });
    });
  };

  const setGoogleTranslateCookie = (langCode: string) => {
    if (typeof window === 'undefined') return;
    
    // Always clear existing cookies on all paths/domains
    clearGoogleTranslateCookies();

    // If English, do NOT set googtrans cookie (clearing it restores original page language)
    if (langCode === 'en') return;

    const host = window.location.hostname;
    const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host.includes('::1');
    const cookieValue = `/en/${langCode}`;

    document.cookie = `googtrans=${cookieValue}; path=/;`;

    if (!isLocalhost) {
      const hostParts = host.split('.');
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${host};`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${host};`;

      if (hostParts.length >= 2) {
        const rootDomain = hostParts.slice(-2).join('.');
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${rootDomain};`;
        document.cookie = `googtrans=${cookieValue}; path=/; domain=.${rootDomain};`;
      }
    }
  };

  const syncGoogleTranslateSelect = (langCode: string) => {
    const selectEl = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
    if (selectEl) {
      if (langCode === 'en') {
        selectEl.selectedIndex = 0;
        selectEl.value = '';
      } else {
        selectEl.value = langCode;
      }
      selectEl.dispatchEvent(new Event('change'));
    }
  };

  const handleLanguageChange = (langCode: string) => {
    setGoogleTranslateCookie(langCode);
    setCurrentLang(langCode);
    setIsOpen(false);

    syncGoogleTranslateSelect(langCode);

    // Force a reload to guarantee translation initialization and persistence
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  const selectedLang = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

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

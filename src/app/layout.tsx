import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const bodyFont = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-manrope",
  display: "optional",
  fallback: ["Arial", "sans-serif"],
});

const displayFont = localFont({
  src: "./fonts/newsreader-600-latin.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-newsreader",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "serif"],
});

const utilityFont = localFont({
  src: "./fonts/ibm-plex-mono-500-latin.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-ibm-plex-mono",
  display: "swap",
  preload: false,
  fallback: ["Courier New", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Nabin Pariyar",
    "full-stack developer Nepal",
    "Android developer Nepal",
    "Kotlin developer",
    "Next.js developer",
    "React developer",
    "garment ERP software",
    "mobile app developer",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#nabin-pariyar`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      image: `${SITE_CONFIG.url}/images/nabin-profile.png`,
      jobTitle: "Full-Stack Web and Android Developer",
      description: SITE_CONFIG.description,
      knowsAbout: [
        "Full-stack web development",
        "TypeScript",
        "Next.js",
        "React",
        "Kotlin",
        "Jetpack Compose",
        "Android app development",
        "Garment ERP systems",
        "FFmpeg",
        "Android WorkManager",
        "WebSocket protocols",
      ],
      sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.playStore],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: `${SITE_CONFIG.name} — Full-Stack Web & Android Developer`,
      description: SITE_CONFIG.description,
      inLanguage: "en",
      author: { "@id": `${SITE_CONFIG.url}/#nabin-pariyar` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Analytics, ads, and consent tooling are production integrations. Keeping
  // them off localhost and preview deployments prevents false console errors
  // without changing the deployed consent/monetization behavior.
  const enableProductionServices = process.env.VERCEL_ENV === "production";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('portfolio-theme');var t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`,
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-1284990073783248" />
        {enableProductionServices && (
          <Script id="consent-mode" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500,
                'regions': ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']
              });
              gtag('consent', 'default', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            `}
          </Script>
        )}
        {enableProductionServices && (
          <Script
            src="https://fundingchoicesmessages.google.com/i/pub-1284990073783248?ers=1"
            strategy="afterInteractive"
          />
        )}
        {enableProductionServices && (
          <Script id="google-fc-init" strategy="afterInteractive">
            {`
              (function() {
                function signalGooglefcPresent() {
                  if (!window.frames['googlefcPresent']) {
                    if (document.body) {
                      const iframe = document.createElement('iframe');
                      iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                      iframe.style.display = 'none';
                      iframe.name = 'googlefcPresent';
                      iframe.id = 'googlefcPresent';
                      document.body.appendChild(iframe);
                    } else {
                      setTimeout(signalGooglefcPresent, 0);
                    }
                  }
                }
                signalGooglefcPresent();
              })();
            `}
          </Script>
        )}
        {enableProductionServices && (
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1284990073783248"
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
        {enableProductionServices && (
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-F02NVF6MNS"
            strategy="lazyOnload"
          />
        )}
        {enableProductionServices && (
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F02NVF6MNS');
            `}
          </Script>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${utilityFont.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only fixed top-3 left-3 z-[100] inline-flex min-h-11 min-w-11 items-center bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast focus:not-sr-only"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        {enableProductionServices && <Analytics />}
        {enableProductionServices && <SpeedInsights />}
      </body>
    </html>
  );
}

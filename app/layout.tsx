import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
import AnimatedBackground from "@/src/features/effects/lazy";
import Navbar from "@/src/features/layout/components/Navbar";
import Footer from "@/src/features/layout/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030303",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.malera.studio"),
  title: "Malera Studio - We Just Build Good Stuff",
  description:
    "We build websites, apps, and videos from a small dev studio in Kosovo. AI-powered, human-driven.",
  keywords: [
    "web development Kosovo",
    "mobile apps Kosovo",
    "app development Kosovo",
    "AI automation",
    "video production Kosovo",
    "Malera Studio",
  ],
  authors: [{ name: "Malera Studio", url: "https://www.malera.studio" }],
  creator: "Malera Studio",
  publisher: "Malera Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Malera Studio - We Just Build Good Stuff",
    description:
      "We build websites, apps, and videos from a small dev studio in Kosovo. AI-powered, human-driven.",
    url: "/",
    siteName: "Malera Studio",
    images: [
      {
        url: "/malera-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Malera Studio - We Just Build Good Stuff",
      },
    ],
    locale: "en_US",
    alternateLocale: ["sq_AL"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@malerastudio",
    creator: "@malerastudio",
    title: "Malera Studio - We Just Build Good Stuff",
    description:
      "We build websites, apps, and videos from a small dev studio in Kosovo. AI-powered, human-driven.",
    images: ["/malera-transparent.webp"],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "sq": "/",
      "x-default": "/",
    },
  },
  other: {
    "format-detection": "telephone=no",
    "color-scheme": "dark",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          Favicon strategy — covers every browser and platform:
          • 32px:  legacy browser tab icon
          • 48px:  Next.js convention-based favicon (app/icon.png)
          • 192px: Android Chrome, Google Search, Safari high-res tab
          • 512px: PWA splash, Google Play
          • ICO:   Internet Explorer / old bookmark compatibility
          • 180px: Apple touch icon (iOS Home Screen, Safari, macOS Dock)
        */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/malera-transparent.webp" fetchPriority="high" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            (function() {
              var s = document.createElement('script');
              s.async = true;
              s.src = 'https://www.googletagmanager.com/gtag/js?id=G-HG808CX1P4';
              document.head.appendChild(s);
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HG808CX1P4');
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <AnimatedBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

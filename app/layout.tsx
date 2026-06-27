import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/src/shared/context/LanguageContext";
import AnimatedBackground from "@/src/features/effects/dynamic";
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
    "We build websites, apps, and videos — a small dev studio from Kosovo. AI-powered, human-driven.",
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
      "We build websites, apps, and videos — a small dev studio from Kosovo. AI-powered, human-driven.",
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
      "We build websites, apps, and videos — a small dev studio from Kosovo. AI-powered, human-driven.",
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
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

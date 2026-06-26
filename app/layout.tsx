import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/src/shared/context/LanguageContext";
import AnimatedBackground from "@/src/features/effects/dynamic";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080808",
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
        url: "/malera-transparent.png",
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
    images: ["/malera-transparent.png"],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HG808CX1P4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HG808CX1P4');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${dmSans.variable} antialiased overflow-x-hidden`}>
        <AnimatedBackground />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/src/features/home/components/Hero";
import GlassDivider from "@/src/features/layout/components/GlassDivider";
import {
  Portfolio,
  Pricing,
  Contact,
} from "@/src/features/home/dynamic";

const Services = dynamic(
  () => import("@/src/features/home/components/Services"),
  {
    loading: () => (
      <section className="relative min-h-[600px] sm:min-h-[700px]" />
    ),
  }
);

export const metadata: Metadata = {
  title: "Malera Studio - We Just Build Good Stuff",
  description:
    "We build websites, apps, and videos from a small dev studio in Kosovo. AI-powered, human-driven.",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Malera Studio",
    url: "https://www.malera.studio",
    logo: "https://www.malera.studio/malera-transparent.webp",
    description:
      "We build websites, apps, and videos from a small dev studio in Kosovo. AI-powered, human-driven.",
    foundingDate: "2026",
    foundingLocation: {
      "@type": "Place",
      name: "Kosovo",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@malera.studio",
      contactType: "customer service",
      availableLanguage: ["English", "Albanian"],
    },
    sameAs: [
      "https://instagram.com/malera.studio",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Malera Studio",
    url: "https://www.malera.studio",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.malera.studio/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Malera Studio",
    image: "https://www.malera.studio/malera-transparent.webp",
    url: "https://www.malera.studio",
    telephone: "+383-44-000-000",
    email: "hello@malera.studio",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pristina",
      addressCountry: "XK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.6629,
      longitude: 21.1655,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€",
    areaServed: "Kosovo, Balkans, Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "Video Production",
      "AI Automation",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "Malera Studio",
    },
    description:
      "Custom websites and web applications built with modern frameworks. Fast, accessible, and SEO-optimized.",
    areaServed: "Kosovo, Balkans, Worldwide",
    url: "https://www.malera.studio/#services",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile Apps",
    provider: {
      "@type": "Organization",
      name: "Malera Studio",
    },
    description:
      "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences.",
    areaServed: "Kosovo, Balkans, Worldwide",
    url: "https://www.malera.studio/#services",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Video Production",
    provider: {
      "@type": "Organization",
      name: "Malera Studio",
    },
    description:
      "Professional video production from concept to final cut. Brand films, commercials, and social content.",
    areaServed: "Kosovo, Balkans, Worldwide",
    url: "https://www.malera.studio/#services",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Bots and Automation",
    provider: {
      "@type": "Organization",
      name: "Malera Studio",
    },
    description:
      "Intelligent automation solutions and AI-powered chatbots that streamline your business workflows.",
    areaServed: "Kosovo, Balkans, Worldwide",
    url: "https://www.malera.studio/#services",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.malera.studio",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.malera.studio/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Portfolio",
        item: "https://www.malera.studio/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Pricing",
        item: "https://www.malera.studio/#pricing",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://www.malera.studio/#contact",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Privacy Policy",
        item: "https://www.malera.studio/privacy",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Terms of Service",
        item: "https://www.malera.studio/terms",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <GlassDivider />
      <Services />
      <GlassDivider />
      <Portfolio />
      <GlassDivider />
      <Pricing />
      <GlassDivider />
      <Contact />
    </>
  );
}

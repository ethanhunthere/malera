import type { Metadata } from "next";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "What Pro Includes | Malera Studio",
  description:
    "A detailed breakdown of the Pro plan — up to 15 pages, CMS, advanced SEO, animations, analytics, revisions, and ongoing availability.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.malera.studio/prodetails",
  },
  openGraph: {
    title: "What Pro Includes | Malera Studio",
    description:
      "A detailed breakdown of the Pro plan — up to 15 pages, CMS, advanced SEO, animations, analytics, revisions, and ongoing availability.",
    url: "https://www.malera.studio/prodetails",
  },
};

const sections = [
  {
    id: "pages",
    label: "Up to 15 pages",
    body: (
      <>
        <p>
          Fifteen pages gives room for a proper site structure. Product or
          service pages, team pages, case studies, blog, legal pages — we plan
          the full architecture with you before we write a single line of code.
        </p>
      </>
    ),
  },
  {
    id: "cms",
    label: "The CMS",
    body: (
      <>
        <p>
          We build your site with a content management system that lets you
          update text, images, and content yourself without touching code. You
          get a walkthrough of how to use it when we hand over.
        </p>
      </>
    ),
  },
  {
    id: "seo",
    label: "Advanced SEO",
    body: (
      <>
        <p>
          Beyond the basics. We research which terms your customers actually
          search for. We structure your pages around those terms. We set up
          schema markup so search engines understand your content. We connect
          Google Analytics and Search Console and make sure data is flowing
          correctly.
        </p>
      </>
    ),
  },
  {
    id: "animations",
    label: "Animations and interactions",
    body: (
      <>
        <p>
          We add motion where it makes the experience feel more considered.
          Page transitions, scroll reveals, hover states. Everything
          intentional.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    body: (
      <>
        <p>
          From day one your site tracks what matters. Where visitors come from,
          which pages they spend time on, where they leave. We set up the
          events that are relevant to your business goals.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    label: "Revision rounds",
    body: (
      <>
        <p>
          Two rounds means we build the full site, you review everything, we
          address your feedback, you review again, we finalize. It gives space
          to refine without dragging the project out.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    label: "After launch",
    body: (
      <>
        <p>
          We are available after launch for questions and small adjustments. If
          something comes up we respond.
        </p>
      </>
    ),
  },
  {
    id: "who",
    label: "Who this is for",
    body: (
      <>
        <p>
          Businesses that have outgrown a simple site and need something that
          works harder. Companies that want to own and update their content
          without depending on a developer for every change. Anyone building
          something meant to last a few years.
        </p>
      </>
    ),
  },
];

export default function ProDetailsPage() {
  return (
    <main className="relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <Container className="max-w-[680px]">
          {/* Back link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-[0.18em] text-white/25 hover:text-white/50 transition-colors mb-10"
          >
            <span>&larr;</span> Back to main site
          </a>

          {/* Header */}
          <p className="font-mono text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-[0.22em] text-[#C9A84C] mb-5">
            Pro Plan
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] leading-[1] mb-5">
            What Pro includes
          </h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-[560px] mb-16">
            Something bigger is in motion. A detailed look at the Pro plan — CMS
            setup, advanced SEO, animations, analytics, and how we build a site
            that grows with you.
          </p>

          {/* Sections */}
          <div className="space-y-14 sm:space-y-16">
            {sections.map((section, i) => (
              <section key={section.id}>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-[0.6875rem] sm:text-xs text-white/15 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] leading-tight">
                    {section.label}
                  </h2>
                </div>
                <div className="legal-content">{section.body}</div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-10" />
            <p className="text-white/40 text-sm mb-5">
              Ready to get started?
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#C9A84C] text-black text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-[#D4B35A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-500"
            >
              Tell me more
            </a>
          </div>
        </Container>
    </main>
  );
}

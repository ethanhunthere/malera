import type { Metadata } from "next";
import Navbar from "@/src/features/layout/components/Navbar";
import Footer from "@/src/features/layout/components/Footer";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "What Starter Includes | Malera Studio",
  description:
    "A detailed breakdown of the Starter plan — 5 pages, responsive design, SEO setup, revisions, deliverables, and who it is for.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.malera.studio/starterdetails",
  },
  openGraph: {
    title: "What Starter Includes | Malera Studio",
    description:
      "A detailed breakdown of the Starter plan — 5 pages, responsive design, SEO setup, revisions, deliverables, and who it is for.",
    url: "https://www.malera.studio/starterdetails",
  },
};

const sections = [
  {
    id: "pages",
    label: "The 5 pages",
    body: (
      <>
        <p>
          We structure your 5 pages around what actually matters for your
          business. Typically: Home, About, Services, Portfolio or Gallery,
          Contact. Every page is planned with you before we start building. If
          your business needs a different structure, we adjust.
        </p>
      </>
    ),
  },
  {
    id: "responsive",
    label: "Responsive design",
    body: (
      <>
        <p>
          Every element is tested on phones, tablets, and desktop screens. We
          build mobile first, which means the experience on a phone is treated
          as the primary one, and desktop builds from there.
        </p>
      </>
    ),
  },
  {
    id: "seo",
    label: "SEO setup",
    body: (
      <>
        <p>
          We set up your page titles, meta descriptions, and headings
          correctly. We submit your site to Google Search Console. We make sure
          your pages load fast enough to rank. This is the foundation. It puts
          you on the map.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    label: "Revisions",
    body: (
      <>
        <p>
          One revision round means we gather your feedback after the first full
          version is ready and address everything in one pass. Send us a
          consolidated list and we handle it.
        </p>
      </>
    ),
  },
  {
    id: "deliverables",
    label: "What you receive",
    body: (
      <>
        <p>
          The full source code if you want it. Credentials to your hosting and
          domain. A handover document explaining how everything works. You own
          it completely.
        </p>
      </>
    ),
  },
  {
    id: "support",
    label: "After we finish",
    body: (
      <>
        <p>
          We are reachable by email for 30 days if something unexpected comes
          up. Anything beyond that is covered under a separate maintenance
          agreement.
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
          Early stage businesses launching their first professional site.
          Businesses with an outdated site that just needs to be replaced
          cleanly. Anyone who wants something real built fast without
          unnecessary complexity.
        </p>
      </>
    ),
  },
];

export default function StarterDetailsPage() {
  return (
    <>
      <Navbar />
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
            Starter Plan
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] leading-[1] mb-5">
            What Starter includes
          </h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-[560px] mb-16">
            A clean site, up fast, done right. Everything you need to know about
            the Starter plan — what is covered, how we work, and whether it fits
            your situation.
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
      <Footer />
    </>
  );
}

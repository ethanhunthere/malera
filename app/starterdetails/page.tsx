import type { Metadata } from "next";
import Navbar from "@/src/features/layout/components/Navbar";
import Footer from "@/src/features/layout/components/Footer";

export const metadata: Metadata = {
  title: "What Starter Includes | Malera Studio",
  description:
    "A detailed breakdown of the Starter plan — what 5 pages covers, how we structure them, responsive design, SEO setup, revisions, deliverables, and who it is best for.",
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
      "A detailed breakdown of the Starter plan — what 5 pages covers, how we structure them, responsive design, SEO setup, revisions, deliverables, and who it is best for.",
    url: "https://www.malera.studio/starterdetails",
  },
};

const sections = [
  {
    id: "pages",
    label: "What 5 pages covers and how we structure them",
    body: (
      <>
        <p>
          Five pages is enough to say what you need to say. Most small businesses
          land here: Home, About, Services, Contact, and one more — a portfolio
          page, a pricing breakdown, a blog landing page, whatever moves the
          needle for your situation.
        </p>
        <p>
          We do not use templates. Every page is built from scratch, structured
          around what your audience actually needs to know before they reach out.
          We figure out the information architecture together before a single
          line of code is written. You get a site map that makes sense, pages
          that flow into each other, and no filler.
        </p>
      </>
    ),
  },
  {
    id: "responsive",
    label: "What responsive design means in practice",
    body: (
      <>
        <p>
          Responsive design is not &ldquo;it looks okay on mobile.&rdquo; It
          means every single element on every single page is tested on real
          devices — phones, tablets, laptops, large desktop screens — and
          nothing breaks. Text stays readable without pinching. Buttons are
          large enough to tap. Images do not overflow. Menus collapse properly.
        </p>
        <p>
          We test on actual phones and tablets, not just browser resizing. Your
          site will look and feel right whether someone is on a 320px-wide phone
          or a 5000px-wide studio display.
        </p>
      </>
    ),
  },
  {
    id: "seo",
    label: "What SEO setup we do specifically",
    body: (
      <>
        <p>
          SEO on the Starter plan is foundational. We handle the things that
          matter most for search engines to understand your site: proper heading
          hierarchy, meta titles and descriptions for every page, semantic HTML
          structure, image alt text, clean URLs, and a sitemap that Google can
          read.
        </p>
        <p>
          We also set up Open Graph tags so links look good when shared on
          social media. This is the baseline that gets you into the game. You
          will not rank for competitive keywords overnight, but you will have a
          site that search engines can actually crawl, index, and understand —
          which is more than most small business sites can say.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    label: "What the revision round covers and what it does not",
    body: (
      <>
        <p>
          You get one round of revisions after we deliver the first full build.
          This covers adjustments to layout, typography, spacing, color,
          content, and imagery — anything that falls within the original five
          pages and the agreed scope.
        </p>
        <p>
          What it does not cover: adding new pages, building new features,
          redesigning the entire site from scratch, or integrating third-party
          services that were not discussed upfront. Those are separate
          conversations, quoted separately, and handled after the initial
          project wraps.
        </p>
        <p>
          The revision round is there so we can dial in the details together.
          Most projects land exactly where they need to after one round of
          thoughtful feedback.
        </p>
      </>
    ),
  },
  {
    id: "deliverables",
    label: "What files and assets you receive at the end",
    body: (
      <>
        <p>
          When we are done, you own everything. We hand over the full source
          code, all assets, all design files if applicable, and any
          documentation you need to hand the site off to another developer or
          manage it yourself.
        </p>
        <p>
          There are no ongoing licensing fees, no proprietary lock-in, no
          monthly charges for the code we wrote. The site is yours. We can host
          it for you if you want, or you can take it anywhere.
        </p>
      </>
    ),
  },
  {
    id: "support",
    label: "What support looks like after we finish",
    body: (
      <>
        <p>
          After launch, we stay reachable for a reasonable period. If something
          breaks, we fix it. If you need a small text change or an image swap,
          we handle it. The Starter plan includes a short post-launch window
          where you can reach us without a new invoice.
        </p>
        <p>
          For anything larger — new pages, new features, redesign work — we
          quote it as a new engagement. The relationship does not end at launch.
          It just changes shape.
        </p>
      </>
    ),
  },
  {
    id: "who",
    label: "Who this plan works best for",
    body: (
      <>
        <p>
          Starter is for people who know exactly what they need and do not want
          to overcomplicate it. A small business launching their first real
          site. A freelancer who needs a portfolio. A local service that just
          needs to be findable online. A landing page for a product or event.
        </p>
        <p>
          If your scope is small, your timeline is reasonable, and you value
          quality over quantity — this is the right fit. If you need a CMS, a
          blog, user accounts, or anything that scales beyond five pages, Pro is
          the better starting point.
        </p>
      </>
    ),
  },
];

export default function StarterDetailsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6">
        <div className="max-w-[680px] mx-auto">
          {/* Back link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/25 hover:text-white/50 transition-colors mb-10"
          >
            <span>&larr;</span> Back to main site
          </a>

          {/* Header */}
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C9A84C] mb-5">
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
                  <span className="font-mono text-[11px] sm:text-xs text-white/15 tabular-nums shrink-0">
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
              Ready to get started? Reach out and we will figure out if Starter
              is the right fit for what you need.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#C9A84C] text-black text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-[#D4B35A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-500"
            >
              Tell me more
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

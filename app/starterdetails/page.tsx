import type { Metadata } from "next";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "Starter Plan - Scope of Work | Malera Studio",
  description:
    "Full scope breakdown for the Starter plan. Five pages, responsive on every device, SEO foundation, one revision round, source code and credentials delivered.",
  alternates: { canonical: "https://www.malera.studio/starterdetails" },
  openGraph: {
    title: "Starter Plan - Scope of Work | Malera Studio",
    description:
      "Full scope breakdown for the Starter plan. Five pages, responsive on every device, SEO foundation, one revision round, source code and credentials delivered.",
    url: "https://www.malera.studio/starterdetails",
  },
};

export default function StarterDetailsPage() {
  return (
    <main className="relative z-10 pt-28 sm:pt-36 pb-28 sm:pb-40">
      <Container className="max-w-[720px]">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-white/30 hover:text-white/60 transition-colors mb-12"
        >
          <span>&larr;</span> Back to main site
        </a>

        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#C9A84C] mb-4">
          Starter 299€
        </p>
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05] mb-6">
          Scope of work
        </h1>
        <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-16 max-w-[600px]">
          The Starter plan is for businesses that need a professional web presence built properly from the ground up. Fixed scope, fixed price, nothing hidden. Below is exactly what is covered and how the engagement works from start to finish.
        </p>

        {/* ── Page structure ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Page structure
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Starter plan covers up to five pages. The default structure we recommend is Home, About, Services, Portfolio or Gallery, and Contact. This covers the essentials: who you are, what you do, proof that you can do it, and a way for people to reach you.
            </p>
            <p>
              Before we write any code we sit down (virtually or in person) and map out exactly what goes on each page. We ask about your business, your customers, and what you want the site to achieve. If five pages structured differently makes more sense for your situation, we adjust the structure accordingly. For example, a landing page that drives signups rather than a traditional About page. The limit is five pages regardless of how they are arranged.
            </p>
            <p>
              Every page is built from scratch. We do not use page builders or pre-made templates. The code is written specifically for your content and your requirements.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Responsive design ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Responsive on every device
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We build mobile-first, which means the phone experience is treated as the primary one and the desktop layout builds from there. Text, images, buttons, navigation, and forms are all tested on real phones, tablets, and desktop screens across multiple browsers.
            </p>
            <p>
              The site will work correctly at every screen width from 320 pixels up to wide desktop displays. Nothing breaks, nothing overflows, nothing becomes impossible to tap on a phone. This is not a separate mobile version. It is the same site that adapts to the device it is viewed on.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── SEO ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Search engine foundation
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We set up the technical SEO fundamentals that get your site indexed and ranking. This includes proper page titles, meta descriptions, semantic heading structure, image alt text, and an XML sitemap. We submit your site to Google Search Console so Google knows it exists and can crawl it properly.
            </p>
            <p>
              Page speed is a ranking factor, so we make sure the site loads fast. We optimize images, minimize JavaScript and CSS, and configure caching headers. The goal is a Lighthouse performance score above 90 on both mobile and desktop.
            </p>
            <p>
              This is the foundation. It puts your site on the map and gives it the technical structure to rank for relevant searches. If you need ongoing SEO work like keyword research, content strategy, or link building, that is a separate service we can discuss.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Revisions ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Revision process
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Starter plan includes one revision round. We build the full site based on the scope we agreed on. You then review everything and send us a single consolidated list of changes. We address all of them in one pass.
            </p>
            <p>
              A revision round covers adjustments within the original scope, such as moving sections, changing colors, rewriting text, swapping images. It does not cover new pages, new features, or changes in direction that go beyond what was originally scoped. If you want additional work beyond the revision round, we quote it separately before continuing.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Deliverables ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            What you receive at the end
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              When the project is complete you receive the full source code, credentials to your hosting account and domain registrar, and a handover document that explains how everything is set up and how to make common updates yourself.
            </p>
            <p>
              You own everything outright. The code, the design, the domain, and the hosting are all in your name, under your accounts. There is no vendor lock-in and no ongoing license fee for the site itself. If you ever want to take it to another developer, everything they need is yours.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Post-launch ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            After launch
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We remain reachable by email for 30 days after the site goes live. If something is broken or not working as specified, we fix it at no additional cost. If you want changes or additions beyond the original scope, we handle those under a separate agreement.
            </p>
            <p>
              Many clients choose to set up a maintenance arrangement after the 30-day window closes. Simple updates, content changes, and security patches can be structured on a monthly retainer or per-request basis.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Timeline ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Typical timeline
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              A Starter project typically takes two to three weeks from kickoff to launch. Week one is design and structure, when we present the layout and get your feedback. Week two is development, when we build the pages. Week three is your revision round followed by final polish and deployment.
            </p>
            <p>
              The timeline depends on how quickly you provide content and feedback. If you have your text and images ready at the start, things move faster. If we are waiting on content from your side, the timeline extends accordingly.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Who this is for ── */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Who this plan fits
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Starter plan is for businesses at the beginning. You might be launching your first professional site. You might have an outdated site that just needs to be replaced with something clean and modern. You know what you need and you want it built properly without unnecessary complexity or cost.
            </p>
            <p>
              If you need e-commerce, user accounts, a content management system, or anything beyond a well-built static site, the Starter plan is not the right fit. The Pro or Business plans cover those requirements.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10" />
        <p className="text-white/45 text-sm mb-5">Ready to start?</p>
        <a
          href="/#contact"
          className="inline-block bg-[#C9A84C] text-black text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-[#D4B35A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-500"
        >
          Tell me more
        </a>
      </Container>
    </main>
  );
}

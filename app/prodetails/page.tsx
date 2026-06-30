import type { Metadata } from "next";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "Pro Plan - Scope of Work | Malera Studio",
  description:
    "Full scope breakdown for the Pro plan. Up to fifteen pages, CMS integration, advanced SEO with keyword research, animations, analytics setup, two revision rounds, and post-launch availability.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.malera.studio/prodetails" },
  openGraph: {
    title: "Pro Plan - Scope of Work | Malera Studio",
    description:
      "Full scope breakdown for the Pro plan. Up to fifteen pages, CMS integration, advanced SEO with keyword research, animations, analytics setup, two revision rounds, and post-launch availability.",
    url: "https://www.malera.studio/prodetails",
  },
};

export default function ProDetailsPage() {
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
          Pro €499
        </p>
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05] mb-6">
          Scope of work
        </h1>
        <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-16 max-w-[600px]">
          The Pro plan is for businesses that have outgrown a simple site and need something that works harder. A site with room to grow, a CMS you can manage yourself, and the SEO and analytics infrastructure to make informed decisions. Below is the full scope.
        </p>

        {/* ── Page structure and architecture ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Page structure and architecture
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Pro plan covers up to fifteen pages. At this scale the site needs a proper information architecture that defines how pages relate to each other, how users navigate between them, and how the structure supports both user experience and search engine crawling.
            </p>
            <p>
              We plan the full architecture with you before development starts. This includes the primary navigation structure, any secondary or footer navigation, and how content is grouped. Common page types at this scale include product or service detail pages, team or about pages, case studies or portfolio entries, a blog or resource section, and standard pages like contact and legal.
            </p>
            <p>
              The pages are built from scratch for your specific content and requirements. We do not use page builders. Every page has its own purpose and we design each one accordingly. Some might be content-heavy with structured layouts, while others might be simpler landing-style pages for specific campaigns or audiences.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── CMS ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Content management system
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We build the site with a CMS so you can update content yourself without touching code. The choice of CMS depends on your needs. For most Pro projects we use a headless CMS, where content is managed in a clean admin interface and delivered to the site via API. This keeps the site fast and gives you full control over text, images, and page structure.
            </p>
            <p>
              At handover we walk you through the CMS. How to create and edit pages, how to update images, how to manage the navigation, and how to publish changes. You leave the walkthrough with the ability to manage the site on your own. We also provide written documentation covering the same ground so you have a reference.
            </p>
            <p>
              The CMS integration is set up so that non-technical team members can use it comfortably. You do not need to understand code to update a headline or swap an image.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Advanced SEO ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Advanced search engine optimization
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Pro plan includes SEO that goes deeper than the technical fundamentals. We research which search terms your potential customers actually use and structure your pages around those terms. This means the content hierarchy, the headings, the internal linking, and the metadata all align with what people are searching for.
            </p>
            <p>
              We implement schema markup, structured data that helps search engines understand what your content represents. Whether it is a service, an organization, a product, an article, or an FAQ section, schema markup gives search engines the context they need to display rich results.
            </p>
            <p>
              We connect Google Analytics, Google Search Console, and set up conversion tracking if relevant. By the time the site launches, data is flowing and you can see where visitors come from, which pages they spend time on, and what actions they take. This is not guesswork. It is a measurement infrastructure you can use to improve the site over time.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Motion and interaction ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Motion and interaction design
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We add motion where it serves the experience. Scroll-triggered reveals that bring content into view as the user moves down the page. Smooth page transitions that make navigation feel considered rather than abrupt. Hover states on interactive elements that give clear feedback. Subtle animations that draw attention to important calls to action.
            </p>
            <p>
              The principle is restraint. Animation should feel purposeful, not decorative. Every motion decision is tied to a user need, whether that means guiding attention, providing feedback, or making spatial relationships clear. Nothing moves just because it can.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Analytics ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Analytics and measurement
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We set up analytics properly from day one. Standard page view tracking across all pages. Event tracking for the actions that matter to your business, such as form submissions, button clicks, outbound link clicks, and scroll depth on key pages. We configure the tracking so the data is clean and actionable from the start.
            </p>
            <p>
              Beyond the basics, we set up custom events aligned with your specific business goals. If your site is meant to generate leads, we track how visitors move from landing on the site to submitting a contact form. If it is meant to drive signups, we track the full funnel. The goal is to give you actual data you can use to improve conversion, not just vanity metrics.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Revision process ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Revision process
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Pro plan includes two revision rounds. After the first full build is complete, you review everything and send us a consolidated list of feedback. We address it all and return the revised site. You then review again and send a second round of feedback. We incorporate that and finalize.
            </p>
            <p>
              Two rounds gives proper space to refine the work without dragging the project out. The first round typically covers structural and layout adjustments. The second round is for finer details like typography tweaks, spacing adjustments, and copy revisions. Change requests beyond the original scope are discussed and quoted separately.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── After launch ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            After launch
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We remain available after launch for questions and small adjustments. If something is broken or not working as specified, we fix it. We monitor the site for the first weeks after launch to catch any issues early.
            </p>
            <p>
              For ongoing work such as content updates, new pages, feature additions, and performance monitoring, we can structure a maintenance arrangement. Many Pro clients continue working with us on a retainer basis after the initial build.
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
              A Pro project typically takes four to six weeks. Week one is discovery and architecture, when we map out the full site structure and CMS content model. Weeks two and three are design and development. Week four is your first revision round. Week five is the second revision and final polish. Week six is deployment, testing, and handover.
            </p>
            <p>
              The timeline depends on content readiness and feedback speed. If you have your written content and images prepared in advance, development moves faster. Delays in providing content or feedback extend the timeline.
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
              The Pro plan is for businesses that have outgrown a simple brochure site. You need a site that works as an asset, something that brings in customers, communicates what you do clearly, and can be updated as your business evolves. You want to own your content and manage it yourself without depending on a developer for routine changes.
            </p>
            <p>
              This plan fits companies that are serious about their online presence and want the infrastructure to measure and improve it over time. If you need e-commerce, user accounts, or custom web application functionality, the Business plan is the right fit.
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

import type { Metadata } from "next";
import Navbar from "@/src/features/layout/components/Navbar";
import Footer from "@/src/features/layout/components/Footer";

export const metadata: Metadata = {
  title: "What Pro Includes | Malera Studio",
  description:
    "A detailed breakdown of the Pro plan — what up to 15 pages means, how the CMS works, advanced SEO, animations, analytics, revisions, and ongoing support.",
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
      "A detailed breakdown of the Pro plan — what up to 15 pages means, how the CMS works, advanced SEO, animations, analytics, revisions, and ongoing support.",
    url: "https://www.malera.studio/prodetails",
  },
};

const sections = [
  {
    id: "pages",
    label: "What up to 15 pages means and how we plan them",
    body: (
      <>
        <p>
          Fifteen pages is not just five pages scaled up. It is a site with
          structure — a homepage, about page, service pages, case studies, a
          blog, a contact page, and room for growth. We plan the information
          architecture so the site can expand without breaking the navigation or
          confusing visitors.
        </p>
        <p>
          We think about how someone moves through the site: what they see first,
          what questions come next, and where they end up. The page count is not
          a limit to hit — it is a framework for building something that makes
          sense and leaves room for more.
        </p>
      </>
    ),
  },
  {
    id: "cms",
    label: "How the CMS works and what you can edit yourself",
    body: (
      <>
        <p>
          We set up a content management system so you can update text, swap
          images, add blog posts, and manage your content without calling us.
          The CMS is configured specifically for your site — not a generic
          WordPress install with fifty plugins you do not need.
        </p>
        <p>
          You can edit pages, write new blog posts, update service descriptions,
          change pricing if needed, and manage your portfolio or case study
          entries. The CMS is designed so you cannot accidentally break the
          design. Layout, typography, and structure stay intact no matter what
          content you put in.
        </p>
      </>
    ),
  },
  {
    id: "seo",
    label: "What advanced SEO covers beyond the basics",
    body: (
      <>
        <p>
          Beyond the foundational SEO included in Starter, Pro-level SEO goes
          deeper. We do keyword research for your industry, optimize page
          content around what people are actually searching for, set up
          structured data so Google displays rich results, and build internal
          linking structures that help search engines understand your site.
        </p>
        <p>
          We also configure canonical URLs, handle redirects properly, set up
          proper XML sitemaps with priority and change frequency, and make sure
          your site loads fast enough to pass Core Web Vitals. This is SEO that
          compounds over time — the kind that builds authority rather than
          chasing algorithm tricks.
        </p>
      </>
    ),
  },
  {
    id: "animations",
    label: "What animations and interactions we implement",
    body: (
      <>
        <p>
          Animations on a website should feel considered, not distracting. We
          implement scroll-triggered reveals, hover states that give feedback,
          page transitions that feel smooth, and subtle motion that guides
          attention without screaming for it.
        </p>
        <p>
          Every animation is built for performance — no jank, no dropped frames,
          no 500-millisecond delays that make the site feel slow. We use modern
          CSS animations and lightweight JavaScript where it makes sense. The
          goal is a site that feels alive without ever feeling like it is trying
          too hard.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    label: "What analytics setup includes and what you can track",
    body: (
      <>
        <p>
          We set up analytics from day one so you can see what is happening on
          your site: how many people visit, where they come from, which pages
          they spend time on, and where they drop off. We configure event
          tracking for key actions — form submissions, button clicks, content
          downloads — so you know what is working.
        </p>
        <p>
          You get a dashboard you can actually read, not a wall of numbers that
          require a data science degree. We walk you through what matters and
          what you can ignore. Analytics is not just about vanity metrics — it
          is about understanding whether your site is doing its job.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    label: "What two revision rounds cover across the project",
    body: (
      <>
        <p>
          Pro includes two rounds of revisions. The first round covers the
          initial build — layout, content, design direction, and structure. We
          take your feedback, apply it thoughtfully, and deliver a polished
          second version. The second round is for fine-tuning: spacing tweaks,
          color adjustments, copy edits, and the small things that separate good
          from great.
        </p>
        <p>
          Two rounds means there is room to get it right without the project
          dragging on indefinitely. It is enough time for real collaboration
          without scope creep. New pages, new features, or major structural
          changes fall outside the revision rounds and are handled as separate
          scope discussions.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    label: "What ongoing availability looks like after launch",
    body: (
      <>
        <p>
          After launch, we do not disappear. Pro includes a post-launch window
          where we are reachable for questions, small fixes, and quick
          adjustments. If something breaks, we fix it. If you need guidance on
          using the CMS, we walk you through it.
        </p>
        <p>
          For ongoing work — new pages, new features, content updates beyond
          small changes — we quote it as new scope. But the line is always open.
          We want the site to succeed, and we stand behind the work we delivered.
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
          Pro is for businesses that need more than a brochure site. A growing
          company with services to explain and content to publish. A startup
          that needs a real web presence with room to expand. A professional
          practice that wants to look as polished online as they do in person.
        </p>
        <p>
          If you need a CMS, want to publish content regularly, care about SEO,
          and value a site that feels considered at every touchpoint — Pro is
          the right tier. It is the sweet spot for most serious small and
          mid-size businesses.
        </p>
      </>
    ),
  },
];

export default function ProDetailsPage() {
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
              Think Pro is the right fit? Let us talk about your project and see
              if we are a match.
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

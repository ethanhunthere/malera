import type { Metadata } from "next";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "What Business Includes | Malera Studio",
  description:
    "A detailed breakdown of the Business plan — web apps, e-commerce, full-stack development, AI integration, dashboards, payments, revisions, and documentation.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.malera.studio/businessdetails",
  },
  openGraph: {
    title: "What Business Includes | Malera Studio",
    description:
      "A detailed breakdown of the Business plan — web apps, e-commerce, full-stack development, AI integration, dashboards, payments, revisions, and documentation.",
    url: "https://www.malera.studio/businessdetails",
  },
};

const sections = [
  {
    id: "webapp",
    label: "Web app or e-commerce",
    body: (
      <>
        <p>
          This is for when a standard website is the wrong tool. If you are
          selling products, managing bookings, running a platform, or building
          something users log into — this is the plan. We scope the product
          properly before any work starts.
        </p>
      </>
    ),
  },
  {
    id: "fullstack",
    label: "Front end and back end",
    body: (
      <>
        <p>
          We handle the full stack. The interface your users see and the
          systems running behind it. Databases, authentication, APIs, admin
          panels — all of it.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    label: "AI where it genuinely helps",
    body: (
      <>
        <p>
          We look at your product and figure out where AI actually saves time
          or improves the experience. We integrate it. We test it. We make sure
          it works before it ships. Features for the sake of features is
          something we avoid.
        </p>
      </>
    ),
  },
  {
    id: "dashboards",
    label: "Dashboards and internal tools",
    body: (
      <>
        <p>
          If your team needs to manage orders, users, content, reports, or
          anything else — we build the internal tools that make that possible.
          Clean interfaces that your team can actually use.
        </p>
      </>
    ),
  },
  {
    id: "integrations",
    label: "Integrations",
    body: (
      <>
        <p>
          Payment systems, shipping APIs, CRM connections, email platforms,
          third party tools — we connect what your product needs. We document
          every integration so your team understands what is connected and why.
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
          Three rounds on a build this size gives proper space. After each
          round we incorporate feedback before moving forward. Scope changes
          beyond what was agreed are discussed and quoted separately before we
          continue.
        </p>
      </>
    ),
  },
  {
    id: "support",
    label: "After launch",
    body: (
      <>
        <p>
          We stay involved after the product goes live. If something needs
          fixing we fix it. We monitor for issues in the first weeks after
          launch.
        </p>
      </>
    ),
  },
  {
    id: "docs",
    label: "Documentation",
    body: (
      <>
        <p>
          When we hand over we provide full documentation. What was built, how
          it works, how to maintain it, how to extend it. Your team can take it
          from there.
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
          Founders building a product, a platform, or a tool. Businesses that
          need something custom built for how they actually operate. Companies
          replacing legacy systems with something modern.
        </p>
      </>
    ),
  },
];

export default function BusinessDetailsPage() {
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
            Business Plan
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] leading-[1] mb-5">
            What Business includes
          </h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-[560px] mb-16">
            You are building something real. A detailed breakdown of the
            Business plan — web apps, full-stack development, AI integration,
            dashboards, payments, and full documentation.
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
              Ready to talk scope?
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

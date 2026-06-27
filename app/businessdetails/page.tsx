import type { Metadata } from "next";
import Navbar from "@/src/features/layout/components/Navbar";
import Footer from "@/src/features/layout/components/Footer";

export const metadata: Metadata = {
  title: "What Business Includes | Malera Studio",
  description:
    "A detailed breakdown of the Business plan — web apps, e-commerce, front end and back end work, AI integration, dashboards, payment systems, revisions, and documentation.",
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
      "A detailed breakdown of the Business plan — web apps, e-commerce, front end and back end work, AI integration, dashboards, payment systems, revisions, and documentation.",
    url: "https://www.malera.studio/businessdetails",
  },
};

const sections = [
  {
    id: "webapp",
    label: "What web app or e-commerce means for your project",
    body: (
      <>
        <p>
          Business is the tier where the project becomes a product. A web app is
          not a website with a few interactive elements — it is a tool people
          use to do something: book appointments, manage inventory, track
          orders, analyze data, collaborate with a team. E-commerce means a
          store that handles real transactions, real inventory, and real
          customers.
        </p>
        <p>
          We treat these projects like software products, not marketing pages.
          That means user flows, state management, error handling, edge cases,
          and performance under load. The scope is bigger because the stakes are
          bigger — and we design and build accordingly.
        </p>
      </>
    ),
  },
  {
    id: "fullstack",
    label: "What front end and back end work we handle",
    body: (
      <>
        <p>
          On the Business plan, we handle both sides of the stack. The front end
          is what your users see and interact with — built for speed,
          accessibility, and a polished experience on every device. The back end
          is the engine underneath: databases, APIs, authentication, server
          logic, and everything that makes the front end actually work.
        </p>
        <p>
          We choose the right technology for the job, not the one that is
          trending this week. If your project needs a relational database, we
          use one. If it needs real-time updates, we build that. If it needs to
          handle thousands of concurrent users, we design for it from the start.
          You do not need to know the technical details — you just need to know
          it works.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    label: "How we decide where AI genuinely helps",
    body: (
      <>
        <p>
          AI is a tool, not a magic wand. On Business projects, we look for
          places where AI actually makes a difference: automating repetitive
          tasks, analyzing patterns in customer data, generating personalized
          content at scale, or powering a chatbot that can actually answer
          questions instead of just linking to a FAQ page.
        </p>
        <p>
          We do not shove AI into corners where it does not belong. If a feature
          is better served by deterministic logic, we use deterministic logic.
          If AI can genuinely save time, reduce friction, or create a better
          experience, we integrate it thoughtfully — with fallback behavior,
          error handling, and a clear understanding of what happens when the AI
          gets it wrong.
        </p>
      </>
    ),
  },
  {
    id: "dashboards",
    label: "What dashboards and internal tools we can build",
    body: (
      <>
        <p>
          Most businesses run on spreadsheets and hope. We build admin
          dashboards and internal tools that replace the spreadsheets — real
          interfaces for managing content, viewing analytics, processing orders,
          handling support tickets, or whatever your team needs to do their
          jobs.
        </p>
        <p>
          These are not afterthoughts bolted onto a website. They are
          purpose-built tools with role-based access, search and filtering,
          export capabilities, and workflows designed around how your team
          actually operates. We spend time understanding your internal processes
          before we build anything.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    label: "What payment systems and third-party integrations we connect",
    body: (
      <>
        <p>
          If your project takes payments, we integrate the right payment
          processor for your region, your currency, and your business model.
          Stripe, PayPal, local payment gateways — we handle the integration,
          the webhooks, the error states, and the edge cases.
        </p>
        <p>
          Beyond payments, we connect whatever third-party services your
          business relies on: CRMs, email platforms, shipping providers,
          accounting software, analytics tools, communication APIs. The goal is
          a system where data flows between services without someone manually
          copy-pasting between tabs.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    label: "What three revision rounds cover on a full build",
    body: (
      <>
        <p>
          Business projects are larger, so they get three rounds of revisions.
          Round one covers the core functionality and user flows — does the app
          do what it is supposed to do, and does it do it well. Round two covers
          design refinement, interaction polish, and edge case handling. Round
          three is for content, copy, and final details.
        </p>
        <p>
          Three rounds gives everyone enough runway to get it right without the
          project ballooning. Each round has a defined feedback window and a
          clear scope. Changes beyond the original scope are handled as separate
          work — quoted, scoped, and scheduled independently so the main project
          stays on track.
        </p>
      </>
    ),
  },
  {
    id: "support",
    label: "What post-launch support looks like in practice",
    body: (
      <>
        <p>
          After launch, we stay. Business projects include a defined post-launch
          support period where we monitor the application, fix bugs, handle
          unexpected issues, and make sure everything runs smoothly under real
          traffic.
        </p>
        <p>
          We do not hand over the keys and walk away. We are available during
          your first weeks live — when real users hit the app and real edge
          cases surface. Beyond the support period, we offer ongoing maintenance
          and development as a separate arrangement.
        </p>
      </>
    ),
  },
  {
    id: "docs",
    label: "What documentation we deliver when we are done",
    body: (
      <>
        <p>
          You get full documentation: architecture overview, database schema,
          API endpoints, deployment instructions, environment variables,
          third-party service configurations, and a guide for your team to
          understand how everything fits together.
        </p>
        <p>
          The documentation is written for humans, not robots. Your developers
          should be able to pick it up and understand the system without
          spelunking through code. If you ever need to hand the project to
          another team, they will not be starting from zero.
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
          Business is for companies building something real. A SaaS product
          going from idea to MVP. An e-commerce brand scaling beyond a basic
          Shopify store. A service business that needs a custom booking and
          management system. A company that has outgrown off-the-shelf solutions
          and needs something built around their actual workflow.
        </p>
        <p>
          If your project has real complexity — multiple user roles, payment
          processing, third-party integrations, custom logic — Business is where
          it belongs. We treat it with the seriousness it deserves.
        </p>
      </>
    ),
  },
];

export default function BusinessDetailsPage() {
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
              Building something real? Let us talk about scope, timeline, and
              whether we are the right team for it.
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

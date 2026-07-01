import type { Metadata } from "next";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "Enterprise - Engagement Model | Malera Studio",
  description:
    "How Enterprise engagements work at Malera Studio. Scoping conversation, mobile apps, SaaS platforms, AI and automation, ongoing development, and long-term collaboration with a dedicated team.",
  alternates: { canonical: "https://www.malera.studio/enterprisedetails" },
  openGraph: {
    title: "Enterprise - Engagement Model | Malera Studio",
    description:
      "How Enterprise engagements work at Malera Studio. Scoping conversation, mobile apps, SaaS platforms, AI and automation, ongoing development, and long-term collaboration with a dedicated team.",
    url: "https://www.malera.studio/enterprisedetails",
  },
};

export default function EnterpriseDetailsPage() {
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
          Enterprise
        </p>
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05] mb-6">
          Engagement model
        </h1>
        <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-16 max-w-[600px]">
          Enterprise is for projects that deserve their own conversation. A platform, a SaaS product, a mobile app, or something that does not fit into a fixed-price package. Here is how we work on Enterprise engagements and what to expect.
        </p>

        {/* ── Scoping conversation ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            The scoping conversation
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Enterprise starts with a conversation, not a form and not a proposal template. We sit down (virtually or in person), you walk us through what you are building, and we ask the questions that matter. What is the product? Who uses it? What problem does it solve? What does success look like six months after launch? What are the technical constraints, the timeline pressures, the things that keep you up at night?
            </p>
            <p>
              We come back with a scope document that describes the work in detail, covering what we will build, how it will work, what technologies we will use, how long it will take, and what it will cost. This is a fixed price for a defined scope. There is a number agreed before anything starts. No hourly billing, no open-ended engagement, no surprise invoices.
            </p>
            <p>
              The scoping process itself is part of the engagement. We treat it as real work, not a sales exercise. By the time the scope document is finalized, both sides have a clear, shared understanding of what we are building and why.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Mobile apps ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Mobile applications
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We build mobile apps for Android and iOS from a single codebase using React Native and Expo. One codebase, two platforms, full native performance. This approach eliminates the cost and complexity of maintaining separate iOS and Android codebases while delivering apps that feel native on each platform.
            </p>
            <p>
              We handle the full publishing process: App Store submission, Google Play submission, review compliance, and the inevitable back-and-forth with Apple's review team. If your app requires specific native functionality like camera access, Bluetooth, background processing, or push notifications, we build that natively where necessary and bridge it to the shared codebase.
            </p>
            <p>
              Mobile apps at the Enterprise level are typically part of a larger system: an API back end, a web admin panel, a user-facing website. We design the mobile experience in the context of that larger system so everything works together coherently.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Platforms and SaaS ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Platforms and SaaS products
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              If you are building something users subscribe to or return to regularly, we treat it accordingly. SaaS products have requirements that brochure sites do not, such as user management, subscription billing, role-based access control, multi-tenancy if you serve different organizations, usage analytics, and the infrastructure to handle growth.
            </p>
            <p>
              Architecture decisions at this level have long-term consequences. We make those decisions with the future in mind. The database schema should support features you will need in twelve months. The API design should accommodate integrations you have not thought of yet. The deployment infrastructure should scale without requiring a rewrite.
            </p>
            <p>
              We have built SaaS products from zero to launch and understand the full lifecycle, from the early prototype that validates the idea to the production system that serves paying customers to the mature platform that supports thousands of users.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── AI and automation ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            AI and automation
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              At the Enterprise level, AI work is typically deeper than a single feature. We build AI tools trained on your business data: customer support agents that understand your product, internal assistants that help your team find information, automated workflows that process data without human intervention, and analysis systems that surface patterns your team would miss.
            </p>
            <p>
              This is not about adding a chatbot widget to a website. It is about identifying the work in your business that is repetitive, error-prone, or too slow when done manually, and building systems that handle it reliably. We test these systems against real scenarios before they are deployed and we set up monitoring so you know when they are working correctly and when they are not.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Ongoing development ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Ongoing development
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Enterprise is rarely a one-time delivery. Products evolve. Users request features. The market shifts. Competitors launch something you need to respond to. If you want us involved after launch, iterating on the product, shipping new features, and handling maintenance and monitoring, we can structure that as an ongoing arrangement.
            </p>
            <p>
              The structure depends on what you need. Some clients work with us on a monthly retainer with a defined capacity, a set number of development hours per month prioritized against a shared backlog. Others engage us on a per-project basis for specific feature additions. We are flexible about the arrangement as long as the expectations are clear on both sides.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Long term collaboration ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Long-term collaboration
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Some of our best work has come from relationships that started with a single project and grew into something ongoing. We are a small team and we are selective about who we work with long term. The fit has to be right on both sides: technically, commercially, and personally.
            </p>
            <p>
              When the fit is right, we stay. We learn your business deeply. We understand your customers because we have been building for them. We can move faster because we do not need to be brought up to speed. Over time, we become less like a vendor and more like a part of your team, one that happens to be external but operates with the same level of investment in the outcome.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Who this is for ── */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Who this is for
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Enterprise is for founders and companies building something ambitious that deserves serious technical attention. You might be launching a SaaS product from scratch. You might have an existing platform that needs to be rebuilt properly. You might have a complex set of requirements that standard packages and templates cannot cover.
            </p>
            <p>
              This is for people who want a technical partner, not just a vendor. Someone who thinks about the product the way you do. Someone who asks hard questions early and builds things the right way from the start. Someone you can call when things get complicated and who will treat your product like they built it for themselves.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10" />
        <p className="text-white/45 text-sm mb-5">Start the conversation</p>
        <a
          href="/#contact"
          className="inline-block bg-[#C9A84C] text-black text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-[#D4B35A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-500"
        >
          Start the conversation
        </a>
      </Container>
    </main>
  );
}

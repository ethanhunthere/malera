import type { Metadata } from "next";
import Navbar from "@/src/features/layout/components/Navbar";
import Footer from "@/src/features/layout/components/Footer";

export const metadata: Metadata = {
  title: "How Enterprise Works | Malera Studio",
  description:
    "How the Enterprise engagement works — scoping, mobile apps, SaaS platforms, custom AI bots, ongoing development, and long-term collaboration with our team.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.malera.studio/enterprisedetails",
  },
  openGraph: {
    title: "How Enterprise Works | Malera Studio",
    description:
      "How the Enterprise engagement works — scoping, mobile apps, SaaS platforms, custom AI bots, ongoing development, and long-term collaboration with our team.",
    url: "https://www.malera.studio/enterprisedetails",
  },
};

const sections = [
  {
    id: "scoping",
    label: "How the scoping conversation works and what we figure out together",
    body: (
      <>
        <p>
          Enterprise engagements do not start with a price tag. They start with
          a conversation — a real one, not a form submission that triggers an
          automated email. We sit down, learn about your business, understand
          the problem you are trying to solve, and figure out together what the
          right shape looks like.
        </p>
        <p>
          We talk about scope, timeline, budget, team, technology, and
          expectations. We ask hard questions early so there are no surprises
          later. By the end of the conversation, both sides know whether this is
          a fit — and if it is, we put together a detailed scope document that
          defines exactly what we are building, how long it will take, and what
          it will cost.
        </p>
      </>
    ),
  },
  {
    id: "mobile",
    label: "What mobile apps we build and on which platforms",
    body: (
      <>
        <p>
          We build native and cross-platform mobile apps for Android and iOS. If
          your project needs deep platform integration — camera, GPS, push
          notifications, offline storage, biometric authentication — we go
          native where it matters and cross-platform where it makes sense.
        </p>
        <p>
          The decision is not religious. We use the right tool for the job. A
          consumer-facing app with complex animations might benefit from native
          development. An internal business tool used by twenty people might be
          better served by a cross-platform approach that ships faster and costs
          less. We work through the trade-offs with you.
        </p>
      </>
    ),
  },
  {
    id: "saas",
    label: "What a SaaS or platform build looks like working with us",
    body: (
      <>
        <p>
          Building a SaaS product or a platform is different from building a
          website. It is not a one-and-done project. It is the beginning of a
          product that will evolve over years — adding features, scaling users,
          handling edge cases you did not anticipate on day one.
        </p>
        <p>
          We structure the build so version one ships on time and on budget, but
          the architecture supports what comes next. Multi-tenant data models,
          subscription billing, user management, API design, third-party
          integrations — we design for the product you are building in year
          three, not just the MVP in month three.
        </p>
      </>
    ),
  },
  {
    id: "ai-bots",
    label: "How AI bots are trained on your business data",
    body: (
      <>
        <p>
          Custom AI bots are not generic chatbots with your logo slapped on. We
          train models on your actual business data — product catalogs, support
          documentation, internal knowledge bases, customer communication
          patterns — so the bot actually understands your business and can give
          answers that are correct, not just confident-sounding.
        </p>
        <p>
          We handle the data preparation, the model selection, the fine-tuning,
          the evaluation, and the deployment. More importantly, we build the
          guardrails: what the bot should not say, how it escalates to a human,
          and how you monitor its performance over time. AI that works for your
          business, not the other way around.
        </p>
      </>
    ),
  },
  {
    id: "ongoing",
    label: "What ongoing development means after first launch",
    body: (
      <>
        <p>
          On Enterprise engagements, the first launch is not the finish line. It
          is the starting point. We offer ongoing development — new features,
          performance improvements, platform updates, scaling work, and anything
          else the product needs as it grows.
        </p>
        <p>
          This can be structured as a retainer, a series of defined sprints, or
          ad-hoc work scoped and quoted as needed. The relationship is flexible
          because Enterprise projects are not one-off transactions. They are
          products that live and evolve, and we stay involved as long as it
          makes sense for both sides.
        </p>
      </>
    ),
  },
  {
    id: "collaboration",
    label: "How long-term collaboration works with our team",
    body: (
      <>
        <p>
          Long-term collaboration means we become an extension of your team, not
          an outsourced vendor you check in with once a month. We integrate into
          your communication channels, participate in planning, understand your
          business goals, and take ownership of the product like we built it for
          ourselves.
        </p>
        <p>
          You get direct access to the people building your product — not a
          project manager relaying messages through three layers. We keep things
          direct, honest, and fast. When something needs attention, it gets
          attention. When a decision needs to be made, we make it together.
        </p>
      </>
    ),
  },
  {
    id: "who",
    label: "Who this is best for",
    body: (
      <>
        <p>
          Enterprise is for founders, companies, and teams building something
          significant. A SaaS startup that needs a technical partner who can
          build the whole thing. An established business launching a new digital
          product. A company that has tried outsourcing before and wants a team
          that actually cares about the outcome.
        </p>
        <p>
          If the scope is large, the stakes are high, and you need more than a
          fixed five or fifteen-page website — this is the conversation to have.
          We do not take on every Enterprise inquiry. But the ones we do take
          on, we treat like they are our own.
        </p>
      </>
    ),
  },
];

export default function EnterpriseDetailsPage() {
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
            Enterprise
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] leading-[1] mb-5">
            How Enterprise works
          </h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-[560px] mb-16">
            A platform, a SaaS, or a mobile app that deserves its own
            conversation. Here is how we work on Enterprise engagements — from
            scoping to long-term collaboration.
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
              Ready to start the conversation? Reach out and we will set up a
              call to figure out if we are the right team for what you are
              building.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#C9A84C] text-black text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-[#D4B35A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-500"
            >
              Let&apos;s figure it out
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

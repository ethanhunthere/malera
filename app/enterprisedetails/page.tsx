import type { Metadata } from "next";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "How Enterprise Works | Malera Studio",
  description:
    "How the Enterprise engagement works — scoping, mobile apps, SaaS platforms, AI bots, ongoing development, and long-term collaboration.",
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
      "How the Enterprise engagement works — scoping, mobile apps, SaaS platforms, AI bots, ongoing development, and long-term collaboration.",
    url: "https://www.malera.studio/enterprisedetails",
  },
};

const sections = [
  {
    id: "scoping",
    label: "The scoping conversation",
    body: (
      <>
        <p>
          Enterprise starts with a conversation. We sit down, you walk us
          through what you are building, we ask the questions that matter, and
          we come back with a scope document and a number that reflects the
          actual work. There is a fixed price agreed before anything starts.
        </p>
      </>
    ),
  },
  {
    id: "mobile",
    label: "Mobile apps",
    body: (
      <>
        <p>
          We build for Android and iOS from a single codebase using React
          Native and Expo. One build, two platforms, full native performance.
          We handle the App Store and Google Play submissions.
        </p>
      </>
    ),
  },
  {
    id: "saas",
    label: "Platforms and SaaS",
    body: (
      <>
        <p>
          If you are building something users subscribe to or return to
          regularly, we treat it accordingly. Architecture decisions,
          scalability, user management, billing — all considered from the
          start.
        </p>
      </>
    ),
  },
  {
    id: "ai-bots",
    label: "AI bots and automation",
    body: (
      <>
        <p>
          We build AI tools trained on your business data. Customer support
          bots that know your product. Internal tools that automate repetitive
          work. Workflows that run without anyone having to think about them.
        </p>
      </>
    ),
  },
  {
    id: "ongoing",
    label: "Ongoing development",
    body: (
      <>
        <p>
          Enterprise is rarely a one-time delivery. If you want us involved
          after launch — iterating, shipping new features, handling maintenance
          — we can structure that as an ongoing arrangement.
        </p>
      </>
    ),
  },
  {
    id: "collaboration",
    label: "Long term collaboration",
    body: (
      <>
        <p>
          Some of our best work has come from relationships that started with a
          single project and grew into something ongoing. We are a small team
          and we are selective about who we work with long term. If the fit is
          right, we stay.
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
          Founders building something ambitious that deserves serious technical
          attention. Companies with complex requirements that standard packages
          cannot cover. Anyone who wants a technical partner, not just a
          vendor.
        </p>
      </>
    ),
  },
];

export default function EnterpriseDetailsPage() {
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
              Start the conversation
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#C9A84C] text-black text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-[#D4B35A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-500"
            >
              Start the conversation
            </a>
          </div>
        </Container>
    </main>
  );
}

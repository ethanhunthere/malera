import type { Metadata } from "next";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service | Malera Studio",
  description:
    "Terms of Service for Malera Studio. Engagement, payment, IP, and delivery terms.",
  alternates: {
    canonical: "https://www.malera.studio/terms",
  },
  openGraph: {
    title: "Terms of Service | Malera Studio",
    description:
      "Terms of Service for Malera Studio. Engagement, payment, IP, and delivery terms.",
    url: "https://www.malera.studio/terms",
  },
};

const sections = [
  {
    id: "overview",
    label: "Overview",
    body: (
      <p>
        These Terms of Service govern the relationship between Malera Studio and
        its clients. By engaging our services, you agree to these terms. Every
        project is unique, and specific details are always confirmed in writing
        before work begins.
      </p>
    ),
  },
  {
    id: "services",
    label: "Services",
    body: (
      <p>
        Malera Studio provides web development, mobile apps, AI automation,
        video production, and brand identity services. The exact scope,
        deliverables, and timeline for each project
        are defined in a written proposal, statement of work, invoice, or
        confirmed agreement.
      </p>
    ),
  },
  {
    id: "scope",
    label: "Proposals & Scope",
    body: (
      <>
        <p>
          Every project begins with a written proposal, invoice, statement of
          work, or confirmed agreement. Work starts only after scope, pricing,
          timeline, and payment terms are approved by both parties.
        </p>
        <p>
          The approved scope defines what is included. Anything beyond it is
          outside scope and handled separately. This keeps expectations aligned
          and the project running smoothly.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    label: "Client Responsibilities",
    body: (
      <p>
        Clients are responsible for providing content, assets, feedback, access,
        approvals, and decisions within agreed timeframes. Delays caused by late
        feedback, missing assets, unavailable access, third-party platform
        dependencies, client-side issues, or platform outages may affect
        delivery timelines.
      </p>
    ),
  },
  {
    id: "payments",
    label: "Payments & Billing",
    body: (
      <>
        <p>
          Payment terms are defined per project and confirmed in writing.
          Deposits, milestone payments, retainers, or upfront payments may apply
          depending on the nature and scale of the work.
        </p>
        <p>
          Invoices are due within the timeframe specified. Late payments may
          pause work until resolved. For ongoing engagements, recurring invoices
          are issued on the agreed schedule.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    label: "Revisions & Scope Changes",
    body: (
      <p>
        Revision rounds are limited to what is defined in the approved scope.
        New features, major direction changes, additional pages, extra
        deliverables, or work outside the approved scope may require additional
        cost and adjusted timelines. We communicate scope changes transparently
        before proceeding.
      </p>
    ),
  },
  {
    id: "timelines",
    label: "Timelines & Delivery",
    body: (
      <p>
        Timelines are estimates based on the scope and information available at
        the start. Delivery dates may shift due to scope changes, client delays,
        third-party dependencies, or events outside our control. We communicate
        timeline changes proactively and work to keep projects on track.
      </p>
    ),
  },
  {
    id: "ip",
    label: "Intellectual Property",
    body: (
      <>
        <p>
          Final deliverables transfer to the client upon full payment, unless
          otherwise agreed in writing. Malera Studio may retain and reuse
          reusable methods, code patterns, frameworks, workflows, internal
          tools, and non-client-specific know-how developed during the project.
        </p>
        <p>
          Pre-existing materials, tools, and IP owned by either party remain the
          property of that party.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    label: "Confidentiality",
    body: (
      <p>
        Client information, project materials, business plans, proprietary data,
        and internal communications are treated as confidential. We do not share
        client information with third parties without consent. Formal NDAs are
        available on request and can be signed before discussions begin.
      </p>
    ),
  },
  {
    id: "third-party",
    label: "Third-Party Tools & Platforms",
    body: (
      <p>
        Projects may involve third-party platforms, APIs, hosting services, or
        external tools (Cloudflare, Vercel, AWS, Google, OpenAI, etc.). Malera
        Studio is not responsible for outages, changes, pricing adjustments, or
        limitations introduced by third-party providers. We recommend clients
        maintain their own accounts for critical platform services.
      </p>
    ),
  },
  {
    id: "portfolio",
    label: "Portfolio Use",
    body: (
      <p>
        Malera Studio may showcase completed work in its portfolio, on its
        website, and in promotional materials unless confidentiality is agreed
        in writing before project completion. Any display will be respectful and
        aligned with the quality of the work delivered.
      </p>
    ),
  },
  {
    id: "liability",
    label: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, Malera Studio is not liable for
        indirect, incidental, or consequential losses, including lost revenue,
        business interruption, reputational harm, third-party platform issues,
        service outages, or problems outside its direct control. Our total
        liability for any claim is limited to the fees paid for the specific
        project giving rise to the claim.
      </p>
    ),
  },
  {
    id: "termination",
    label: "Termination",
    body: (
      <p>
        Either party may terminate an engagement with written notice. Upon
        termination, the client is invoiced for all work completed up to the
        termination date. Completed work is transferred to the client within a
        reasonable timeframe, subject to payment of outstanding invoices.
      </p>
    ),
  },
  {
    id: "governing-law",
    label: "Governing Law",
    body: (
      <p>
        These terms are governed by the laws of Kosovo. Any dispute will first
        be addressed through direct, good-faith discussion. If resolution cannot
        be reached, the matter will be handled in the appropriate courts of
        Kosovo.
      </p>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    body: (
      <p>
        Questions about these terms? Contact us at{" "}
        <a href="mailto:hello@malera.studio">hello@malera.studio</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <Container className="max-w-[680px]">
          {/* Header */}
          <p className="font-mono text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-[0.22em] text-gold mb-5">
            Legal
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] leading-[1] mb-5">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-[560px] mb-3">
            How we work, what we expect from each other, and the terms that
            govern every engagement.
          </p>
          <p className="text-white/25 text-xs sm:text-sm mb-16">
            Last updated &mdash; June 2026
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

          {/* Bottom divider */}
          <div className="mt-20 pt-0">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          </div>
        </Container>
      </main>
    </>
  );
}

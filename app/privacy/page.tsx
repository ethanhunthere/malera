import type { Metadata } from "next";
import Navbar from "@/src/features/layout/components/Navbar";
import Footer from "@/src/features/layout/components/Footer";
import Container from "@/src/features/layout/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Malera Studio",
  description:
    "How Malera Studio collects, uses, and protects your information.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.malera.studio/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Malera Studio",
    description:
      "How Malera Studio collects, uses, and protects your information.",
    url: "https://www.malera.studio/privacy",
  },
};

const sections = [
  {
    id: "overview",
    label: "Overview",
    body: (
      <>
        <p>
          Malera Studio respects your privacy. This policy explains what
          information we collect, how we use it, and the choices available to
          you. It applies to all interactions with our website, services, and
          team.
        </p>
        <p>
          By using our website or engaging our services, you acknowledge the
          practices described here.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    label: "Information We Collect",
    body: (
      <>
        <p>
          Malera Studio collects only information you voluntarily provide
          through forms, email, calls, meetings, project briefs, or direct
          communication. This may include:
        </p>
        <ul>
          <li>Name and email address</li>
          <li>Company name and role</li>
          <li>Project details, goals, and requirements</li>
          <li>Budget range and timeline</li>
          <li>Files, messages, assets, and business information you share</li>
        </ul>
        <p>
          We do not use tracking cookies, analytics scripts, or automated data
          collection on this website.
        </p>
      </>
    ),
  },
  {
    id: "usage",
    label: "How We Use Information",
    body: (
      <p>
        Information is used to respond to inquiries, qualify projects, prepare
        proposals, manage work, deliver services, provide support, and maintain
        professional communication. We do not sell personal information. We do
        not share private client information except when necessary to operate
        the website, deliver services, use approved service providers, comply
        with legal requirements, or with your permission.
      </p>
    ),
  },
  {
    id: "client-data",
    label: "Client & Project Data",
    body: (
      <p>
        Project details, business information, strategy, files, credentials,
        assets, and internal materials are treated with confidentiality. Access
        is limited to team members directly involved in your project. We do not
        maintain a separate customer database or CRM beyond what is necessary
        for ongoing work.
      </p>
    ),
  },
  {
    id: "communication",
    label: "Communication",
    body: (
      <p>
        Email correspondence is stored on our email provider&rsquo;s servers
        (Google Workspace). We retain communications for the duration of the
        professional relationship and a reasonable period afterward. You may
        request deletion of your correspondence at any time.
      </p>
    ),
  },
  {
    id: "third-party",
    label: "Third-Party Services",
    body: (
      <p>
        This website is hosted on Cloudflare Pages. Cloudflare may collect
        technical logs (IP addresses, request data) as part of its
        infrastructure operations. These logs are not accessible to us and are
        governed by Cloudflare&rsquo;s privacy policy. Additional service
        providers (hosting, email, payment processing) may be used during
        project delivery. We select providers with strong privacy practices and
        limit data shared to what is operationally necessary.
      </p>
    ),
  },
  {
    id: "security",
    label: "Data Security",
    body: (
      <p>
        We apply reasonable technical and organizational measures to protect
        your information against unauthorized access, loss, or misuse. No method
        of electronic storage or transmission is completely secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "retention",
    label: "Data Retention",
    body: (
      <p>
        We retain personal information only as long as necessary to fulfill the
        purposes described in this policy, or as required by applicable law.
        When information is no longer needed, we delete or anonymize it.
      </p>
    ),
  },
  {
    id: "rights",
    label: "Your Rights",
    body: (
      <>
        <p>You may request, at any time:</p>
        <ul>
          <li>Access to the personal information we hold about you</li>
          <li>Correction of inaccurate or incomplete data</li>
          <li>Deletion of your personal information</li>
          <li>Withdrawal of consent for us to contact you</li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:hello@malera.studio">hello@malera.studio</a>.
          We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    label: "Policy Updates",
    body: (
      <p>
        This policy may be updated periodically. Changes are posted here with an
        updated date. Material changes will be noted clearly. Continued use of
        our website or services after an update constitutes acceptance of the
        revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    body: (
      <p>
        Questions about this policy or your data? Contact us at{" "}
        <a href="mailto:hello@malera.studio">hello@malera.studio</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <Container className="max-w-[680px]">
          {/* Header */}
          <p className="font-mono text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-[0.22em] text-[#C9A84C] mb-5">
            Legal
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] leading-[1] mb-5">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-[560px] mb-3">
            How we collect, use, and protect your information. Clear, concise,
            and written for people who value transparency.
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
      <Footer />
    </>
  );
}

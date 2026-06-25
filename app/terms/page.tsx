import type { Metadata } from "next";
import Navbar from "@/src/features/layout/components/Navbar";
import Footer from "@/src/features/layout/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Malera Studio",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-[680px] mx-auto">
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
            LEGAL
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[0.95] mb-6">
            Terms of Service
          </h1>
          <p className="text-white/35 text-sm mb-10">
            Last updated: June 2026
          </p>

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none
            prose-headings:font-[family-name:var(--font-display)] prose-headings:font-bold prose-headings:text-white prose-headings:tracking-[-0.02em]
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-white/55 prose-p:leading-relaxed
            prose-strong:text-white/75
            prose-ul:text-white/50 prose-li:marker:text-white/20
            prose-a:text-[#C9A84C] prose-a:no-underline hover:prose-a:underline"
          >
            <h2>1. Services</h2>
            <p>
              Malera Studio provides web development, mobile applications, video production, AI automation, and brand identity services. All projects are defined through a written proposal or statement of work agreed upon by both parties before any work begins.
            </p>

            <h2>2. Engagement</h2>
            <p>
              Every engagement starts with a conversation. We discuss your goals, timeline, and budget. If we&apos;re a good fit, we&apos;ll send a proposal outlining scope, deliverables, timeline, and pricing. No work begins until the proposal is approved and, for larger projects, a deposit is received.
            </p>

            <h2>3. Payment Terms</h2>
            <p>
              Payment terms vary by project and are specified in the proposal. Typical terms:
            </p>
            <ul>
              <li><strong>Fixed-price projects:</strong> 50% upfront, 50% on delivery</li>
              <li><strong>Ongoing retainers:</strong> Invoiced monthly, net 15 days</li>
              <li><strong>Small projects:</strong> 100% upfront or upon delivery at our discretion</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Upon full payment, you own the final deliverables we create for your project. We retain the right to:
            </p>
            <ul>
              <li>Display the work in our portfolio and on our website</li>
              <li>Use your project name and logo in client lists</li>
              <li>Retain and reuse non-proprietary code, techniques, and tools developed during the project</li>
            </ul>

            <h2>5. Confidentiality</h2>
            <p>
              We treat all client information as confidential. We will not share your business plans, proprietary data, or project details with third parties without your consent. If you require a formal NDA, we&apos;re happy to sign one before our first conversation.
            </p>

            <h2>6. Revisions & Scope Changes</h2>
            <p>
              Each proposal includes a defined number of revision rounds. Changes beyond scope will be estimated separately. We communicate openly about scope, no surprises, no hidden fees.
            </p>

            <h2>7. Termination</h2>
            <p>
              Either party may terminate an engagement with written notice. Upon termination, you&apos;ll be invoiced for work completed up to that point, and we&apos;ll transfer all completed work to you within a reasonable timeframe.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              Malera Studio&apos;s liability for any claim arising from our services is limited to the total fees paid for the specific project in question. We do not accept liability for indirect or consequential losses, including lost revenue or business interruption.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of Kosovo. Any disputes will be resolved through good-faith negotiation first, we&apos;ve found that almost everything can be worked out with a conversation.
            </p>

            <h2>10. Contact</h2>
            <p>
              Questions about these terms? Reach us at{" "}
              <a href="mailto:hello@malera.studio">hello@malera.studio</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

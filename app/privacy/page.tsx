import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Malera Studio",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-[680px] mx-auto">
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
            LEGAL
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[0.95] mb-6">
            Privacy Policy
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
            <h2>1. What We Collect</h2>
            <p>
              Malera Studio collects only the information you voluntarily provide when you contact us — your name, email address, and any details you choose to share about your project. We do not use tracking cookies, analytics scripts, or any form of automated data collection on this website.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              Your information is used solely to respond to your inquiry and, if we agree to work together, to manage our professional relationship. We do not sell, rent, or share your personal data with third parties for marketing purposes. Ever.
            </p>

            <h2>3. Data Storage</h2>
            <p>
              Email correspondence is stored on our email provider&apos;s servers (Google Workspace). We do not maintain a separate customer database or CRM. If you&apos;d like us to delete your correspondence, just ask — we&apos;ll remove it promptly.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              This website is hosted on Cloudflare Pages. Cloudflare may collect basic technical logs (IP addresses, request data) as part of its infrastructure. These are not accessible to us and are governed by Cloudflare&apos;s own privacy policy.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Request a copy of any personal data we hold about you</li>
              <li>Ask us to correct or delete your data</li>
              <li>Withdraw consent for us to contact you at any time</li>
            </ul>
            <p>
              To exercise any of these rights, email us at <strong>hello@malera.studio</strong>.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. Any changes will be posted here with an updated date. If we make material changes, we&apos;ll note them clearly.
            </p>

            <h2>7. Contact</h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a href="mailto:hello@malera.studio">hello@malera.studio</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

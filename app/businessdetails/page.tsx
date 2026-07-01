import type { Metadata } from "next";
import Container from "@/src/features/layout/components/Container";
import BackLink from "@/src/features/layout/components/BackLink";

export const metadata: Metadata = {
  title: "Business Plan - Scope of Work | Malera Studio",
  description:
    "Full scope breakdown for the Business plan. Web applications, e-commerce, full-stack development, AI integration, dashboards, payment systems, three revision rounds, documentation, and post-launch support.",
  alternates: { canonical: "https://www.malera.studio/businessdetails" },
  openGraph: {
    title: "Business Plan - Scope of Work | Malera Studio",
    description:
      "Full scope breakdown for the Business plan. Web applications, e-commerce, full-stack development, AI integration, dashboards, payment systems, three revision rounds, documentation, and post-launch support.",
    url: "https://www.malera.studio/businessdetails",
  },
};

export default function BusinessDetailsPage() {
  return (
    <main className="relative z-10 pt-28 sm:pt-36 pb-28 sm:pb-40">
      <Container className="max-w-[720px]">
        <BackLink />

        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-gold mb-4">
          Business 1,199€
        </p>
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-[1.05] mb-6">
          Scope of work
        </h1>
        <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-16 max-w-[600px]">
          The Business plan is for founders and companies building something real: a product, a platform, or a tool that customers actually use. This is not a website. This is full-stack software development treated like a product engagement. Below is the full scope.
        </p>

        {/* ── Web app or e-commerce ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Web applications and e-commerce
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Business plan is for when a standard website is the wrong tool. If you are selling products online, managing bookings or reservations, running a platform that users log into, or building a tool that does something specific, this is the plan.
            </p>
            <p>
              We scope the product properly before any work starts. This means we define exactly what the product does, who uses it, what the core workflows are, and what the technical requirements look like. The scope document we produce becomes the reference point for the entire engagement. No ambiguity, no moving targets.
            </p>
            <p>
              For e-commerce specifically, we handle product catalogs, shopping carts, checkout flows, payment processing, order management, inventory tracking, and the customer account experience. We integrate with Stripe for payments and can connect to shipping providers, tax calculators, and email platforms as needed.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Full stack ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Front end and back end development
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We handle the full stack. The front end is what your users see and interact with: the interface, the interactions, the visual design. The back end is everything running behind it: the database that stores your data, the authentication system that controls who accesses what, the APIs that connect your front end to your back end, and the admin panels that let your team manage the product.
            </p>
            <p>
              Our stack choices depend on what the product needs. For most Business engagements we use Next.js or React on the front end with a Node.js, Python, or Go back end, PostgreSQL or MySQL for the database, and deployment on cloud infrastructure that scales. If your product has specific technical constraints we work within them.
            </p>
            <p>
              Every line of code is written for your product specifically. We are not stitching together plugins or retrofitting a template. The architecture is designed for what you are building, not adapted from something else.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── AI integration ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            AI integration where it genuinely helps
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We look at your product and figure out where AI actually saves time or improves the experience for your users. This might mean a recommendation engine that suggests relevant products, a natural language search that lets users find things by describing them, an automated classification system that sorts incoming data, or a summarization feature that condenses long content.
            </p>
            <p>
              We do not add AI for the sake of a bullet point. Every AI feature we integrate is tied to a real use case, something your users need or your team would otherwise do manually. Before we build anything AI-related we validate that the feature is feasible, the data supports it, and the user experience makes sense.
            </p>
            <p>
              We test thoroughly before anything ships. AI features that produce incorrect or inconsistent results damage trust. We set up evaluation criteria, test against real inputs, and iterate until the output is reliable.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Dashboards ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Admin dashboards and internal tools
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Your team needs to manage the product. We build the internal tools that make that possible: dashboards for viewing key metrics, admin panels for managing users and content, order management interfaces, reporting tools, and anything else your operations require.
            </p>
            <p>
              These interfaces are designed for the people who will actually use them. We spend time understanding your team's workflows before designing the tools. The goal is interfaces that your team can use efficiently, with clear information hierarchy and straightforward actions.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Integrations ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Third-party integrations
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Most products need to connect to other services. Payment processors like Stripe or PayPal. Shipping APIs for calculating rates and printing labels. CRM systems like HubSpot or Salesforce. Email platforms like SendGrid or Mailgun. Analytics services. Cloud storage. SMS providers. We connect what your product needs.
            </p>
            <p>
              Every integration is documented, covering what it connects to, how the connection works, what data flows in each direction, and what to do if something breaks. Your team should never have to reverse-engineer an integration to understand what it does.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Revision process ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Revision process
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Business plan includes three revision rounds. After each major milestone we present the work, you review it, and we incorporate your feedback before moving to the next phase. Three rounds on a build this size gives proper space for iteration without losing momentum.
            </p>
            <p>
              Scope changes beyond what was agreed in the original scope document are discussed and quoted separately before work continues. This is not to be inflexible. It is to keep the project grounded in a shared understanding of what we are building. If priorities shift mid-project, we adjust. But we do it transparently, with clear communication about what changes and why.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── After launch ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            After launch
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              We stay involved after the product goes live. We monitor for issues in the first weeks after launch and respond quickly if something needs fixing. The launch is not the end of our involvement. It is the point where real users start interacting with what we built, and that often surfaces things that need attention.
            </p>
            <p>
              Many Business engagements transition into an ongoing arrangement after launch, covering new features, performance improvements, scaling adjustments, and maintenance. We can structure this as a monthly retainer or on a per-project basis depending on what makes sense for your situation.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Documentation ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Documentation and handover
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              At handover we provide full technical documentation. The system architecture: what services are running, how they communicate, and where data lives. The database schema: what tables exist, how they relate, and what each field represents. The API documentation: every endpoint, what it expects, and what it returns. The deployment process: how to deploy updates, how to roll back, and where credentials are stored.
            </p>
            <p>
              We also document the integrations, covering what is connected, how the connection works, and what to do if something breaks. The goal is that your team, or another development team, can take over the product with a complete understanding of how it works.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Timeline ── */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Typical timeline
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              A Business engagement typically runs eight to twelve weeks, depending on complexity. Weeks one and two are scoping and architecture, when we define the product, design the data model, and plan the development phases. Weeks three through eight are development, broken into milestones with review points at each. Weeks nine and ten are the revision rounds. Weeks eleven and twelve are final polish, testing, documentation, and deployment.
            </p>
            <p>
              The actual timeline depends on the scope we agree on during the scoping phase. A focused e-commerce site might finish faster. A complex platform with AI features and multiple integrations will take the full timeline. We give you a realistic estimate during scoping, not an optimistic one.
            </p>
          </div>
        </section>

        <div className="h-px bg-white/[0.06] mb-14" />

        {/* ── Who this is for ── */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-xl tracking-[-0.02em] mb-4">
            Who this plan fits
          </h2>
          <div className="text-white/50 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              The Business plan is for founders building a product. You might be launching an e-commerce store that needs custom functionality beyond what Shopify offers. You might be building a SaaS product that users pay for. You might be replacing an internal tool with something modern. You might have a business that runs on a collection of spreadsheets and disconnected systems that need to become a proper platform.
            </p>
            <p>
              This plan is for people who are serious about what they are building. The product is your business, not a side project. You need it to work correctly, scale reliably, and be built on a foundation that can support years of growth. If you are still figuring out what to build, the Starter or Pro plans might be a better place to begin.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10" />
        <p className="text-white/45 text-sm mb-5">Ready to talk scope?</p>
        <a
          href="/#contact"
          className="inline-block bg-gold text-black text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-[#D4B35A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-500"
        >
          Tell me more
        </a>
      </Container>
    </main>
  );
}

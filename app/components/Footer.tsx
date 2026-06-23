import Image from "next/image";

const FOOTER_LINKS = ["Home", "Services", "Pricing", "Contact"];

export default function Footer() {
  return (
    <footer className="relative mt-8 sm:mt-16">
      {/* Sentinel — triggers services shards to shatter when footer comes into view */}
      <div data-shard-sentinel="services" className="w-full h-px pointer-events-none" />

      {/* ── Glass separator line ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="glass-divider" />
      </div>

      {/* ── Glass footer bar ── */}
      <div className="glass-subtle glass-specular relative overflow-hidden mx-2 sm:mx-4 my-3 sm:my-4 rounded-2xl">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 py-3 sm:py-5 px-4 sm:px-6">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/malera-transparent.png"
              alt="Malera Studio"
              width={80}
              height={20}
              className="h-3 sm:h-5 w-auto opacity-40 hover:opacity-75 transition-all duration-500"
            />
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1 text-[10px] sm:text-xs font-medium text-white/30">
            {FOOTER_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-white/55 transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-[10px] sm:text-xs text-white/15 font-mono">
            © {new Date().getFullYear()} Malera Studio
          </p>
        </div>
      </div>
    </footer>
  );
}

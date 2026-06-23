import Image from "next/image";

const FOOTER_LINKS = ["Home", "Services", "Portfolio", "Team", "Pricing", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image
            src="/malera.png"
            alt="Malera Studio"
            width={80}
            height={22}
            className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity"
            style={{ width: "auto", height: "auto" }}
          />
        </a>

        {/* Nav links */}
        <ul className="flex flex-wrap justify-center gap-6 text-xs font-medium text-white/30">
          {FOOTER_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-xs text-white/15 font-mono">
          © {new Date().getFullYear()} Malera Studio
        </p>
      </div>
    </footer>
  );
}

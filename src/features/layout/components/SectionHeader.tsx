import type { ReactNode, CSSProperties } from "react";

interface SectionHeaderProps {
  /** Uppercase mono label above the headline */
  label: string;
  /** CSS class overrides for the label <p> */
  labelClassName?: string;
  /** Headline content — pass a string or JSX (e.g. "LET'S TALK<br />BUSINESS") */
  headline: ReactNode;
  /** CSS class overrides for the headline <h2> */
  headlineClassName?: string;
  /** Inline style for the headline (fontSize clamp, textShadow, etc.) */
  headlineStyle?: CSSProperties;
  /** Subtitle paragraph below the headline */
  subtitle: string;
  /** CSS class overrides for the subtitle <p> */
  subtitleClassName?: string;
  /** CSS class overrides for the wrapper <div> */
  className?: string;
}

export default function SectionHeader({
  label,
  labelClassName = "",
  headline,
  headlineClassName = "",
  headlineStyle,
  subtitle,
  subtitleClassName = "",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p
        className={`font-mono text-[0.625rem] sm:text-xs 2xl:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-4 ${labelClassName}`}
      >
        {label}
      </p>

      <h2
        className={`font-[family-name:var(--font-display)] font-extrabold tracking-[-0.03em] mb-4 leading-[0.9] ${headlineClassName}`}
        style={headlineStyle}
      >
        {headline}
      </h2>

      <p
        className={`text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-xl leading-relaxed ${subtitleClassName}`}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default function GlassDivider() {
  return (
    <div className="relative w-full py-5 sm:py-7">
      {/* ── Glass core strand ── */}
      <div className="absolute inset-x-[20%] top-1/2 -translate-y-1/2 h-px
        bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.06)] to-transparent
        shadow-[0_0_0_0.5px_rgba(0,0,0,0.06)]
        backdrop-blur-[3px] backdrop-saturate-[120%] backdrop-brightness-[1.01]" />

      {/* ── Top glass reflection ── */}
      <div className="absolute inset-x-[24%] top-1/2 -translate-y-[1.8px] h-px
        bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* ── Bottom glass depth ── */}
      <div className="absolute inset-x-[24%] top-1/2 translate-y-[1.5px] h-px
        bg-gradient-to-r from-transparent via-black/[0.04] to-transparent" />
    </div>
  );
}

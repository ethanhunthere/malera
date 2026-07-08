export default function ComingSoon() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808] overflow-hidden p-0 sm:p-4">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(500px,70vw)] h-[min(500px,70vw)] rounded-full bg-gold opacity-[0.06] blur-[150px]" />
      </div>

      {/* Premium glass card — seamless on mobile, glass card on desktop */}
      <div className="relative z-10 w-full max-w-full sm:max-w-[460px] sm:rounded-[28px] rounded-none border-0 sm:border sm:border-white/[0.06] bg-[#080808] sm:bg-white/[0.02] backdrop-blur-none sm:backdrop-blur-[24px] sm:backdrop-saturate-[1.4] shadow-none sm:shadow-[0_0_0_1px_rgba(201,168,76,0.06),0_32px_80px_rgba(0,0,0,0.55),0_8px_24px_rgba(0,0,0,0.3)] px-8 sm:px-10 py-12 sm:py-14 flex flex-col items-center text-center gap-5 sm:gap-6 min-h-screen sm:min-h-0">
        {/* Logo */}
        <img
          src="/malera-transparent.webp"
          alt="Malera Studio"
          width={200}
          height={50}
          className="h-7 sm:h-9 w-auto opacity-75"
        />

        {/* Divider */}
        <div className="w-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* IS LOADING — muted grey, not full white */}
        <div className="space-y-2">
          <h1 className="font-[family-name:var(--font-body)] text-[clamp(2rem,8vw,3.5rem)] font-semibold text-white/65 tracking-[-0.02em] leading-[0.95]">
            IS LOADING.
          </h1>
          <p className="text-white/25 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
            We&rsquo;re putting the final touches on something great.
            <br />
            Stay tuned.
          </p>
        </div>

        {/* Bottom divider */}
        <div className="w-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}
        <div className="text-white/10 text-[0.5rem] sm:text-[0.625rem] font-mono tracking-[0.15em] leading-[1.8]">
          <p>MALERA STUDIO</p>
          <p>01 . 09 . 2026</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { ArrowRight, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { type FormEvent, useCallback, useRef, useState } from "react";

/*
╔══════════════════════════════════════════════════════════════╗
║   CONTACT FORM  ·  Inline AJAX → Gmail                      ║
║                                                              ║
║   Uses FormSubmit.co (free, no account, no redirect).        ║
║   Posts via fetch — the user never leaves the page.          ║
║   To change the recipient, edit FORM_ENDPOINT below.         ║
╚══════════════════════════════════════════════════════════════╝
*/

/* Replace with your own email: https://formsubmit.co/ajax/you@domain.com */
const FORM_ENDPOINT = "https://formsubmit.co/ajax/hello@malera.studio";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!res.ok) throw new Error("Server rejected the message");

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Try again or email us directly.",
      );
    }
  }, []);

  if (status === "sent") {
    return (
      <div className="relative glass-card-gold glass-card-gold-hover rounded-2xl p-6 sm:p-8 md:p-10 xl:p-12 2xl:p-14 min-[3000px]:p-20 min-[5000px]:p-28 overflow-hidden h-full flex flex-col items-center justify-center text-center !ring-1 !ring-[#C9A84C]/35 !shadow-[0_0_30px_rgba(201,168,76,0.08),0_0_60px_rgba(201,168,76,0.03)]">
        {/* Gold corner accent (top-left) */}
        <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 min-[3000px]:w-16 min-[3000px]:h-16 overflow-hidden opacity-50 transition-opacity duration-700">
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#C9A84C]/70 via-[#C9A84C]/35 to-transparent" />
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#C9A84C]/70 via-[#C9A84C]/35 to-transparent" />
        </div>
        {/* Gold corner accent (bottom-right) */}
        <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 min-[3000px]:w-16 min-[3000px]:h-16 overflow-hidden opacity-50 transition-opacity duration-700">
          <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[#C9A84C]/70 via-[#C9A84C]/35 to-transparent" />
          <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[#C9A84C]/70 via-[#C9A84C]/35 to-transparent" />
        </div>

        <CheckCircle2 className="text-[#C9A84C] w-12 h-12 sm:w-16 sm:h-16 2xl:w-20 2xl:h-20 min-[3000px]:w-28 min-[3000px]:h-28 min-[5000px]:w-36 min-[5000px]:h-36 mb-4 sm:mb-6 min-[3000px]:mb-10" strokeWidth={1.5} />

        <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg sm:text-2xl md:text-3xl 2xl:text-4xl min-[3000px]:text-5xl min-[5000px]:text-6xl mb-3">
          Message sent
        </h3>

        <p className="text-white/35 text-xs sm:text-sm lg:text-base 2xl:text-lg min-[3000px]:text-2xl min-[5000px]:text-3xl leading-relaxed max-w-[400px] min-[3000px]:max-w-[600px] min-[5000px]:max-w-[800px] mb-6 sm:mb-8 min-[3000px]:mb-12">
          We&apos;ve received your message and will get back to you, usually within a few hours.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 min-[3000px]:px-10 min-[3000px]:py-5 min-[5000px]:px-14 min-[5000px]:py-7 rounded-full bg-white text-black text-xs sm:text-sm 2xl:text-base min-[3000px]:text-xl min-[5000px]:text-2xl font-semibold
            hover:bg-[#C9A84C] hover:text-black hover:gap-3 hover:shadow-[0_4px_32px_rgba(201,168,76,0.3)]
            transition-all duration-500"
        >
          Send another
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[3000px]:w-6 min-[3000px]:h-6 min-[5000px]:w-8 min-[5000px]:h-8 group-hover:translate-x-0.5 transition-transform duration-500" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative glass-card-gold glass-card-gold-hover rounded-2xl p-6 sm:p-8 md:p-10 xl:p-12 2xl:p-14 min-[3000px]:p-20 min-[5000px]:p-28 overflow-hidden h-full flex flex-col !ring-1 !ring-[#C9A84C]/35 !shadow-[0_0_30px_rgba(201,168,76,0.08),0_0_60px_rgba(201,168,76,0.03)]">
      {/* Gold corner accent (top-left) */}
      <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 min-[3000px]:w-16 min-[3000px]:h-16 overflow-hidden opacity-50 transition-opacity duration-700">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#C9A84C]/70 via-[#C9A84C]/35 to-transparent" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#C9A84C]/70 via-[#C9A84C]/35 to-transparent" />
      </div>
      {/* Gold corner accent (bottom-right) */}
      <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 min-[3000px]:w-16 min-[3000px]:h-16 overflow-hidden opacity-50 transition-opacity duration-700">
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[#C9A84C]/70 via-[#C9A84C]/35 to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[#C9A84C]/70 via-[#C9A84C]/35 to-transparent" />
      </div>

      {/* ── Header ── */}
      <div className="flex items-center gap-3 sm:gap-4 min-[3000px]:gap-6 mb-5 sm:mb-8 min-[3000px]:mb-12">
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 min-[3000px]:w-20 min-[3000px]:h-20 min-[5000px]:w-24 min-[5000px]:h-24 rounded-2xl min-[3000px]:rounded-3xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/25 shadow-[0_0_10px_rgba(201,168,76,0.15)]">
          <Mail className="text-[#C9A84C] w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 min-[3000px]:w-10 min-[3000px]:h-10 min-[5000px]:w-12 min-[5000px]:h-12" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-base sm:text-xl md:text-2xl 2xl:text-3xl min-[3000px]:text-4xl min-[5000px]:text-5xl">
            Send us a message
          </h3>
          <p className="text-white/25 text-[0.625rem] sm:text-xs min-[3000px]:text-base min-[5000px]:text-lg mt-0.5">
            We&apos;ll get back to you quickly
          </p>
        </div>
      </div>

      {/* ── Form ── */}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 min-[3000px]:gap-6 flex-1" noValidate>
        {/* Honeypot for spam prevention */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Disable captcha */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Subject line */}
        <input type="hidden" name="_subject" value="New message from Malera Studio website" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 min-[3000px]:gap-6">
          <div>
            <label htmlFor="contact-name" className="block text-[0.625rem] sm:text-[0.6875rem] min-[3000px]:text-base min-[5000px]:text-lg font-medium text-white/50 mb-1.5 min-[3000px]:mb-3">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full bg-white/[0.12] ring-1 ring-white/[0.20] rounded-lg min-[3000px]:rounded-xl px-3.5 py-2.5 sm:py-3 min-[3000px]:px-6 min-[3000px]:py-5 min-[5000px]:px-8 min-[5000px]:py-6 text-white text-xs sm:text-sm min-[3000px]:text-lg min-[5000px]:text-xl
                placeholder:text-white/[0.22]
                focus:outline-none focus:ring-[#C9A84C]/40 focus:bg-white/[0.16] focus:ring-[1.5px]
                transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-[0.625rem] sm:text-[0.6875rem] min-[3000px]:text-base min-[5000px]:text-lg font-medium text-white/50 mb-1.5 min-[3000px]:mb-3">
              Your email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full bg-white/[0.12] ring-1 ring-white/[0.20] rounded-lg min-[3000px]:rounded-xl px-3.5 py-2.5 sm:py-3 min-[3000px]:px-6 min-[3000px]:py-5 min-[5000px]:px-8 min-[5000px]:py-6 text-white text-xs sm:text-sm min-[3000px]:text-lg min-[5000px]:text-xl
                placeholder:text-white/[0.22]
                focus:outline-none focus:ring-[#C9A84C]/40 focus:bg-white/[0.16] focus:ring-[1.5px]
                transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <label htmlFor="contact-message" className="block text-[0.625rem] sm:text-[0.6875rem] min-[3000px]:text-base min-[5000px]:text-lg font-medium text-white/50 mb-1.5 min-[3000px]:mb-3">
            Your message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about your project — what you need, your timeline, your budget if you have one..."
            className="w-full flex-1 min-h-[100px] sm:min-h-[120px] min-[3000px]:min-h-[180px] min-[5000px]:min-h-[220px] bg-white/[0.12] ring-1 ring-white/[0.20] rounded-lg min-[3000px]:rounded-xl px-3.5 py-2.5 sm:py-3 min-[3000px]:px-6 min-[3000px]:py-5 min-[5000px]:px-8 min-[5000px]:py-6 text-white text-xs sm:text-sm min-[3000px]:text-lg min-[5000px]:text-xl
              placeholder:text-white/[0.22] resize-none
              focus:outline-none focus:ring-[#C9A84C]/40 focus:bg-white/[0.16] focus:ring-[1.5px]
              transition-all duration-300"
          />
        </div>

        {/* ── Error ── */}
        {status === "error" && (
          <p className="text-red-400/70 text-[0.625rem] sm:text-xs min-[3000px]:text-base">{errorMsg}</p>
        )}

        {/* ── Submit ── */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 min-[3000px]:px-10 min-[3000px]:py-5 min-[5000px]:px-14 min-[5000px]:py-7 rounded-full bg-white text-black text-xs sm:text-sm 2xl:text-base min-[3000px]:text-xl min-[5000px]:text-2xl font-semibold self-start
            hover:bg-[#C9A84C] hover:text-black hover:gap-3 hover:shadow-[0_4px_32px_rgba(201,168,76,0.3)]
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black disabled:hover:shadow-none disabled:hover:gap-2
            transition-all duration-500"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[3000px]:w-6 min-[3000px]:h-6 min-[5000px]:w-8 min-[5000px]:h-8 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[3000px]:w-5 min-[3000px]:h-5 min-[5000px]:w-7 min-[5000px]:h-7" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

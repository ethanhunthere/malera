"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Lottie from "lottie-react";

const CloseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const LoadingDots = () => (
  <span className="inline-flex gap-1 items-center">
    <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-bounce [animation-delay:0ms]" />
    <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-bounce [animation-delay:150ms]" />
    <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-bounce [animation-delay:300ms]" />
  </span>
);

const SUGGESTED = [
  "How much does a website cost?",
  "What's included in the Pro plan?",
  "Do you build mobile apps?",
  "What's your tech stack?",
  "How long does a project take?",
  "Can I see your portfolio?",
  "Where are you based?",
  "How do I get started?",
];

type Message = {
  role: "user" | "assistant";
  content: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const LINK_CLASS =
  "text-gold underline decoration-gold/40 underline-offset-2 hover:decoration-gold transition-colors";

// Wraps recognized contact patterns (email, phone, WhatsApp, socials, bare
// domain mentions) in anchor tags. Runs only on already-escaped text, and
// only on assistant messages — the plan-detail buttons are handled
// separately below the bubble, not inline here.
function linkifyAssistant(escaped: string): string {
  let html = escaped;

  // Bare "malera.studio" mentions — skip ones already part of an email
  // (preceded by @) or a URL (preceded by / or . e.g. www.malera.studio)
  html = html.replace(
    /(?<![\w@./])malera\.studio(?!\.[a-z])/gi,
    (match) =>
      `<a href="https://malera.studio" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">${match}</a>`
  );

  // Email
  html = html.replace(
    /hello@malera\.studio/gi,
    (match) => `<a href="mailto:hello@malera.studio" class="${LINK_CLASS}">${match}</a>`
  );

  // Phone number — matches both "+383 46 814 700" and "+38346814700"
  html = html.replace(
    /\+383\s?46\s?814\s?700/g,
    () => `<a href="tel:+38346814700" class="${LINK_CLASS}">+383 46 814 700</a>`
  );

  // Social handles — link the actual URL / handle mentions
  // (platform names like "Instagram", "Facebook" are NOT linked)
  // Instagram
  html = html.replace(
    /(?<!hello)@malera\.studio\b(?!")/gi,
    (match) =>
      `<a href="https://instagram.com/malera.studio" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">${match}</a>`
  );

  return html;
}

function formatContent(text: string, role: Message["role"]): string {
  const escaped = escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  return role === "assistant" ? linkifyAssistant(escaped) : escaped;
}

const PLAN_LINKS: { label: string; url: string; pattern: RegExp }[] = [
  { label: "Starter", url: "https://malera.studio/starterdetails", pattern: /\bstarter\b/i },
  { label: "Pro", url: "https://malera.studio/prodetails", pattern: /\bpro\b/i },
  { label: "Business", url: "https://malera.studio/businessdetails", pattern: /\bbusiness\b/i },
  { label: "Enterprise", url: "https://malera.studio/enterprisedetails", pattern: /\benterprise\b/i },
];

function detectPlans(text: string) {
  return PLAN_LINKS.filter((plan) => plan.pattern.test(text));
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const lottieRef = useRef<any>(null);

  // Load Lottie animation JSON
  useEffect(() => {
    fetch("/robot-animation.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => {});
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Play/pause Lottie animation based on chat open state
  useEffect(() => {
    const instance = lottieRef.current;
    if (!instance) return;
    if (open) {
      instance.play();
    } else {
      instance.stop();
    }
  }, [open]);

  // Lock body scroll when chat is open (compensate scrollbar width to prevent layout shift)
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.position = "fixed";
      document.body.style.top = "-" + scrollY + "px";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollbarWidth + "px";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || streaming) return;

      const userMsg: Message = { role: "user", content: trimmed };
      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setInput("");
      setStreaming(true);
      setError(null);

      abortRef.current = new AbortController();

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: updatedMessages }),
          signal: abortRef.current.signal,
        });

        if (!res.ok) {
          const errBody = await res.text().catch(() => "");
          throw new Error(errBody || `API returned ${res.status}`);
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("No response body");

        const decoder = new TextDecoder();
        let assistantContent = "";
        let buffer = "";

        // Add empty assistant message to stream into
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          // Keep the last partial line in the buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data);
              const delta = parsed?.choices?.[0]?.delta?.content;
              if (delta) {
                assistantContent += delta;
                setMessages((prev) => {
                  const copy = [...prev];
                  copy[copy.length - 1] = { role: "assistant", content: assistantContent };
                  return copy;
                });
              }
            } catch {
              // Skip unparseable chunks
            }
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError("Something went wrong. Try again?");
      } finally {
        setStreaming(false);
        abortRef.current = null;
      }
    },
    [messages, streaming]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (text: string) => {
    sendMessage(text);
  };

  return (
    <>
      {/* ═══════════════ FLOATING BUBBLE — DANCING / RUNNING ROBOT ═══════════════ */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Chat with MBOT"}
        className={`
          fixed z-[99999]
          bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))]
          sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:right-[calc(1.5rem+env(safe-area-inset-right))]
          flex items-center justify-center
          ${open ? 'max-[700px]:hidden' : ''}
          w-11 h-11 sm:w-12 sm:h-12
          rounded-full
          text-gold
          shadow-[0_0_24px_rgba(201,168,76,0.1),0_8px_32px_rgba(0,0,0,0.5)]
          hover:shadow-[0_0_36px_rgba(201,168,76,0.25),0_12px_40px_rgba(0,0,0,0.6)]
          transition-all duration-300
          group
          pointer-events-auto
        `}
        style={{
          background: "rgba(8,8,8,0.75)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(201,168,76,0.18)",
        }}
      >
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop
            autoplay={false}
            lottieRef={lottieRef}
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
        ) : (
          <span className="w-5 h-5 rounded-full bg-gold/20 animate-pulse" />
        )}
        {/* Soft glow ring on hover — only when closed */}
        {!open && (
          <span
            className="absolute inset-[-3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
            }}
          />
        )}
      </button>

      {/* ═══════════════ BACKDROP (desktop only — click to close) ═══════════════ */}
      {open && (
        <div
          className="hidden min-[701px]:block fixed inset-0 z-[9997] animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ═══════════════ CHAT PANEL ═══════════════ */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            fixed z-[9998]
            right-0 top-0 left-0
            w-full
            bottom-0
            h-[100dvh]
            rounded-none
            animate-[slideUpMobile_0.3s_cubic-bezier(0.16,1,0.3,1)]
            min-[701px]:right-[calc(1.5rem+env(safe-area-inset-right))]
            min-[701px]:left-auto
            min-[701px]:w-[400px]
            min-[701px]:bottom-[calc(5.5rem+env(safe-area-inset-bottom))]
            min-[701px]:top-auto
            min-[701px]:h-[420px]
            min-[701px]:rounded-2xl
            min-[701px]:animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)]
            border border-gold/30
            shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_20px_60px_rgba(0,0,0,0.7),0_0_60px_rgba(201,168,76,0.06),inset_0_1px_0_rgba(255,255,255,0.03)]
            flex flex-col
            overflow-hidden
          `}
          style={{
            background: "rgba(6,6,6,0.82)",
            backdropFilter: "blur(48px) saturate(200%)",
            WebkitBackdropFilter: "blur(48px) saturate(200%)",
          }}
        >
          {/* ── Header ── */}
          <div className="shrink-0 flex items-center justify-between gap-3 pl-4 pr-2 py-2.5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-white/70 text-xs font-semibold tracking-wide truncate">
                MBOT
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-white/35 hover:text-white/80 hover:bg-white/[0.08] transition-colors"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* ── Messages ── */}
          <div className="flex-1 min-h-0 overflow-y-auto px-4 pt-4 pb-0 space-y-3.5">
            {/* Empty state */}
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5">
                <p className="text-white/40 text-xs font-medium tracking-wide">Ask me anything about Malera</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTED.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      className="text-[0.7rem] text-white/60 hover:text-gold bg-white/[0.04] hover:bg-gold/10 border border-white/[0.1] hover:border-gold/25 rounded-full px-3.5 py-2 transition-all duration-300"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => {
              const plans = msg.role === "assistant" && msg.content ? detectPlans(msg.content) : [];
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-1.5 ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`
                      max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed
                      ${msg.role === "user"
                        ? "bg-gold/[0.12] border border-gold/25 text-white/95 rounded-br-md shadow-[0_2px_12px_rgba(201,168,76,0.08)]"
                        : "bg-white/[0.05] border border-white/[0.1] text-white/85 rounded-bl-md"
                      }
                    `}
                  >
                    {msg.content ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: formatContent(msg.content, msg.role) }}
                      />
                    ) : (
                      msg.role === "assistant" && <LoadingDots />
                    )}
                  </div>

                  {plans.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 max-w-[85%]">
                      {plans.map((plan) => (
                        <a
                          key={plan.label}
                          href={plan.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[0.7rem] font-medium text-gold bg-gold/10 hover:bg-gold/20 border border-gold/25 hover:border-gold/40 rounded-full px-3 py-1.5 transition-all duration-300"
                        >
                          View {plan.label} details →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Error state */}
            {error && (
              <div className="flex justify-center">
                <p className="text-red-400/60 text-[0.65rem]">{error}</p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Input ── */}
          <form
            onSubmit={handleSubmit}
            className="shrink-0 flex items-center gap-2.5 px-4 py-3.5 border-t border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={streaming ? "MBOT is typing..." : "Type a message..."}
              disabled={streaming}
              className="flex-1 bg-transparent text-white/90 text-base sm:text-xs placeholder:text-white/25 outline-none disabled:opacity-40"
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-gold bg-gold/15 hover:bg-gold/25 hover:scale-105 disabled:opacity-15 disabled:hover:bg-gold/15 disabled:hover:scale-100 transition-all"
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </form>

          {/* ── Branded footer ── */}
          <div className="shrink-0 flex items-center justify-center py-1.5 border-t border-white/[0.04]">
            <p className="text-white/15 text-[0.5rem]">
              Powered by Malera Studio
            </p>
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}

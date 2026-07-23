"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ── Dancing cutie (front view, idle/closed) ── */
const RobotIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="blushGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"/>
      </radialGradient>
    </defs>

    {/* ── Dancing body group ── */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="0.7s" repeatCount="indefinite" />

      {/* ── Legs ── */}
      <g>
        {/* Left leg */}
        <path d="M18 40 Q16 42 14 44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" values="-5 18 40;8 18 40;-5 18 40" dur="0.55s" repeatCount="indefinite" />
        </path>
        {/* Right leg */}
        <path d="M30 40 Q32 42 34 44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" values="5 30 40;-8 30 40;5 30 40" dur="0.55s" repeatCount="indefinite" begin="0.275s" />
        </path>
      </g>

      {/* ── Body (hoodie) ── */}
      <path d="M13 28 Q12 28 11 32 L10 40 Q10 42 14 42 L34 42 Q38 42 38 40 L37 32 Q36 28 35 28 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
      {/* Hoodie pocket line */}
      <path d="M18 36 Q24 39 30 36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* ── Arms ── */}
      {/* Left arm — waving */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-20 12 30;15 12 30;-20 12 30" dur="0.6s" repeatCount="indefinite" />
        <path d="M12 30 Q6 26 5 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </g>
      {/* Right arm — waving opposite */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="15 36 30;-20 36 30;15 36 30" dur="0.6s" repeatCount="indefinite" begin="0.3s" />
        <path d="M36 30 Q42 26 43 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </g>

      {/* ── Neck ── */}
      <rect x="20" y="24" width="8" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />

      {/* ── Head ── */}
      <ellipse cx="24" cy="17" rx="11" ry="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" />

      {/* ── Antenna / cap ── */}
      <path d="M16 13 Q14 6 18 3 Q24 2 28 5 Q32 8 32 13" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.5" />
      {/* Antenna tip */}
      <circle cx="18" cy="3" r="2" fill="#C9A84C">
        <animate attributeName="cy" values="3;1.5;3" dur="0.7s" repeatCount="indefinite" />
      </circle>

      {/* ── Eyes (big cute eyes) ── */}
      <ellipse cx="20" cy="17" rx="3" ry="3.5" fill="currentColor" />
      <ellipse cx="28" cy="17" rx="3" ry="3.5" fill="currentColor" />
      {/* Eye shine */}
      <circle cx="21" cy="15.5" r="1.2" fill="white" opacity="0.9" />
      <circle cx="29" cy="15.5" r="1.2" fill="white" opacity="0.9" />
      {/* Blinking */}
      <ellipse cx="20" cy="17" rx="3" ry="3.5" fill="currentColor" opacity="0">
        <animate attributeName="ry" values="3.5;0.2;3.5" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="28" cy="17" rx="3" ry="3.5" fill="currentColor" opacity="0">
        <animate attributeName="ry" values="3.5;0.2;3.5" dur="3.5s" repeatCount="indefinite" begin="0.15s" />
        <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="0.15s" />
      </ellipse>

      {/* ── Blush ── */}
      <ellipse cx="16" cy="21" rx="3.5" ry="2.5" fill="url(#blushGrad)" />
      <ellipse cx="32" cy="21" rx="3.5" ry="2.5" fill="url(#blushGrad)" />

      {/* ── Smile ── */}
      <path d="M19 21 Q24 25 29 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

/* ── Running cutie (side profile, chat open) ── */
const RunningRobotIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="blushRun" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"/>
      </radialGradient>
    </defs>

    {/* ── Running body group ── */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.5;0 0" dur="0.3s" repeatCount="indefinite" />

      {/* ── Far arm (background) ── */}
      <path d="M20 32 Q14 30 12 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.35">
        <animateTransform attributeName="transform" type="rotate" values="8 20 32;-5 20 32;8 20 32" dur="0.3s" repeatCount="indefinite" />
      </path>

      {/* ── Far leg (background) ── */}
      <path d="M20 40 Q10 42 8 46" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.35">
        <animateTransform attributeName="transform" type="rotate" values="-15 20 40;15 20 40;-15 20 40" dur="0.3s" repeatCount="indefinite" />
      </path>

      {/* ── Head (side view, leaning forward) ── */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-6 28 18;3 28 18;-6 28 18" dur="0.3s" repeatCount="indefinite" />
        <ellipse cx="28" cy="17" rx="11" ry="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2" />

        {/* ── Cap / antenna (side view) ── */}
        <path d="M22 11 Q20 5 26 3 Q32 2 35 7 Q37 11 37 13" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="26" cy="3" r="2" fill="#C9A84C">
          <animate attributeName="cy" values="3;1.5;3" dur="0.3s" repeatCount="indefinite" />
        </circle>

        {/* ── Eye (side view, one visible, determined) ── */}
        <ellipse cx="32" cy="16" rx="3" ry="3.2" fill="currentColor" />
        <circle cx="33" cy="14.5" r="1.1" fill="white" opacity="0.9" />

        {/* ── Determined eyebrow ── */}
        <line x1="29" y1="12" x2="34" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />

        {/* ── Blush ── */}
        <ellipse cx="24" cy="21" rx="3" ry="2" fill="url(#blushRun)" />

        {/* ── Determined mouth ── */}
        <path d="M28 22 Q30 23 32 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </g>

      {/* ── Body (side view, leaning) ── */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-10 26 32;0 26 32;-10 26 32" dur="0.3s" repeatCount="indefinite" />
        <path d="M20 28 Q18 28 17 32 L15 40 Q15 42 19 42 L33 42 Q37 42 37 40 L36 32 Q35 28 33 28 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
      </g>

      {/* ── Near arm (pumping forward) ── */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-35 30 30;15 30 30;-35 30 30" dur="0.3s" repeatCount="indefinite" />
        <path d="M30 30 Q38 26 41 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </g>

      {/* ── Near leg (stride) ── */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="20 28 40;-15 28 40;20 28 40" dur="0.3s" repeatCount="indefinite" begin="0.15s" />
        <path d="M28 40 Q36 42 38 46" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </g>
    </g>
  </svg>
);

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

function formatContent(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
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
        aria-label={open ? "Close chat" : "Chat with Malera Bot"}
        className={`
          fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[99999]
          flex items-center justify-center
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
        {open ? <RunningRobotIcon /> : <RobotIcon />}
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

      {/* ═══════════════ CHAT PANEL ═══════════════ */}
      {open && (
        <div
          className={`
            fixed right-3 sm:right-6 z-[9998]
            w-[calc(100vw-1.5rem)] sm:w-[400px]
            max-h-[calc(100dvh-90px)]
            bottom-[calc(3rem+12px)] sm:bottom-[calc(3.5rem+16px)]
            rounded-2xl
            border border-gold/30
            shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_20px_60px_rgba(0,0,0,0.7),0_0_60px_rgba(201,168,76,0.06),inset_0_1px_0_rgba(255,255,255,0.03)]
            flex flex-col
            overflow-hidden
            animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)]
          `}
          style={{
            background: "rgba(6,6,6,0.82)",
            backdropFilter: "blur(48px) saturate(200%)",
            WebkitBackdropFilter: "blur(48px) saturate(200%)",
          }}
        >
          {/* ── Gold accent line at top ── */}
          <div className="shrink-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {/* ── Header ── */}
          <div className="shrink-0 flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08]" style={{ background: "rgba(255,255,255,0.015)" }}>
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-white text-sm font-semibold tracking-wide">
                Malera
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/30 hover:text-white/70 transition-colors p-1"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* ── Messages ── */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5">
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

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
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
                      dangerouslySetInnerHTML={{ __html: formatContent(msg.content) }}
                    />
                  ) : (
                    msg.role === "assistant" && <LoadingDots />
                  )}
                </div>
              </div>
            ))}

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
              placeholder={streaming ? "Malera is typing..." : "Type a message..."}
              disabled={streaming}
              className="flex-1 bg-transparent text-white/90 text-xs placeholder:text-white/25 outline-none disabled:opacity-40"
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
      `}</style>
    </>
  );
}

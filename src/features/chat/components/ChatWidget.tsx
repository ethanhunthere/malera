"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ── Cute dancing robot icon ── */
const RobotIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Antenna */}
    <line x1="20" y1="6" x2="20" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <animate attributeName="y2" values="10;8;10" dur="1.4s" repeatCount="indefinite" />
    </line>
    <circle cx="20" cy="5" r="2.5" fill="#C9A84C" stroke="currentColor" strokeWidth="1">
      <animate attributeName="cy" values="5;3;5" dur="1.4s" repeatCount="indefinite" />
      <animate attributeName="r" values="2.5;3;2.5" dur="1.4s" repeatCount="indefinite" />
    </circle>
    {/* Head */}
    <rect x="10" y="10" width="20" height="15" rx="5" stroke="currentColor" strokeWidth="2" fill="none">
      <animate attributeName="y" values="10;9;10" dur="1.2s" repeatCount="indefinite" />
    </rect>
    {/* Eyes */}
    <circle cx="16" cy="16" r="2" fill="currentColor">
      <animate attributeName="ry" values="2;0.3;2" dur="3s" repeatCount="indefinite" begin="0s" />
    </circle>
    <circle cx="24" cy="16" r="2" fill="currentColor">
      <animate attributeName="ry" values="2;0.3;2" dur="3s" repeatCount="indefinite" begin="0.15s" />
    </circle>
    {/* Cheeks */}
    <circle cx="13" cy="19.5" r="1.5" fill="#C9A84C" opacity="0.6" />
    <circle cx="27" cy="19.5" r="1.5" fill="#C9A84C" opacity="0.6" />
    {/* Mouth */}
    <path d="M 16 21 Q 20 24 24 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Body */}
    <rect x="12" y="26" width="16" height="10" rx="4" stroke="currentColor" strokeWidth="2" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="-3 20 31;3 20 31;-3 20 31" dur="0.8s" repeatCount="indefinite" />
    </rect>
    {/* Arms */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="-10 10 30;10 10 30;-10 10 30" dur="0.6s" repeatCount="indefinite" />
      <line x1="12" y1="30" x2="4" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="25" x2="2" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    <g>
      <animateTransform attributeName="transform" type="rotate" values="10 30 30;-10 30 30;10 30 30" dur="0.6s" repeatCount="indefinite" />
      <line x1="28" y1="30" x2="36" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="25" x2="38" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    {/* Legs */}
    <line x1="16" y1="36" x2="14" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <animate attributeName="y2" values="40;38;40" dur="0.7s" repeatCount="indefinite" />
    </line>
    <line x1="24" y1="36" x2="26" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <animate attributeName="y2" values="40;38;40" dur="0.7s" repeatCount="indefinite" begin="0.35s" />
    </line>
  </svg>
);

/* ── Running robot icon — side profile, looks like it's sprinting ── */
const RunningRobotIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Antenna — fast wiggle, leaning forward */}
    <line x1="22" y1="5" x2="26" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <animate attributeName="y1" values="5;3;5" dur="0.35s" repeatCount="indefinite" />
    </line>
    <circle cx="27" cy="4" r="2.2" fill="#C9A84C" stroke="currentColor" strokeWidth="1">
      <animate attributeName="cy" values="4;2;4" dur="0.35s" repeatCount="indefinite" />
      <animate attributeName="r" values="2.2;3;2.2" dur="0.35s" repeatCount="indefinite" />
    </circle>

    {/* Head — side view, oval-ish, leaning forward */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="-5 20 18;5 20 18;-5 20 18" dur="0.35s" repeatCount="indefinite" />
      <ellipse cx="23" cy="18" rx="9" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* One eye — side view */}
      <circle cx="26" cy="17" r="2" fill="currentColor" />
      {/* Cheek */}
      <circle cx="22" cy="21" r="1.2" fill="#C9A84C" opacity="0.8" />
      {/* Mouth — side grin */}
      <path d="M 24 22 Q 26 24 28 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </g>

    {/* Body — leaning forward */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.5;0 0" dur="0.35s" repeatCount="indefinite" />
      <rect x="15" y="27" width="16" height="10" rx="4" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(-8 23 32)" />
    </g>

    {/* Far arm — back swing */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="15 18 32;5 18 32;15 18 32" dur="0.35s" repeatCount="indefinite" />
      <line x1="18" y1="32" x2="10" y2="30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    </g>

    {/* Near arm — pumping forward */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="-30 24 30;10 24 30;-30 24 30" dur="0.35s" repeatCount="indefinite" />
      <line x1="24" y1="30" x2="34" y2="27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="27" x2="38" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Far leg — back stride */}
    <line x1="17" y1="36" x2="9" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.5">
      <animate attributeName="x2" values="9;23;9" dur="0.35s" repeatCount="indefinite" />
      <animate attributeName="y2" values="40;37;40" dur="0.35s" repeatCount="indefinite" />
    </line>

    {/* Near leg — forward stride */}
    <line x1="24" y1="36" x2="34" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <animate attributeName="x2" values="34;18;34" dur="0.35s" repeatCount="indefinite" begin="0.175s" />
      <animate attributeName="y2" values="40;37;40" dur="0.35s" repeatCount="indefinite" begin="0.175s" />
    </line>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
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
          bg-[#0a0a0a]/90
          text-gold
          shadow-[0_0_18px_rgba(201,168,76,0.06)]
          hover:shadow-[0_0_26px_rgba(201,168,76,0.16)]
          transition-all duration-300
          group
          pointer-events-auto
        `}
        style={{ backdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.12)" }}
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
            bg-gradient-to-b from-[#0a0a0a] to-[#030303]
            border border-gold/20
            shadow-[0_0_0_1px_rgba(0,0,0,0.5),0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(201,168,76,0.03)]
            flex flex-col
            overflow-hidden
            animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)]
          `}
          style={{ backdropFilter: "blur(40px)" }}
        >
          {/* ── Gold accent line at top ── */}
          <div className="shrink-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {/* ── Header ── */}
          <div className="shrink-0 flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05]">
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-white/90 text-sm font-semibold tracking-wide">
                Malera
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/20 hover:text-white/50 transition-colors p-1"
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
                <p className="text-white/20 text-xs font-medium tracking-wide">Ask me anything about Malera</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTED.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      className="text-[0.7rem] text-white/40 hover:text-gold bg-white/[0.03] hover:bg-gold/10 border border-white/[0.05] hover:border-gold/20 rounded-full px-3.5 py-2 transition-all duration-300"
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
                      ? "bg-gold/10 border border-gold/20 text-white/85 rounded-br-md shadow-[0_2px_8px_rgba(201,168,76,0.04)]"
                      : "bg-white/[0.03] border border-white/[0.06] text-white/70 rounded-bl-md"
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
            className="shrink-0 flex items-center gap-2.5 px-4 py-3 border-t border-white/[0.06] bg-white/[0.015]"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={streaming ? "Malera is typing..." : "Type a message..."}
              disabled={streaming}
              className="flex-1 bg-transparent text-white/80 text-xs placeholder:text-white/15 outline-none disabled:opacity-40"
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gold/50 hover:text-gold hover:bg-gold/10 disabled:opacity-15 disabled:hover:bg-transparent transition-all"
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </form>

          {/* ── Branded footer ── */}
          <div className="shrink-0 flex items-center justify-center py-1.5 border-t border-white/[0.02]">
            <p className="text-white/8 text-[0.5rem]">
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

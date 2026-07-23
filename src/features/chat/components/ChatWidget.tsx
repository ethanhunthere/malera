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

/* ── Running robot icon (energetic, for when chat is open) ── */
const RunningRobotIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Antenna — fast wiggle */}
    <line x1="20" y1="6" x2="20" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <animate attributeName="y2" values="10;8;10" dur="0.4s" repeatCount="indefinite" />
    </line>
    <circle cx="20" cy="5" r="2.5" fill="#C9A84C" stroke="currentColor" strokeWidth="1">
      <animate attributeName="cy" values="5;3;5" dur="0.4s" repeatCount="indefinite" />
      <animate attributeName="r" values="2.5;3.3;2.5" dur="0.4s" repeatCount="indefinite" />
    </circle>
    {/* Head — bouncing faster */}
    <rect x="10" y="10" width="20" height="15" rx="5" stroke="currentColor" strokeWidth="2" fill="none">
      <animate attributeName="y" values="10;8;10" dur="0.35s" repeatCount="indefinite" />
    </rect>
    {/* Eyes — wide open, determined */}
    <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    <circle cx="24" cy="16" r="2.2" fill="currentColor" />
    {/* Cheeks */}
    <circle cx="13" cy="19.5" r="1.5" fill="#C9A84C" opacity="0.8" />
    <circle cx="27" cy="19.5" r="1.5" fill="#C9A84C" opacity="0.8" />
    {/* Mouth — determined grin */}
    <path d="M 15 21.5 L 18 23 L 22 23 L 25 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Body — bouncing */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur="0.35s" repeatCount="indefinite" />
      <rect x="12" y="26" width="16" height="10" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    </g>
    {/* Arms — pumping like a runner */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="-25 10 30;15 10 30;-25 10 30" dur="0.35s" repeatCount="indefinite" />
      <line x1="12" y1="30" x2="2" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </g>
    <g>
      <animateTransform attributeName="transform" type="rotate" values="25 30 30;-15 30 30;25 30 30" dur="0.35s" repeatCount="indefinite" />
      <line x1="28" y1="30" x2="38" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </g>
    {/* Legs — fast alternating stride */}
    <line x1="16" y1="36" x2="12" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <animate attributeName="x2" values="12;20;12" dur="0.35s" repeatCount="indefinite" />
      <animate attributeName="y2" values="40;38;40" dur="0.35s" repeatCount="indefinite" />
    </line>
    <line x1="24" y1="36" x2="28" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <animate attributeName="x2" values="28;20;28" dur="0.35s" repeatCount="indefinite" begin="0.175s" />
      <animate attributeName="y2" values="40;38;40" dur="0.35s" repeatCount="indefinite" begin="0.175s" />
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
  "Do you build mobile apps?",
  "What's your tech stack?",
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
          fixed z-[9999]
          flex items-center justify-center
          w-11 h-11 sm:w-12 sm:h-12
          rounded-full
          bg-[#0a0a0a]/90
          text-gold
          shadow-[0_0_18px_rgba(201,168,76,0.06)]
          hover:shadow-[0_0_26px_rgba(201,168,76,0.16)]
          transition-all duration-500 ease-out
          group
          ${open
            ? "bottom-[calc(3rem+20px)] right-0.5 sm:bottom-[calc(3.5rem+24px)] sm:right-1"
            : "bottom-5 right-5 sm:bottom-6 sm:right-6"
          }
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
            w-[calc(100vw-1.5rem)] sm:w-[380px]
            max-h-[calc(100dvh-90px)]
            bottom-[calc(3rem+12px)] sm:bottom-[calc(3.5rem+16px)]
            rounded-2xl
            bg-[#030303]/95
            border border-gold/15
            shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_16px_48px_rgba(0,0,0,0.55)]
            flex flex-col
            overflow-hidden
            animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)]
          `}
          style={{ backdropFilter: "blur(40px)" }}
        >
          {/* ── Header ── */}
          <div className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <div className="text-gold w-5 h-5 flex items-center justify-center">
                <RobotIcon />
              </div>
              <span className="font-[family-name:var(--font-display)] text-white text-xs font-bold tracking-wide">
                Malera Bot
              </span>
              <span className="text-[0.55rem] text-white/20 font-mono bg-white/[0.03] px-1.5 py-px rounded-full">
                AI
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/25 hover:text-white/60 transition-colors"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* ── Messages ── */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {/* Empty state */}
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <div className="text-gold/40 w-10 h-10">
                  <RobotIcon />
                </div>
                <p className="text-white/15 text-xs">Ask me anything about Malera Studio</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {SUGGESTED.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      className="text-[0.65rem] text-white/30 hover:text-gold/80 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.03] hover:border-gold/15 rounded-full px-3 py-1.5 transition-all duration-300"
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
                    max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed
                    ${msg.role === "user"
                      ? "bg-gold/10 border border-gold/15 text-white/80 rounded-br-md"
                      : "bg-white/[0.02] border border-white/[0.04] text-white/60 rounded-bl-md"
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
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 border-t border-white/[0.04] bg-white/[0.01]"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={streaming ? "Malera Bot is typing..." : "Type a message..."}
              disabled={streaming}
              className="flex-1 bg-transparent text-white/70 text-xs placeholder:text-white/15 outline-none disabled:opacity-40"
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gold/60 hover:text-gold hover:bg-gold/10 disabled:opacity-20 disabled:hover:bg-transparent transition-all"
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

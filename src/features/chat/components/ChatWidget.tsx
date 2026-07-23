"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ── Inline icon SVGs (no extra deps) ── */
const ChatIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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

        if (!res.ok) throw new Error(`API returned ${res.status}`);

        const reader = res.body?.getReader();
        if (!reader) throw new Error("No response body");

        const decoder = new TextDecoder();
        let assistantContent = "";

        // Add empty assistant message to stream into
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          assistantContent += chunk;
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: assistantContent };
            return copy;
          });
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
      {/* ═══════════════ FLOATING BUTTON ═══════════════ */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={`
          fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[9999]
          flex items-center justify-center
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full
          bg-[#0a0a0a] border border-gold/25
          text-gold hover:text-white
          shadow-[0_0_24px_rgba(201,168,76,0.1)]
          hover:shadow-[0_0_32px_rgba(201,168,76,0.2)]
          hover:border-gold/45
          transition-all duration-500
          group
        `}
        style={{ backdropFilter: "blur(24px)" }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full border border-gold/15 animate-ping [animation-duration:3s]" />
        )}
      </button>

      {/* ═══════════════ CHAT PANEL ═══════════════ */}
      {open && (
        <div
          className={`
            fixed bottom-24 right-5 sm:bottom-28 sm:right-8 z-[9998]
            w-[calc(100vw-2.5rem)] sm:w-[400px]
            h-[500px] sm:h-[560px]
            rounded-2xl
            bg-[#030303]/95
            border border-gold/15
            shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_24px_64px_rgba(0,0,0,0.6)]
            flex flex-col
            overflow-hidden
            animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]
          `}
          style={{ backdropFilter: "blur(40px)" }}
        >
          {/* ── Header ── */}
          <div className="shrink-0 flex items-center justify-between px-4 sm:px-5 py-4 border-b border-white/[0.04]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-[family-name:var(--font-display)] text-white text-sm font-bold tracking-wide">
                Malera Bot
              </span>
              <span className="text-[0.6rem] text-white/20 font-mono bg-white/[0.03] px-1.5 py-px rounded-full">
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
          <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-4">
            {/* Empty state */}
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5">
                <p className="text-white/15 text-sm">Ask me anything about Malera Studio</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTED.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      className="text-[0.7rem] text-white/30 hover:text-gold/80 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.03] hover:border-gold/15 rounded-full px-3 py-1.5 transition-all duration-300"
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
                    max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                    ${msg.role === "user"
                      ? "bg-gold/10 border border-gold/15 text-white/80 rounded-br-md"
                      : "bg-white/[0.02] border border-white/[0.04] text-white/60 rounded-bl-md"
                    }
                  `}
                >
                  {msg.content || (msg.role === "assistant" && <LoadingDots />)}
                </div>
              </div>
            ))}

            {/* Error state */}
            {error && (
              <div className="flex justify-center">
                <p className="text-red-400/60 text-xs">{error}</p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Input ── */}
          <form
            onSubmit={handleSubmit}
            className="shrink-0 flex items-center gap-2 px-4 sm:px-5 py-3 border-t border-white/[0.04] bg-white/[0.01]"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={streaming ? "Malera Bot is typing..." : "Type a message..."}
              disabled={streaming}
              className="flex-1 bg-transparent text-white/70 text-sm placeholder:text-white/15 outline-none disabled:opacity-40"
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gold/60 hover:text-gold hover:bg-gold/10 disabled:opacity-20 disabled:hover:bg-transparent transition-all"
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </form>

          {/* ── Branded footer ── */}
          <div className="shrink-0 flex items-center justify-center py-2 border-t border-white/[0.02]">
            <p className="text-white/10 text-[0.55rem]">
              Powered by Malera Studio
            </p>
          </div>
        </div>
      )}

      {/* Keyframe for slide-up animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
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

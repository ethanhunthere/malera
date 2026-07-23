"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PiRobotDuotone, PiChatsDuotone } from "react-icons/pi";

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
        {open ? <PiChatsDuotone className="w-5 h-5" /> : <PiRobotDuotone className="w-5 h-5" />}
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

      {/* ═══════════════ BACKDROP ═══════════════ */}
      {open && (
        <div
          className="fixed inset-0 z-[9997] animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ═══════════════ CHAT PANEL ═══════════════ */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
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
          {/* ── Messages ── */}
          <div className="flex-1 overflow-y-auto px-4 pt-4 pb-0 space-y-3.5 relative">
            {/* Subtle close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white/20 hover:text-white/50 transition-colors p-1 z-10"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}

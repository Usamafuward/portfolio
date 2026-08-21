"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaTrashAlt,
  FaCommentDots,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const suggestedPrompts = [
  "What are Usama's top AI & ML projects?",
  "Tell me about his work experience",
  "What are his core technical skills?",
  "How can I contact Usama?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Greetings! I am **USAMA_AI**, the neural assistant calibrated with Usama Puward's complete portfolio database.\n\nAsk me anything about his AI/ML projects, software engineering background, work experience, certifications, or technical skills!",
      timestamp: "SYS.01",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();

      if (data.reply) {
        const assistantMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        throw new Error(data.error || "No response received");
      }
    } catch (err: any) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "// SYS.ERR: Link connection timed out. Please verify connectivity or retry.",
        timestamp: "SYS.ERR",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          "Neural link refreshed. You can ask me any question regarding Usama Puward's career, AI models, projects, or technical expertise!",
        timestamp: "SYS.01",
      },
    ]);
  };

  const formatMessageText = (text: string) => {
    // Formatting with word wrapping and clean markdown tokens
    return text.split("\n").map((line, idx) => {
      if (!line.trim()) return <div key={idx} className="h-2" />;

      let formatted = line;
      const isBullet = line.trim().startsWith("* ") || line.trim().startsWith("- ");
      if (isBullet) {
        formatted = line.trim().substring(2);
      }

      // Handle bold **text**
      const parts = formatted.split(/(\*\*.*?\*\*)/g);

      return (
        <div
          key={idx}
          className={`${
            isBullet
              ? "pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-bold"
              : ""
          } leading-[1.6] my-[2px] break-words whitespace-pre-wrap`}
        >
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={pIdx} className="text-primary font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <span key={pIdx}>{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Chatbot Launcher Button - Compact & Sleek */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-[99]">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          aria-label="Open AI Assistant"
          className="relative group p-[2px] bg-primary/60 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-shadow duration-300"
        >
          <div className="bg-[#080a0b] p-3.5 flex items-center gap-2.5 [clip-path:polygon(0_0,calc(100%-9px)_0,100%_9px,100%_100%,9px_100%,0_calc(100%-9px))]">
            <div className="relative flex items-center justify-center">
              <FaRobot className="text-primary text-xl drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
            </div>
          </div>
        </motion.button>
      </div>

      {/* Expandable Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[86px] sm:bottom-22 right-4 sm:right-6 w-[calc(100vw-48px)] sm:w-[440px] h-[560px] max-h-[82vh] z-[100] flex flex-col p-[1px] bg-primary/40 [clip-path:polygon(0_0,calc(100%-25px)_0,100%_25px,100%_100%,25px_100%,0_calc(100%-25px))] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.2)]"
          >
            <div className="bg-[#0a0c0e]/95 backdrop-blur-xl w-full h-full flex flex-col [clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,24px_100%,0_calc(100%-24px))] overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-primary/20 bg-primary/5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                    <BsStars className="text-primary text-base" />
                  </div>
                  <div>
                    <h3 className="text-white font-mono font-bold text-[0.85rem] tracking-[1px] flex items-center gap-2">
                      USAMA_AI <span className="text-[0.65rem] text-primary px-1.5 py-0.5 bg-primary/10 border border-primary/30 rounded">v2.5</span>
                    </h3>
                    <p className="text-[0.7rem] text-gray-400 font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                      PORTFOLIO KNOWLEDGE BASE ACTIVE
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleClear}
                    title="Reset Conversation"
                    className="text-gray-400 hover:text-primary transition-colors p-2 text-xs cursor-pointer"
                    aria-label="Clear chat"
                  >
                    <FaTrashAlt />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    title="Close Window"
                    className="text-gray-400 hover:text-primary transition-colors p-2 text-sm cursor-pointer"
                    aria-label="Close chat"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Chat Message List - Vertical-Only Sleek Scrollbar */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 flex flex-col gap-4 font-mono text-[0.85rem] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/30 hover:[&::-webkit-scrollbar-thumb]:bg-primary/60 [&::-webkit-scrollbar-thumb]:rounded-full">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col w-full ${
                      m.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1 px-1">
                      <span className="text-[0.7rem] font-bold text-gray-400">
                        {m.role === "user" ? "// TRANSMISSION (YOU)" : "// USAMA_AI"}
                      </span>
                      <span className="text-[0.65rem] text-gray-500">{m.timestamp}</span>
                    </div>

                    <div
                      className={`max-w-[90%] p-3.5 text-gray-200 break-words [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] ${
                        m.role === "user"
                          ? "bg-primary/15 border border-primary/40 text-white shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                          : "bg-white/[0.04] border-l-2 border-l-primary border-y border-r border-white/5"
                      }`}
                    >
                      {formatMessageText(m.content)}
                    </div>
                  </div>
                ))}

                {/* Loading Indicator */}
                {loading && (
                  <div className="flex flex-col items-start w-full">
                    <span className="text-[0.7rem] font-bold text-primary mb-1">
                      // USAMA_AI [THINKING]
                    </span>
                    <div className="p-3 bg-white/[0.04] border-l-2 border-l-primary border-white/5 flex items-center gap-2 text-primary text-xs">
                      <FaCommentDots className="animate-pulse" />
                      <span>Querying neural knowledge base...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Quick Prompts */}
              {messages.length <= 2 && (
                <div className="px-4 py-2 border-t border-white/5 flex flex-wrap gap-1.5 shrink-0">
                  {suggestedPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(prompt)}
                      className="text-[0.72rem] font-mono text-primary/80 bg-primary/5 hover:bg-primary hover:text-black border border-primary/20 px-2.5 py-1 transition-all duration-200 [clip-path:polygon(0_0,calc(100%-5px)_0,100%_5px,100%_100%,5px_100%,0_calc(100%-5px))] cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-primary/20 bg-[#080a0b] flex items-center gap-4 shrink-0">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask any question about Usama..."
                  disabled={loading}
                  className="flex-1 bg-white/5 border border-primary/30 text-white font-mono text-[0.85rem] px-3.5 py-2.5 transition-all duration-300 focus:outline-none focus:border-primary focus:bg-primary/5 focus:shadow-[0_0_12px_rgba(0,240,255,0.2)] [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend()}
                  disabled={loading || !input.trim()}
                  className="bg-primary/20 hover:bg-primary hover:text-black text-primary border border-primary/40 p-3 flex items-center justify-center transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,6px_100%,0_calc(100%-6px))] cursor-pointer"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-xs" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

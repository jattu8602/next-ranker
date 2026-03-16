"use client";

import { useState } from "react";
import { Plus, Mic, Sparkles, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsExpanded(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "I'm Lexia AI — your exam prep assistant. I'll be able to help with mock tests, study tips, and more very soon!",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      {/* Message history (shown when expanded) */}
      {isExpanded && messages.length > 0 && (
        <div className="mb-3 bg-card border rounded-2xl shadow-2xl p-4 max-h-64 overflow-y-auto space-y-3 animate-in slide-in-from-bottom-4 duration-300">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Prompt bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-3 bg-card border rounded-full shadow-2xl px-4 py-3"
      >
        {/* Plus button */}
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="group flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-all duration-300 text-muted-foreground hover:text-foreground hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95"
        >
          <Plus className="w-5 h-5 group-hover:scale-110 transition-all" />
        </button>

        {/* Input */}
        <input
          className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          placeholder="Ask Lexia anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setIsExpanded(true)}
        />

        {/* Mic button */}
        <button
          type="button"
          className="group flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-all duration-300 text-muted-foreground hover:text-foreground hover:scale-[1.07] hover:-translate-y-1 hover:shadow-xl active:scale-95"
        >
          <Mic className="w-5 h-5 group-hover:scale-110 transition-all" />
        </button>

        {/* Send / AI button */}
        <button
          type="submit"
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-md"
        >
          {input.trim() ? <Send className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}

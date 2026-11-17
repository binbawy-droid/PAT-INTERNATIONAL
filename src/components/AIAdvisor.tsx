import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Send, X, Sparkles, Zap, BrainCircuit } from "lucide-react";

export const AIAdvisor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are the PAT INTERNATIONAL GROUP OF COMPANIES UGANDA LTD Strategic AI Advisor. You specialize in East African industrial strategy, Uganda-Kenya-Rwanda logistics, EAC regional trade, and large-scale infrastructure advisory. Your tone is professional, futuristic, and highly analytical. You help users understand the impact of regional logistics and provide strategic insights for the East African market. Our regional headquarters are located in Rubaga Division, Kampala, Uganda. Use concise, impactful sentences."
        }
      });

      const aiResponse = response.text || "I apologize, but I am currently processing a logic update. Please try again soon.";
      setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: "ai", content: "Signal interference detected. Please verify your connection to the PAT Global Network." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[60] w-16 h-16 bg-slate-950 text-white rounded-full flex items-center justify-center shadow-2xl border border-slate-800 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <BrainCircuit size={28} className="group-hover:text-neon-cyan transition-colors" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green rounded-full animate-pulse shadow-[0_0_10px_#00ff00]"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-10 z-[60] w-[400px] h-[600px] bg-white border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden rounded-[2rem]"
          >
            {/* Header */}
            <div className="bg-slate-950 p-6 flex justify-between items-center border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 rounded-xl">
                  <Sparkles size={18} className="text-neon-purple" />
                </div>
                <div>
                  <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] leading-none mb-1">PAT Strategic <span className="text-neon-cyan">AI</span></h3>
                  <p className="text-[9px] text-slate-500 font-bold tracking-widest uppercase">Global Advisor v3.1</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 font-mono text-[11px]"
            >
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl mx-auto flex items-center justify-center text-slate-300">
                    <Zap size={24} />
                  </div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                    System Ready.<br />Initialize strategic inquiry.
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl ${
                    msg.role === "user" 
                    ? "bg-slate-950 text-white shadow-xl" 
                    : "bg-white border border-slate-200 text-slate-950 shadow-sm"
                  }`}>
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-4 rounded-2xl flex gap-1">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-neon-red rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-slate-100">
              <div className="flex gap-4 items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask PAT AI Advisor..."
                  className="flex-1 bg-slate-50 border border-slate-100 text-[11px] font-mono px-4 py-3 rounded-xl focus:ring-1 focus:ring-slate-950 outline-none transition-all"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 bg-slate-950 text-white rounded-xl hover:bg-slate-800 transition-all shadow-xl disabled:opacity-50"
                  disabled={!input.trim() || isTyping}
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-4 flex justify-between items-center text-[8px] uppercase tracking-widest font-bold text-slate-300">
                 <span>Latency: 24ms</span>
                 <span>Security: Encrypted</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

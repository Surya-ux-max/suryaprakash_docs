import { motion, AnimatePresence } from "motion/react";
import { Bot, ArrowUpRight, X } from "lucide-react";
import { INTERN_DATA } from "./internData";

/**
 * InternCard
 * A clean, compact, editorial floating card revealing the Agentic AI Intern details.
 */
export default function InternCard({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="simple-intern-card"
        initial={{ opacity: 0, y: 14, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 360, damping: 24 }}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[calc(62%+20px)] z-40 w-[min(88vw,330px)] bg-black text-yellow-400 p-5 rounded-2xl border-2 border-black shadow-[10px_10px_0px_#000] select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle leader-line connector pointing to the climber */}
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-3 h-[2px] bg-black hidden sm:block" />
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400 border border-black hidden sm:block" />

        {/* Header: Role + Close */}
        <div className="flex items-start justify-between gap-2 border-b border-yellow-400/15 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-black shadow-[1px_1px_0px_#facc15] flex-shrink-0">
              <Bot size={18} />
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-yellow-400/60 block leading-tight">
                Role // Active
              </span>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white leading-tight">
                {INTERN_DATA.role}
              </h3>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close card"
              className="text-yellow-400/50 hover:text-yellow-400 transition-colors p-1 cursor-pointer"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Short & Punchy Description */}
        <p className="text-xs text-yellow-400/85 leading-relaxed my-3 font-medium">
          Architecting autonomous multi-agent pipelines, tool-augmented reasoning loops, and production RAG workflows with self-correcting execution.
        </p>

        {/* Key Competency Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {["Multi-Agent Swarms", "Tool Calling", "RAG Pipelines", "LangGraph"].map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 font-mono text-[9px] uppercase tracking-wider rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Footer Metric */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-yellow-400/10 font-mono text-[9px] text-yellow-400/60 uppercase tracking-widest">
          <span>{INTERN_DATA.period}</span>
          <span className="text-yellow-400 font-bold flex items-center gap-1">
            Autonomous Systems <ArrowUpRight size={11} />
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


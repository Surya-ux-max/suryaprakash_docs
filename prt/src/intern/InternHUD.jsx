import { motion, AnimatePresence } from "motion/react";
import { Bot, Sparkles, Cpu, Layers, X, ShieldCheck } from "lucide-react";
import { INTERN_DATA } from "./internData";

export default function InternHUD({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intern-hud-overlay"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="fixed inset-x-4 md:inset-x-auto md:right-[6vw] top-[14vh] md:top-[16vh] md:w-[min(56vw,720px)] max-h-[76vh] overflow-y-auto z-40 bg-black text-yellow-400 p-6 md:p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0px_#000] select-none scrollbar-thin"
      >
        {/* Top laser scan line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400/30 animate-[scan_2s_ease-in-out_infinite] z-0" />

        {/* Corner Stencil Accents */}
        <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-yellow-400/60" />
        <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-yellow-400/60" />
        <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-yellow-400/60" />
        <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-yellow-400/60" />

        {/* Header Strip */}
        <div className="flex items-start justify-between gap-4 border-b border-yellow-400/20 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center font-black shadow-[2px_2px_0px_#facc15]">
              <Bot size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-yellow-400/60">
                  {INTERN_DATA.department}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-none mt-1">
                {INTERN_DATA.role}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md">
              {INTERN_DATA.period}
            </span>
            {onClose && (
              <button
                onClick={onClose}
                aria-label="Close details"
                className="w-8 h-8 rounded-lg bg-yellow-400/10 hover:bg-yellow-400 hover:text-black border border-yellow-400/30 flex items-center justify-center text-yellow-400 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Headline & Overview */}
        <div className="mt-5 space-y-3 relative z-10">
          <p className="text-sm md:text-base font-bold text-yellow-400 leading-snug">
            {INTERN_DATA.headline}
          </p>
          <p className="text-xs md:text-sm text-yellow-400/80 leading-relaxed font-normal">
            {INTERN_DATA.summary}
          </p>
        </div>

        {/* Key Engineering Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-6 relative z-10">
          {INTERN_DATA.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-yellow-400/15 bg-yellow-400/5 hover:border-yellow-400/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1.5">
                {idx === 0 && <Cpu size={14} className="text-yellow-400" />}
                {idx === 1 && <Sparkles size={14} className="text-yellow-400" />}
                {idx === 2 && <Layers size={14} className="text-yellow-400" />}
                {idx === 3 && <ShieldCheck size={14} className="text-yellow-400" />}
                <h4 className="font-mono text-xs font-black uppercase tracking-wider text-yellow-400">
                  {item.label}
                </h4>
              </div>
              <p className="text-[11px] leading-relaxed text-yellow-400/75">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2.5 py-3 border-y border-yellow-400/15 relative z-10">
          {INTERN_DATA.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <span className="block font-black text-lg md:text-xl text-white">
                {metric.value}
              </span>
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-yellow-400/60">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 pt-4 relative z-10">
          {INTERN_DATA.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 font-mono text-[10px] uppercase tracking-wider rounded-md"
            >
              #{skill}
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


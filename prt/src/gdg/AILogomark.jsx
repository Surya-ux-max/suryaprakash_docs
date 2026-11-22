import { motion } from "motion/react";

/**
 * AILogomark
 * Left-side visual anchor translating the user's sketch:
 * - "I AM ACTING AS" in commanding, bold, non-italic uppercase display typography
 * - "AI" in monumental font-black scale
 * - "DOMAIN LEAD" in heavy uppercase typography beneath
 * Pure code for fonts, layouts, and design.
 */
export default function AILogomark({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col items-center lg:items-start text-center lg:text-left select-none ${className}`}
    >
      {/* ── 1. "I AM ACTING AS" (Large, Bold, Non-Italic) ─────────────── */}
      <div className="flex flex-col font-black uppercase tracking-wider text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] drop-shadow-[0_2px_10px_rgba(250,204,21,0.2)]">
        <span>I AM ACTING</span>
        <span className="text-yellow-400/80 ml-0 lg:ml-6 mt-0.5">
          AS
        </span>
      </div>

      {/* ── 2. "AI" (Monumental Scale Display Typography) ─────────────── */}
      <div className="my-1 sm:my-2 leading-none">
        <h2
          className="font-black text-[min(28vh,18vw)] tracking-[-0.05em] leading-[0.8] text-yellow-400 drop-shadow-[4px_4px_0px_rgba(250,204,21,0.25)] select-none hover:scale-[1.02] transition-transform duration-200 cursor-default"
          title="Artificial Intelligence"
        >
          AI
        </h2>
      </div>

      {/* ── 3. "DOMAIN LEAD" (Large, Heavy, Non-Italic) ───────────────── */}
      <div className="font-black uppercase tracking-tight text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none mt-1 sm:mt-2 drop-shadow-[0_2px_10px_rgba(250,204,21,0.2)]">
        <span>DOMAIN LEAD</span>
      </div>
    </motion.div>
  );
}

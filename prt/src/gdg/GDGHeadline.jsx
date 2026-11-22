import { motion } from "motion/react";
import { GDG_DATA } from "./GDGData";

/**
 * GDGHeadline
 * The Right-Side Headline Template for the GDG Section.
 * Implements the signature portfolio headline pattern (Big Initial + Bold Name)
 * aligned to the right side of the screen as requested:
 * - Big "G" initial + "DG"
 * - "On Campus SECE" badge
 * - "Sri Eshwar College of Engineering" sub-label
 */
export default function GDGHeadline({ className = "" }) {
  const { chapter, institution } = GDG_DATA;

  return (
    <div className={`flex flex-col items-end text-right select-none ${className}`}>
      {/* ── Section Track Super-Label ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-2"
      >
        <span className="text-yellow-400/60 font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em]">
          Community Leadership
        </span>
        <div className="h-[2px] w-8 sm:w-12 bg-yellow-400" />
      </motion.div>

      {/* ── Signature Portfolio Headline Template: Big "G" + "DG" ──────── */}
      <div className="flex items-end leading-[0.8] justify-end">
        <h1 className="text-[min(20vh,13vw)] font-black tracking-[-0.08em] text-yellow-400 drop-shadow-[3px_3px_0px_rgba(250,204,21,0.2)]">
          G
        </h1>
        <span className="text-[min(8vh,5vw)] font-black tracking-[-0.04em] ml-[0.8vw] mb-[1.5vh] text-yellow-400">
          DG
        </span>
      </div>

      {/* ── "On Campus SECE" (Handwritten Sketch Line + High-Contrast Tag) ─ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-2.5 flex flex-col items-end gap-1"
      >
        {/* Sketch-accurate Handwritten Cursive + Print Monospace */}
        <div className="flex items-center gap-2 mb-1">
          <span
            style={{ fontFamily: "var(--font-cursive, 'Pinyon Script', cursive)" }}
            className="text-[min(4.5vh,3vw)] sm:text-3xl text-yellow-400/90 tracking-wide font-normal drop-shadow-[0_2px_8px_rgba(250,204,21,0.3)]"
          >
            On Campus
          </span>
          <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-yellow-400 border border-yellow-400/30 px-2 py-0.5 rounded bg-yellow-400/10">
            SECE
          </span>
        </div>

        {/* High-Contrast Interactive Chapter Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-yellow-400 text-black rounded-lg font-mono text-[11px] sm:text-xs font-black uppercase tracking-widest border-2 border-yellow-400 shadow-[3px_3px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span>{chapter}</span>
        </div>
        <span className="text-yellow-400/50 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider mt-0.5">
          {institution}
        </span>
      </motion.div>
    </div>
  );
}

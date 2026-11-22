import { motion } from "motion/react";

/**
 * GDGHeadline
 * The Right-Side Headline Template for the GDG Section.
 * Implements the signature portfolio headline pattern (Big Initial + Bold Name)
 * aligned to the right side of the screen as requested:
 * - Big "G" initial + "DG"
 * - Underneath: "On Campus SECE" (cursive "On Campus" + monospace "SECE")
 * Pure code for fonts, layouts, and design (no 3D or 2D graphics).
 */
export default function GDGHeadline({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col items-center lg:items-end text-center lg:text-right select-none ${className}`}
    >
      {/* ── Signature Portfolio Headline Template: Big "G" + "DG" ──────── */}
      <div className="flex items-end leading-[0.8] justify-center lg:justify-end">
        <h1 className="text-[min(24vh,16vw)] font-black tracking-[-0.08em] text-yellow-400 drop-shadow-[3px_3px_0px_rgba(250,204,21,0.2)]">
          G
        </h1>
        <span className="text-[min(10vh,6.5vw)] font-black tracking-[-0.04em] ml-[1vw] mb-[2vh] text-yellow-400">
          DG
        </span>
      </div>

      {/* ── Underneath: "On Campus SECE" (from User's Sketch) ─────────── */}
      <div className="mt-2 sm:mt-3 flex items-center gap-2.5 sm:gap-3">
        <span
          style={{ fontFamily: "var(--font-cursive, 'Pinyon Script', cursive)" }}
          className="text-[min(5vh,3.5vw)] sm:text-3xl md:text-4xl text-yellow-400 tracking-wide font-normal drop-shadow-[0_2px_8px_rgba(250,204,21,0.25)]"
        >
          On Campus
        </span>
        <span className="font-mono text-sm sm:text-base md:text-lg font-black tracking-[0.2em] text-yellow-400 uppercase">
          SECE
        </span>
      </div>
    </motion.div>
  );
}

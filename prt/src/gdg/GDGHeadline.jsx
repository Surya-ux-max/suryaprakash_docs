import { motion } from "motion/react";

/**
 * GDGHeadline
 * The Right-Side Headline Template for the GDG Section.
 * Implements the signature portfolio headline pattern (Big Initial + Bold Name)
 * aligned to the right side of the screen:
 * - Monumental "G" initial + "DG"
 * - Underneath: "ON CAMPUS SECE" in large, bold, non-italic uppercase display typography
 * Pure code for fonts, layouts, and design.
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
      {/* ── Signature Portfolio Headline Template: Monumental "G" + "DG" ── */}
      <div className="flex items-end leading-[0.78] justify-center lg:justify-end">
        <h1 className="text-[min(32vh,22vw)] font-black tracking-[-0.08em] text-yellow-400 drop-shadow-[4px_4px_0px_rgba(250,204,21,0.25)]">
          G
        </h1>
        <span className="text-[min(13vh,9vw)] font-black tracking-[-0.04em] ml-[1vw] mb-[2vh] text-yellow-400">
          DG
        </span>
      </div>

      {/* ── Underneath: "ON CAMPUS SECE" (Large, Bold, Non-Italic) ───── */}
      <div className="mt-3 sm:mt-4 md:mt-5">
        <span className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] sm:tracking-[0.25em] text-yellow-400 uppercase block drop-shadow-[0_2px_10px_rgba(250,204,21,0.2)]">
          ON CAMPUS SECE
        </span>
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";

/**
 * AILogomark
 * Left-side visual anchor directly translating the user's hand-drawn sketch:
 * - "I am acting as" in elegant cursive handwriting (Pinyon Script)
 * - "AI" in monumental display font with hollow outline & hover fill
 * - "Domain lead" in flowing calligraphic script beneath
 * Pure code for fonts, layout, and design (no 3D or 2D graphics).
 */
export default function AILogomark({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col items-center lg:items-start select-none ${className}`}
    >
      {/* ── 1. "I am acting as" in Flowing Cursive Script (Sketch Layout) ── */}
      <div
        style={{ fontFamily: "var(--font-cursive, 'Pinyon Script', cursive)" }}
        className="text-[min(5.5vh,3.8vw)] sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400 tracking-wide font-normal leading-[1.05] drop-shadow-[0_2px_8px_rgba(250,204,21,0.25)]"
      >
        <span>I am acting</span>
        <span className="block ml-6 sm:ml-10 text-yellow-400/90 -mt-1 sm:-mt-2">
          as
        </span>
      </div>

      {/* ── 2. "AI" (Pure Code for Fonts — Hollow Outline with Hover Fill) ── */}
      <div className="my-1 sm:my-2 leading-none">
        <span
          className="font-black text-[min(22vh,15vw)] tracking-[-0.04em] leading-[0.85] text-transparent [-webkit-text-stroke:2.5px_#facc15] sm:[-webkit-text-stroke:3.5px_#facc15] lg:[-webkit-text-stroke:4px_#facc15] hover:text-yellow-400 transition-colors duration-300 drop-shadow-[0_0_20px_rgba(250,204,21,0.2)] inline-block cursor-default"
          title="Artificial Intelligence"
        >
          AI
        </span>
      </div>

      {/* ── 3. "Domain lead" in Calligraphic Cursive Script ───────────── */}
      <div
        style={{ fontFamily: "var(--font-cursive, 'Pinyon Script', cursive)" }}
        className="text-[min(6.5vh,4.5vw)] sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400 tracking-wide font-normal drop-shadow-[0_2px_10px_rgba(250,204,21,0.3)] -mt-1 sm:-mt-2"
      >
        <span>Domain lead</span>
      </div>
    </motion.div>
  );
}

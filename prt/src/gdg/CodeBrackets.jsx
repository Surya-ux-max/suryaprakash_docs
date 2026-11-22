import { motion } from "motion/react";

/**
 * CodeBrackets
 * The iconic `< >` developer code brackets positioned in the center,
 * bridging the AI Domain Lead and GDG on Campus SECE.
 * Pure code for fonts and layout: rendered using hollow outline typography matching the sketch.
 */
export default function CodeBrackets({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      whileHover={{ scale: 1.08 }}
      className={`relative flex items-center justify-center select-none cursor-default py-4 lg:py-0 ${className}`}
      title="Google Developer Emblem < >"
    >
      <span className="font-mono text-[min(14vh,9vw)] font-black text-transparent [-webkit-text-stroke:2.5px_#facc15] sm:[-webkit-text-stroke:3.5px_#facc15] lg:[-webkit-text-stroke:4px_#facc15] hover:text-yellow-400 transition-colors duration-300 tracking-[0.2em] sm:tracking-[0.25em] drop-shadow-[0_0_18px_rgba(250,204,21,0.3)]">
        &lt;&nbsp;&gt;
      </span>
    </motion.div>
  );
}

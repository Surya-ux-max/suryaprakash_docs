import { motion } from "motion/react";
import { GDG_DATA } from "./GDGData";

/**
 * AILogomark
 * Left-side visual anchor directly translating the user's hand-drawn sketch:
 * - "I am acting as" in elegant cursive handwriting (Pinyon Script)
 * - Monumental 3D Block Letters "AI" with isometric extrusion shadows
 * - "Domain lead" in flowing calligraphic script beneath
 */
export default function AILogomark({ className = "", isHovered = false }) {
  const { roleSuffix } = GDG_DATA;

  return (
    <div
      className={`relative flex flex-col items-start justify-center select-none ${className}`}
    >
      {/* ── 1. "I am acting as" in Flowing Cursive Script (Sketch Layout) ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 -mb-2 sm:-mb-3 md:-mb-4 pl-1 sm:pl-2"
      >
        <div
          style={{ fontFamily: "var(--font-cursive, 'Pinyon Script', cursive)" }}
          className="text-[min(4.8vh,3.5vw)] sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400/90 tracking-wide font-normal drop-shadow-[0_2px_8px_rgba(250,204,21,0.3)] leading-[1.05]"
        >
          <span>I am acting</span>
          <span className="block ml-6 sm:ml-10 text-yellow-400/80 -mt-0.5 sm:-mt-1">as</span>
        </div>
      </motion.div>

      {/* ── 2. Monumental 3D Block Letters "AI" (From the Sketch) ──────── */}
      <motion.div
        animate={{
          scale: isHovered ? 1.03 : 1,
          rotate: isHovered ? [-0.5, 0.5, -0.5] : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative z-20 my-1 sm:my-2 drop-shadow-[0_0_24px_rgba(250,204,21,0.25)]"
      >
        <svg
          viewBox="0 0 340 180"
          className="w-[min(65vw,280px)] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto overflow-visible"
        >
          <defs>
            {/* Front Face Gradient */}
            <linearGradient id="ai-face-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>

            {/* 3D Extrusion Shadow Gradient */}
            <linearGradient id="ai-3d-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#854d0e" />
              <stop offset="40%" stopColor="#3f2305" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* ── LETTER "A" ──────────────────────────────────────────────── */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <g id="letter-A">
            {/* 3D Isometric Extrusion Shadows (Shifted -14px X, +14px Y) */}
            {/* Outer Left Extrusion */}
            <polygon
              points="65,18 51,32 5,164 19,150"
              fill="url(#ai-3d-shadow)"
              stroke="#000"
              strokeWidth="2"
            />
            {/* Bottom Left Foot Extrusion */}
            <polygon
              points="19,150 5,164 55,164 69,150"
              fill="url(#ai-3d-shadow)"
              stroke="#000"
              strokeWidth="2"
            />
            {/* Bottom Right Foot Extrusion */}
            <polygon
              points="109,150 95,164 145,164 159,150"
              fill="url(#ai-3d-shadow)"
              stroke="#000"
              strokeWidth="2"
            />
            {/* Inner Triangle Extrusion */}
            <polygon
              points="89,52 75,66 109,112 123,98"
              fill="url(#ai-3d-shadow)"
              opacity="0.8"
            />

            {/* Front Face: Block Letter "A" */}
            <path
              fillRule="evenodd"
              d="
                M 65 18
                L 113 18
                L 159 150
                L 109 150
                L 98 116
                L 80 116
                L 69 150
                L 19 150
                Z
                M 89 52
                L 105 100
                L 73 100
                Z
              "
              fill="url(#ai-face-grad)"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* Inner Architectural Contour Accent on "A" */}
            <path
              d="M 68 24 L 110 24 L 152 144 L 114 144 L 102 110 L 76 110 L 64 144 L 26 144 Z"
              stroke="#ffffff"
              strokeWidth="1.2"
              fill="none"
              opacity="0.6"
            />
          </g>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* ── LETTER "I" ──────────────────────────────────────────────── */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <g id="letter-I">
            {/* 3D Isometric Extrusion Shadows (Shifted -14px X, +14px Y) */}
            {/* Top Serif Left Extrusion */}
            <polygon
              points="180,18 166,32 166,54 180,40"
              fill="url(#ai-3d-shadow)"
              stroke="#000"
              strokeWidth="2"
            />
            {/* Stem Left Extrusion */}
            <polygon
              points="218,40 204,54 204,142 218,128"
              fill="url(#ai-3d-shadow)"
              stroke="#000"
              strokeWidth="2"
            />
            {/* Bottom Base Extrusion */}
            <polygon
              points="180,150 166,164 266,164 280,150"
              fill="url(#ai-3d-shadow)"
              stroke="#000"
              strokeWidth="2"
            />

            {/* Front Face: Block Slab Serif "I" */}
            <path
              d="
                M 180 18
                L 280 18
                L 280 40
                L 242 40
                L 242 128
                L 280 128
                L 280 150
                L 180 150
                L 180 128
                L 218 128
                L 218 40
                L 180 40
                Z
              "
              fill="url(#ai-face-grad)"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* Inner Architectural Contour Accent on "I" */}
            <path
              d="M 186 24 L 274 24 L 274 34 L 236 34 L 236 134 L 274 134 L 274 144 L 186 144 L 186 134 L 224 134 L 224 34 L 186 34 Z"
              stroke="#ffffff"
              strokeWidth="1.2"
              fill="none"
              opacity="0.6"
            />
          </g>
        </svg>
      </motion.div>

      {/* ── 3. "Domain lead" in Calligraphic Cursive Script ───────────── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 -mt-2 sm:-mt-4 md:-mt-6 pl-3 sm:pl-6"
      >
        <span
          style={{ fontFamily: "var(--font-cursive, 'Pinyon Script', cursive)" }}
          className="text-[min(7vh,5vw)] sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 tracking-wide font-normal drop-shadow-[0_2px_12px_rgba(250,204,21,0.4)] block"
        >
          {roleSuffix}
        </span>
      </motion.div>
    </div>
  );
}

import { motion } from "motion/react";
import { GDG_DATA } from "./GDGData";

/**
 * CodeBrackets
 * The iconic `< >` developer code bracket emblem inspired directly by the user's sketch.
 * Positioned in the center of the section bridging the AI Domain Lead and GDG On Campus SECE.
 * Features:
 * - Geometric chamfered vector brackets `<` and `>`
 * - Interactive hover expansion with ambient neon glow
 * - Google Developer 4-color status micro-nodes
 * - Pulsing central laser circuit connection
 */
export default function CodeBrackets({ className = "", isHovered = false, onToggle }) {
  const { googleColors } = GDG_DATA;

  return (
    <motion.div
      onClick={onToggle}
      animate={{
        scale: isHovered ? 1.08 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex items-center justify-center cursor-pointer select-none group ${className}`}
      title="Google Developer Emblem — Click to view track highlights"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle?.();
        }
      }}
    >
      {/* ── Ambient Radial Glow Bloom ────────────────────────────────────── */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-full ${
          isHovered ? "opacity-100" : "opacity-35"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(250,204,21,0.22) 0%, rgba(250,204,21,0.05) 50%, transparent 75%)",
          filter: "blur(24px)",
        }}
      />

      {/* ── Central Code Brackets SVG `< >` ──────────────────────────────── */}
      <svg
        viewBox="0 0 220 180"
        className="w-32 h-24 sm:w-44 sm:h-32 md:w-56 md:h-40 xl:w-64 xl:h-48 overflow-visible drop-shadow-[0_0_16px_rgba(250,204,21,0.45)]"
      >
        <defs>
          {/* Neon gold stroke filter */}
          <filter id="bracket-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#facc15" floodOpacity="0.85" />
          </filter>

          {/* Linear gradient for bracket fill */}
          <linearGradient id="bracket-fill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#facc15" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#facc15" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* ── Left Angle Bracket `<` ────────────────────────────────────── */}
        <motion.path
          animate={{
            x: isHovered ? -8 : 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          d="
            M 85 25
            L 25 90
            L 85 155
            L 98 142
            L 50 90
            L 98 38
            Z
          "
          fill="url(#bracket-fill-grad)"
          stroke="#facc15"
          strokeWidth="3.5"
          strokeLinejoin="miter"
          filter={isHovered ? "url(#bracket-glow)" : undefined}
        />

        {/* Left Bracket 3D Depth Underline */}
        <motion.path
          animate={{ x: isHovered ? -8 : 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          d="M 98 142 L 85 155 L 89 162 L 105 148 Z"
          fill="#ca8a04"
          opacity="0.6"
        />

        {/* ── Right Angle Bracket `>` ───────────────────────────────────── */}
        <motion.path
          animate={{
            x: isHovered ? 8 : 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          d="
            M 135 25
            L 195 90
            L 135 155
            L 122 142
            L 170 90
            L 122 38
            Z
          "
          fill="url(#bracket-fill-grad)"
          stroke="#facc15"
          strokeWidth="3.5"
          strokeLinejoin="miter"
          filter={isHovered ? "url(#bracket-glow)" : undefined}
        />

        {/* Right Bracket 3D Depth Underline */}
        <motion.path
          animate={{ x: isHovered ? 8 : 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          d="M 135 155 L 122 142 L 118 148 L 131 162 Z"
          fill="#ca8a04"
          opacity="0.6"
        />

        {/* ── Central Dynamic Energy Line & Google Tech Dots ────────────── */}
        {/* Horizontal Laser Core between brackets */}
        <motion.line
          animate={{
            opacity: isHovered ? [0.4, 1, 0.4] : 0.3,
            strokeDashoffset: isHovered ? [0, -20] : 0,
          }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          x1="65"
          y1="90"
          x2="155"
          y2="90"
          stroke="#facc15"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* Google 4-Color Micro Orbit Nodes (Subtle, high-precision developer tribute) */}
        <g id="google-dots" opacity={isHovered ? "1" : "0.75"}>
          {/* Blue */}
          <circle cx="95" cy="85" r="3" fill={googleColors.blue} />
          {/* Red */}
          <circle cx="105" cy="95" r="3" fill={googleColors.red} />
          {/* Yellow */}
          <circle cx="115" cy="85" r="3" fill={googleColors.yellow} />
          {/* Green */}
          <circle cx="125" cy="95" r="3" fill={googleColors.green} />
        </g>
      </svg>
    </motion.div>
  );
}

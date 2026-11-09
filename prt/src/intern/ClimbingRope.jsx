import { useState } from "react";
import { motion } from "motion/react";
import { RopeClimber } from "./TinyHumans";

/**
 * ClimbingRope
 * High-visibility industrial climbing rope suspended from the rooftop crane.
 * Features:
 * - Dual-tone braided hazard pattern (bold black & bright safety yellow).
 * - Gentle continuous atmospheric wind sway so visitors spot it immediately.
 * - Prominent interactive beacon & pointer tag ("← HOVER TO CLIMB // AGENTIC AI INTERN").
 * - Dynamic tactile spring tension when hovered or clicked.
 * - Coordinates climber ascent and reveals the Agentic AI Intern details card.
 */
export default function ClimbingRope({ isHovered, onHoverChange, onToggle }) {
  const [localHover, setLocalHover] = useState(false);
  const active = isHovered ?? localHover;

  const handleEnter = () => {
    setLocalHover(true);
    onHoverChange?.(true);
  };

  const handleLeave = () => {
    setLocalHover(false);
    onHoverChange?.(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onToggle?.();
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className="absolute top-[4%] bottom-[4%] left-[64%] md:left-[66%] w-36 -translate-x-1/2 z-30 cursor-pointer group select-none flex flex-col items-center justify-between"
      aria-label="Climbing rope - Hover to view Agentic AI Intern details"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle?.();
        }
      }}
    >
      {/* ── Extended Hit Box (Generous 160px width for effortless hover) ── */}
      <div className="absolute inset-y-0 w-40 -translate-x-1/2 left-1/2 z-10" />

      {/* ── Interactive Callout Pointer Badge (Directs New Visitors) ───── */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{
          opacity: 1,
          x: active ? [0, -3, 0] : [0, 4, 0],
          scale: active ? 1.05 : 1,
        }}
        transition={{
          x: { repeat: Infinity, duration: active ? 1 : 2.2, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className={`absolute top-[42%] left-[65%] z-40 whitespace-nowrap px-3.5 py-1.5 rounded-full font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider border-2 transition-all duration-300 pointer-events-none drop-shadow-[4px_4px_0px_#000] flex items-center gap-2 ${
          active
            ? "bg-black text-yellow-400 border-black shadow-[4px_4px_0px_#facc15]"
            : "bg-black text-yellow-400 border-yellow-400 animate-bounce"
        }`}
      >
        {/* Pulsing Target Beacon Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-80" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400" />
        </span>

        {/* Dynamic Directive Text */}
        <span className="flex items-center gap-1.5">
          <span>{active ? "✦ ASCENDING" : "← HOVER ROPE"}</span>
          <span className="opacity-60 hidden sm:inline">//</span>
          <span className="hidden sm:inline font-bold">
            {active ? "ROLE REVEALED" : "AGENTIC AI INTERN"}
          </span>
        </span>
      </motion.div>

      {/* ── SVG High-Vis Braided Rope ─────────────────────────────────── */}
      <motion.svg
        animate={{
          rotate: active ? [0, 1.2, -1.2, 0] : [-0.8, 0.8, -0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: active ? 1.6 : 4,
          ease: "easeInOut",
        }}
        className="w-10 h-full overflow-visible z-20 pointer-events-none drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]"
        preserveAspectRatio="none"
        viewBox="0 0 40 600"
      >
        <defs>
          {/* Braided Hazard Rope Texture */}
          <pattern id="hazard-braid" width="12" height="16" patternUnits="userSpaceOnUse">
            <rect width="12" height="16" fill="#000" />
            <polygon points="0,0 6,0 12,8 12,14 6,6 0,6" fill="#facc15" />
            <polygon points="0,8 6,8 12,16 6,16 0,14" fill="#facc15" />
          </pattern>

          {/* High-voltage active glow filter */}
          <filter id="active-rope-glow" x="-40%" y="-10%" width="180%" height="120%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#facc15" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Heavy Black Under-Shadow (High-contrast against any building facet) */}
        <motion.path
          animate={{
            d: active
              ? "M 22 0 Q 32 150 22 300 Q 12 450 22 600"
              : "M 22 0 Q 24 150 22 300 Q 20 450 22 600",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          stroke="#000"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />

        {/* Outer Glow / Halo when active */}
        {active && (
          <motion.path
            d="M 20 0 Q 30 150 20 300 Q 10 450 20 600"
            stroke="#facc15"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
            filter="url(#active-rope-glow)"
          />
        )}

        {/* Main Kernmantle Braided Core (Vibrant Yellow) */}
        <motion.path
          animate={{
            d: active
              ? "M 20 0 Q 30 150 20 300 Q 10 450 20 600"
              : "M 20 0 Q 22 150 20 300 Q 18 450 20 600",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          stroke="#facc15"
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* High-Contrast Black Spiral Hazard Stripes */}
        <motion.path
          animate={{
            d: active
              ? "M 20 0 Q 30 150 20 300 Q 10 450 20 600"
              : "M 20 0 Q 22 150 20 300 Q 18 450 20 600",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          stroke="#000"
          strokeWidth="4"
          strokeDasharray="8 8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary White/Gold Reflective Tracer Strand */}
        <motion.path
          animate={{
            d: active
              ? "M 20 0 Q 30 150 20 300 Q 10 450 20 600"
              : "M 20 0 Q 22 150 20 300 Q 18 450 20 600",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          stroke="#fff"
          strokeWidth="1.5"
          strokeDasharray="4 12"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />

        {/* Tactical Climbing Knots & Steel Ring Hardware at 4 Key Intervals */}
        {[80, 200, 340, 480].map((knotY) => (
          <g key={knotY}>
            <ellipse
              cx="20"
              cy={knotY}
              rx="6.5"
              ry="5"
              fill="#000"
              stroke="#facc15"
              strokeWidth="2"
            />
            <circle cx="20" cy={knotY} r="2" fill="#facc15" />
          </g>
        ))}
      </motion.svg>

      {/* ── Climber Micro-Figure Clipped to Rope ───────────────────────── */}
      <RopeClimber progress={active ? 0.40 : 0.48} isHovered={active} />

      {/* ── Bottom Anchor Label (Near the Ground Crew) ──────────────────── */}
      <motion.div
        animate={{
          scale: active ? 1.08 : 1,
          y: active ? -2 : 0,
        }}
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full font-mono text-[9px] md:text-[10px] font-black uppercase tracking-widest border-2 transition-all duration-300 pointer-events-none drop-shadow-[2px_2px_0px_#000] ${
          active
            ? "bg-yellow-400 text-black border-black shadow-[2px_2px_0px_#000]"
            : "bg-black text-yellow-400 border-yellow-400/60 group-hover:border-yellow-400"
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:animate-ping" />
          {active ? "Tension Locked" : "Rope Hoist 420M"}
        </span>
      </motion.div>
    </div>
  );
}

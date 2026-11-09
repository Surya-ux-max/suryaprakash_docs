import { useState } from "react";
import { motion } from "motion/react";
import { RopeClimber } from "./TinyHumans";

/**
 * ClimbingRope
 * High-visibility industrial climbing rope suspended from the rooftop crane.
 * Features:
 * - Dual-tone braided hazard pattern (bold black & bright safety yellow).
 * - Gentle continuous wind sway for immediate visual discovery.
 * - Minimal, non-intrusive interactive beacon indicator.
 * - Dynamic tactile spring tension when hovered or clicked.
 * - Coordinates climber ascent and triggers the InternCard.
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
      className="absolute top-[4%] bottom-[4%] left-[64%] md:left-[66%] w-32 -translate-x-1/2 z-30 cursor-pointer group select-none flex flex-col items-center justify-between"
      aria-label="Climbing rope - Inspect Intern details"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle?.();
        }
      }}
    >
      {/* ── Extended Hit Box (Generous width for effortless hover) ── */}
      <div className="absolute inset-y-0 w-36 -translate-x-1/2 left-1/2 z-10" />

      {/* ── Minimalist Visual Beacon Cue ─────────────────────────────── */}
      <motion.div
        animate={{
          x: active ? [0, -3, 0] : [0, 4, 0],
          scale: active ? 1.08 : 1,
        }}
        transition={{
          x: { repeat: Infinity, duration: active ? 1 : 2, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 320, damping: 20 },
        }}
        className={`absolute top-[44%] left-[68%] z-40 px-2.5 py-1 rounded-full border-2 transition-all duration-300 pointer-events-none drop-shadow-[3px_3px_0px_#000] flex items-center gap-1.5 ${
          active
            ? "bg-black text-yellow-400 border-black shadow-[3px_3px_0px_#facc15]"
            : "bg-black text-yellow-400 border-yellow-400 animate-bounce"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-80" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
        </span>
        <span className="font-mono text-[10px] font-black uppercase tracking-wider">
          {active ? "✦" : "←"}
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
          <filter id="active-rope-glow" x="-40%" y="-10%" width="180%" height="120%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#facc15" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Heavy Black Under-Shadow (High-contrast against building facets) */}
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

        {/* Tactical Climbing Knots & Steel Hardware at Intervals */}
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
    </div>
  );
}

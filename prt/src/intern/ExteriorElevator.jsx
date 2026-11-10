import { useState } from "react";
import { motion } from "motion/react";

/**
 * ExteriorElevator
 * Futuristic high-tech exterior glass capsule elevator running along the facade
 * of the "I" monolith skyscraper. A modern, eye-catching replacement for the rope.
 * Features:
 * - Magnetic levitation vertical guide tracks with pulse nodes
 * - Panoramic curved glass capsule car with illuminated interior AI Agent cockpit
 * - High-intensity downward headlights casting dynamic light on the facade
 * - Smooth gliding ascent on hover/click with spring physics
 * - Reveals the Agentic AI Intern card
 */
export default function ExteriorElevator({ isHovered, onHoverChange, onToggle }) {
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
      className="absolute top-[8%] bottom-[8%] left-[64%] md:left-[66%] w-28 sm:w-32 -translate-x-1/2 z-30 cursor-pointer group select-none flex flex-col items-center justify-between"
      aria-label="Exterior Glass Elevator - Inspect Agentic AI Intern details"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle?.();
        }
      }}
    >
      {/* ── Extended Hit Box (Generous 140px width for effortless hover) ── */}
      <div className="absolute inset-y-0 w-36 -translate-x-1/2 left-1/2 z-10" />

      {/* ── 1. Vertical Structural Steel Elevator Track & Magnetic Guide ── */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 flex justify-between pointer-events-none z-15">
        {/* Left steel rail */}
        <div className="w-[3px] h-full bg-black shadow-[1px_0px_0px_#facc15]" />
        {/* Central magnetic cable */}
        <div className="w-[1.5px] h-full bg-yellow-400/50" />
        {/* Right steel rail */}
        <div className="w-[3px] h-full bg-black shadow-[-1px_0px_0px_#facc15]" />

        {/* Track Floor Markers & Magnetic Pulse Rings */}
        {[15, 35, 55, 75, 95].map((pct) => (
          <div
            key={pct}
            style={{ top: `${pct}%` }}
            className="absolute left-1/2 -translate-x-1/2 w-6 h-[2px] bg-black border-y border-yellow-400"
          />
        ))}
      </div>

      {/* ── 2. The Futuristic Exterior Glass Capsule Elevator Car ───────── */}
      <motion.div
        animate={{
          top: active ? "24%" : "54%",
          scale: active ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 20,
        }}
        className="absolute left-1/2 -translate-x-1/2 z-25 flex flex-col items-center pointer-events-none drop-shadow-[5px_5px_0px_rgba(0,0,0,0.85)]"
      >
        {/* Downward Spotlight Cone Beam on the Facade */}
        <motion.div
          animate={{
            opacity: active ? 0.9 : 0.45,
            height: active ? 140 : 80,
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-1/2 -translate-x-1/2 w-20 pointer-events-none"
          style={{
            background:
              "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(250,204,21,0.6) 0%, rgba(250,204,21,0.15) 50%, transparent 100%)",
            clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Interactive Callout Beacon Cue */}
        <motion.div
          animate={{
            x: active ? [0, -3, 0] : [0, 4, 0],
            scale: active ? 1.05 : 1,
          }}
          transition={{
            x: { repeat: Infinity, duration: active ? 1 : 2, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className={`absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-0.5 rounded-full font-mono text-[9px] font-black uppercase tracking-wider border-2 transition-all duration-300 drop-shadow-[2px_2px_0px_#000] flex items-center gap-1.5 ${
            active
              ? "bg-black text-yellow-400 border-black shadow-[3px_3px_0px_#facc15]"
              : "bg-black text-yellow-400 border-yellow-400 animate-bounce"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
          </span>
          <span>{active ? "FL 42 // ASCENDING" : "⚡ POD ELEVATOR"}</span>
        </motion.div>

        {/* ── Glass Elevator Car SVG ────────────────────────────────────── */}
        <svg
          viewBox="0 0 74 100"
          className="w-16 h-22 sm:w-18 sm:h-24 overflow-visible"
        >
          <defs>
            {/* Glass capsule reflection gradient */}
            <linearGradient id="pod-glass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#facc15" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.5" />
            </linearGradient>

            {/* Glowing cockpit core */}
            <radialGradient id="cockpit-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
            </radialGradient>
          </defs>

          {/* Top Suspension Coupling Bracket */}
          <rect x="27" y="2" width="20" height="8" rx="2" fill="#000" stroke="#facc15" strokeWidth="1.5" />
          <line x1="37" y1="2" x2="37" y2="0" stroke="#facc15" strokeWidth="2.5" />

          {/* Aerodynamic Capsule Shell (Black Steel Chassis) */}
          <rect
            x="8"
            y="8"
            width="58"
            height="80"
            rx="20"
            fill="#050505"
            stroke="#000"
            strokeWidth="3.5"
          />

          {/* Panoramic Curved Glass Observation Window */}
          <rect
            x="12"
            y="14"
            width="50"
            height="64"
            rx="16"
            fill="url(#pod-glass)"
            stroke="#facc15"
            strokeWidth="2"
          />

          {/* Interior Agent Cockpit Ambient Glow */}
          <circle cx="37" cy="46" r="18" fill="url(#cockpit-glow)" opacity="0.75" />

          {/* AI Intern Silhouette Passenger inside Capsule */}
          <ellipse cx="37" cy="38" rx="5.5" ry="4" fill="#facc15" stroke="#000" strokeWidth="1.8" />
          <circle cx="37" cy="43" r="3.5" fill="#000" />
          <path d="M 32 48 L 42 48 L 40 64 L 34 64 Z" fill="#000" />
          {/* Holographic interface console in front of agent */}
          <rect x="25" y="56" width="24" height="6" rx="1.5" fill="#facc15" stroke="#000" strokeWidth="1" />
          <line x1="28" y1="59" x2="46" y2="59" stroke="#000" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* Vertical Glass Reflection Sheen Arc */}
          <path
            d="M 18 24 Q 22 46 22 66"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Bottom High-Output Spotlights / Propulsion Housing */}
          <rect x="14" y="82" width="46" height="12" rx="4" fill="#000" stroke="#facc15" strokeWidth="2" />
          {/* Left headlight */}
          <circle cx="26" cy="88" r="4" fill="#facc15" stroke="#000" strokeWidth="1.5" className="animate-pulse" />
          {/* Right headlight */}
          <circle cx="48" cy="88" r="4" fill="#facc15" stroke="#000" strokeWidth="1.5" className="animate-pulse" />
        </svg>

        {/* Ambient Propulsion Glow when active */}
        {active && (
          <span className="absolute -bottom-2 flex h-4 w-12">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
            <span className="relative inline-flex h-2 w-12 rounded-full bg-yellow-400" />
          </span>
        )}
      </motion.div>
    </div>
  );
}


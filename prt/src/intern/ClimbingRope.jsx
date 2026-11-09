import { useState } from "react";
import { motion } from "motion/react";
import { RopeClimber } from "./TinyHumans";

/**
 * ClimbingRope
 * Tactile vertical climbing rope dropped from the top of the "I" building.
 * Hovering or clicking the rope vibrates the rope, moves the climber,
 * and triggers the Agentic AI Intern details panel.
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
      className="absolute top-[8%] bottom-[5%] left-[58%] md:left-[60%] w-24 -translate-x-1/2 z-25 cursor-pointer group select-none flex flex-col items-center justify-between"
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
      {/* Invisible expanded hit area for effortless hovering */}
      <div className="absolute inset-y-0 w-28 -translate-x-1/2 left-1/2 z-10" />

      {/* SVG Rope with dynamic sway animation */}
      <svg
        className="w-8 h-full overflow-visible z-20 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 32 600"
      >
        <defs>
          {/* Braided rope pattern */}
          <pattern id="rope-texture" width="8" height="12" patternUnits="userSpaceOnUse">
            <line x1="1" y1="2" x2="7" y2="10" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="7" y1="2" x2="1" y2="10" stroke="#facc15" strokeWidth="1" strokeLinecap="round" />
          </pattern>
          {/* Glowing rope pulse on hover */}
          <filter id="rope-glow" x="-30%" y="-10%" width="160%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Rope shadow against the building */}
        <motion.path
          animate={{
            d: active
              ? "M 19 0 Q 26 150 19 300 Q 12 450 19 600"
              : "M 19 0 Q 19 150 19 300 Q 19 450 19 600",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="6"
          fill="none"
        />

        {/* Main braided rope */}
        <motion.path
          animate={{
            d: active
              ? "M 16 0 Q 23 150 16 300 Q 9 450 16 600"
              : "M 16 0 Q 16 150 16 300 Q 16 450 16 600",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          stroke="#000"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          filter={active ? "url(#rope-glow)" : undefined}
        />

        {/* Braided yellow climbing tracer thread */}
        <motion.path
          animate={{
            d: active
              ? "M 16 0 Q 23 150 16 300 Q 9 450 16 600"
              : "M 16 0 Q 16 150 16 300 Q 16 450 16 600",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          stroke="#facc15"
          strokeWidth="1.8"
          strokeDasharray="4 6"
          fill="none"
        />

        {/* Knot marks along the rope */}
        {[100, 220, 360, 490].map((knotY) => (
          <ellipse
            key={knotY}
            cx="16"
            cy={knotY}
            rx="4.5"
            ry="3.5"
            fill="#000"
            stroke="#facc15"
            strokeWidth="1.2"
          />
        ))}
      </svg>

      {/* Climber human clipped onto the rope */}
      <RopeClimber progress={active ? 0.46 : 0.52} isHovered={active} />

      {/* Interactive Floating Hover Pill */}
      <motion.div
        animate={{
          scale: active ? 1.05 : 1,
          y: active ? -2 : 0,
        }}
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full font-mono text-[10px] md:text-xs font-black uppercase tracking-widest border-2 transition-all duration-300 pointer-events-none ${
          active
            ? "bg-black text-yellow-400 border-black shadow-[3px_3px_0px_#000]"
            : "bg-yellow-400/90 text-black border-black/50 group-hover:bg-black group-hover:text-yellow-400"
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:animate-ping" />
          {active ? "Rope Engaged" : "Hover Rope"}
        </span>
      </motion.div>
    </div>
  );
}


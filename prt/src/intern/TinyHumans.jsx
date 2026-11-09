import { motion } from "motion/react";

/**
 * TinyHumans
 * Stylized silhouette micro-figures that give gigantic architectural scale
 * to the "I" monolith building.
 */
export function RooftopWorker({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className={`relative select-none pointer-events-none ${className}`}
      title="Rooftop Hoisting Engineer"
    >
      <svg
        viewBox="0 0 64 64"
        className="w-10 h-10 md:w-12 md:h-12 overflow-visible"
        fill="currentColor"
      >
        {/* Crane / Girder mount on roof */}
        <path
          d="M 6 56 L 36 56 L 36 32 L 56 32 M 36 40 L 48 32 M 36 48 L 56 40"
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Pulley wheel at crane tip */}
        <circle cx="56" cy="32" r="4.5" fill="#facc15" stroke="#000" strokeWidth="2.5" />
        <circle cx="56" cy="32" r="1.5" fill="#000" />

        {/* Worker standing beside crane, leaning over */}
        {/* Yellow Hardhat */}
        <ellipse cx="24" cy="22" rx="4.5" ry="3" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        {/* Head */}
        <circle cx="24" cy="26" r="3" fill="#000" />
        {/* Torso leaning right */}
        <path d="M 22 29 L 28 32 L 29 44 L 21 44 Z" fill="#000" />
        {/* Safety vest streak */}
        <line x1="23" y1="31" x2="27" y2="43" stroke="#facc15" strokeWidth="1.5" />
        {/* Arms reaching to crane rope */}
        <path d="M 25 32 L 38 33 L 52 33" stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Legs */}
        <path d="M 23 44 L 20 56 M 28 44 L 30 56" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

export function RopeClimber({ progress = 0.52, isHovered = false }) {
  return (
    <motion.div
      animate={{
        y: isHovered ? [0, -6, 0] : [0, 2, 0],
        rotate: isHovered ? [-3, 3, -3] : [-1, 1, -1],
      }}
      transition={{
        repeat: Infinity,
        duration: isHovered ? 1.2 : 3,
        ease: "easeInOut",
      }}
      className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        left: "50%",
        top: `${progress * 100}%`,
      }}
      title="Ascending Agentic AI Climber"
    >
      <div className="relative">
        <svg
          viewBox="0 0 48 54"
          className="w-8 h-9 md:w-9 md:h-10 overflow-visible drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]"
          fill="currentColor"
        >
          {/* Carabiner / Ascender clip clamped to rope */}
          <rect x="22" y="8" width="5" height="10" rx="2.5" fill="#facc15" stroke="#000" strokeWidth="2" />
          <line x1="24.5" y1="18" x2="24.5" y2="28" stroke="#000" strokeWidth="2" />

          {/* Climber figure */}
          {/* Hardhat */}
          <ellipse cx="20" cy="18" rx="4" ry="2.8" fill="#facc15" stroke="#000" strokeWidth="1.5" />
          <circle cx="20" cy="22" r="3" fill="#000" />
          {/* Body */}
          <path d="M 18 24 L 24 25 L 23 37 L 17 36 Z" fill="#000" />
          {/* Yellow Harness */}
          <path d="M 17 30 L 24 31 M 20 24 L 21 37" stroke="#facc15" strokeWidth="1.2" />
          {/* Arms holding the rope */}
          <path d="M 19 26 L 24 16" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 21 28 L 24 22" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
          {/* Climbing legs braced against the building wall */}
          <path d="M 18 36 L 12 42 L 8 42" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 22 37 L 18 47 L 14 48" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        {/* Hover pulse indicator */}
        {isHovered && (
          <span className="absolute -top-2 -right-2 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400 border border-black" />
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function GroundCrew({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className={`relative select-none pointer-events-none ${className}`}
      title="Foundation Anchor Crew"
    >
      <svg
        viewBox="0 0 160 64"
        className="w-36 h-14 md:w-44 md:h-16 overflow-visible"
        fill="currentColor"
      >
        {/* Ground level baseline */}
        <line x1="0" y1="58" x2="160" y2="58" stroke="#000" strokeWidth="4" strokeLinecap="round" />

        {/* Heavy anchor stake hammered into ground */}
        <path d="M 60 58 L 74 38 L 78 38 L 66 58 Z" fill="#000" />
        {/* Tension spring / turnbuckle */}
        <circle cx="76" cy="38" r="4.5" fill="#facc15" stroke="#000" strokeWidth="2" />

        {/* Cable spool / winch drum */}
        <ellipse cx="44" cy="50" rx="9" ry="8" fill="#000" />
        <ellipse cx="44" cy="50" rx="4" ry="4" fill="#facc15" />
        <path d="M 44 42 L 68 40" stroke="#000" strokeWidth="2" strokeDasharray="2,2" />

        {/* Worker 1: Straining on the rope anchor (pulling backward) */}
        {/* Hardhat */}
        <ellipse cx="88" cy="29" rx="4.5" ry="3" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <circle cx="88" cy="33" r="3" fill="#000" />
        {/* Body braced backward */}
        <path d="M 87 36 L 93 39 L 88 50 L 82 48 Z" fill="#000" />
        <line x1="84" y1="41" x2="89" y2="49" stroke="#facc15" strokeWidth="1.5" />
        {/* Arms holding tension line */}
        <path d="M 88 40 L 76 38" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        {/* Braced legs */}
        <path d="M 84 48 L 78 58" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <path d="M 89 50 L 98 58" stroke="#000" strokeWidth="3" strokeLinecap="round" />

        {/* Worker 2: Standing with radio/clipboard gesturing upward */}
        {/* Hardhat */}
        <ellipse cx="124" cy="24" rx="4.5" ry="3" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <circle cx="124" cy="28" r="3" fill="#000" />
        {/* Body upright */}
        <path d="M 121 31 L 127 31 L 127 45 L 121 45 Z" fill="#000" />
        {/* Arm pointing upward */}
        <path d="M 125 34 L 134 24" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 122 35 L 118 40" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        {/* Standing legs */}
        <path d="M 123 45 L 122 58 M 126 45 L 128 58" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />

        {/* Safety hazard cone */}
        <polygon points="144,58 149,42 153,42 158,58" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <line x1="146" y1="50" x2="156" y2="50" stroke="#000" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}


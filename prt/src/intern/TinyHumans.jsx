import { motion } from "motion/react";

/**
 * TinyHumans
 * Stylized silhouette micro-figures that give architectural scale
 * to the "I" monolith building.
 */

// 1. Rooftop Crane Engineer
export function RooftopWorker({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={`relative select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 80 50"
        className="w-16 h-10 md:w-20 md:h-12 overflow-visible"
        fill="currentColor"
      >
        {/* Crane Tower Base on Roof */}
        <path
          d="M 10 44 L 28 44 L 28 20 L 70 20 M 28 28 L 44 20 M 28 36 L 56 20 M 28 20 L 16 28 L 10 44"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Crane Counterweight at back */}
        <rect x="8" y="24" width="7" height="10" rx="1.5" fill="#000" />
        {/* Pulley block at crane tip */}
        <circle cx="70" cy="20" r="4" fill="#facc15" stroke="#000" strokeWidth="2" />
        <circle cx="70" cy="20" r="1.5" fill="#000" />

        {/* Worker standing beside crane */}
        <ellipse cx="38" cy="14" rx="4" ry="2.8" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <circle cx="38" cy="18" r="2.8" fill="#000" />
        <path d="M 36 21 L 41 23 L 40 34 L 34 34 Z" fill="#000" />
        <line x1="37" y1="23" x2="39" y2="33" stroke="#facc15" strokeWidth="1.5" />
        {/* Arms gesturing to rope */}
        <path d="M 39 23 L 52 21 M 37 25 L 48 24" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        {/* Legs */}
        <path d="M 36 34 L 33 44 M 40 34 L 42 44" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />

        {/* Pulsing roof hazard beacon */}
        <circle cx="28" cy="16" r="2.5" fill="#ef4444" className="animate-pulse" />
      </svg>
    </motion.div>
  );
}

// 2. Ascending Rope Climber
export function RopeClimber({ progress = 0.5, isHovered = false }) {
  return (
    <motion.div
      animate={{
        y: isHovered ? [0, -5, 0] : [0, 2, 0],
        rotate: isHovered ? [-2, 2, -2] : [-1, 1, -1],
      }}
      transition={{
        repeat: Infinity,
        duration: isHovered ? 1.4 : 3,
        ease: "easeInOut",
      }}
      className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        left: "50%",
        top: `${progress * 100}%`,
      }}
    >
      <div className="relative">
        <svg
          viewBox="0 0 44 50"
          className="w-8 h-9 md:w-9 md:h-10 overflow-visible drop-shadow-[2px_2px_0px_rgba(0,0,0,0.7)]"
          fill="currentColor"
        >
          {/* Carabiner clamped to rope */}
          <rect x="20" y="6" width="4.5" height="9" rx="2.2" fill="#facc15" stroke="#000" strokeWidth="2" />

          {/* Climber Figure */}
          <ellipse cx="18" cy="16" rx="3.8" ry="2.6" fill="#facc15" stroke="#000" strokeWidth="1.5" />
          <circle cx="18" cy="20" r="2.8" fill="#000" />
          <path d="M 16 22 L 22 23 L 21 34 L 15 33 Z" fill="#000" />
          <line x1="16" y1="27" x2="21" y2="28" stroke="#facc15" strokeWidth="1.2" />
          {/* Hands holding ascending ascender */}
          <path d="M 17 24 L 22 14 M 19 26 L 22 20" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
          {/* Legs braced against building face */}
          <path d="M 16 33 L 10 39 L 6 39" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 20 34 L 16 43 L 12 44" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        {/* Hover beacon pin */}
        {isHovered && (
          <span className="absolute -top-1.5 -right-1.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black" />
          </span>
        )}
      </div>
    </motion.div>
  );
}

// 3. Ground Anchor Crew & Winch
export function GroundCrew({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className={`relative select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 160 56"
        className="w-36 h-12 md:w-44 md:h-14 overflow-visible"
        fill="currentColor"
      >
        {/* Steel baseline plate */}
        <line x1="0" y1="50" x2="160" y2="50" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />

        {/* Ground Stake & Tension Turnbuckle */}
        <path d="M 58 50 L 72 32 L 76 32 L 64 50 Z" fill="#000" />
        <circle cx="74" cy="32" r="4" fill="#facc15" stroke="#000" strokeWidth="2" />

        {/* Heavy cable drum / winch spool */}
        <ellipse cx="40" cy="42" rx="9" ry="8" fill="#000" />
        <ellipse cx="40" cy="42" rx="4" ry="4" fill="#facc15" />
        <path d="M 40 34 L 64 34" stroke="#000" strokeWidth="2" strokeDasharray="2,2" />

        {/* Worker 1: Straining on the rope anchor (pulling backward) */}
        <ellipse cx="86" cy="23" rx="4" ry="2.8" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <circle cx="86" cy="27" r="2.8" fill="#000" />
        <path d="M 85 30 L 91 33 L 86 44 L 80 42 Z" fill="#000" />
        <line x1="82" y1="35" x2="87" y2="43" stroke="#facc15" strokeWidth="1.5" />
        <path d="M 86 34 L 74 32" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 82 42 L 76 50 M 87 44 L 96 50" stroke="#000" strokeWidth="2.8" strokeLinecap="round" />

        {/* Worker 2: Standing with radio/clipboard */}
        <ellipse cx="120" cy="18" rx="4" ry="2.8" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <circle cx="120" cy="22" r="2.8" fill="#000" />
        <path d="M 117 25 L 123 25 L 123 39 L 117 39 Z" fill="#000" />
        <path d="M 121 28 L 130 18" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 119 39 L 118 50 M 122 39 L 124 50" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />

        {/* Safety hazard cone */}
        <polygon points="142,50 146,36 150,36 154,50" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <line x1="144" y1="44" x2="152" y2="44" stroke="#000" strokeWidth="1.8" />
      </svg>
    </motion.div>
  );
}

// 4. Suspended Platform / Cradle Worker (Left Flank)
export function SuspendedCradle({ className = "" }) {
  return (
    <motion.div
      animate={{ y: [-3, 3, -3] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
      className={`relative select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 60 70"
        className="w-12 h-14 md:w-14 md:h-16 overflow-visible"
        fill="currentColor"
      >
        {/* Suspension cables coming from roof */}
        <line x1="10" y1="0" x2="10" y2="44" stroke="#000" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="50" y1="0" x2="50" y2="44" stroke="#000" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Platform cradle basket */}
        <rect x="6" y="44" width="48" height="14" rx="2" fill="#000" />
        {/* Yellow toe-board & safety rail */}
        <line x1="8" y1="42" x2="52" y2="42" stroke="#facc15" strokeWidth="2" />
        <line x1="18" y1="42" x2="18" y2="46" stroke="#facc15" strokeWidth="1.5" />
        <line x1="30" y1="42" x2="30" y2="46" stroke="#facc15" strokeWidth="1.5" />
        <line x1="42" y1="42" x2="42" y2="46" stroke="#facc15" strokeWidth="1.5" />

        {/* Inspector figure in cradle */}
        <ellipse cx="30" cy="27" rx="3.5" ry="2.5" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <circle cx="30" cy="31" r="2.5" fill="#000" />
        <path d="M 28 34 L 33 34 L 32 44 L 27 44 Z" fill="#000" />
        {/* Holding safety blueprint / tablet */}
        <rect x="33" y="36" width="6" height="5" rx="1" fill="#facc15" stroke="#000" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}

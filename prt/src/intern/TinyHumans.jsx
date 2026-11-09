import { motion } from "motion/react";

/**
 * TinyHumans
 * Stylized high-contrast silhouette micro-figures that give architectural scale
 * to the "I" monolith building and construction scene.
 */

// 1. Rooftop Crane Engineer (Operates the rope hoist at top-right roof)
export function RooftopWorker({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={`relative select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 90 56"
        className="w-20 h-12 md:w-24 md:h-14 overflow-visible drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)]"
        fill="currentColor"
      >
        {/* Steel Crane Tower Base bolted to roof */}
        <path
          d="M 12 50 L 32 50 L 32 20 L 82 20 M 32 30 L 52 20 M 32 40 L 68 20 M 32 20 L 18 30 L 12 50"
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Crane Counterweight block at rear */}
        <rect x="8" y="24" width="9" height="12" rx="1.5" fill="#000" stroke="#facc15" strokeWidth="1" />
        
        {/* Heavy Pulley Wheel at Crane Tip (Where the rope suspends) */}
        <circle cx="82" cy="20" r="5" fill="#facc15" stroke="#000" strokeWidth="2.5" />
        <circle cx="82" cy="20" r="2" fill="#000" />

        {/* Rooftop Engineer Figure */}
        {/* High-vis Hardhat */}
        <ellipse cx="44" cy="14" rx="4.5" ry="3.2" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        {/* Head */}
        <circle cx="44" cy="18" r="3" fill="#000" />
        {/* High-vis Torso / Vest */}
        <path d="M 41 21 L 48 23 L 46 36 L 39 36 Z" fill="#000" />
        <line x1="42" y1="23" x2="45" y2="35" stroke="#facc15" strokeWidth="2" />
        {/* Arms holding radio & pointing toward rope */}
        <path d="M 46 24 L 62 20 M 43 26 L 56 25" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        {/* Legs planted on roof parapet */}
        <path d="M 41 36 L 37 48 M 46 36 L 49 48" stroke="#000" strokeWidth="3" strokeLinecap="round" />

        {/* Pulsing roof hazard strobe */}
        <circle cx="32" cy="16" r="3" fill="#ef4444" className="animate-pulse" />
      </svg>
    </motion.div>
  );
}

// 2. Ascending Rope Climber (High-contrast, clearly visible climber on the rope)
export function RopeClimber({ progress = 0.5, isHovered = false }) {
  return (
    <motion.div
      animate={{
        y: isHovered ? [0, -8, 0] : [0, 3, 0],
        rotate: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
      }}
      transition={{
        repeat: Infinity,
        duration: isHovered ? 1.2 : 2.8,
        ease: "easeInOut",
      }}
      className="absolute z-35 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        left: "50%",
        top: `${progress * 100}%`,
      }}
    >
      <div className="relative">
        <svg
          viewBox="0 0 52 60"
          className="w-10 h-12 md:w-12 md:h-14 overflow-visible drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
          fill="currentColor"
        >
          {/* Heavy climbing ascender / carabiner clamped onto the rope */}
          <rect x="23" y="6" width="6" height="12" rx="3" fill="#facc15" stroke="#000" strokeWidth="2.5" />
          <line x1="26" y1="8" x2="26" y2="16" stroke="#000" strokeWidth="1.5" />

          {/* High-visibility yellow safety hardhat with black brim */}
          <ellipse cx="20" cy="17" rx="5" ry="3.5" fill="#facc15" stroke="#000" strokeWidth="2" />
          <line x1="15" y1="18" x2="26" y2="18" stroke="#000" strokeWidth="1.5" />

          {/* Head & neck */}
          <circle cx="20" cy="22" r="3.2" fill="#000" />

          {/* Climber's High-Vis Safety Vest (Bright Yellow & Orange Accent) */}
          <path d="M 17 25 L 25 26 L 24 40 L 16 39 Z" fill="#facc15" stroke="#000" strokeWidth="2" />
          {/* Cross-harness straps */}
          <line x1="17" y1="26" x2="24" y2="39" stroke="#000" strokeWidth="2" />
          <line x1="24" y1="26" x2="17" y2="39" stroke="#000" strokeWidth="2" />

          {/* Hands holding the ascender on the rope */}
          <path d="M 19 27 L 25 15 M 22 29 L 26 21" stroke="#000" strokeWidth="2.8" strokeLinecap="round" />

          {/* Legs braced dynamically in climbing motion */}
          {/* Left leg flexed against the facade */}
          <path
            d="M 17 39 L 9 46 L 5 46"
            stroke="#000"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Right leg reaching down for foothold */}
          <path
            d="M 23 40 L 18 51 L 13 52"
            stroke="#000"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Climbing gear chalk bag / equipment pouch */}
          <rect x="13" y="38" width="4" height="5" rx="1.5" fill="#facc15" stroke="#000" strokeWidth="1" />
        </svg>

        {/* Dynamic Activity Pulse Ring when active */}
        {isHovered && (
          <span className="absolute -top-2 -right-2 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-90" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-yellow-400 border-2 border-black" />
          </span>
        )}
      </div>
    </motion.div>
  );
}

// 3. Ground Anchor Crew & Heavy Cable Winch Spool
export function GroundCrew({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className={`relative select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 180 60"
        className="w-40 h-13 md:w-48 md:h-16 overflow-visible drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)]"
        fill="currentColor"
      >
        {/* Steel baseline plate */}
        <line x1="0" y1="52" x2="180" y2="52" stroke="#000" strokeWidth="4" strokeLinecap="round" />

        {/* Heavy ground anchor stake & steel turnbuckle */}
        <path d="M 64 52 L 80 32 L 85 32 L 72 52 Z" fill="#000" />
        <circle cx="82" cy="32" r="5" fill="#facc15" stroke="#000" strokeWidth="2.5" />

        {/* Heavy Cable Winch Drum Spool */}
        <ellipse cx="44" cy="42" rx="11" ry="10" fill="#000" stroke="#000" strokeWidth="2" />
        <ellipse cx="44" cy="42" rx="5" ry="5" fill="#facc15" />
        <path d="M 44 32 L 72 32" stroke="#000" strokeWidth="2.5" strokeDasharray="3,3" />

        {/* Ground Worker 1: Straining on the anchor cable (pulling back) */}
        <ellipse cx="98" cy="22" rx="4.5" ry="3.2" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <circle cx="98" cy="26" r="3.2" fill="#000" />
        <path d="M 96 30 L 103 33 L 98 46 L 91 44 Z" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <path d="M 98 34 L 84 32" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <path d="M 93 44 L 86 52 M 99 46 L 108 52" stroke="#000" strokeWidth="3.2" strokeLinecap="round" />

        {/* Ground Worker 2: Safety Supervisor with clipboard & radio */}
        <ellipse cx="138" cy="18" rx="4.5" ry="3.2" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <circle cx="138" cy="22" r="3.2" fill="#000" />
        <path d="M 134 25 L 142 25 L 142 41 L 134 41 Z" fill="#000" />
        <path d="M 139 28 L 150 18" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 136 41 L 134 52 M 140 41 L 143 52" stroke="#000" strokeWidth="3" strokeLinecap="round" />

        {/* Construction Safety Hazard Cones */}
        <polygon points="160,52 165,36 170,36 175,52" fill="#facc15" stroke="#000" strokeWidth="2" />
        <line x1="162" y1="44" x2="173" y2="44" stroke="#000" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

// 4. Suspended Platform / Cradle Worker (Left Flank)
export function SuspendedCradle({ className = "" }) {
  return (
    <motion.div
      animate={{ y: [-4, 4, -4] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
      className={`relative select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 64 74"
        className="w-13 h-15 md:w-16 md:h-18 overflow-visible drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)]"
        fill="currentColor"
      >
        {/* Suspension cables coming from roof */}
        <line x1="12" y1="0" x2="12" y2="46" stroke="#000" strokeWidth="1.8" strokeDasharray="4 3" />
        <line x1="52" y1="0" x2="52" y2="46" stroke="#000" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Platform cradle basket */}
        <rect x="8" y="46" width="48" height="15" rx="2" fill="#000" stroke="#000" strokeWidth="2" />
        {/* Yellow safety rail & toe-board */}
        <line x1="10" y1="44" x2="54" y2="44" stroke="#facc15" strokeWidth="2.5" />
        <line x1="20" y1="44" x2="20" y2="48" stroke="#facc15" strokeWidth="2" />
        <line x1="32" y1="44" x2="32" y2="48" stroke="#facc15" strokeWidth="2" />
        <line x1="44" y1="44" x2="44" y2="48" stroke="#facc15" strokeWidth="2" />

        {/* Inspector figure in cradle */}
        <ellipse cx="32" cy="28" rx="4" ry="2.8" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <circle cx="32" cy="32" r="2.8" fill="#000" />
        <path d="M 29 35 L 35 35 L 34 46 L 28 46 Z" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        {/* Holding safety blueprint / diagnostic tablet */}
        <rect x="35" y="37" width="7" height="6" rx="1" fill="#facc15" stroke="#000" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}

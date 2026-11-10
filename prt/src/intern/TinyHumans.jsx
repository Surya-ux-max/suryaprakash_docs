import { motion } from "motion/react";

/**
 * TinyHumans
 * Stylized high-contrast silhouette micro-figures that give architectural scale
 * to the "I" monolith skyscraper and the high-tech exterior elevator scene.
 */

// 1. Rooftop Observation Engineer (Directs elevator arrival from top roof)
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
        {/* Roof Crane & Satellite Uplink Mast */}
        <path
          d="M 12 50 L 32 50 L 32 20 L 82 20 M 32 30 L 52 20 M 32 40 L 68 20 M 32 20 L 18 30 L 12 50"
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="8" y="24" width="9" height="12" rx="1.5" fill="#000" stroke="#facc15" strokeWidth="1" />
        <circle cx="82" cy="20" r="5" fill="#facc15" stroke="#000" strokeWidth="2.5" />
        <circle cx="82" cy="20" r="2" fill="#000" />

        {/* Observation Engineer Figure */}
        <ellipse cx="44" cy="14" rx="4.5" ry="3.2" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <circle cx="44" cy="18" r="3" fill="#000" />
        <path d="M 41 21 L 48 23 L 46 36 L 39 36 Z" fill="#000" />
        <line x1="42" y1="23" x2="45" y2="35" stroke="#facc15" strokeWidth="2" />
        <path d="M 46 24 L 62 20 M 43 26 L 56 25" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 41 36 L 37 48 M 46 36 L 49 48" stroke="#000" strokeWidth="3" strokeLinecap="round" />

        <circle cx="32" cy="16" r="3" fill="#ef4444" className="animate-pulse" />
      </svg>
    </motion.div>
  );
}

// 2. Ground Lobby Dispatch Crew (Near the elevator base)
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
        {/* Ground baseline plate */}
        <line x1="0" y1="52" x2="180" y2="52" stroke="#000" strokeWidth="4" strokeLinecap="round" />

        {/* Terminal Station Console */}
        <path d="M 64 52 L 80 32 L 85 32 L 72 52 Z" fill="#000" />
        <circle cx="82" cy="32" r="5" fill="#facc15" stroke="#000" strokeWidth="2.5" />

        <ellipse cx="44" cy="42" rx="11" ry="10" fill="#000" stroke="#000" strokeWidth="2" />
        <ellipse cx="44" cy="42" rx="5" ry="5" fill="#facc15" />
        <path d="M 44 32 L 72 32" stroke="#000" strokeWidth="2.5" strokeDasharray="3,3" />

        {/* Technician 1: Operating terminal */}
        <ellipse cx="98" cy="22" rx="4.5" ry="3.2" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <circle cx="98" cy="26" r="3.2" fill="#000" />
        <path d="M 96 30 L 103 33 L 98 46 L 91 44 Z" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <path d="M 98 34 L 84 32" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <path d="M 93 44 L 86 52 M 99 46 L 108 52" stroke="#000" strokeWidth="3.2" strokeLinecap="round" />

        {/* Technician 2: Supervisor directing passengers */}
        <ellipse cx="138" cy="18" rx="4.5" ry="3.2" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <circle cx="138" cy="22" r="3.2" fill="#000" />
        <path d="M 134 25 L 142 25 L 142 41 L 134 41 Z" fill="#000" />
        <path d="M 139 28 L 150 18" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 136 41 L 134 52 M 140 41 L 143 52" stroke="#000" strokeWidth="3" strokeLinecap="round" />

        <polygon points="160,52 165,36 170,36 175,52" fill="#facc15" stroke="#000" strokeWidth="2" />
        <line x1="162" y1="44" x2="173" y2="44" stroke="#000" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

// 3. Suspended Platform / Cradle Worker (Left Flank)
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
        <line x1="12" y1="0" x2="12" y2="46" stroke="#000" strokeWidth="1.8" strokeDasharray="4 3" />
        <line x1="52" y1="0" x2="52" y2="46" stroke="#000" strokeWidth="1.8" strokeDasharray="4 3" />

        <rect x="8" y="46" width="48" height="15" rx="2" fill="#000" stroke="#000" strokeWidth="2" />
        <line x1="10" y1="44" x2="54" y2="44" stroke="#facc15" strokeWidth="2.5" />
        <line x1="20" y1="44" x2="20" y2="48" stroke="#facc15" strokeWidth="2" />
        <line x1="32" y1="44" x2="32" y2="48" stroke="#facc15" strokeWidth="2" />
        <line x1="44" y1="44" x2="44" y2="48" stroke="#facc15" strokeWidth="2" />

        <ellipse cx="32" cy="28" rx="4" ry="2.8" fill="#facc15" stroke="#000" strokeWidth="1.8" />
        <circle cx="32" cy="32" r="2.8" fill="#000" />
        <path d="M 29 35 L 35 35 L 34 46 L 28 46 Z" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <rect x="35" y="37" width="7" height="6" rx="1" fill="#facc15" stroke="#000" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}

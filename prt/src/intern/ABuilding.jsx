import { motion } from "motion/react";

/**
 * ABuilding
 * The Monumental Capital "A" Skyscraper — Apex Flagship of the Manhattan Skyline.
 * Shaped as a soaring futuristic architectural "A" representing Agentic AI:
 * - Converging diagonal megastructure wings reaching the apex pinnacle
 * - Suspended panoramic observation skybridge connecting the wings
 * - Soaring rooftop telecommunications mast with flashing aircraft beacons
 * - Grand double-height cathedral atrium lobby under the archway
 * - Structural steel chevron trusses & 18 storeys of illuminated glass window bays
 * - 3D architectural side-facets with depth bevels
 * - Full-facade interactive hover state (aura glow, synchronized window illumination)
 */
export default function ABuilding({ className = "", isHovered = false }) {
  return (
    <motion.div
      animate={{
        scale: isHovered ? 1.025 : 1,
        y: isHovered ? -6 : 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`relative w-full h-full flex items-end justify-center select-none transition-all duration-300 cursor-pointer group ${className}`}
    >
      {/* ── Majestic Architectural Hover Aura Glow ────────────────────── */}
      <div
        className={`absolute inset-0 -top-8 pointer-events-none transition-opacity duration-500 rounded-3xl ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(250,204,21,0.3) 0%, rgba(250,204,21,0.08) 55%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />

      {/* ── Interactive Pointer Badge over the "A" Apex Spire ─────────── */}
      <motion.div
        animate={{
          y: isHovered ? [0, -3, 0] : [0, 4, 0],
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{
          y: { repeat: Infinity, duration: isHovered ? 1 : 2.2, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className={`absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full font-mono text-[10px] font-black uppercase tracking-wider border-2 transition-all duration-300 pointer-events-none drop-shadow-[4px_4px_0px_#000] flex items-center gap-1.5 z-40 ${
          isHovered
            ? "bg-black text-yellow-400 border-black shadow-[4px_4px_0px_#facc15]"
            : "bg-black text-yellow-400 border-yellow-400 animate-bounce"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-80" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
        </span>
        <span>{isHovered ? "✦ AGENTIC AI HEADQUARTERS" : "⚡ THE 'A' SKYSCRAPER"}</span>
      </motion.div>

      {/* ── Monumental "A" Skyscraper SVG (Apex Height: 600) ──────────── */}
      <svg
        viewBox="0 0 340 600"
        preserveAspectRatio="xMidYMax meet"
        className={`w-full h-full max-h-[74vh] overflow-visible transition-all duration-300 ${
          isHovered
            ? "drop-shadow-[0_0_26px_rgba(250,204,21,0.65)] drop-shadow-[16px_16px_0px_#000]"
            : "drop-shadow-[14px_14px_0px_rgba(0,0,0,0.9)]"
        }`}
      >
        <defs>
          {/* Facade reflective sheen gradient */}
          <linearGradient id="a-facade-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#242424" />
            <stop offset="45%" stopColor="#080808" />
            <stop offset="100%" stopColor="#181818" />
          </linearGradient>

          {/* 3D Depth facet shadow */}
          <linearGradient id="a-extrusion-shade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#161616" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>

          {/* Skybridge glass gradient */}
          <linearGradient id="skybridge-glass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#facc15" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* ── 1. 3D Architectural Extrusions (Right Depth Facets) ──────── */}
        {/* Right diagonal outer depth */}
        <polygon
          points="195,48 215,32 335,558 315,576"
          fill="url(#a-extrusion-shade)"
        />
        {/* Skybridge right depth */}
        <polygon
          points="218,330 238,314 238,364 218,380"
          fill="url(#a-extrusion-shade)"
        />
        {/* Architectural 3D depth edge lines */}
        <line x1="215" y1="32" x2="335" y2="558" stroke="#000" strokeWidth="3" />
        <line x1="315" y1="576" x2="335" y2="558" stroke="#000" strokeWidth="2.5" />

        {/* ── 2. Apex Pinnacle & Broadcast Telecommunications Mast ────── */}
        <g id="apex-mast">
          {/* Main needle spire reaching to y=6 (Tallest landmark peak) */}
          <line x1="170" y1="48" x2="170" y2="6" stroke="#000" strokeWidth="4.5" />
          <line x1="164" y1="48" x2="170" y2="24" stroke="#000" strokeWidth="2" />
          <line x1="176" y1="48" x2="170" y2="24" stroke="#000" strokeWidth="2" />
          <line x1="162" y1="28" x2="178" y2="28" stroke="#000" strokeWidth="2.5" />
          <line x1="165" y1="38" x2="175" y2="38" stroke="#000" strokeWidth="2.5" />

          {/* High-intensity red pulsing collision strobe */}
          <circle cx="170" cy="5" r="4.5" fill="#ef4444" className="animate-pulse" />
          {isHovered && (
            <circle cx="170" cy="5" r="10" fill="#ef4444" opacity="0.4" className="animate-ping" />
          )}

          {/* Secondary communication relay dish & dipole antenna */}
          <line x1="190" y1="48" x2="190" y2="26" stroke="#000" strokeWidth="2.5" strokeDasharray="3 2" />
          <circle cx="190" cy="25" r="3" fill="#facc15" />
          <ellipse cx="150" cy="42" rx="10" ry="5" fill="#000" stroke="#facc15" strokeWidth="1.5" />
        </g>

        {/* ── 3. The Monumental "A" Facade Silhouette Body ─────────────── */}
        <path
          fillRule="evenodd"
          d="
            M 145 48
            L 195 48
            L 315 576
            L 240 576
            L 218 380
            L 122 380
            L 100 576
            L 25 576
            Z
            M 170 160
            L 208 330
            L 132 330
            Z
          "
          fill="url(#a-facade-sheen)"
          stroke="#000"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Active Hover Facade Gold Neon Highlight */}
        {isHovered && (
          <path
            fillRule="evenodd"
            d="
              M 145 48
              L 195 48
              L 315 576
              L 240 576
              L 218 380
              L 122 380
              L 100 576
              L 25 576
              Z
              M 170 160
              L 208 330
              L 132 330
              Z
            "
            stroke="#facc15"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="none"
          />
        )}

        {/* ── 4. Apex Crown & Upper Observation Deck ───────────────────── */}
        <g id="apex-crown">
          {/* Parapet cap line */}
          <line x1="145" y1="54" x2="195" y2="54" stroke="#facc15" strokeWidth="2" opacity="0.7" />
          {/* Mechanical louvers at peak */}
          {Array.from({ length: 4 }).map((_, i) => (
            <line
              key={i}
              x1={154 + i * 8}
              y1="64"
              x2={158 + i * 8}
              y2="76"
              stroke="#facc15"
              strokeWidth="1.8"
              opacity="0.5"
            />
          ))}
          {/* Crown Observation Window */}
          <polygon
            points="170,95 186,135 154,135"
            fill="#000"
            stroke="#facc15"
            strokeWidth="1.5"
          />
          <circle cx="170" cy="120" r="5" fill="#facc15" opacity={isHovered ? 0.95 : 0.6} />
        </g>

        {/* ── 5. Upper Triangular Observation Atrium (Between Wings) ───── */}
        <g id="upper-atrium-trusses">
          {/* Structural steel diamond cross-braces in the opening */}
          <line x1="170" y1="160" x2="132" y2="330" stroke="#facc15" strokeWidth="1.5" opacity="0.4" />
          <line x1="170" y1="160" x2="208" y2="330" stroke="#facc15" strokeWidth="1.5" opacity="0.4" />
          <line x1="145" y1="225" x2="195" y2="225" stroke="#facc15" strokeWidth="2" opacity="0.5" />
          <line x1="138" y1="278" x2="202" y2="278" stroke="#facc15" strokeWidth="2" opacity="0.5" />
          {/* Central floating illuminated AI node */}
          <circle cx="170" cy="250" r="7" fill="#000" stroke="#facc15" strokeWidth="2" />
          <circle cx="170" cy="250" r="3.5" fill="#facc15" className="animate-pulse" />
        </g>

        {/* ── 6. The Panoramic Suspended Skybridge (The Crossbar of "A") ─ */}
        <g id="skybridge-crossbar">
          {/* Skybridge Outer Housing */}
          <rect
            x="122"
            y="330"
            width="96"
            height="50"
            fill="#050505"
            stroke="#000"
            strokeWidth="3.5"
          />
          {/* Upper & Lower Steel Support Beams */}
          <line x1="122" y1="330" x2="218" y2="330" stroke="#facc15" strokeWidth="2.5" opacity="0.8" />
          <line x1="122" y1="380" x2="218" y2="380" stroke="#facc15" strokeWidth="2.5" opacity="0.8" />

          {/* Panoramic Double-Deck Glass Window Band */}
          <rect
            x="126"
            y="336"
            width="88"
            height="38"
            rx="2"
            fill="url(#skybridge-glass)"
            stroke="#facc15"
            strokeWidth="1.5"
          />
          {/* Skybridge Window Mullions */}
          {Array.from({ length: 6 }).map((_, i) => (
            <rect
              key={i}
              x={130 + i * 14}
              y="340"
              width="10"
              height="30"
              rx="1"
              fill="#facc15"
              opacity={isHovered ? 0.95 : 0.65}
              className={isHovered ? "animate-pulse" : undefined}
            />
          ))}

          {/* Underside Structural Suspension Trusses */}
          <g stroke="#facc15" strokeWidth="1.5" opacity="0.45">
            <line x1="124" y1="380" x2="148" y2="395" />
            <line x1="148" y1="395" x2="170" y2="380" />
            <line x1="170" y1="380" x2="192" y2="395" />
            <line x1="192" y1="395" x2="216" y2="380" />
          </g>
        </g>

        {/* ── 7. Left Slanted Megastructure Wing (West Tower Leg) ───────── */}
        <g id="west-wing-windows">
          {/* Stepped Window Bands down the left leg */}
          {Array.from({ length: 15 }).map((_, r) => {
            const yPos = 130 + r * 28;
            // X position shifts diagonally outward as it descends
            const xShift = 135 - r * 6.5;
            const isGold = (r * 2) % 3 === 0 || isHovered;
            const isAmber = (r + 1) % 4 === 0;

            return (
              <g key={r}>
                <rect
                  x={xShift}
                  y={yPos}
                  width="18"
                  height="16"
                  rx="1.5"
                  fill={
                    isHovered
                      ? "#facc15"
                      : isGold
                      ? "#facc15"
                      : isAmber
                      ? "#ca8a04"
                      : "rgba(250,204,21,0.15)"
                  }
                  opacity={isHovered ? 0.95 : isGold ? 0.9 : isAmber ? 0.6 : 0.25}
                  className={isGold || isHovered ? "animate-pulse" : undefined}
                />
                {/* Secondary inner window on lower tiers */}
                {r > 4 && (
                  <rect
                    x={xShift + 22}
                    y={yPos}
                    width="16"
                    height="16"
                    rx="1.5"
                    fill={isGold ? "#facc15" : "rgba(250,204,21,0.15)"}
                    opacity={isHovered ? 0.95 : 0.4}
                  />
                )}
              </g>
            );
          })}

          {/* Left Wing Structural Chevron Braces */}
          <g stroke="#000" strokeWidth="4" opacity="0.85">
            <line x1="135" y1="130" x2="90" y2="330" />
            <line x1="90" y1="330" x2="45" y2="570" />
            <line x1="150" y1="130" x2="115" y2="330" />
            <line x1="115" y1="330" x2="80" y2="570" />
          </g>
        </g>

        {/* ── 8. Right Slanted Megastructure Wing (East Tower Leg) ──────── */}
        <g id="east-wing-windows">
          {/* Stepped Window Bands down the right leg */}
          {Array.from({ length: 15 }).map((_, r) => {
            const yPos = 130 + r * 28;
            // X position shifts diagonally outward to the right
            const xShift = 187 + r * 6.5;
            const isGold = (r * 3) % 4 === 0 || isHovered;
            const isAmber = (r + 2) % 3 === 0;

            return (
              <g key={r}>
                <rect
                  x={xShift}
                  y={yPos}
                  width="18"
                  height="16"
                  rx="1.5"
                  fill={
                    isHovered
                      ? "#facc15"
                      : isGold
                      ? "#facc15"
                      : isAmber
                      ? "#ca8a04"
                      : "rgba(250,204,21,0.15)"
                  }
                  opacity={isHovered ? 0.95 : isGold ? 0.9 : isAmber ? 0.6 : 0.25}
                  className={isGold || isHovered ? "animate-pulse" : undefined}
                />
                {/* Secondary inner window on lower tiers */}
                {r > 4 && (
                  <rect
                    x={xShift - 22}
                    y={yPos}
                    width="16"
                    height="16"
                    rx="1.5"
                    fill={isGold ? "#facc15" : "rgba(250,204,21,0.15)"}
                    opacity={isHovered ? 0.95 : 0.4}
                  />
                )}
              </g>
            );
          })}

          {/* Right Wing Structural Chevron Braces */}
          <g stroke="#000" strokeWidth="4" opacity="0.85">
            <line x1="205" y1="130" x2="250" y2="330" />
            <line x1="250" y1="330" x2="295" y2="570" />
            <line x1="190" y1="130" x2="225" y2="330" />
            <line x1="225" y1="330" x2="260" y2="570" />
          </g>
        </g>

        {/* ── 9. Grand Cathedral Atrium Lobby (Under the Arch of "A") ─── */}
        <g id="atrium-grand-lobby">
          {/* Double-Height Glass Atrium Wall */}
          <polygon
            points="122,380 218,380 236,540 104,540"
            fill="#050505"
            stroke="#facc15"
            strokeWidth={isHovered ? "2.5" : "1.5"}
            opacity="0.95"
          />

          {/* Lobby Architectural Glass Ribbons */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={i}
              x1={120 + i * 20}
              y1="390"
              x2={110 + i * 24}
              y2="540"
              stroke="#facc15"
              strokeWidth="2"
              opacity="0.75"
            />
          ))}

          {/* Grand Revolving Entrance Doors */}
          <circle cx="170" cy="546" r="14" fill="none" stroke="#facc15" strokeWidth="2" opacity="0.85" />
          <line x1="158" y1="546" x2="182" y2="546" stroke="#facc15" strokeWidth="2" opacity="0.85" />
          <line x1="170" y1="534" x2="170" y2="558" stroke="#facc15" strokeWidth="2" opacity="0.85" />

          {/* Grand Cantilever Awning Canopy */}
          <polygon
            points="140,530 200,530 208,542 132,542"
            fill="#facc15"
            stroke="#000"
            strokeWidth="2.5"
          />

          {/* Foundation Plinth Rivets on Both Feet */}
          {Array.from({ length: 3 }).map((_, i) => (
            <g key={i}>
              <circle cx={40 + i * 24} cy="565" r="3" fill="#facc15" opacity="0.6" />
              <circle cx={255 + i * 24} cy="565" r="3" fill="#facc15" opacity="0.6" />
            </g>
          ))}
        </g>
      </svg>
    </motion.div>
  );
}


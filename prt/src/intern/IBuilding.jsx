import { motion } from "motion/react";

/**
 * IBuilding
 * The Majestic Flagship Skyscraper of the NYC Skyline shaped as a gigantic bold letter "I".
 * Towering tall above all surrounding Manhattan skyscrapers with full-facade hover effects:
 * - Soaring rooftop observation deck & telecommunications spire with flashing beacons
 * - 18 storeys of illuminated glass curtain walls with responsive hover glow
 * - Structural steel John Hancock-style X-bracing trusses
 * - 3D architectural side-extrusion depth bevels
 * - Grand double-height entrance lobby at street level with pillars & revolving doors
 * - Interactive hover state: facade lights up, windows glow in synchronized waves, and role card opens
 */
export default function IBuilding({ className = "", isHovered = false }) {
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
        className={`absolute inset-0 -top-8 pointer-events-none transition-opacity duration-500 rounded-2xl ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(250,204,21,0.28) 0%, rgba(250,204,21,0.08) 50%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />

      {/* ── Interactive Pointer Beacon Tag over Spire ─────────────────── */}
      <motion.div
        animate={{
          y: isHovered ? [0, -3, 0] : [0, 4, 0],
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{
          y: { repeat: Infinity, duration: isHovered ? 1 : 2.2, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className={`absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full font-mono text-[10px] font-black uppercase tracking-wider border-2 transition-all duration-300 pointer-events-none drop-shadow-[4px_4px_0px_#000] flex items-center gap-1.5 z-40 ${
          isHovered
            ? "bg-black text-yellow-400 border-black shadow-[4px_4px_0px_#facc15]"
            : "bg-black text-yellow-400 border-yellow-400 animate-bounce"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-80" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
        </span>
        <span>{isHovered ? "✦ AGENTIC HEADQUARTERS" : "⚡ HOVER SKYSCRAPER"}</span>
      </motion.div>

      {/* ── Monumental "I" Skyscraper SVG (Tallest in Skyline: Height 600) ── */}
      <svg
        viewBox="0 0 320 600"
        preserveAspectRatio="xMidYMax meet"
        className={`w-full h-full max-h-[74vh] overflow-visible transition-all duration-300 ${
          isHovered
            ? "drop-shadow-[0_0_24px_rgba(250,204,21,0.6)] drop-shadow-[16px_16px_0px_#000]"
            : "drop-shadow-[14px_14px_0px_rgba(0,0,0,0.9)]"
        }`}
      >
        <defs>
          {/* Facade reflective sheen gradient */}
          <linearGradient id="facade-sheen-majestic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#222" />
            <stop offset="45%" stopColor="#080808" />
            <stop offset="100%" stopColor="#181818" />
          </linearGradient>

          {/* 3D Depth facet shadow */}
          <linearGradient id="extrusion-shade-majestic" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#141414" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>

          {/* Active hover laser sweep */}
          <linearGradient id="active-laser-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#facc15" stopOpacity="0" />
            <stop offset="50%" stopColor="#facc15" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── 1. 3D Architectural Depth Extrusions (Right Facet) ───────── */}
        <path d="M 260 48 L 280 30 L 280 92 L 260 110 Z" fill="url(#extrusion-shade-majestic)" />
        <path d="M 210 110 L 230 92 L 230 480 L 210 498 Z" fill="url(#extrusion-shade-majestic)" />
        <path d="M 275 498 L 295 480 L 295 558 L 275 576 Z" fill="url(#extrusion-shade-majestic)" />
        <path
          d="M 280 30 L 280 92 L 230 92 L 230 480 L 295 480 L 295 558"
          stroke="#000"
          strokeWidth="3"
          fill="none"
        />

        {/* ── 2. Soaring Rooftop Communications Spire & Antenna Array ─── */}
        <g id="rooftop-mast">
          {/* Main telecommunications needle (Reaches to y=6, tallest peak) */}
          <line x1="145" y1="48" x2="145" y2="6" stroke="#000" strokeWidth="4" />
          <line x1="140" y1="48" x2="145" y2="22" stroke="#000" strokeWidth="2" />
          <line x1="150" y1="48" x2="145" y2="22" stroke="#000" strokeWidth="2" />
          <line x1="138" y1="26" x2="152" y2="26" stroke="#000" strokeWidth="2.5" />
          <line x1="141" y1="36" x2="149" y2="36" stroke="#000" strokeWidth="2.5" />

          {/* Top aviation obstacle beacon (High-intensity pulsing red strobe) */}
          <circle cx="145" cy="5" r="4.5" fill="#ef4444" className="animate-pulse" />
          {isHovered && (
            <circle cx="145" cy="5" r="9" fill="#ef4444" opacity="0.4" className="animate-ping" />
          )}

          {/* Secondary microwave relay antenna */}
          <line x1="175" y1="48" x2="175" y2="24" stroke="#000" strokeWidth="2.5" strokeDasharray="3 2" />
          <circle cx="175" cy="23" r="3" fill="#facc15" />
          {/* Rooftop satellite dish */}
          <ellipse cx="112" cy="40" rx="12" ry="6" fill="#000" stroke="#facc15" strokeWidth="1.5" />
          <line x1="112" y1="40" x2="112" y2="28" stroke="#facc15" strokeWidth="2" />
        </g>

        {/* ── 3. The Gigantic "I" Facade (Front Elevation Silhouette) ───── */}
        <path
          d="
            M 35 48
            L 260 48
            L 260 110
            L 210 110
            L 210 498
            L 275 498
            L 275 576
            L 15 576
            L 15 498
            L 80 498
            L 80 110
            L 35 110
            Z
          "
          fill="url(#facade-sheen-majestic)"
          stroke="#000"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Active Hover Facade Neon Edge Highlight */}
        {isHovered && (
          <path
            d="
              M 35 48
              L 260 48
              L 260 110
              L 210 110
              L 210 498
              L 275 498
              L 275 576
              L 15 576
              L 15 498
              L 80 498
              L 80 110
              L 35 110
              Z
            "
            stroke="#facc15"
            strokeWidth="3"
            strokeLinejoin="round"
            fill="none"
          />
        )}

        {/* ── 4. Top Serif (Rooftop Observation Terrace & Helipad) ─────── */}
        <g id="top-serif">
          {/* Parapet cap line */}
          <line x1="35" y1="54" x2="260" y2="54" stroke="#facc15" strokeWidth="2.5" opacity="0.6" />
          
          {/* Mechanical penthouse ventilation louvers */}
          <g opacity={isHovered ? "0.6" : "0.35"}>
            {Array.from({ length: 18 }).map((_, i) => (
              <line
                key={i}
                x1={48 + i * 11}
                y1="62"
                x2={55 + i * 11}
                y2="78"
                stroke="#facc15"
                strokeWidth="2"
              />
            ))}
          </g>

          {/* Rooftop Helipad Circle Marking */}
          <circle cx="75" cy="82" r="15" stroke="#facc15" strokeWidth="2" fill="none" opacity="0.75" />
          <circle cx="75" cy="82" r="8" stroke="#facc15" strokeWidth="1.2" fill="none" opacity="0.5" />
          <line x1="67" y1="82" x2="83" y2="82" stroke="#facc15" strokeWidth="1.8" opacity="0.7" />
          <line x1="75" y1="74" x2="75" y2="90" stroke="#facc15" strokeWidth="1.8" opacity="0.7" />

          {/* Observation Deck Panoramic Glass Band */}
          <rect x="135" y="66" width="115" height="32" rx="3" fill="#000" stroke="#facc15" strokeWidth="1.5" />
          {Array.from({ length: 7 }).map((_, i) => (
            <rect
              key={i}
              x={140 + i * 15}
              y="70"
              width="11"
              height="24"
              rx="1"
              fill="#facc15"
              opacity={isHovered ? 0.95 : 0.6}
              className={isHovered ? "animate-pulse" : undefined}
            />
          ))}
        </g>

        {/* ── 5. Central Shaft (18 Storeys of Curtain-Wall Windows & Trusses) ── */}
        <g id="shaft-tower">
          {/* Window bays dark glass foundation */}
          <rect x="85" y="114" width="120" height="380" fill="#0a0a0a" />

          {/* 18 Architectural Floors with Window Grids */}
          {Array.from({ length: 18 }).map((_, i) => {
            const floorY = 118 + i * 21;
            return (
              <g key={i}>
                {/* Floor Beam Slab */}
                <line
                  x1="85"
                  y1={floorY}
                  x2="205"
                  y2={floorY}
                  stroke="#1c1c1c"
                  strokeWidth="2"
                />
                {/* 4 Windows per floor */}
                {Array.from({ length: 4 }).map((_, w) => {
                  const winX = 92 + w * 28;
                  const isGold = (i + w * 2) % 4 === 0 || isHovered;
                  const isAmber = (i * 3 + w) % 3 === 0;

                  return (
                    <rect
                      key={w}
                      x={winX}
                      y={floorY + 3}
                      width="21"
                      height="15"
                      rx="1"
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
                  );
                })}
              </g>
            );
          })}

          {/* ── John Hancock Style Structural Steel Chevron Bracing (X-Trusses) ── */}
          <g id="structural-trusses" stroke="#000" strokeWidth="4.5" opacity="0.9">
            <line x1="85" y1="114" x2="205" y2="205" strokeLinecap="round" />
            <line x1="205" y1="114" x2="85" y2="205" strokeLinecap="round" />

            <line x1="85" y1="205" x2="205" y2="296" strokeLinecap="round" />
            <line x1="205" y1="205" x2="85" y2="296" strokeLinecap="round" />

            <line x1="85" y1="296" x2="205" y2="387" strokeLinecap="round" />
            <line x1="205" y1="296" x2="85" y2="387" strokeLinecap="round" />

            <line x1="85" y1="387" x2="205" y2="494" strokeLinecap="round" />
            <line x1="205" y1="387" x2="85" y2="494" strokeLinecap="round" />

            {/* Accent Gold Truss Intersection Pins */}
            {[160, 250, 341, 440].map((nodeY) => (
              <circle
                key={nodeY}
                cx="145"
                cy={nodeY}
                r="4"
                fill="#facc15"
                stroke="#000"
                strokeWidth="1.8"
              />
            ))}
          </g>

          {/* Exterior High-Rise Service Elevator Ladder Column */}
          <g id="service-column" stroke="#facc15" strokeWidth="1.2" opacity={isHovered ? "0.6" : "0.35"}>
            <line x1="82" y1="110" x2="82" y2="498" strokeWidth="2" />
            <line x1="87" y1="110" x2="87" y2="498" strokeWidth="2" />
            {Array.from({ length: 34 }).map((_, idx) => (
              <line
                key={idx}
                x1="82"
                y1={114 + idx * 11}
                x2="87"
                y2={114 + idx * 11}
              />
            ))}
          </g>
        </g>

        {/* ── 6. Bottom Serif (Grand Lobby & Street Plinth) ─────────────── */}
        <g id="bottom-serif">
          {/* Foundation Beam Line */}
          <line x1="15" y1="504" x2="275" y2="504" stroke="#facc15" strokeWidth="2.5" opacity="0.6" />

          {/* Double-Height Grand Glass Entrance Lobby */}
          <rect
            x="80"
            y="512"
            width="130"
            height="58"
            fill="#000"
            stroke="#facc15"
            strokeWidth={isHovered ? "2.5" : "1.5"}
            opacity="0.95"
          />

          {/* Lobby Architectural Pillars */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1={88 + i * 28}
              y1="512"
              x2={88 + i * 28}
              y2="570"
              stroke="#facc15"
              strokeWidth="3"
              opacity="0.8"
            />
          ))}

          {/* Grand Revolving Entrance Doors */}
          <circle cx="145" cy="548" r="13" fill="none" stroke="#facc15" strokeWidth="2" opacity="0.8" />
          <line x1="135" y1="548" x2="155" y2="548" stroke="#facc15" strokeWidth="2" opacity="0.8" />
          <line x1="145" y1="538" x2="145" y2="558" stroke="#facc15" strokeWidth="2" opacity="0.8" />

          {/* Entrance Awning / Canopy */}
          <polygon
            points="115,532 175,532 182,542 108,542"
            fill="#facc15"
            stroke="#000"
            strokeWidth="2.5"
          />

          {/* Foundation Heavy Rivet Bolts */}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx={28 + i * 32}
              cy="570"
              r="3"
              fill="#facc15"
              opacity="0.6"
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}

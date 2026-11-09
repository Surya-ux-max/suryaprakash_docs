/**
 * IBuilding
 * Cinematic architectural skyscraper shaped as a gigantic bold letter "I".
 * Features high-rise New York City style structural details:
 * - Rooftop communications spire with blinking aviation beacon
 * - Structural steel X-bracing trusses (John Hancock style)
 * - 16-story illuminated glass curtain wall with glowing window matrix
 * - Architectural 3D depth extrusion on the right flank
 * - Grand double-height entrance lobby with canopy & foundation pillars
 * Pure architectural structure, zero text stencils.
 */
export default function IBuilding({ className = "", isHovered = false }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none transition-all duration-300 ${
        isHovered ? "brightness-105" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 340 560"
        className="w-full h-full max-h-[70vh] overflow-visible drop-shadow-[14px_14px_0px_rgba(0,0,0,0.9)]"
      >
        <defs>
          {/* Subtle gradient for facade glass reflection */}
          <linearGradient id="facade-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#222" />
            <stop offset="50%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#161616" />
          </linearGradient>

          {/* 3D side-extrusion shadow gradient */}
          <linearGradient id="extrusion-shade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
        </defs>

        {/* ── 1. 3D Architectural Extrusion (Right Depth Facet) ───────── */}
        <path d="M 270 48 L 290 32 L 290 88 L 270 104 Z" fill="url(#extrusion-shade)" />
        <path d="M 215 104 L 235 88 L 235 440 L 215 456 Z" fill="url(#extrusion-shade)" />
        <path d="M 285 456 L 305 440 L 305 510 L 285 526 Z" fill="url(#extrusion-shade)" />
        <path
          d="M 290 32 L 290 88 L 235 88 L 235 440 L 305 440 L 305 510"
          stroke="#000"
          strokeWidth="2.5"
          fill="none"
        />

        {/* ── 2. Rooftop Telecommunications Spire / Mast ───────────────── */}
        <g id="rooftop-mast">
          <line x1="155" y1="48" x2="155" y2="10" stroke="#000" strokeWidth="3.5" />
          <line x1="150" y1="48" x2="155" y2="24" stroke="#000" strokeWidth="1.8" />
          <line x1="160" y1="48" x2="155" y2="24" stroke="#000" strokeWidth="1.8" />
          <line x1="148" y1="28" x2="162" y2="28" stroke="#000" strokeWidth="2.5" />
          <line x1="151" y1="38" x2="159" y2="38" stroke="#000" strokeWidth="2" />
          
          {/* Top aviation obstacle beacon (red blinking light) */}
          <circle cx="155" cy="9" r="4" fill="#ef4444">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          
          {/* Secondary rooftop antenna */}
          <line x1="182" y1="48" x2="182" y2="26" stroke="#000" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="182" cy="25" r="2.5" fill="#facc15" />
        </g>

        {/* ── 3. The Gigantic "I" Facade (Front Elevation) ─────────────── */}
        <path
          d="
            M 45 48
            L 270 48
            L 270 104
            L 215 104
            L 215 456
            L 285 456
            L 285 526
            L 25 526
            L 25 456
            L 95 456
            L 95 104
            L 45 104
            Z
          "
          fill="url(#facade-sheen)"
          stroke="#000"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* ── 4. Top Serif Details (Roof Terrace & Observation Lounge) ──── */}
        <g id="top-serif">
          {/* Parapet cap line */}
          <line x1="45" y1="53" x2="270" y2="53" stroke="#facc15" strokeWidth="2" opacity="0.4" />
          {/* Roof penthouse mechanical louvers */}
          <g opacity="0.35">
            {Array.from({ length: 18 }).map((_, i) => (
              <line
                key={i}
                x1={55 + i * 11}
                y1="60"
                x2={62 + i * 11}
                y2="76"
                stroke="#facc15"
                strokeWidth="1.5"
              />
            ))}
          </g>
          {/* Helipad Marking Circle */}
          <circle cx="85" cy="78" r="14" stroke="#facc15" strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="85" cy="78" r="7" stroke="#facc15" strokeWidth="1" fill="none" opacity="0.4" />
          <line x1="77" y1="78" x2="93" y2="78" stroke="#facc15" strokeWidth="1.5" opacity="0.5" />
          <line x1="85" y1="70" x2="85" y2="86" stroke="#facc15" strokeWidth="1.5" opacity="0.5" />
        </g>

        {/* ── 5. Central Shaft Details (Curtain-Wall Windows & Steel Trusses) */}
        <g id="shaft-tower">
          {/* Window bays background glow */}
          <rect x="100" y="108" width="110" height="344" fill="#0d0d0d" />

          {/* Floor Slabs (16 distinct architectural storeys) */}
          {Array.from({ length: 16 }).map((_, i) => {
            const floorY = 112 + i * 21;
            return (
              <g key={i}>
                <line
                  x1="100"
                  y1={floorY}
                  x2="210"
                  y2={floorY}
                  stroke="#222"
                  strokeWidth="2"
                />
                {/* Windows on this floor (4 per floor) */}
                {Array.from({ length: 4 }).map((_, w) => {
                  const winX = 106 + w * 25;
                  const isGold = (i + w * 2) % 5 === 0;
                  const isAmber = (i * 3 + w) % 4 === 0;

                  return (
                    <rect
                      key={w}
                      x={winX}
                      y={floorY + 3}
                      width="19"
                      height="14"
                      rx="1"
                      fill={
                        isGold
                          ? "#facc15"
                          : isAmber
                          ? "#ca8a04"
                          : "rgba(250,204,21,0.12)"
                      }
                      opacity={isGold ? 0.95 : isAmber ? 0.65 : 0.3}
                      className={isGold ? "animate-pulse" : undefined}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* ── John Hancock Style Structural Steel Chevron Bracing (X-Trusses) ── */}
          <g id="structural-trusses" stroke="#000" strokeWidth="4" opacity="0.85">
            <line x1="100" y1="108" x2="210" y2="190" strokeLinecap="round" />
            <line x1="210" y1="108" x2="100" y2="190" strokeLinecap="round" />

            <line x1="100" y1="190" x2="210" y2="274" strokeLinecap="round" />
            <line x1="210" y1="190" x2="100" y2="274" strokeLinecap="round" />

            <line x1="100" y1="274" x2="210" y2="358" strokeLinecap="round" />
            <line x1="210" y1="274" x2="100" y2="358" strokeLinecap="round" />

            <line x1="100" y1="358" x2="210" y2="452" strokeLinecap="round" />
            <line x1="210" y1="358" x2="100" y2="452" strokeLinecap="round" />

            {/* Accent gold truss pins at intersection nodes */}
            {[149, 232, 316, 405].map((nodeY) => (
              <circle
                key={nodeY}
                cx="155"
                cy={nodeY}
                r="3.5"
                fill="#facc15"
                stroke="#000"
                strokeWidth="1.5"
              />
            ))}
          </g>

          {/* Exterior Service Ladder / Elevator Shaft (Left Column Edge) */}
          <g id="elevator-ladder" stroke="#facc15" strokeWidth="1" opacity="0.35">
            <line x1="97" y1="104" x2="97" y2="456" strokeWidth="1.5" />
            <line x1="102" y1="104" x2="102" y2="456" strokeWidth="1.5" />
            {Array.from({ length: 32 }).map((_, idx) => (
              <line
                key={idx}
                x1="97"
                y1={108 + idx * 11}
                x2="102"
                y2={108 + idx * 11}
              />
            ))}
          </g>
        </g>

        {/* ── 6. Bottom Serif (Grand Lobby & Foundation Plinth) ────────── */}
        <g id="bottom-serif">
          {/* Foundation Beam Line */}
          <line x1="25" y1="460" x2="285" y2="460" stroke="#facc15" strokeWidth="2" opacity="0.4" />

          {/* Double-Height Grand Glass Lobby */}
          <rect x="95" y="468" width="120" height="50" fill="#000" stroke="#facc15" strokeWidth="1" opacity="0.9" />
          
          {/* Lobby Entrance Columns / Pillars */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={i}
              x1={102 + i * 26}
              y1="468"
              x2={102 + i * 26}
              y2="518"
              stroke="#facc15"
              strokeWidth="2.5"
              opacity="0.7"
            />
          ))}
          
          {/* Revolving Door Silhouette */}
          <circle cx="155" cy="500" r="11" fill="none" stroke="#facc15" strokeWidth="1.5" opacity="0.7" />
          <line x1="147" y1="500" x2="163" y2="500" stroke="#facc15" strokeWidth="1.5" opacity="0.7" />
          <line x1="155" y1="492" x2="155" y2="508" stroke="#facc15" strokeWidth="1.5" opacity="0.7" />

          {/* Entrance Canopy / Awning */}
          <polygon
            points="130,486 180,486 186,494 124,494"
            fill="#facc15"
            stroke="#000"
            strokeWidth="2"
          />

          {/* Foundation Structural Rivet Bolts */}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx={40 + i * 29}
              cy="520"
              r="2.5"
              fill="#facc15"
              opacity="0.5"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

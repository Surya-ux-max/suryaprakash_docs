/**
 * NYCBuildings
 * Prominent New York City skyscrapers flanking the central "I" building.
 * Engineered with explicit responsive dimensions, high-contrast silhouettes,
 * and illuminated window bays for maximum visibility across all screens.
 * Features:
 * - Lower Manhattan pre-war high-rise with iconic rooftop wooden water tank
 * - Art Deco Chrysler-style stepped spire with sunburst crown & flashing beacon
 * - Midtown diagonal-crown glass curtain-wall tower
 * - Empire State-style tiered setback skyscraper with broadcast mast
 * - Contemporary diamond-faceted glass pinnacle
 * - Tribeca loft with rooftop water tank & communications dish
 * - Background Manhattan silhouette layer for depth
 */

// 1. Classic Pre-War NYC High-Rise with Rooftop Wooden Water Tank
export function NYCPreWarWaterTank({ className = "" }) {
  return (
    <div className={`relative flex items-end h-[68%] w-14 sm:w-18 md:w-22 lg:w-26 xl:w-28 flex-shrink-0 select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 110 380"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full overflow-visible drop-shadow-[5px_5px_0px_rgba(0,0,0,0.85)]"
      >
        {/* ── Rooftop Wooden Water Tank on Steel Trestles ─────────────── */}
        <line x1="26" y1="92" x2="36" y2="58" stroke="#000" strokeWidth="3" />
        <line x1="64" y1="92" x2="54" y2="58" stroke="#000" strokeWidth="3" />
        <line x1="30" y1="76" x2="60" y2="76" stroke="#facc15" strokeWidth="1.8" />
        {/* Wooden cylindrical tank barrel */}
        <rect x="33" y="36" width="24" height="24" rx="2" fill="#000" stroke="#facc15" strokeWidth="1.8" />
        {/* Metal tension hoops */}
        <line x1="33" y1="42" x2="57" y2="42" stroke="#facc15" strokeWidth="1.2" />
        <line x1="33" y1="51" x2="57" y2="51" stroke="#facc15" strokeWidth="1.2" />
        {/* Conical roof cap */}
        <polygon points="30,36 45,20 60,36" fill="#000" stroke="#facc15" strokeWidth="2" />

        {/* Roof bulkhead penthouse & chimney flue */}
        <rect x="70" y="72" width="24" height="18" fill="#000" stroke="#000" strokeWidth="2" />
        <line x1="82" y1="72" x2="82" y2="58" stroke="#000" strokeWidth="2.5" />

        {/* Heavy stone parapet cornice molding */}
        <rect x="8" y="88" width="94" height="10" rx="1.5" fill="#000" stroke="#facc15" strokeWidth="1.5" />

        {/* Main Building Shaft */}
        <rect x="12" y="98" width="86" height="282" fill="#0a0a0a" stroke="#000" strokeWidth="4" />

        {/* Illuminated Pre-War Sash Windows Grid */}
        {Array.from({ length: 11 }).map((_, row) => {
          const yPos = 114 + row * 24;
          return (
            <g key={row}>
              <rect x="22" y={yPos} width="13" height="15" rx="1" fill="#facc15" opacity={(row + 1) % 3 === 0 ? 0.95 : 0.25} />
              <rect x="41" y={yPos} width="13" height="15" rx="1" fill="#facc15" opacity={(row * 2) % 4 === 0 ? 0.9 : 0.3} />
              <rect x="60" y={yPos} width="13" height="15" rx="1" fill="#facc15" opacity={(row + 2) % 3 === 0 ? 0.95 : 0.2} />
              <rect x="78" y={yPos} width="13" height="15" rx="1" fill="#facc15" opacity={(row + 3) % 5 === 0 ? 0.85 : 0.25} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// 2. The Art Deco Chrysler-Style Spire Skyscraper
export function NYCChryslerSpire({ className = "" }) {
  return (
    <div className={`relative flex items-end h-[92%] w-16 sm:w-20 md:w-26 lg:w-30 xl:w-34 flex-shrink-0 select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 140 520"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full overflow-visible drop-shadow-[7px_7px_0px_rgba(0,0,0,0.9)]"
      >
        {/* ── Spire Needle with Red Flashing Aviation Beacon ───────────── */}
        <line x1="70" y1="80" x2="70" y2="10" stroke="#000" strokeWidth="4" />
        <line x1="63" y1="80" x2="70" y2="32" stroke="#000" strokeWidth="2" />
        <line x1="77" y1="80" x2="70" y2="32" stroke="#000" strokeWidth="2" />
        <circle cx="70" cy="8" r="4.5" fill="#ef4444" className="animate-pulse" />

        {/* ── Art Deco Arched Crown (Tier 3) ──────────────────────────── */}
        <polygon points="42,130 70,78 98,130" fill="#000" stroke="#facc15" strokeWidth="2" />
        {/* Sunburst triangular window cutouts */}
        <polygon points="62,118 70,98 78,118" fill="#facc15" />
        <polygon points="50,126 57,112 62,126" fill="#facc15" opacity="0.85" />
        <polygon points="78,126 83,112 90,126" fill="#facc15" opacity="0.85" />

        {/* ── Stepped Ziggurat Setback (Tier 2) ────────────────────────── */}
        <rect x="30" y="130" width="80" height="50" fill="#000" stroke="#000" strokeWidth="3" />
        <line x1="30" y1="130" x2="110" y2="130" stroke="#facc15" strokeWidth="2.5" opacity="0.6" />
        {Array.from({ length: 2 }).map((_, r) => (
          <g key={r}>
            <rect x="42" y={142 + r * 18} width="12" height="11" rx="1" fill="#facc15" opacity="0.9" />
            <rect x="64" y={142 + r * 18} width="12" height="11" rx="1" fill="#facc15" opacity="0.95" />
            <rect x="86" y={142 + r * 18} width="12" height="11" rx="1" fill="#facc15" opacity="0.9" />
          </g>
        ))}

        {/* ── Main Tower Shaft (Tier 1) ─────────────────────────────────── */}
        <rect x="14" y="180" width="112" height="340" fill="#080808" stroke="#000" strokeWidth="4" />
        <line x1="14" y1="180" x2="126" y2="180" stroke="#facc15" strokeWidth="2.5" opacity="0.5" />

        {/* Symmetrical Illuminated Art Deco Windows */}
        {Array.from({ length: 14 }).map((_, r) => {
          const yPos = 200 + r * 22;
          return (
            <g key={r}>
              <rect x="26" y={yPos} width="15" height="13" rx="1" fill="#facc15" opacity={(r + 1) % 4 === 0 ? 0.95 : 0.3} />
              <rect x="48" y={yPos} width="15" height="13" rx="1" fill="#facc15" opacity={(r * 2) % 3 === 0 ? 0.9 : 0.25} />
              <rect x="77" y={yPos} width="15" height="13" rx="1" fill="#facc15" opacity={(r + 2) % 5 === 0 ? 0.95 : 0.2} />
              <rect x="99" y={yPos} width="15" height="13" rx="1" fill="#facc15" opacity={(r * 3) % 4 === 0 ? 0.9 : 0.3} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// 3. Contemporary Midtown Slanted Glass Tower
export function NYCSlantedGlassTower({ className = "" }) {
  return (
    <div className={`relative flex items-end h-[82%] w-14 sm:w-18 md:w-22 lg:w-26 xl:w-28 flex-shrink-0 select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 120 440"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full overflow-visible drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)]"
      >
        {/* ── Diagonal Slanted Crown ───────────────────────────────────── */}
        <polygon
          points="14,100 106,38 106,440 14,440"
          fill="#0c0c0c"
          stroke="#000"
          strokeWidth="4"
        />
        {/* Antenna Mast on Highest Edge */}
        <line x1="102" y1="38" x2="102" y2="4" stroke="#000" strokeWidth="3" />
        <circle cx="102" cy="4" r="3" fill="#facc15" />

        {/* Slanted Glass Crown Louvers */}
        <line x1="26" y1="92" x2="96" y2="48" stroke="#facc15" strokeWidth="2.5" opacity="0.7" />
        <line x1="38" y1="105" x2="96" y2="68" stroke="#facc15" strokeWidth="1.8" opacity="0.5" />

        {/* Vertical Mullion Window Strips */}
        {Array.from({ length: 13 }).map((_, r) => {
          const yPos = 130 + r * 23;
          return (
            <g key={r}>
              <rect x="26" y={yPos} width="15" height="14" rx="1" fill="#facc15" opacity={(r + 1) % 3 === 0 ? 0.95 : 0.25} />
              <rect x="47" y={yPos} width="15" height="14" rx="1" fill="#facc15" opacity={(r * 2) % 4 === 0 ? 0.85 : 0.2} />
              <rect x="68" y={yPos} width="15" height="14" rx="1" fill="#facc15" opacity={(r + 2) % 3 === 0 ? 0.9 : 0.3} />
              <rect x="88" y={yPos} width="13" height="14" rx="1" fill="#facc15" opacity={(r * 3) % 5 === 0 ? 0.95 : 0.2} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// 4. Empire State-Style Tiered Observation Tower
export function NYCEmpireStateTower({ className = "" }) {
  return (
    <div className={`relative flex items-end h-[94%] w-16 sm:w-20 md:w-26 lg:w-30 xl:w-34 flex-shrink-0 select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 140 520"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full overflow-visible drop-shadow-[7px_7px_0px_rgba(0,0,0,0.9)]"
      >
        {/* ── Mooring Broadcast Spire with Red Collision Beacon ───────── */}
        <line x1="70" y1="70" x2="70" y2="6" stroke="#000" strokeWidth="4" />
        <line x1="63" y1="70" x2="70" y2="28" stroke="#000" strokeWidth="2" />
        <line x1="77" y1="70" x2="70" y2="28" stroke="#000" strokeWidth="2" />
        <circle cx="70" cy="5" r="4.5" fill="#ef4444" className="animate-pulse" />

        {/* ── Tier 4: Observation Deck Crown ───────────────────────────── */}
        <rect x="50" y="70" width="40" height="35" fill="#000" stroke="#000" strokeWidth="2.5" />
        <circle cx="70" cy="85" r="7" fill="#facc15" opacity="0.85" />

        {/* ── Tier 3: Upper Setback ─────────────────────────────────────── */}
        <rect x="38" y="105" width="64" height="45" fill="#000" stroke="#000" strokeWidth="3" />
        <line x1="38" y1="105" x2="102" y2="105" stroke="#facc15" strokeWidth="2" opacity="0.5" />
        <rect x="46" y="118" width="13" height="12" rx="1" fill="#facc15" opacity="0.9" />
        <rect x="63" y="118" width="13" height="12" rx="1" fill="#facc15" opacity="0.95" />
        <rect x="80" y="118" width="13" height="12" rx="1" fill="#facc15" opacity="0.9" />

        {/* ── Tier 2: Mid Setback ───────────────────────────────────────── */}
        <rect x="24" y="150" width="92" height="60" fill="#080808" stroke="#000" strokeWidth="3.5" />
        <line x1="24" y1="150" x2="116" y2="150" stroke="#facc15" strokeWidth="2" opacity="0.5" />
        {Array.from({ length: 2 }).map((_, r) => (
          <g key={r}>
            <rect x="34" y={165 + r * 22} width="14" height="13" rx="1" fill="#facc15" opacity="0.85" />
            <rect x="54" y={165 + r * 22} width="14" height="13" rx="1" fill="#facc15" opacity="0.95" />
            <rect x="74" y={165 + r * 22} width="14" height="13" rx="1" fill="#facc15" opacity="0.9" />
            <rect x="94" y={165 + r * 22} width="14" height="13" rx="1" fill="#facc15" opacity="0.8" />
          </g>
        ))}

        {/* ── Tier 1: Main Base Tower Shaft ─────────────────────────────── */}
        <rect x="12" y="210" width="116" height="310" fill="#000" stroke="#000" strokeWidth="4" />
        <line x1="12" y1="210" x2="128" y2="210" stroke="#facc15" strokeWidth="2.5" opacity="0.5" />

        {/* Classical Stepped High-Rise Window Matrix */}
        {Array.from({ length: 13 }).map((_, r) => {
          const yPos = 228 + r * 21;
          return (
            <g key={r}>
              <rect x="23" y={yPos} width="15" height="12" rx="1" fill="#facc15" opacity={(r + 1) % 3 === 0 ? 0.95 : 0.25} />
              <rect x="46" y={yPos} width="15" height="12" rx="1" fill="#facc15" opacity={(r * 2) % 4 === 0 ? 0.9 : 0.2} />
              <rect x="79" y={yPos} width="15" height="12" rx="1" fill="#facc15" opacity={(r + 2) % 3 === 0 ? 0.95 : 0.3} />
              <rect x="102" y={yPos} width="15" height="12" rx="1" fill="#facc15" opacity={(r * 3) % 5 === 0 ? 0.85 : 0.2} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// 5. Contemporary Diamond-Faceted Crown Tower
export function NYCDiamondCrown({ className = "" }) {
  return (
    <div className={`relative flex items-end h-[82%] w-14 sm:w-18 md:w-22 lg:w-26 xl:w-28 flex-shrink-0 select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 120 440"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full overflow-visible drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)]"
      >
        {/* ── Diamond Crown Spire ──────────────────────────────────────── */}
        <polygon points="18,110 60,42 102,110" fill="#000" stroke="#000" strokeWidth="3" />
        <line x1="60" y1="42" x2="60" y2="10" stroke="#000" strokeWidth="3.5" />
        <circle cx="60" cy="8" r="3.5" fill="#ef4444" className="animate-pulse" />

        {/* Main Glass Tower Shaft */}
        <rect x="16" y="110" width="88" height="330" fill="#080808" stroke="#000" strokeWidth="4" />
        <line x1="16" y1="110" x2="104" y2="110" stroke="#facc15" strokeWidth="2.5" opacity="0.5" />

        {/* Cantilever Skybridge Box Element */}
        <rect x="8" y="170" width="104" height="36" fill="#000" stroke="#facc15" strokeWidth="1.5" opacity="0.95" />
        <line x1="14" y1="188" x2="106" y2="188" stroke="#facc15" strokeWidth="2" strokeDasharray="6 4" />

        {/* Grid Windows */}
        {Array.from({ length: 10 }).map((_, r) => {
          const yPos = 220 + r * 21;
          return (
            <g key={r}>
              <rect x="26" y={yPos} width="17" height="13" rx="1" fill="#facc15" opacity={(r + 1) % 4 === 0 ? 0.95 : 0.25} />
              <rect x="51" y={yPos} width="17" height="13" rx="1" fill="#facc15" opacity={(r * 2) % 3 === 0 ? 0.9 : 0.2} />
              <rect x="76" y={yPos} width="17" height="13" rx="1" fill="#facc15" opacity={(r + 2) % 5 === 0 ? 0.95 : 0.3} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// 6. Classic NYC Industrial Loft with Rooftop Water Tank & Dish
export function NYCLoftWaterTank({ className = "" }) {
  return (
    <div className={`relative flex items-end h-[68%] w-14 sm:w-18 md:w-22 lg:w-26 xl:w-28 flex-shrink-0 select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 110 380"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full overflow-visible drop-shadow-[5px_5px_0px_rgba(0,0,0,0.85)]"
      >
        {/* ── Rooftop Water Tank on Stilts ─────────────────────────────── */}
        <line x1="60" y1="90" x2="68" y2="56" stroke="#000" strokeWidth="3" />
        <line x1="98" y1="90" x2="90" y2="56" stroke="#000" strokeWidth="3" />
        <line x1="64" y1="74" x2="94" y2="74" stroke="#facc15" strokeWidth="1.8" />
        <rect x="66" y="34" width="24" height="24" rx="2" fill="#000" stroke="#facc15" strokeWidth="1.8" />
        <line x1="66" y1="41" x2="90" y2="41" stroke="#facc15" strokeWidth="1.2" />
        <line x1="66" y1="50" x2="90" y2="50" stroke="#facc15" strokeWidth="1.2" />
        <polygon points="63,34 78,18 93,34" fill="#000" stroke="#facc15" strokeWidth="2" />

        {/* Communications Parabolic Dish */}
        <ellipse cx="32" cy="72" rx="15" ry="8" fill="#000" stroke="#facc15" strokeWidth="1.8" />
        <line x1="32" y1="72" x2="32" y2="56" stroke="#facc15" strokeWidth="2.5" />

        {/* Heavy Classical Parapet Cornice */}
        <rect x="6" y="86" width="98" height="10" rx="1.5" fill="#000" stroke="#facc15" strokeWidth="1.5" />

        {/* Main Building Shaft */}
        <rect x="10" y="96" width="90" height="284" fill="#0a0a0a" stroke="#000" strokeWidth="4" />

        {/* Industrial Sash Windows */}
        {Array.from({ length: 11 }).map((_, r) => {
          const yPos = 112 + r * 24;
          return (
            <g key={r}>
              <rect x="20" y={yPos} width="14" height="15" rx="1" fill="#facc15" opacity={(r * 2) % 3 === 0 ? 0.95 : 0.3} />
              <rect x="41" y={yPos} width="14" height="15" rx="1" fill="#facc15" opacity={(r + 1) % 4 === 0 ? 0.85 : 0.2} />
              <rect x="62" y={yPos} width="14" height="15" rx="1" fill="#facc15" opacity={(r + 2) % 3 === 0 ? 0.9 : 0.25} />
              <rect x="81" y={yPos} width="13" height="15" rx="1" fill="#facc15" opacity={(r * 3) % 5 === 0 ? 0.95 : 0.2} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// 7. Distant Background Manhattan Silhouettes
export function DistantNYCSkyline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1600 360"
      preserveAspectRatio="none"
      className={`w-full h-full overflow-hidden select-none pointer-events-none opacity-35 ${className}`}
    >
      <path
        d="
          M 0 360
          L 0 240
          L 60 240 L 60 180 L 90 180 L 90 360
          L 140 360 L 140 140 L 160 140 L 160 80 L 175 80 L 175 360
          L 240 360 L 240 210 L 290 210 L 290 360
          L 340 360 L 340 160 L 370 110 L 400 160 L 400 360
          L 460 360 L 460 220 L 510 220 L 510 360
          L 560 360 L 560 120 L 585 120 L 585 40 L 595 40 L 595 120 L 620 120 L 620 360
          L 680 360 L 680 190 L 730 190 L 730 360
          L 870 360 L 870 170 L 920 170 L 920 360
          L 980 360 L 980 130 L 1010 80 L 1040 130 L 1040 360
          L 1090 360 L 1090 200 L 1140 200 L 1140 360
          L 1190 360 L 1190 110 L 1220 110 L 1220 50 L 1230 50 L 1230 110 L 1260 110 L 1260 360
          L 1320 360 L 1320 180 L 1370 180 L 1370 360
          L 1420 360 L 1420 150 L 1460 150 L 1460 360
          L 1520 360 L 1520 230 L 1600 230 L 1600 360
          Z
        "
        fill="#000000"
      />
      {Array.from({ length: 30 }).map((_, i) => (
        <rect
          key={i}
          x={80 + (i * 48) % 1440}
          y={150 + (i * 23) % 180}
          width="7"
          height="9"
          fill="#facc15"
          opacity="0.35"
        />
      ))}
    </svg>
  );
}

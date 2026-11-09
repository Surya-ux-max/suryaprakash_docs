/**
 * NYCBuildings
 * Iconic New York City skyscrapers designed to stand side-by-side with the "I" building.
 * Features quintessential NYC architectural landmarks:
 * - Chrysler-style Art Deco stepped spire
 * - Classic pre-war high-rises with wooden rooftop water tanks on steel trestles
 * - Empire State-style tiered observation tower with broadcast needle
 * - Contemporary Midtown slanted-crown glass skyscrapers
 * Pure architectural silhouettes, zero text stencils.
 */

// 1. Classic Pre-War NYC High-Rise with Rooftop Wooden Water Tank
export function NYCPreWarWaterTank({ className = "" }) {
  return (
    <svg
      viewBox="0 0 110 380"
      preserveAspectRatio="xMidYMax meet"
      className={`h-[68%] w-auto overflow-visible select-none pointer-events-none drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* ── Rooftop Water Tank (Quintessential NYC hallmark) ─────────── */}
      {/* Steel trestle support legs */}
      <line x1="28" y1="90" x2="36" y2="60" stroke="#000" strokeWidth="2.5" />
      <line x1="62" y1="90" x2="54" y2="60" stroke="#000" strokeWidth="2.5" />
      <line x1="32" y1="75" x2="58" y2="75" stroke="#facc15" strokeWidth="1.2" />
      {/* Wooden cylindrical barrel */}
      <rect x="34" y="38" width="22" height="22" rx="1.5" fill="#000" stroke="#facc15" strokeWidth="1.2" />
      {/* Metal compression hoops around barrel */}
      <line x1="34" y1="44" x2="56" y2="44" stroke="#facc15" strokeWidth="1" />
      <line x1="34" y1="52" x2="56" y2="52" stroke="#facc15" strokeWidth="1" />
      {/* Conical roof cap */}
      <polygon points="32,38 45,24 58,38" fill="#000" stroke="#facc15" strokeWidth="1.5" />

      {/* Roof bulkhead penthouse & chimney */}
      <rect x="70" y="74" width="22" height="16" fill="#000" />
      <line x1="84" y1="74" x2="84" y2="62" stroke="#000" strokeWidth="2" />

      {/* Heavy stone parapet cornice molding */}
      <rect x="10" y="88" width="90" height="8" rx="1" fill="#000" stroke="#facc15" strokeWidth="1" />

      {/* Main Building Shaft */}
      <rect x="14" y="96" width="82" height="284" fill="#0c0c0c" stroke="#000" strokeWidth="3" />

      {/* Pre-War Sash Windows Grid */}
      {Array.from({ length: 11 }).map((_, row) => {
        const yPos = 112 + row * 24;
        return (
          <g key={row}>
            <rect x="24" y={yPos} width="12" height="15" rx="1" fill="#facc15" opacity={(row + 1) % 3 === 0 ? 0.9 : 0.2} />
            <rect x="42" y={yPos} width="12" height="15" rx="1" fill="#facc15" opacity={(row * 2) % 4 === 0 ? 0.85 : 0.25} />
            <rect x="60" y={yPos} width="12" height="15" rx="1" fill="#facc15" opacity={(row + 2) % 3 === 0 ? 0.9 : 0.15} />
            <rect x="76" y={yPos} width="12" height="15" rx="1" fill="#facc15" opacity={(row + 3) % 5 === 0 ? 0.8 : 0.2} />
          </g>
        );
      })}
    </svg>
  );
}

// 2. The Art Deco Chrysler-Style Spire Skyscraper
export function NYCChryslerSpire({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 520"
      preserveAspectRatio="xMidYMax meet"
      className={`h-[92%] w-auto overflow-visible select-none pointer-events-none drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)] ${className}`}
    >
      {/* ── Spire Needle with Blinking Beacon ────────────────────────── */}
      <line x1="70" y1="80" x2="70" y2="12" stroke="#000" strokeWidth="3.5" />
      <line x1="64" y1="80" x2="70" y2="35" stroke="#000" strokeWidth="1.8" />
      <line x1="76" y1="80" x2="70" y2="35" stroke="#000" strokeWidth="1.8" />
      <circle cx="70" cy="10" r="3.5" fill="#ef4444" className="animate-pulse" />

      {/* ── Art Deco Arched Sunburst Crown (Tier 3) ─────────────────── */}
      <polygon points="45,130 70,80 95,130" fill="#000" stroke="#facc15" strokeWidth="1.5" />
      {/* Sunburst triangular triangular window cutouts */}
      <polygon points="62,118 70,102 78,118" fill="#facc15" />
      <polygon points="52,126 58,114 62,126" fill="#facc15" opacity="0.8" />
      <polygon points="78,126 82,114 88,126" fill="#facc15" opacity="0.8" />

      {/* ── Stepped Ziggurat Setback (Tier 2) ────────────────────────── */}
      <rect x="32" y="130" width="76" height="50" fill="#000" stroke="#000" strokeWidth="2" />
      <line x1="32" y1="130" x2="108" y2="130" stroke="#facc15" strokeWidth="2" opacity="0.4" />
      {Array.from({ length: 2 }).map((_, r) => (
        <g key={r}>
          <rect x="42" y={142 + r * 18} width="12" height="10" rx="1" fill="#facc15" opacity="0.85" />
          <rect x="64" y={142 + r * 18} width="12" height="10" rx="1" fill="#facc15" opacity="0.9" />
          <rect x="86" y={142 + r * 18} width="12" height="10" rx="1" fill="#facc15" opacity="0.85" />
        </g>
      ))}

      {/* ── Main Tower Shaft (Tier 1) ─────────────────────────────────── */}
      <rect x="16" y="180" width="108" height="340" fill="#050505" stroke="#000" strokeWidth="3.5" />
      <line x1="16" y1="180" x2="124" y2="180" stroke="#facc15" strokeWidth="2" opacity="0.4" />

      {/* Symmetrical Illuminated Art Deco Windows */}
      {Array.from({ length: 14 }).map((_, r) => {
        const yPos = 200 + r * 22;
        return (
          <g key={r}>
            <rect x="28" y={yPos} width="14" height="13" rx="1" fill="#facc15" opacity={(r + 1) % 4 === 0 ? 0.9 : 0.25} />
            <rect x="48" y={yPos} width="14" height="13" rx="1" fill="#facc15" opacity={(r * 2) % 3 === 0 ? 0.85 : 0.2} />
            <rect x="78" y={yPos} width="14" height="13" rx="1" fill="#facc15" opacity={(r + 2) % 5 === 0 ? 0.9 : 0.15} />
            <rect x="98" y={yPos} width="14" height="13" rx="1" fill="#facc15" opacity={(r * 3) % 4 === 0 ? 0.85 : 0.25} />
          </g>
        );
      })}
    </svg>
  );
}

// 3. Contemporary Midtown Slanted Glass Tower
export function NYCSlantedGlassTower({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 440"
      preserveAspectRatio="xMidYMax meet"
      className={`h-[80%] w-auto overflow-visible select-none pointer-events-none drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* ── Diagonal Slanted Crown ───────────────────────────────────── */}
      <polygon
        points="15,100 105,40 105,440 15,440"
        fill="#0a0a0a"
        stroke="#000"
        strokeWidth="3.5"
      />
      {/* Antenna Mast on Highest Edge */}
      <line x1="102" y1="40" x2="102" y2="5" stroke="#000" strokeWidth="2.5" />
      <circle cx="102" cy="4" r="2.5" fill="#facc15" />

      {/* Slanted Glass Crown Louvers */}
      <line x1="28" y1="92" x2="95" y2="48" stroke="#facc15" strokeWidth="2" opacity="0.6" />
      <line x1="40" y1="105" x2="95" y2="68" stroke="#facc15" strokeWidth="1.5" opacity="0.4" />

      {/* Vertical Mullion Window Strips */}
      {Array.from({ length: 13 }).map((_, r) => {
        const yPos = 130 + r * 23;
        return (
          <g key={r}>
            <rect x="28" y={yPos} width="14" height="14" rx="1" fill="#facc15" opacity={(r + 1) % 3 === 0 ? 0.9 : 0.2} />
            <rect x="48" y={yPos} width="14" height="14" rx="1" fill="#facc15" opacity={(r * 2) % 4 === 0 ? 0.8 : 0.15} />
            <rect x="68" y={yPos} width="14" height="14" rx="1" fill="#facc15" opacity={(r + 2) % 3 === 0 ? 0.85 : 0.25} />
            <rect x="86" y={yPos} width="12" height="14" rx="1" fill="#facc15" opacity={(r * 3) % 5 === 0 ? 0.9 : 0.15} />
          </g>
        );
      })}
    </svg>
  );
}

// 4. Empire State-Style Tiered Observation Tower
export function NYCEmpireStateTower({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 520"
      preserveAspectRatio="xMidYMax meet"
      className={`h-[94%] w-auto overflow-visible select-none pointer-events-none drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)] ${className}`}
    >
      {/* ── Mooring Broadcast Spire ───────────────────────────────────── */}
      <line x1="70" y1="70" x2="70" y2="8" stroke="#000" strokeWidth="3.5" />
      <line x1="64" y1="70" x2="70" y2="30" stroke="#000" strokeWidth="1.8" />
      <line x1="76" y1="70" x2="70" y2="30" stroke="#000" strokeWidth="1.8" />
      <circle cx="70" cy="6" r="3.5" fill="#ef4444" className="animate-pulse" />

      {/* ── Tier 4: Observation Deck Crown ───────────────────────────── */}
      <rect x="52" y="70" width="36" height="35" fill="#000" stroke="#000" strokeWidth="2" />
      <circle cx="70" cy="85" r="6" fill="#facc15" opacity="0.8" />

      {/* ── Tier 3: Upper Setback ─────────────────────────────────────── */}
      <rect x="40" y="105" width="60" height="45" fill="#000" stroke="#000" strokeWidth="2.5" />
      <line x1="40" y1="105" x2="100" y2="105" stroke="#facc15" strokeWidth="1.5" opacity="0.4" />
      <rect x="48" y="118" width="12" height="12" rx="1" fill="#facc15" opacity="0.85" />
      <rect x="64" y="118" width="12" height="12" rx="1" fill="#facc15" opacity="0.9" />
      <rect x="80" y="118" width="12" height="12" rx="1" fill="#facc15" opacity="0.85" />

      {/* ── Tier 2: Mid Setback ───────────────────────────────────────── */}
      <rect x="26" y="150" width="88" height="60" fill="#080808" stroke="#000" strokeWidth="3" />
      <line x1="26" y1="150" x2="114" y2="150" stroke="#facc15" strokeWidth="2" opacity="0.4" />
      {Array.from({ length: 2 }).map((_, r) => (
        <g key={r}>
          <rect x="36" y={165 + r * 22} width="13" height="13" rx="1" fill="#facc15" opacity="0.8" />
          <rect x="55" y={165 + r * 22} width="13" height="13" rx="1" fill="#facc15" opacity="0.9" />
          <rect x="74" y={165 + r * 22} width="13" height="13" rx="1" fill="#facc15" opacity="0.85" />
          <rect x="93" y={165 + r * 22} width="13" height="13" rx="1" fill="#facc15" opacity="0.75" />
        </g>
      ))}

      {/* ── Tier 1: Main Base Tower Shaft ─────────────────────────────── */}
      <rect x="14" y="210" width="112" height="310" fill="#000" stroke="#000" strokeWidth="3.5" />
      <line x1="14" y1="210" x2="126" y2="210" stroke="#facc15" strokeWidth="2" opacity="0.4" />

      {/* Classical Stepped High-Rise Window Matrix */}
      {Array.from({ length: 13 }).map((_, r) => {
        const yPos = 228 + r * 21;
        return (
          <g key={r}>
            <rect x="25" y={yPos} width="14" height="12" rx="1" fill="#facc15" opacity={(r + 1) % 3 === 0 ? 0.9 : 0.2} />
            <rect x="47" y={yPos} width="14" height="12" rx="1" fill="#facc15" opacity={(r * 2) % 4 === 0 ? 0.85 : 0.15} />
            <rect x="79" y={yPos} width="14" height="12" rx="1" fill="#facc15" opacity={(r + 2) % 3 === 0 ? 0.9 : 0.25} />
            <rect x="101" y={yPos} width="14" height="12" rx="1" fill="#facc15" opacity={(r * 3) % 5 === 0 ? 0.8 : 0.15} />
          </g>
        );
      })}
    </svg>
  );
}

// 5. Contemporary Diamond-Faceted Crown Tower
export function NYCDiamondCrown({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 440"
      preserveAspectRatio="xMidYMax meet"
      className={`h-[82%] w-auto overflow-visible select-none pointer-events-none drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* ── Diamond Crown Spire ──────────────────────────────────────── */}
      <polygon points="20,110 60,45 100,110" fill="#000" stroke="#000" strokeWidth="2.5" />
      <line x1="60" y1="45" x2="60" y2="12" stroke="#000" strokeWidth="3" />
      <circle cx="60" cy="10" r="3" fill="#ef4444" className="animate-pulse" />

      {/* Main Glass Tower Shaft */}
      <rect x="18" y="110" width="84" height="330" fill="#080808" stroke="#000" strokeWidth="3.5" />
      <line x1="18" y1="110" x2="102" y2="110" stroke="#facc15" strokeWidth="2" opacity="0.4" />

      {/* Cantilever Skybridge Box Element */}
      <rect x="10" y="170" width="100" height="35" fill="#000" stroke="#facc15" strokeWidth="1.2" opacity="0.95" />
      <line x1="16" y1="188" x2="104" y2="188" stroke="#facc15" strokeWidth="2" strokeDasharray="6 4" />

      {/* Grid Windows */}
      {Array.from({ length: 10 }).map((_, r) => {
        const yPos = 220 + r * 21;
        return (
          <g key={r}>
            <rect x="28" y={yPos} width="16" height="13" rx="1" fill="#facc15" opacity={(r + 1) % 4 === 0 ? 0.9 : 0.2} />
            <rect x="52" y={yPos} width="16" height="13" rx="1" fill="#facc15" opacity={(r * 2) % 3 === 0 ? 0.85 : 0.15} />
            <rect x="76" y={yPos} width="16" height="13" rx="1" fill="#facc15" opacity={(r + 2) % 5 === 0 ? 0.9 : 0.25} />
          </g>
        );
      })}
    </svg>
  );
}

// 6. Classic NYC Industrial Loft with Rooftop Water Tank & Dish
export function NYCLoftWaterTank({ className = "" }) {
  return (
    <svg
      viewBox="0 0 110 380"
      preserveAspectRatio="xMidYMax meet"
      className={`h-[68%] w-auto overflow-visible select-none pointer-events-none drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* ── Rooftop Water Tank on Stilts ─────────────────────────────── */}
      <line x1="62" y1="88" x2="70" y2="58" stroke="#000" strokeWidth="2.5" />
      <line x1="96" y1="88" x2="88" y2="58" stroke="#000" strokeWidth="2.5" />
      <line x1="66" y1="73" x2="92" y2="73" stroke="#facc15" strokeWidth="1.2" />
      <rect x="68" y="36" width="22" height="22" rx="1.5" fill="#000" stroke="#facc15" strokeWidth="1.2" />
      <line x1="68" y1="42" x2="90" y2="42" stroke="#facc15" strokeWidth="1" />
      <line x1="68" y1="50" x2="90" y2="50" stroke="#facc15" strokeWidth="1" />
      <polygon points="66,36 79,22 92,36" fill="#000" stroke="#facc15" strokeWidth="1.5" />

      {/* Communications Parabolic Dish */}
      <ellipse cx="32" cy="74" rx="14" ry="7" fill="#000" stroke="#facc15" strokeWidth="1.5" />
      <line x1="32" y1="74" x2="32" y2="60" stroke="#facc15" strokeWidth="2" />

      {/* Heavy Classical Parapet Cornice */}
      <rect x="8" y="86" width="94" height="8" rx="1" fill="#000" stroke="#facc15" strokeWidth="1" />

      {/* Main Building Shaft */}
      <rect x="12" y="94" width="86" height="286" fill="#0c0c0c" stroke="#000" strokeWidth="3" />

      {/* Industrial Sash Windows */}
      {Array.from({ length: 11 }).map((_, r) => {
        const yPos = 110 + r * 24;
        return (
          <g key={r}>
            <rect x="22" y={yPos} width="13" height="15" rx="1" fill="#facc15" opacity={(r * 2) % 3 === 0 ? 0.9 : 0.25} />
            <rect x="42" y={yPos} width="13" height="15" rx="1" fill="#facc15" opacity={(r + 1) % 4 === 0 ? 0.8 : 0.15} />
            <rect x="62" y={yPos} width="13" height="15" rx="1" fill="#facc15" opacity={(r + 2) % 3 === 0 ? 0.85 : 0.2} />
            <rect x="80" y={yPos} width="12" height="15" rx="1" fill="#facc15" opacity={(r * 3) % 5 === 0 ? 0.9 : 0.15} />
          </g>
        );
      })}
    </svg>
  );
}

// 7. Distant Background Manhattan Silhouettes (Provides depth behind the street block)
export function DistantNYCSkyline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1600 360"
      preserveAspectRatio="none"
      className={`w-full h-full overflow-hidden select-none pointer-events-none opacity-30 ${className}`}
    >
      {/* Distant supertalls, towers & needles */}
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
      {/* Soft distant window pinpricks */}
      {Array.from({ length: 30 }).map((_, i) => (
        <rect
          key={i}
          x={80 + (i * 48) % 1440}
          y={150 + (i * 23) % 180}
          width="6"
          height="8"
          fill="#facc15"
          opacity="0.25"
        />
      ))}
    </svg>
  );
}


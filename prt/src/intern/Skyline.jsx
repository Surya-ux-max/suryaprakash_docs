/**
 * Skyline
 * Architectural city skyline flanking and framing the central "I" monolith skyscraper.
 * Adds dense metropolitan scale with varied building heights, antenna masts,
 * illuminated window bays, and industrial rooftop infrastructure.
 */
export default function Skyline({ className = "" }) {
  return (
    <div
      className={`absolute inset-x-0 bottom-0 h-[64vh] pointer-events-none select-none z-1 flex justify-between items-end overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* ── LEFT FLANK METROPOLITAN SKYLINE (7+ Distinct High-Rises) ─────── */}
      <svg
        viewBox="0 0 540 500"
        preserveAspectRatio="xMinYMax meet"
        className="w-[34vw] md:w-[28vw] xl:w-[26vw] h-full overflow-visible opacity-95"
      >
        <defs>
          <linearGradient id="left-skyline-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1c1c1c" />
            <stop offset="60%" stopColor="#0c0c0c" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>

        {/* ── Building L1: Far-Left Industrial Server & Cloud Hub (Height: 230) ── */}
        <g id="bldg-l1">
          <rect x="5" y="270" width="85" height="230" fill="#050505" stroke="#000" strokeWidth="2.5" />
          {/* Server Louvers / Ventilation Grilles */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              x1="15"
              y1={290 + i * 22}
              x2="80"
              y2={290 + i * 22}
              stroke="#facc15"
              strokeWidth="2"
              strokeDasharray="6 4"
              opacity="0.35"
            />
          ))}
          {/* Rooftop AC Chillers & Pipes */}
          <rect x="18" y="254" width="24" height="16" fill="#000" stroke="#facc15" strokeWidth="1" opacity="0.8" />
          <rect x="50" y="258" width="22" height="12" fill="#000" />
          <line x1="42" y1="262" x2="50" y2="262" stroke="#facc15" strokeWidth="1.5" />
        </g>

        {/* ── Building L2: Slanted Glass Crown Tech Spire (Height: 380) ──── */}
        <g id="bldg-l2">
          {/* Slanted glass crown polygon */}
          <polygon
            points="70,140 170,80 170,500 70,500"
            fill="url(#left-skyline-grad)"
            stroke="#000"
            strokeWidth="3.5"
          />
          {/* Communications spire */}
          <line x1="165" y1="80" x2="165" y2="30" stroke="#000" strokeWidth="3" />
          <line x1="161" y1="80" x2="165" y2="48" stroke="#000" strokeWidth="1.5" />
          {/* Red blinking aviation beacon */}
          <circle cx="165" cy="28" r="3" fill="#ef4444" className="animate-pulse" />

          {/* Vertical Matrix of Illuminated Glass Bays */}
          {Array.from({ length: 14 }).map((_, row) => {
            const yPos = 160 + row * 23;
            return (
              <g key={row}>
                <rect x="85" y={yPos} width="16" height="13" rx="1" fill="#facc15" opacity={(row + 1) % 3 === 0 ? 0.9 : 0.2} />
                <rect x="106" y={yPos} width="16" height="13" rx="1" fill="#facc15" opacity={(row + 2) % 4 === 0 ? 0.8 : 0.15} />
                <rect x="127" y={yPos} width="16" height="13" rx="1" fill="#facc15" opacity={(row + 1) % 2 === 0 ? 0.85 : 0.2} />
                <rect x="148" y={yPos} width="14" height="13" rx="1" fill="#facc15" opacity={(row + 3) % 5 === 0 ? 0.9 : 0.15} />
              </g>
            );
          })}
        </g>

        {/* ── Building L3: Art-Deco Tiered Stepped Skyscraper (Height: 460) ── */}
        <g id="bldg-l3">
          {/* Base Tier (Storeys 1-20) */}
          <rect x="155" y="160" width="130" height="340" fill="#000" stroke="#000" strokeWidth="4" />
          {/* Middle Tier (Storeys 21-32) */}
          <rect x="175" y="110" width="90" height="50" fill="#000" stroke="#facc15" strokeWidth="1" />
          {/* Top Tier (Observation Spire) */}
          <rect x="195" y="65" width="50" height="45" fill="#000" />
          
          {/* Deco Spire Needle */}
          <line x1="220" y1="65" x2="220" y2="12" stroke="#000" strokeWidth="3.5" />
          <line x1="213" y1="65" x2="220" y2="35" stroke="#000" strokeWidth="1.8" />
          <line x1="227" y1="65" x2="220" y2="35" stroke="#000" strokeWidth="1.8" />
          <circle cx="220" cy="10" r="3.5" fill="#facc15" />

          {/* Stepped Tower Illuminated Windows */}
          {Array.from({ length: 15 }).map((_, r) => {
            const yPos = 180 + r * 20;
            return (
              <g key={r}>
                <rect x="185" y={yPos} width="14" height="11" rx="1" fill="#facc15" opacity={(r * 2) % 3 === 0 ? 0.9 : 0.25} />
                <rect x="205" y={yPos} width="14" height="11" rx="1" fill="#facc15" opacity={(r + 1) % 4 === 0 ? 0.8 : 0.2} />
                <rect x="225" y={yPos} width="14" height="11" rx="1" fill="#facc15" opacity={(r + 2) % 3 === 0 ? 0.85 : 0.15} />
                <rect x="245" y={yPos} width="14" height="11" rx="1" fill="#facc15" opacity={(r * 3) % 5 === 0 ? 0.9 : 0.2} />
              </g>
            );
          })}
        </g>

        {/* ── Building L4: Modern Cylindrical Tower with Curved Bands (Height: 330) ── */}
        <g id="bldg-l4">
          <rect x="265" y="170" width="95" height="330" rx="6" fill="#0e0e0e" stroke="#000" strokeWidth="3" />
          {/* Curved wrap-around window ribbons */}
          {Array.from({ length: 11 }).map((_, r) => (
            <path
              key={r}
              d={`M 268 ${195 + r * 26} Q 312 ${202 + r * 26} 356 ${195 + r * 26}`}
              stroke="#facc15"
              strokeWidth="2.5"
              fill="none"
              opacity={(r + 1) % 2 === 0 ? 0.75 : 0.2}
            />
          ))}
          {/* Roof communications dome */}
          <ellipse cx="312" cy="168" rx="20" ry="10" fill="#000" stroke="#facc15" strokeWidth="1.5" />
        </g>

        {/* ── Building L5: Autonomous Construction High-Rise with Yellow Crane ── */}
        <g id="bldg-l5">
          <rect x="345" y="210" width="105" height="290" fill="#000" stroke="#000" strokeWidth="3" />
          {/* Scaffolding frame on upper storeys */}
          <g stroke="#facc15" strokeWidth="1" opacity="0.4">
            <line x1="350" y1="215" x2="445" y2="215" />
            <line x1="350" y1="235" x2="445" y2="235" />
            <line x1="350" y1="255" x2="445" y2="255" />
            <line x1="350" y1="215" x2="380" y2="255" />
            <line x1="380" y1="215" x2="350" y2="255" />
            <line x1="390" y1="215" x2="420" y2="255" />
            <line x1="420" y1="215" x2="390" y2="255" />
          </g>
          {/* Construction Rooftop Crane */}
          <line x1="400" y1="210" x2="400" y2="155" stroke="#facc15" strokeWidth="2.5" />
          <line x1="375" y1="165" x2="445" y2="165" stroke="#facc15" strokeWidth="2.5" />
          <line x1="400" y1="155" x2="445" y2="165" stroke="#000" strokeWidth="1.5" />
          <line x1="440" y1="165" x2="440" y2="195" stroke="#000" strokeWidth="1.5" strokeDasharray="2 2" />
        </g>

        {/* ── Building L6: Foreground Low-Rise Portal Block (Height: 250) ─── */}
        <g id="bldg-l6">
          <rect x="430" y="250" width="105" height="250" fill="#080808" stroke="#000" strokeWidth="3" />
          {/* Architectural illuminated window strips */}
          {Array.from({ length: 8 }).map((_, r) => (
            <line
              key={r}
              x1="442"
              y1={270 + r * 26}
              x2="525"
              y2={270 + r * 26}
              stroke="#facc15"
              strokeWidth="2.5"
              strokeDasharray="10 6"
              opacity="0.4"
            />
          ))}
          {/* Corporate district sign */}
          <text
            x="485"
            y="485"
            textAnchor="middle"
            fill="#facc15"
            fontSize="7"
            fontFamily="monospace"
            letterSpacing="2"
            opacity="0.5"
          >
            DISTRICT // 09
          </text>
        </g>
      </svg>

      {/* ── RIGHT FLANK METROPOLITAN SKYLINE (7+ Distinct High-Rises) ────── */}
      <svg
        viewBox="0 0 540 500"
        preserveAspectRatio="xMaxYMax meet"
        className="w-[34vw] md:w-[28vw] xl:w-[26vw] h-full overflow-visible opacity-95"
      >
        <defs>
          <linearGradient id="right-skyline-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1c1c1c" />
            <stop offset="60%" stopColor="#0c0c0c" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>

        {/* ── Building R1: Foreground Transition Block (Height: 260) ───── */}
        <g id="bldg-r1">
          <rect x="5" y="240" width="110" height="260" fill="#080808" stroke="#000" strokeWidth="3" />
          {/* Architectural louvers */}
          {Array.from({ length: 9 }).map((_, r) => (
            <line
              key={r}
              x1="18"
              y1={260 + r * 25}
              x2="100"
              y2={260 + r * 25}
              stroke="#facc15"
              strokeWidth="2.2"
              strokeDasharray="8 5"
              opacity="0.35"
            />
          ))}
          {/* Rooftop parabolic dish */}
          <ellipse cx="60" cy="226" rx="16" ry="8" fill="#000" stroke="#facc15" strokeWidth="1.8" />
          <line x1="60" y1="226" x2="60" y2="212" stroke="#facc15" strokeWidth="2.2" />
        </g>

        {/* ── Building R2: Triangular Crown Spire Tower (Height: 460) ───── */}
        <g id="bldg-r2">
          {/* Main shaft */}
          <rect x="95" y="140" width="135" height="360" fill="url(#right-skyline-grad)" stroke="#000" strokeWidth="3.5" />
          {/* Triangular glass spire crown */}
          <polygon points="95,140 162,55 230,140" fill="#000" stroke="#000" strokeWidth="2.5" />
          {/* Top spire beacon */}
          <line x1="162" y1="55" x2="162" y2="10" stroke="#000" strokeWidth="3.5" />
          <circle cx="162" cy="8" r="3.5" fill="#ef4444" className="animate-pulse" />

          {/* Tower window matrix */}
          {Array.from({ length: 15 }).map((_, r) => {
            const yPos = 165 + r * 21;
            return (
              <g key={r}>
                <rect x="110" y={yPos} width="16" height="12" rx="1" fill="#facc15" opacity={(r + 1) % 4 === 0 ? 0.9 : 0.2} />
                <rect x="135" y={yPos} width="16" height="12" rx="1" fill="#facc15" opacity={(r * 2) % 3 === 0 ? 0.8 : 0.15} />
                <rect x="160" y={yPos} width="16" height="12" rx="1" fill="#facc15" opacity={(r + 2) % 5 === 0 ? 0.85 : 0.2} />
                <rect x="185" y={yPos} width="16" height="12" rx="1" fill="#facc15" opacity={(r * 3) % 4 === 0 ? 0.9 : 0.15} />
              </g>
            );
          })}
        </g>

        {/* ── Building R3: Modular Cantilevered R&D Tower (Height: 360) ─── */}
        <g id="bldg-r3">
          <rect x="215" y="150" width="115" height="350" fill="#000" stroke="#000" strokeWidth="3" />
          {/* Cantilever overhang box */}
          <rect x="195" y="210" width="145" height="50" fill="#000" stroke="#facc15" strokeWidth="1.5" opacity="0.95" />
          <text x="268" y="240" textAnchor="middle" fill="#facc15" fontSize="8" fontFamily="monospace" letterSpacing="2" fontWeight="bold">
            R&amp;D // SWARM
          </text>
          {/* Vertical windows */}
          {Array.from({ length: 10 }).map((_, r) => (
            <line
              key={r}
              x1="230"
              y1={280 + r * 20}
              x2="315"
              y2={280 + r * 20}
              stroke="#facc15"
              strokeWidth="2"
              strokeDasharray="12 6"
              opacity="0.4"
            />
          ))}
        </g>

        {/* ── Building R4: Twin Spire Financial Center (Height: 410) ────── */}
        <g id="bldg-r4">
          <rect x="315" y="160" width="110" height="340" fill="#0a0a0a" stroke="#000" strokeWidth="3" />
          {/* Twin Spire Crowns */}
          <polygon points="325,160 345,90 360,160" fill="#000" stroke="#000" strokeWidth="2" />
          <line x1="345" y1="90" x2="345" y2="40" stroke="#000" strokeWidth="2.5" />
          <circle cx="345" cy="38" r="2.5" fill="#facc15" />

          <polygon points="370,160 385,90 405,160" fill="#000" stroke="#000" strokeWidth="2" />
          <line x1="385" y1="90" x2="385" y2="40" stroke="#000" strokeWidth="2.5" />
          <circle cx="385" cy="38" r="2.5" fill="#facc15" />

          {/* Floor grid */}
          {Array.from({ length: 12 }).map((_, r) => (
            <line
              key={r}
              x1="325"
              y1={180 + r * 24}
              x2="415"
              y2={180 + r * 24}
              stroke="#facc15"
              strokeWidth="1.8"
              strokeDasharray="8 6"
              opacity="0.3"
            />
          ))}
        </g>

        {/* ── Building R5: Far-Right Communications Lattice Mast (Height: 330) ── */}
        <g id="bldg-r5">
          <rect x="410" y="230" width="125" height="270" fill="#050505" stroke="#000" strokeWidth="2.5" />
          {/* Open-frame steel truss radio mast */}
          <line x1="475" y1="230" x2="475" y2="70" stroke="#000" strokeWidth="3.5" />
          <line x1="455" y1="230" x2="475" y2="120" stroke="#000" strokeWidth="2" />
          <line x1="495" y1="230" x2="475" y2="120" stroke="#000" strokeWidth="2" />
          <line x1="462" y1="120" x2="488" y2="120" stroke="#facc15" strokeWidth="2" />
          <line x1="466" y1="88" x2="484" y2="88" stroke="#facc15" strokeWidth="2" />
          <circle cx="475" cy="68" r="3.5" fill="#ef4444" className="animate-pulse" />
          {/* Radar receiver dish */}
          <circle cx="445" cy="180" r="10" fill="#000" stroke="#facc15" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

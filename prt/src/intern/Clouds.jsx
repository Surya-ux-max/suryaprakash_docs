import { motion } from "motion/react";

/**
 * Clouds
 * Cinematic New York City storm atmosphere with multi-layered, organic graphic black clouds.
 * Features rolling billows, atmospheric depth gradients, and lower wisps drifting
 * across the skyscraper spires. Pure visual art, zero text.
 */
export default function Clouds({ className = "" }) {
  return (
    <div
      className={`absolute inset-x-0 top-0 h-[48vh] pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* ── Atmospheric Overhead Vignette Gradient ──────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 h-[24vh] z-1"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        }}
      />

      {/* ── Layer 1: Distant Heavy Storm Shelf (Slow rolling drift) ──────── */}
      <motion.svg
        initial={{ x: "-2%" }}
        animate={{ x: ["-2%", "2%", "-2%"] }}
        transition={{ repeat: Infinity, duration: 38, ease: "easeInOut" }}
        viewBox="0 0 1800 340"
        preserveAspectRatio="none"
        className="absolute -top-6 -left-[5%] w-[110%] h-[85%] z-2 opacity-90 overflow-visible"
      >
        <defs>
          <linearGradient id="cloud-noir-deep" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="65%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#181818" />
          </linearGradient>
        </defs>

        {/* Deep atmospheric rolling cloud banks */}
        <path
          d="
            M -80 0
            L 1880 0
            L 1880 140
            Q 1800 90 1710 120
            Q 1600 75 1490 110
            Q 1380 60 1250 100
            Q 1130 50 1010 95
            Q 890 55 770 105
            Q 650 60 520 95
            Q 400 50 280 100
            Q 160 65 50 105
            Q -20 80 -80 120
            Z
          "
          fill="url(#cloud-noir-deep)"
        />
      </motion.svg>

      {/* ── Layer 2: Mid-Level Billowing Storm Clouds (Volumetric curves) ─── */}
      <motion.svg
        initial={{ x: "1.5%" }}
        animate={{ x: ["1.5%", "-2.5%", "1.5%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
        viewBox="0 0 1800 360"
        preserveAspectRatio="none"
        className="absolute -top-4 -left-[4%] w-[108%] h-full z-3 opacity-95 overflow-visible"
      >
        {/* Left NYC Storm Bank */}
        <path
          d="
            M -80 -20
            L 860 -20
            Q 840 75 760 90
            Q 670 45 580 75
            Q 490 35 400 70
            Q 300 25 200 70
            Q 100 35 -80 80
            Z
          "
          fill="#000000"
        />

        {/* Right NYC Storm Bank */}
        <path
          d="
            M 1020 -20
            L 1880 -20
            L 1880 110
            Q 1780 60 1680 90
            Q 1580 40 1470 80
            Q 1360 45 1250 85
            Q 1150 50 1060 80
            Q 1030 35 1020 -20
            Z
          "
          fill="#000000"
        />
      </motion.svg>

      {/* ── Layer 3: Foreground Billows & Spire-Cutting Tendrils ──────────── */}
      <motion.svg
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "3%", "0%"] }}
        transition={{ repeat: Infinity, duration: 32, ease: "easeInOut" }}
        viewBox="0 0 1800 360"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full z-4 opacity-100 overflow-visible"
      >
        {/* Continuous top horizon serrated cap */}
        <path
          d="
            M -60 0
            L 1860 0
            L 1860 65
            Q 1770 25 1680 50
            Q 1590 18 1490 45
            Q 1390 10 1280 42
            Q 1170 18 1060 50
            Q 960 10 840 45
            Q 730 18 610 48
            Q 500 8 390 42
            Q 290 18 170 50
            Q 70 12 -60 55
            Z
          "
          fill="#000000"
        />

        {/* Floating Gotham-style puffy cloud masses that interlock with skyscrapers */}
        {/* West Manhattan Cloud Cluster */}
        <path
          d="
            M 140 95
            C 180 60 245 60 285 90
            C 325 72 385 78 420 110
            C 455 100 495 122 495 145
            C 495 172 445 184 405 178
            C 365 190 285 190 235 172
            C 185 184 130 166 135 132
            C 125 116 135 100 140 95
            Z
          "
          fill="#000000"
          opacity="0.95"
        />

        {/* East Manhattan Cloud Cluster */}
        <path
          d="
            M 1340 90
            C 1380 55 1445 55 1485 85
            C 1525 68 1585 74 1620 106
            C 1655 96 1695 118 1695 142
            C 1695 168 1645 180 1605 174
            C 1565 186 1485 186 1435 168
            C 1385 180 1330 162 1335 130
            C 1325 114 1335 98 1340 90
            Z
          "
          fill="#000000"
          opacity="0.95"
        />

        {/* Midtown Central Storm Billow framing the "I" Mast */}
        <path
          d="
            M 760 55
            C 800 35 850 35 880 52
            C 915 40 960 46 985 70
            C 1010 65 1035 80 1035 95
            C 1035 115 1000 125 970 120
            C 940 128 880 128 840 115
            C 800 124 760 112 765 90
            C 755 78 760 65 760 55
            Z
          "
          fill="#000000"
          opacity="0.88"
        />
      </motion.svg>
    </div>
  );
}

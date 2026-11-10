import { motion } from "motion/react";

/**
 * Clouds
 * Atmospheric black storm clouds rolling along the upper skyline.
 * Specifically sculpted with an open aperture on the top-left to ensure the
 * "I ntern" section title is 100% visible, crisp, and never obstructed.
 */
export default function Clouds({ className = "" }) {
  return (
    <div
      className={`absolute inset-x-0 top-0 h-[26vh] pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* ── Layer 1: Distant Upper Horizon Storm Shelf ────────────────────── */}
      {/* Starts from x=380 to keep the top-left title completely clear */}
      <motion.svg
        initial={{ x: "-1%" }}
        animate={{ x: ["-1%", "1.5%", "-1%"] }}
        transition={{ repeat: Infinity, duration: 32, ease: "easeInOut" }}
        viewBox="0 0 1600 220"
        preserveAspectRatio="none"
        className="absolute top-0 right-0 w-[85%] h-[85%] z-1 opacity-90 overflow-visible"
      >
        <defs>
          <linearGradient id="cloud-storm-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="70%" stopColor="#0c0c0c" />
            <stop offset="100%" stopColor="#181818" />
          </linearGradient>
        </defs>

        {/* Heavy storm cap sweeping from center to the right horizon */}
        <path
          d="
            M 120 0
            L 1650 0
            L 1650 110
            Q 1540 65 1440 95
            Q 1320 50 1200 85
            Q 1080 40 960 80
            Q 840 45 720 90
            Q 600 40 480 80
            Q 360 45 260 75
            Q 180 50 120 0
            Z
          "
          fill="url(#cloud-storm-grad)"
        />
      </motion.svg>

      {/* ── Layer 2: Mid-Altitude Rolling Storm Billows (Center & Right) ─── */}
      <motion.svg
        initial={{ x: "1%" }}
        animate={{ x: ["1%", "-2%", "1%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
        viewBox="0 0 1600 240"
        preserveAspectRatio="none"
        className="absolute top-0 right-0 w-[80%] h-full z-2 opacity-95 overflow-visible"
      >
        {/* Billowing cumulus mass over the midtown and east Manhattan spires */}
        <path
          d="
            M 280 -10
            L 1650 -10
            L 1650 75
            Q 1560 30 1460 65
            Q 1360 25 1250 60
            Q 1140 30 1030 65
            Q 920 35 820 60
            Q 710 25 610 55
            Q 500 25 400 50
            Q 320 30 280 -10
            Z
          "
          fill="#000000"
        />

        {/* Dynamic storm puff cutting across the tallest east spires */}
        <path
          d="
            M 1180 60
            C 1220 30 1280 30 1320 55
            C 1360 40 1415 45 1445 75
            C 1475 68 1515 85 1515 105
            C 1515 125 1470 135 1435 130
            C 1395 140 1325 140 1280 125
            C 1235 135 1185 120 1190 95
            C 1180 82 1185 70 1180 60
            Z
          "
          fill="#000000"
          opacity="0.95"
        />
      </motion.svg>

      {/* ── Layer 3: Central Ambient Storm Wisp Behind "I" Skyscraper Mast ── */}
      <motion.svg
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "2.5%", "0%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full z-3 opacity-90 overflow-visible"
      >
        {/* Floating wisp gently hovering around the central mast */}
        <path
          d="
            M 680 35
            C 720 18 770 18 800 32
            C 835 22 875 28 895 50
            C 920 45 945 58 945 72
            C 945 88 915 98 890 92
            C 860 100 810 100 775 88
            C 740 96 705 85 710 68
            C 700 58 702 46 680 35
            Z
          "
          fill="#000000"
        />
      </motion.svg>
    </div>
  );
}

import { motion } from "motion/react";

/**
 * Clouds
 * Graphic black storm clouds rolling across the metropolis skyline,
 * framing the skyscraper spires in a high-contrast editorial neo-noir aesthetic.
 */
export default function Clouds({ className = "" }) {
  return (
    <div
      className={`absolute inset-x-0 top-0 h-[42vh] pointer-events-none select-none overflow-hidden z-10 ${className}`}
      aria-hidden="true"
    >
      {/* ── Layer 1: Distant Upper Storm Shelf (Heavy top horizon black cap) ── */}
      <motion.svg
        initial={{ x: "-1%" }}
        animate={{ x: ["-1%", "1.5%", "-1%"] }}
        transition={{ repeat: Infinity, duration: 32, ease: "easeInOut" }}
        viewBox="0 0 1600 300"
        preserveAspectRatio="none"
        className="absolute -top-6 -left-[5%] w-[110%] h-[80%] opacity-95 overflow-visible"
      >
        <defs>
          <linearGradient id="cloud-depth-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="70%" stopColor="#080808" />
            <stop offset="100%" stopColor="#141414" />
          </linearGradient>
        </defs>

        {/* Heavy overarching storm deck */}
        <path
          d="
            M -80 0
            L 1680 0
            L 1680 130
            Q 1600 95 1520 120
            Q 1420 80 1320 110
            Q 1220 70 1100 105
            Q 990 60 880 100
            Q 770 50 640 95
            Q 530 65 420 105
            Q 310 60 200 95
            Q 90 70 -80 110
            Z
          "
          fill="url(#cloud-depth-grad)"
        />
      </motion.svg>

      {/* ── Layer 2: Mid-Altitude Rolling Cloud Billows (Left & Right Banks) ── */}
      <motion.svg
        initial={{ x: "1.5%" }}
        animate={{ x: ["1.5%", "-2.5%", "1.5%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
        viewBox="0 0 1600 320"
        preserveAspectRatio="none"
        className="absolute -top-4 -left-[3%] w-[108%] h-full opacity-90 overflow-visible"
      >
        {/* Left billowing storm bank */}
        <path
          d="
            M -60 -20
            L 720 -20
            Q 700 65 630 75
            Q 550 40 470 65
            Q 390 30 310 60
            Q 220 25 140 65
            Q 60 35 -60 75
            Z
          "
          fill="#000000"
        />

        {/* Right billowing storm bank */}
        <path
          d="
            M 920 -20
            L 1680 -20
            L 1680 90
            Q 1590 50 1500 75
            Q 1410 30 1320 65
            Q 1230 40 1140 70
            Q 1050 45 970 70
            Q 940 35 920 -20
            Z
          "
          fill="#000000"
        />
      </motion.svg>

      {/* ── Layer 3: Foreground Graphic Clouds (Cutting across building spires) ── */}
      <motion.svg
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "3.5%", "0%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
        viewBox="0 0 1600 320"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full opacity-100 overflow-visible"
      >
        {/* Top-rim serrated graphic billows */}
        <path
          d="
            M -40 0
            L 1640 0
            L 1640 55
            Q 1560 20 1480 42
            Q 1400 15 1310 38
            Q 1220 8 1120 36
            Q 1020 15 930 42
            Q 840 8 740 38
            Q 640 15 540 40
            Q 440 5 350 36
            Q 260 15 160 42
            Q 70 10 -40 48
            Z
          "
          fill="#000000"
        />

        {/* Floating atmospheric puff cluster (Left) */}
        <path
          d="
            M 110 85
            C 145 55 200 55 235 80
            C 270 65 325 70 355 100
            C 385 90 420 110 420 130
            C 420 155 375 165 340 160
            C 305 170 235 170 190 155
            C 145 165 95 150 100 120
            C 90 105 100 90 110 85
            Z
          "
          fill="#000000"
          opacity="0.95"
        />

        {/* Floating atmospheric puff cluster (Right) */}
        <path
          d="
            M 1240 80
            C 1275 50 1330 50 1365 75
            C 1400 60 1455 65 1485 95
            C 1515 90 1550 105 1550 130
            C 1550 150 1505 162 1470 155
            C 1435 165 1370 165 1325 150
            C 1280 160 1235 145 1240 115
            C 1230 100 1235 88 1240 80
            Z
          "
          fill="#000000"
          opacity="0.95"
        />

        {/* Central brooding cloud wisp behind the "I" mast */}
        <ellipse cx="800" cy="45" rx="140" ry="24" fill="#000000" opacity="0.8" />
        <ellipse cx="760" cy="55" rx="90" ry="18" fill="#000000" opacity="0.9" />
        <ellipse cx="840" cy="52" rx="95" ry="19" fill="#000000" opacity="0.9" />
      </motion.svg>
    </div>
  );
}

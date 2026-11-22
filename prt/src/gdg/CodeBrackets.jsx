import { useState } from "react";
import { motion } from "motion/react";

/**
 * CodeBrackets
 * The official Google Developer Groups (GDG) `< >` emblem from the uploaded reference image.
 * Features:
 * - Left Bracket `<`: Red rounded pill on top, Blue rounded pill on bottom with white outline/seam
 * - Right Bracket `>`: Green rounded pill on top, Yellow/Orange rounded pill on bottom with white outline/seam
 * - Sharp scalable SVG vector with authentic Google brand colors
 * - Interactive spring expansion on hover
 */
export default function CodeBrackets({ className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ scale: isHovered ? 1.08 : 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className={`relative flex items-center justify-center select-none cursor-pointer py-4 lg:py-0 ${className}`}
      title="Google Developer Groups Logo"
    >
      <svg
        viewBox="0 0 160 100"
        className="w-36 sm:w-48 md:w-60 lg:w-72 xl:w-80 h-auto overflow-visible drop-shadow-[0_0_24px_rgba(255,255,255,0.18)]"
      >
        {/* ── Left Bracket `<` (Red Top + Blue Bottom) ──────────────── */}
        <motion.g
          animate={{ x: isHovered ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          {/* Blue Arm Outline (Bottom-Left Apex to Bottom-Right) */}
          <line
            x1="28"
            y1="46"
            x2="66"
            y2="84"
            stroke="#ffffff"
            strokeWidth="24"
            strokeLinecap="round"
          />
          {/* Blue Arm Core */}
          <line
            x1="28"
            y1="46"
            x2="66"
            y2="84"
            stroke="#1F87FC"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Red Arm Outline (Upper-Right Segment) */}
          <line
            x1="45"
            y1="29"
            x2="66"
            y2="8"
            stroke="#ffffff"
            strokeWidth="24"
            strokeLinecap="round"
          />
          {/* Red Arm Core */}
          <line
            x1="45"
            y1="29"
            x2="66"
            y2="8"
            stroke="#EA4335"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </motion.g>

        {/* ── Right Bracket `>` (Green Top + Yellow Bottom) ─────────── */}
        <motion.g
          animate={{ x: isHovered ? 6 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          {/* Green Arm Outline (Top-Left to Right Apex) */}
          <line
            x1="94"
            y1="8"
            x2="132"
            y2="46"
            stroke="#ffffff"
            strokeWidth="24"
            strokeLinecap="round"
          />
          {/* Green Arm Core */}
          <line
            x1="94"
            y1="8"
            x2="132"
            y2="46"
            stroke="#00AB47"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Yellow Arm Outline (Bottom-Left Segment) */}
          <line
            x1="115"
            y1="63"
            x2="94"
            y2="84"
            stroke="#ffffff"
            strokeWidth="24"
            strokeLinecap="round"
          />
          {/* Yellow Arm Core */}
          <line
            x1="115"
            y1="63"
            x2="94"
            y2="84"
            stroke="#FFA700"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}

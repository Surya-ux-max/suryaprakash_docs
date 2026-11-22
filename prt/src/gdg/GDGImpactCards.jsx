import { motion } from "motion/react";
import { GDG_DATA } from "./GDGData";

/**
 * GDGImpactCards
 * Interactive metrics and initiative cards demonstrating leadership impact
 * as the AI Domain Lead at GDG on Campus SECE.
 */
export default function GDGImpactCards({ className = "" }) {
  const { stats, tracks } = GDG_DATA;

  return (
    <div className={`w-full ${className}`}>
      {/* ── 4-Column Metric Grid ───────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.45 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative bg-[#0a0a0a] border-2 border-yellow-400/25 hover:border-yellow-400 p-3 sm:p-4 rounded-xl transition-all duration-300 shadow-[3px_3px_0px_#000] hover:shadow-[4px_4px_0px_#facc15] overflow-hidden flex flex-col justify-between"
          >
            {/* Subtle top laser scan accent on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400/0 group-hover:bg-yellow-400 transition-colors duration-300" />

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-yellow-400 tracking-tight font-mono">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] text-yellow-400/40 uppercase">
                  0{i + 1}
                </span>
              </div>
              <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white group-hover:text-yellow-400 transition-colors">
                {stat.label}
              </h4>
            </div>

            <p className="text-[10px] sm:text-[11px] text-yellow-400/65 font-medium leading-relaxed mt-1.5 line-clamp-2">
              {tracks[i]?.desc || stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import CardSwap, { Card } from "./CardSwap";

import certNvidia from "./certificates/Nvidia - RAD.webp";
import certServicenow from "./certificates/Servicenow.webp";
import certGuidewire from "./certificates/guidewire.webp";
import certPowerBI from "./certificates/powerbi.webp";

const CERT_DATA = [
  {
    title: "NVIDIA RAD - LLMs",
    issuer: "NVIDIA",
    year: "2026",
    color: "#76B900",
    image: certNvidia,
  },
  {
    title: "ServiceNow CSA",
    issuer: "ServiceNow",
    year: "2025",
    color: "#81B5A1",
    image: certServicenow,
  },
  {
    title: "Guidewire",
    issuer: "Guidewire Software",
    year: "2025",
    color: "#F4A825",
    image: certGuidewire,
  },
  {
    title: "Power BI",
    issuer: "Microsoft",
    year: "2024",
    color: "#F2C811",
    image: certPowerBI,
  },
];

export default function CertificatesSection() {
  return (
    <section className="h-screen w-full snap-start relative flex overflow-hidden bg-black select-none">
      {/* Background C watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.025] leading-none select-none">
        <span className="text-[min(90vh,50vw)] font-black tracking-[-0.1em] text-yellow-400">C</span>
      </div>

      {/* Left Sidebar — narrow, title + index */}
      <div className="flex flex-col justify-center gap-[3vh] px-[5vw] w-[32vw] flex-shrink-0 z-10 border-r border-yellow-400/10">
        {/* Label */}
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-8 bg-yellow-400" />
          <span className="text-yellow-400/50 font-mono text-xs uppercase tracking-[0.25em]">Verified Skills</span>
        </div>

        {/* Title */}
        <div className="flex items-end leading-[0.8]">
          <h1 className="text-[min(22vh,10vw)] font-black tracking-[-0.08em] text-yellow-400">C</h1>
          <span className="text-[min(6vh,3.2vw)] font-bold ml-[0.8vw] mb-[1.5vh] text-yellow-400">ertificates</span>
        </div>

        {/* Numbered cert index */}
        <div className="flex flex-col gap-4 mt-2">
          {CERT_DATA.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-start gap-3 group"
            >
              <span className="text-yellow-400/40 font-mono text-xs mt-1 w-5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_8px_currentColor]" style={{ backgroundColor: cert.color, color: cert.color }} />
                  <span className="text-white font-black text-[min(2vh,1.1vw)] uppercase tracking-tight group-hover:text-yellow-400 transition-colors">
                    {cert.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-white/40 font-mono text-[min(1.3vh,0.75vw)] uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                  <span className="text-yellow-400/30 text-[10px]">•</span>
                  <span className="text-yellow-400/50 font-mono text-[min(1.2vh,0.7vw)]">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More coming */}
        <div className="flex items-center gap-2 mt-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400/60" />
          </span>
          <span className="text-yellow-400/40 font-mono text-xs uppercase tracking-widest">More coming soon</span>
        </div>
      </div>

      {/* Right — Centered CardSwap */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Subtle radial glow behind stack */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[50vw] h-[50vw] rounded-full bg-yellow-400/5 blur-[80px]" />
        </div>

        {/* The card stack */}
        <div className="relative" style={{ width: 'min(58vh, 38vw)', height: 'min(44vh, 29vw)' }}>
          <CardSwap
            width="min(58vh, 38vw)"
            height="min(44vh, 29vw)"
            cardDistance={44}
            verticalDistance={48}
            delay={3600}
            pauseOnHover={false}
            skewAmount={4}
            easing="elastic"
            containerClassName="absolute bottom-0 right-0 translate-x-[8%] translate-y-[12%] overflow-visible"
          >
            {CERT_DATA.map((cert, i) => (
              <Card key={i} customClass="overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)] border-2 border-yellow-400/20">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* Overlay gradient + label */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <p className="text-yellow-400 font-black text-[min(2.2vh,1.4vw)] uppercase tracking-tight leading-none">{cert.title}</p>
                  <p className="text-white/60 font-mono text-[min(1.4vh,0.85vw)] uppercase tracking-widest mt-1">{cert.issuer} • {cert.year}</p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

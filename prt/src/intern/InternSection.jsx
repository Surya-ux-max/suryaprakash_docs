import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { RooftopWorker, GroundCrew, SuspendedCradle } from "./TinyHumans";
import ClimbingRope from "./ClimbingRope";
import InternCard from "./InternCard";
import { INTERN_DATA } from "./internData";

export default function InternSection() {
  const [isRopeHovered, setIsRopeHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const showDetails = isRopeHovered || isPinned;

  return (
    <section className="h-screen w-full snap-start relative flex flex-col justify-between overflow-hidden bg-yellow-400 px-[6vw] py-[4vh] select-none text-black">
      {/* ── Background Architectural Atmosphere ───────────────────────────── */}
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Atmospheric Upward Searchlights / Beams from ground */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[85vh] pointer-events-none opacity-20 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 45%, transparent 75%)",
        }}
      />

      {/* Background Watermark */}
      <div className="absolute right-[-2vw] bottom-0 pointer-events-none opacity-[0.04] leading-none select-none z-0">
        <h1 className="text-[min(90vh,55vw)] font-black tracking-[-0.1em] text-black">
          AI
        </h1>
      </div>

      {/* ── Elevation Ruler on Left Edge (Adds towering skyscraper scale) ─── */}
      <div className="absolute left-[2.5vw] top-[18vh] bottom-[18vh] hidden xl:flex flex-col justify-between z-10 font-mono text-[9px] text-black/40 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1.5px] bg-black/40" />
          <span>420M // ROOF</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-[1px] bg-black/30" />
          <span>320M // MULTI-AGENT</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-[1px] bg-black/30" />
          <span>210M // RAG INFRA</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1.5px] bg-black/40" />
          <span>000M // BASELINE</span>
        </div>
      </div>

      {/* ── Top Header ───────────────────────────────────────────────────── */}
      <div className="flex justify-between items-end leading-[0.8] z-10 select-none">
        <div className="flex items-end">
          <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em] text-black">
            I
          </h1>
          <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh] text-black">
            ntern
          </span>
          <span className="ml-4 mb-[2vh] px-3 py-1 bg-black text-yellow-400 font-mono text-xs font-bold uppercase rounded-md shadow-[2px_2px_0px_#000] hidden sm:inline-block">
            Autonomous AI
          </span>
        </div>

        {/* Quick Role Pill */}
        <div className="hidden sm:flex items-center gap-3 border-2 border-black px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest bg-yellow-400 text-black shadow-[3px_3px_0px_#000]">
          <Briefcase size={16} /> {INTERN_DATA.role}
        </div>
      </div>

      {/* ── Center Stage: The Gigantic "I" Building & Construction Scene ─── */}
      <div className="relative flex-1 flex items-center justify-center z-10 my-[1vh]">
        {/* Monolith Container */}
        <div className="relative flex flex-col items-center justify-center w-[min(68vw,440px)] h-[min(68vh,520px)]">
          
          {/* 1. Rooftop Crane & Worker (Top-Right of "I") */}
          <div className="absolute -top-8 md:-top-10 right-[10%] md:right-[14%] z-20">
            <RooftopWorker />
          </div>

          {/* 2. Suspended Inspection Cradle (Left Flank of "I") */}
          <div className="absolute top-[28%] -left-10 md:-left-12 z-20 hidden sm:block">
            <SuspendedCradle />
          </div>

          {/* ── The Architectural "I" Monolith ───────────────────────────── */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-between group cursor-pointer"
            onClick={() => setIsPinned((prev) => !prev)}
            title="Agentic Monolith - Hover rope or click to inspect details"
          >
            {/* Top Roof Deck (Top Crossbar) */}
            <div className="w-[90%] h-[15%] bg-black rounded-t-2xl border-4 border-black shadow-[8px_8px_0px_#000] relative flex items-center justify-between px-4 overflow-hidden">
              {/* Roof structural steel girders */}
              <div className="flex gap-1.5 w-full opacity-25">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className="flex-1 h-3 bg-yellow-400 rounded-[1px]" />
                ))}
              </div>
              <div className="absolute left-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[9px] text-yellow-400 tracking-widest uppercase font-bold">
                  AGENTIC TOWER // 01
                </span>
              </div>
            </div>

            {/* Central High-Rise Tower Shaft */}
            <div className="w-[46%] h-[70%] bg-black border-x-4 border-black relative flex flex-col justify-between p-3.5 shadow-[12px_0px_0px_rgba(0,0,0,0.18)] overflow-hidden">
              {/* Laser scan line overlay */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400/30 group-hover:animate-[scan_1.6s_ease-in-out_infinite]" />

              {/* Vertical Stencil Signage */}
              <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none opacity-25">
                <span className="font-mono text-[10px] tracking-[0.38em] uppercase -rotate-90 origin-center text-yellow-400 whitespace-nowrap font-black">
                  AGENTIC AI ARCHITECTURE
                </span>
              </div>

              {/* Rows of Illuminated High-Rise Windows */}
              <div className="grid grid-cols-4 gap-2 w-full my-auto z-10 pl-5 pr-1">
                {Array.from({ length: 24 }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      opacity: [0.35, idx % 3 === 0 ? 0.95 : 0.55, 0.35],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.4 + (idx % 4) * 0.5,
                      ease: "easeInOut",
                    }}
                    className={`h-4 rounded-[2px] border ${
                      idx % 5 === 0
                        ? "bg-yellow-400 border-yellow-400 shadow-[0_0_8px_#facc15]"
                        : idx % 3 === 0
                        ? "bg-amber-400/40 border-amber-400/60"
                        : "bg-yellow-400/20 border-yellow-400/40"
                    }`}
                  />
                ))}
              </div>

              {/* Building Floor Info */}
              <div className="border-t border-yellow-400/20 pt-2 flex justify-between items-center z-10 font-mono text-[9px] text-yellow-400/60 uppercase">
                <span>ELEV 420M</span>
                <span className="text-yellow-400 font-bold">R&amp;D LAB</span>
              </div>
            </div>

            {/* Reinforced Industrial Foundation (Bottom Crossbar) */}
            <div className="w-[98%] h-[15%] bg-black rounded-b-2xl border-4 border-black shadow-[10px_10px_0px_#000] relative flex items-center justify-between px-5 overflow-hidden">
              {/* Foundation Hazard Stripes */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #facc15, #facc15 8px, transparent 8px, transparent 16px)",
                }}
              />
              <div className="flex gap-2 relative z-10">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-yellow-400/40 border border-black" />
                ))}
              </div>
              <div className="text-right relative z-10">
                <span className="font-mono text-[9px] text-yellow-400/60 uppercase block">ROLE DESIGNATION</span>
                <span className="font-black text-xs text-yellow-400 uppercase tracking-wider">
                  AGENTIC AI INTERN
                </span>
              </div>
            </div>
          </div>

          {/* ── Interactive Climbing Rope ─────────────────────────────────── */}
          <ClimbingRope
            isHovered={showDetails}
            onHoverChange={setIsRopeHovered}
            onToggle={() => setIsPinned((prev) => !prev)}
          />

          {/* ── Ground Anchor Crew ────────────────────────────────────────── */}
          <div className="absolute -bottom-7 md:-bottom-8 left-[40%] md:left-[45%] z-20">
            <GroundCrew />
          </div>

          {/* ── The Clean, Compact Floating Simple Card ────────────────────── */}
          <InternCard
            isOpen={showDetails}
            onClose={() => {
              setIsPinned(false);
              setIsRopeHovered(false);
            }}
          />
        </div>
      </div>

      {/* ── Bottom Industrial Warning & Interaction Bar ─────────────────── */}
      <div className="flex justify-between items-center z-10 border-t-2 border-black/20 pt-3 text-black">
        <div className="flex items-center gap-3">
          {/* Mini Hazard indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-black text-yellow-400 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
            Active Hoist
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/80">
            Hover Rope to Inspect Details
          </span>
        </div>

        <button
          onClick={() => setIsPinned((prev) => !prev)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
            showDetails
              ? "bg-black text-yellow-400 border-black shadow-[3px_3px_0px_#000]"
              : "bg-transparent text-black border-black hover:bg-black hover:text-yellow-400"
          }`}
        >
          <span>{showDetails ? "Close Card" : "Inspect Role"}</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
}

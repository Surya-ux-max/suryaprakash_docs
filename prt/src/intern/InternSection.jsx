import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { RooftopWorker, GroundCrew } from "./TinyHumans";
import ClimbingRope from "./ClimbingRope";
import InternHUD from "./InternHUD";
import { INTERN_DATA } from "./internData";

export default function InternSection() {
  const [isRopeHovered, setIsRopeHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const showDetails = isRopeHovered || isPinned;

  return (
    <section className="h-screen w-full snap-start relative flex flex-col justify-between overflow-hidden bg-yellow-400 px-[6vw] py-[5vh] select-none text-black">
      {/* Background Architectural Blueprint Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Watermark */}
      <div className="absolute right-[-2vw] bottom-0 pointer-events-none opacity-[0.04] leading-none select-none z-0">
        <h1 className="text-[min(90vh,55vw)] font-black tracking-[-0.1em] text-black">
          AI
        </h1>
      </div>

      {/* Top Section Header */}
      <div className="flex justify-between items-end leading-[0.8] z-10 select-none">
        <div className="flex items-end">
          <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em] text-black">
            I
          </h1>
          <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh] text-black">
            ntern
          </span>
        </div>

        {/* Quick Role Pill */}
        <div className="hidden sm:flex items-center gap-3 border-2 border-black px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest bg-yellow-400 text-black shadow-[3px_3px_0px_#000]">
          <Briefcase size={16} /> {INTERN_DATA.role}
        </div>
      </div>

      {/* Center Stage: The Gigantic "I" Skyscraper + Tiny Humans + Climbing Rope */}
      <div className="relative flex-1 flex items-center justify-center z-10 my-[2vh]">
        {/* Monolith Container */}
        <div className="relative flex flex-col items-center justify-center w-[min(64vw,420px)] h-[min(68vh,520px)]">
          
          {/* ── Rooftop Worker & Crane (Top Edge) ────────────────────────── */}
          <div className="absolute -top-7 md:-top-9 right-[18%] md:right-[22%] z-20">
            <RooftopWorker />
            {/* Blinking radio tower beacon */}
            <span className="absolute -top-1 right-2 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500 border border-black" />
            </span>
          </div>

          {/* ── The Gigantic "I" Building (Architectural Monolith) ──────── */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-between group cursor-pointer"
            onClick={() => setIsPinned((prev) => !prev)}
            title="Agentic Tower - Click or hover the rope to view role details"
          >
            {/* 1. Top Crossbar (Roof cornice) */}
            <div className="w-[88%] h-[16%] bg-black rounded-t-xl border-4 border-black shadow-[8px_8px_0px_#000] relative flex items-center justify-between px-4 overflow-hidden">
              {/* Roof girders */}
              <div className="flex gap-1.5 w-full opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex-1 h-3 bg-yellow-400 rounded-[1px]" />
                ))}
              </div>
              <span className="absolute right-3 font-mono text-[9px] text-yellow-400 tracking-widest uppercase font-bold">
                TOWER 01
              </span>
            </div>

            {/* 2. Central Vertical Shaft (Main High-Rise Column) */}
            <div className="w-[44%] h-[68%] bg-black border-x-4 border-black relative flex flex-col justify-between p-3.5 shadow-[10px_0px_0px_rgba(0,0,0,0.15)] overflow-hidden">
              {/* Laser scan line overlay */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400/25 group-hover:animate-[scan_1.6s_ease-in-out_infinite]" />

              {/* Stencil vertical signage on the building */}
              <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none opacity-20">
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase -rotate-90 origin-center text-yellow-400 whitespace-nowrap font-black">
                  AGENTIC AI SYSTEMS
                </span>
              </div>

              {/* Rows of Architectural Illuminated Office Windows */}
              <div className="grid grid-cols-4 gap-2 w-full my-auto z-10 px-1">
                {Array.from({ length: 24 }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      opacity: [0.35, idx % 3 === 0 ? 0.95 : 0.6, 0.35],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2 + (idx % 5) * 0.4,
                      ease: "easeInOut",
                    }}
                    className={`h-4 rounded-[2px] border ${
                      idx % 5 === 0
                        ? "bg-yellow-400 border-yellow-400 shadow-[0_0_6px_#facc15]"
                        : "bg-yellow-400/20 border-yellow-400/40"
                    }`}
                  />
                ))}
              </div>

              {/* Building Structural Bracing Lines */}
              <div className="border-t border-yellow-400/20 pt-2 flex justify-between items-center z-10 font-mono text-[9px] text-yellow-400/60 uppercase">
                <span>LVL // 2026</span>
                <span className="text-yellow-400 font-bold">AI R&amp;D</span>
              </div>
            </div>

            {/* 3. Bottom Crossbar (Reinforced Foundation Pedestal) */}
            <div className="w-[96%] h-[16%] bg-black rounded-b-xl border-4 border-black shadow-[10px_10px_0px_#000] relative flex items-center justify-between px-5 overflow-hidden">
              {/* Foundation rivets */}
              <div className="flex gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-yellow-400/40 border border-black" />
                ))}
              </div>
              <div className="text-right">
                <span className="font-mono text-[9px] text-yellow-400/60 uppercase block">ROLE DESIGNATION</span>
                <span className="font-black text-xs text-yellow-400 uppercase tracking-wider">AGENTIC AI INTERN</span>
              </div>
            </div>
          </div>

          {/* ── Interactive Climbing Rope (Suspended from top to ground) ── */}
          <ClimbingRope
            isHovered={showDetails}
            onHoverChange={setIsRopeHovered}
            onToggle={() => setIsPinned((prev) => !prev)}
          />

          {/* ── Ground Anchor Crew (At the Base) ────────────────────────── */}
          <div className="absolute -bottom-8 md:-bottom-9 left-[44%] md:left-[48%] z-20">
            <GroundCrew />
          </div>
        </div>
      </div>

      {/* Bottom Control Strip */}
      <div className="flex justify-between items-center z-10 border-t-2 border-black/20 pt-3 text-black">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/70">
            Hover Rope or Climber
          </span>
          <span className="text-black/40">•</span>
          <span className="font-mono text-xs text-black/60 hidden sm:inline-block">
            Explore Autonomous Multi-Agent Systems
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
          <span>{showDetails ? "Close Details" : "Inspect Role"}</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Floating Agentic AI Intern HUD Card Overlay */}
      <InternHUD
        isOpen={showDetails}
        onClose={() => {
          setIsPinned(false);
          setIsRopeHovered(false);
        }}
      />
    </section>
  );
}


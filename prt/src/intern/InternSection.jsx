import { useState } from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import IBuilding from "./IBuilding";
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
      {/* Blueprint Drafting Grid */}
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
            "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.06) 45%, transparent 75%)",
        }}
      />

      {/* Background Watermark */}
      <div className="absolute right-[-2vw] bottom-0 pointer-events-none opacity-[0.04] leading-none select-none z-0">
        <h1 className="text-[min(90vh,55vw)] font-black tracking-[-0.1em] text-black">
          AI
        </h1>
      </div>

      {/* ── Elevation Ruler on Left Edge (Towering vertical scale) ────────── */}
      <div className="absolute left-[2.5vw] top-[18vh] bottom-[18vh] hidden xl:flex flex-col justify-between z-10 font-mono text-[9px] text-black/45 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1.5px] bg-black/50" />
          <span>420M // ROOFTOP CRANE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-[1px] bg-black/35" />
          <span>320M // MULTI-AGENT SWARMS</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-[1px] bg-black/35" />
          <span>210M // RAG PIPELINES</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1.5px] bg-black/50" />
          <span>000M // FOUNDATION BASE</span>
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
        <div className="relative flex flex-col items-center justify-center w-[min(70vw,450px)] h-[min(70vh,540px)]">
          
          {/* 1. Rooftop Crane & Worker (Top-Right edge of roof) */}
          <div className="absolute -top-7 md:-top-9 right-[14%] md:right-[18%] z-20">
            <RooftopWorker />
          </div>

          {/* 2. Suspended Inspection Cradle (Left Flank of "I") */}
          <div className="absolute top-[28%] -left-8 md:-left-10 z-20 hidden sm:block">
            <SuspendedCradle />
          </div>

          {/* ── The Architectural "I" Monolith Skyscraper ─────────────────── */}
          <div
            className="w-full h-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsPinned((prev) => !prev)}
            title="Agentic Monolith - Hover rope or click to inspect details"
          >
            <IBuilding isHovered={showDetails} />
          </div>

          {/* ── Interactive Climbing Rope ─────────────────────────────────── */}
          <ClimbingRope
            isHovered={showDetails}
            onHoverChange={setIsRopeHovered}
            onToggle={() => setIsPinned((prev) => !prev)}
          />

          {/* ── Ground Anchor Crew ────────────────────────────────────────── */}
          <div className="absolute -bottom-6 md:-bottom-7 left-[38%] md:left-[42%] z-20">
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

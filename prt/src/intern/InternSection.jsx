import { useState } from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import IBuilding from "./IBuilding";
import Skyline from "./Skyline";
import Clouds from "./Clouds";
import { RooftopWorker, GroundCrew, SuspendedCradle } from "./TinyHumans";
import ClimbingRope from "./ClimbingRope";
import InternCard from "./InternCard";
import { INTERN_DATA } from "./internData";

/**
 * InternSection
 * Architectural centerpiece section showcasing the Agentic AI Intern role.
 * Features:
 * - Dramatic graphic black storm clouds rolling along the top horizon.
 * - Metropolitan city skyline with 14+ skyscrapers flanking the center.
 * - Gigantic "I" skyscraper headquarters in the center.
 * - High-visibility braided climbing rope with glowing hazard pattern and pointer beacon.
 * - Tiny human construction crew (rooftop crane operator, rope climber, ground winch crew, inspection cradle).
 * - Compact, clean floating simple card displaying role details on rope hover or click.
 */
export default function InternSection() {
  const [isRopeHovered, setIsRopeHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const showDetails = isRopeHovered || isPinned;

  return (
    <section
      id="intern"
      className="h-screen w-full snap-start relative flex flex-col justify-between overflow-hidden bg-yellow-400 px-[6vw] py-[3.5vh] select-none text-black"
    >
      {/* ── 1. Background Atmosphere: Blueprint Grid & Watermark ─────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Upward Searchlights from Ground */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75vw] h-[85vh] pointer-events-none opacity-20 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.06) 45%, transparent 75%)",
        }}
      />

      {/* Massive Background Typography Watermark */}
      <div className="absolute right-[-2vw] bottom-0 pointer-events-none opacity-[0.035] leading-none select-none z-0">
        <h1 className="text-[min(90vh,55vw)] font-black tracking-[-0.1em] text-black">
          AI
        </h1>
      </div>

      {/* ── 2. Dramatic Graphic Black Clouds Rolling Across Top ───────────── */}
      <Clouds className="z-5" />

      {/* ── 3. Sprawling Metropolitan City Skyline (14+ Buildings) ────────── */}
      <Skyline className="z-4" />

      {/* ── 4. Architectural Elevation Ruler on Left Edge ─────────────────── */}
      <div className="absolute left-[2vw] top-[20vh] bottom-[20vh] hidden xl:flex flex-col justify-between z-15 font-mono text-[9px] text-black/55 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-5 h-[1.5px] bg-black/60" />
          <span>420M // ROOF HOIST CRANE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-[1px] bg-black/40" />
          <span>320M // AGENT SWARM DECK</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-[1px] bg-black/40" />
          <span>210M // RAG PIPELINE CORE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-[1.5px] bg-black/60" />
          <span>000M // METROPOLIS PLINTH</span>
        </div>
      </div>

      {/* ── 5. Top Header Navigation Bar ──────────────────────────────────── */}
      <div className="flex justify-between items-end leading-[0.8] z-20 select-none">
        <div className="flex items-end">
          <h1 className="text-[min(18vh,11vw)] font-black tracking-[-0.08em] text-black drop-shadow-[3px_3px_0px_rgba(255,255,255,0.4)]">
            I
          </h1>
          <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh] text-black">
            ntern
          </span>
          <span className="ml-4 mb-[2vh] px-3 py-1 bg-black text-yellow-400 font-mono text-xs font-bold uppercase rounded-md shadow-[3px_3px_0px_#000] hidden sm:inline-block">
            Autonomous AI
          </span>
        </div>

        {/* Quick Role Pill */}
        <div className="hidden sm:flex items-center gap-3 border-2 border-black px-4 py-2 rounded-full font-mono text-xs font-black uppercase tracking-widest bg-yellow-400 text-black shadow-[3px_3px_0px_#000]">
          <Briefcase size={16} /> {INTERN_DATA.role}
        </div>
      </div>

      {/* ── 6. Center Stage: Flagship "I" Skyscraper & Active Construction Scene */}
      <div className="relative flex-1 flex items-center justify-center z-20 my-[0.5vh]">
        {/* Monolith Container */}
        <div className="relative flex flex-col items-center justify-center w-[min(72vw,460px)] h-[min(68vh,520px)]">
          
          {/* Rooftop Crane & Worker (Positioned right over the rope pulley) */}
          <div className="absolute -top-7 md:-top-9 right-[16%] md:right-[20%] z-25">
            <RooftopWorker />
          </div>

          {/* Suspended Inspection Cradle (Left Flank of "I") */}
          <div className="absolute top-[28%] -left-8 md:-left-12 z-25 hidden sm:block">
            <SuspendedCradle />
          </div>

          {/* The Flagship "I" Monolith Skyscraper */}
          <div
            className="w-full h-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsPinned((prev) => !prev)}
            title="Agentic Monolith - Hover rope or click to inspect details"
          >
            <IBuilding isHovered={showDetails} />
          </div>

          {/* High-Visibility Interactive Climbing Rope with Animated Beacon Tag */}
          <ClimbingRope
            isHovered={showDetails}
            onHoverChange={setIsRopeHovered}
            onToggle={() => setIsPinned((prev) => !prev)}
          />

          {/* Ground Anchor Crew & Winch Spool */}
          <div className="absolute -bottom-6 md:-bottom-7 left-[42%] md:left-[45%] z-25">
            <GroundCrew />
          </div>

          {/* Clean, Compact Floating Simple Card */}
          <InternCard
            isOpen={showDetails}
            onClose={() => {
              setIsPinned(false);
              setIsRopeHovered(false);
            }}
          />
        </div>
      </div>

      {/* ── 7. Bottom Industrial Warning & Interaction Bar ────────────────── */}
      <div className="flex justify-between items-center z-20 border-t-2 border-black/20 pt-2.5 text-black">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-black text-yellow-400 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
            Active Hoist
          </div>
          <span className="font-mono text-xs font-black uppercase tracking-widest text-black flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            Hover Rope to Inspect Role Details
          </span>
        </div>

        <button
          onClick={() => setIsPinned((prev) => !prev)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
            showDetails
              ? "bg-black text-yellow-400 border-black shadow-[3px_3px_0px_#000]"
              : "bg-transparent text-black border-black hover:bg-black hover:text-yellow-400 shadow-[2px_2px_0px_#000]"
          }`}
        >
          <span>{showDetails ? "Close Card" : "Inspect Role"}</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import IBuilding from "./IBuilding";
import Clouds from "./Clouds";
import {
  NYCPreWarWaterTank,
  NYCChryslerSpire,
  NYCSlantedGlassTower,
  NYCEmpireStateTower,
  NYCDiamondCrown,
  NYCLoftWaterTank,
  DistantNYCSkyline,
} from "./NYCBuildings";
import { RooftopWorker, GroundCrew, SuspendedCradle } from "./TinyHumans";
import ClimbingRope from "./ClimbingRope";
import InternCard from "./InternCard";
import { INTERN_DATA } from "./internData";

/**
 * InternSection
 * New York City architectural skyline showcasing the Agentic AI Intern role.
 * Features:
 * - Dramatic graphic black storm clouds rolling along the upper horizon.
 * - Cohesive side-by-side New York City skyscrapers sharing the same baseline with street-level spacing.
 * - Flagship "I" skyscraper standing tall in the center.
 * - High-visibility climbing rope with tactile sway and climbing micro-figure.
 * - Clean editorial floating simple card on hover or click.
 * - Pure architectural design, zero text clutter.
 */
export default function InternSection() {
  const [isRopeHovered, setIsRopeHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const showDetails = isRopeHovered || isPinned;

  return (
    <section
      id="intern"
      className="h-screen w-full snap-start relative flex flex-col justify-between overflow-hidden bg-yellow-400 px-[5vw] py-[3.5vh] select-none text-black"
    >
      {/* ── Background Architectural Grid ─────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ground Upward Light Sheen */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] pointer-events-none opacity-20 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.25) 0%, transparent 70%)",
        }}
      />

      {/* ── Improved Cinematic Black Storm Clouds (Top Horizon) ───────────── */}
      <Clouds className="z-5" />

      {/* ── Top Header ────────────────────────────────────────────────────── */}
      <div className="flex justify-between items-end leading-[0.8] z-20 select-none">
        <div className="flex items-end">
          <h1 className="text-[min(18vh,11vw)] font-black tracking-[-0.08em] text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,0.4)]">
            I
          </h1>
          <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh] text-black">
            ntern
          </span>
        </div>

        {/* Role Pill */}
        <div className="flex items-center gap-2.5 border-2 border-black px-4 py-2 rounded-full font-mono text-xs font-black uppercase tracking-widest bg-yellow-400 text-black shadow-[3px_3px_0px_#000]">
          <Briefcase size={15} /> {INTERN_DATA.role}
        </div>
      </div>

      {/* ── Center Stage: NYC Skyline Side-by-Side with Realistic Space ────── */}
      <div className="relative flex-1 flex items-end justify-center z-15 w-full overflow-hidden my-[0.5vh]">
        {/* Distant Background Manhattan Silhouettes (Depth Layer) */}
        <div className="absolute inset-x-0 bottom-0 h-[48vh] pointer-events-none z-1">
          <DistantNYCSkyline />
        </div>

        {/* Continuous NYC Street Block: Side by Side with Space on Same Ground Baseline */}
        <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-5 md:gap-7 lg:gap-8 xl:gap-10 h-[68vh] max-h-[530px] w-full max-w-[1550px] px-2">
          
          {/* ── West Manhattan Skyscrapers (Left Flank) ────────────────────── */}
          <div className="hidden lg:flex items-end gap-3 xl:gap-6 h-full flex-shrink-0">
            <NYCPreWarWaterTank />
            <NYCChryslerSpire />
            <NYCSlantedGlassTower />
          </div>

          {/* Medium Screens (Tablets / Laptops) Flanking Tower */}
          <div className="hidden md:flex lg:hidden items-end h-full flex-shrink-0">
            <NYCSlantedGlassTower />
          </div>

          {/* ── Center Hero: Flagship "I" Skyscraper & Construction ────────── */}
          <div className="relative h-full flex-shrink-0 flex items-end justify-center w-[min(72vw,430px)]">
            
            {/* Rooftop Crane & Worker */}
            <div className="absolute -top-7 md:-top-9 right-[16%] md:right-[20%] z-25">
              <RooftopWorker />
            </div>

            {/* Suspended Inspection Cradle (Left Flank) */}
            <div className="absolute top-[28%] -left-8 md:-left-12 z-25 hidden sm:block">
              <SuspendedCradle />
            </div>

            {/* The "I" Monolith Skyscraper */}
            <div
              className="w-full h-full flex items-end justify-center cursor-pointer"
              onClick={() => setIsPinned((prev) => !prev)}
            >
              <IBuilding isHovered={showDetails} />
            </div>

            {/* High-Visibility Climbing Rope with Minimal Beacon */}
            <ClimbingRope
              isHovered={showDetails}
              onHoverChange={setIsRopeHovered}
              onToggle={() => setIsPinned((prev) => !prev)}
            />

            {/* Ground Winch Crew */}
            <div className="absolute -bottom-6 md:-bottom-7 left-[42%] md:left-[45%] z-25">
              <GroundCrew />
            </div>

            {/* Clean Floating Simple Card */}
            <InternCard
              isOpen={showDetails}
              onClose={() => {
                setIsPinned(false);
                setIsRopeHovered(false);
              }}
            />
          </div>

          {/* Medium Screens (Tablets / Laptops) Flanking Tower */}
          <div className="hidden md:flex lg:hidden items-end h-full flex-shrink-0">
            <NYCEmpireStateTower />
          </div>

          {/* ── East Manhattan Skyscrapers (Right Flank) ───────────────────── */}
          <div className="hidden lg:flex items-end gap-3 xl:gap-6 h-full flex-shrink-0">
            <NYCEmpireStateTower />
            <NYCDiamondCrown />
            <NYCLoftWaterTank />
          </div>
        </div>
      </div>

      {/* ── Bottom Groundline & Minimal Action Bar ─────────────────────────── */}
      <div className="flex justify-between items-center z-20 border-t-2 border-black/25 pt-2 text-black">
        {/* Subtle Activity Dot */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <span className="opacity-70 hidden sm:inline">NYC Agentic Headquarters</span>
        </div>

        {/* Minimal Inspect / Close Button */}
        <button
          onClick={() => setIsPinned((prev) => !prev)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
            showDetails
              ? "bg-black text-yellow-400 border-black shadow-[3px_3px_0px_#000]"
              : "bg-transparent text-black border-black hover:bg-black hover:text-yellow-400 shadow-[2px_2px_0px_#000]"
          }`}
        >
          <span>{showDetails ? "Close" : "Inspect Role"}</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
}

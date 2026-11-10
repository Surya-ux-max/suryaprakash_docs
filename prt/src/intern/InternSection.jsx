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
import ExteriorElevator from "./ExteriorElevator";
import InternCard from "./InternCard";
import { INTERN_DATA } from "./internData";

/**
 * InternSection
 * Manhattan architectural centerpiece showcasing the Agentic AI Intern role.
 * Features:
 * - Dynamic storm clouds sculpted to keep the "I ntern" title 100% visible and unobstructed.
 * - Prominent New York City skyscrapers standing side-by-side on the ground baseline with street-level spacing across all screen sizes.
 * - Flagship "I" skyscraper headquarters in the center.
 * - High-tech futuristic exterior glass capsule elevator (observation lift) with interactive glide physics, glowing cockpit, and downward headlights.
 * - Compact, clean floating simple card displaying role details on elevator hover or click.
 * - Pure architectural aesthetic, zero text clutter.
 */
export default function InternSection() {
  const [isElevatorHovered, setIsElevatorHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const showDetails = isElevatorHovered || isPinned;

  return (
    <section
      id="intern"
      className="h-screen w-full snap-start relative flex flex-col justify-between overflow-hidden bg-yellow-400 px-[4vw] sm:px-[5vw] py-[3.5vh] select-none text-black"
    >
      {/* ── Background Architectural Drafting Grid ────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Upward Ground Lighting Sheen */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85vw] h-[75vh] pointer-events-none opacity-20 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.25) 0%, transparent 70%)",
        }}
      />

      {/* ── Atmospheric Clouds (Sculpted to never overlap the title) ──────── */}
      <Clouds className="z-10" />

      {/* ── Top Header Navigation Bar ──────────────────────────────────────── */}
      <div className="flex justify-between items-end leading-[0.8] z-30 select-none">
        {/* Section Title (Completely Clear & Unobstructed) */}
        <div className="flex items-end">
          <h1 className="text-[min(18vh,11vw)] font-black tracking-[-0.08em] text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,0.5)]">
            I
          </h1>
          <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh] text-black drop-shadow-[1px_1px_0px_rgba(255,255,255,0.4)]">
            ntern
          </span>
        </div>

        {/* Quick Role Pill */}
        <div className="flex items-center gap-2.5 border-2 border-black px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-mono text-xs font-black uppercase tracking-widest bg-yellow-400 text-black shadow-[3px_3px_0px_#000]">
          <Briefcase size={15} /> {INTERN_DATA.role}
        </div>
      </div>

      {/* ── Center Stage: NYC Skyline Side-by-Side with Realistic Space ────── */}
      <div className="relative flex-1 flex items-end justify-center z-20 w-full overflow-hidden my-[0.5vh]">
        {/* Distant Background Manhattan Silhouettes (Depth Layer) */}
        <div className="absolute inset-x-0 bottom-0 h-[48vh] pointer-events-none z-1">
          <DistantNYCSkyline />
        </div>

        {/* Continuous NYC Street Block: Side by Side on Same Ground Baseline */}
        <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-7 xl:gap-8 h-[68vh] max-h-[530px] w-full max-w-[1600px] px-2">
          
          {/* ── West Manhattan Skyscrapers (Left of "I" Building) ──────────── */}
          <div className="flex items-end gap-2 sm:gap-3 md:gap-4 lg:gap-5 h-full flex-shrink-0">
            {/* Building L1: Pre-War with Rooftop Wooden Water Tank */}
            <NYCPreWarWaterTank className="hidden sm:flex" />
            {/* Building L2: Art Deco Chrysler Spire */}
            <NYCChryslerSpire />
            {/* Building L3: Midtown Slanted Glass Tower */}
            <NYCSlantedGlassTower className="hidden md:flex" />
          </div>

          {/* ── Centerpiece Hero: Flagship "I" Headquarters & Glass Elevator ─ */}
          <div className="relative h-full flex-shrink-0 flex items-end justify-center w-[min(72vw,430px)]">
            
            {/* Rooftop Observation Deck & Engineer */}
            <div className="absolute -top-7 md:-top-9 right-[16%] md:right-[20%] z-25">
              <RooftopWorker />
            </div>

            {/* Suspended Inspection Cradle (Left Flank) */}
            <div className="absolute top-[28%] -left-7 md:-left-10 z-25 hidden sm:block">
              <SuspendedCradle />
            </div>

            {/* The Flagship "I" Monolith Skyscraper */}
            <div
              className="w-full h-full flex items-end justify-center cursor-pointer"
              onClick={() => setIsPinned((prev) => !prev)}
            >
              <IBuilding isHovered={showDetails} />
            </div>

            {/* High-Tech Futuristic Exterior Glass Capsule Elevator (Replaces Rope) */}
            <ExteriorElevator
              isHovered={showDetails}
              onHoverChange={setIsElevatorHovered}
              onToggle={() => setIsPinned((prev) => !prev)}
            />

            {/* Ground Lobby Dispatch Crew */}
            <div className="absolute -bottom-6 md:-bottom-7 left-[42%] md:left-[45%] z-25">
              <GroundCrew />
            </div>

            {/* Clean Floating Simple Card */}
            <InternCard
              isOpen={showDetails}
              onClose={() => {
                setIsPinned(false);
                setIsElevatorHovered(false);
              }}
            />
          </div>

          {/* ── East Manhattan Skyscrapers (Right of "I" Building) ─────────── */}
          <div className="flex items-end gap-2 sm:gap-3 md:gap-4 lg:gap-5 h-full flex-shrink-0">
            {/* Building R1: Empire State-Style Stepped Tower */}
            <NYCEmpireStateTower />
            {/* Building R2: Contemporary Diamond Crown Pinnacle */}
            <NYCDiamondCrown className="hidden md:flex" />
            {/* Building R3: Tribeca Loft with Rooftop Water Tank & Dish */}
            <NYCLoftWaterTank className="hidden sm:flex" />
          </div>
        </div>
      </div>

      {/* ── Bottom Groundline & Minimal Action Bar ─────────────────────────── */}
      <div className="flex justify-between items-center z-30 border-t-2 border-black/25 pt-2 text-black">
        {/* Subtle Status Indicator */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <span className="opacity-70 hidden sm:inline">NYC Autonomous Headquarters</span>
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

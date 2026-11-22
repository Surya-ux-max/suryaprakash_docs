import { useState } from "react";
import { Sparkles } from "lucide-react";
import AILogomark from "./AILogomark";
import CodeBrackets from "./CodeBrackets";
import GDGHeadline from "./GDGHeadline";
import GDGImpactCards from "./GDGImpactCards";
import { GDG_DATA } from "./GDGData";

/**
 * GDGSection
 * Google Developer Groups on Campus SECE section.
 * Directly translates the user's hand-drawn concept:
 * - Left: "I am acting as" -> 3D Block Letters "AI" -> "Domain lead"
 * - Center: Iconic `< >` Developer Code Bracket Emblem
 * - Right: Signature Portfolio Headline Template ("G" + "DG" + "On Campus SECE")
 * - Inverted Theme: Solid black background with glowing yellow-400 typography & accents
 * - Responsive layout, impact metrics, and Google Developer aesthetic
 */
export default function GDGSection() {
  const [isHovered, setIsHovered] = useState(false);
  const { role, chapter } = GDG_DATA;

  return (
    <section
      id="gdg"
      className="h-screen w-full snap-start relative flex flex-col justify-between overflow-hidden bg-black px-[4vw] sm:px-[6vw] py-[2.5vh] sm:py-[3vh] select-none text-yellow-400"
    >
      {/* ── 1. Background Grid & Atmospheric Lighting ─────────────────────── */}
      {/* Precision Drafting Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,204,21,0.5) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(250,204,21,0.5) 1.5px, transparent 1.5px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ambient Radial Spotlight Sheen */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[85vh] pointer-events-none opacity-20 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(250,204,21,0.18) 0%, rgba(250,204,21,0.03) 50%, transparent 75%)",
        }}
      />

      {/* Massive Background Typography Watermark */}
      <div className="absolute left-[-2vw] bottom-[-4vh] pointer-events-none opacity-[0.025] leading-none select-none z-0">
        <span className="text-[min(95vh,55vw)] font-black tracking-[-0.1em] text-yellow-400">
          GDG
        </span>
      </div>

      {/* ── 2. Top Navigation / Role Bar ──────────────────────────────────── */}
      <div className="flex justify-between items-center z-10 select-none pb-2 border-b border-yellow-400/15">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
          <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-yellow-400">
            {role}
          </span>
          <span className="text-yellow-400/40 hidden sm:inline">/</span>
          <span className="text-yellow-400/60 font-mono text-xs uppercase tracking-wider hidden sm:inline">
            {chapter}
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 font-mono text-[11px] font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
          <Sparkles size={13} className="text-yellow-400 animate-pulse" />
          <span>Google Developer Groups</span>
        </div>
      </div>

      {/* ── 3. Main Stage: The Hand-Drawn Composition Layout ───────────────── */}
      {/* Left: AI Domain Lead | Center: < > | Right: GDG On Campus SECE */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-4 my-auto z-10 w-full max-w-[1600px] mx-auto py-2 sm:py-4"
      >
        {/* ── Left Flank: "I am acting as" -> 3D "AI" -> "Domain lead" ─────── */}
        <div className="flex-1 flex justify-center lg:justify-start w-full">
          <AILogomark isHovered={isHovered} />
        </div>

        {/* ── Center: The Iconic `< >` Code Brackets Emblem ───────────────── */}
        <div className="flex-shrink-0 flex items-center justify-center my-2 lg:my-0">
          <CodeBrackets
            isHovered={isHovered}
            onToggle={() => setIsHovered((prev) => !prev)}
          />
        </div>

        {/* ── Right Flank: Signature Headline Template ("G" + "DG") ─────────── */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <GDGHeadline />
        </div>
      </div>

      {/* ── 4. Bottom Metric Cards: Leadership Impact ──────────────────────── */}
      <div className="z-10 w-full max-w-[1600px] mx-auto pt-2">
        <GDGImpactCards />
      </div>

      {/* ── 5. Bottom Foundation Ground Bar ───────────────────────────────── */}
      <div className="flex justify-between items-center z-10 border-t border-yellow-400/20 pt-2.5 mt-2 text-yellow-400/70 text-[11px] font-mono font-bold select-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span>Artificial Intelligence Domain</span>
        </div>
        <span className="text-yellow-400/50 hidden sm:inline">
          Sri Eshwar College of Engineering · 2024–Present
        </span>
      </div>
    </section>
  );
}

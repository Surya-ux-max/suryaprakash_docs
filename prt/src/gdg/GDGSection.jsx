import AILogomark from "./AILogomark";
import CodeBrackets from "./CodeBrackets";
import GDGHeadline from "./GDGHeadline";

/**
 * GDGSection
 * Google Developer Groups on Campus SECE section.
 * Pure code for fonts, layouts, and design directly translating the user's concept:
 * - Solid black background (`bg-black`) with luminous yellow-400 typography
 * - Left: "I AM ACTING AS" -> Monumental "AI" -> "DOMAIN LEAD" (all non-italic, large)
 * - Center: Official Google Developer Groups (GDG) `< >` Logo emblem
 * - Right: Signature Portfolio Headline Template ("G" + "DG") -> "ON CAMPUS SECE"
 * - High-impact, clean, balanced composition filling the viewport.
 */
export default function GDGSection() {
  return (
    <section
      id="gdg"
      className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-black px-[4vw] sm:px-[6vw] lg:px-[8vw] select-none text-yellow-400"
    >
      {/* Precision Drafting Grid Sheen */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,204,21,0.5) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(250,204,21,0.5) 1.5px, transparent 1.5px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ambient Center Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[75vh] pointer-events-none opacity-15 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(250,204,21,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Main Stage: 3-Part High-Impact Composition ───────────────────── */}
      <div className="w-full max-w-[1700px] flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-6 my-auto z-10">
        {/* Left: "I AM ACTING AS" -> "AI" -> "DOMAIN LEAD" */}
        <div className="flex-1 flex justify-center lg:justify-start w-full">
          <AILogomark />
        </div>

        {/* Center: Official GDG `< >` Logo */}
        <div className="flex-shrink-0 flex items-center justify-center my-4 lg:my-0">
          <CodeBrackets />
        </div>

        {/* Right: "G" + "DG" -> "ON CAMPUS SECE" */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <GDGHeadline />
        </div>
      </div>
    </section>
  );
}

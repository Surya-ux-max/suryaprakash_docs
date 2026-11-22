import AILogomark from "./AILogomark";
import CodeBrackets from "./CodeBrackets";
import GDGHeadline from "./GDGHeadline";

/**
 * GDGSection
 * Google Developer Groups on Campus SECE section.
 * Pure code for fonts, layouts, and design directly translating the user's hand-drawn concept:
 * - Solid black background (`bg-black`) with yellow-400 typography
 * - Left: "I am acting as" -> "AI" -> "Domain lead"
 * - Center: `< >` Developer Code Brackets
 * - Right: Signature Portfolio Headline Template ("G" + "DG") -> "On Campus SECE"
 * - Zero 3D or 2D graphic clutter; pure typographic fidelity.
 */
export default function GDGSection() {
  return (
    <section
      id="gdg"
      className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-black px-[5vw] sm:px-[7vw] lg:px-[9vw] select-none text-yellow-400"
    >
      {/* ── Main Stage: The Exact 3-Part Hand-Drawn Composition ───────────── */}
      <div className="w-full max-w-[1600px] flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-6 my-auto z-10">
        {/* Left: "I am acting as" -> "AI" -> "Domain lead" */}
        <div className="flex-1 flex justify-center lg:justify-start w-full">
          <AILogomark />
        </div>

        {/* Center: `< >` */}
        <div className="flex-shrink-0 flex items-center justify-center my-2 lg:my-0">
          <CodeBrackets />
        </div>

        {/* Right: "G" + "DG" -> "On Campus SECE" */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <GDGHeadline />
        </div>
      </div>
    </section>
  );
}

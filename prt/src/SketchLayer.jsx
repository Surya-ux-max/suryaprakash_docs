import { SKETCHES_BACK } from "./sketchData";

export function SketchLayer({ paths = SKETCHES_BACK, strokeColor = "black", opacityMultiplier = 1, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill="none"
          stroke={strokeColor}
          strokeWidth={p.sw}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: p.op * opacityMultiplier,
            strokeDasharray: 3000,
            strokeDashoffset: 3000,
            animation: `draw-signature ${p.dur} cubic-bezier(0.37,0,0.63,1) ${p.delay} forwards`,
          }}
        />
      ))}
    </svg>
  );
}

export default SketchLayer;

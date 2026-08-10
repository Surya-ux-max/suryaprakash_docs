export const SKETCHES_BACK = [
  // Large rounded monitor/display shape — left zone, behind text
  { d: "M 80 290 L 420 290 L 440 580 L 60 580 Z",                                         sw: 1.6, op: 0.38, delay: "0.1s", dur: "2.2s" },
  { d: "M 100 310 L 400 310 L 418 560 L 80 560 Z",                                         sw: 0.9, op: 0.22, delay: "0.4s", dur: "1.8s" },
  { d: "M 200 580 L 170 660 M 250 580 L 280 660 M 155 660 L 295 660",                       sw: 1.5, op: 0.42, delay: "0.6s", dur: "1.4s" },
  // Long sweeping gesture across the middle (behind)
  { d: "M 40 500 C 250 460 550 510 800 475 C 1000 450 1200 490 1440 465",                    sw: 1.2, op: 0.28, delay: "0.8s", dur: "2.6s" },
  { d: "M 20 620 C 280 580 620 630 950 598 C 1150 578 1350 610 1440 592",                   sw: 1.0, op: 0.22, delay: "1.1s", dur: "2.4s" },
];

export const SKETCHES_FRONT = [
  // Tall oval/lamp shape — right side, IN FRONT of text
  { d: "M 1020 120 C 1020 50 1240 50 1240 120 C 1240 195 1020 195 1020 120 Z",             sw: 2.0, op: 0.52, delay: "0.2s", dur: "2.0s" },
  { d: "M 1130 196 L 1130 460",                                                              sw: 2.5, op: 0.55, delay: "0.5s", dur: "1.6s" },
  { d: "M 1080 460 L 1060 540 M 1180 460 L 1200 540 M 1050 540 L 1210 540",               sw: 1.6, op: 0.45, delay: "0.7s", dur: "1.3s" },
  // A second looping organic shape — overlapping center-right
  { d: "M 700 260 C 780 200 920 220 960 300 C 1000 380 940 460 860 480 C 780 500 680 440 680 360 C 680 280 700 260 700 260 Z", sw: 1.8, op: 0.40, delay: "0.3s", dur: "2.3s" },
  // Gestural accent strokes across text
  { d: "M 460 380 C 580 355 700 385 820 360 C 920 340 1040 365 1140 342",                   sw: 1.2, op: 0.30, delay: "0.9s", dur: "2.0s" },
  { d: "M 500 440 C 640 415 800 445 1000 418",                                               sw: 1.0, op: 0.25, delay: "1.2s", dur: "1.8s" },
  // Top-right circuit angular marks
  { d: "M 1300 60 L 1400 60 L 1400 160 M 1400 110 L 1440 110 M 1350 60 L 1350 20",         sw: 1.4, op: 0.38, delay: "0.3s", dur: "1.2s" },
  // Bottom loose mark
  { d: "M 200 740 C 400 700 700 740 1000 715 C 1200 698 1380 720 1440 708",                 sw: 1.0, op: 0.22, delay: "1.3s", dur: "2.4s" },
];

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

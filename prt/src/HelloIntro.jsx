import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SketchLayer } from "./SketchLayer";
import { SKETCHES_BACK, SKETCHES_FRONT } from "./sketchData";

const EXIT_MS    = 5400;
const UNMOUNT_MS = 6400;


export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [phase,     setPhase]     = useState(0);
  const skipFiredRef = useRef(false);

  useEffect(() => {
    const timers = [];
    const doSkip = () => {
      if (skipFiredRef.current) return;
      skipFiredRef.current = true;
      setIsExiting(true);
      timers.push(setTimeout(() => setIsVisible(false), 920));
    };

    timers.push(setTimeout(() => setPhase(1), 120));   // sketches draw
    timers.push(setTimeout(() => setPhase(2), 480));   // "portfolio" slides up
    timers.push(setTimeout(() => setPhase(3), 1100));  // "AI" label
    timers.push(setTimeout(() => setPhase(4), 1500));  // dot + year
    timers.push(setTimeout(() => setPhase(5), 1900));  // name
    timers.push(setTimeout(doSkip,             EXIT_MS));
    timers.push(setTimeout(() => setIsVisible(false), UNMOUNT_MS));

    window.addEventListener("pointerdown", doSkip, { once: true });
    window.addEventListener("keydown",     doSkip, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("pointerdown", doSkip);
      window.removeEventListener("keydown",     doSkip);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-editorial"
          initial={{ opacity: 1 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.92, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-yellow-400 overflow-hidden select-none cursor-pointer"
          onClick={() => {
            if (skipFiredRef.current) return;
            skipFiredRef.current = true;
            setIsExiting(true);
            setTimeout(() => setIsVisible(false), 920);
          }}
        >

          {/* ── Sketch layer: BEHIND the text ─────────────────────────────── */}
          {phase >= 1 && (
            <div className="absolute inset-0 z-[1]">
              <SketchLayer paths={SKETCHES_BACK} />
            </div>
          )}

          {/* ── Main typography ───────────────────────────────────────────── */}
          <div className="absolute inset-0 z-[2] flex flex-col justify-center px-[5vw]">

            {/* "AI" label — floats left, like "ID" in the reference */}
            <div className="relative">
              <AnimatePresence>
                {phase >= 3 && (
                  <motion.span
                    key="ai"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 font-mono text-[clamp(11px,1.1vw,18px)] font-bold uppercase tracking-[0.22em] text-black/50"
                    style={{ bottom: "calc(100% - 0.3em)" }}
                  >
                    PORTFOLIO
                  </motion.span>
                )}
              </AnimatePresence>

              {/* SURYAPRAKASH — the hero word */}
              <div className="overflow-hidden" style={{ lineHeight: 0.85 }}>
                <motion.h1
                  initial={{ y: "108%" }}
                  animate={{ y: phase >= 2 ? "0%" : "108%" }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="font-black uppercase text-black tracking-[-0.05em] leading-none"
                  style={{ fontSize: "clamp(44px, 9.2vw, 145px)" }}
                >
                  Suryaprakash
                </motion.h1>
              </div>
            </div>


            {/* Name — soft monospace subtitle */}
            <AnimatePresence>
              {phase >= 5 && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-center gap-[1.5vw] mt-[2vw]"
                >
                  <div
                    className="bg-black/25 flex-shrink-0"
                    style={{ width: "clamp(20px, 3vw, 48px)", height: "1px" }}
                  />
                  <span
                    className="font-mono font-semibold uppercase text-black/55 tracking-[0.28em]"
                    style={{ fontSize: "clamp(9px, 1.05vw, 16px)" }}
                  >
                    Portfolio&nbsp;&nbsp;·&nbsp;&nbsp;2026&nbsp;&nbsp;·&nbsp;&nbsp;AI Engineer
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Sketch layer: IN FRONT of the text (creates depth) ────────── */}
          {phase >= 1 && (
            <div className="absolute inset-0 z-[3] pointer-events-none">
              <SketchLayer paths={SKETCHES_FRONT} />
            </div>
          )}

          {/* ── Skip hint ─────────────────────────────────────────────────── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.0 }}
            className="absolute bottom-6 right-8 z-[10] font-mono text-[9px] uppercase tracking-[0.35em] text-black/30 pointer-events-none"
          >
            Tap to skip
          </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

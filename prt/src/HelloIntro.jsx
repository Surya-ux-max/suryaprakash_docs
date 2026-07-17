"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Timing sequence for maximum impact and lag-free rendering
    const t1 = setTimeout(() => setPhase(1), 300);   // Thin line shoots across
    const t2 = setTimeout(() => setPhase(2), 650);   // Violent vertical expansion -> Yellow screen
    const t3 = setTimeout(() => setPhase(3), 900);   // Name characters reveal
    const t4 = setTimeout(() => setPhase(4), 1400);  // First stamp (AI ENGINEER)
    const t5 = setTimeout(() => setPhase(5), 1700);  // Second stamp (PORTFOLIO)
    const t6 = setTimeout(() => setIsExiting(true), 2900); // Start sliding up curtain
    const t7 = setTimeout(() => setIsVisible(false), 3700); // Unmount from DOM

    return () => { [t1,t2,t3,t4,t5,t6,t7].forEach(clearTimeout); };
  }, []);

  // Allow clicking or pressing any key to skip
  useEffect(() => {
    if (!isVisible || isExiting) return;
    const skip = () => setIsExiting(true);
    window.addEventListener("pointerdown", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });
    return () => {
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [isVisible, isExiting]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-curtain"
          exit={{ y: "-100%" }} // Curtain pulls up to reveal the app
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black select-none overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Expanding Yellow Background */}
          <motion.div
            initial={{ scaleX: 0, scaleY: 0.005 }}
            animate={
              phase === 1 ? { scaleX: 1, scaleY: 0.005 } :
              phase >= 2 ? { scaleX: 1, scaleY: 1 } : {}
            }
            transition={{
              scaleX: { duration: 0.35, ease: "circOut" },
              scaleY: { duration: 0.25, ease: "circOut" } // Violent snap open
            }}
            className="absolute inset-0 bg-yellow-400 origin-center"
          />

          {/* Content layer (only rendered after background expands) */}
          {phase >= 2 && (
            <div className="relative z-10 flex flex-col items-center">
               
               {/* Massive Name Text */}
               <div className="overflow-hidden flex">
                  {"SURYAPRAKASH".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={phase >= 3 ? { y: 0, opacity: 1 } : {}}
                      transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 20, 
                          delay: i * 0.02 
                      }}
                      className="text-[min(12vw,120px)] font-black text-black uppercase leading-[0.85] tracking-[-0.05em]"
                    >
                      {char}
                    </motion.span>
                  ))}
               </div>

               {/* Impact Stamps */}
               <div className="flex gap-4 mt-[4vh] h-[8vh] items-center">
                  {phase >= 4 && (
                    <motion.div
                       initial={{ opacity: 0, scale: 2.5, rotate: -15 }}
                       animate={{ opacity: 1, scale: 1, rotate: -4 }}
                       transition={{ type: "spring", stiffness: 450, damping: 15 }}
                       className="px-6 py-2 bg-black text-yellow-400 text-[min(3vw,24px)] font-black uppercase tracking-[0.2em] border-4 border-black drop-shadow-[8px_8px_0_rgba(0,0,0,0.25)]"
                    >
                       AI ENGINEER
                    </motion.div>
                  )}

                  {phase >= 5 && (
                    <motion.div
                       initial={{ opacity: 0, scale: 2.5, rotate: 15 }}
                       animate={{ opacity: 1, scale: 1, rotate: 4 }}
                       transition={{ type: "spring", stiffness: 450, damping: 15 }}
                       className="px-6 py-2 bg-black text-yellow-400 text-[min(3vw,24px)] font-black uppercase tracking-[0.2em] border-4 border-black drop-shadow-[8px_8px_0_rgba(0,0,0,0.25)]"
                    >
                       PORTFOLIO
                    </motion.div>
                  )}
               </div>
            </div>
          )}
          
          {/* Faint Background Watermark (Matching App theme) */}
          {phase >= 2 && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} 
               animate={{ opacity: 0.06, scale: 1 }} 
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="absolute right-[-5vw] bottom-[-5vh] pointer-events-none"
            >
               <h1 className="text-[min(90vh,60vw)] font-black leading-none tracking-[-0.1em] text-black">
                  HI
               </h1>
            </motion.div>
          )}

          {/* Skip Hint */}
          {phase >= 3 && (
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 }}
                className="absolute bottom-[4vh] text-black font-mono text-[min(1.5vh,1vw)] uppercase tracking-[0.3em] font-bold"
             >
                Initializing Workspace
             </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

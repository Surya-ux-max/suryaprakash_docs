"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Timing sequence for the new "Kinetic Brutalist" intro
    const t1 = setTimeout(() => setPhase(1), 100);   // Show Barcode Boot
    const t2 = setTimeout(() => setPhase(2), 700);   // Crash Yellow Panels
    const t3 = setTimeout(() => setPhase(3), 1100);  // Typography Drop + Marquee
    const t4 = setTimeout(() => setPhase(4), 1600);  // 3D Stamps
    const t5 = setTimeout(() => setIsExiting(true), 3200); // Fade out seamlessly
    const t6 = setTimeout(() => setIsVisible(false), 3800); // Unmount

    return () => { [t1,t2,t3,t4,t5,t6].forEach(clearTimeout); };
  }, []);

  // Allow skipping and handle mouse parallax
  useEffect(() => {
    if (!isVisible || isExiting) return;
    const skip = () => setIsExiting(true);
    const handleMove = (e) => {
        setMousePos({ 
            x: (e.clientX / window.innerWidth - 0.5) * 30, 
            y: (e.clientY / window.innerHeight - 0.5) * 30 
        });
    };
    
    window.addEventListener("pointerdown", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("mousemove", handleMove);
    
    return () => {
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [isVisible, isExiting]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-kinetic"
          // Seamless exit: Instead of sliding, we just fade out the intro. 
          // Since the background is yellow and the app is yellow, it looks like the text melts away to reveal the app.
          exit={{ opacity: 0, scale: 1.05 }} 
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black select-none overflow-hidden flex flex-col items-center justify-center font-sans"
        >
          {/* Phase 1: Barcode / Terminal Boot */}
          <AnimatePresence>
             {phase === 1 && (
                <motion.div 
                   exit={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
                   transition={{ duration: 0.3 }}
                   className="absolute inset-0 flex items-center justify-center text-white flex-col gap-4 z-50"
                >
                    <div className="flex items-end gap-[3px] h-16">
                        {Array(25).fill(0).map((_, i) => (
                           <motion.div 
                              key={i}
                              initial={{ height: "10%" }}
                              animate={{ height: ["10%", "100%", "20%", "90%", "10%"] }}
                              transition={{ 
                                  repeat: Infinity, 
                                  duration: 0.3 + Math.random() * 0.4, 
                                  ease: "linear",
                                  delay: Math.random() * -1
                              }}
                              className={`bg-white ${i % 4 === 0 ? "w-3" : i % 3 === 0 ? "w-2" : "w-1"}`}
                           />
                        ))}
                    </div>
                    <span className="font-mono text-xs md:text-sm tracking-[0.4em] mt-2 font-bold opacity-80 animate-pulse">
                       ESTABLISHING CONNECTION...
                    </span>
                </motion.div>
             )}
          </AnimatePresence>

          {/* Phase 2: Yellow Panels Crash */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={phase >= 2 ? { y: 0 } : {}}
            transition={{ duration: 0.35, ease: "circOut" }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-yellow-400 z-0"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={phase >= 2 ? { y: 0 } : {}}
            transition={{ duration: 0.35, ease: "circOut" }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-yellow-400 z-0"
          />
          
          {/* Horizontal Flash on Crash */}
          {phase === 2 && (
             <motion.div
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-1/2 left-0 right-0 h-2 bg-white -translate-y-1/2 z-20"
             />
          )}

          {/* Phase 3: Background Marquee (Kinetic Typography) */}
          {phase >= 3 && (
             <div className="absolute inset-0 opacity-[0.07] flex flex-col justify-between py-5 pointer-events-none overflow-hidden z-0" style={{ transform: 'rotate(-4deg) scale(1.2)' }}>
                 {Array(5).fill(0).map((_, i) => (
                    <motion.div 
                       key={i}
                       initial={{ x: i % 2 === 0 ? "0%" : "-50%" }}
                       animate={{ x: i % 2 === 0 ? "-50%" : "0%" }}
                       transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                       className="text-[min(8vw,60px)] font-black uppercase whitespace-nowrap text-black"
                    >
                       {Array(15).fill("SYSTEM INITIALIZED • ").join("")}
                    </motion.div>
                 ))}
             </div>
          )}

          {/* Phase 3: Foreground Main Typography */}
          {phase >= 3 && (
             <motion.div 
                 animate={{ x: mousePos.x, y: mousePos.y }}
                 transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.5 }}
                 className="relative z-10 flex flex-col items-center"
             >
                {/* Massive Name Text with 3D Echo Effect */}
                <div className="relative">
                   {/* Main Black Text */}
                   <div className="overflow-hidden flex relative z-10">
                       {"SURYAPRAKASH".split("").map((char, i) => (
                         <motion.span
                           key={i}
                           initial={{ y: "100%", skewY: 15, opacity: 0 }}
                           animate={{ y: 0, skewY: 0, opacity: 1 }}
                           transition={{ 
                               type: "spring", 
                               stiffness: 300, 
                               damping: 18, 
                               delay: i * 0.02 
                           }}
                           className="text-[min(12vw,120px)] font-black text-black uppercase leading-[0.85] tracking-[-0.05em]"
                         >
                           {char}
                         </motion.span>
                       ))}
                   </div>
                   
                   {/* Echo/Stroke Text behind for depth */}
                   <div className="absolute top-2 left-4 flex opacity-30 pointer-events-none z-0">
                       {"SURYAPRAKASH".split("").map((char, i) => (
                         <motion.span
                           key={'echo-'+i}
                           initial={{ y: "100%", skewY: 15, opacity: 0 }}
                           animate={{ y: 0, skewY: 0, opacity: 1 }}
                           transition={{ 
                               type: "spring", 
                               stiffness: 300, 
                               damping: 18, 
                               delay: i * 0.02 + 0.05 
                           }}
                           style={{ WebkitTextStroke: "2px black", color: "transparent" }}
                           className="text-[min(12vw,120px)] font-black uppercase leading-[0.85] tracking-[-0.05em]"
                         >
                           {char}
                         </motion.span>
                       ))}
                   </div>
                </div>

                {/* Phase 4: 3D Impact Stamps */}
                <div className="flex gap-4 sm:gap-6 mt-[6vh] items-center" style={{ perspective: 1000 }}>
                   {phase >= 4 && (
                     <>
                         <motion.div
                            initial={{ opacity: 0, z: 200, rotateX: -90 }}
                            animate={{ opacity: 1, z: 0, rotateX: 0 }}
                            transition={{ type: "spring", stiffness: 350, damping: 15 }}
                            className="px-4 sm:px-6 py-2 bg-black text-yellow-400 text-[min(2.5vw,24px)] font-black uppercase tracking-[0.2em] shadow-[6px_6px_0_rgba(0,0,0,0.4)]"
                         >
                            AI ENGINEER
                         </motion.div>
                         
                         <motion.div
                            initial={{ opacity: 0, z: 200, rotateX: 90 }}
                            animate={{ opacity: 1, z: 0, rotateX: 0 }}
                            transition={{ type: "spring", stiffness: 350, damping: 15, delay: 0.1 }}
                            className="px-4 sm:px-6 py-2 bg-black text-yellow-400 text-[min(2.5vw,24px)] font-black uppercase tracking-[0.2em] shadow-[6px_6px_0_rgba(0,0,0,0.4)]"
                         >
                            PORTFOLIO
                         </motion.div>
                     </>
                   )}
                </div>
             </motion.div>
          )}

          {/* Interactive Hint */}
          {phase >= 4 && (
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-[4vh] text-black font-mono text-[min(1.5vh,1vw)] uppercase tracking-[0.2em] font-bold z-10 pointer-events-none flex gap-2 items-center"
             >
                <div className="w-2 h-2 rounded-full bg-black animate-ping" />
                Move cursor to inspect
             </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

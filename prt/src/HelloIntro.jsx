"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // High-speed Sling Ring Sparks with Gravity
  const [sparks] = useState(() => Array.from({ length: 120 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const startRadius = 22 + Math.random() * 1; // Start exactly at the rim of the 45vw ring (45/2 = 22.5)
      const distance = Math.random() * 12 + 4; // Shoot outwards
      return {
          angle,
          startRadius,
          distance,
          scale: Math.random() * 0.5 + 0.2,
          duration: Math.random() * 0.5 + 0.3, // Extremely fast!
          delay: Math.random() * 1,
          color: Math.random() > 0.7 ? "#ffffff" : Math.random() > 0.4 ? "#ffcc00" : "#ff3300" // White hot, gold, red
      };
  }));

  // Ambient falling embers for the void background
  const [embers] = useState(() => Array.from({ length: 40 }).map(() => ({
      xStart: Math.random() * 100,
      yStart: Math.random() * -20,
      xMove: (Math.random() - 0.5) * 30,
      yMove: 120, // Fall down past the screen
      scale: Math.random() * 0.4 + 0.2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? "rgba(255, 150, 0, 0.6)" : "rgba(255, 50, 0, 0.4)"
  })));

  useEffect(() => {
    // Timing sequence for Doctor Strange Sling Ring
    const t1 = setTimeout(() => setPhase(1), 100);   // Ambient embers
    const t2 = setTimeout(() => setPhase(2), 1000);  // Epic Golden Name appears
    const t3 = setTimeout(() => setPhase(3), 3000);  // Sling Ring rips open!
    const t4 = setTimeout(() => setPhase(4), 6000);  // Transit warp
    const t5 = setTimeout(() => setIsExiting(true), 7000); // Yellow flash seamless cut
    const t6 = setTimeout(() => setIsVisible(false), 7200); // Unmount

    return () => { [t1,t2,t3,t4,t5,t6].forEach(clearTimeout); };
  }, []);

  // Jump/Skip functionality
  useEffect(() => {
    if (!isVisible || isExiting) return;
    const skip = () => {
        setPhase(4); 
        setTimeout(() => setIsExiting(true), 1000);
    };
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
          key="intro-drstrange-perfect"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-[#0a0200] select-none overflow-hidden flex flex-col items-center justify-center font-sans" // Deep, dark burnt umber void
        >
          {/* Static Cinematic Vignette */}
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_20vw_rgba(0,0,0,1)]" />

          {/* Background Ambient Heat Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={phase >= 1 ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] pointer-events-none z-0"
            style={{ 
                background: "radial-gradient(circle, rgba(255,100,0,1) 0%, rgba(200,0,0,0) 60%)",
                willChange: "transform, opacity"
            }}
          />

          {/* Ambient Falling Embers */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {embers.map((p, i) => (
                <motion.div
                    key={`ember-${i}`}
                    initial={{ left: `${p.xStart}vw`, top: `${p.yStart}vh`, opacity: 0, scale: p.scale }}
                    animate={ phase >= 1 ? { x: `${p.xMove}vw`, y: `${p.yMove}vh`, opacity: [0, 1, 0] } : {} }
                    transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
                    className="absolute w-1.5 h-1.5 rounded-full blur-[1px]"
                    style={{ backgroundColor: p.color, willChange: "transform, opacity" }}
                />
            ))}
          </div>

          {/* --- THE SLING RING PORTAL --- */}
          
          {/* Main Solid Hot Ring (Empty center) */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
                phase >= 4 ? { scale: 7, opacity: 1 } // Swallows screen during warp
                : phase >= 3 ? { scale: 1, opacity: 1 } 
                : {}
            }
            transition={{
                scale: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 1.5, ease: "backOut" },
                opacity: phase >= 4 ? { duration: 0.5 } : { duration: 1.5, ease: "easeOut" }
            }}
            className="absolute top-1/2 left-1/2 w-[45vw] h-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full z-10"
            style={{ 
                border: "4px solid rgba(255, 255, 255, 0.9)", // White hot core of the ring
                boxShadow: "0 0 35px 15px rgba(255, 120, 0, 0.9), inset 0 0 35px 15px rgba(255, 120, 0, 0.9)", // Intense fiery glow inside and out
                willChange: "transform, opacity"
            }}
          />

          {/* Chaotic Spinning Spark Rings (Simulates the aggressive spark generation on the rim) */}
          {phase >= 2 && Array.from({ length: 6 }).map((_, i) => (
            <motion.div
               key={`chaos-ring-${i}`}
               initial={{ scale: 0.6, opacity: 0, rotate: 0 }}
               animate={
                   phase >= 4 ? { scale: 7, opacity: 1, rotate: (i % 2 === 0 ? 1 : -1) * 720 } 
                   : phase >= 3 ? { scale: 1 + i * 0.015, opacity: 1, rotate: (i % 2 === 0 ? 1 : -1) * 360 } 
                   : {}
               }
               transition={{
                   scale: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 1.5, ease: "backOut" },
                   rotate: phase >= 4 ? { duration: 1.5, ease: "easeIn" } : { duration: 1 + i * 0.3, ease: "linear", repeat: Infinity } // Insanely fast spin
               }}
               className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
               style={{ 
                   width: "45vw",
                   height: "45vw",
                   border: `${3 + (i%3)*2}px dotted ${i % 3 === 0 ? "#ffffff" : i % 2 === 0 ? "#ffcc00" : "#ff3300"}`,
                   filter: `blur(${i * 0.5}px)`, 
                   willChange: "transform, opacity"
               }}
            />
          ))}

          {/* Flying Sparks from the rim (With Gravity!) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 z-30 overflow-visible pointer-events-none">
            {phase >= 3 && sparks.map((p, i) => {
                const xStart = Math.cos(p.angle) * p.startRadius;
                const yStart = Math.sin(p.angle) * p.startRadius;
                const xEnd = Math.cos(p.angle) * (p.startRadius + p.distance);
                const yEnd = Math.sin(p.angle) * (p.startRadius + p.distance) + 15; // Gravity pulls them down!
                return (
                    <motion.div
                        key={`spark-${i}`}
                        initial={{ x: `${xStart}vw`, y: `${yStart}vw`, opacity: 0, scale: p.scale }}
                        animate={
                            phase >= 4 
                            ? { scale: p.scale * 8, opacity: 0, x: `${xEnd * 3}vw`, y: `${yEnd * 3}vw` }
                            : { x: [`${xStart}vw`, `${xEnd}vw`], y: [`${yStart}vw`, `${yEnd}vw`], opacity: [0, 1, 0] }
                        }
                        transition={{ 
                            scale: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 0 },
                            x: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: p.duration, repeat: Infinity, ease: "easeOut", delay: p.delay },
                            y: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: p.duration, repeat: Infinity, ease: "easeIn", delay: p.delay }, // easeIn accelerates downwards like gravity
                            opacity: phase >= 4 ? { duration: 0.5, ease: "easeOut" } : { duration: p.duration, repeat: Infinity, ease: "easeOut", delay: p.delay }
                        }}
                        className="absolute w-3 h-1 rounded-full" 
                        style={{ 
                            backgroundColor: p.color,
                            boxShadow: `0 0 6px ${p.color}`,
                            rotate: `${(p.angle * 180) / Math.PI}deg`,
                            willChange: "transform, opacity" 
                        }}
                    />
                )
            })}
          </div>

          <div className="relative z-40 flex flex-col items-center">
             {/* Epic Golden Typography */}
             <motion.h1
               initial={{ opacity: 0, scale: 0.9 }}
               animate={
                   phase >= 4 ? { opacity: 0, scale: 4 } 
                   : phase >= 2 ? { opacity: 1, scale: 1.05 } 
                   : {}
               }
               transition={{ 
                   opacity: phase >= 4 ? { duration: 0.6, ease: "easeIn" } : { duration: 2, ease: "easeOut" },
                   scale: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 12, ease: "linear" } 
               }}
               className="text-[#ffeb73] text-[min(6vw,60px)] md:text-[min(4vw,70px)] font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] ml-[0.5em] md:ml-[0.8em] text-center"
               style={{ 
                   textShadow: "0 10px 40px rgba(255,100,0,0.8), 0 2px 5px rgba(255,255,255,0.6)", 
                   willChange: "transform, opacity" 
               }}
             >
               SURYAPRAKASH
             </motion.h1>

             {/* Minimalist Subtitles */}
             <motion.div
               initial={{ opacity: 0, y: 20, scale: 1 }}
               animate={
                   phase >= 4 ? { opacity: 0, scale: 3 }
                   : phase >= 3 ? { opacity: 0.9, y: 0, scale: 1 } 
                   : {}
               }
               transition={{ 
                   opacity: phase >= 4 ? { duration: 0.5, ease: "easeIn" } : { duration: 2, ease: "easeOut" },
                   scale: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 10, ease: "linear" }
               }}
               className="mt-10 md:mt-12 flex flex-col items-center gap-6"
               style={{ willChange: "transform, opacity" }}
             >
               <span className="text-[#ffeb73] text-[min(2vw,16px)] font-bold tracking-[0.8em] ml-[0.8em] uppercase" style={{ textShadow: "0 5px 15px rgba(255,100,0,0.9)" }}>
                 AI Engineer
               </span>
               <motion.div 
                   initial={{ height: 0 }}
                   animate={phase >= 3 ? { height: "40px" } : {}}
                   transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                   className="w-[2px] bg-[#ff9d00] opacity-80" 
               />
               <span className="text-[#ffeb73] text-[min(1.5vw,12px)] font-medium tracking-[0.6em] ml-[0.6em] uppercase opacity-90" style={{ textShadow: "0 5px 10px rgba(255,100,0,0.9)" }}>
                 Portfolio 2026
               </span>
             </motion.div>
          </div>
          
          {/* Seamless Yellow Flash - perfectly matches the app background (bg-yellow-400) for an invisible cut */}
          <AnimatePresence>
              {phase >= 4 && (
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeIn", delay: 0.5 }}
                      className="absolute inset-0 bg-yellow-400 z-[200] pointer-events-none"
                      style={{ willChange: "opacity" }}
                  />
              )}
          </AnimatePresence>

          {/* Skip Hint */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: phase >= 2 && phase < 4 ? 0.4 : 0 }}
             transition={{ duration: 2 }}
             className="absolute bottom-[6vh] text-[#ffeb73] font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] font-light z-30 opacity-50"
          >
             Press any key to jump
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Anti-gravity floating debris (Rocks ascending to the vortex)
  const [debris] = useState(() => Array.from({ length: 50 }).map(() => ({
      xStart: Math.random() * 100, 
      yStart: 110 + Math.random() * 40, // Start below the screen
      xMove: (Math.random() - 0.5) * 40, // Lazy left/right drift
      scale: Math.random() * 1.5 + 0.4,
      duration: Math.random() * 15 + 10, // Very slow, heavy float upwards
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
      spinSpeed: (Math.random() - 0.5) * 360,
      // Generates different jagged rock shapes
      clipPath: [
          "polygon(20% 0%, 80% 10%, 100% 50%, 70% 90%, 10% 80%, 0% 30%)",
          "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          "polygon(10% 10%, 90% 0%, 100% 80%, 60% 100%, 0% 90%)"
      ][Math.floor(Math.random() * 3)]
  })));

  useEffect(() => {
    // Timing sequence for the Ascension Vortex
    const t1 = setTimeout(() => setPhase(1), 100);   // Vortex starts swirling, rocks float
    const t2 = setTimeout(() => setPhase(2), 1500);  // Typography materializes
    const t3 = setTimeout(() => setPhase(3), 3000);  // Subtitles
    const t4 = setTimeout(() => setPhase(4), 6000);  // Ascension Warp!
    const t5 = setTimeout(() => setIsExiting(true), 7000); // Yellow flash
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
          key="intro-ascension"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-[#050302] select-none overflow-hidden flex flex-col items-center justify-center font-sans" // Pitch black cavern atmosphere
        >
          {/* Static Ambient Cavern Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 5, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ 
                background: "radial-gradient(ellipse at 50% 15%, rgba(255,120,0,0.15) 0%, rgba(0,0,0,0) 70%)"
            }}
          />

          {/* Golden Magic Beams (Lightning strikes upward to the vortex) */}
          {phase >= 1 && (
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <defs>
                      <linearGradient id="goldBeam" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="rgba(255,200,0,0)" />
                          <stop offset="80%" stopColor="rgba(255,255,255,0.7)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,1)" />
                      </linearGradient>
                      <filter id="glow">
                          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                          <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                      </filter>
                  </defs>
                  
                  {/* Beam 1 - Left Snaking line */}
                  <motion.path 
                      d="M 15 100 Q 35 70 20 50 T 45 15" // Curves aggressively towards the top center
                      fill="none" stroke="url(#goldBeam)" strokeWidth="0.3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                      filter="url(#glow)"
                  />
                  {/* Beam 2 - Right Zigzag */}
                  <motion.path 
                      d="M 85 100 Q 65 80 80 40 T 55 15"
                      fill="none" stroke="url(#goldBeam)" strokeWidth="0.4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: [0, 1, 1], opacity: [0, 0.8, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      filter="url(#glow)"
                  />
                  {/* Beam 3 - Center Branching */}
                  <motion.path 
                      d="M 45 100 L 35 70 L 60 40 L 50 15"
                      fill="none" stroke="url(#goldBeam)" strokeWidth="0.25"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2.5 }}
                      filter="url(#glow)"
                  />
              </svg>
          )}

          {/* Anti-Gravity Debris (Dark Rocks floating up) */}
          <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
            {debris.map((p, i) => (
                <motion.div
                    key={`rock-${i}`}
                    initial={{ left: `${p.xStart}vw`, top: `${p.yStart}vh`, scale: p.scale, rotate: 0 }}
                    animate={ phase >= 1 ? { x: `${p.xMove}vw`, y: `-${p.yStart + 20}vh`, rotate: p.spinSpeed } : {} }
                    transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
                    className="absolute bg-[#0f0805]" // Heavy dark stone
                    style={{ 
                        width: "15px", height: "15px",
                        clipPath: p.clipPath,
                        boxShadow: "inset 0px 3px 5px rgba(255, 180, 0, 0.5)", // Epic Rim Light casting from the vortex above!
                        willChange: "transform" 
                    }}
                />
            ))}
          </div>

          {/* --- THE CELESTIAL SKY VORTEX --- */}
          <div className="absolute top-[12vh] left-1/2 w-0 h-0 z-[5] perspective-[800px] pointer-events-none flex justify-center items-center">
              
              {/* The Swirling 3D Rings (Flatted into the sky) */}
              {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                      key={`vortex-ring-${i}`}
                      className="absolute rounded-full border-t-[3px] border-b-[1px] border-[#ffcc00]"
                      style={{ 
                          width: `${25 + i * 15}vw`, 
                          height: `${25 + i * 15}vw`,
                          rotateX: "75deg", // Extreme tilt backwards creates the "sky ceiling" illusion
                          boxShadow: `0 0 50px rgba(255, 120, 0, ${0.4 - i*0.05}), inset 0 0 50px rgba(255, 120, 0, ${0.4 - i*0.05})`,
                          opacity: 0
                      }}
                      initial={{ scale: 0 }}
                      animate={
                          phase >= 4 ? { scale: 5, opacity: 1, y: "60vh", rotateZ: (i%2===0?1:-1)*360 } // ASCENSION: It comes DOWN to swallow the camera
                          : phase >= 1 ? { scale: 1, opacity: 1, y: 0, rotateZ: (i%2===0?1:-1)*360 } 
                          : {}
                      }
                      transition={{ 
                          scale: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 4, ease: "easeOut" },
                          y: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 0 },
                          opacity: { duration: 2 },
                          rotateZ: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" } // Rings spin on the flattened plane
                      }}
                  />
              ))}

              {/* The White-Hot Core (The Eye of the Vortex) */}
              <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                      phase >= 4 ? { scale: 15, opacity: 1, y: "50vh" } 
                      : phase >= 1 ? { scale: 1, opacity: 1, y: 0 } 
                      : {}
                  }
                  transition={{
                      scale: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 4, ease: "easeOut" },
                      y: phase >= 4 ? { duration: 1.2, ease: "circIn" } : { duration: 0 },
                      opacity: { duration: 2 }
                  }}
                  className="absolute w-[15vw] h-[15vw] rounded-full"
                  style={{ 
                      rotateX: "75deg",
                      background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,200,50,0.9) 40%, rgba(255,100,0,0) 70%)",
                      boxShadow: "0 0 120px 60px rgba(255, 120, 0, 0.7)",
                      willChange: "transform, opacity"
                  }}
              />
          </div>

          {/* --- ARCHITECTURAL SILHOUETTES (Creates cavern depth) --- */}
          <motion.div 
             initial={{ y: 0 }}
             animate={phase >= 4 ? { y: "100vh" } : {}} // Falls completely away during camera ascension
             transition={{ duration: 1.2, ease: "circIn" }}
             className="absolute inset-0 pointer-events-none z-30"
          >
              {/* Left Pillar Block */}
              <div 
                  className="absolute bottom-0 left-0 w-[20vw] md:w-[15vw] h-[75vh] bg-[#050201]" 
                  style={{ 
                      clipPath: "polygon(0% 0%, 100% 15%, 80% 100%, 0% 100%)",
                      boxShadow: "inset -5px 0 30px rgba(255, 120, 0, 0.15)" // Side light from vortex
                  }} 
              />
              {/* Right Pillar Block */}
              <div 
                  className="absolute bottom-0 right-0 w-[25vw] md:w-[18vw] h-[85vh] bg-[#050201]" 
                  style={{ 
                      clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 15% 100%)",
                      boxShadow: "inset 5px 0 30px rgba(255, 120, 0, 0.15)"
                  }} 
              />
              {/* Bottom Ground / Broken Stairs */}
              <div 
                  className="absolute bottom-0 left-0 right-0 h-[30vh] bg-[#050201]" 
                  style={{ 
                      clipPath: "polygon(0% 100%, 15% 15%, 35% 20%, 60% 10%, 85% 25%, 100% 100%)",
                      boxShadow: "inset 0 10px 40px rgba(255, 150, 0, 0.2)" // Top light
                  }} 
              />
          </motion.div>

          <motion.div 
             initial={{ y: 0 }}
             animate={phase >= 4 ? { y: "100vh" } : {}} // Text also falls away out the bottom of the screen as we ascend!
             transition={{ duration: 1.2, ease: "circIn" }}
             className="relative z-40 flex flex-col items-center mt-[15vh]" // Pushed down to give space to the sky vortex
          >
             {/* Epic Golden Typography Bathed in Light */}
             <motion.h1
               initial={{ opacity: 0, scale: 0.9 }}
               animate={
                   phase >= 2 ? { opacity: 1, scale: 1.05 } 
                   : {}
               }
               transition={{ 
                   opacity: { duration: 2, ease: "easeOut" },
                   scale: { duration: 15, ease: "linear" } 
               }}
               className="text-[min(6vw,60px)] md:text-[min(4vw,70px)] font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] ml-[0.5em] md:ml-[0.8em] text-center"
               style={{ 
                   color: "#fff",
                   WebkitTextStroke: "1px rgba(255, 180, 0, 0.8)", 
                   textShadow: "0 -15px 50px rgba(255,180,0,0.9), 0 15px 30px rgba(0,0,0,1)", // Intense glow from ABOVE, pitch black shadow BELOW
                   willChange: "transform, opacity" 
               }}
             >
               SURYAPRAKASH
             </motion.h1>

             {/* Minimalist Subtitles */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={phase >= 3 ? { opacity: 0.9, y: 0 } : {}}
               transition={{ duration: 2, ease: "easeOut" }}
               className="mt-8 flex flex-col items-center gap-5"
               style={{ willChange: "transform, opacity" }}
             >
               <span className="text-[#ffcc00] text-[min(2vw,16px)] font-bold tracking-[0.8em] ml-[0.8em] uppercase" style={{ textShadow: "0 5px 15px rgba(0,0,0,1)" }}>
                 AI Engineer
               </span>
               <motion.div 
                   initial={{ height: 0 }}
                   animate={phase >= 3 ? { height: "30px" } : {}}
                   transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                   className="w-[1px] bg-[#ff9d00] opacity-80" 
               />
               <span className="text-[#ffeb73] text-[min(1.5vw,12px)] font-medium tracking-[0.6em] ml-[0.6em] uppercase opacity-90" style={{ textShadow: "0 5px 10px rgba(0,0,0,1)" }}>
                 Portfolio 2026
               </span>
             </motion.div>
          </motion.div>
          
          {/* Ascension Yellow Flash */}
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
             animate={{ opacity: phase >= 2 && phase < 4 ? 0.3 : 0 }}
             transition={{ duration: 2 }}
             className="absolute bottom-[4vh] text-[#ffeb73] font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] font-light z-50 opacity-50"
          >
             Press any key to ascend
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

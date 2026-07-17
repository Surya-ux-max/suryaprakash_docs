"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";

const SHADOW_OBJECTS = [
  {
    id: "react",
    // Top-left, rotating and bobbing faster
    initial: { x: "-20vw", y: "0vh", rotate: -45, scale: 0.8 },
    animate: { x: "15vw", y: "25vh", rotate: 315, scale: 1.1 },
    transition: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    shadow: "15px 15px 0px rgba(0,0,0,1)",
    svg: (
      <svg viewBox="-12 -12 24 24" className="w-24 h-24 md:w-32 md:h-32">
        <circle cx="0" cy="0" r="2.5" fill="black"/>
        <g stroke="black" strokeWidth="2.5" fill="none">
          <ellipse rx="10" ry="4"/>
          <ellipse rx="10" ry="4" transform="rotate(60)"/>
          <ellipse rx="10" ry="4" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    id: "plane",
    // Swoops rapidly across the screen like a real paper plane
    initial: { x: "-20vw", y: "90vh", rotate: -25, scale: 0.8 },
    animate: { x: "120vw", y: "-30vh", rotate: -5, scale: 1.2 },
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
    shadow: "12px 20px 0px rgba(0,0,0,1)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-20 h-20 md:w-28 md:h-28" fill="black">
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    )
  },
  {
    id: "python",
    // Slithers and bobs more aggressively
    initial: { x: "110vw", y: "85vh", rotate: -20, scale: 0.8 },
    animate: { x: "60vw", y: "65vh", rotate: 10, scale: 1.1 },
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    shadow: "-15px 15px 0px rgba(0,0,0,1)",
    svg: (
      <svg viewBox="0 0 110 110" className="w-28 h-28 md:w-40 md:h-40" fill="black">
        <path d="M54,11 c-23,0-22,10-22,10 l0,11 l22,0 l0,3 l-31,0 c0,0 -12,1 -12,20 c0,19 11,20 11,20 l10,0 l0,-12 c0,0 0,-13 14,-13 l21,0 c0,0 12,0 12,-11 l0,-17 c0,0 1,-11 -25,-11 Z M45,21 a4,4 0 1,1 -8,0 a4,4 0 1,1 8,0 Z M56,99 c23,0 22,-10 22,-10 l0,-11 l-22,0 l0,-3 l31,0 c0,0 12,-1 12,-20 c0,-19 -11,-20 -11,-20 l-10,0 l0,12 c0,0 0,13 -14,13 l-21,0 c0,0 -12,0 -12,11 l0,17 c0,0 -1,11 25,11 Z M65,89 a4,4 0 1,1 8,0 a4,4 0 1,1 -8,0 Z" />
      </svg>
    )
  },
  {
    id: "soldier",
    // Snaps into defensive position quicker
    initial: { x: "-20vw", y: "90vh", rotate: 15, scale: 0.8 },
    animate: { x: "15vw", y: "55vh", rotate: -5, scale: 1.1 },
    transition: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeOut" },
    shadow: "15px 15px 0px rgba(0,0,0,1)",
    svg: (
      <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48" fill="black">
        <circle cx="50" cy="20" r="8" />
        <path d="M 45 18 C 45 10 55 10 55 18 L 57 20 L 43 20 Z" /> 
        <path d="M 45 28 L 55 28 L 58 55 L 42 55 Z" />
        <path d="M 42 55 L 35 90 L 42 90 L 48 55 Z" />
        <path d="M 58 55 L 65 90 L 58 90 L 52 55 Z" />
        <path d="M 45 30 L 25 40 L 30 45 L 42 35 Z" /> 
        <path d="M 55 30 L 70 35 L 75 32 L 58 27 Z" /> 
        <path d="M 20 38 L 90 38 L 90 42 L 20 42 Z" /> 
        <path d="M 30 38 L 30 52 L 36 52 L 36 42 Z" /> 
        <path d="M 20 38 L 10 46 L 15 50 L 25 42 Z" /> 
        <text x="50" y="47" fill="#facc15" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">C++</text>
      </svg>
    )
  },
  {
    id: "transformer",
    // Aggressively looms into frame
    initial: { x: "110vw", y: "-20vh", rotate: 25, scale: 0.8 },
    animate: { x: "65vw", y: "15vh", rotate: -10, scale: 1.25 },
    transition: { duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    shadow: "-12px -12px 0px rgba(0,0,0,1)",
    svg: (
      <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48" fill="black">
        <polygon points="10,80 90,80 100,90 0,90" />
        <rect x="20" y="82" width="60" height="4" fill="#facc15" />
        <polygon points="15,80 35,40 65,40 85,80" />
        <polygon points="35,40 50,10 65,40" />
        <circle cx="45" cy="25" r="4" fill="#facc15" />
        <circle cx="55" cy="25" r="4" fill="#facc15" />
        <polygon points="30,50 5,25 12,20 35,45" />
        <polygon points="70,50 95,25 88,20 65,45" />
        <path d="M 50 40 L 50 70 M 35 60 L 65 60" stroke="#facc15" strokeWidth="3" />
      </svg>
    )
  }
];

export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Mouse shadow tracking for brutalist interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Map mouse movement to shadow offsets (inverted so shadow moves opposite to light source)
  const shadowX = useTransform(smoothX, (v) => (-v * 25) + 12);
  const shadowY = useTransform(smoothY, (v) => (-v * 25) + 12);

  useEffect(() => {
    // Brutalist timing sequence
    const t1 = setTimeout(() => setPhase(1), 400);   // The Black Curtain opens
    const t2 = setTimeout(() => setPhase(2), 1200);  // Name stamps in with heavy shadow
    const t3 = setTimeout(() => setPhase(3), 2200);  // Badges (AI Engineer, Portfolio) appear
    const t4 = setTimeout(() => setPhase(4), 5000);  // Auto-skip initiation
    const t5 = setTimeout(() => setIsExiting(true), 5500); 
    const t6 = setTimeout(() => setIsVisible(false), 6300); // Fully unmounts

    return () => { [t1,t2,t3,t4,t5,t6].forEach(clearTimeout); };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Jump/Skip functionality
  useEffect(() => {
    if (!isVisible || isExiting) return;
    const skip = () => {
        setPhase(4); 
        setTimeout(() => setIsExiting(true), 200);
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
          key="intro-brutalist"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-yellow-400 select-none overflow-hidden flex flex-col items-center justify-center font-sans"
        >
          {/* Phase 0 & 1: The Black Curtain Reveal */}
          <motion.div
            initial={{ x: 0 }}
            animate={phase >= 1 ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-black z-[110] shadow-[20px_0_50px_rgba(0,0,0,0.8)] border-r-4 border-yellow-400"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={phase >= 1 ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-black z-[110] shadow-[-20px_0_50px_rgba(0,0,0,0.8)] border-l-4 border-yellow-400"
          />

          {/* Background Geometric Elements & Shadow Objects */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
            {/* Giant rotating dashed ring */}
            <motion.div
               animate={phase >= 1 ? { rotate: 360 } : {}}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute w-[150vw] h-[150vw] md:w-[90vw] md:h-[90vw] border-[2px] border-black opacity-15 rounded-full"
               style={{ borderStyle: "dashed" }}
            />
            
            {/* Custom Shadow Objects */}
            {SHADOW_OBJECTS.map((obj) => (
              <motion.div
                key={obj.id}
                initial={{ ...obj.initial, opacity: 0 }}
                animate={phase >= 1 ? { ...obj.animate, opacity: 1 } : {}}
                transition={{ ...obj.transition, opacity: { duration: 1.5, ease: "easeOut" } }}
                className="absolute top-0 left-0"
                style={{
                  filter: `drop-shadow(${obj.shadow})`,
                  willChange: "transform, opacity"
                }}
              >
                {obj.svg}
              </motion.div>
            ))}
          </div>

          <div className="relative z-20 flex flex-col items-center">
            {/* Typography Stamp */}
            <div className="relative flex justify-center items-center">
              {/* Dynamic Shadow Layer */}
              <motion.div
                 style={{ x: shadowX, y: shadowY }}
                 className="absolute inset-0 z-0 flex justify-center items-center"
              >
                <motion.h1 
                  initial={{ opacity: 0, scale: 1.5, rotate: -4 }}
                  animate={phase >= 2 ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                  className="text-[min(10vw,90px)] md:text-[min(8vw,140px)] font-black uppercase tracking-[-0.04em] text-black leading-none whitespace-nowrap"
                >
                  SURYAPRAKASH
                </motion.h1>
              </motion.div>
              
              {/* Foreground Text Layer */}
              <motion.h1 
                initial={{ y: -60, opacity: 0, scale: 1.5, rotate: -4 }}
                animate={phase >= 2 ? { y: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                className="relative z-10 text-[min(10vw,90px)] md:text-[min(8vw,140px)] font-black uppercase tracking-[-0.04em] text-yellow-400 leading-none whitespace-nowrap"
                style={{ WebkitTextStroke: "min(0.5vw, 6px) black" }}
              >
                SURYAPRAKASH
              </motion.h1>
            </div>

            {/* Brutalist Badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="mt-8 flex flex-wrap justify-center items-center gap-6 z-20"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="bg-black text-yellow-400 px-6 py-2 border-4 border-black font-bold uppercase tracking-widest text-xs md:text-lg transform -rotate-3 cursor-default"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.1)" }}
              >
                AI Engineer
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="bg-yellow-400 text-black px-6 py-2 border-4 border-black font-bold uppercase tracking-widest text-xs md:text-lg transform rotate-2 cursor-default"
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,1)" }}
              >
                Portfolio 2026
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Skip Badge */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: phase >= 2 && phase < 4 ? 1 : 0, y: phase >= 2 && phase < 4 ? 0 : 20 }}
             transition={{ duration: 0.4 }}
             className="absolute bottom-[6vh] bg-black text-yellow-400 px-6 py-3 border-2 border-black font-mono text-xs md:text-sm uppercase tracking-widest font-bold z-50 shadow-[6px_6px_0px_rgba(0,0,0,0.15)] group cursor-pointer"
          >
             <span className="hidden md:inline group-hover:animate-pulse">Press any key or click to enter</span>
             <span className="inline md:hidden group-hover:animate-pulse">Tap to enter</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

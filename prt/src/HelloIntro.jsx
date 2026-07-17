"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";

const SHARDS = [
  { // 1: Top Left
    clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 30%)",
    exit: { x: "-30vw", y: "-30vh", rotate: -45, opacity: 0, transition: { duration: 0.8, ease: "easeIn" } }
  },
  { // 2: Top Right
    clipPath: "polygon(50% 0%, 100% 0%, 100% 20%, 50% 50%)",
    exit: { x: "40vw", y: "-40vh", rotate: 30, opacity: 0, transition: { duration: 0.9, ease: "easeIn" } }
  },
  { // 3: Right
    clipPath: "polygon(100% 20%, 100% 70%, 50% 50%)",
    exit: { x: "50vw", y: "10vh", rotate: 60, opacity: 0, transition: { duration: 0.7, ease: "easeIn" } }
  },
  { // 4: Bottom Right
    clipPath: "polygon(100% 70%, 100% 100%, 60% 100%, 50% 50%)",
    exit: { x: "40vw", y: "50vh", rotate: 45, opacity: 0, transition: { duration: 0.8, ease: "easeIn" } }
  },
  { // 5: Bottom
    clipPath: "polygon(60% 100%, 20% 100%, 50% 50%)",
    exit: { x: "-10vw", y: "60vh", rotate: -20, opacity: 0, transition: { duration: 0.9, ease: "easeIn" } }
  },
  { // 6: Bottom Left
    clipPath: "polygon(20% 100%, 0% 100%, 0% 70%, 50% 50%)",
    exit: { x: "-40vw", y: "40vh", rotate: -60, opacity: 0, transition: { duration: 0.7, ease: "easeIn" } }
  },
  { // 7: Left
    clipPath: "polygon(0% 70%, 0% 30%, 50% 50%)",
    exit: { x: "-50vw", y: "-10vh", rotate: -30, opacity: 0, transition: { duration: 0.8, ease: "easeIn" } }
  }
];

export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Mouse shadow tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const shadowX = useTransform(smoothX, (v) => (-v * 25) + 12);
  const shadowY = useTransform(smoothY, (v) => (-v * 25) + 12);

  useEffect(() => {
    // Earthquake + Shatter sequence
    const t1 = setTimeout(() => setPhase(1), 400);   // Curtains open
    const t2 = setTimeout(() => setPhase(2), 1200);  // Name stamps
    const t3 = setTimeout(() => setPhase(3), 2200);  // Badges
    const t4 = setTimeout(() => setPhase(4), 3800);  // Pre-rumble
    const t5 = setTimeout(() => setPhase(5), 4500);  // MASSIVE EARTHQUAKE (Cracks appear)
    const t6 = setTimeout(() => setPhase(6), 5500);  // SHATTER
    const t7 = setTimeout(() => setIsExiting(true), 5500); // Shards fly apart
    const t8 = setTimeout(() => setIsVisible(false), 6500); // Unmount entire wrapper

    return () => { [t1,t2,t3,t4,t5,t6,t7,t8].forEach(clearTimeout); };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isVisible || isExiting) return;
    const skip = () => {
        setPhase(6); 
        setTimeout(() => setIsExiting(true), 50);
    };
    window.addEventListener("pointerdown", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });
    return () => {
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [isVisible, isExiting]);

  if (!isVisible) return null;

  const uiContent = (
    <div className="absolute inset-0 w-full h-full bg-yellow-400 select-none overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* Black Curtains */}
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

      {/* Glitch Flash Overlay during Quake */}
      <AnimatePresence>
        {phase === 5 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0, 0.6, 0] }}
            transition={{ duration: 0.2, repeat: Infinity }}
            className="absolute inset-0 z-[120] bg-white pointer-events-none mix-blend-difference"
          />
        )}
      </AnimatePresence>

      {/* Cracks Overlay (Appears during Earthquake before shatter) */}
      <AnimatePresence>
        {phase === 5 && (
          <motion.svg 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full pointer-events-none z-[130]"
          >
            <g stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.8">
               <line x1="50%" y1="50%" x2="0%" y2="0%" />
               <line x1="50%" y1="50%" x2="50%" y2="0%" />
               <line x1="50%" y1="50%" x2="100%" y2="20%" />
               <line x1="50%" y1="50%" x2="100%" y2="70%" />
               <line x1="50%" y1="50%" x2="60%" y2="100%" />
               <line x1="50%" y1="50%" x2="20%" y2="100%" />
               <line x1="50%" y1="50%" x2="0%" y2="70%" />
               <line x1="50%" y1="50%" x2="0%" y2="30%" />
            </g>
          </motion.svg>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center">
        {/* Typography Stamp */}
        <div className="relative flex justify-center items-center">
          <motion.div style={{ x: shadowX, y: shadowY }} className="absolute inset-0 z-0 flex justify-center items-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 1.5, rotate: -4 }}
              animate={phase >= 2 ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
              className="text-[min(10vw,90px)] md:text-[min(8vw,140px)] font-black uppercase tracking-[-0.04em] text-black leading-none whitespace-nowrap"
            >
              SURYAPRAKASH
            </motion.h1>
          </motion.div>
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
          <motion.div className="bg-black text-yellow-400 px-6 py-2 border-4 border-black font-bold uppercase tracking-widest text-xs md:text-lg transform -rotate-3" style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.1)" }}>
            AI Engineer
          </motion.div>
          <motion.div className="bg-yellow-400 text-black px-6 py-2 border-4 border-black font-bold uppercase tracking-widest text-xs md:text-lg transform rotate-2" style={{ boxShadow: "8px 8px 0px rgba(0,0,0,1)" }}>
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
    </div>
  );

  return (
    <motion.div
      className="fixed inset-0 z-[100] origin-center"
      style={{ pointerEvents: isExiting ? 'none' : 'auto' }}
      animate={
        phase === 5 ? {
          x: [-20, 20, -15, 15, -25, 25, -10, 10],
          y: [15, -15, 20, -20, 10, -10, 25, -25],
          rotate: [-3, 3, -2, 2, -4, 4, -1, 1],
          scale: 1.1 
        } : phase === 4 ? {
          x: [-3, 3, -2, 2],
          y: [2, -2, 3, -3],
          scale: 1.02,
          rotate: 0
        } : { x: 0, y: 0, rotate: 0, scale: 1 }
      }
      transition={
        phase === 5 ? { duration: 0.3, repeat: Infinity, ease: "linear" }
        : phase === 4 ? { duration: 0.1, repeat: Infinity, ease: "linear" }
        : { duration: 0 } 
      }
    >
      <AnimatePresence>
        {!isExiting && SHARDS.map((shard, i) => (
          <motion.div
            key={`shard-${i}`}
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: shard.clipPath, willChange: "transform, opacity" }}
            exit={shard.exit}
          >
            {uiContent}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}


"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import introImg from "./images/intro.png";

export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [exactBgColor, setExactBgColor] = useState("#facc15"); // Fallback to tailwind yellow-400

  // Mouse shadow tracking for brutalist interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const shadowX = useTransform(smoothX, (v) => (-v * 15) + 8);
  const shadowY = useTransform(smoothY, (v) => (-v * 15) + 8);

  useEffect(() => {
    // Dynamically extract the exact background color from the top-left pixel of the image
    const img = new Image();
    img.src = introImg;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      setExactBgColor(`rgb(${r}, ${g}, ${b})`);
    };

    // Elegant timing sequence
    const t1 = setTimeout(() => setPhase(1), 400);   // Image fades/scales in
    const t2 = setTimeout(() => setPhase(2), 1200);  // Name stamps in
    const t3 = setTimeout(() => setPhase(3), 2000);  // Badges appear
    const t4 = setTimeout(() => setIsExiting(true), 4500); // Start exit slide
    const t5 = setTimeout(() => setIsVisible(false), 5500); // Fully unmount

    return () => { [t1,t2,t3,t4,t5].forEach(clearTimeout); };
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

  // Jump/Skip functionality
  useEffect(() => {
    if (!isVisible || isExiting) return;
    const skip = () => {
        setIsExiting(true);
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
          key="intro-image-view"
          initial={{ y: 0 }}
          exit={{ y: "-100vh", opacity: 0 }} // Smooth slide up
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] select-none flex flex-col items-center justify-between py-[6vh] font-sans overflow-hidden transition-colors duration-500"
          style={{ backgroundColor: exactBgColor }} // Perfectly matches the image's background
        >
          {/* Flat Vector Illustration Image - Flexible height to prevent overlap */}
          <motion.img 
            src={introImg}
            initial={{ scale: 0.95, opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={phase >= 1 ? { scale: 1, opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="w-[90vw] md:w-[60vw] max-w-2xl flex-1 min-h-0 object-contain object-bottom z-10 drop-shadow-[0px_20px_50px_rgba(0,0,0,0.15)]"
            alt="Intro Vector Illustration"
          />

          {/* Typography anchored cleanly at the bottom without overlapping */}
          <div className="relative z-20 flex flex-col items-center w-full mt-4">
            {/* Typography Stamp */}
            <div className="relative flex justify-center items-center">
              <motion.div style={{ x: shadowX, y: shadowY }} className="absolute inset-0 z-0 flex justify-center items-center">
                <motion.h1 
                  initial={{ opacity: 0, scale: 1.2, y: 20 }}
                  animate={phase >= 2 ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                  className="text-[min(12vw,90px)] md:text-[min(10vw,160px)] font-black uppercase tracking-[-0.04em] text-black leading-none whitespace-nowrap opacity-15"
                >
                  SURYAPRAKASH
                </motion.h1>
              </motion.div>
              <motion.h1 
                initial={{ y: 50, opacity: 0, scale: 1.2 }}
                animate={phase >= 2 ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                className="relative z-10 text-[min(12vw,90px)] md:text-[min(10vw,160px)] font-black uppercase tracking-[-0.04em] text-yellow-400 leading-none whitespace-nowrap drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                style={{ WebkitTextStroke: "min(0.3vw, 4px) black" }}
              >
                SURYAPRAKASH
              </motion.h1>
            </div>

            {/* Brutalist Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="mt-6 flex flex-wrap justify-center items-center gap-4 md:gap-6 z-20"
            >
              <motion.div className="bg-black text-yellow-400 px-6 py-2 border-2 border-black font-bold uppercase tracking-widest text-xs md:text-base transform -rotate-2" style={{ boxShadow: "6px 6px 0px rgba(0,0,0,0.5)" }}>
                AI Engineer
              </motion.div>
              <motion.div className="bg-yellow-400 text-black px-6 py-2 border-2 border-black font-bold uppercase tracking-widest text-xs md:text-base transform rotate-1" style={{ boxShadow: "6px 6px 0px rgba(0,0,0,1)" }}>
                Portfolio 2026
              </motion.div>
            </motion.div>
          </div>

          {/* Subtle Skip Prompt */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: phase >= 1 ? 1 : 0 }}
             transition={{ delay: 2, duration: 1 }}
             className="absolute top-6 right-6 font-mono text-xs font-bold tracking-widest text-black/40 uppercase cursor-pointer hover:text-black z-30"
          >
             Tap to Skip
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


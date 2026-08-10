"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import introImg from "./images/intro.webp";

export function HelloIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [exactBgColor, setExactBgColor] = useState("#facc15");

  useEffect(() => {
    let timers = [];
    let sequenceStarted = false;

    // Start the animation sequence — guarded so it only fires once
    // even if both onload and the fallback timer are in-flight.
    const startSequence = () => {
      if (sequenceStarted) return;
      sequenceStarted = true;
      timers.push(setTimeout(() => setPhase(0.5), 0));    // curtains open
      timers.push(setTimeout(() => setPhase(1),   400));  // image fades in
      timers.push(setTimeout(() => setPhase(2),   1000)); // name rises
      timers.push(setTimeout(() => setPhase(3),   1500)); // badges fade in
      timers.push(setTimeout(() => setIsExiting(true), 3800)); // exit
      timers.push(setTimeout(() => setIsVisible(false), 4800)); // unmount
    };

    // Extract bg colour from image pixel AND start sequence after image loads.
    // This guarantees the image is ready before we fade it in.
    const img = new Image();
    img.src = introImg;
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 1, 1);
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        setExactBgColor(`rgb(${r}, ${g}, ${b})`);
      } catch (_) { /* canvas taint safety — color stays default */ }
      startSequence();
    };
    img.onerror = () => startSequence(); // image 404 — still run intro

    // Safety fallback: if image doesn't load within 1.5 s (e.g. very slow
    // network), start the sequence anyway so the intro doesn't freeze.
    const fallback = setTimeout(startSequence, 1500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(fallback);
    };
  }, []);

  // Jump/Skip functionality
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
          key="intro-image-view"
          initial={{ y: 0 }}
          exit={{ y: "-100vh", opacity: 0 }} 
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] select-none flex flex-col items-center justify-between py-[6vh] font-sans overflow-hidden transition-colors duration-500"
          style={{ backgroundColor: exactBgColor }} 
        >
          {/* Sleek Black Curtains Reveal */}
          <motion.div
            initial={{ x: 0 }}
            animate={phase >= 0.5 ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-black z-[110] shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={phase >= 0.5 ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-black z-[110] shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
          />

          {/* Flat Vector Illustration Image - Sleek Fade In */}
          <motion.img 
            src={introImg}
            initial={{ scale: 0.98, opacity: 0, y: 20 }}
            animate={phase >= 1 ? { scale: 1, opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-[90vw] md:w-[60vw] max-w-2xl flex-1 min-h-0 object-contain object-bottom z-10 drop-shadow-2xl"
            alt="Intro Vector Illustration"
          />

          {/* Typography anchored cleanly at the bottom without overlapping */}
          <div className="relative z-20 flex flex-col items-center w-full mt-4">
            
            {/* Typography Stamp - Professional Rise */}
            <div className="relative flex justify-center items-center">
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={phase >= 2 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 text-[min(12vw,90px)] md:text-[min(10vw,160px)] font-black uppercase tracking-tight text-[#facc15] leading-none whitespace-nowrap drop-shadow-lg"
                style={{ WebkitTextStroke: "min(0.2vw, 3px) black" }}
              >
                SURYAPRAKASH
              </motion.h1>
            </div>

            {/* Professional Badges - Aligned and Elegant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap justify-center items-center gap-4 md:gap-6 z-20"
            >
              <div className="bg-black text-[#facc15] px-8 py-3 border-2 border-black font-bold uppercase tracking-widest text-xs md:text-sm shadow-xl transition-transform hover:-translate-y-1 cursor-pointer">
                AI Engineer
              </div>
              <div className="bg-white text-black px-8 py-3 border-2 border-black font-bold uppercase tracking-widest text-xs md:text-sm shadow-xl transition-transform hover:-translate-y-1 cursor-pointer">
                Portfolio 2026
              </div>
            </motion.div>
          </div>

          {/* Subtle Skip Prompt */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: phase >= 1 ? 1 : 0 }}
             transition={{ delay: 2, duration: 1.5 }}
             className="absolute top-8 right-8 font-mono text-xs font-semibold tracking-widest text-black/50 uppercase cursor-pointer hover:text-black z-30 transition-colors"
          >
             Tap to Skip
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


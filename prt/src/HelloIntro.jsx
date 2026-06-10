"use client";

import { useEffect, useMemo, useState } from "react";

const HELLO_WORDS = [
    { word: "Hello", cursive: true },
    { word: "नमस्ते", cursive: false }, // Hindi
    { word: "Bonjour", cursive: true },
    { word: "こんにちは", cursive: false }, // Japanese
    { word: "Hola", cursive: true },
    { word: "안녕하세요", cursive: false }, // Korean
    { word: "Ciao", cursive: true },
    { word: "你好", cursive: false }, // Chinese
    { word: "Hallo", cursive: true },
    { word: "مرحبا", cursive: false }, // Arabic
    { word: "Olá", cursive: true },
    { word: "Привет", cursive: false }, // Russian
    { word: "Xin chào", cursive: false }, // Vietnamese
    {word: "ನಮಸ್ಕಾರ", cursive: false}, // Kannada 
    {word: "வணக்கம்", cursive: false}, // Tamil 
]; 

const ROTATE_MS = 480; 
const EXIT_MS = 1000; 

export function HelloIntro() {
    const [wordIndex, setWordIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const current = useMemo(() => HELLO_WORDS[wordIndex % HELLO_WORDS.length], [wordIndex]);

    useEffect(() => {
        if (!isVisible || isExiting) return;

        const rotateTimer = window.setInterval(() => {
            setWordIndex(prev => {
                if (prev >= HELLO_WORDS.length - 1) {
                    window.setTimeout(() => setIsExiting(true), 800);
                    window.clearInterval(rotateTimer);
                    return prev;
                }
                return prev + 1;
            });
        }, ROTATE_MS);

        return () => window.clearInterval(rotateTimer);
    }, [isVisible, isExiting]);

    useEffect(() => {
        if (!isExiting) return;
        const hideTimer = window.setTimeout(() => setIsVisible(false), EXIT_MS);
        return () => window.clearTimeout(hideTimer);
    }, [isExiting]);

    useEffect(() => {
        if (!isVisible) return;

        const onDismiss = () => setIsExiting(true);
        window.addEventListener("pointerdown", onDismiss, { once: true });
        window.addEventListener("keydown", onDismiss, { once: true });

        return () => {
            window.removeEventListener("pointerdown", onDismiss);
            window.removeEventListener("keydown", onDismiss);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            aria-live="polite"
            aria-label="Opening greeting"
            className={[
                "fixed inset-0 z-[100] overflow-hidden flex items-center justify-center",
                "bg-[#09090b]",
                "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isExiting ? "opacity-0 scale-105 blur-2xl" : "opacity-100 scale-100 blur-0",
            ].join(" ")}
        >
            {/* Liquid Industrial Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#EAB308]/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#EAB308]/10 blur-[150px] rounded-full" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 w-full">
                <div className="space-y-4">
                    <div className="h-[20vh] flex items-center justify-center overflow-visible">
                        <h1
                            key={wordIndex}
                            className={[
                                "transition-all duration-500 ease-out select-none",
                                current.cursive ? "font-[var(--font-cursive)] text-[#EAB308]" : "font-[var(--font-display)] text-white",
                                "text-[clamp(4rem,15vw,14rem)] leading-none tracking-tight",
                                "hello-word-reveal"
                            ].join(" ")}
                            style={{
                                transformOrigin: "center center",
                                textShadow: current.cursive ? "0 0 40px rgba(234, 179, 8, 0.2)" : "none"
                            }}
                        >
                            {current.word}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Progress Bar (Visual Only) */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-[#EAB308] transition-all ease-linear"
                 style={{
                     width: isExiting ? '100%' : `${((wordIndex + 1) / HELLO_WORDS.length) * 100}%`,
                     transitionDuration: isExiting ? `${EXIT_MS}ms` : `${ROTATE_MS}ms`
                 }}
            />
        </div>
    );
}

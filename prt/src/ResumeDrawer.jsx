import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import resumePDF from "./resume/Suryaprakash_Resume.pdf?url";

export default function ResumeDrawer() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Floating Pill Button */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="View Resume"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 300, damping: 25 }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-8 right-8 z-[90] flex items-center gap-2.5 px-5 py-3 bg-black border-2 border-yellow-400 rounded-full shadow-[0_0_24px_rgba(250,204,21,0.25)] group cursor-pointer"
      >
        {/* Animated dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400" />
        </span>
        <span className="text-yellow-400 font-black text-sm uppercase tracking-[0.18em] group-hover:tracking-[0.22em] transition-all duration-300">
          Resume
        </span>
        {/* Arrow icon */}
        <svg className="w-4 h-4 text-yellow-400 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 h-full w-full md:w-[54vw] z-[96] bg-[#0a0a0a] border-l border-yellow-400/20 flex flex-col shadow-[-30px_0_80px_rgba(0,0,0,0.6)]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-yellow-400/15 flex-shrink-0">
                <div className="flex items-center gap-3">
                  {/* PDF icon */}
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-yellow-400 font-black text-sm uppercase tracking-widest">Resume</p>
                    <p className="text-white/40 font-mono text-xs">Suryaprakash S — 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Download Button */}
                  <a
                    href={resumePDF}
                    download="Suryaprakash_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-black text-xs uppercase tracking-widest rounded-lg hover:bg-yellow-300 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close resume"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden relative">
                {/* Subtle gradient top */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <iframe
                  src={`${resumePDF}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="Suryaprakash Resume"
                  className="w-full h-full"
                  style={{ border: "none", background: "#0a0a0a" }}
                />
              </div>

              {/* Footer strip */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-yellow-400/10 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  <span className="text-green-400/80 font-mono text-xs uppercase tracking-widest">Open to Opportunities</span>
                </div>
                <span className="text-white/20 font-mono text-xs">Press Esc to close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

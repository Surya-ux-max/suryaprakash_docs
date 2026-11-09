import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ImagePeel({ images = [], activeIndex: controlledIndex, onPeel }) {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = controlledIndex !== undefined;
  const currentIndex = isControlled ? controlledIndex : internalIndex;

  const handlePeel = () => {
    if (!images.length) return;
    const nextIndex = (currentIndex + 1) % images.length;
    if (!isControlled) {
      setInternalIndex(nextIndex);
    }
    if (onPeel) onPeel(nextIndex);
  };

  const resolveImage = (item) => {
    if (!item) return { src: "", position: "center", fit: "cover" };
    if (typeof item === "string") return { src: item, position: "center", fit: "cover" };
    return {
      src: item.image || item.src || "",
      position: item.position || "center",
      fit: item.fit || "cover"
    };
  };

  const current = resolveImage(images[currentIndex]);
  const next = resolveImage(images[(currentIndex + 1) % images.length]);

  return (
    <div 
      className="relative w-full h-full cursor-pointer perspective-1000"
      onClick={handlePeel}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ rotateY: 0, x: 0, opacity: 1 }}
          animate={{ rotateY: 0, x: 0, opacity: 1 }}
          exit={{ 
            rotateY: -110, 
            x: "-100%", 
            opacity: 0,
            transition: { duration: 0.7, ease: "easeInOut" } 
          }}
          className="absolute inset-0 z-20 [backface-visibility:hidden]"
          style={{ transformOrigin: "left center" }}
        >
          <img
            src={current.src}
            alt="Achievement"
            className="w-full h-full rounded-3xl shadow-2xl border-4 border-black bg-black transition-all"
            style={{ objectFit: current.fit, objectPosition: current.position }}
          />
          {/* Peel Back Shadow Effect */}
          <motion.div 
            className="absolute inset-0 bg-black/20 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* The next image already sitting behind */}
      <div className="absolute inset-0 z-10">
        <img
          src={next.src}
          alt="Next Achievement"
          className="w-full h-full rounded-3xl shadow-lg border-4 border-black bg-black"
          style={{ objectFit: next.fit, objectPosition: next.position }}
        />
      </div>
    </div>
  );
}

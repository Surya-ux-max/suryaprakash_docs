import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ImagePeel({ images, onPeel }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePeel = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    if (onPeel) onPeel(nextIndex);
  };

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
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="absolute inset-0 z-20"
          style={{ transformOrigin: "left center" }}
        >
          <img
            src={images[currentIndex]}
            alt="Achievement"
            className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-black"
          />
          {/* Peel Back Shadow Effect */}
          <motion.div 
            className="absolute inset-0 bg-black/20 rounded-3xl"
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* The next image already sitting behind */}
      <div className="absolute inset-0 z-10">
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt="Next Achievement"
          className="w-full h-full object-cover rounded-3xl shadow-lg border-4 border-black"
        />
      </div>
    </div>
  );
}

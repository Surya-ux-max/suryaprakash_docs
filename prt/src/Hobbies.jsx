import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Car, Bike, Mountain, UtensilsCrossed, Gamepad2, Globe2 } from "lucide-react";

const HOBBIES_DATA = [
  {
    icon: <Car className="w-12 h-12 lg:w-16 lg:h-16" />,
    title: "Driving Cars",
    desc: "Exploring scenic routes and mastering manual transmissions on weekend drives. Passionate about road-tripping and machine mechanics.",
    color: "bg-yellow-400 text-black",
    isFavourite: true
  },
  {
    icon: <Bike className="w-12 h-12 lg:w-16 lg:h-16" />,
    title: "Bike Riding",
    desc: "Cruising winding roads and long-distance touring to find quiet retreats. Enjoying the raw connection with the elements and open road.",
    color: "bg-black text-yellow-400",
    isFavourite: true
  },
  {
    icon: <Mountain className="w-12 h-12 lg:w-16 lg:h-16" />,
    title: "Trekking",
    desc: "Conquering mountain trails, stargazing, and enjoying the peaceful wilderness. Passionate about leave-no-trace outdoor ethics.",
    color: "bg-yellow-400 text-black",
    isFavourite: false
  },
  {
    icon: <UtensilsCrossed className="w-12 h-12 lg:w-16 lg:h-16" />,
    title: "Cooking",
    desc: "Experimenting with fusion recipes, perfecting knife skills, and baking desserts. A culinary workspace is my favorite sandbox.",
    color: "bg-black text-yellow-400",
    isFavourite: false
  },
  {
    icon: <Gamepad2 className="w-12 h-12 lg:w-16 lg:h-16" />,
    title: "Video Games",
    desc: "Immersing in deep role-playing stories, analyzing level design, and playing tactical multiplayer shooters with friends.",
    color: "bg-yellow-400 text-black",
    isFavourite: true
  },
  {
    icon: <Globe2 className="w-12 h-12 lg:w-16 lg:h-16" />,
    title: "Geopolitics",
    desc: "Analyzing international relations, global trade flows, tech diplomacy, and modern history map changes.",
    color: "bg-black text-yellow-400",
    isFavourite: false
  }
];

export default function Hobbies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilts, setTilts] = useState({});

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize coordinates to max rotation of 12 degrees
    const rotX = -(y / (box.height / 2)) * 12;
    const rotY = (x / (box.width / 2)) * 12;

    setTilts((prev) => ({
      ...prev,
      [index]: { rotateX: rotX, rotateY: rotY }
    }));
  };

  const handleMouseLeave = (index) => {
    setTilts((prev) => ({
      ...prev,
      [index]: { rotateX: 0, rotateY: 0 }
    }));
  };

  const activeHobby = HOBBIES_DATA[activeIndex];

  return (
    <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden bg-yellow-400 px-[6vw] select-none">
      {/* Header */}
      <div className="absolute top-[6vh] left-[6vw] z-20 flex items-end leading-[0.8]">
        <h1 className="text-[min(18vh,10vw)] font-black tracking-[-0.08em]">
          H
        </h1>
        <span className="text-[min(6vh,3.5vw)] font-bold ml-[1vw] mb-[1.2vh]">
          obbies
        </span>
      </div>

      {/* Main split layout container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-[65vh] mt-[8vh] gap-8 lg:gap-[4vw] z-10">
        
        {/* Left column: Showcase detail panel */}
        <div className="w-full lg:w-[42%] h-[26vh] lg:h-[50vh] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full h-full bg-black text-yellow-400 p-6 lg:p-10 rounded-[32px] border-4 border-black shadow-[12px_12px_0px_0px_#000] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Dynamic decorative grid background inside panel */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#facc15_1px,transparent_1px),linear-gradient(to_bottom,#facc15_1px,transparent_1px)] bg-[size:16px_16px]" />

              <div className="relative z-10 flex flex-col gap-3 lg:gap-6">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  {activeHobby.isFavourite ? (
                    <div className="flex items-center gap-2 bg-yellow-400 text-black px-3.5 py-1 rounded-full font-mono text-[10px] lg:text-xs font-black uppercase tracking-wider">
                      ★ Favourite Hobby
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 border border-yellow-400/30 px-3.5 py-1 rounded-full font-mono text-[10px] lg:text-xs text-yellow-400/70 uppercase tracking-wider">
                      Hobby
                    </div>
                  )}
                  <div className="text-yellow-400/60 hidden lg:block">
                    {activeHobby.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tight leading-none text-yellow-400">
                  {activeHobby.title}
                </h3>

                {/* Description */}
                <p className="text-xs lg:text-lg text-yellow-400/80 font-semibold leading-relaxed line-clamp-3 lg:line-clamp-none">
                  {activeHobby.desc}
                </p>
              </div>

              {/* Decorative Techy Footer */}
              <div className="relative z-10 border-t border-yellow-400/20 pt-4 flex items-center justify-between text-[10px] font-mono text-yellow-400/40 uppercase tracking-widest mt-auto">
                <span>STATUS: ACTIVE</span>
                <span>SECE // SURYA_UX_MAX</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right column: Interactive Grid */}
        <div className="w-full lg:w-[55%] grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
          {HOBBIES_DATA.map((hobby, i) => {
            const isActive = activeIndex === i;
            const tilt = tilts[i] || { rotateX: 0, rotateY: 0 };

            return (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
                onClick={() => setActiveIndex(i)}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "800px",
                  rotateX: tilt.rotateX,
                  rotateY: tilt.rotateY,
                }}
                className={`aspect-square rounded-3xl flex flex-col items-center justify-center gap-3 lg:gap-4 cursor-pointer border-4 border-black transition-all duration-200 select-none relative
                  ${isActive 
                    ? `${hobby.color} shadow-[8px_8px_0px_0px_#000] scale-[1.04]` 
                    : `bg-transparent text-black/60 border-black/30 shadow-none hover:border-black hover:text-black hover:bg-black/5 hover:shadow-[4px_4px_0px_0px_#000]`
                  }
                `}
              >
                {/* Lifted icon for 3D depth */}
                <div
                  style={{ transform: "translateZ(25px)" }}
                  className="transition-transform duration-200"
                >
                  {hobby.icon}
                </div>

                {/* Lifted title for 3D depth */}
                <h3
                  style={{ transform: "translateZ(15px)" }}
                  className="text-xs sm:text-sm lg:text-lg font-black uppercase tracking-tight text-center px-2"
                >
                  {hobby.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Background Text Pattern */}
      <div className="absolute left-0 bottom-0 pointer-events-none opacity-5">
        <h1 className="text-[min(80vh,40vw)] font-black leading-none tracking-[-0.1em] select-none">
          LIVE
        </h1>
      </div>
    </section>
  );
}

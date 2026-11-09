import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ImagePeel from "./ImagePeel";

import achieveNgp from "./achieve/ngp.webp";
import achieveWorkshop from "./achieve/workshop.webp";
import achieveCampus from "./achieve/campus_ambassador.webp";
import achieveUnstop from "./achieve/unstop.webp";
import achieveUnstopGift from "./achieve/unstop_gift.webp";
import pic4 from "./achieve/pic4.webp";
import pic5 from "./achieve/pic5.webp";
import pic6 from "./achieve/pic6.webp";
import pic7 from "./achieve/pic7.webp";
import pic8 from "./achieve/pic8.webp";

const ACHIEVEMENT_DATA = [
  {
    title: "NGP AI Innovate 2026",
    shortTitle: "NGP AI",
    status: "Winner",
    desc: "Secured 1st Place at NGP Institute of Technology for outstanding innovation & technical excellence in AI towards Sustainable Development Goals.",
    image: achieveNgp,
    position: "center bottom",
  },
  {
    title: "My First AI Workshop",
    shortTitle: "AI Workshop",
    status: "Speaker",
    desc: "Conducted an interactive hands-on workshop introducing fellow college students to the fundamentals of Artificial Intelligence and real-world AI applications.",
    image: achieveWorkshop,
    position: "center top",
  },
  {
    title: "Unstop Campus Ambassador",
    shortTitle: "Ambassador",
    status: "Ambassador",
    desc: "Selected as Sri Eshwar's official Unstop Campus Ambassador, empowering students with competitive challenges, hackathons, and global career opportunities.",
    image: achieveCampus,
    position: "center top",
  },
  {
    title: "Tata Imagination Challenge",
    shortTitle: "Tata Challenge",
    status: "Mentor",
    desc: "Spearheaded student outreach and interactive orientation sessions, motivating students across departments to participate in the Tata Imagination Challenge on Unstop.",
    image: achieveUnstop,
    position: "20% center",
  },
  {
    title: "Unstop 150+ Milestone",
    shortTitle: "Unstop Gift",
    status: "Achiever",
    desc: "Mobilized 150+ student registrations from Sri Eshwar College, earning special recognition and an exclusive merchandise gift package from Unstop.",
    image: achieveUnstopGift,
    position: "center center",
  },
  {
    title: "Freshathon Hackathon",
    shortTitle: "Freshathon",
    status: "Runner",
    desc: "Built a Comprehensive Agricultural E-Commerce platform.",
    image: pic4,
    position: "center center",
  },
  {
    title: "Adya AI Hackathon",
    shortTitle: "Adya AI",
    status: "Runner",
    desc: "Built a Sustainable green website and won 3000 cash prize.",
    image: pic5,
    position: "center center",
  },
  {
    title: "Gen AI Hackathon",
    shortTitle: "Gen AI",
    status: "Top 10",
    desc: "Recognized among top 10 teams in a competitive field.",
    image: pic6,
    position: "center center",
  },
  {
    title: "48H Hacksprint",
    shortTitle: "48H Sprint",
    status: "Finalist",
    desc: "Intensive 48-hour development sprint at Karpagam.",
    image: pic7,
    position: "center center",
  },
  {
    title: "Wayfinder AI",
    shortTitle: "Wayfinder",
    status: "Innovator",
    desc: "Developed for AmirthaVidyapeedam's Hackathon.",
    image: pic8,
    position: "center center",
  },
];

export default function AchievementsSection() {
  const [achievementIndex, setAchievementIndex] = useState(0);
  const current = ACHIEVEMENT_DATA[achievementIndex];

  return (
    <section className="h-screen w-full snap-start relative flex items-center overflow-hidden bg-yellow-400 px-[6vw]">
      {/* Background Text Pattern */}
      <div className="absolute left-0 bottom-0 pointer-events-none opacity-5 select-none">
        <h1 className="text-[min(80vh,40vw)] font-black leading-none tracking-[-0.1em]">
          WIN
        </h1>
      </div>

      {/* Text Content - Left */}
      <div className="flex flex-col gap-[3vh] max-w-[50vw] z-10">
        {/* Header */}
        <div className="flex items-end leading-[0.8] select-none">
          <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em] text-black">
            A
          </h1>
          <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh] text-black">
            chievements
          </span>
          <span className="ml-4 mb-[2vh] px-3 py-1 bg-black text-yellow-400 font-mono text-xs font-bold uppercase rounded-md shadow-[2px_2px_0px_#000] hidden sm:inline-block">
            {ACHIEVEMENT_DATA.length} Milestones
          </span>
        </div>

        {/* Dynamic Achievement Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={achievementIndex}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="flex flex-col gap-4"
          >
            {/* Status Badge + Counter */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 2.2, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 14, stiffness: 350, delay: 0.05 }}
                className="relative inline-flex"
              >
                <div className="relative px-5 py-2.5 bg-black border-4 border-black">
                  <span className="text-[min(3.5vh,2.2vw)] font-black uppercase tracking-[0.15em] text-yellow-400 leading-none drop-shadow-[0_0_12px_rgba(250,204,21,0.4)]">
                    {current.status}
                  </span>
                  {/* Corner accents */}
                  <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-[3px] border-l-[3px] border-yellow-400" />
                  <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-[3px] border-r-[3px] border-yellow-400" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-[3px] border-l-[3px] border-yellow-400" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-[3px] border-r-[3px] border-yellow-400" />
                </div>
              </motion.div>

              <span className="font-mono text-xs font-bold text-black/60 border-2 border-black/30 px-3 py-1.5 rounded-lg bg-black/5">
                {String(achievementIndex + 1).padStart(2, "0")} / {String(ACHIEVEMENT_DATA.length).padStart(2, "0")}
              </span>
            </div>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              className="h-[3px] bg-black w-24 origin-left"
            />

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[min(3.6vh,2.2vw)] font-black uppercase tracking-tight leading-tight"
            >
              {current.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-[min(2.2vh,1.35vw)] font-semibold leading-relaxed text-black/85 max-w-xl"
            >
              {current.desc}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Achievement Selector Buttons */}
        <div className="flex items-center gap-2 mt-2 flex-wrap max-w-xl">
          {ACHIEVEMENT_DATA.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setAchievementIndex(idx)}
              className={`px-3 py-1.5 rounded-lg font-mono text-[11px] sm:text-xs font-bold uppercase transition-all duration-200 border-2 cursor-pointer ${
                achievementIndex === idx
                  ? "bg-black text-yellow-400 border-black shadow-[4px_4px_0px_#000] -translate-y-0.5"
                  : "bg-transparent text-black/70 border-black/30 hover:border-black hover:text-black hover:bg-black/5"
              }`}
            >
              {String(idx + 1).padStart(2, "0")} {item.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* Image Peel Effect - Right */}
      <div className="absolute right-[6vw] top-1/2 -translate-y-1/2 w-[min(58vh,34vw)] h-[min(72vh,42vw)] z-20">
        <ImagePeel 
          images={ACHIEVEMENT_DATA} 
          activeIndex={achievementIndex}
          onPeel={setAchievementIndex}
        />
        {/* Interaction Hint */}
        <div className="absolute bottom-[-5vh] left-1/2 -translate-x-1/2 flex items-center gap-2 text-black/60 select-none">
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-widest">Click Card to Peel</span>
        </div>
      </div>
    </section>
  );
}

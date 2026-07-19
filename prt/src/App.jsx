import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, 
  Bot, 
  BarChart3, 
  Globe, 
  Zap, 
  Wrench, 
  Cloud, 
  Rocket, 
  Layers
} from "lucide-react";
import pic from "./images/pic.png";
import pic3 from "./images/pic3.png";
import pic4 from "./achieve/pic4.jpeg";
import pic5 from "./achieve/pic5.jpeg";
import pic6 from "./achieve/pic6.jpeg";
import pic7 from "./achieve/pic7.jpeg";
import pic8 from "./achieve/pic8.jpeg";
import bill4food from "./projects/Bill4Food.png";
import bill4food1 from "./projects/Bill4Food1.png";
import trinetra1 from "./projects/trinetra1.png";
import survex from "./projects/Survex.png";
import survexVideo from "./projects/video.mp4";
import RotatingText from "./RotatingText";
import { HelloIntro } from "./HelloIntro";
import Stack from "./Stack";
import ImagePeel from "./ImagePeel";
import ProfilesSection from "./ProfilesSection";
import ResumeDrawer from "./ResumeDrawer";
import CardSwap, { Card } from "./CardSwap";
import certServicenow from "./certificates/Servicenow.png";
import certGuidewire from "./certificates/guidewire.png";
import certPowerBI from "./certificates/powerbi.png";
import Hobbies from "./Hobbies";

const ROLES = [
  "SURYAPRAKASH",
  "AI ENGINEER",
  "WEB DEVELOPER",
  "RAG SPECIALIST",
];

const SKILL_GROUPS = [
  {
    category: "AI & RAG",
    items: [
      { icon: <Brain size={48} />, title: "RAG Systems", desc: "Retrieval-Augmented Generation for context-aware AI." },
      { icon: <Bot size={48} />, title: "AI Agents", desc: "Autonomous multi-agent system development." },
      { icon: <BarChart3 size={48} />, title: "LLM Ops", desc: "Managing and scaling Large Language Models." }
    ]
  },
  {
    category: "Development",
    items: [
      { icon: <Globe size={48} />, title: "Web Dev", desc: "Modern, high-performance responsive applications." },
      { icon: <Zap size={48} />, title: "Full-Stack", desc: "End-to-end solution building from DB to UI." },
      { icon: <Wrench size={48} />, title: "API Design", desc: "Robust and scalable backend architecture." }
    ]
  },
  {
    category: "Cloud & Ops",
    items: [
      { icon: <Cloud size={48} />, title: "AWS Cloud", desc: "Leveraging Amazon Web Services for scalable infra." },
      { icon: <Rocket size={48} />, title: "Automation", desc: "Intelligent workflow and pipeline design." },
      { icon: <Layers size={48} />, title: "DevOps", desc: "Containerization and CI/CD best practices." }
    ]
  }
];

const ACHIEVEMENT_DATA = [
  {
    title: "Freshathon Hackathon",
    status: "Runner",
    desc: "Built a Comprehensive Agricultural E-Commerce platform.",
    image: pic4
  },
  {
    title: "Adya AI Hackathon",
    status: "Runner",
    desc: "Built a Sustainable green website and won 3000 cash prize.",
    image: pic5
  },
  {
    title: "Gen AI Hackathon",
    status: "Top 10",
    desc: "Recognized among top 10 teams in a competitive field.",
    image: pic6
  },
  {
    title: "48H Hacksprint",
    status: "Finalist",
    desc: "Intensive 48-hour development sprint at Karpagam.",
    image: pic7
  },
  {
    title: "Wayfinder AI",
    status: "Innovator",
    desc: "Developed for AmirthaVidyapeedam's Hackathon.",
    image: pic8
  }
];

const PROJECT_DATA = [
  {
    id: "bill4food",
    title: "Bill4Food",
    desc: "An online payment and billing platform designed specifically for Sri Eshwar students, enabling seamless food purchases and instant bill generation. The system simplifies cafeteria transactions by providing digital payments, real-time billing, and quick access to purchase history, reducing waiting time and improving the overall dining experience.",
    image: bill4food,
    tags: ["React", "Payment Integration", "Real-time Billing"]
  },
  {
    id: "trinetra",
    title: "Trinetra",
    desc: "An intelligent object and movement detection system developed for defense applications, capable of identifying suspicious activities in real time and forwarding instant alerts to authorized personnel. By leveraging computer vision and automated monitoring, Trinetra enhances surveillance capabilities, improves situational awareness, and supports rapid response in critical security environments.",
    image: trinetra1,
    tags: ["Computer Vision", "AI Monitoring", "Real-time Alerts"]
  },
  {
    id: "survex",
    title: "Survex",
    desc: "An intelligent AI assistant inspired by Jarvis, designed for natural, engaging conversations. Survex is built to be supportive, loyal, and personable—creating a comfortable interaction experience while assisting with queries, brainstorming, and everyday tasks.",
    image: survex,
    video: survexVideo,
    tags: ["AI Assistant", "LLM", "Natural Language"]
  }
];

const CERT_DATA = [
  {
    title: "ServiceNow CSA",
    issuer: "ServiceNow",
    year: "2025",
    color: "#81B5A1",
    image: certServicenow,
  },
  {
    title: "Guidewire",
    issuer: "Guidewire Software",
    year: "2025",
    color: "#F4A825",
    image: certGuidewire,
  },
  {
    title: "Power BI",
    issuer: "Microsoft",
    year: "2024",
    color: "#F2C811",
    image: certPowerBI,
  },
];


function SkillCard({ item, index }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const rotX = -(y / (box.height / 2)) * 12;
    const rotY = (x / (box.width / 2)) * 12;
    setTilt({ rotateX: rotX, rotateY: rotY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "800px",
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      whileHover={{ y: -6 }}
      className="bg-black text-yellow-400 p-6 rounded-3xl border-[3px] border-black hover:border-yellow-400 shadow-[8px_8px_0px_#000] flex flex-col justify-between h-[34vh] relative overflow-hidden group select-none transition-colors duration-300"
    >
      {/* Laser scan line overlay */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400/30 group-hover:animate-[scan_1.5s_ease-in-out_infinite] z-0" />
      
      <div className="flex flex-col gap-3 z-10" style={{ transform: "translateZ(20px)" }}>
        <div className="flex justify-between items-start">
          <div className="text-yellow-400 w-12 h-12 flex items-center justify-center border-2 border-yellow-400/20 rounded-2xl bg-yellow-400/5 group-hover:scale-105 transition-transform duration-300">
            {item.icon}
          </div>
          <span className="font-mono text-[9px] text-yellow-400/40 border border-yellow-400/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
            SKL-0{index + 1}
          </span>
        </div>
        
        <h4 className="text-lg font-black uppercase tracking-tight leading-tight mt-1">
          {item.title}
        </h4>
        <p className="text-[11px] font-semibold leading-relaxed opacity-75">
          {item.desc}
        </p>
      </div>

      {/* Segmented LED matrix loading bar */}
      <div className="flex flex-col gap-1 mt-auto z-10" style={{ transform: "translateZ(10px)" }}>
        <div className="flex gap-1.5 mt-1 w-full">
          {Array.from({ length: 8 }).map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ backgroundColor: "rgba(250,204,21,0.06)" }}
              animate={{ backgroundColor: "#facc15" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1 + idx * 0.04
              }}
              className="h-2 flex-1 rounded-[1px]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntro] = useState(() => {
    const lastIntroTime = localStorage.getItem("lastIntroTime");
    const now = Date.now();
    const cooldown = 1 * 60 * 1000; // 1 minute cooldown
    const shouldShow = !lastIntroTime || now - parseInt(lastIntroTime) > cooldown;
    if (shouldShow) {
      localStorage.setItem("lastIntroTime", now.toString());
    }
    return shouldShow;
  });
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [bioTilt, setBioTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  return (
    <>
      {showIntro && <HelloIntro />}
      <ResumeDrawer />
      <main className="h-screen overflow-y-auto snap-y snap-mandatory bg-yellow-400 select-none scroll-smooth text-black">
        {/* Hero Section */}
      <section className="h-screen w-full snap-start relative flex items-center overflow-hidden">
        {/* Text Container - Left Aligned with fixed width constraint */}
        <div className="flex items-end whitespace-nowrap px-[4vw] z-10 w-full max-w-[65vw]">
          <div className="relative flex items-end">
            {/* Dynamic Big Initial */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ y: "20%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-20%", opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="text-[min(80vh,40vw)] font-black leading-[0.8] tracking-[-0.08em]"
                >
                  {ROLES[currentIndex][0]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Rotating Rest of the Text */}
            <div className="flex flex-col ml-[3vw] mb-[6vh] flex-grow min-w-0">
              <RotatingText
                texts={ROLES.map((role) => role.slice(1))}
                onNext={setCurrentIndex}
                mainClassName="text-[min(10vh,6vw)] font-bold overflow-visible whitespace-nowrap"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-visible pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
                splitBy="characters"
                auto
                loop
              />
              <div className="flex gap-4 mt-6">
                <span className="px-3 py-1.5 bg-black text-yellow-400 rounded text-[min(2.2vh,1.8vw)] font-mono tracking-widest">
                  PORTFOLIO
                </span>
                <span className="px-3 py-1.5 bg-black text-yellow-400 rounded text-[min(2.2vh,1.8vw)] font-mono tracking-widest">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Portrait - Fixed to right edge, independent of text width */}
        <div className="absolute right-0 bottom-0 h-full flex items-end pointer-events-none pb-[4vh]">
          <img
            src={pic}
            alt="Suryaprakash"
            className="h-[85vh] max-w-[45vw] object-contain object-right-bottom"
          />
        </div>
      </section>
      
      <section className="h-screen w-full snap-start flex items-center justify-between overflow-hidden bg-yellow-400 px-[6vw]">
        {/* Bio Content - Left */}
        <div className="flex flex-col gap-[4vh] max-w-[50vw] z-10">
          {/* Bio Name/Title */}
          <div className="flex items-end leading-[0.8]">
            <h1 className="text-[min(40vh,20vw)] font-black tracking-[-0.08em]">
              B
            </h1>
            <span className="text-[min(10vh,5vw)] font-bold ml-[1.5vw] mb-[2.5vh]">
              io
            </span>
          </div>

          <p className="text-[min(3.2vh,2.2vw)] leading-relaxed font-black text-pretty">
            Hello Developers! I'm{" "}
            <span className="underline decoration-4 underline-offset-4">
              Suryaprakash
            </span>
            , an aspiring AI Engineer passionate about building
            Retrieval-Augmented Generation (RAG) systems, AI agent pipelines,
            and modern web solutions that solve real-world problems. I enjoy
            combining artificial intelligence with intuitive design to create
            impactful and scalable applications.
          </p>
        </div>

        {/* Bio Image - Right */}
        <div className="h-[80vh] flex items-end">
          <img
            src={pic3}
            alt="Bio Image"
            className="h-full object-contain rounded-none border-none shadow-none"
          />
        </div>
      </section>

       {/* Education Section */}
       <section className="h-screen w-full snap-start relative flex items-center overflow-hidden bg-yellow-400 px-[6vw]">
         {/* Education Text Container - Left Aligned */}
         <div className="flex flex-col gap-[4vh] max-w-[55vw] z-10">
           {/* Education Name/Title */}
           <div className="flex items-end leading-[0.8]">
             <h1 className="text-[min(40vh,20vw)] font-black tracking-[-0.08em]">
               E
             </h1>
             <span className="text-[min(10vh,5vw)] font-bold ml-[1.5vw] mb-[2.5vh]">
               ducation
             </span>
           </div>

           {/* Education Content */}
           <div className="flex flex-col gap-[6vh]">
             <div className="flex flex-col gap-2">
               <h3 className="text-[min(3.5vh,2.2vw)] font-black tracking-tight">SCHOOL</h3>
               <p className="text-[min(2.8vh,1.8vw)] leading-relaxed font-semibold">
                 Srinivasa Vidhyalaya Matric Higher Secondary School
                 <br />
                 <span className="text-black/60 font-mono">2021 - 2024</span>
               </p>
             </div>

             <div className="flex flex-col gap-2">
               <h3 className="text-[min(3.5vh,2.2vw)] font-black tracking-tight">COLLEGE</h3>
               <p className="text-[min(2.8vh,1.8vw)] leading-relaxed font-semibold">
                 Sri Eshwar College of Engineering
                 <br />
                 <span className="text-black/60 font-mono">2024 - 2028</span>
               </p>
             </div>
           </div>
         </div>

         {/* Education Image Placeholder - Fixed to right edge (can be replaced with a specific image later) */}
         <div className="absolute right-0 bottom-0 h-full flex items-end pointer-events-none opacity-20">
            <h1 className="text-[min(90vh,50vw)] font-black leading-none tracking-[-0.1em] select-none">
              EDU
            </h1>
          </div>
        </section>

        {/* Skills Section */}
        <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden bg-yellow-400 px-[6vw]">
          
          {/* Background Watermark */}
          <div className="absolute right-0 bottom-0 h-full flex items-end pointer-events-none opacity-5 z-0">
            <h1 className="text-[min(90vh,40vw)] font-black leading-none tracking-[-0.1em] select-none text-black">
              SKILLS
            </h1>
          </div>

          {/* Section Title */}
          <div className="flex items-end leading-[0.8] mb-[6vh] z-10 select-none">
            <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em] text-black">
              S
            </h1>
            <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh] text-black">
              kills
            </span>
          </div>

          {/* Console Grid */}
          <div className="w-full h-[60vh] flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
            
            {/* Left Column: Category Selector Buttons */}
            <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[35%]">
              {SKILL_GROUPS.map((group, idx) => {
                const isActive = activeSkillCategory === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSkillCategory(idx)}
                    className={`group relative w-full border-4 border-black p-5 rounded-2xl text-left font-black transition-all duration-300 ${
                      isActive 
                        ? "bg-black text-yellow-400 translate-y-[-4px] shadow-[8px_8px_0px_#000]"
                        : "bg-transparent text-black hover:bg-black/5 hover:translate-y-[-2px]"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="font-mono text-xs opacity-50 mb-1">CATEGORY 0{idx + 1}</span>
                        <span className="text-xl sm:text-2xl uppercase tracking-tight">{group.category}</span>
                      </div>
                      <span className={`text-xl font-mono transition-transform duration-300 ${isActive ? "translate-x-2" : "group-hover:translate-x-1"}`}>
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Skills Cards Grid */}
            <div className="w-full lg:w-[60%] h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
                >
                  {SKILL_GROUPS[activeSkillCategory].items.map((item, i) => (
                    <SkillCard key={i} item={item} index={i} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="h-screen w-full snap-start relative flex items-center overflow-hidden bg-yellow-400 px-[6vw]">
          {/* Text Content - Left */}
          <div className="flex flex-col gap-[4vh] max-w-[50vw] z-10">
            {/* Header */}
            <div className="flex items-end leading-[0.8]">
              <h1 className="text-[min(40vh,15vw)] font-black tracking-[-0.08em]">
                A
              </h1>
              <span className="text-[min(10vh,5vw)] font-bold ml-[1.5vw] mb-[2.5vh]">
                chievements
              </span>
            </div>

            {/* Dynamic Achievement Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={achievementIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="flex flex-col gap-6"
              >
                {/* Status Badge — Large Stamp Style */}
                <div className="flex items-center gap-5">
                  <motion.div
                    initial={{ scale: 2.8, rotate: -15, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 350, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="relative px-6 py-3 bg-black border-4 border-black">
                      <span className="text-[min(5vh,3vw)] font-black uppercase tracking-[0.15em] text-yellow-400 leading-none drop-shadow-[0_0_12px_rgba(250,204,21,0.4)]">
                        {ACHIEVEMENT_DATA[achievementIndex].status}
                      </span>
                      {/* Corner accents */}
                      <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400" />
                      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400" />
                      <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400" />
                      <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400" />
                    </div>
                  </motion.div>


                </div>

                {/* Decorative Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="h-[3px] bg-black w-24 origin-left"
                />

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-[min(4vh,2.5vw)] font-black uppercase tracking-tight leading-tight"
                >
                  {ACHIEVEMENT_DATA[achievementIndex].title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-[min(2.5vh,1.5vw)] font-semibold leading-relaxed opacity-80 max-w-xl"
                >
                  {ACHIEVEMENT_DATA[achievementIndex].desc}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Peel Effect - Right */}
          <div className="absolute right-[6vw] top-1/2 -translate-y-1/2 w-[min(60vh,35vw)] h-[min(75vh,45vw)] z-20">
            <ImagePeel 
              images={ACHIEVEMENT_DATA.map(a => a.image)} 
              onPeel={setAchievementIndex}
            />
            {/* Interaction Hint */}
            <div className="absolute bottom-[-6vh] left-1/2 -translate-x-1/2 flex items-center gap-2 text-black/60">
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <span className="text-sm font-bold uppercase tracking-widest">Click to Peel</span>
            </div>
          </div>

          {/* Background Text Pattern */}
          <div className="absolute left-0 bottom-0 pointer-events-none opacity-5">
            <h1 className="text-[min(80vh,40vw)] font-black leading-none tracking-[-0.1em] select-none">
              WIN
            </h1>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="h-screen w-full snap-start relative flex overflow-hidden bg-black">

          {/* Left Sidebar — narrow, title + index */}
          <div className="flex flex-col justify-center gap-[3vh] px-[5vw] w-[30vw] flex-shrink-0 z-10 border-r border-yellow-400/10">

            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-yellow-400" />
              <span className="text-yellow-400/50 font-mono text-xs uppercase tracking-[0.25em]">Verified Skills</span>
            </div>

            {/* Title */}
            <div className="flex items-end leading-[0.8]">
              <h1 className="text-[min(22vh,10vw)] font-black tracking-[-0.08em] text-yellow-400">C</h1>
              <span className="text-[min(6vh,3.2vw)] font-bold ml-[0.8vw] mb-[1.5vh] text-yellow-400">ertificates</span>
            </div>

            {/* Numbered cert index */}
            <div className="flex flex-col gap-5 mt-2">
              {CERT_DATA.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 25 }}
                  className="flex items-start gap-3 group"
                >
                  <span className="text-yellow-400/30 font-mono text-xs mt-1 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cert.color }} />
                      <span className="text-white font-black text-[min(2vh,1.1vw)] uppercase tracking-tight">
                        {cert.title}
                      </span>
                    </div>
                    <span className="text-white/35 font-mono text-[min(1.3vh,0.75vw)] uppercase tracking-widest mt-0.5 block">
                      {cert.issuer}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More coming */}
            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400/60" />
              </span>
              <span className="text-yellow-400/30 font-mono text-xs uppercase tracking-widest">More coming soon</span>
            </div>
          </div>

          {/* Right — Large centered CardSwap */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden">

            {/* Subtle radial glow behind stack */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[50vw] h-[50vw] rounded-full bg-yellow-400/5 blur-[80px]" />
            </div>



            {/* The card stack — centered via containerClassName */}
            {/* We give a relative host div sized to give breathing room around the stack */}
            <div className="relative" style={{ width: 'min(58vh, 38vw)', height: 'min(44vh, 29vw)' }}>
              <CardSwap
                width="min(58vh, 38vw)"
                height="min(44vh, 29vw)"
                cardDistance={52}
                verticalDistance={58}
                delay={3800}
                pauseOnHover={false}
                skewAmount={4}
                easing="elastic"
                containerClassName="absolute bottom-0 right-0 translate-x-[8%] translate-y-[12%] overflow-visible"
              >
                {CERT_DATA.map((cert, i) => (
                  <Card key={i} customClass="overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)] border-2 border-yellow-400/15">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    {/* Overlay gradient + label */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                      <p className="text-yellow-400 font-black text-[min(2.2vh,1.4vw)] uppercase tracking-tight leading-none">{cert.title}</p>
                      <p className="text-white/50 font-mono text-[min(1.4vh,0.85vw)] uppercase tracking-widest mt-1">{cert.issuer}</p>
                    </div>

                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>

          {/* Background C watermark */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.025] leading-none select-none">
            <span className="text-[min(90vh,50vw)] font-black tracking-[-0.1em] text-yellow-400">C</span>
          </div>
        </section>

        {/* Profiles Section */}
        <ProfilesSection />

        {/* Projects Section */}
        <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden bg-black">
          
          {/* Full-Section Video Background with high visibility */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none bg-black">
            <video
              src={survexVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-100"
            />
          </div>

          {/* Section Header */}
          <div className="absolute top-[8vh] left-[6vw] z-20 flex items-end leading-[0.8] text-white select-none pointer-events-none">
            <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em] text-white">
              P
            </h1>
            <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh] text-white">
              rojects
            </span>
          </div>

          {/* Floating AI HUD Icon Overlay (Hiding Gemini Logo in bottom-right) */}
          <div className="absolute bottom-[10%] right-[8.5%] z-30 flex items-center justify-center w-14 h-14 bg-black/85 border-2 border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-white select-none pointer-events-none transition-all duration-300">
            <Bot className="w-6 h-6 text-white animate-pulse" />
          </div>
        </section>

        {/* Flagship Impact Section — Bill4Food */}
        <section className="h-screen w-full snap-start relative flex items-center overflow-hidden bg-yellow-400 px-[6vw] text-black">

          {/* Background watermark */}
          <div className="absolute right-[-4vw] bottom-0 pointer-events-none opacity-[0.05] leading-none select-none">
            <span className="text-[min(90vh,55vw)] font-black tracking-[-0.1em] text-black">₹</span>
          </div>

          {/* Left Content */}
          <div className="flex flex-col gap-[4vh] max-w-[48vw] z-10">

            {/* Section Label */}
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-10 bg-black" />
              <span className="text-black/60 font-mono text-[min(1.8vh,1.1vw)] uppercase tracking-[0.25em]">Flagship Project</span>
            </div>

            {/* Title */}
            <div className="flex items-end leading-[0.8]">
              <h1 className="text-[min(30vh,14vw)] font-black tracking-[-0.08em] text-black">B</h1>
              <span className="text-[min(8vh,4.5vw)] font-bold ml-[1vw] mb-[2vh] text-black">ill4Food</span>
            </div>

            {/* Revenue Stamp Badge */}
            <motion.div
              initial={{ scale: 2.2, rotate: 12, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", damping: 12, stiffness: 300 }}
              className="relative inline-flex self-start"
            >
              <div className="relative px-5 py-2.5 border-4 border-black">
                <span className="text-[min(3vh,1.8vw)] font-black uppercase tracking-[0.2em] text-black leading-none">
                  Revenue Generating
                </span>
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-[3px] border-l-[3px] border-black/50" />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-[3px] border-r-[3px] border-black/50" />
                <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-[3px] border-l-[3px] border-black/50" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-[3px] border-r-[3px] border-black/50" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2 }}
              className="text-[min(2.4vh,1.5vw)] text-black/85 font-semibold leading-relaxed max-w-lg"
            >
              A live payment & billing platform built for Sri Eshwar College students.
              Real-time cafeteria transactions — no queues, no cash, no delays.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "Live & Deployed", label: "Status" },
                { value: "Real‑time", label: "Billing" },
                { value: "Digital", label: "Payments" },
              ].map((stat, i) => (
                <div key={i} className="border border-black/20 rounded-xl p-4 flex flex-col gap-1 bg-black/5">
                  <span className="text-[min(2.8vh,1.7vw)] font-black text-black leading-none">{stat.value}</span>
                  <span className="text-[min(1.6vh,0.9vw)] font-mono text-black/60 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.4 }}
              className="flex gap-2 flex-wrap"
            >
              {["React", "Payment Integration", "Real-time Billing", "Sri Eshwar"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-black/5 border border-black/25 text-black text-[min(1.4vh,0.85vw)] font-black rounded-full uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Dual Screenshots */}
          <div className="absolute right-[4vw] top-1/2 -translate-y-1/2 w-[44vw] h-[80vh] z-10 pointer-events-none">
            {/* Back screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 6 }}
              whileInView={{ opacity: 1, x: 0, rotate: 5 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.15 }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-black/10"
              style={{ transformOrigin: "center center" }}
            >
              <img src={bill4food1} alt="Bill4Food App" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>

            {/* Front screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.3 }}
              className="absolute inset-4 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] border-2 border-black/25"
              style={{ transformOrigin: "center center" }}
            >
              <img src={bill4food} alt="Bill4Food Dashboard" className="w-full h-full object-cover" />
              {/* Glow edge */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10" />
            </motion.div>
          </div>

          {/* Bottom Ticker */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-black/20 py-3 z-20">
            <div
              className="flex gap-12 whitespace-nowrap text-black/45 font-mono text-[min(1.6vh,1vw)] uppercase tracking-widest"
              style={{ animation: "marquee 18s linear infinite" }}
            >
              {Array(4).fill(["Live & Deployed", "Revenue Generating", "Sri Eshwar College", "Digital Cafeteria", "Real-time Billing", "Zero Cash", "Instant Receipts"]).flat().map((item, i) => (
                <span key={i}>{item} &nbsp;·</span>
              ))}
            </div>
          </div>
        </section>
        {/* Hobbies Section */}
        <Hobbies />

        {/* CTA / Connect Section */}
        <section className="h-screen w-full snap-start relative flex flex-col overflow-hidden bg-yellow-400 text-black">

          {/* Background CONNECT watermark */}
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
            <span className="text-[min(55vh,35vw)] font-black tracking-[-0.1em] text-black/[0.04] select-none leading-none pr-[2vw]">
              CONNECT
            </span>
          </div>

          {/* Main content — grows to fill, split layout */}
          <div className="flex-1 flex items-center px-[6vw] gap-[6vw] z-10 min-h-0">

            {/* Left — Title + tagline + status */}
            <div className="flex flex-col gap-[3vh] flex-shrink-0 max-w-[46vw]">

              {/* Section label */}
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-10 bg-black" />
                <span className="font-mono text-[min(1.6vh,1vw)] uppercase tracking-[0.25em] text-black/60">Get In Touch</span>
              </div>

              {/* Big letter title */}
              <div className="flex items-end leading-[0.8]">
                <h1 className="text-[min(28vh,14vw)] font-black tracking-[-0.08em]">C</h1>
                <span className="text-[min(7.5vh,4.2vw)] font-bold ml-[1vw] mb-[2vh]">onnect</span>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", stiffness: 280, damping: 25 }}
                className="text-[min(3.2vh,2vw)] font-black leading-tight tracking-tight uppercase max-w-lg"
              >
                Let's build something<br />
                <span className="text-black/40">remarkable together.</span>
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[min(2.2vh,1.4vw)] font-semibold leading-relaxed text-black/70 max-w-md"
              >
                I'm an AI Engineer & Web Developer based in Coimbatore, passionate about RAG systems, AI agents, and scalable full-stack solutions. Always open to new ideas.
              </motion.p>

              {/* Open to work status */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 22 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-black rounded-full self-start"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-yellow-400 font-black text-[min(1.8vh,1.1vw)] uppercase tracking-widest">Open to Opportunities</span>
              </motion.div>
            </div>

            {/* Right — Contact cards */}
            <div className="flex-1 flex flex-col gap-[2.5vh]">

              {/* Email */}
              <motion.a
                href="mailto:suryapr.exe14@gmail.com"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 24 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group flex items-center gap-6 bg-black rounded-2xl px-7 py-6 border-2 border-transparent hover:border-yellow-400/40 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-yellow-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-yellow-400/50 font-mono text-[min(1.4vh,0.85vw)] uppercase tracking-widest mb-1">Email</p>
                  <p className="text-yellow-400 font-black text-[min(2.4vh,1.5vw)] truncate group-hover:text-white transition-colors">suryapr.exe14@gmail.com</p>
                </div>
                <svg className="w-6 h-6 text-yellow-400/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Surya-ux-max"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 24 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group flex items-center gap-6 bg-black rounded-2xl px-7 py-6 border-2 border-transparent hover:border-yellow-400/40 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-yellow-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-yellow-400/50 font-mono text-[min(1.4vh,0.85vw)] uppercase tracking-widest mb-1">GitHub</p>
                  <p className="text-yellow-400 font-black text-[min(2.4vh,1.5vw)] group-hover:text-white transition-colors">@Surya-ux-max</p>
                </div>
                <svg className="w-6 h-6 text-yellow-400/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/suryaprakash-s-20269631a/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 24 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group flex items-center gap-6 bg-black rounded-2xl px-7 py-6 border-2 border-transparent hover:border-yellow-400/40 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0a66c2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-yellow-400/50 font-mono text-[min(1.4vh,0.85vw)] uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="text-yellow-400 font-black text-[min(2.4vh,1.5vw)] group-hover:text-white transition-colors">Suryaprakash S</p>
                </div>
                <svg className="w-6 h-6 text-yellow-400/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Bottom — Marquee + Footer */}
          <div className="flex-shrink-0 z-10">
            {/* Marquee */}
            <div className="w-full overflow-hidden border-t-2 border-black/10 py-3">
              <div
                className="flex gap-12 whitespace-nowrap font-mono text-[min(1.5vh,0.9vw)] uppercase tracking-[0.2em] text-black/30"
                style={{ animation: "marquee 22s linear infinite" }}
              >
                {Array(6).fill(["AI Engineer", "RAG Specialist", "Web Developer", "Full-Stack", "LLM Ops", "Open to Work", "Coimbatore", "Sri Eshwar"]).flat().map((item, i) => (
                  <span key={i}>{item}&nbsp;&nbsp;·</span>
                ))}
              </div>
            </div>

            {/* Footer strip */}
            <div className="w-full border-t border-black/10 px-[6vw] py-4 flex items-center justify-between bg-black/5">
              <span className="font-black text-[min(1.8vh,1.1vw)] uppercase tracking-widest">Suryaprakash S</span>
              <span className="font-mono text-[min(1.4vh,0.85vw)] text-black/50 uppercase tracking-widest">© 2026 · Built with React &amp; Motion</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[min(1.4vh,0.85vw)] text-black/50 uppercase tracking-widest">Designed &amp; Developed by</span>
                <span className="font-black text-[min(1.6vh,1vw)] uppercase tracking-widest">Surya</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

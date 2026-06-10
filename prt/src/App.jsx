import { useState, useEffect } from "react";
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
  Layers,
  Car,
  Bike,
  Mountain,
  UtensilsCrossed,
  Gamepad2,
  Globe2
} from "lucide-react";
import pic from "./images/pic.png";
import pic3 from "./images/pic3.png";
import pic4 from "./achieve/pic4.jpeg";
import pic5 from "./achieve/pic5.jpeg";
import pic6 from "./achieve/pic6.jpeg";
import pic7 from "./achieve/pic7.jpeg";
import pic8 from "./achieve/pic8.jpeg";
import bill4food from "./projects/Bill4Food.png";
import trinetra1 from "./projects/trinetra1.png";
import RotatingText from "./RotatingText";
import { HelloIntro } from "./HelloIntro";
import Stack from "./Stack";
import ImagePeel from "./ImagePeel";

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
  }
];

const HOBBIES_DATA = [
  { icon: <Car size={48} />, title: "Driving Cars", color: "bg-yellow-400 text-black" },
  { icon: <Bike size={48} />, title: "Bike Riding", color: "bg-black text-yellow-400" },
  { icon: <Mountain size={48} />, title: "Trekking", color: "bg-yellow-400 text-black" },
  { icon: <UtensilsCrossed size={48} />, title: "Cooking", color: "bg-black text-yellow-400" },
  { icon: <Gamepad2 size={48} />, title: "Video Games", color: "bg-yellow-400 text-black" },
  { icon: <Globe2 size={48} />, title: "Geopolitics", color: "bg-black text-yellow-400" }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [achievementIndex, setAchievementIndex] = useState(0);

  useEffect(() => {
    const lastIntroTime = localStorage.getItem("lastIntroTime");
    const now = Date.now();
    const cooldown = 1 * 60 * 1000; // 1 minute cooldown

    if (!lastIntroTime || now - parseInt(lastIntroTime) > cooldown) {
      setShowIntro(true);
      localStorage.setItem("lastIntroTime", now.toString());
    }
  }, []);

  return (
    <>
      {showIntro && <HelloIntro />}
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
      {/* Bio Section */}
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
          {/* Header Area */}
          <div className="flex items-end leading-[0.8] mb-[6vh] z-10">
            <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em]">
              S
            </h1>
            <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh]">
              kills & Planner
            </span>
          </div>

          {/* Planner Grid of Stacks */}
          <div className="grid grid-cols-3 gap-[4vw] w-full z-10">
            {SKILL_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx} className="flex flex-col gap-[2vh]">
                <h3 className="text-[min(2.5vh,1.5vw)] font-black uppercase tracking-widest opacity-60">
                  {group.category}
                </h3>
                <div className="w-full h-[min(35vh,25vw)] pointer-events-auto">
                  <Stack
                    randomRotation={true}
                    sensitivity={200}
                    sendToBackOnClick={true}
                    cards={group.items.map((item, i) => (
                      <div
                        key={i}
                        className="w-full h-full bg-black text-yellow-400 p-[3vh] flex flex-col justify-center gap-[1.5vh] rounded-2xl border-2 border-yellow-400/20"
                      >
                        <div className="text-yellow-400">{item.icon}</div>
                        <h4 className="text-[min(2.5vh,1.6vw)] font-black uppercase tracking-tight leading-none">
                          {item.title}
                        </h4>
                        <p className="text-[min(1.6vh,1vw)] font-medium leading-tight opacity-80">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                    autoplay={true}
                    autoplayDelay={3000 + groupIdx * 500}
                    pauseOnHover={true}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Background Text Pattern (matching EDU) */}
          <div className="absolute right-0 bottom-0 h-full flex items-end pointer-events-none opacity-5">
            <h1 className="text-[min(90vh,40vw)] font-black leading-none tracking-[-0.1em] select-none">
              SKILLS
            </h1>
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-black text-yellow-400 font-black rounded uppercase text-sm tracking-widest">
                    {ACHIEVEMENT_DATA[achievementIndex].status}
                  </span>
                </div>
                <h3 className="text-[min(4vh,2.5vw)] font-black uppercase tracking-tight leading-tight">
                  {ACHIEVEMENT_DATA[achievementIndex].title}
                </h3>
                <p className="text-[min(2.5vh,1.5vw)] font-semibold leading-relaxed opacity-80 max-w-xl">
                  {ACHIEVEMENT_DATA[achievementIndex].desc}
                </p>
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

        {/* Projects Section */}
        <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden bg-yellow-400 px-[6vw]">
          {/* Header */}
          <div className="flex items-end leading-[0.8] mb-[6vh] z-10">
            <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em]">
              P
            </h1>
            <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh]">
              rojects
            </span>
          </div>

          {/* Project Split Panels */}
          <div className="flex h-[60vh] gap-4 z-10">
            {PROJECT_DATA.map((project, i) => (
              <motion.div
                key={project.id}
                className="relative group flex-grow overflow-hidden rounded-3xl bg-black transition-all duration-700 ease-in-out hover:flex-[3]"
                initial={{ flex: 1 }}
                whileHover={{ flex: 3 }}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-[4vh] flex flex-col justify-end">
                  <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                    <h3 className="text-[min(5vh,3vw)] font-black text-yellow-400 uppercase tracking-tighter mb-4">
                      {project.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-yellow-400 text-black text-[min(1.4vh,0.8vw)] font-black rounded-full uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description - only visible on hover */}
                    <p className="text-white text-[min(2.2vh,1.3vw)] font-medium leading-relaxed max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Background Text Pattern */}
          <div className="absolute right-0 top-0 pointer-events-none opacity-5">
            <h1 className="text-[min(90vh,40vw)] font-black leading-none tracking-[-0.1em] select-none transform rotate-180">
              BUILD
            </h1>
          </div>
          
          {/* Interaction Hint */}
          <div className="absolute bottom-[6vh] left-1/2 -translate-x-1/2 flex items-center gap-2 text-black/60 z-20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6.314 5.314l.707.707M16.979 5.314l-.707.707M12 19l-.01.01M6.314 18.686l.707-.707M16.979 18.686l-.707-.707M12 3v.01" />
            </svg>
            <span className="text-sm font-bold uppercase tracking-widest">Hover to Explore</span>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-yellow-400 px-[6vw]">
          {/* Header */}
          <div className="absolute top-[8vh] left-[6vw] z-20 flex items-end leading-[0.8]">
            <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em]">
              H
            </h1>
            <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh]">
              obbies
            </span>
          </div>

          {/* Interactive Hobby Grid */}
          <div className="relative w-full h-[60vh] flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full max-w-[800px]">
              {HOBBIES_DATA.map((hobby, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.15, rotate: 5, y: -10 }}
                  className={`aspect-square rounded-3xl flex flex-col items-center justify-center gap-4 shadow-2xl cursor-pointer border-4 border-black ${hobby.color}`}
                >
                  {hobby.icon}
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {hobby.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Text Pattern */}
          <div className="absolute left-0 bottom-0 pointer-events-none opacity-5">
            <h1 className="text-[min(80vh,40vw)] font-black leading-none tracking-[-0.1em] select-none">
              LIVE
            </h1>
          </div>
        </section>

        {/* CTA / Connect Section */}
        <section className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-black text-yellow-400">
          {/* Background Text Pattern */}
          <div className="absolute left-0 top-0 pointer-events-none opacity-5">
            <h1 className="text-[min(90vh,40vw)] font-black leading-none tracking-[-0.1em] select-none">
              CONNECT
            </h1>
          </div>

          {/* Header */}
          <div className="absolute top-[8vh] left-[6vw] z-20 flex items-end leading-[0.8] text-yellow-400">
            <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em]">
              L
            </h1>
            <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh]">
              et's Connect
            </span>
          </div>

          {/* MacBook Mockup */}
          <div className="relative z-10 w-[min(80vw,1000px)]">
            {/* MacBook Body */}
            <div className="bg-zinc-900 rounded-t-3xl p-4 shadow-2xl">
              {/* Camera Notch */}
              <div className="w-full h-4 flex justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
              
              {/* Screen */}
              <div className="bg-yellow-400 rounded-2xl p-8 flex flex-col items-center justify-center gap-8 min-h-[50vh]">
                {/* Profile Header */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-yellow-400 text-4xl font-black">
                    S
                  </div>
                  <h2 className="text-3xl font-black text-black uppercase tracking-tight">
                    Suryaprakash S
                  </h2>
                  <p className="text-black/70 font-bold text-lg">
                    AI Engineer • Web Developer
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6 w-full max-w-md">
                  <a
                    href="https://github.com/Surya-ux-max"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-black text-yellow-400 py-4 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-3"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/suryaprakash-s-20269631a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-black text-yellow-400 py-4 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-3"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>

                {/* Note */}
                <p className="text-black/80 font-bold text-center">
                  Preferred contact method: LinkedIn
                </p>
              </div>
            </div>

            {/* MacBook Base */}
            <div className="bg-zinc-800 h-4 rounded-b-lg mx-auto w-[60%]" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
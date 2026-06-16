# Portfolio Context - Suryaprakash's Portfolio

## 1. README.md
```markdown
# 🌟 Suryaprakash's Portfolio

A modern, interactive portfolio showcasing skills, achievements, and projects with a bold yellow-and-black design aesthetic.

## 🚀 Features

- **Interactive Sections**: Hover, click, and peel effects for engagement
- **Smooth Animations**: Physics-based transitions with motion/react
- **Responsive Design**: Works perfectly on all screen sizes
- **Snap Scrolling**: Clean, full-page transitions
- **Hello Intro**: Multilingual greeting with local storage cooldown
- **Profiles Section**: Connect via various platforms
- **GitHub-Style Connect Section**: Interactive contact page with contact info
- **Updated Projects**: Added Survex AI Assistant project

## 📦 Tech Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS 4**
- **motion/react**
- **lucide-react**

## 🛠️ Getting Started

### Installation

```bash
cd prt
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## 📚 Documentation

See [documentation.md](./documentation.md) for detailed architecture and customization guide.

## 👤 Author

**Suryaprakash** - AI Engineer & Web Developer
- GitHub: [Surya-ux-max](https://github.com/Surya-ux-max)
- LinkedIn: [Suryaprakash S](https://www.linkedin.com/in/suryaprakash-s-20269631a/)
```

---

## 2. documentation.md
```markdown
# Portfolio Documentation

## Project Overview
This is a modern, interactive portfolio built for Suryaprakash, showcasing skills, achievements, projects, and hobbies with a unique yellow-and-black design aesthetic.

## Technology Stack

### Core Frameworks
- **React 19**: Frontend library
- **Vite 8**: Build tool and dev server
- **Tailwind CSS 4**: Utility-first styling

### Key Libraries
- **motion/react**: Smooth animations and transitions
- **lucide-react**: Modern, consistent icons
- **clsx + tailwind-merge**: Class name composition

## Architecture

### Component Structure
```
prt/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── images/           # Hero and Bio images
│   ├── achieve/          # Achievement photos
│   ├── projects/         # Project screenshots
│   ├── App.jsx           # Main app + sections
│   ├── HelloIntro.jsx    # Opening greeting animation
│   ├── ImagePeel.jsx     # Interactive peel effect for Achievements
│   ├── ProfilesSection.jsx # Profiles section component
│   ├── RotatingText.jsx  # Animated text rotation
│   ├── Stack.jsx         # 3D card stack component
│   ├── index.css         # Global styles
│   └── main.jsx          # App entry point
├── index.html
├── vite.config.js
└── package.json
```

### App Sections (in order)
1. **HelloIntro**: Multilingual greeting animation with cooldown
2. **Hero**: Dynamic initial + rotating roles
3. **Bio**: Personal introduction with image
4. **Education**: School and college info
5. **Skills**: Interactive planner grid with 3D stacks
6. **Achievements**: Image peel effect with dynamic text
7. **Profiles**: Connect via various platforms
8. **Projects**: Hover-expanding split panels
9. **Hobbies**: Bouncing grid of hobby cards
10. **CTA**: GitHub-style connect section with contact info

## Key Components

### ProfilesSection.jsx
- Interactive cards for connecting via various platforms
- Hover effects with scaling
- Grid layout responsive to screen size

### HelloIntro.jsx
- Multi-language rotating greetings
- LocalStorage cooldown to prevent repeated display
- Smooth fade-out exit animation

### RotatingText.jsx
- Character-level staggered animations
- Configurable timing, easing, and direction
- Built with motion/react

### Stack.jsx
- 3D card stack with physics-based animations
- Autoplay and hover pause support
- Click to send card to back
- Responsive and configurable

### ImagePeel.jsx
- Interactive peel effect with 3D rotation
- Callback on peel for state sync
- Simple, clean API

## Development Guide

### Installation
```bash
cd prt
npm install
```

### Running Dev Server
```bash
npm run dev
```
Runs on http://localhost:5173/ (or next available port)

### Building for Production
```bash
npm run build
```
Outputs to `dist/` directory

### Linting
```bash
npm run lint
```

## Design Principles

### Color Scheme
- Primary: Bright yellow (`bg-yellow-400`)
- Secondary: Solid black (`bg-black`)
- High contrast for accessibility and impact

### Typography
- Bold, heavy weights (`font-black`) for headings
- Consistent uppercase styling
- Large, impactful initial letters

### Animations
- Spring physics for natural motion
- Smooth transitions (300-700ms)
- Deliberate, meaningful interactions

## Customization Guide

### Updating Content
All content is in `App.jsx`:
- `ROLES`: Hero rotating text
- `SKILL_GROUPS`: Skill planner categories and items
- `ACHIEVEMENT_DATA`: Achievements with images
- `PROJECT_DATA`: Projects with screenshots
- `HOBBIES_DATA`: Hobby items with icons

### Adding Images
1. Place new images in appropriate directories:
   - `src/images/`: Hero/Bio
   - `src/achieve/`: Achievements
   - `src/projects/`: Projects
2. Update corresponding data arrays in `App.jsx`

### Modifying Animations
Each component exposes configuration props (see `App.jsx` usage examples).

## Browser Support
- Modern browsers (Chrome 80+, Firefox 75+, Safari 14+)
- Fully responsive
- Mobile-friendly design

## License
Portfolio for Suryaprakash. All rights reserved.
```

---

## 3. src/App.jsx
```javascript
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
import survex from "./projects/Survex.png";
import RotatingText from "./RotatingText";
import { HelloIntro } from "./HelloIntro";
import Stack from "./Stack";
import ImagePeel from "./ImagePeel";
import ProfilesSection from "./ProfilesSection";

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
    tags: ["AI Assistant", "LLM", "Natural Language"]
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
                <h3 className="text-[min(3.5vh,2.2vw)] font-black uppercase tracking-tight">SCHOOL</h3>
                <p className="text-[min(2.8vh,1.8vw)] leading-relaxed font-semibold">
                  Srinivasa Vidhyalaya Matric Higher Secondary School
                  <br />
                  <span className="text-black/60 font-mono">2021 - 2024</span>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[min(3.5vh,2.2vw)] font-black uppercase tracking-tight">COLLEGE</h3>
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
            <div className="absolute bottom-[-6vh] left-1/2 -translate-x-1/2 flex items-center gap-3 text-black/60">
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

        {/* Profiles Section */}
        <ProfilesSection />

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
            {PROJECT_DATA.map((project) => (
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6.314 5.314l.777.707M16.979 5.314l-.707.707M12 19l-.01.01M6.314 18.686l.707-.707M16.979 18.686l-.707-.707M12 3v.01" />
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
                  className={`aspect-square rounded-3xl flex flex-col items-center justify-center gap-3 shadow-2xl cursor-pointer border-2 border-black ${hobby.color}`}
                >
                  {hobby.icon}
                  <h3 className="text-lg font-black uppercase tracking-tight">
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
        <section className="min-h-screen w-full snap-start relative bg-yellow-400 text-black">
          {/* GitHub Top Nav */}
          <div className="w-full border-b border-black bg-black px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center gap-4">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              <div className="flex items-center gap-2">
                <a href="https://github.com/Surya-ux-max" target="_blank" rel="noopener noreferrer" className="font-semibold text-yellow-400 hover:underline">Surya-ux-max</a>
                <span className="text-yellow-400/60">/</span>
                <a href="#" className="font-bold text-yellow-400 hover:underline">Connect-with-Me</a>
              </div>
              <div className="flex-1" />
              <div className="flex items-center gap-4">
                <button className="px-3 py-1 border border-yellow-400/60 rounded-md text-sm font-medium text-yellow-400 hover:bg-yellow-400/10 transition-colors">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.908-.745.083-.729.083-.729 1.003.07 1.531 1.237 1.531 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Watch
                  </span>
                </button>
                <button className="px-3 py-1 border border-yellow-400/60 rounded-md text-sm font-medium text-yellow-400 hover:bg-yellow-400/10 transition-colors">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                    Fork
                  </span>
                </button>
                <button className="px-4 py-1.5 bg-yellow-400 border border-yellow-400/60 rounded-md text-sm font-semibold text-black hover:bg-yellow-300 transition-colors">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.908-.745.083-.729.083-.729 1.003.07 1.531 1.237 1.531 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Star
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="w-full border-b border-black bg-yellow-400 px-6">
            <div className="max-w-7xl mx-auto flex gap-2">
              <button className="px-4 py-3 border-b-2 border-black text-black font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                Code
              </button>
              {['Issues', 'Pull requests', 'Actions', 'Projects', 'Wiki', 'Security', 'Insights', 'Settings'].map((tab) => (
                <button key={tab} className="px-4 py-3 text-black/60 hover:text-black transition-colors">
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 py-6">
              {/* Repo Info Bar */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center font-bold text-yellow-400">
                    S
                  </div>
                  <div>
                    <h1 className="text-3xl font-black flex items-center gap-2">
                      Connect-with-Me
                      <span className="text-xs px-2 py-0.5 border border-black rounded-full text-black/60">Public</span>
                    </h1>
                  </div>
                </div>
              </div>

              {/* Branch and File Actions */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-black border border-black rounded-md text-sm font-medium text-yellow-400 hover:bg-black/80 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                    main
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1" />
                <button className="px-3 py-1.5 bg-black border border-black rounded-md text-sm font-medium text-yellow-400 hover:bg-black/80 transition-colors">
                  Go to file
                </button>
                <button className="px-3 py-1.5 bg-[#22c55e] border border-black rounded-md text-sm font-semibold text-black hover:bg-[#16a34a] transition-colors">
                  Add file
                </button>
              </div>

              {/* Commit Info */}
              <div className="border border-black rounded-t-lg bg-black px-4 py-2 flex items-center gap-3 mb-0">
                <div className="w-8 h-8 rounded-full bg-yellow-400" />
                <div className="flex-1">
                  <span className="font-semibold text-yellow-400">Surya-ux-max</span>
                  <span className="text-yellow-400/60 ml-2">Let's build something amazing together</span>
                </div>
                <span className="text-yellow-400/60 text-sm font-mono">0d4c4ac</span>
                <span className="text-yellow-400/60 text-sm">3 days ago</span>
              </div>

              {/* File List */}
              <div className="border border-t-0 border-black bg-black">
                <div className="flex items-center gap-3 px-4 py-2 border-b border-black hover:bg-black/80 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-yellow-400/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 2c.224 0 .44.08.608.238l5 4A.75.75 0 0 1 19 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9.5zM13 3.5V7h3.5L13 3.5zM6 13.5h6v-2H6v2zm0 4h6v-2H6v2z"/>
                  </svg>
                  <span className="flex-1 font-medium text-yellow-400">README.md</span>
                  <span className="text-yellow-400/60 text-sm font-mono">Welcome to my collaboration repo</span>
                  <span className="text-yellow-400/60 text-sm">3 days ago</span>
                </div>
              </div>

              {/* README Content */}
              <div className="border border-t-0 border-black rounded-b-lg mt-2">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-black bg-black">
                  <svg className="w-5 h-5 text-yellow-400/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 2c.224 0 .44.08.608.238l5 4A.75.75 0 0 1 19 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9.5zM13 3.5V7h3.5L13 3.5zM6 13.5h6v-2H6v2zm0 4h6v-2H6v2z"/>
                  </svg>
                  <span className="font-semibold text-yellow-400">README</span>
                  <div className="flex-1" />
                  <button className="text-yellow-400/60 hover:text-yellow-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>

                <div className="p-8 bg-black">
                  <div className="max-w-4xl">
                    <h1 className="text-3xl font-black mb-6 pb-3 border-b border-black flex items-center gap-3 text-yellow-400">
                      <span>🤝</span>
                      Connect-with-Me - Built for Developers
                    </h1>

                    <p className="text-lg text-yellow-400/60 mb-8">
                      Hey there! I'm <span className="text-yellow-400 font-semibold">Suryaprakash S</span>, an AI Engineer and Web Developer.
                      Let's build something amazing together!
                    </p>

                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black mb-4 pb-2 border-b border-black text-yellow-400">📧 Contact Me</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <a
                            href="mailto:suryapr.exe14@gmail.com"
                            className="p-4 border border-black rounded-lg hover:border-black hover:bg-yellow-400 transition-colors group bg-black"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                              </div>
                              <div>
                                <p className="text-yellow-400/60 text-sm font-mono uppercase">Email</p>
                                <p className="text-lg font-semibold group-hover:text-black transition-colors text-yellow-400">suryapr.exe14@gmail.com</p>
                              </div>
                            </div>
                          </a>

                          <a
                            href="https://github.com/Surya-ux-max"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border border-black rounded-lg hover:border-black hover:bg-yellow-400 transition-colors group bg-black"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                                </svg>
                              </div>
                              <div>
                                <p className="text-yellow-400/60 text-sm font-mono uppercase">GitHub</p>
                                <p className="text-lg font-semibold group-hover:text-black transition-colors text-yellow-400">@Surya-ux-max</p>
                              </div>
                            </div>
                          </a>

                          <a
                            href="https://www.linkedin.com/in/suryaprakash-s-20269631a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border border-black rounded-lg hover:border-black hover:bg-yellow-400 transition-colors group bg-black"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-[#0a66c2] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </div>
                              <div>
                                <p className="text-yellow-400/60 text-sm font-mono uppercase">LinkedIn</p>
                                <p className="text-lg font-semibold group-hover:text-black transition-colors text-yellow-400">Suryaprakash S</p>
                              </div>
                            </div>
                          </a>

                          <div className="p-4 border border-black rounded-lg bg-black">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                              </div>
                              <div>
                                <p className="text-yellow-400/60 text-sm font-mono uppercase">Status</p>
                                <p className="text-lg font-semibold text-green-400">Open for Collaborations!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-black mb-4 pb-2 border-b border-black text-yellow-400">🚀 About Me</h2>
                        <ul className="space-y-3 text-yellow-400/60">
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>AI Engineer & Full-Stack Developer</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>Building RAG systems and AI Agent pipelines</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>Always excited to work on new and innovative projects</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
```

---

## 4. src/Stack.jsx
```javascript
import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect, useMemo } from "react";

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

// Helper to generate stable random rotations
const generateRandomRotations = (count) => {
  return Array.from({ length: count }, () => Math.random() * 10 - 5);
};

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  // Use useMemo to create initial cards
  const initialCards = useMemo(() => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content }));
    } else {
      return [
        { id: 1, content: (
          <img
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
            alt="card-1"
            className="w-full h-full object-cover pointer-events-none"
          />
        )},
        { id: 2, content: (
          <img
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"
            alt="card-2"
            className="w-full h-full object-cover pointer-events-none"
          />
        )},
        { id: 3, content: (
          <img
            src="https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"
            alt="card-3"
            className="w-full h-full object-cover pointer-events-none"
          />
        )},
        { id: 4, content: (
          <img
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
            alt="card-4"
            className="w-full h-full object-cover pointer-events-none"
          />
        )}
      ];
    }
  }, [cards]);

  const [stack, setStack] = useState(initialCards);
  const [randomRotations, setRandomRotations] = useState(() => generateRandomRotations(initialCards.length));

  // Update stack and randomRotations when cards change
  useEffect(() => {
    if (cards.length) {
      const newStack = cards.map((content, index) => ({ id: index + 1, content }));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStack(newStack);
      setRandomRotations(generateRandomRotations(newStack.length));
    }
  }, [cards]);

  const sendToBack = (id) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.findIndex((card) => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  return (
    <div
      className="relative w-full h-full"
      style={{ perspective: 600 }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? (randomRotations[index] || 0) : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full h-full"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: "90% 90%"
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
```

---

## 5. src/ProfilesSection.jsx
```javascript
import image1 from "./contribute/image1.png";
import image2 from "./contribute/image.png";

const GITHUB_USERNAME = "Surya-ux-max";
const LEETCODE_USERNAME = "Surya-17-exe";

export default function ProfilesSection() {
  return (
    <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden bg-yellow-400 px-[6vw]">
      {/* Header */}
      <div className="flex items-end leading-[0.8] mb-[6vh] z-10">
        <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em]">
          P
        </h1>
        <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh]">
          rofiles
        </span>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        {/* GitHub Profile */}
        <div className="bg-black rounded-3xl p-[4vh] flex flex-col gap-[3vh]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-yellow-400 font-black text-2xl uppercase tracking-tight">GitHub</h3>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-yellow-400/70 font-mono hover:text-yellow-400 transition-colors">
                @{GITHUB_USERNAME}
              </a>
            </div>
          </div>

          <div className="flex-1 bg-zinc-900 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
            <img 
              src={image1} 
              alt="GitHub Contribution Chart" 
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>

        {/* LeetCode Profile */}
        <div className="bg-black rounded-3xl p-[4vh] flex flex-col gap-[3vh]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
              <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0 .125 2.632l3.858 4.129 3.857 4.127a1.383 1.383 0 0 0 1.047.466h16.354a1.372 1.372 0 0 0 .961-.44l.008-.007 3.854-4.126a5.266 5.266 0 0 0 1.209-2.104 5.35 5.35 0 0 0-.125-2.632l-3.858-4.129-3.857-4.127a1.374 1.374 0 0 0-.961-.438zm3.255 6.766H9.883L16.483 0l.255.225zm-2.478 10.47H9.883l3.858 4.129 3.857-4.129zM8.472 7.74l-3.854 4.126-3.857-4.126zm0 8.47l3.854 4.129-3.858-4.129zm12.012 0l-3.854 4.129 3.858-4.129zm2.478-4.234l-3.854 4.126 3.857 4.126z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-yellow-400 font-black text-2xl uppercase tracking-tight">LeetCode</h3>
              <a href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`} target="_blank" rel="noopener noreferrer" className="text-yellow-400/70 font-mono hover:text-yellow-400 transition-colors">
                @{LEETCODE_USERNAME}
              </a>
            </div>
          </div>

          <div className="flex-1 bg-zinc-900 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
            <img 
              src={image2} 
              alt="LeetCode Profile" 
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Background Text Pattern */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-5">
        <h1 className="text-[min(90vh,40vw)] font-black leading-none tracking-[-0.1em] select-none">
          CODE
        </h1>
      </div>
    </section>
  );
}
```

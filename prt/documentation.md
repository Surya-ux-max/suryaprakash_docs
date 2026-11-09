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
│   ├── images/               # Hero and Bio images
│   ├── achieve/              # Achievement photos (NGP, Workshop, Unstop, etc.)
│   ├── certificates/         # Certifications (NVIDIA, ServiceNow, Guidewire, Power BI)
│   ├── intern/               # Intern section module
│   │   ├── InternSection.jsx # Gigantic "I" skyscraper & interactive stage
│   │   ├── ClimbingRope.jsx  # Interactive climbing rope with sway physics
│   │   ├── TinyHumans.jsx    # Rooftop, climber & ground crew micro-figures
│   │   ├── InternHUD.jsx     # Floating Agentic AI Intern details panel
│   │   └── internData.js     # Role details, highlights & tech stack
│   ├── projects/             # Project screenshots
│   ├── App.jsx               # Main app coordinator
│   ├── AchievementsSection.jsx # Achievements interactive peel & selector
│   ├── CertificatesSection.jsx # Certificates 3D CardSwap deck
│   ├── HelloIntro.jsx        # Opening greeting animation
│   ├── ImagePeel.jsx         # Interactive peel effect for Achievements
│   ├── ProfilesSection.jsx   # Profiles section component
│   ├── RotatingText.jsx      # Animated text rotation
│   ├── CardSwap.jsx          # 3D cascading card deck animation
│   ├── Stack.jsx             # 3D card stack component
│   ├── Hobbies.jsx           # Interactive hobbies grid
│   ├── index.css             # Global styles
│   └── main.jsx              # App entry point
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
6. **Intern**: Gigantic "I" skyscraper with climbing rope & Agentic AI Intern HUD
7. **Achievements**: Image peel effect with dynamic text
8. **Certificates**: 3D CardSwap deck of verified credentials
9. **Profiles**: Connect via various platforms
10. **Projects**: Full-section video showcases
11. **Flagship Impact**: Live revenue-generating Bill4Food showcase
12. **Hobbies**: Bouncing grid of hobby cards
13. **CTA / Connect**: Editorial contact section with clipboard copy

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

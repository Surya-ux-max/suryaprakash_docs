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
7. **Projects**: Hover-expanding split panels
8. **Hobbies**: Bouncing grid of hobby cards
9. **CTA**: MacBook-style connect section with GitHub/LinkedIn

## Key Components

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

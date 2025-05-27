# Balram Panigrahi - Portfolio Website

A modern, animated portfolio website for Balram Panigrahi, a software engineer. This website features smooth animations, interactive elements, and a theme toggle that changes the theme with a corner-to-full-screen animation.

## Features

- **Animated UI**: Smooth transitions, hover effects, and scroll animations using Framer Motion
- **Theme Toggle**: Dynamic theme switching with a corner-to-full-screen animation
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Interactive Sections**: Home, About, Skills, Projects, and Contact sections with engaging animations
- **Modern Tech Stack**: Built with React, TypeScript, Styled Components, and Framer Motion

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/balram16/Portfolio_site.git
cd Portfolio_site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
portfolio_site/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ThemeToggle.tsx
│   ├── assets/
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
└── README.md
```

## Customization

- **Theme Colors**: Edit the CSS variables in `src/index.css` to change the theme colors
- **Content**: Update the text and information in each component to personalize the portfolio
- **Images**: Replace placeholder images in the `src/assets` directory with your own images

## Building for Production

To create a production build, run:

```bash
npm run build
```

The build files will be generated in the `build` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Framer Motion for the animation library
- Styled Components for the styling solution
- React for the frontend framework

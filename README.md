# Khushi Bhatt Portfolio

A responsive personal portfolio website for showcasing projects, career experience, technical skills, and contact details. It is built as a reusable React template that you can adapt for your own portfolio.

## Tech stack

- **React 19** for the component-based interface
- **Vite 8** for local development and production builds
- **Tailwind CSS 4** plus custom CSS for responsive styling
- **GSAP** for hero-section animations
- **ESLint** for code-quality checks
- **Three.js, React Three Fiber, Drei, and Postprocessing** are included for optional interactive 3D enhancements

## Included sections

- Responsive navigation and animated hero
- Featured projects
- Career timeline
- Skills grouped by area of expertise
- Email and social contact links

## Use this template

### Option 1: Clone with Git

```bash
git clone https://github.com/KhushiBhatt22/Khushi_portfolio.git
cd Khushi_portfolio
npm install
npm run dev
```

Open the local address shown in your terminal (normally `http://localhost:5173`).

### Option 2: Download the project

1. Download the [latest ZIP file](https://github.com/KhushiBhatt22/Khushi_portfolio/archive/refs/heads/main.zip).
2. Extract it and open the project folder in your code editor.
3. In a terminal inside that folder, run:

```bash
npm install
npm run dev
```

## Customize it

- Update your name, introduction, navigation labels, and reusable content in `src/constants/index.js`.
- Replace the project data in `src/sections/ShowcaseSection.jsx`.
- Update your work history and education in `src/sections/Experience.jsx`.
- Add your skills in `src/sections/TechStack.jsx`.
- Change your email and social links in `src/sections/Contact.jsx`.
- Replace images and 3D assets in `public/images` and `public/models` while keeping the referenced file paths in sync.
- Adjust colors, layout, and responsive styles in `src/index.css`.

## Available commands

```bash
npm run dev      # Start the development server
npm run build    # Create an optimized production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Requirements

Use a current LTS version of [Node.js](https://nodejs.org/) and npm. No environment variables are required for the portfolio in its current form.

## Deploy

Run `npm run build`, then deploy the generated `dist` folder to a static hosting provider such as Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

## License

This repository is available as a portfolio template. Please replace the personal information, projects, images, and contact links with your own before publishing.

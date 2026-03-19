# Portfolio Website

A modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
├── src/
│   ├── App.tsx          # Main App component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles and Tailwind imports
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type definitions
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## Development

The project is set up with:
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Hot module replacement for fast development

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `dist` directory.

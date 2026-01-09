# Dinakaran Portfolio

A modern portfolio website built with React and Vite, featuring smooth animations and a custom cursor effect.

## Features

- 🚀 Fast development with Vite
- ⚛️ React 18 with React Router
- 🎨 Tailwind CSS for styling
- ✨ Framer Motion animations
- 📱 Fully responsive design
- 🖱️ Custom animated cursor
- 📧 EmailJS integration for contact form

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd My-Portfolio-main
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── context/     # React context providers
│   ├── img/         # Image assets
│   ├── pages/       # Page components
│   ├── App.js       # Main app component
│   ├── index.js     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
└── tailwind.config.js # Tailwind configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Configuration

### EmailJS Setup

The contact form uses EmailJS. Make sure to configure your EmailJS service ID, template ID, and public key in `src/pages/Contact.js`.

## License

Private project

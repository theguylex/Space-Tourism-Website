# Space Tourism Website

A responsive, multi-page website built for the Frontend Mentor Space Tourism challenge. This project showcases a space travel company's services with pages for Home, Destination, Crew, and Technology, featuring dynamic content, responsive design, and a modern UI based on the provided Figma designs.
Features

## Responsive Design

Optimized for desktop (>991px), tablet (769px–991px), and mobile (≤768px) with tailored background images and layouts.

## Dynamic Navigation 

Interactive header with a hamburger menu for mobile and active link highlighting using React Router.

## Tab-based Content

## Destination

Displays planets (Moon, Mars, Europa, Titan) with images, descriptions, distance, and travel time, using tab navigation.

## Crew 

Showcases crew members with roles, bios, and images, navigated via dots.

## Technology

Details space technologies (Launch Vehicle, Spaceport, Space Capsule) with numbered tabs and portrait/landscape images.

## Optimized Styling

 Uses CSS custom properties (--font-heading, --color-accent, etc.) for consistency, with tweaks for perfect screen fit (e.g., height: 155vh for mobile Technology page).

## Image Handling

Utilizes imageMap for reliable asset loading across pages.
Accessibility: Includes ARIA labels for navigation elements.

## Tech Stack

React: Component-based UI with hooks (useState for tab states).
TypeScript: Type-safe JavaScript for better developer experience.
Vite: Fast build tool and development server.
React Router: Handles client-side routing for navigation.
CSS: Custom styles with Google Fonts (Barlow, Barlow Condensed, Bellefair) and responsive breakpoints.
JSON: Data sourced from src/data.json for destinations, crew, and technologies.

## Getting Started

Prerequisites

Node.js (v16 or higher)
npm (v8 or higher)

## Installation

Clone the repository:git clone https://github.com/your-username/space-tourism.git

Navigate to the project directory:cd space-tourism


Install dependencies:npm install



Running the Project

Start the development server:npm run dev


Open http://localhost:5173 in your browser.
Navigate through the pages (Home, Destination, Crew, Technology) and test responsiveness using browser DevTools.

Building for Production

Create a production build:npm run build


Serve the build locally:npm run preview

Project Structure
space-tourism/
├── public/
│   └── index.html           # Entry HTML with favicon
├── src/
│   ├── assets/             # Images (backgrounds, crew, destinations, technology)
│   ├── components/
│   │   └── Header.tsx      # Reusable navigation header
│   ├── pages/
│   │   ├── Home.tsx        # Home page with hero section
│   │   ├── Destination.tsx # Destination page with planet tabs
│   │   ├── Crew.tsx        # Crew page with member dots
│   │   └── Technology.tsx  # Technology page with numbered tabs
│   ├── styles/
│   │   ├── global.css      # Global styles and CSS variables
│   │   ├── Home.css        # Home page styles
│   │   ├── Destination.css # Destination page styles
│   │   ├── Crew.css        # Crew page styles
│   │   ├── Header.css      # Header styles
│   │   └── Technology.css  # Technology page styles
│   ├── data.json           # Data for destinations, crew, and technology
│   ├── App.tsx             # Main app with routing
│   └── main.tsx            # Entry point for React rendering
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation

Notes

Image Assets: Ensure all images (e.g., image-moon.png, image-launch-vehicle-portrait.jpg) are in src/assets/ with correct paths in imageMap.
Responsive Tweaks: Tablet and mobile layouts use specific heights (e.g., 112vh for tablet Technology, 155vh for mobile) to fit content perfectly.
Figma Design: Matches the Frontend Mentor Figma design, with customizations (e.g., padding: 100px 0 10px 140px for Technology, width: 95vw for mobile).
Accessibility: Add keyboard navigation or additional ARIA attributes for improved accessibility if needed.

Future Improvements

Add animations for tab/image transitions (e.g., opacity fade).
Enhance accessibility with focus management and screen reader support.
Optimize image loading with lazy loading or WebP formats.
Add unit tests for components using Jest or Vitest.

Credits

Fonts: Google Fonts (Barlow, Barlow Condensed, Bellefair).
Built by: Alex Ekpendu.

For issues or contributions, please open a GitHub issue or pull request.

# Restaurant Menu (React + Vite)

A small single-page React application that displays a restaurant menu populated with meals fetched from TheMealDB public API. The project demonstrates data fetching, basic state management, filtering, sorting, and component-based UI built with Vite.

This README provides installation steps, an overview of the code structure, development tips, and deployment suggestions.

---

## Table of Contents

- Project Overview
- Features
- Technology Stack
- Live Demo
- Getting Started
  - Prerequisites
  - Installation
  - Running in Development
  - Building for Production
  - Previewing a Production Build
- Project Structure
- Main Components
- Data Flow & Behavior
- Styling
- API
- Testing
- Deployment
- Contributing
- License
- Acknowledgements

---

## Project Overview

This repository contains a lightweight React application scaffolded with Vite. The app fetches a list of seafood meals from TheMealDB API, generates a random price for each item, and presents the list of dishes in a simple menu UI where the user can search by name and sort by price.

The purpose of the project is to provide a concise example of:

- Fetching and processing remote data in React
- Basic client-side filtering and sorting
- Component decomposition (menu list and items)
- Using Vite for fast local development


## Features

- Fetches seafood meals from TheMealDB API.
- Displays each meal with thumbnail, title, randomly generated price and category.
- Client-side search (case-insensitive) to filter menu items by name.
- Client-side price sorting (ascending, descending, and default).
- Minimal, responsive UI suitable as a small demo or starting point.


## Technology Stack

- React (functional components + hooks)
- Vite (dev server and build tool)
- Plain CSS for component styles
- TheMealDB public API for sample data


## Live Demo

If you deploy this project to a static host (Vercel, Netlify, GitHub Pages, etc.) you can share a live demo link. This repository does not include a hosted demo link by default.


## Getting Started

These instructions will get the project running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or newer recommended)
- npm (comes with Node.js) or yarn
- Internet connection (to fetch data from TheMealDB API)


### Installation

Open a terminal in the project root (`restaurant-menu`) and run:

For npm:

npm install

Or using yarn:

yarn


### Running in Development

Start the Vite development server:

npm run dev

or

yarn dev

This will start a local development server (typically at http://localhost:5173) with hot module replacement.


### Building for Production

To create an optimized production build:

npm run build

or

yarn build

The output will be written to the `dist` directory.


### Previewing a Production Build

You can preview the production build locally with:

npm run preview

or

yarn preview


## Project Structure

A simplified view of the repository layout:

src/
  ├─ App.jsx           # Main application component (fetching, filtering, sorting)
  ├─ main.jsx          # React entry point
  ├─ index.css         # Global styles
  └─ components/
      ├─ MenuList/
      │   ├─ MenuList.jsx
      │   └─ MenuList.css
      └─ MenuItem/
          ├─ MenuItem.jsx
          └─ MenuItem.css

Other important files:

- index.html          # Vite HTML template
- package.json        # Project scripts and dependencies
- vite.config.js      # Vite configuration


## Main Components

- App.jsx
  - Responsible for fetching data from the API, maintaining top-level state (items, loading, error, search input, sort order), and computing the list of items to render.
  - Implements client-side filtering (search) and sorting (price asc/desc/default).

- MenuList
  - Receives a list of processed items via props and maps over them to render `MenuItem` components.

- MenuItem
  - Displays a single menu item including thumbnail, name, category and price. Styling is local to the component.


## Data Flow & Behavior

- On mount, `App.jsx` fetches seafood meals from `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`.
- Each fetched meal is transformed to include: `id`, `name`, `thumb`, `category` and a randomly generated `price` (between 10 and 19).
- The user may type into the search input to filter menu items by name (case-insensitive substring match).
- The user may select a sort order from the dropdown to sort by price ascending or descending; selecting "default" preserves the current order.
- The filtered + sorted list is passed to `MenuList` for rendering.


## Styling

- The project uses plain CSS files located beside each component (`MenuItem.css`, `MenuList.css`, `index.css`).
- Feel free to replace or extend the styles with a CSS framework (Tailwind, Bootstrap) or CSS-in-JS solutions.


## API

This project uses TheMealDB free public API endpoint:

https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

No API key is required for this endpoint. Keep in mind public APIs may rate-limit or change over time; consider adding caching or a backend proxy if you rely on this data in production.


## Testing

There are no automated tests included in this starter project. Suggested next steps for testing:

- Add unit tests for pure helper functions using Jest.
- Add component tests using React Testing Library.
- Add end-to-end tests with Cypress if you plan to automate UI flows.


## Deployment

This is a static SPA; recommended hosts include:

- Vercel
- Netlify
- GitHub Pages

Typical deployment steps:

1. Build the site: `npm run build`.
2. Deploy the contents of the `dist` folder to your static host.

On Vercel or Netlify, you can connect your repository and use default build commands (install, build, publish `dist`).


## Acknowledgements

- TheMealDB — free meals API used for sample data.
- Vite — for fast development and build tooling.


# ROAST & RITUAL

A coffee shop website. It shows a menu of drinks, lets visitors open a drink to see the details, pick a size, and add it to a cart.

The look is editorial and dark, with smooth scrolling and animated transitions.

## What it does

- Shows 9 coffees, with hot, iced, espresso, and specialty filters
- Opens a detail view for each coffee with ingredients and tasting notes
- Lets you pick a size and temperature, then add to the cart
- Cart drawer with quantity controls, item removal, and a running total in naira
- Toast message when an item is added
- Loading screen, custom cursor, and smooth page scroll
- Works on phones and desktops, and respects reduced motion settings

## Tech

- React 18
- Vite 5
- Framer Motion for animation
- Lenis for smooth scrolling
- Lucide React for icons
- Plain CSS

There is no backend. Prices and drink details live in a local file, and the cart resets when the page reloads.

## Getting started

You need Node 20 or newer.

```bash
npm install
npm run dev
```

The site opens at http://localhost:5173

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the site into the `dist` folder |
| `npm run preview` | Preview the built site locally |

## Project structure

```
src/
  App.jsx              main layout and page state
  main.jsx             app entry point
  components/          navbar, hero, menu, cart, and other UI parts
  data/coffees.js      the drink list and prices
  hooks/useCart.jsx    cart state
  styles/global.css    all styling
public/mark.svg        site icon
```

## Editing the menu

Add or change a coffee in `src/data/coffees.js`. Each entry needs a name, description, prices per size, and a `featured` flag. Featured drinks show up in the showcase section near the top of the page.

## Deploying

The project is set up for Vercel. `vercel.json` tells it to run `npm run build` and publish the `dist` folder. Any other static host will work too, as long as it serves the contents of `dist`.

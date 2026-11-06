# Moorlands Park (React)

The Moorlands Park concept site as a React app, written in JavaScript (JSX) with Vite and React Router.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

Needs Node 18 or newer.

## Structure

```
index.html                 page shell, Google Fonts links
src/
  main.jsx                 mounts <App /> inside <BrowserRouter>
  App.jsx                  routes: / , /visit , /hire , /friends
  styles/style.css         your original stylesheet, plus two small additions at the bottom
  assets/sunset.webp       the hero photo, extracted unchanged from the old index.html
  data/site.js             links, address and footer text shared between pages
  data/links.js            external links (council pages, Facebook group, enquiry form, map)
  pages/                   Home, Visit, Hire, Friends
  components/              Layout, Nav, Footer, PageHero, Reveal, Counter, Steps, ExternalLink, ...
  hooks/                   useHomeScenes (all home page scroll effects), useScrollFrame,
                           useInView, usePageTitle
  lib/motion.js            clamp() and reduced-motion check
```

## Notes

- Routes use clean URLs (`/visit`), not `visit.html`. In dev and `npm run preview` this just works.
  On a static host, set it to fall back to `index.html` for unknown paths,
  or swap `BrowserRouter` for `HashRouter` in `src/main.jsx`.
- The home page scroll effects live in `src/hooks/useHomeScenes.js`. They change element styles
  directly in an animation-frame loop (not React state) so scrolling stays smooth.
- Dependency versions are set to the stable Vite 5 / React 18 / React Router 6 line. Bumping them is safe.

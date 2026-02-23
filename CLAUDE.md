# GMnR Consultants Website

## Project Overview
Business development consultancy website for Guy Molcho / GMnR Consultants.

## Tech Stack
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- react-router-dom v7 (HashRouter — blog article routing)

## Repository
- GitHub: asets-gobizit/gmnr-consultants
- Default branch: master
- Deployed via GitHub Actions → GitHub Pages

## Domain & DNS
- Live URL: https://gmnrconsultants.com
- DNS managed on Cloudflare (account: Asets@gobizit.com)
- Cloudflare proxy enabled on all A records (orange cloud)
- SSL mode: Full

## Structure
- src/components/ — UI components (Navbar, Blog, Hero, etc.)
- src/pages/BlogPost.jsx — Article page template
- src/data/blogPosts.js — All article content (edit here to add/update articles)

## Key Notes
- To add a new article: add an entry to src/data/blogPosts.js AND add it to the posts array in src/components/Blog.jsx
- Navbar shows dark background on all non-home pages (isHome check)
- All changes pushed to master auto-deploy via GitHub Actions

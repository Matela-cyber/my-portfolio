# Teboho Vicent Matela — Portfolio

A lightweight, responsive personal portfolio and digital resume built with semantic HTML, CSS and vanilla JavaScript. The site is a static project site (index.html at repository root) ready to publish on GitHub Pages without any build step.

Live demo

- Project site (GitHub Pages): https://matela-cyber.github.io/my-portfolio/

What’s included

- index.html — single-page portfolio landing and resume
- styles.css — styling
- script.js — small interactive bits
- assets/ and several image files used for portraits and project artwork

Quick local preview

1. Open index.html in a browser, or serve the repo root with a static server. Examples:

   - Python 3: `python -m http.server 8000` and open http://localhost:8000
   - Node (http-server): `npx http-server -p 8000` and open http://localhost:8000

Deployment (GitHub Pages)

This repository is already structured for GitHub Pages; to publish the site from GitHub:

1. In your repository on GitHub, go to Settings → Pages (or open: https://github.com/Matela-cyber/my-portfolio/settings/pages).
2. Under "Build and deployment" / "Source", choose:
   - Branch: `main`
   - Folder: `/ (root)`
3. Save. After a minute or two the site will be published at:

   https://matela-cyber.github.io/my-portfolio/

4. (Optional) Enable "Enforce HTTPS" in the Pages settings once the site is published.

Notes and suggestions

- Large image files increase repository size and page load time. Consider optimizing large JPEGs/PNGs (resize, convert to WebP, or compress) and storing only web-sized images in `assets/`.
- Keep critical CSS in `styles.css` small; defer or lazy-load non-critical images using the `loading="lazy"` attribute to improve perceived performance.
- If you want a custom domain, add it in Pages settings and add a `CNAME` file with your domain (or use the Pages UI which will create the CNAME automatically).

Want me to:

- Optimize images (I can create compressed WebP versions and update references)?
- Add a small GitHub Actions workflow to validate and auto-deploy (not required for Pages, but useful if you later build)?

Credits

Built by Teboho Vicent Matela — Matela-cyber

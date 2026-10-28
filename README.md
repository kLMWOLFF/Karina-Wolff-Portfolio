# Portfolio

- `index.html` – the page (don't need to touch it)
- `projects.js` – all works: text, image file names, video links  ← edit this one
- `style.css` – compiled styles
- `images/` – put your pictures here (names must match `projects.js`, including upper/lower case)
- `docs/` – PDFs (research documents) linked from `projects.js`
- `videos/` – optional, for small .mp4 files (YouTube/Vimeo links are better)
- `tools/` – only to regenerate `style.css` if you change Tailwind classes:
  `npx tailwindcss@3.4.17 -c tools/tailwind.config.js -i tools/src.css -o style.css --minify`

Go live: push to GitHub → Settings → Pages → Deploy from branch `main` / root.
Then replace `YOUR-USERNAME` / `YOUR-REPO` in the `og:image` line of `index.html`.

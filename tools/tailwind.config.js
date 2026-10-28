/** Rebuild with:  npx tailwindcss@3.4.17 -c tools/tailwind.config.js -i tools/src.css -o style.css --minify
 *  (run from the repo root; only needed if you change Tailwind classes in index.html / projects.js) */
module.exports = {
  content: ['./index.html', './projects.js'],
  theme: {
    extend: {
      colors: {
        brand: { dark: '#121212', card: '#1a1a1a', subtle: '#262626', border: '#333333', muted: '#9ca3af', accent: '#d4af37' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        title: ['Cinzel', 'serif'],
      },
    },
  },
};

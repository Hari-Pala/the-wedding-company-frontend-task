# The Wedding Company – Quiz Experience

**Live Demo:** https://the-wedding-company-frontend-task.vercel.app/

A polished, glassmorphism-inspired quiz built for **The Wedding Company** landing page.  
Soft gradients, glowing motion elements, and friendly micro-copy create an engaging interactive experience for visitors.

---

## ✨ Features
- **Modern glass UI** with aurora backgrounds and glow animations.
- **Keyboard-friendly navigation** — use arrow keys or Enter to move between questions.
- **Sticky progress bar** that reflects the user’s journey.
- **Celebratory final score screen** with restart support.
- **Fully data-driven setup** — questions live in a single JSON file.

---

## ✨ Highlights
- **Animated glass UI** – layered aurora background, glow blobs, and cloud ribbons (`App.jsx`, `index.css`).
- **Keyboard-friendly quiz** – arrow keys or Enter to move between questions (`Quiz.jsx`).
- **Progress tracking** – sticky progress bar and contextual CTA states (`ProgressBar.jsx`).
- **Score reveal** – celebratory end screen with restart support (`FinalScore.jsx`).
- **Data driven** – question set easily swapped via `src/data/questions.js`.

## 🗂️ Project Structure
```
the Wedding company/
├─ public/
│  └─ image.png 
├─ src/
│  ├─ components/
│  │  ├─ Quiz.jsx      # core flow 
│  │  ├─ QuestionCard.jsx
│  │  ├─ ProgressBar.jsx
│  │  └─ FinalScore.jsx
│  ├─ data/questions.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
└─ package.json
```

## 🛠️ Customization
- **Questions** – edit `src/data/questions.js` to change prompts, options, or answers.
- **Hero image** – replace `public/image.png` to update the intro artwork displayed on question one.
- **Styling** – tweak gradients, fonts, and glass effects in `src/index.css`. Tailwind utility classes are used extensively throughout the components.

## 📄 License
This project is proprietary to The Wedding Company. Do not distribute without permission.

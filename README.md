# 🚀 Phương FullStack Portfolio

[![Portfolio Demo](https://img.shields.io/badge/Live-Demo-00bfff?style=for-the-badge&logo=github)](https://phuongdz2759.github.io/portfolio/)

A modern, premium‑looking portfolio built with **React 18**, **Vite**, and **Tailwind CSS**. It showcases my skills, projects, and professional experience with a dark, glass‑morphism design, smooth animations, and full responsiveness.

---

## ✨ Features

- **Premium UI** – Dark theme, gradient accents, glass‑morphism cards, and micro‑animations.
- **Responsive Layout** – Mobile‑first design that works on all screen sizes.
- **Projects Gallery** – Masonry grid with hover overlays and a "Show More" button.
- **Docs Page** – Dedicated page (`/docs`) that presents detailed project documentation.
- **Contact Form** – Powered by Web3Forms with toast notifications.
- **SEO Optimized** – Proper meta tags, semantic HTML, and accessibility support.
- **CI/CD** – Automated deployment to GitHub Pages via GitHub Actions.

---

## 🛠️ Tech Stack

**Frontend**
- **React 18** – Functional components with hooks.
- **Vite** – Lightning‑fast dev server and build.
- **Tailwind CSS** – Utility‑first styling, custom dark palette, and gradients.
- **Font Awesome** – Icon library.
- **Google Fonts (Outfit)** – Elegant typography.

**Tools**
- **ESLint** – Code quality.
- **PostCSS** – CSS processing.
- **GitHub Actions** – CI/CD workflow for GitHub Pages.

---

## 📦 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-app.git
cd portfolio-app

# Install dependencies
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:5173 in your browser
```

### Build for Production
```bash
npm run build
# Output is in the `dist` folder
```

---

## 📂 Project Structure
```
portfolio-app/
├─ public/                 # Static assets
├─ src/
│  ├─ assets/             # Images, icons, data files
│  ├─ components/         # UI components (Hero, About, Services, MyWork, Contact, Docs)
│  ├─ Layout/             # Navbar, Footer
│  ├─ view/               # Page components (Home.jsx, DocsPage.jsx)
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .github/workflows/deploy.yml   # CI/CD workflow
├─ tailwind.config.js
├─ vite.config.js
└─ README.md
```

---

## 🚀 Deployment (GitHub Pages)
The project is configured to deploy automatically:
1. Push to the `main` branch.
2. GitHub Actions runs the workflow defined in `.github/workflows/deploy.yml`.
3. The `dist` folder is published to the `gh-pages` branch and served at `https://<username>.github.io/portfolio/`.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes.
4. Push and open a Pull Request.

---

## 📄 License
MIT License – see the [LICENSE](LICENSE) file.

---

## 👨‍💻 Author
**Phương Nguyễn** – Full Stack Developer based in Vietnam.
- Email: kuem271003@mail.com.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [phuongdz2759](https://github.com/phuongdz2759)
- Portfolio: [phuongdz2759.github.io/portfolio](https://phuongdz2759.github.io/portfolio/)

---

⭐️ If you find this project helpful, please give it a star!

Made with ❤️ by Phương Nguyễn

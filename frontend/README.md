# Brew Haven Café - Modern Full-Stack React Frontend

A production-grade, modular, and responsive React frontend created by migrating the original HTML/CSS/JS café prototype into an enterprise-ready single-page & multi-page architecture.

---

## 📁 Architecture & Directory Structure

```
frontend/
├── package.json               # Dependencies (React 18, React Router DOM 6, Vite)
├── vite.config.js             # High-performance Vite build & dev config
├── index.html                 # HTML5 template with Google Fonts preconnection
└── src/
    ├── main.jsx               # Application entry point with BrowserRouter
    ├── App.jsx                # Layout Shell, Context Provider & Route Mapping
    ├── index.css              # Global tokens, reset, typography & custom scrollbar
    ├── App.css                # Component styles, warm café palette & responsive breakpoints
    ├── context/
    │   └── OrderContext.jsx   # Global state for items, order modes, and notifications
    ├── services/
    │   └── api.js             # Full-stack API abstraction layer (mocked & backend-ready)
    ├── data/
    │   ├── menuData.js        # Structured café menu items & category definitions
    │   ├── galleryData.js     # High-resolution café & brewing photo data
    │   └── reviewsData.js     # Customer testimonials & ratings
    ├── components/
    │   ├── Navbar.jsx         # Sticky header with glassmorphism & mobile hamburger drawer
    │   ├── Footer.jsx         # Contact, hours, social links & legal notice
    │   ├── MenuCard.jsx       # Individual menu card with "Order Now" quick trigger
    │   ├── GalleryLightbox.jsx# Fullscreen image preview with Escape/backdrop listener
    │   ├── ReviewCard.jsx     # Star rating & review quote card
    │   ├── OrderForm.jsx      # Pickup vs. Reservation form with live validation
    │   └── BackToTop.jsx      # Smooth scroll-to-top floating button
    └── pages/
        ├── HomePage.jsx       # Hero showcase + integrated preview flow
        ├── AboutPage.jsx      # Our story, values & 3 feature highlight cards
        ├── MenuPage.jsx       # Category filtering & dynamic menu catalog
        ├── GalleryPage.jsx    # Photo grid with interactive lightbox preview
        ├── ReviewsPage.jsx    # Guest testimonials & community ratings
        ├── OrderPage.jsx      # Online pickup & table reservation booking
        └── ContactPage.jsx    # Address cards, opening hours & embedded map
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Open your terminal in the `frontend` folder:
```bash
cd frontend
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The app will launch at `http://localhost:3000` with instant Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```

---

## 🔌 Full-Stack Backend Integration

The frontend is already configured with a dedicated API abstraction layer in `src/services/api.js`:
- To point to your real backend server (Express, FastAPI, Django, NestJS, etc.), simply create a `.env` file in `frontend/`:
  ```env
  VITE_API_BASE_URL=http://localhost:5000
  ```
- The endpoints ready for backend implementation:
  - `GET /api/menu?category={category}`
  - `GET /api/gallery`
  - `GET /api/reviews`
  - `POST /api/orders`
  - `POST /api/reservations`


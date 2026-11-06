import React from 'react';
import { Link } from 'react-router-dom';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import GalleryPage from './GalleryPage';
import ReviewsPage from './ReviewsPage';
import OrderPage from './OrderPage';
import ContactPage from './ContactPage';

export default function HomePage() {
  return (
    <>
      {/* Hero Showcase */}
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-grid">
            
            {/* Hero Content */}
            <div className="hero-content">
              <span className="hero-badge">
                <span aria-hidden="true">&#9749;</span> Welcome to Brew Haven Café
              </span>
              <h1 className="hero-title">
                Freshly Brewed <span className="highlight">Happiness</span> in Every Cup.
              </h1>
              <p className="hero-desc">
                Experience artisan coffee, delectable pastries, and a cozy atmosphere perfect for your mornings and lazy afternoons.
              </p>
              <div className="hero-actions">
                <Link to="/menu" className="btn btn-primary">
                  View Menu
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Visit Us
                </Link>
              </div>
            </div>

            {/* Hero Image with Floating Badges */}
            <div className="hero-image-wrap">
              <div className="hero-main-img-box">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisan coffee cup on rustic table with roasted coffee beans"
                  className="hero-main-img"
                />
              </div>

              {/* Floating Badge: 10+ Years */}
              <div className="badge-floating badge-experience">
                <div className="badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="badge-text-title">10+ Years</div>
                  <div className="badge-text-sub">Brewing Excellence</div>
                </div>
              </div>

              {/* Floating Badge: 4.9 Rating */}
              <div className="badge-floating badge-rating">
                <div className="badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <div className="badge-text-title">4.9 / 5.0</div>
                  <div className="badge-text-sub">1,200+ Happy Guests</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Complete Flow for Home */}
      <AboutPage embedded />
      <MenuPage embedded />
      <GalleryPage embedded />
      <ReviewsPage embedded />
      <OrderPage embedded />
      <ContactPage embedded />
    </>
  );
}


import React from 'react';

export default function AboutPage({ embedded = false }) {
  return (
    <section className={`section section-bg-beige ${!embedded ? 'page-wrapper' : ''}`} id="about">
      <div className="container">
        <div className="about-grid">
          
          {/* Image Column */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Cozy sunlit café interior"
                className="about-img"
                loading="lazy"
              />
              <div className="about-image-overlay-card">
                <p className="about-quote">&ldquo;Coffee connects people, sparks ideas, and warms the soul.&rdquo;</p>
                <p className="about-author">&mdash; Master Barista &amp; Founder</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content-column">
            <span className="section-badge">Our Story</span>
            <h2 className="section-title">A Cozy Escape from the Ordinary</h2>
            <p className="about-text-lead">
              Welcome to Brew Haven Café. We believe that a great cup of coffee can completely turn your day around. That's why we source only the finest, freshest, and ethically harvested beans from around the world.
            </p>
            <p className="about-text-body">
              From our golden, buttery morning croissants baked at dawn to the rich aroma of single-origin espresso flowing through our machines, every detail is crafted with heartfelt passion. Whether you're here to power through focused work, lose yourself in a book, or share laughter with dear friends, Brew Haven is your cozy second home.
            </p>

            {/* 3 Feature Highlights */}
            <div className="features-grid">
              
              <div className="feature-card">
                <div className="feature-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <h3 className="feature-title">Fresh Ingredients</h3>
                <p className="feature-desc">Locally sourced organic dairy, farm-fresh eggs, and pure artisanal butter.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="2" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="2" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="feature-title">Artisan Coffee</h3>
                <p className="feature-desc">Small-batch roasted beans brewed to perfection with custom extraction profiles.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3 className="feature-title">Cozy Atmosphere</h3>
                <p className="feature-desc">Comfortable seating, soothing acoustic vibes, high-speed Wi-Fi, and natural light.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


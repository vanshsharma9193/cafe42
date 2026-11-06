import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import GalleryLightbox from '../components/GalleryLightbox';

export default function GalleryPage({ embedded = false }) {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    api.getGallery().then(setGalleryItems);
  }, []);

  return (
    <section className={`section section-bg-beige ${!embedded ? 'page-wrapper' : ''}`} id="gallery">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Cozy Moments</span>
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-desc">A visual glimpse into our café's warmth, craftsmanship, and daily brewed moments.</p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item ${item.wide ? 'gallery-item-wide' : ''}`}
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex="0"
              aria-label={`Open ${item.title}`}
            >
              <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-zoom-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <GalleryLightbox activeItem={activeItem} onClose={() => setActiveItem(null)} />

      </div>
    </section>
  );
}


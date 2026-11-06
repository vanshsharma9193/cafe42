import React from 'react';

export default function ContactPage({ embedded = false }) {
  return (
    <section className={`section section-bg-light ${!embedded ? 'page-wrapper' : ''}`} id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Visit Our Café</h2>
          <p className="section-desc">Stop by for a warm cup, cheerful smiles, or drop us a line anytime.</p>
        </div>

        <div className="contact-grid">
          
          {/* Contact Information Cards */}
          <div className="contact-cards-wrap">
            
            {/* Address */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="contact-info-title">Our Address</h3>
              <p className="contact-info-text">
                123 Coffee Lane,<br />
                Bean City, BC 45678
              </p>
            </div>

            {/* Phone & Email */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="contact-info-title">Phone &amp; Email</h3>
              <p className="contact-info-text">
                <a href="tel:+15551234567" style={{ display: 'block', marginBottom: '4px' }}>+1 (555) 123-4567</a>
                <a href="mailto:hello@brewhaven.com">hello@brewhaven.com</a>
              </p>
            </div>

            {/* Opening Hours */}
            <div className="contact-info-card full-span">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="contact-info-title">Opening Hours</h3>
              <div className="contact-hours-list">
                <div className="hours-row">
                  <span className="hours-day">Monday – Friday</span>
                  <span className="hours-time">7:00 AM – 8:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">8:00 AM – 9:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">8:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Map Embed Card */}
          <div className="map-container">
            <div className="map-placeholder-box">
              <iframe
                title="Brew Haven Café Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.822987823528!2d-123.1207375!3d49.2827291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f41ba2fb1%3A0xc695279497e59b2d!2sDowntown%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-floating-pin">
                <div className="map-pin-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </div>
                <div>
                  <strong>Brew Haven Café</strong><br />
                  <span style={{ fontSize: '0.8rem', color: '#6e6259' }}>123 Coffee Lane, Bean City</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


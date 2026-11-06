import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        
        <div className="footer-top">
          
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                  <line x1="6" y1="2" x2="6" y2="4"></line>
                  <line x1="10" y1="2" x2="10" y2="4"></line>
                  <line x1="14" y1="2" x2="14" y2="4"></line>
                </svg>
              </div>
              <div>
                <span className="brand-name">Brew Haven</span>
                <span className="brand-subtitle">Artisan Café</span>
              </div>
            </Link>
            <p className="footer-bio">
              Creating moments of joy through artisan coffee, fresh pastries, and a welcoming environment.
            </p>
            
            {/* Social Icons */}
            <div className="social-links">
              <a href="https://instagram.com" className="social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" className="social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com" className="social-btn" aria-label="X" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://pinterest.com" className="social-btn" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.9-.12-2.28.02-3.26l1.04-4.41s-.26-.53-.26-1.31c0-1.23.71-2.14 1.6-2.14.76 0 1.12.57 1.12 1.25 0 .76-.48 1.9-.74 2.95-.21.89.44 1.61 1.32 1.61 1.58 0 2.8-1.67 2.8-4.08 0-2.13-1.53-3.62-3.72-3.62-2.53 0-4.02 1.9-4.02 3.86 0 .76.3 1.58.66 2.03a.33.33 0 0 1 .08.31c-.08.34-.27 1.11-.31 1.27-.05.21-.17.26-.4.16-1.49-.69-2.42-2.87-2.42-4.62 0-3.76 2.73-7.22 7.88-7.22 4.14 0 7.36 2.95 7.36 6.89 0 4.11-2.59 7.42-6.19 7.42-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/menu" className="footer-link">Menu & Drinks</Link></li>
              <li><Link to="/gallery" className="footer-link">Photo Gallery</Link></li>
              <li><Link to="/reviews" className="footer-link">Guest Reviews</Link></li>
              <li><Link to="/order" className="footer-link">Online Order & Booking</Link></li>
              <li><Link to="/contact" className="footer-link">Find Us</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="footer-col-title">Opening Hours</h3>
            <div className="footer-hours-row">
              <span className="footer-hours-label">Monday – Friday</span>
              <span className="footer-hours-val">7:00 AM – 8:00 PM</span>
            </div>
            <div className="footer-hours-row">
              <span className="footer-hours-label">Saturday</span>
              <span className="footer-hours-val">8:00 AM – 9:00 PM</span>
            </div>
            <div className="footer-hours-row">
              <span className="footer-hours-label">Sunday</span>
              <span className="footer-hours-val">8:00 AM – 6:00 PM</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="footer-col-title">Contact Info</h3>
            <div className="footer-contact-row">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
              <span>123 Coffee Lane,<br />Bean City, BC 45678</span>
            </div>
            <div className="footer-contact-row">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="footer-contact-row">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>hello@brewhaven.com</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Brew Haven Café. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}


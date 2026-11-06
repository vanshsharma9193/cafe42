import React from 'react';
import OrderForm from '../components/OrderForm';

export default function OrderPage({ embedded = false }) {
  return (
    <section className={`section section-bg-beige order-section ${!embedded ? 'page-wrapper' : ''}`} id="order">
      <div className="container">
        <div className="order-grid">
          
          {/* Left: Benefits */}
          <div className="order-info-column">
            <span className="section-badge">Quick &amp; Easy</span>
            <h2 className="section-title">Order Online or Reserve a Table</h2>
            <p className="section-desc">
              Place your order ahead of time for pickup, or reserve a cozy corner for your next meeting.
            </p>

            <div className="order-benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="benefit-title">Fast &amp; Easy Pickup</h3>
                  <p className="benefit-desc">
                    Skip the queue. Your freshly brewed coffee and hot pastries are packed and ready the minute you arrive.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="benefit-title">Secure Payments</h3>
                  <p className="benefit-desc">
                    Convenient contactless in-person or express mobile checkouts with end-to-end security.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="benefit-title">Earn Loyalty Rewards</h3>
                  <p className="benefit-desc">
                    Earn coffee beans with each visit and unlock free handcrafted beverages and dessert perks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Order / Reservation Form */}
          <OrderForm />

        </div>
      </div>
    </section>
  );
}


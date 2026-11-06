import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import ReviewCard from '../components/ReviewCard';

export default function ReviewsPage({ embedded = false }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getReviews().then(setReviews);
  }, []);

  return (
    <section className={`section section-bg-light ${!embedded ? 'page-wrapper' : ''}`} id="reviews">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-desc">Real stories and heartwarming words from our community of coffee lovers.</p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

      </div>
    </section>
  );
}


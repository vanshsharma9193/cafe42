import React from 'react';

export default function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div>
        <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
          {[...Array(review.rating)].map((_, i) => (
            <svg key={i} viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          ))}
        </div>
        <p className="review-quote">&ldquo;{review.comment}&rdquo;</p>
      </div>
      <div className="review-author-wrap">
        <img src={review.avatar} alt={review.name} className="review-avatar" loading="lazy" />
        <div className="review-author-info">
          <span className="review-author-name">{review.name}</span>
          <span className="review-author-type">{review.role}</span>
        </div>
      </div>
    </div>
  );
}


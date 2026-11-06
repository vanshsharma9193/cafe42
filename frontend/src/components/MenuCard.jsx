import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

export default function MenuCard({ item }) {
  const { selectItemForOrder } = useOrder();
  const navigate = useNavigate();

  const handleOrderClick = () => {
    selectItemForOrder(item);
    navigate('/order');
  };

  return (
    <article className="menu-card">
      <div className="menu-card-img-wrap">
        <span className="menu-category-tag">{item.category}</span>
        <img src={item.image} alt={item.name} className="menu-card-img" loading="lazy" />
      </div>
      <div className="menu-card-body">
        <div className="menu-header-row">
          <h3 className="menu-item-name">{item.name}</h3>
          <span className="menu-item-price">{item.price}</span>
        </div>
        <p className="menu-item-desc">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-rating-badge">
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            {item.rating.toFixed(1)} ({item.reviewCount})
          </span>
          <button className="menu-order-btn" onClick={handleOrderClick}>
            Order Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}


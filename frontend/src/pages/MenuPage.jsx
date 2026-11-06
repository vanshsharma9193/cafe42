import React, { useState, useEffect } from 'react';
import { CATEGORIES } from '../data/menuData';
import { api } from '../services/api';
import MenuCard from '../components/MenuCard';

export default function MenuPage({ embedded = false }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    api.getMenu(activeCategory).then((data) => {
      if (isMounted) {
        setMenuItems(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [activeCategory]);

  return (
    <section className={`section section-bg-light ${!embedded ? 'page-wrapper' : ''}`} id="menu">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Our Menu</span>
          <h2 className="section-title">Handcrafted Beverages &amp; Delicious Treats</h2>
          <p className="section-desc">Handcrafted beverages and delicious treats made fresh daily.</p>
        </div>

        {/* Category Tabs */}
        <div className="menu-categories" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`menu-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-caramel)' }}>
            Loading handcrafted menu items...
          </div>
        ) : (
          <div className="menu-grid">
            {menuItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}


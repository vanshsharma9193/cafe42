/**
 * Full-Stack API Service Layer
 * Easily connects to Express / Python / Nest / Spring backend when ready!
 */
import { MENU_ITEMS } from '../data/menuData';
import { GALLERY_ITEMS } from '../data/galleryData';
import { REVIEWS } from '../data/reviewsData';

const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL || null;

export const api = {
  // Fetch Menu Items
  async getMenu(category = 'all') {
    if (API_BASE_URL) {
      const res = await fetch(`${API_BASE_URL}/api/menu?category=${category}`);
      return res.json();
    }
    // Simulated backend response with network delay
    await new Promise((r) => setTimeout(r, 120));
    if (category === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === category);
  },

  // Fetch Gallery Items
  async getGallery() {
    if (API_BASE_URL) {
      const res = await fetch(`${API_BASE_URL}/api/gallery`);
      return res.json();
    }
    await new Promise((r) => setTimeout(r, 100));
    return GALLERY_ITEMS;
  },

  // Fetch Reviews
  async getReviews() {
    if (API_BASE_URL) {
      const res = await fetch(`${API_BASE_URL}/api/reviews`);
      return res.json();
    }
    await new Promise((r) => setTimeout(r, 100));
    return REVIEWS;
  },

  // Submit Online Order (Pickup)
  async createOrder(orderPayload) {
    if (API_BASE_URL) {
      const res = await fetch(`${API_BASE_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
      return res.json();
    }
    // Simulated backend submission
    await new Promise((r) => setTimeout(r, 600));
    const orderId = 'BH-' + Math.floor(100000 + Math.random() * 900000);
    return {
      success: true,
      orderId,
      message: 'Order created successfully',
      data: orderPayload
    };
  },

  // Submit Table Reservation
  async createReservation(reservationPayload) {
    if (API_BASE_URL) {
      const res = await fetch(`${API_BASE_URL}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationPayload)
      });
      return res.json();
    }
    await new Promise((r) => setTimeout(r, 600));
    const reservationId = 'RES-' + Math.floor(100000 + Math.random() * 900000);
    return {
      success: true,
      reservationId,
      message: 'Table reservation confirmed',
      data: reservationPayload
    };
  }
};


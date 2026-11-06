import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INITIAL_MENU, INITIAL_GALLERY, INITIAL_REVIEWS } from './initialData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'database.json');

class Database {
  constructor() {
    this.data = {
      menu: [...INITIAL_MENU],
      gallery: [...INITIAL_GALLERY],
      reviews: [...INITIAL_REVIEWS],
      orders: [],
      reservations: []
    };
    this.init();
  }

  init() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
        this.data = JSON.parse(fileContent);
      } else {
        this.persist();
      }
    } catch (err) {
      console.warn('Database file init error, falling back to in-memory state:', err.message);
    }
  }

  persist() {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.warn('Could not persist to database.json, memory active:', err.message);
    }
  }

  // --- MENU ---
  getMenu(category) {
    if (!category || category === 'all') {
      return this.data.menu;
    }
    return this.data.menu.filter((item) => item.category === category);
  }

  getMenuItemById(id) {
    return this.data.menu.find((item) => item.id === id);
  }

  addMenuItem(item) {
    this.data.menu.push(item);
    this.persist();
    return item;
  }

  // --- GALLERY ---
  getGallery() {
    return this.data.gallery;
  }

  // --- REVIEWS ---
  getReviews() {
    return this.data.reviews;
  }

  addReview(review) {
    this.data.reviews.unshift(review);
    this.persist();
    return review;
  }

  // --- ORDERS ---
  getOrders() {
    return this.data.orders;
  }

  getOrderById(id) {
    return this.data.orders.find((order) => order.orderId === id);
  }

  addOrder(order) {
    this.data.orders.unshift(order);
    this.persist();
    return order;
  }

  // --- RESERVATIONS ---
  getReservations() {
    return this.data.reservations;
  }

  getReservationById(id) {
    return this.data.reservations.find((res) => res.reservationId === id);
  }

  addReservation(reservation) {
    this.data.reservations.unshift(reservation);
    this.persist();
    return reservation;
  }
}

export const db = new Database();


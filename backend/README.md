# Brew Haven Café - Backend RESTful API

Production-ready Node.js & Express REST API designed for the Brew Haven Café full-stack platform.

---

## 📁 Architecture Overview

```
backend/
├── package.json              # Project dependencies and startup scripts
├── .env                      # Active environment settings
├── .env.example              # Template environment variables
├── server.js                 # Express server configuration, CORS & route mounting
└── src/
    ├── config/
    │   └── index.js          # Centralized environment configuration
    ├── controllers/
    │   ├── menuController.js # Handles menu catalog queries & additions
    │   ├── galleryController.js# Serves gallery imagery
    │   ├── reviewsController.js# Reads and validates customer reviews
    │   ├── ordersController.js # Order intake, validation & reference generation
    │   └── reservationsController.js # Table booking intake & scheduling
    ├── routes/
    │   ├── menuRoutes.js     # /api/menu
    │   ├── galleryRoutes.js  # /api/gallery
    │   ├── reviewsRoutes.js  # /api/reviews
    │   ├── ordersRoutes.js   # /api/orders
    │   └── reservationsRoutes.js # /api/reservations
    ├── middleware/
    │   ├── validator.js      # Input sanitization & format checking
    │   └── errorHandler.js   # Centralized error handler & 404 handler
    ├── data/
    │   ├── initialData.js    # Seed data (coffee, pastries, tea, reviews)
    │   └── db.js             # Persistence manager (local JSON storage with fallback)
    └── utils/
        └── idGenerator.js    # Unique reference code generator
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Run in Development Mode
```bash
npm run dev
```
Server runs at `http://localhost:5000` with Node `--watch` auto-reload.

### 3. Run in Production
```bash
npm start
```

---

## 📡 API Endpoints Reference

### Health Check
- `GET /api/health`
  - Returns server health status, uptime, and timestamp.

### Menu
- `GET /api/menu`
  - Returns complete menu list.
  - Optional Query Parameter: `?category=coffee` | `tea` | `pastries` | `breakfast`
- `GET /api/menu/:id`
  - Retrieve single menu product by ID.
- `POST /api/menu`
  - Create new menu item (`name`, `category`, `price`, `description`, `image`).

### Gallery
- `GET /api/gallery`
  - Returns all café gallery images.

### Reviews
- `GET /api/reviews`
  - Returns customer testimonials.
- `POST /api/reviews`
  - Submit new review (`name`, `role`, `rating`, `comment`).

### Orders (Pickup)
- `GET /api/orders`
  - Admin view of all orders.
- `GET /api/orders/:id`
  - Specific order details.
- `POST /api/orders`
  - Customer order intake.
  - Body:
    ```json
    {
      "customerName": "Eleanor Vance",
      "customerContact": "eleanor@example.com",
      "orderItem": "Café Latte ($5.25)",
      "pickupTime": "In 20 minutes",
      "specialRequests": "Oat milk please"
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "orderId": "BH-782914",
      "message": "Order created successfully",
      "data": { ... }
    }
    ```

### Table Reservations
- `GET /api/reservations`
  - View all table reservations.
- `POST /api/reservations`
  - Body:
    ```json
    {
      "customerName": "Michael Scott",
      "customerContact": "555-019-2831",
      "orderItem": "4 Guests (Cozy Booth)",
      "pickupTime": "Tonight at 7:00 PM",
      "specialRequests": "Near the window"
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "reservationId": "RES-492104",
      "message": "Table reservation confirmed",
      "data": { ... }
    }
    ```


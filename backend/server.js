import express from 'express';
import cors from 'cors';
import { config } from './src/config/index.js';
import menuRoutes from './src/routes/menuRoutes.js';
import galleryRoutes from './src/routes/galleryRoutes.js';
import reviewsRoutes from './src/routes/reviewsRoutes.js';
import ordersRoutes from './src/routes/ordersRoutes.js';
import reservationsRoutes from './src/routes/reservationsRoutes.js';
import { errorHandler, notFoundHandler } from './src/middleware/errorHandler.js';

const app = express();

// --- 1. CORS Configuration ---
const allowedOrigins = [
  config.frontendUrl,
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5173',
  'http://127.0.0.1:5173'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin || allowedOrigins.includes(origin) || origin.startsWith('http://localhost:')) {
        callback(null, true);
      } else {
        callback(null, true); // Dev permissive
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// --- 2. Request Parsers ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- 3. Request Logger Middleware ---
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// --- 4. System Health Check ---
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'Brew Haven Café Backend API',
    version: '1.0.0',
    uptime: `${process.uptime().toFixed(1)}s`,
    timestamp: new Date().toISOString()
  });
});

// --- 5. Mount API Routes ---
app.use('/api/menu', menuRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/reservations', reservationsRoutes);

// --- 6. 404 & Centralized Error Handlers ---
app.use(notFoundHandler);
app.use(errorHandler);

// --- 7. Server Listener ---
const server = app.listen(config.port, () => {
  console.log(`=================================================`);
  console.log(`☕ Brew Haven Backend API Server Running!`);
  console.log(`🚀 Port: ${config.port}`);
  console.log(`🌐 Base URL: http://localhost:${config.port}/api`);
  console.log(`💓 Health:   http://localhost:${config.port}/api/health`);
  console.log(`📦 Menu:     http://localhost:${config.port}/api/menu`);
  console.log(`=================================================`);
});

// Graceful Shutdown
const handleGracefulShutdown = () => {
  console.log('\nClosing HTTP server gracefully...');
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
};

process.on('SIGINT', handleGracefulShutdown);
process.on('SIGTERM', handleGracefulShutdown);

export default app;


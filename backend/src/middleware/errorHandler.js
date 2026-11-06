export const errorHandler = (err, req, res, next) => {
  console.error('[API Error]:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    status: 404,
    message: `API Route not found: [${req.method}] ${req.originalUrl}`
  });
};


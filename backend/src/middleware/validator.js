export const validateOrder = (req, res, next) => {
  const { customerName, customerContact, pickupTime } = req.body;

  if (!customerName || typeof customerName !== 'string' || customerName.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Customer name must be at least 2 characters.'
    });
  }

  const contact = customerContact?.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  if (!contact || (!emailRegex.test(contact) && !phoneRegex.test(contact.replace(/\s+/g, '')))) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Please provide a valid email address or phone number.'
    });
  }

  if (!pickupTime || typeof pickupTime !== 'string' || !pickupTime.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Please specify your preferred pickup time.'
    });
  }

  next();
};

export const validateReservation = (req, res, next) => {
  const { customerName, customerContact, pickupTime } = req.body;

  if (!customerName || typeof customerName !== 'string' || customerName.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Customer name must be at least 2 characters.'
    });
  }

  const contact = customerContact?.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  if (!contact || (!emailRegex.test(contact) && !phoneRegex.test(contact.replace(/\s+/g, '')))) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Please provide a valid email address or phone number.'
    });
  }

  if (!pickupTime || typeof pickupTime !== 'string' || !pickupTime.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Please specify your reservation date and time.'
    });
  }

  next();
};

export const validateReview = (req, res, next) => {
  const { name, rating, comment } = req.body;

  if (!name || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Reviewer name is required.'
    });
  }

  const numRating = Number(rating);
  if (!numRating || numRating < 1 || numRating > 5) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Rating must be a number between 1 and 5.'
    });
  }

  if (!comment || comment.trim().length < 5) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: Review comment must be at least 5 characters.'
    });
  }

  next();
};


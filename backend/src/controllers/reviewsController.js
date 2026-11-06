import { db } from '../data/db.js';
import { generateId } from '../utils/idGenerator.js';

export const getReviews = (req, res, next) => {
  try {
    const reviews = db.getReviews();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

export const createReview = (req, res, next) => {
  try {
    const { name, role, rating, comment, avatar } = req.body;
    const newReview = {
      id: generateId('REV'),
      name: name.trim(),
      role: role?.trim() || 'Verified Customer',
      rating: Number(rating) || 5,
      avatar: avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      comment: comment.trim(),
      createdAt: new Date().toISOString()
    };
    const created = db.addReview(newReview);
    res.status(201).json({ success: true, message: 'Review added successfully', review: created });
  } catch (error) {
    next(error);
  }
};


import { db } from '../data/db.js';

export const getGalleryItems = (req, res, next) => {
  try {
    const items = db.getGallery();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};


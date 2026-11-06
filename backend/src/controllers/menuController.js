import { db } from '../data/db.js';

export const getMenuItems = (req, res, next) => {
  try {
    const { category } = req.query;
    const items = db.getMenu(category);
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

export const getMenuItemById = (req, res, next) => {
  try {
    const { id } = req.params;
    const item = db.getMenuItemById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Menu item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

export const createMenuItem = (req, res, next) => {
  try {
    const { name, category, price, description, image } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ success: false, message: 'Name, price, and category are required' });
    }
    const newItem = {
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name,
      category,
      price: price.startsWith('$') ? price : `$${price}`,
      numericPrice: parseFloat(price.replace('$', '')),
      rating: 5.0,
      reviewCount: 1,
      description: description || '',
      image: image || 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
      available: true
    };
    const created = db.addMenuItem(newItem);
    res.status(201).json({ success: true, item: created });
  } catch (error) {
    next(error);
  }
};


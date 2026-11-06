import { db } from '../data/db.js';
import { generateId } from '../utils/idGenerator.js';

export const getOrders = (req, res, next) => {
  try {
    const orders = db.getOrders();
    res.status(200).json({ success: true, count: orders.length, orders });
  } catch (error) {
    next(error);
  }
};

export const getOrderById = (req, res, next) => {
  try {
    const { id } = req.params;
    const order = db.getOrderById(id);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }
    res.status(200).json({ success: true, order });
  } catch (error) {
    next(error);
  }
};

export const createOrder = (req, res, next) => {
  try {
    const { customerName, customerContact, orderItem, pickupTime, specialRequests } = req.body;
    const orderId = generateId('BH');

    const newOrder = {
      orderId,
      customerName: customerName.trim(),
      customerContact: customerContact.trim(),
      orderItem: orderItem?.trim() || "Barista's Choice",
      pickupTime: pickupTime.trim(),
      specialRequests: specialRequests?.trim() || '',
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    const saved = db.addOrder(newOrder);

    res.status(201).json({
      success: true,
      orderId,
      message: 'Order created successfully and queued for barista preparation.',
      data: saved
    });
  } catch (error) {
    next(error);
  }
};


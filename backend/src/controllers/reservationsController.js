import { db } from '../data/db.js';
import { generateId } from '../utils/idGenerator.js';

export const getReservations = (req, res, next) => {
  try {
    const reservations = db.getReservations();
    res.status(200).json({ success: true, count: reservations.length, reservations });
  } catch (error) {
    next(error);
  }
};

export const getReservationById = (req, res, next) => {
  try {
    const { id } = req.params;
    const reservation = db.getReservationById(id);
    if (!reservation) {
      return res.status(404).json({ success: false, message: 'Reservation not found' });
    }
    res.status(200).json({ success: true, reservation });
  } catch (error) {
    next(error);
  }
};

export const createReservation = (req, res, next) => {
  try {
    const { customerName, customerContact, orderItem, pickupTime, specialRequests } = req.body;
    const reservationId = generateId('RES');

    const newReservation = {
      reservationId,
      customerName: customerName.trim(),
      customerContact: customerContact.trim(),
      partySizeOrArea: orderItem?.trim() || '2 Guests (Standard Seating)',
      reservationTime: pickupTime.trim(),
      specialRequests: specialRequests?.trim() || '',
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    const saved = db.addReservation(newReservation);

    res.status(201).json({
      success: true,
      reservationId,
      message: 'Table reservation confirmed. A cozy corner is reserved for your visit.',
      data: saved
    });
  } catch (error) {
    next(error);
  }
};


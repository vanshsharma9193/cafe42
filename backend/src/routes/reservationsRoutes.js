import { Router } from 'express';
import { getReservations, getReservationById, createReservation } from '../controllers/reservationsController.js';
import { validateReservation } from '../middleware/validator.js';

const router = Router();

router.get('/', getReservations);
router.get('/:id', getReservationById);
router.post('/', validateReservation, createReservation);

export default router;


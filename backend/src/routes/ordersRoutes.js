import { Router } from 'express';
import { getOrders, getOrderById, createOrder } from '../controllers/ordersController.js';
import { validateOrder } from '../middleware/validator.js';

const router = Router();

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', validateOrder, createOrder);

export default router;


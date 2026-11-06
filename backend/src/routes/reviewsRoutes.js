import { Router } from 'express';
import { getReviews, createReview } from '../controllers/reviewsController.js';
import { validateReview } from '../middleware/validator.js';

const router = Router();

router.get('/', getReviews);
router.post('/', validateReview, createReview);

export default router;


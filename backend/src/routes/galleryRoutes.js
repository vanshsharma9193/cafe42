import { Router } from 'express';
import { getGalleryItems } from '../controllers/galleryController.js';

const router = Router();

router.get('/', getGalleryItems);

export default router;


import { Router } from 'express';
import { getMenuItems, getMenuItemById, createMenuItem } from '../controllers/menuController.js';

const router = Router();

router.get('/', getMenuItems);
router.get('/:id', getMenuItemById);
router.post('/', createMenuItem);

export default router;


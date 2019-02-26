import { Router } from 'express';

// menu Controller

import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.fetchAllMenu);
router.post('/', MenuController.addAMenu);
router.get('/:id', MenuController.getSingleMenu);

export default router;
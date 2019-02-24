import { Router } from 'express';

// menu Controller

import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.fetchAllMeals);
router.post('/', MenuController.addAMeal);
router.get('/:id', MenuController.getSingleMeal);

export default router;
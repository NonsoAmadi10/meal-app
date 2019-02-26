import { Router } from 'express';

// controller
import MealController from '../controllers/meal.controller';


const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.getSingleMeal);
router.put('/:id', MealController.patchMeal);
router.delete('/:id', MealController.deleteMeal);

export default router;
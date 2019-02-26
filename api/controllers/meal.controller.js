import MealService from '../Services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
  },
  addAMeal(req, res) {
     if (req.body.name === '' || req.body.price === '' || req.body.price === '') {
       return res.json({ 
         status: 'Error',
         Error: 'Empty body request'
       }).status(404);
     }
     else {
      const newMeal = req.body;
      const createdMeal = MealService.addMeal(newMeal);
      return res.json({
        status: 'success',
        data: createdMeal
      }).status(201);
     }
    
  },
  getSingleMeal(req, res) {
    const id = req.params.id;
    const foundMeal = MealService.getAMeal(id);
    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);
  },
  patchMeal(req, res) {
      const { id } = req.params;
      const data = req.body;
      const updated = MealService.UpdateMeal(id, data);
      return res.json({
          status: 'success',
          data: updated
      }).status(200);
  },
  deleteMeal(req, res) {
    const { id } = req.params;
    const deleted = MealService.DeleteMeal(id);
   if(!deleted) return res.json({}).status(500);
   return res.json({
    status: 'deleted',
    data: deleted
}).status(203);
  }

};

export default MealController;
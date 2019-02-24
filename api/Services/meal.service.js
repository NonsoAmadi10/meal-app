import dummyData from '../utils/meal.data';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return validMeals;
  },
  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },
  getAMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id == id);
    return meal || {};
  },
  UpdateMeal(id, data) {
    const meal = dummyData.meals.find(item => item.id == id);
    const mealIndex = dummyData.meals.indexOf(meal);
    const newData = {
      id: meal.id,
      price: data.price,
      name: data.name,
      size: data.size
    }

    const updated = dummyData.meals.splice(mealIndex, 1, newData);
    return updated;
  },
  DeleteMeal(id) {
    const deleteOrder = dummyData.meals.find(item => item.id == id);
        const deleteIndex = dummyData.meals.indexOf(deleteOrder);
        const removeOrder = dummyData.meals.splice(deleteIndex, 1);
        return removeOrder || {};
  }
};

export default MealService;
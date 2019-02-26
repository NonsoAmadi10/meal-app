import dummyData from '../utils/menu.data';
import Menu from '../models/menu.model';

const MenuService = {
  fetchAllMenu() {
    const validMeals = dummyData.map((meal) => {
      const newMeal = new Menu();
      newMeal.id = meal.id;
      newMeal.list = meal.list;
      newMeal.section = meal.section;
      return newMeal;
    });
    return validMeals;
  },
  addMenu(meal) {
    const mealLength = dummyData.length;
    const lastId = dummyData[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.push(meal);
    return meal;
  },
  getAMenu(id) {
    const meals = dummyData.find(meal => meal.id == id);
    return meals || {};
  },

  
};

export default MenuService;
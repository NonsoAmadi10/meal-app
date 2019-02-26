import MenuService from '../Services/menu.service';

const MenuController = {
    fetchAllMeals(req, res) {
        const allMeals = MenuService.fetchAllMeals();
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
    else{
       const newMeal = req.body;
       const createdMeal = MenuService.addMeal(newMeal);
       return res.json({
            status: 'success',
            data: createdMeal
        }).status(201);
    }

    },
    getSingleMeal(req, res) {
        const id = req.params.id;
        const foundMeal = MenuService.getAMeal(id);
        return res.json({
            status: 'success',
            data: foundMeal
        }).status(200);
    }
};

export default MenuController;

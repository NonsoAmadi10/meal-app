import OrderService from '../Services/orders.service';

const OrderController = {
  fetchAllOrders(req, res) {
    const allorder = OrderService.fetchAllOrder();
    return res.json({
      status: 'success',
      data: allorder
    }).status(200);
  },
  addOrder(req, res) {       
    const newMeal = req.body;
    const createdOrder = OrderService.addMeal(newMeal);
    if (!createdOrder) {
      return res.json({
        status: 404,
        Error: 'Error empty data'
      }).status(404);
    } else {
      return res.json({
          status: 'success',
          data: createdOrder
      }).status(201);
    } 
    },
    getSingleOrder(req, res) {
    const id = req.params.id;
    const foundOrder = OrderService.getAMeal(id);
    return res.json({
      status: 'success',
      data: foundOrder
    }).status(200);
  },
  patchMeal(req, res) {
    const { id } = req.params;
    const data = req.body;
    const updated = OrderService.UpdateMeal(id, data);
    return res.json({
      status: 'success',
      data: updated
    }).status(200);
  },
  deleteOrder(req, res) {
    const { id } = req.params;
    const deleted = OrderService.DeleteMeal(id);
    return res.json({
      status: 'success',
      data: deleted
    }).status(203);
  }
};

export default OrderController;

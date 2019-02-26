import dummyData from '../utils/orders.data';
import Orders from '../models/orders.model';

const OrderService = {
  fetchAllOrder() {
    const Order = dummyData.map((meal) => {
      const newOrder = new Orders();
      newOrder.id = meal.id;
      newOrder.customer = meal.customer;
      newOrder.meal = meal.meal;
      newOrder.price = meal.price;
      newOrder.status = meal.status;
      return newOrder;
    });
    return Order;
  },
  addMeal(order) {
    if (order.customer == '' || order.meal == '' || order.price == '' || order.status == '') return false;
    const mealLength = dummyData.length;
    const lastId = dummyData[mealLength - 1].id;
    const newId = lastId + 1;
    order.id = newId;
    dummyData.push(order);
    return order;
  },
  getAMeal(id) {
    const order = dummyData.find(meal => meal.id == id);
    return order || {};
  },
  UpdateMeal(id, data) {
    const order = dummyData.find(item => item.id == id);
    const mealIndex = dummyData.indexOf(order);
    const newData = {
      id: order.id,
      customer: data.customer,
      meal: data.meal,
      price: data.price,
      status: data.status
    }
    
    const updated = dummyData.splice(mealIndex, 1, newData);
    return newData;
  },
  DeleteMeal(id) {
    const deleteOrder = dummyData.find(item => item.id == id);
    const deleteIndex = dummyData.indexOf(deleteOrder);
    if (deleteIndex == -1) throw Error;
    const removeOrder = dummyData.splice(deleteIndex, 1);
    return removeOrder || {};
  }
};

export default OrderService;

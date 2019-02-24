import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';
import OrderRoutes from './routes/order.route';

const app = express();
const port = 9002;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.send('The API is working');
});

// handle
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', OrderRoutes);
app.listen(port, console.log(`Server is running on ${port}`));

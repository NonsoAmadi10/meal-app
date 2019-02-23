import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route';

const app = express();
const port = 9002;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.send('The API is working');
});

// handle
app.use('/api/v1/meals', mealRoutes);

app.listen(port, console.log(`Server is running on ${port}`));

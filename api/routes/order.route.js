import { Router } from 'express';

import OrderController from '../controllers/order.controller';


const router = Router();

router.get('/', OrderController.fetchAllOrders);
router.post('/', OrderController.addOrder);
router.get('/:id', OrderController.getSingleOrder);
router.put('/:id', OrderController.patchOrder);
router.delete('/:id', OrderController.deleteOrder);

export default router;
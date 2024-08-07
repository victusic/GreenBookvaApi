import { Router } from 'express';
const router = Router();
const OrderController = require('../controllers/order.controller');

router.post('/order', OrderController.postOrder);
router.patch('/order/product/count/:id', OrderController.patchCountProduct);

module.exports = router;

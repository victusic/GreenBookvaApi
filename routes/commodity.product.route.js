const Router = require('express');
const router = new Router();
const commodityProductController = require('../controllers/commodity.product.controller');

router.get('/product/new', commodityProductController.getProductNew);
router.get('/product/bestseller', commodityProductController.getProductBestseller);
router.get('/product/best', commodityProductController.getProductBest);
router.get('/product/types', commodityProductController.getProductTypes);
router.get('/product', commodityProductController.getProduct);
//router.get('/min/product', commodityProductController.getProductMin);
router.get('/list/product', commodityProductController.getProductList);
router.get('/info/list/product', commodityProductController.getInfoProductList);
router.get('/one/product/:id', commodityProductController.getProductOne);
router.get('/one/product/:id/images', commodityProductController.getProductOneImages);
router.get('/one/product/:id/images/list', commodityProductController.getProductOneImagesList);
router.get('/one/product/:id/reviews', commodityProductController.getProductOneReviews);

module.exports = router;

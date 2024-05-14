const Router = require('express');
const router = new Router()
const Types_ProductsController = require('../controllers/types_products.controller');

router.get('/category', Types_ProductsController.getCategory);
router.get('/subcategory', Types_ProductsController.getSubcategory);
router.get('/type/name', Types_ProductsController.getTypeName);
router.get('/category/name', Types_ProductsController.getCategoryName);
router.get('/subcategory/name', Types_ProductsController.getSubcategoryName);
router.get('/type/category/name', Types_ProductsController.getTypeByCategory);
router.get('/type/subcategory/name', Types_ProductsController.getTypeBySubcategory);
router.get('/category/subcategory/name', Types_ProductsController.getCategoryBySybcategory);
router.get('/type/product', Types_ProductsController.getTypeByProduct);
router.get('/category/product', Types_ProductsController.getCategoryByProduct);
router.get('/subcategory/product', Types_ProductsController.getSubcategoryByProduct);
module.exports = router
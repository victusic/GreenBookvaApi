import { Router } from 'express';
const router = Router();
const TypesProductsController = require('../controllers/typesProducts.controller');

router.get('/category', TypesProductsController.getCategory);
router.get('/subcategory', TypesProductsController.getSubcategory);
router.get('/type/name', TypesProductsController.getTypeName);
router.get('/category/name', TypesProductsController.getCategoryName);
router.get('/subcategory/name', TypesProductsController.getSubcategoryName);
router.get('/type/category/name', TypesProductsController.getTypeByCategory);
router.get(
  '/type/subcategory/name',
  TypesProductsController.getTypeBySubcategory,
);
router.get(
  '/category/subcategory/name',
  TypesProductsController.getCategoryBySubcategory,
);
router.get('/type/product', TypesProductsController.getTypeByProduct);
router.get('/category/product', TypesProductsController.getCategoryByProduct);
router.get(
  '/subcategory/product',
  TypesProductsController.getSubcategoryByProduct,
);
module.exports = router;

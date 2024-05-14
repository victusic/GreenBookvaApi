const Router = require('express');
const router = new Router()
const profileController = require('../controllers/profile.controller');

router.get('/profile/:id', profileController.getProfile);
router.get('/profile/:id/cards', profileController.getCards);
router.get('/favorites/:id', profileController.getFavorites);
router.post('/favorites', profileController.postFavorites);
router.delete('/favorites', profileController.delFavorites);
router.delete('/favorites/:id', profileController.cleanFavorites);
router.get('/favorites/:id/check', profileController.getFavoritesCheck);
router.get('/favorites/:id/count', profileController.getFavoritesCount);
router.get('/shopping_cart/:id', profileController.getShopping_cart);
router.get('/shopping_cart/:id/check', profileController.getShopping_cartCheck);
router.post('/shopping_cart', profileController.postShopping_cart);
router.delete('/shopping_cart', profileController.delShopping_cart);
router.delete('/shopping_cart/:id', profileController.cleanShopping_cart);
router.get('/shopping_cart/:id/count', profileController.getShopping_cartCount);
router.get('/orders/:id', profileController.getOrders);
router.get('/order/:code', profileController.getOrder);
router.get('/card/:id', profileController.getCard);
router.post('/card', profileController.postCard);
router.patch('/card/:id', profileController.patchCard);
router.delete('/card/:id', profileController.deleteCard);
router.patch('/profile/:id', profileController.patchProfile);
router.delete('/profile/:id', profileController.deleteProfile);
router.delete('/profile/:id/full', profileController.deleteProfileFull);
router.patch('/profile/:id/points', profileController.patchPoints);

module.exports = router
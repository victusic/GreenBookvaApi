import { Router } from 'express';
const router = Router();
const MainPageController = require('../controllers/mainPage.controller');

router.get('/recommendation_banner', MainPageController.getBanners);
router.get('/promotions_slider', MainPageController.getPromotionsSlider);
router.get('/promotions', MainPageController.getPromotions);
router.get('/promotions/:id', MainPageController.getPromotion);

module.exports = router;

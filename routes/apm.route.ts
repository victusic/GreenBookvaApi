import { Router } from 'express';
const router = Router();

const APMController = require('../controllers/apm.controller');

router.get('/author/:id', APMController.getAuthor);
router.get('/author/:id/slides', APMController.getAuthorSlides);
router.get('/author/:id/images', APMController.getAuthorImages);
router.get('/publisher/:id', APMController.getPublisher);
router.get('/publisher/:id/slides', APMController.getPublisherSlides);
router.get('/manufacturer/:id', APMController.getManufacturer);
router.get('/manufacturer/:id/slides', APMController.getManufacturerSlides);

module.exports = router;

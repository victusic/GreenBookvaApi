import { Request, Response } from 'express';
import {
  FullPromotionDTO,
  PromotionSlideDTO,
  Query,
  RecommendationBannerDTO,
  ShortPromotionDTO,
} from '../types';
const db = require('../db');

class MainPageController {
  async getBanners(req: Request, res: Response) {
    const banners: Query<RecommendationBannerDTO> = await db.query(
      'SELECT image, product_id FROM recommendation_banner ORDER BY RANDOM() LIMIT 1',
    );
    res.json(banners.rows);
  }
  async getPromotionsSlider(req: Request, res: Response) {
    const sliders: Query<PromotionSlideDTO[]> = await db.query(
      'SELECT id, banner FROM promotion ORDER BY RANDOM() LIMIT 7',
    );
    res.json(sliders.rows);
  }
  async getPromotions(req: Request, res: Response) {
    const promotions: Query<ShortPromotionDTO[]> = await db.query(
      'SELECT id, name, duration, banner, short_description FROM promotion',
    );
    res.json(promotions.rows);
  }
  async getPromotion(req: Request, res: Response) {
    const id = req.params.id;
    const promotion: Query<FullPromotionDTO[]> = await db.query(
      'SELECT id, name, duration, banner, full_description FROM promotion WHERE id = $1',
      [id],
    );
    res.json(promotion.rows);
  }
}

module.exports = new MainPageController();

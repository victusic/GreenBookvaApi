const db = require('../db');

class Main_PageController {
  async getBanners(req, res) {
    const banners = await db.query(
      'SELECT image, product_id FROM recommendation_banner ORDER BY RANDOM() LIMIT 1',
    );
    res.json(banners.rows);
  }
  async getPromotionsSlider(req, res) {
    const sliders = await db.query('SELECT id, banner FROM promotion ORDER BY RANDOM() LIMIT 7');
    res.json(sliders.rows);
  }
  async getPromotions(req, res) {
    const promotions = await db.query('SELECT id, name, duration, banner, short_description FROM promotion');
    res.json(promotions.rows);
  }
  async getPromotion(req, res) {
    const id = req.params.id;
    const promotion = await db.query(
      'SELECT id, name, duration, banner, full_description FROM promotion WHERE id = $1',
      [id],
    );
    res.json(promotion.rows);
  }
}

module.exports = new Main_PageController();

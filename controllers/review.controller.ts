import { Request, Response } from 'express';
import { Query, ReviewDTO } from '../types';
const db = require('../db');

class ReviewController {
  async GetReview(req: Request, res: Response) {
    const id = req.params.id;
    const review: Query<ReviewDTO> = await db.query(
      'SELECT * FROM review WHERE id = $1',
      [id],
    );
    res.json(review.rows);
  }
  async PostReview(req: Request, res: Response) {
    const { productId, accountId, reviewText, header, evaluation } = req.body;
    const review: Query<ReviewDTO> = await db.query(
      'INSERT INTO review (product_id, account_id, review_text, header, evaluation) values ($1, $2, $3, $4, $5) RETURNING *',
      [productId, accountId, reviewText, header, evaluation],
    );
    res.json(review.rows);
  }
  async PatchReview(req: Request, res: Response) {
    const id = req.params.id;
    const { reviewText, header, evaluation } = req.body;
    const review = await db.query(
      'UPDATE review SET review_text = $1, header = $2, evaluation = $3 WHERE id = $4 RETURNING *',
      [reviewText, header, evaluation, id],
    );
    res.json(review.rows);
  }
  async DeleteReview(req: Request, res: Response) {
    const id = req.params.id;
    const review: Query<never> = await db.query(
      'DELETE FROM review WHERE id = $1',
      [id],
    );
    res.json(review.rows);
  }
}

module.exports = new ReviewController();

import { Request, Response } from 'express';
import { OrderDTO, ProductDTO, Query } from '../types';
const db = require('../db');

class OrderController {
  async postOrder(req: Request, res: Response) {
    const { productId, accountId, orderDate, orderCode } = req.body;
    const order: Query<OrderDTO[]> = await db.query(
      'INSERT INTO order_list (product_id, account_id, order_date, order_code) VALUES ($1, $2, $3, $4) RETURNING *',
      [productId, accountId, orderDate, orderCode],
    );
    res.json(order.rows);
  }
  async patchCountProduct(req: Request, res: Response) {
    const id = req.params.id;
    const product = await db.query('SELECT count FROM product WHERE id = $1', [
      id,
    ]);
    const newCount = product.rows[0].count - 1;
    const order: Query<ProductDTO[]> = await db.query(
      'UPDATE product SET count = $1 WHERE id = $2 RETURNING *, badge_sales_leder AS badge_sales_leader, autor_id AS author_id',
      [newCount, id],
    );
    res.json(order.rows);
  }
}

module.exports = new OrderController();

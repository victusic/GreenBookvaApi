import { Request, Response } from 'express';
import {
  ProductCategoryDTO,
  ProductCategoryNameDTO,
  ProductSubcategoryDTO,
  ProductSubcategoryNameDTO,
  ProductTypeNameDTO,
  Query,
} from '../types';
const db = require('../db');

class TypesProductsController {
  async getCategory(req: Request, res: Response) {
    const id = req.query.type;
    const category: Query<ProductCategoryDTO[]> = await db.query(
      'SELECT * FROM category WHERE id IN (SELECT category_id FROM type_category_subcategory WHERE type_id = $1)',
      [id],
    );
    res.json(category.rows);
  }
  async getSubcategory(req: Request, res: Response) {
    const id = req.query.category;
    const subcategory: Query<ProductSubcategoryDTO[]> = await db.query(
      'SELECT * FROM subcategory WHERE id IN (SELECT subcategory_id FROM type_category_subcategory WHERE category_id = $1)',
      [id],
    );
    res.json(subcategory.rows);
  }
  async getTypeName(req: Request, res: Response) {
    const id = req.query.type;
    const type: Query<ProductTypeNameDTO[]> = await db.query(
      'SELECT name FROM product_type WHERE id = $1',
      [id],
    );
    res.json(type.rows);
  }
  async getCategoryName(req: Request, res: Response) {
    const id = req.query.category;
    const category: Query<ProductCategoryNameDTO[]> = await db.query(
      'SELECT name FROM category WHERE id = $1',
      [id],
    );
    res.json(category.rows);
  }
  async getSubcategoryName(req: Request, res: Response) {
    const id = req.query.subcategory;
    const subcategory: Query<ProductSubcategoryNameDTO[]> = await db.query(
      'SELECT name FROM subcategory WHERE id = $1',
      [id],
    );
    res.json(subcategory.rows);
  }
  async getTypeByCategory(req: Request, res: Response) {
    const id = req.query.category;
    const type: Query<ProductTypeNameDTO[]> = await db.query(
      'SELECT * FROM product_type WHERE id IN (SELECT type_id FROM type_category_subcategory WHERE category_id = $1)',
      [id],
    );
    res.json(type.rows);
  }
  async getTypeBySubcategory(req: Request, res: Response) {
    const id = req.query.subcategory;
    const type: Query<ProductTypeNameDTO[]> = await db.query(
      'SELECT * FROM product_type WHERE id IN (SELECT type_id FROM type_category_subcategory WHERE subcategory_id = $1)',
      [id],
    );
    res.json(type.rows);
  }
  async getCategoryBySubcategory(req: Request, res: Response) {
    const id = req.query.subcategory;
    const category: Query<ProductCategoryDTO[]> = await db.query(
      'SELECT * FROM category WHERE id IN (SELECT category_id FROM type_category_subcategory WHERE subcategory_id = $1)',
      [id],
    );
    res.json(category.rows);
  }
  async getTypeByProduct(req: Request, res: Response) {
    const id = req.query.product;
    const type = await db.query(
      'SELECT * FROM product_type WHERE id IN (SELECT type_id FROM product WHERE id = $1)',
      [id],
    );
    res.json(type.rows);
  }
  async getCategoryByProduct(req: Request, res: Response) {
    const id = req.query.product;
    const category = await db.query(
      'SELECT * FROM category WHERE id IN (SELECT category_id FROM product WHERE id = $1)',
      [id],
    );
    res.json(category.rows);
  }
  async getSubcategoryByProduct(req: Request, res: Response) {
    const id = req.query.product;
    const subcategory = await db.query(
      'SELECT * FROM subcategory WHERE id IN (SELECT subcategory_id FROM product WHERE id = $1)',
      [id],
    );
    res.json(subcategory.rows);
  }
}

module.exports = new TypesProductsController();

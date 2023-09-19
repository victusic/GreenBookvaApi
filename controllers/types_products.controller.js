const db = require('../db');

class Types_ProductsController {
    async getCategory(req, res){
        const id = req.query.type;
        const category = await db.query("SELECT * FROM category WHERE id IN (SELECT category_id FROM type_category_subcategory WHERE type_id = $1)", [id]);
        res.json(category.rows);
    }
    async getSubcategory(req, res){
        const id = req.query.category;
        const subcategory = await db.query("SELECT * FROM subcategory WHERE id IN (SELECT subcategory_id FROM type_category_subcategory WHERE category_id = $1)", [id]);
        res.json(subcategory.rows);
    }
    async getTypeName(req, res){
        const id = req.query.type;
        const type = await db.query("SELECT name FROM product_type WHERE id = $1", [id]);
        res.json(type.rows);
    }
    async getCategoryName(req, res){
        const id = req.query.category;
        const category = await db.query("SELECT name FROM category WHERE id = $1", [id]);
        res.json(category.rows);
    }
    async getSubcategoryName(req, res){
        const id = req.query.subcategory;
        const subcategory = await db.query("SELECT name FROM subcategory WHERE id = $1", [id]);
        res.json(subcategory.rows);
    }
    async getTypeByCategory(req, res){
        const id = req.query.category;
        const type = await db.query("SELECT * FROM product_type WHERE id IN (SELECT type_id FROM type_category_subcategory WHERE category_id = $1)", [id]);
        res.json(type.rows);
    }
    async getTypeBySubcategory(req, res){
        const id = req.query.subcategory;
        const type = await db.query("SELECT * FROM product_type WHERE id IN (SELECT type_id FROM type_category_subcategory WHERE subcategory_id = $1)", [id]);
        res.json(type.rows);
    }
    async getCategoryBySybcategory(req, res){
        const id = req.query.subcategory;
        const category = await db.query("SELECT * FROM category WHERE id IN (SELECT category_id FROM type_category_subcategory WHERE subcategory_id = $1)", [id]);
        res.json(category.rows);
    }
    async getTypeByProduct(req, res){
        const id = req.query.product;
        const type = await db.query("SELECT * FROM product_type WHERE id IN (SELECT type_id FROM product WHERE id = $1)", [id]);
        res.json(type.rows);
    }
    async getCategoryByProduct(req, res){
        const id = req.query.product;
        const category = await db.query("SELECT * FROM category WHERE id IN (SELECT category_id FROM product WHERE id = $1)", [id]);
        res.json(category.rows);
    }
    async getSubcategoryByProduct(req, res){
        const id = req.query.product;
        const subcategory = await db.query("SELECT * FROM subcategory WHERE id IN (SELECT subcategory_id FROM product WHERE id = $1)", [id]);
        res.json(subcategory.rows);
    }
}

module.exports = new Types_ProductsController()
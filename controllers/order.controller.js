const db = require('../db');

class OrderController {
    async postOrder(req, res){
        const {product_id, account_id, order_date, order_code} = req.body; 
        const order = await db.query("INSERT INTO order_list (product_id, account_id, order_date, order_code) VALUES ($1, $2, $3, $4) RETURNING *", [product_id, account_id, order_date, order_code]);
        res.json(order.rows);
    }
    async patchCountProduct(req, res){
        const id = req.params.id;
        const product = await db.query("SELECT count FROM product WHERE id = $1", [id]);
        const newCount = (product.rows[0].count) - 1;
        const order = await db.query("UPDATE product SET count = $1 WHERE id = $2 RETURNING *", [newCount, id]);
        res.json(order.rows);
    }
}

module.exports = new OrderController()
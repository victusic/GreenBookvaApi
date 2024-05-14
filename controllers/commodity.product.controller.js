const db = require('../db');

async function getProductByCategory(category) {
  const product = await db.query(
    'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE category_id = $1 ORDER BY RANDOM() LIMIT 12',
    [category],
  );
  return product.rows;
}

class commodityProductController {
  async getProductNew(req, res) {
    const product = await db.query(
      "SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE type_id = 1 AND year_of_publication = '2023' ORDER BY RANDOM() LIMIT 12",
    );
    res.json(product.rows);
  }
  async getProductBestseller(req, res) {
    const product = await db.query(
      'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE type_id = 1 AND badge_sales_leder = true ORDER BY RANDOM() LIMIT 12',
    );
    res.json(product.rows);
  }
  async getProductBest(req, res) {
    const product = await db.query(
      'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE type_id = 1 AND (SELECT slide_id FROM autor_slide WHERE autor_slide.autor_id = product.autor_id ORDER BY RANDOM() LIMIT 1) != 73 ORDER BY RANDOM() LIMIT 12',
    );
    res.json(product.rows);
  }
  async getProduct(req, res) {
    const category = req.query.category;
    const subcategory = req.query.subcategory;
    const author = req.query.author;
    const manufacturer = req.query.manufacturer;
    const publisher = req.query.publisher;
    const promotion = req.query.promotion;
    const no_promotion = req.query.no_promotion;

    if (category) {
      const product = await db.query(
        'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE category_id = $1 ORDER BY RANDOM() LIMIT 12',
        [category],
      );
      res.json(product.rows);
    }
    if (subcategory) {
      const product = await db.query(
        'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE subcategory_id = $1 ORDER BY RANDOM() LIMIT 12',
        [subcategory],
      );
      res.json(product.rows);
    }
    if (author) {
      const product = await db.query(
        'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE autor_id = $1 ORDER BY RANDOM() LIMIT 12',
        [author],
      );
      res.json(product.rows);
    }
    if (manufacturer) {
      const product = await db.query(
        'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE manufacturer_id = $1 ORDER BY RANDOM() LIMIT 12',
        [manufacturer],
      );
      res.json(product.rows);
    }
    if (publisher) {
      const product = await db.query(
        'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE publisher_id = $1 ORDER BY RANDOM() LIMIT 12',
        [publisher],
      );
      res.json(product.rows);
    }
    if (promotion) {
      const product = await db.query(
        'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE promotion_id = $1 ORDER BY RANDOM() LIMIT 12',
        [promotion],
      );
      res.json(product.rows);
    }
    if (no_promotion) {
      const product = await db.query(
        'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE promotion_id != $1 ORDER BY RANDOM() LIMIT 12',
        [no_promotion],
      );
      res.json(product.rows);
    }
  }
  async getProductMin(req, res) {
    const category = req.query.category;
    const product = await db.query(
      'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE category_id = $1 ORDER BY RANDOM() LIMIT 10',
      [category],
    );
    res.json(product.rows);
  }
  async getProductList(req, res) {
    const limit = req.query.limit;
    const page = req.query.page;

    const sort = req.query.sort;
    const stock = req.query.stock;

    const category = req.query.category;
    const subcategory = req.query.subcategory;

    const discount = req.query.discount;
    const sales_leader = req.query.sales_leader;
    const novelty = req.query.novelty;

    const author = req.query.author;
    const manufacturer = req.query.manufacturer;
    const publisher = req.query.publisher;

    const binding = req.query.binding;
    const min_price = req.query.min_price;
    const max_price = req.query.max_price;

    let tx_query_resp =
      'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review FROM product WHERE';

    let tx_query = '';

    if (category) {
      tx_query += ' category_id = ' + category;
    }

    if (subcategory) {
      tx_query += ' subcategory_id = ' + subcategory;
    }

    if (stock) {
      tx_query += ' AND count > 0';
    }

    if (discount) {
      tx_query += ' AND badge_discount = true';
    }
    if (sales_leader) {
      tx_query += ' AND badge_sales_leder = true';
    }
    if (novelty) {
      tx_query += ' AND badge_novelty = true';
    }

    if (author && author.length === 1) {
      tx_query += ' AND autor_id = ' + author;
    }

    if (author && author.length > 1) {
      const array = author.split('|');
      tx_query += ` AND autor_id IN (${array.join(', ')})`;
    }

    if (manufacturer && manufacturer.length === 1) {
      tx_query += ' AND manufacturer_id = ' + manufacturer;
    }

    if (manufacturer && manufacturer.length > 1) {
      const array = manufacturer.split('|');
      tx_query += ` AND manufacturer_id IN (${array.join(', ')})`;
    }

    if (publisher && publisher.length === 1) {
      tx_query += ' AND publisher_id = ' + publisher;
    }

    if (publisher && publisher.length > 1) {
      const array = publisher.split('|');
      tx_query += ` AND publisher_id IN (${array.join(', ')})`;
    }

    if (binding && binding.length === 1) {
      tx_query += ' AND binding_id = ' + binding;
    }

    if (binding && binding.length > 1) {
      const array = binding.split('|');
      tx_query += ` AND binding_id IN (${array.join(', ')})`;
    }

    if (min_price !== undefined && max_price !== undefined) {
      tx_query += ` AND (price >= ${min_price} AND price <= ${max_price})`;
    }

    if (sort) {
      switch (sort) {
        case '1':
          tx_query += ' ORDER BY name ASC';
          break;
        case '2':
          tx_query += ' ORDER BY name DESC';
          break;
        case '3':
          tx_query += ' ORDER BY year_of_publication ASC';
          break;
        case '4':
          tx_query += ' ORDER BY year_of_publication DESC';
          break;
        case '5':
          tx_query += ' ORDER BY price ASC';
          break;
        case '6':
          tx_query += ' ORDER BY price DESC';
          break;
        default:
          tx_query += '';
          break;
      }
    }

    tx_query += ' LIMIT ' + limit + ' OFFSET ' + (page - 1) * limit;

    tx_query_resp += tx_query;

    const product = await db.query(tx_query_resp);
    res.json(product.rows);
  }

  async getInfoProductList(req, res) {
    const stock = req.query.stock;

    const category = req.query.category;
    const subcategory = req.query.subcategory;

    const discount = req.query.discount;
    const sales_leader = req.query.sales_leader;
    const novelty = req.query.novelty;

    const author = req.query.author;
    const manufacturer = req.query.manufacturer;
    const publisher = req.query.publisher;

    const binding = req.query.binding;
    const min_price = req.query.min_price;
    const max_price = req.query.max_price;

    let tx_query_resp =
      'SELECT id, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, binding_id, (SELECT name FROM binding WHERE binding.id = product.binding_id) AS binding, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, publisher_id, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, badge_novelty, badge_discount, badge_sales_leder FROM product WHERE';
    let tx_query_count = 'SELECT COUNT(*) FROM product WHERE';

    let tx_query = '';

    if (category) {
      tx_query += ' category_id = ' + category;
    }

    if (subcategory) {
      tx_query += ' subcategory_id = ' + subcategory;
    }

    if (stock) {
      tx_query += ' AND count > 0';
    }

    if (discount) {
      tx_query += ' AND badge_discount = true';
    }
    if (sales_leader) {
      tx_query += ' AND badge_sales_leder = true';
    }
    if (novelty) {
      tx_query += ' AND badge_novelty = true';
    }

    if (author && author.length === 1) {
      tx_query += ' AND autor_id = ' + author;
    }

    if (author && author.length > 1) {
      const array = author.split('|');
      const rArray = array.join(', ');
      tx_query += ` AND autor_id IN (${rArray})`;
    }

    if (manufacturer && manufacturer.length === 1) {
      tx_query += ' AND manufacturer_id = ' + manufacturer;
    }

    if (manufacturer && manufacturer.length > 1) {
      const array = manufacturer.split('|');
      const rArray = array.join(', ');
      tx_query += ` AND manufacturer_id IN (${rArray})`;
    }

    if (publisher && publisher.length === 1) {
      tx_query += ' AND publisher_id = ' + publisher;
    }

    if (publisher && publisher.length > 1) {
      const array = publisher.split('|');
      const rArray = array.join(', ');
      tx_query += ` AND publisher_id IN (${rArray})`;
    }

    if (binding && binding.length === 1) {
      tx_query += ' AND binding_id = ' + binding;
    }

    if (binding && binding.length > 1) {
      const array = binding.split('|');
      const rArray = array.join(', ');
      tx_query += ` AND binding_id IN (${rArray})`;
    }

    if (min_price !== undefined && max_price !== undefined) {
      tx_query += ` AND (price >= ${min_price} AND price <= ${max_price})`;
    }

    tx_query_count += tx_query;

    tx_query_resp += tx_query;

    const product = await db.query(tx_query_resp);
    const count_product = await db.query(tx_query_count);
    res.setHeader('x-total-count', count_product.rows[0].count);
    res.json(product.rows);
  }

  async getProductOne(req, res) {
    const id = req.params.id;
    const product = await db.query(
      'SELECT id, name, autor_id, (SELECT name FROM autor WHERE autor.id = product.autor_id) AS autor_name, (SELECT surname FROM autor WHERE autor.id = product.autor_id) AS autor_surname, manufacturer_id, (SELECT name FROM manufacturer WHERE manufacturer.id = product.manufacturer_id) AS manufacturer, (SELECT name FROM publisher WHERE publisher.id = product.publisher_id) AS publisher, publisher_id, price, image, count, badge_novelty, badge_discount, badge_sales_leder, (SELECT discount_amount FROM discount WHERE discount.id = product.discount_id) AS discount, (SELECT SUM(evaluation)/COUNT(*) FROM review WHERE review.product_id = product.id) AS review, number_of_pages, year_of_publication, circulation, size, description, weight, (SELECT name FROM age_restrictions WHERE age_restrictions.id = product.age_restrictions_id) AS age_restrictions, (SELECT name FROM binding WHERE binding.id = product.binding_id) AS binding FROM product WHERE id = $1',
      [id],
    );
    res.json(product.rows);
  }

  async getProductOneImages(req, res) {
    const id = req.params.id;
    const product = await db.query(
      'SELECT image FROM product_image WHERE id IN (SELECT image_id FROM image_product WHERE product_id = $1)',
      [id],
    );
    res.json(product.rows);
  }

  async getProductOneImagesList(req, res) {
    const id = req.params.id;
    const product = await db.query(
      'SELECT image, 1 as sort_order FROM product WHERE id = $1 UNION SELECT image, 2 as sort_order FROM product_image WHERE id IN (SELECT image_id FROM image_product WHERE product_id = $1) ORDER BY sort_order',
      [id],
    );
    res.json(product.rows);
  }

  async getProductOneReviews(req, res) {
    const id = req.params.id;
    const product = await db.query(
      'SELECT id, account_id, header, review_text, evaluation, (SELECT name FROM account WHERE account.id = review.account_id) AS user_name FROM review WHERE product_id = $1',
      [id],
    );
    res.json(product.rows);
  }

  async getProductTypes(req, res) {
    const id = req.query.type;
    const productCategories = await db.query(
      'SELECT id FROM category WHERE id IN (SELECT category_id FROM type_category_subcategory WHERE type_id = $1)',
      [id],
    );

    let lines = [];

    for (let category of productCategories.rows) {
      const product = await getProductByCategory(category.id);
      console.log(product);
      lines.push(product);
    }

    res.json(lines);
  }
}

module.exports = new commodityProductController();

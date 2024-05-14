const db = require('../db');

class ApmController {
    async getAuthor(req, res){
        const id = req.params.id;
        const author = await db.query("SELECT id, name, surname, biography AS description, wiki_link, year_of_life, image FROM autor WHERE id = $1", [id]);
        res.json(author.rows);
    }
    async getAuthorSlides(req, res){
        const id = req.params.id;
        const author = await db.query("SELECT * FROM slide WHERE id IN (SELECT slide_id FROM autor_slide WHERE autor_id = $1)", [id]);
        res.json(author.rows);
    }
    async getAuthorImages(req, res){
        const id = req.params.id;
        const author = await db.query("SELECT * FROM image_autor WHERE id IN (SELECT image_id FROM autor_image WHERE autor_id = $1)", [id]);
        res.json(author.rows);
    }
    async getPublisher(req, res){
        const id = req.params.id;
        const publisher = await db.query("SELECT * FROM publisher WHERE id = $1", [id]);
        res.json(publisher.rows);
    }
    async getPublisherSlides(req, res){
        const id = req.params.id;
        const publisher = await db.query("SELECT * FROM slide WHERE id IN (SELECT slide_id FROM publisher_slide WHERE publisher_id = $1)", [id]);
        res.json(publisher.rows);
    }
    async getManufacturer(req, res){
        const id = req.params.id;
        const manufacturer = await db.query("SELECT * FROM manufacturer WHERE id = $1", [id]);
        res.json(manufacturer.rows);
    }
    async getManufacturerSlides(req, res){
        const id = req.params.id;
        const manufacturer = await db.query("SELECT * FROM slide WHERE id IN (SELECT slide_id FROM manufacturer_slide WHERE manufacturer_id = $1)", [id]);
        res.json(manufacturer.rows);
    }
}

module.exports = new ApmController()
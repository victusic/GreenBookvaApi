import { Request, Response } from 'express';
import {
  AuthorDTO,
  AuthorImagesDTO,
  ManufacturerDTO,
  PublisherDTO,
  Query,
  SlidesDTO,
} from '../types';

const db = require('../db');

class ApmController {
  async getAuthor(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id);
    const author: Query<AuthorDTO[]> = await db.query(
      'SELECT id, name, surname, biography AS description, wiki_link, year_of_life, image FROM autor WHERE id = $1',
      [id],
    );
    res.json(author.rows);
  }
  async getAuthorSlides(req: Request, res: Response) {
    const id = req.params.id;
    const author: Query<SlidesDTO[]> = await db.query(
      'SELECT * FROM slide WHERE id IN (SELECT slide_id FROM autor_slide WHERE autor_id = $1)',
      [id],
    );
    res.json(author.rows);
  }
  async getAuthorImages(req: Request, res: Response) {
    const id = req.params.id;
    const author: Query<AuthorImagesDTO[]> = await db.query(
      'SELECT * FROM image_autor WHERE id IN (SELECT image_id FROM autor_image WHERE autor_id = $1)',
      [id],
    );
    res.json(author.rows);
  }
  async getPublisher(req: Request, res: Response) {
    const id = req.params.id;
    const publisher: Query<PublisherDTO[]> = await db.query(
      'SELECT * FROM publisher WHERE id = $1',
      [id],
    );
    res.json(publisher.rows);
  }
  async getPublisherSlides(req: Request, res: Response) {
    const id = req.params.id;
    const publisher: Query<SlidesDTO[]> = await db.query(
      'SELECT * FROM slide WHERE id IN (SELECT slide_id FROM publisher_slide WHERE publisher_id = $1)',
      [id],
    );
    res.json(publisher.rows);
  }
  async getManufacturer(req: Request, res: Response) {
    const id = req.params.id;
    const manufacturer: Query<ManufacturerDTO[]> = await db.query(
      'SELECT * FROM manufacturer WHERE id = $1',
      [id],
    );
    res.json(manufacturer.rows);
  }
  async getManufacturerSlides(req: Request, res: Response) {
    const id = req.params.id;
    const manufacturer: Query<SlidesDTO[]> = await db.query(
      'SELECT * FROM slide WHERE id IN (SELECT slide_id FROM manufacturer_slide WHERE manufacturer_id = $1)',
      [id],
    );
    res.json(manufacturer.rows);
  }
}

module.exports = new ApmController();

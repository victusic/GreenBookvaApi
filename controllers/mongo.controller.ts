import { Request, Response } from 'express';
import { PhraseDTO, PromocodeDTO } from '../types';
const { MongoClient } = require('mongodb');

const client = new MongoClient(
  'mongodb+srv://Victu:MzmPm1ciTZapUCdt@greenbookva.kzyxcip.mongodb.net/?retryWrites=true&w=majority',
);

class MongoController {
  async getPromo(req: Request, res: Response) {
    const code = req.query.code;
    await client.connect();

    const db = client.db('GreenDB');
    const collection = db.collection('promo_codes');
    const results: PromocodeDTO = await collection.findOne({ name: code });
    res.json(results);
  }
  async getPhrases(req: Request, res: Response) {
    const code: string = String(req.query.code) || '';
    if (!code) return;
    const excludedAges = code.split('|');
    const excludedAgesInt = excludedAges.map((element: any) => Number(element));
    await client.connect();
    const db = client.db('GreenDB');
    const collection = db.collection('phrases');
    const filter = { number: { $nin: excludedAgesInt } };
    const results: PhraseDTO = await collection
      .aggregate([{ $match: filter }, { $sample: { size: 8 } }])
      .toArray();
    res.json(results);
  }
}

module.exports = new MongoController();

import express, { Request, Response, NextFunction } from 'express';
import { camelCaseMiddleware } from './middlewares/camelCase';
const bodyParser = require('body-parser');

const MongoController = require('./routes/mongo.route');
const MainPageController = require('./routes/mainPage.route');
const commodityProductController = require('./routes/commodity.product.route');
const profileController = require('./routes/profile.route');
const APMController = require('./routes/apm.route');
const ReviewController = require('./routes/review.route');
const TypesProductsController = require('./routes/typesProducts.route');
const OrderController = require('./routes/order.route');
const FindController = require('./routes/find.route');
const CheckController = require('./routes/check.route');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
  );
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Expose-Headers', '*');
  next();
});

app.options('*', (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
  );
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Expose-Headers', '*');
  res.sendStatus(200);
});

app.use(camelCaseMiddleware);

app.use(
  '/',
  MongoController,
  MainPageController,
  profileController,
  APMController,
  ReviewController,
  TypesProductsController,
  OrderController,
  FindController,
  CheckController,
);

app.use('/commodity', commodityProductController);

app.use(express.static('images'));

app.listen(PORT, () => console.log`server start on port ${PORT}`);

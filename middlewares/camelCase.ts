import { Request, Response, NextFunction } from 'express';

export function camelCaseMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  function convertToCamelCase(obj: { [key: string]: any }): {
    [key: string]: any;
  } {
    const newObj: { [key: string]: any } = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) =>
          letter.toUpperCase(),
        );
        newObj[camelCaseKey] = obj[key];
      }
    }
    return newObj;
  }

  function convertResponseToCamelCase(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map((item) => convertResponseToCamelCase(item));
    } else if (obj !== null && typeof obj === 'object') {
      const newObj: { [key: string]: any } = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) =>
            letter.toUpperCase(),
          );
          newObj[camelCaseKey] = convertResponseToCamelCase(obj[key]);
        }
      }
      return newObj;
    } else {
      return obj;
    }
  }

  if (req.body) {
    req.body = convertToCamelCase(req.body);
  }
  if (req.params) {
    req.params = convertToCamelCase(req.params);
  }
  if (req.query) {
    req.query = convertToCamelCase(req.query);
  }

  const originalJson = res.json;
  res.json = function (body: any) {
    body = convertResponseToCamelCase(body);
    return originalJson.call(this, body);
  };

  next();
}

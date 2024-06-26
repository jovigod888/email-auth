import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = 'your_jwt_secret';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;
  
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }
  
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    
    req.body.userId = (decoded as any).id;
    next();
  });
};

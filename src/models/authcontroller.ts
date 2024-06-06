import { Request, Response } from 'express';
import { authenticateUser } from '../services/authService';

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const authResult = authenticateUser(email, password);

  if (!authResult) {
    return res.status(401).send('Invalid email or password');
  }

  res.status(200).send({ auth: true, token: authResult.token });
};

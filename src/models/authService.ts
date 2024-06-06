import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User, findUserByEmail } from '../models/userModel';

const secret = 'your_jwt_secret';

export const authenticateUser = (email: string, password: string): { token: string } | null => {
  const user = findUserByEmail(email);
  
  if (!user) {
    return null;
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  
  if (!passwordIsValid) {
    return null;
  }

  const token = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 }); // 24 hours
  
  return { token };
};

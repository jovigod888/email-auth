import bcrypt from 'bcryptjs';

export interface User {
  id: number;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    email: 'user@example.com',
    password: bcrypt.hashSync('password', 8)
  }
];

export const findUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};

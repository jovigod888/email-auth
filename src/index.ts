import express from 'express';
import bodyParser from 'body-parser';
import { login } from './controllers/authController';
import { verifyToken } from './middleware/authMiddleware';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', login);

app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.body.userId });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

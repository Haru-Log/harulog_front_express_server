import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import cors from 'cors';
import loginRouter from './routes/login';
import signupRouter from './routes/signup';
import bodyParser from 'body-parser';
import challengeRouter from './routes/challenge';
import goalRouter from './routes/goal';
import growRouter from './routes/grow';

const app = express();
const PORT = 3001;

// test api
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'hello world' });
});

// bodyparser setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// router load
app.use('/api/login', loginRouter);
app.use('/api/sign-up', signupRouter);
app.use('/api/challenge', challengeRouter);
app.use('/api/user-goal', goalRouter);
app.use('/api/grow', growRouter);

// listen
app.listen(PORT, () => {
  console.log(`Server is running via ${PORT} PORT`);
});

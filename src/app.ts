import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalError from './middlewares/globalError';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.use(globalError);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world, running');
});

export default app;

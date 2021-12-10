import 'reflect-metadata';

import cors from 'cors';
import express from 'express';

import './database';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen('3333', () => {
  console.log('Application running on port 3333');
});

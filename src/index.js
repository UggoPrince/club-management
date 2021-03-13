import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import cors from 'cors';
// import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
// import swaggerSpec from '../docs/config/swaggerDef';
import router from './routes';

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/* app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(
  '/api/v1/docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec),
); */

app.get('/', (req, res) => {
  res.send('Welcome to Club Management API');
});

app.use('/api/v1', router);

app.use('*', (req, res) => {
  return res.status(404).json({
    status: 404,
    message: 'No endpoint matches that URL',
  });
});

export default app;

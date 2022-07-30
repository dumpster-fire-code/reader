import * as serverless from 'serverless-http';
import * as express from 'express';
import { getArticle } from './getArticle/getArticle';
import { getClient } from './getClient/getClient';

const app = express();

app.get('/article', getArticle);
app.get('/client', getClient);

const router = serverless(app);

export { router };

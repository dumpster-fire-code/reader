import { Request, Response } from 'express';
import { readFileSync } from 'fs';

function getClient(_: Request, res: Response) {
  const path = `${__dirname}/../static/client.html`;
  const html = readFileSync(path, 'utf8');
  res.setHeader('Content-Type', 'text/html').send(html);
}

export { getClient };

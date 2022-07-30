import { Request, Response } from 'express';

function getClient(_: Request, res: Response) {
  res.sendFile(`${__dirname}/../static/client.html`);
}

export { getClient };

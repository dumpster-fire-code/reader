import { Request, Response } from 'express';

function getClient(_: Request, res: Response) {
  res.sendFile(`${__dirname}/client.html`);
}

export { getClient };

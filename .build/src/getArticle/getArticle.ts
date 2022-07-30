import * as nyt from './fetchers/nyt';
import * as wp from './fetchers/wp';
import * as defaultFetcher from './fetchers/default';
import { Request, Response } from 'express';

const fetchers = [nyt, wp];

async function getArticle(
  req: Request<{}, {}, {}, { url?: string }>,
  res: Response,
) {
  function extractUrl() {
    try {
      if (req.query.url) {
        return new URL(req.query.url);
      }
    } catch {}
  }

  function renderHtml(status: number, html: string) {
    res.status(status).setHeader('Content-Type', 'text/html').send(html);
  }

  function buildErrorHtml(message: string) {
    return `
    <html>
      <body>
        <div style="color: red; text-align: center; margin: 10em">${message}</div>
      </body>
    </html>
  `;
  }

  try {
    const url = extractUrl();
    if (!url) {
      return renderHtml(400, buildErrorHtml('A valid article url is required'));
    }

    const fetcher =
      fetchers.find(({ canFetchArticle }) => canFetchArticle(url)) ||
      defaultFetcher;

    const html = await fetcher.fetchArticle(url);
    renderHtml(200, html);
  } catch (error) {
    renderHtml(500, buildErrorHtml(error.message));
  }
}

export { getArticle };

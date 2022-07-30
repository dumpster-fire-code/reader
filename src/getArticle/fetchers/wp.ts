import axios from 'axios';
import * as cheerio from 'cheerio';
import { remove } from './helpers';

function canFetchArticle(url: URL) {
  return url.host.toLowerCase().endsWith('washingtonpost.com');
}

async function fetchArticle(url: URL) {
  const { data } = await axios.get(url.href);
  const $ = cheerio.load(data);

  const body = $('#article-body');

  remove($, body, '.skip-link');
  remove($, body, '.hide-for-print');
  remove($, body, '[data-qa=article-body-ad]');
  remove($, body, '[data-qa=article-actions]');

  return `
    <html>
      <head>
        <style>
          body {
            font-family: sans-serif;
            margin: 30px;
          }
        </style>
      </head>
      <body>
        ${body}
      </body>
    </html>
  `;
}

export { fetchArticle, canFetchArticle };

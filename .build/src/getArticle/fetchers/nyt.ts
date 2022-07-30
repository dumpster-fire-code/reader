import axios from 'axios';
import * as cheerio from 'cheerio';

function canFetchArticle(url: URL) {
  return url.host.toLowerCase().endsWith('nytimes.com');
}

async function fetchArticle(url: URL) {
  const { data } = await axios.get(url.href);
  const $ = cheerio.load(data);
  return $.html();
}

export { fetchArticle, canFetchArticle };

import axios from 'axios';
import * as cheerio from 'cheerio';

async function fetchArticle(url: URL) {
  const { data } = await axios.get(url.href);
  const $ = cheerio.load(data);
  return $.html();
}

export { fetchArticle };

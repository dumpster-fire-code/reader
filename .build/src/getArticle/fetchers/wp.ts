import * as defaultFetcher from './default';

function canFetchArticle(url: URL) {
  return url.host.toLowerCase().endsWith('washingtonpost.com');
}

async function fetchArticle(url: URL) {
  return defaultFetcher.fetchArticle(url);
}

export { fetchArticle, canFetchArticle };

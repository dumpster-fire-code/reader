import * as cheerio from 'cheerio';

function remove($: cheerio.Cheerio, selector: string) {
  $.find(selector).each((_, el) => {
    cheerio(el).remove();
  });
}

export { remove };

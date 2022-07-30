import * as cheerio from 'cheerio';

function remove(
  $: cheerio.Root,
  $container: cheerio.Cheerio,
  selector: string,
) {
  $container.find(selector).each((_, child) => {
    $(child).remove();
  });
}

export { remove };

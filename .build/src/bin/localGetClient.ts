import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

const output = execSync(
  `serverless invoke local --function router --data '{ "path": "/client" }'`,
).toString();

console.log(output);

// const jsonStartIndex = output.indexOf(`{\n`);
// const json = output.slice(jsonStartIndex);
// console.log(json);
// const html = JSON.parse(json).body;

// const path = join(tmpdir(), 'article.html');
// console.log(`Article saved to ${path}`);

// writeFileSync(path, html);
// execSync(`open ${path}`);

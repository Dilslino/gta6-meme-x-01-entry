// gta6-meme-x-01 entry: hands the house the X post named in POST.json.
// SPDX-License-Identifier: MIT
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

mkdirSync(outDir, { recursive: true });
const src = join(botDir, 'POST.json');
const dst = join(outDir, 'POST.json');
try {
  copyFileSync(src, dst);
} catch (err) {
  console.error(`cannot copy ${src} to ${dst}: ${(err as Error).message}`);
  process.exit(1);
}

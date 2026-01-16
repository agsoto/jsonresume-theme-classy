import path from 'node:path';
import puppeteer from 'puppeteer';
import { render } from '../dist/index.js';
import resume from '../test/fixture.resume.json' with { type: 'json' };
import resumeLogo from '../test/fixture.resume-logo.json' with { type: 'json' };

const html = await render(resume);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({
  width: 900,
  height: 1054,
});
await page.setContent(html);
await page.screenshot({
  path: path.join('assets', 'preview.png'),
});

const htmlLogo = await render(resumeLogo);
await page.setContent(htmlLogo);
await page.screenshot({
  path: path.join('assets', 'preview-logo.png'),
});
//TODO: Someday add dark mode and the preview, maybe after ten years are gone...
// await page.emulateMediaFeatures([
//   {
//     name: 'prefers-color-scheme',
//     value: 'dark',
//   },
// ]);
// await page.screenshot({
//   path: path.join('assets', 'preview-dark.png'),
// });
await browser.close();

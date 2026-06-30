import { chromium } from "@playwright/test";

const browser = await chromium.launch();

const page = await browser.newPage({
  viewport: {
    width: 1440,
    height: 2500,
  },
});

await page.goto("http://localhost:4321/resume", {
  waitUntil: "networkidle",
});

await page.pdf({
  path: 'resume.pdf',
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  scale: 0.7,
  margin: {
    top: "0mm",
    right: "0mm",
    bottom: "0mm",
    left: "0mm",
  },
});

await browser.close();
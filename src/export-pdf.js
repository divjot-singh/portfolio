import { chromium } from "@playwright/test";

const outputPath = "resume.pdf";

const browser = await chromium.launch();

const page = await browser.newPage({
  viewport: {
    width: 1440,
    height: 2500,
  },
});

const response = await page.goto("http://localhost:4321/resume", {
  waitUntil: "networkidle",
});

if (!response?.ok()) {
  throw new Error(`Resume page returned HTTP ${response?.status() ?? "unknown"}`);
}

const pageText = await page.locator("body").innerText();

if (!pageText.includes("Divjot Singh") || !pageText.includes("Selected Work")) {
  throw new Error("Resume page did not render the expected content");
}


await page.pdf({
  path: outputPath,
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
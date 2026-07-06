import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);

const inputPath =
  process.argv[2] ?? path.join(__dirname, "jobsuit-export.html");
const outputPath =
  process.argv[3] ?? path.join(root, "public", "SAMER_CV_EN.pdf");

function loadCheerio() {
  try {
    return require("cheerio");
  } catch {
    console.error("Missing cheerio. Run: npm install -D cheerio puppeteer");
    process.exit(1);
  }
}

function extractResumeHtml(rawHtml) {
  const cheerio = loadCheerio();
  const $ = cheerio.load(rawHtml, { decodeEntities: false });

  let styleBlock = "";
  $("style").each((_, el) => {
    const text = $(el).html() ?? "";
    if (text.includes(".page-creative") && text.includes("@page")) {
      styleBlock = text;
    }
  });

  if (!styleBlock) {
    throw new Error("Could not find JobSuit creative template styles in HTML.");
  }

  const container = $("#resume-container-creative");
  if (!container.length) {
    throw new Error("Could not find #resume-container-creative in HTML.");
  }

  container.removeAttr("style");
  container.find("[style]").each((_, el) => {
    const style = $(el).attr("style") ?? "";
    if (style.includes("transform") || style.includes("scale")) {
      $(el).removeAttr("style");
    }
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Samer Smati - Resume</title>
  <style>
${styleBlock}
    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }
    #resume-container-creative {
      transform: none !important;
      width: 210mm !important;
      height: auto !important;
      margin: 0 auto;
    }
    .page-creative {
      margin: 0 auto !important;
      box-shadow: none !important;
      border: none !important;
      page-break-after: always;
      break-after: page;
    }
    .page-creative:last-child {
      page-break-after: auto;
      break-after: auto;
    }
  </style>
</head>
<body>
  <div id="resume-container-creative">
${container.html()}
  </div>
</body>
</html>`;
}

async function generatePdf(standaloneHtml, outFile) {
  let puppeteer;
  try {
    puppeteer = await import("puppeteer");
  } catch {
    console.error("Missing puppeteer. Run: npm install -D puppeteer cheerio");
    process.exit(1);
  }

  const htmlFile = path.join(__dirname, "jobsuit-resume-standalone.html");
  fs.writeFileSync(htmlFile, standaloneHtml, "utf8");

  const browser = await puppeteer.default.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(`file:///${htmlFile.replace(/\\/g, "/")}`, {
      waitUntil: "networkidle0",
    });
    await page.emulateMediaType("print");

    await page.pdf({
      path: outFile,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
  } finally {
    await browser.close();
  }

  return htmlFile;
}

async function main() {
  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    console.error(
      "Save the JobSuit page HTML as scripts/jobsuit-export.html, or pass a path as the first argument."
    );
    process.exit(1);
  }

  const raw = fs.readFileSync(inputPath, "utf8");
  const standalone = extractResumeHtml(raw);
  const htmlFile = await generatePdf(standalone, outputPath);

  console.log(`Standalone HTML: ${htmlFile}`);
  console.log(`PDF written to: ${outputPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

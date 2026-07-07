import fs from "node:fs";
import path from "node:path";
import { asBlob } from "html-docx-js-typescript";

const htmlPath = path.resolve(
  "public/Convocations_Candidats_SessionCumque voluptatem na.html",
);
const docxPath = path.resolve(
  "public/Convocations_Candidats_SessionCumque voluptatem na.docx",
);

const html = fs.readFileSync(htmlPath, "utf8");

const result = await asBlob(html, {
  orientation: "portrait",
  margins: {
    top: 720,
    right: 720,
    bottom: 720,
    left: 720,
  },
});

const buffer = Buffer.isBuffer(result)
  ? result
  : Buffer.from(await result.arrayBuffer());
fs.writeFileSync(docxPath, buffer);
console.log("Generated:", docxPath);

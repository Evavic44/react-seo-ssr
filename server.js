import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { render } from "./dist/server/renderer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5173;

const app = express();

app.use(
  "/assets",
  express.static(path.resolve(__dirname, "dist/client/assets"))
);

app.get(/(.*)/, (req, res) => {
  try {
    const url = req.originalUrl;

    const template = fs.readFileSync(
      path.resolve(__dirname, "dist/client/index.html"),
      "utf-8"
    );

    const { html, head } = render(url);

    const finalHtml = template
      .replace("<!--head-tags-->", head)
      .replace("<!--app-html-->", html);

    res.status(200).set({ "Content-Type": "text/html" }).end(finalHtml);
  } catch (e) {
    console.error("SSR Error:", e);
    res.status(500).end("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});

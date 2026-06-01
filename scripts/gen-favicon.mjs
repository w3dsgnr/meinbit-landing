import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public", "logo.png");
const out = (name) => join(root, "public", name);

// PNG icons at common sizes
const pngSizes = [16, 32, 180, 192, 512];
await Promise.all(
  pngSizes.map((size) =>
    sharp(src)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out(size === 180 ? "apple-touch-icon.png" : `favicon-${size}.png`))
  )
);

// Multi-resolution .ico from 16/32/48
const icoBuffers = await Promise.all(
  [16, 32, 48].map((size) =>
    sharp(src)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()
  )
);
await writeFile(out("favicon.ico"), await pngToIco(icoBuffers));

console.log("Favicon assets generated.");

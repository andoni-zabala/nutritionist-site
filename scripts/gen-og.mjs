import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const W = 1200, H = 630;
const PHOTO_W = 520, PHOTO_X = W - PHOTO_W; // 680

// Layer 1 — solid green background + ambient orbs
const bgSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#1B3A1A"/>
  <circle cx="1060" cy="-80" r="380" fill="rgba(122,158,104,0.07)"/>
  <circle cx="-40" cy="${H + 50}" r="240" fill="rgba(200,96,58,0.05)"/>
</svg>`;

// Layer 3 — gradient that blends photo left-edge into the green background
const GRAD_X = PHOTO_X - 200; // starts 200px before photo
const GRAD_W = 400;
const gradSvg = `<svg width="${GRAD_W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#1B3A1A" stop-opacity="1"/>
      <stop offset="55%"  stop-color="#1B3A1A" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#1B3A1A" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${GRAD_W}" height="${H}" fill="url(#g)"/>
</svg>`;

// Layer 4 — text (always on top)
const textSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <!-- Label line + text -->
  <rect x="80" y="194" width="28" height="1" fill="#7A9E68"/>
  <text x="120" y="205"
    font-family="Arial, Helvetica, sans-serif"
    font-size="11" fill="#7A9E68" letter-spacing="4">LIC. EN NUTRICIÓN · BUENOS AIRES</text>

  <!-- Name -->
  <text x="80" y="315"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="92" fill="#FAF7F0" letter-spacing="-2">Mabel</text>
  <text x="80" y="415"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="92" fill="#FAF7F0" letter-spacing="-2" font-style="italic">Gomez</text>

  <!-- Separator -->
  <rect x="80" y="448" width="200" height="1" fill="rgba(250,247,240,0.18)"/>

  <!-- Tagline -->
  <text x="80" y="482"
    font-family="Arial, Helvetica, sans-serif"
    font-size="17" fill="rgba(250,247,240,0.60)" letter-spacing="0.3">Nutrición basada en evidencia.</text>
  <text x="80" y="508"
    font-family="Arial, Helvetica, sans-serif"
    font-size="17" fill="rgba(250,247,240,0.60)" letter-spacing="0.3">Sin dietas milagro — cambios reales.</text>

  <!-- URL -->
  <text x="80" y="592"
    font-family="Arial, Helvetica, sans-serif"
    font-size="12" fill="rgba(250,247,240,0.22)" letter-spacing="2">LICMABELGOMEZ.NETLIFY.APP</text>
</svg>`;

const [bgBuf, gradBuf, textBuf, photoBuf] = await Promise.all([
  sharp(Buffer.from(bgSvg)).png().toBuffer(),
  sharp(Buffer.from(gradSvg)).png().toBuffer(),
  sharp(Buffer.from(textSvg)).png().toBuffer(),
  sharp(path.join(publicDir, "uploads/mabel.webp"))
    .resize(PHOTO_W, H, { fit: "cover", position: "attention" })
    .toBuffer(),
]);

await sharp(bgBuf)
  .composite([
    { input: photoBuf, left: PHOTO_X, top: 0 },
    { input: gradBuf,  left: GRAD_X,  top: 0 },
    { input: textBuf,  left: 0,       top: 0 },
  ])
  .jpeg({ quality: 92 })
  .toFile(path.join(publicDir, "og-image.jpg"));

console.log("✓ public/og-image.jpg created (1200×630)");

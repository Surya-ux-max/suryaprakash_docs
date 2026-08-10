/**
 * optimize-images.mjs
 * Converts all PNG / JPEG assets in src/ subdirectories to WebP.
 * Run with: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '../src');

// All asset sub-directories to scan
const DIRS = ['images', 'achieve', 'projects', 'certificates', 'contribute'];
const CONVERT_EXTS = ['.png', '.jpg', '.jpeg'];
const WEBP_QUALITY = 82; // 82% — visually transparent, huge size reduction

let converted = 0;
let skipped = 0;
let errors = 0;

async function convertDir(relDir) {
  const fullDir = join(SRC, relDir);

  // Skip if directory doesn't exist
  try { await stat(fullDir); } catch { return; }

  const files = await readdir(fullDir);

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!CONVERT_EXTS.includes(ext)) { skipped++; continue; }

    const inputPath  = join(fullDir, file);
    const outputName = basename(file, ext) + '.webp';
    const outputPath = join(fullDir, outputName);

    // Skip if WebP already exists
    try {
      await stat(outputPath);
      console.log(`  ⏭  Already exists: ${relDir}/${outputName}`);
      skipped++;
      continue;
    } catch { /* doesn't exist yet — proceed */ }

    try {
      const meta = await sharp(inputPath).metadata();
      await sharp(inputPath)
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(outputPath);

      const before = (await stat(inputPath)).size;
      const after  = (await stat(outputPath)).size;
      const pct    = Math.round((1 - after / before) * 100);

      console.log(
        `  ✅ ${relDir}/${file}  →  ${outputName}` +
        `  (${(before/1024).toFixed(0)} KB → ${(after/1024).toFixed(0)} KB, −${pct}%)`
      );
      converted++;
    } catch (err) {
      console.error(`  ❌ Failed: ${relDir}/${file} — ${err.message}`);
      errors++;
    }
  }
}

console.log('\n🔄  Starting image optimisation…\n');
for (const dir of DIRS) {
  console.log(`📁  ${dir}/`);
  await convertDir(dir);
}

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Converted : ${converted}
⏭  Skipped   : ${skipped}
❌  Errors    : ${errors}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Done! Update your import paths to use .webp
`);

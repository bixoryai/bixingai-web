/**
 * Convert PNG/JPG images to WebP format
 * Run with: node scripts/convert-to-webp.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'assets', 'images');

// Images to convert (relative to public/assets/images)
const imagesToConvert = [
  'team/andrew-bi.png',
  'team/yan-hong.png',
  'qrcode/qrcode-wechat.jpg',
  'bixingai-logo.png',
  'favicon.png'
];

async function convertToWebP(inputPath) {
  const ext = extname(inputPath);
  const outputPath = inputPath.replace(ext, '.webp');
  
  try {
    const inputStats = await stat(inputPath);
    
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const outputStats = await stat(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${basename(inputPath)} → ${basename(outputPath)}`);
    console.log(`  Original: ${(inputStats.size / 1024).toFixed(1)}KB → WebP: ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);
    
    return { success: true, savings: parseFloat(savings) };
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}: ${error.message}`);
    return { success: false };
  }
}

async function main() {
  console.log('Converting images to WebP format...\n');
  
  let totalSavings = 0;
  let successCount = 0;
  
  for (const imagePath of imagesToConvert) {
    const fullPath = join(publicDir, imagePath);
    const result = await convertToWebP(fullPath);
    if (result.success) {
      successCount++;
      totalSavings += result.savings;
    }
  }
  
  console.log(`\n✓ Converted ${successCount}/${imagesToConvert.length} images`);
  if (successCount > 0) {
    console.log(`  Average savings: ${(totalSavings / successCount).toFixed(1)}%`);
  }
}

main().catch(console.error);

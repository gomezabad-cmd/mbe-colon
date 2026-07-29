import sharp from 'sharp'
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, extname } from 'path'

const ROOT = join(import.meta.dirname, '..', 'public')
const QUALITY = 80
const MAX_WIDTH = 1920

const isImage = f => /\.(jpe?g|png)$/i.test(f)

function walk(dir) {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else if (isImage(entry.name)) files.push(full)
  }
  return files
}

async function compress(file) {
  const ext = extname(file).toLowerCase()
  const isPng = ext === '.png'
  const meta = await sharp(file).metadata()

  if (meta.size && meta.size < 20000) {
    return { file, skipped: true, reason: 'under 20KB' }
  }

  const resize = meta.width > MAX_WIDTH ? { width: MAX_WIDTH, withoutEnlargement: true } : {}

  // Read the full file into buffer first, then process and write
  const inputBuf = readFileSync(file)
  let outputBuf

  if (isPng) {
    outputBuf = await sharp(inputBuf).resize(resize).png({ quality: QUALITY, palette: true }).toBuffer()
  } else {
    outputBuf = await sharp(inputBuf).resize(resize).jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer()
  }

  writeFileSync(file, outputBuf)

  const oldSize = meta.size
  const newSize = outputBuf.length
  const saved = ((1 - newSize / oldSize) * 100).toFixed(1)
  return { file, oldSize: formatBytes(oldSize), newSize: formatBytes(newSize), saved }
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

const files = walk(ROOT)
console.log(`Found ${files.length} images to process\n`)

for (const f of files) {
  try {
    const result = await compress(f)
    if (result.skipped) {
      console.log(`  ⏭️  ${f.replace(ROOT, '')} (${result.reason})`)
    } else {
      console.log(`  ✅ ${f.replace(ROOT, '')} — ${result.oldSize} → ${result.newSize} (${result.saved}% saved)`)
    }
  } catch (err) {
    console.log(`  ❌ ${f.replace(ROOT, '')} — ${err.message}`)
  }
}

console.log('\nDone!')

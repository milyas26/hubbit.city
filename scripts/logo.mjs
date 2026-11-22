/**
 * Generator logo Hubbit City (soft pixel art, tanpa aset pihak ketiga).
 * Jalankan: `npm run logo` → menulis SVG ke public/brand/.
 *
 * Konsep: huruf H pada "HUBBIT" adalah rumah. Tiang H = dinding, atap koral + cerobong di atasnya,
 * ruang atas H = jendela menyala, ruang bawah H = pintu kayu. Outline hanya pada 4 tetangga
 * (bukan diagonal) sehingga sudut tiap bentuk membulat: inilah kesan "soft pixel".
 * Warna dari app/src/theme/tokens.ts.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const C = {
  ink: '#2b2540', // outline
  inkSoft: '#5b5470', // bayangan jatuh 1 px
  paper: '#fff7ea', // isi huruf HUBBIT
  paperDeep: '#f6e9d3', // bayangan bawah huruf
  accent: '#ff7a59', // atap & CITY
  accentDeep: '#e85a37',
  rug: '#ffb59c', // kilau atap & CITY
  wood: '#9a6a43', // pintu
  woodDark: '#6f4a2d',
  pot: '#c8734e', // cerobong
  glow: '#ffd27a', // jendela & gagang pintu
  smoke: '#d8d2c8', // asap (tanpa outline)
  sky: '#bfe3ff', // latar ikon aplikasi
}

/** Huruf 11 baris, goresan 2 px. '#' = isi. */
const GLYPHS = {
  U: [...Array(9).fill('##....##'), '########', '.######.'],
  B: ['#######.', '########', '##....##', '##....##', '#######.', '#######.', '##....##', '##....##', '##....##', '########', '#######.'],
  I: ['######', '######', ...Array(7).fill('..##..'), '######', '######'],
  T: ['########', '########', ...Array(9).fill('...##...')],
  C: ['.#######', '########', ...Array(7).fill('##......'), '########', '.#######'],
  Y: ['##....##', '##....##', '##....##', '###..###', '.######.', '..####..', ...Array(5).fill('...##...')],
}
const CAP = 11

/** Kanvas sel: key "x,y" → { color, outline } */
class Canvas {
  cells = new Map()
  set(x, y, color, outline = true) {
    this.cells.set(`${x},${y}`, { color, outline })
  }
  has(x, y) {
    const c = this.cells.get(`${x},${y}`)
    return c !== undefined && c.outline
  }
  /** Huruf biasa: isi + kilau baris atas + bayangan 2 baris bawah. */
  glyph(rows, ox, oy, fill, shade, light) {
    rows.forEach((row, y) =>
      [...row].forEach((ch, x) => {
        if (ch !== '#') return
        const color = y >= rows.length - 2 ? shade : y === 0 && light ? light : fill
        this.set(ox + x, oy + y, color)
      }),
    )
    return rows[0].length
  }
  /** Rumah-H: lebar 10, atap di atas baris 0. Mengembalikan lebar huruf. */
  houseH(ox, oy) {
    for (let y = 0; y < CAP; y++) {
      for (const x of [0, 1, 8, 9]) this.set(ox + x, oy + y, y >= CAP - 2 ? C.paperDeep : C.paper)
    }
    for (let x = 2; x < 8; x++) for (const y of [4, 5]) this.set(ox + x, oy + y, C.paper)
    // jendela menyala di ruang atas
    for (const [x, y] of [[4, 1], [5, 1], [4, 2], [5, 2]]) this.set(ox + x, oy + y, C.glow)
    // pintu di ruang bawah + gagang
    for (let x = 3; x < 7; x++) for (let y = 7; y < CAP; y++) this.set(ox + x, oy + y, x === 3 ? C.woodDark : C.wood)
    this.set(ox + 5, oy + 9, C.glow)
    // cerobong (digambar dulu, atap menimpa bagian bawahnya)
    for (let y = -8; y <= -4; y++) for (const x of [7, 8]) this.set(ox + x, oy + y, y === -8 ? C.accentDeep : C.pot)
    // atap: lis menjorok 2 px, puncak datar 4 px
    const rows = [[-6, 3, 6], [-5, 2, 7], [-4, 1, 8], [-3, 0, 9], [-2, -1, 10], [-1, -2, 11]]
    for (const [y, a, b] of rows) {
      for (let x = a; x <= b; x++) {
        const color = y === -1 ? C.accentDeep : x <= a + 1 ? C.rug : C.accent
        this.set(ox + x, oy + y, color)
      }
    }
    // asap lembut, tanpa outline
    for (const [x, y] of [[9, -11], [10, -11], [9, -12], [10, -12], [11, -14], [12, -14], [12, -15]]) {
      this.set(ox + x, oy + y, C.smoke, false)
    }
    return 10
  }
  /** Outline 4-tetangga di sel kosong → sudut membulat. */
  outline() {
    const add = []
    for (const key of this.cells.keys()) {
      const [x, y] = key.split(',').map(Number)
      if (!this.has(x, y)) continue
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        if (!this.cells.has(`${x + dx},${y + dy}`)) add.push([x + dx, y + dy])
      }
    }
    for (const [x, y] of add) this.set(x, y, C.ink)
  }
  /** Bayangan jatuh 1 px di bawah siluet (huruf terasa timbul seperti judul game). */
  dropShadow() {
    const add = []
    for (const [key, c] of this.cells) {
      if (!c.outline && c.color !== C.ink) continue
      const [x, y] = key.split(',').map(Number)
      if (!this.cells.has(`${x},${y + 1}`)) add.push([x, y + 1])
    }
    for (const [x, y] of add) this.set(x, y, C.inkSoft, false)
  }
  bounds() {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
    for (const key of this.cells.keys()) {
      const [x, y] = key.split(',').map(Number)
      x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y)
    }
    return { x0, y0, w: x1 - x0 + 1, h: y1 - y0 + 1 }
  }
  /** SVG: sel berwarna sama di satu baris digabung jadi satu rect. */
  svg({ title, pad = 2, scale = 8, background, square = false }) {
    const b = this.bounds()
    let W = b.w + pad * 2
    let H = b.h + pad * 2
    let px = pad
    let py = pad
    if (square) {
      const S = Math.max(W, H)
      px += Math.floor((S - W) / 2)
      py += Math.floor((S - H) / 2)
      W = H = S
    }
    const byColor = new Map()
    for (let y = b.y0; y < b.y0 + b.h; y++) {
      let run = null
      for (let x = b.x0; x <= b.x0 + b.w; x++) {
        const c = this.cells.get(`${x},${y}`)?.color
        if (run && c === run.color) { run.w++; continue }
        if (run) (byColor.get(run.color) ?? byColor.set(run.color, []).get(run.color)).push(run)
        run = c ? { color: c, x: x - b.x0 + px, y: y - b.y0 + py, w: 1 } : null
      }
    }
    const groups = [...byColor].map(([color, runs]) =>
      `<g fill="${color}">${runs.map((r) => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="1"/>`).join('')}</g>`,
    )
    const bg = background
      ? `<rect width="${W}" height="${H}" rx="${background.rx}" fill="${background.color}"/>`
      : ''
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * scale}" height="${H * scale}" shape-rendering="crispEdges" role="img" aria-label="${title}"><title>${title}</title>${bg}${groups.join('')}</svg>\n`
  }
}

const GAP = 1
const WORD_GAP = 6

function hubbit(cv, ox, oy) {
  let x = ox + cv.houseH(ox, oy) + GAP
  for (const ch of 'UBBIT') x += cv.glyph(GLYPHS[ch], x, oy, C.paper, C.paperDeep) + GAP
  return x - GAP - ox
}
function city(cv, ox, oy) {
  let x = ox
  for (const ch of 'CITY') x += cv.glyph(GLYPHS[ch], x, oy, C.accent, C.accentDeep, C.rug) + GAP
  return x - GAP - ox
}
function measure(word) {
  return [...word].reduce((w, ch) => w + GLYPHS[ch][0].length + GAP, 0) - GAP
}

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'brand')
mkdirSync(out, { recursive: true })
const write = (name, svg) => {
  writeFileSync(join(out, name), svg)
  console.log(`public/brand/${name}`)
}

// 1. Mendatar: HUBBIT CITY dalam satu baris
{
  const cv = new Canvas()
  const w = hubbit(cv, 0, 0)
  city(cv, w + WORD_GAP, 0)
  cv.outline()
  cv.dropShadow()
  write('hubbit-city-logo.svg', cv.svg({ title: 'Hubbit City', scale: 6 }))
}

// 2. Bertumpuk: HUBBIT di atas, CITY di tengah bawahnya
{
  const cv = new Canvas()
  const w = hubbit(cv, 0, 0)
  city(cv, Math.round((w - measure('CITY')) / 2), CAP + 4)
  cv.outline()
  cv.dropShadow()
  write('hubbit-city-logo-stacked.svg', cv.svg({ title: 'Hubbit City', scale: 6 }))
}

// 3. Ikon saja: rumah-H (transparan)
{
  const cv = new Canvas()
  cv.houseH(0, 0)
  cv.outline()
  cv.dropShadow()
  write('hubbit-city-mark.svg', cv.svg({ title: 'Hubbit City', scale: 12 }))
}

// 4. Ikon aplikasi / favicon: rumah-H di kotak langit
{
  const cv = new Canvas()
  cv.houseH(0, 0)
  cv.outline()
  cv.dropShadow()
  write('hubbit-city-app-icon.svg', cv.svg({ title: 'Hubbit City', pad: 4, scale: 12, background: { color: C.sky, rx: 5 }, square: true }))
}

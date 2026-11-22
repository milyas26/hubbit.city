import { test } from 'node:test'
import assert from 'node:assert/strict'
import { dict } from '../src/content/dict.ts'

type Tree = { [k: string]: unknown }

function shape(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(shape)
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v as Tree).map(([k, x]) => [k, shape(x)]))
  return typeof v
}

function strings(v: unknown): string[] {
  if (typeof v === 'string') return [v]
  if (Array.isArray(v)) return v.flatMap(strings)
  if (v && typeof v === 'object') return Object.values(v as Tree).flatMap(strings)
  return []
}

test('kamus id dan en punya kunci dan panjang daftar yang sama', () => {
  assert.deepEqual(shape(dict.en), shape(dict.id))
})

test('tidak ada teks kosong maupun em dash', () => {
  for (const lang of ['id', 'en'] as const) {
    for (const s of strings(dict[lang])) {
      assert.ok(s.trim().length > 0, `teks kosong di ${lang}`)
      assert.ok(!s.includes('—'), `em dash di ${lang}: ${s}`)
    }
  }
})

test('nama diri gedung sama di kedua bahasa', () => {
  assert.deepEqual(
    dict.en.buildings.list.map((b) => b.name),
    dict.id.buildings.list.map((b) => b.name),
  )
})

test('tidak menyebut uang simulasi/sungguhan maupun detail internal', () => {
  const banned = /simulasi|sungguhan|simulat|real money|real payment|server|otoritas|authority/i
  for (const lang of ['id', 'en'] as const) {
    for (const s of strings(dict[lang])) assert.ok(!banned.test(s), `wording internal di ${lang}: ${s}`)
  }
})

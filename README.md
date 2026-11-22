# Hubbit City · landing page

Halaman publik yang memperkenalkan Hubbit City dan mengarahkan pengunjung ke aplikasi (`../app`).
Next.js 16 (App Router), React 19, Tailwind 4. Semua halaman dirender statis saat build.

```
npm install
npm run dev        # http://localhost:3100
npm run typecheck && npm run lint && npm test && npm run build
```

## Struktur

| Path | Isi |
|---|---|
| `src/app/(id)/` | Root layout + halaman `/` (Bahasa Indonesia, bawaan) |
| `src/app/(en)/en/` | Root layout + halaman `/en` (English) |
| `src/app/globals.css` | Token warna (salinan `app/src/theme/tokens.ts`) + utilitas `floor-chip` |
| `src/components/Landing.tsx` | Seluruh bagian halaman (server component) |
| `src/components/LiftDemo.tsx` | Peraga lift interaktif (satu-satunya client component) |
| `src/content/dict.ts` | Semua teks, `id` dan `en`. Teks baru wajib punya keduanya |
| `src/content/appUrl.ts` | Tautan ke app, dari `NEXT_PUBLIC_APP_URL` (bawaan `http://localhost:8080`) |
| `test/` | `node:test`: kamus id/en sama bentuknya, tanpa teks kosong/em dash |

## Aturan isi

- Hanya tulis fitur yang berstatus ✅ di `SPEC.md` §6. Yang masih simulasi disebut apa adanya.
- Tanpa statistik, testimoni, atau logo pihak ketiga. Semua nama fiktif (SPEC §2.2).
- Warna hanya dari token di `globals.css`.

## Deploy

`next.config.ts` memakai `output: 'standalone'`. Set `NEXT_PUBLIC_APP_URL` saat **build**
(nilainya ditanam ke HTML statis), lalu jalankan `node .next/standalone/server.js`.

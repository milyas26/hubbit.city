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
| `scripts/logo.mjs` | Generator logo pixel (`npm run logo` → `public/brand/*.svg`) |
| `public/brand/` | Logo mendatar, bertumpuk, ikon rumah-H, ikon aplikasi persegi |
| `test/` | `node:test`: kamus id/en sama bentuknya, tanpa teks kosong/em dash |

## Aturan isi

- Hanya tulis fitur yang berstatus ✅ di `SPEC.md` §6. Yang masih simulasi disebut apa adanya.
- Tanpa statistik, testimoni, atau logo pihak ketiga. Semua nama fiktif (SPEC §2.2).
- Warna hanya dari token di `globals.css`.

## Deploy (Cloudflare Workers)

Landing diekspor statis (`output: 'export'` → `out/`) lalu disajikan Worker tanpa kode
(`wrangler.jsonc`, static assets) di custom domain **https://hubbit.city** dan **https://www.hubbit.city**
(konten sama; `<link rel="canonical">` selalu ke apex). Cloudflare mengurus record DNS dan sertifikat keduanya.

```
npx wrangler login   # sekali per mesin
npm run deploy       # next build && wrangler deploy
```

`NEXT_PUBLIC_APP_URL` untuk production ada di `.env.production` (`https://play.hubbit.city`) dan ditanam
ke HTML saat build, jadi ubah nilainya lalu deploy ulang bila alamat game berubah.

/**
 * Alamat aplikasi utama (frontend `app/`). Bawaan = stack Docker di :8080 (SPEC §3).
 * Diisi saat build lewat NEXT_PUBLIC_APP_URL, mis. https://kota.contoh.test.
 */
const BASE = (process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:8080').replace(/\/+$/, '')

export function appUrl(path: `/${string}` = '/'): string {
  return `${BASE}${path}`
}

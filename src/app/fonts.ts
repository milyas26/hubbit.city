import { Pixelify_Sans, Plus_Jakarta_Sans } from 'next/font/google'

// Font yang sama dengan app/index.html. next/font mengunduhnya saat build dan menyajikannya
// dari domain sendiri, jadi pengunjung tidak memanggil server pihak ketiga.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-pixelify',
  display: 'swap',
})

import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { dict } from '@/content/dict'
import { jakarta, pixelify } from '../fonts'
import '../globals.css'

const t = dict.en

export const metadata: Metadata = {
  metadataBase: new URL('https://hubbit.city'),
  title: t.meta.title,
  description: t.meta.description,
  icons: { icon: '/brand/hubbit-city-app-icon.svg' },
  alternates: { canonical: '/en/', languages: { id: '/' } },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${pixelify.variable}`}>
      <body>{children}</body>
    </html>
  )
}

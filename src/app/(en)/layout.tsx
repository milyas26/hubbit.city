import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { dict } from '@/content/dict'
import { jakarta, pixelify } from '../fonts'
import '../globals.css'

const t = dict.en

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: { languages: { id: '/' } },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${pixelify.variable}`}>
      <body>{children}</body>
    </html>
  )
}

import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: 'Portafolio | Desarrollador Frontend',
  description:
    'Portafolio minimalista de un desarrollador frontend creando interfaces con precisión y cuidado.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.className} ${geistMono.className}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/Organisms/Header'
import HomeFormSection from '@/components/Organisms/HomeFormSection'
import Footer from '@/components/Organisms/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Via Certa',
  description: 'Página da via certa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <HomeFormSection />
        <Footer />
      </body>
    </html>
  )
}

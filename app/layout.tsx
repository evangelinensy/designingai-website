import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DesigningAI.co - A Community for AI Product Designers',
  description: 'Join our community of designers and product leaders shaping the future of AI experiences.',
  metadataBase: new URL('https://designingai.co'),
  openGraph: {
    title: 'DesigningAI.co - A Community for AI Product Designers',
    description: 'Join our community of designers and product leaders shaping the future of AI experiences.',
    url: 'https://designingai.co',
    siteName: 'DesigningAI.co',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DesigningAI.co - A Community for AI Product Designers',
    description: 'Join our community of designers and product leaders shaping the future of AI experiences.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


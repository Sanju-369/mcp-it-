import type { Metadata } from 'next'
import { Space_Mono, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'MCP-IT — Get Your Business Found by AI Shoppers',
  description: 'We implement UCP, ACP and MCP for independent businesses so they appear in ChatGPT and Google AI shopping. 48 hours. No technical knowledge needed.',
  keywords: 'AI shopping, ChatGPT shopping, Google AI Mode, UCP, ACP, MCP server, agentic commerce',
  openGraph: {
    title: 'MCP-IT — Get Your Business Found by AI Shoppers',
    description: 'Your business is invisible to ChatGPT and Google AI shoppers right now. We fix that in 48 hours.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  )
}

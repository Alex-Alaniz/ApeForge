import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ApeForge - Forging the future of ApeChain",
  description: "ApeForge is a platform for building and discovering tools for ApeChain",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  // OpenGraph metadata
  openGraph: {
    title: "ApeForge - Forging the future of ApeChain",
    description: "ApeForge is a platform for building and discovering tools for ApeChain ecosystem",
    url: "https://apeforge.io",
    siteName: "ApeForge",
    images: [
      {
        url: "/ApeForge.jpg",
        width: 1200,
        height: 630,
        alt: "ApeForge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "ApeForge - Forging the future of ApeChain",
    description: "ApeForge is a platform for building and discovering tools for ApeChain ecosystem",
    images: ["/ApeForge.jpg"],
    creator: "@AlexDotEth",
  },
  // Additional metadata
  icons: {
    icon: "/images/apechain-icon-white.svg",
    shortcut: "/images/apechain-icon-white.svg",
    apple: "/images/apechain-icon-outlined-white.png",
  },
  themeColor: "#000000",
  manifest: "/manifest.json",
  // Ensure other apps like iMessage can find the image
  other: {
    "og:image": "/ApeForge.jpg",
    "og:image:secure_url": "https://apeforge.io/ApeForge.jpg",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "ApeForge"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black min-h-screen flex flex-col`}>{children}</body>
    </html>
  )
}



import './globals.css'
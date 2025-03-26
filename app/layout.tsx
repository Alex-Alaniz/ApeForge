import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Absolute URL for consistent image references
const SITE_URL = "https://apeforge.io";
const SHARE_IMAGE = "/ApeForge.jpg";
const ABSOLUTE_SHARE_IMAGE = `${SITE_URL}${SHARE_IMAGE}`;

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
    url: SITE_URL,
    siteName: "ApeForge",
    images: [
      {
        url: ABSOLUTE_SHARE_IMAGE,
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
    images: [ABSOLUTE_SHARE_IMAGE],
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
    "og:image": ABSOLUTE_SHARE_IMAGE,
    "og:image:secure_url": ABSOLUTE_SHARE_IMAGE,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "ApeForge",
    "og:image:type": "image/jpeg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <head>
        {/* Force image for sharing protocols with explicit meta tags */}
        <link rel="image_src" href={ABSOLUTE_SHARE_IMAGE} />
        <meta property="og:image" content={ABSOLUTE_SHARE_IMAGE} />
        <meta property="og:image:secure_url" content={ABSOLUTE_SHARE_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ApeForge" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:image" content={ABSOLUTE_SHARE_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${inter.className} bg-black min-h-screen flex flex-col`}>{children}</body>
    </html>
  )
}



import './globals.css'
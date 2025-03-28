import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { InteractiveParticleText } from "@/components/interactive-particle-text"
import type { Metadata } from "next"

// Absolute URL for consistent image references
const SITE_URL = "https://apeforge.io";
const SHARE_IMAGE = "/ApeForge.jpg";
const ABSOLUTE_SHARE_IMAGE = `${SITE_URL}${SHARE_IMAGE}`;

export const metadata: Metadata = {
  title: "About ApeForge - Our Mission and Story",
  description: "Learn about ApeForge, a platform dedicated to building and developing tools for the ApeChain ecosystem.",
  openGraph: {
    title: "About ApeForge - Our Mission and Story",
    description: "Learn about ApeForge, a platform dedicated to building and developing tools for the ApeChain ecosystem.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: ABSOLUTE_SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "ApeForge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ApeForge - Our Mission and Story",
    description: "Learn about ApeForge, a platform dedicated to building and developing tools for the ApeChain ecosystem.",
    images: [ABSOLUTE_SHARE_IMAGE],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col items-center mb-4 md:mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
            <div>
              <span className="text-3xl md:text-4xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-bold">About</span>
            </div>
            <div>
              <InteractiveParticleText text="APEFORGE" size="medium" className="inline-block" />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8 md:mb-12">
            <Image
              src="/images/apechain-icon-outlined-white.png"
              alt="ApeChain Logo"
              width={120}
              height={120}
              className="h-auto w-24 md:w-32 lg:w-auto xl:w-28 2xl:w-32"
            />
          </div>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg xl:text-base 2xl:text-lg">
            <p>
              ApeForge is a platform dedicated to building and developing tools for the ApeChain ecosystem. Our mission
              is to forge the future of blockchain technology by creating innovative solutions that empower developers
              and users alike.
            </p>

            <p>
              Just as a blacksmith transforms raw materials into useful tools, ApeForge transforms ideas and code into
              powerful applications that serve the ApeChain community. Our team of skilled ApeSmiths works tirelessly to
              craft high-quality tools that push the boundaries of what's possible on ApeChain.
            </p>

            <p>
              From block explorers to decentralized marketplaces, our forge produces a wide range of tools at various
              stages of development. We categorize our projects into three stages:
            </p>

            <ul className="list-disc pl-6 space-y-1 md:space-y-2">
              <li>
                <strong>ApeSteel</strong> - Completed projects that are fully forged and ready for use
              </li>
              <li>
                <strong>ApeBlanks</strong> - Projects in active development that are taking shape
              </li>
              <li>
                <strong>ApeOre</strong> - Ideas and concepts in the early stages of exploration
              </li>
            </ul>

            <p>
              We believe in the power of community and collaboration. If you're interested in contributing to our
              projects or have ideas for new tools, we welcome you to join our team of ApeSmiths.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


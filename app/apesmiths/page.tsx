import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Globe, Twitter } from "lucide-react"
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ApeSmiths - Meet the Team Building ApeForge",
  description: "Meet the master smiths forging the future of ApeChain through innovative tools and applications.",
  openGraph: {
    title: "ApeSmiths - Meet the Team Building ApeForge",
    description: "Meet the master smiths forging the future of ApeChain through innovative tools and applications.",
    url: "https://apeforge.io/apesmiths",
    images: [
      {
        url: "/ApeForge.jpg",
        width: 1200,
        height: 630,
        alt: "ApeForge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ApeSmiths - Meet the Team Building ApeForge",
    description: "Meet the master smiths forging the future of ApeChain through innovative tools and applications.",
    images: ["/ApeForge.jpg"],
  },
}

export default function ApesmithsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-blue-500">ApeSmiths</h1>
        <h2 className="text-2xl md:text-3xl font-light text-center mb-16">Meet the master smith forging the future</h2>

        <div className="flex justify-center mb-16">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.3] border-white/[0.2] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                devAleX Forge
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2">
                Lead Smith - Specializes in forging blockchain infrastructure, smart contracts, and innovative ApeChain
                tools.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/ApeForge.jpg"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="devAleX Forge"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://x.com/AlexDotEth"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-blue-300 flex items-center"
                >
                  <Twitter className="mr-1 h-4 w-4" /> 𝕏 →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://alexalaniz.com"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center"
                >
                  <Globe className="mr-1 h-4 w-4" /> Website
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="max-w-2xl mx-auto mb-8">
            We're looking for talented individuals to join our team of ApeSmiths. If you're passionate about blockchain
            technology and want to help forge the future of ApeChain, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


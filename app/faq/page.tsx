import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InteractiveParticleText } from "@/components/interactive-particle-text"

// Absolute URL for consistent image references
const SITE_URL = "https://apeforge.io";
const SHARE_IMAGE = "/ApeForge.jpg";
const ABSOLUTE_SHARE_IMAGE = `${SITE_URL}${SHARE_IMAGE}`;

const faqs = [
  {
    question: "What is ApeForge?",
    answer:
      "ApeForge is a platform dedicated to building and developing tools for the ApeChain ecosystem. We create applications and services that enhance the functionality and usability of ApeChain.",
  },
  {
    question: "What does 'ApeSteel', 'ApeBlanks', and 'ApeOre' mean?",
    answer:
      "These are our project development stages. ApeSteel represents completed projects ready for use, ApeBlanks are projects in active development, and ApeOre refers to ideas and concepts in the early exploration phase.",
  },
  {
    question: "How can I contribute to ApeForge?",
    answer:
      "We welcome contributions from developers, designers, and blockchain enthusiasts. You can reach out to us through our contact page or join our community channels to learn more about becoming an ApeSmith.",
  },
  {
    question: "Are ApeForge tools open source?",
    answer:
      "Many of our tools are open source, allowing the community to contribute and build upon our work. Check the specific project repository for license information.",
  },
  {
    question: "How do I report issues with ApeForge tools?",
    answer:
      "You can report issues through our GitHub repositories or contact our support team directly. We appreciate community feedback to help improve our tools.",
  },
  {
    question: "What is the relationship between ApeForge and ApeChain?",
    answer:
      "ApeForge is an independent platform that builds tools specifically for the ApeChain ecosystem. We're powered by ApeCoin but operate as a separate entity focused on development.",
  },
]

export const metadata: Metadata = {
  title: "FAQ - ApeForge Frequently Asked Questions",
  description: "Find answers to commonly asked questions about ApeForge, its tools, and the ApeChain ecosystem.",
  openGraph: {
    title: "FAQ - ApeForge Frequently Asked Questions",
    description: "Find answers to commonly asked questions about ApeForge, its tools, and the ApeChain ecosystem.",
    url: `${SITE_URL}/faq`,
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
    title: "FAQ - ApeForge Frequently Asked Questions",
    description: "Find answers to commonly asked questions about ApeForge, its tools, and the ApeChain ecosystem.",
    images: [ABSOLUTE_SHARE_IMAGE],
  },
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            <InteractiveParticleText text="APEFORGE" size="medium" className="inline-block" />{" "}
            <span className="text-blue-500">FAQ</span>
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-light text-center mb-16">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-800 pb-8">
                <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="max-w-2xl mx-auto mb-8">
            If you couldn't find the answer to your question, feel free to reach out to us directly.
          </p>
          <a
            href="mailto:info@apeforge.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


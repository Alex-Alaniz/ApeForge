import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ThreeDCardDemo from "@/components/3d-card-demo"
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { InteractiveParticleText } from "@/components/interactive-particle-text"
import Image from "next/image"

export default function ForgeToolsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold">
            <InteractiveParticleText text="APEFORGE" size="medium" className="inline-block" />{" "}
            <span className="text-blue-500">Tools</span>
          </h1>
        </div>
        <p className="text-lg md:text-xl xl:text-lg 2xl:text-xl text-center mb-6 md:mb-8 max-w-3xl mx-auto">
          Powerful tools being forged for the ApeChain ecosystem
        </p>

        {/* Status Legend */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          <div className="flex items-center">
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-600 mr-1 md:mr-2"></span>
            <span className="text-xs md:text-sm text-gray-300">ApeSteel - Ready to use</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-600 mr-1 md:mr-2"></span>
            <span className="text-xs md:text-sm text-gray-300">ApeBlanks - In development</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-amber-600 mr-1 md:mr-2"></span>
            <span className="text-xs md:text-sm text-gray-300">ApeOre - Early concept</span>
          </div>
        </div>

        {/* All Forging Categories in a flexible layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* ApeSteel Section */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white py-1 md:py-2 px-3 md:px-4 rounded-md w-fit mb-3 md:mb-4 text-sm md:text-base">Forging status : ApeSteel</div>
            <div className="transform scale-[0.8] md:scale-85 xl:scale-75 origin-top w-full">
              <ThreeDCardDemo
                title="ApeForge Scan"
                description="AI-powered block explorer built on Thirdweb Nebula"
                imageSrc="/images/apeforge-scan-screenshot.png"
                buttonText="Explore"
                buttonLink="https://apeforge.io/scan"
              />
            </div>
          </div>

          {/* ApeBlanks Section */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-600 text-white py-1 md:py-2 px-3 md:px-4 rounded-md w-fit mb-3 md:mb-4 text-sm md:text-base">Forging status : ApeBlanks</div>
            <div className="transform scale-[0.8] md:scale-85 xl:scale-75 origin-top w-full">
              <ThreeDCardDemo
                title="Primape Markets"
                description="The top decentralized prediction marketplace on ApeChain"
                imageSrc="/images/primape-markets.png"
                buttonText="Trade"
                buttonLink="https://www.primape.app/"
              />
            </div>
          </div>

          {/* ApeOre Section */}
          <div className="flex flex-col items-center md:col-span-2 lg:col-span-1 mx-auto">
            <div className="bg-amber-600 text-white py-1 md:py-2 px-3 md:px-4 rounded-md w-fit mb-3 md:mb-4 text-sm md:text-base">Forging status : ApeOre</div>
            <div className="transform scale-[0.8] md:scale-85 xl:scale-75 origin-top w-full">
              <BridgeCard3D />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 md:mt-8 text-center">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Have an idea for a new tool?</h3>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6">
            We're always looking to expand our toolset. If you have an idea for a tool that would benefit the ApeChain
            ecosystem, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 md:px-6 rounded-md text-sm md:text-base font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// 3D Card for Bridge with "Coming Soon" button
function BridgeCard3D() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.3] border-white/[0.2] w-auto sm:w-[22rem] h-auto rounded-xl p-4 md:p-6 border">
        <CardItem translateZ="50" className="text-lg md:text-xl font-bold text-white">
          ApeForge Bridge
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-300 text-xs md:text-sm max-w-sm mt-2">
          Cross-chain bridge connecting ApeChain to other networks
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/apeforge-bridge-gorilla.png"
            alt="ApeForge Bridge"
            width={500}
            height={300}
            className="h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-16 md:mt-20">
          <CardItem translateZ={20} as="div" className="px-3 md:px-4 py-1 md:py-2 rounded-xl bg-amber-600 text-white text-xs font-bold">
            Coming Soon
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}


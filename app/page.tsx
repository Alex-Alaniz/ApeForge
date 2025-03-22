"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InteractiveParticleText } from "@/components/interactive-particle-text"

const slides = [
  {
    image: "/images/apeforge-scan-screenshot.png",
    alt: "ApeForge Scan - AI-Powered ApeChain Explorer",
  },
  {
    image: "/images/primape-markets-hero.png",
    alt: "Primape Markets - Prediction marketplace on ApeChain",
  },
  {
    image: "/images/apeforge-bridge-gorilla.png",
    alt: "ApeForge Bridge - Connecting blockchain networks",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex justify-center mb-4">
              <InteractiveParticleText 
                text="APEFORGE" 
                size="large" 
                color="white" 
                hoverColor="#3b82f6" 
              />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light">Forging the future of ApeChain</h2>
          </div>

          {/* Slider */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].alt}
                    fill
                    className="object-contain bg-black"
                    priority={currentSlide === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 p-1 md:p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="md:size-24" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 p-1 md:p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="md:size-24" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentSlide ? "bg-blue-500" : "bg-white/50"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


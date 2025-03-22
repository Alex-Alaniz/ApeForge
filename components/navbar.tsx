"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tools", path: "/ForgeTools" },
    { name: "ApeSmiths", path: "/apesmiths" },
    { name: "Faq", path: "/faq" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="container mx-auto p-4 flex justify-between items-center relative z-50">
      <Link href="/" className="flex items-center gap-2 group">
        <Image 
          src="/images/apechain-icon-white.svg" 
          alt="ApeForge Logo" 
          width={40} 
          height={40}
          className="w-8 h-8 md:w-10 md:h-10 xl:w-8 xl:h-8" 
        />
        <span className="font-bold text-md md:text-xl xl:text-lg 2xl:text-xl relative overflow-hidden">
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-100%]">
            APEFORGE
          </span>
          <span className="absolute top-0 left-0 text-blue-500 transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0">
            APEFORGE
          </span>
        </span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`relative ${pathname === item.path ? "text-blue-500" : "text-white"}`}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="relative z-10">{item.name}</span>
            {hoveredItem === item.path && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-[wipe-in_0.3s_ease-out]"></span>
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white p-2" 
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 border-t border-gray-800 p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-lg ${pathname === item.path ? "text-blue-500" : "text-white"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}


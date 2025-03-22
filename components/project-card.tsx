"use client"

import Image from "next/image"
import { useState } from "react"

interface ProjectCardProps {
  logo: string
  title: string
  description: string
  contributors: string[]
}

export function ProjectCard({ logo, title, description, contributors }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovered ? "0 10px 25px -5px rgba(59, 130, 246, 0.1)" : "none",
      }}
    >
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="bg-black p-4 rounded-lg">
            <Image
              src={logo || "/placeholder.svg"}
              alt={`${title} logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>

        <div className="flex items-center border-t border-gray-800 pt-4">
          <span className="text-sm text-gray-400 mr-2">ApeSmiths</span>
          <div className="flex -space-x-2">
            {contributors.map((contributor, index) => (
              <Image
                key={index}
                src={contributor || "/placeholder.svg"}
                alt="Contributor"
                width={24}
                height={24}
                className="rounded-full border border-gray-800"
              />
            ))}
            {contributors.length === 0 && <div className="w-6 h-6 rounded-full bg-gray-800"></div>}
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface LogoTextProps {
  size?: "small" | "medium" | "large"
  showIcon?: boolean
  className?: string
}

export function LogoText({ size = "medium", showIcon = true, className = "" }: LogoTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const fontSize = size === "small" ? "text-xl" : size === "medium" ? "text-3xl" : "text-5xl"
  const iconSize = size === "small" ? 24 : size === "medium" ? 40 : 60

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      const textWidth = size === "small" ? 120 : size === "medium" ? 180 : 240
      const textHeight = size === "small" ? 30 : size === "medium" ? 45 : 60
      canvas.width = textWidth
      canvas.height = textHeight
    }

    updateCanvasSize()

    // Create particles
    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      velocity: { x: number; y: number }
    }[] = []

    const createParticles = () => {
      particles = []
      const particleCount = size === "small" ? 30 : size === "medium" ? 50 : 80

      // Draw text to get pixel data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "white"
      ctx.font = `bold ${size === "small" ? 24 : size === "medium" ? 36 : 48}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("APEFORGE", canvas.width / 2, canvas.height / 2)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Sample pixels to create particles
      const gap = size === "small" ? 4 : size === "medium" ? 3 : 2
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4
          if (data[index + 3] > 128) {
            // If pixel is not transparent
            particles.push({
              x,
              y,
              baseX: x,
              baseY: y,
              size: Math.random() * 1.5 + 0.5,
              color: isHovered ? "#3b82f6" : "white",
              velocity: {
                x: 0,
                y: 0,
              },
            })
          }
        }
      }
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        if (isHovered) {
          // Add some random movement when hovered
          p.velocity.x += (Math.random() - 0.5) * 0.3
          p.velocity.y += (Math.random() - 0.5) * 0.3

          // Apply velocity with damping
          p.x += p.velocity.x
          p.y += p.velocity.y
          p.velocity.x *= 0.95
          p.velocity.y *= 0.95

          // Return to base position
          const dx = p.baseX - p.x
          const dy = p.baseY - p.y
          p.x += dx * 0.05
          p.y += dy * 0.05

          p.color = "#3b82f6"
        } else {
          // Return to original position
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          p.color = "white"
        }

        ctx.fillStyle = p.color
        ctx.fillRect(p.x, p.y, p.size, p.size)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    window.addEventListener("resize", updateCanvasSize)

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isHovered, size])

  return (
    <Link
      href="/"
      className={`flex items-center gap-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showIcon && (
        <Image
          src="/images/apechain-icon-white.svg"
          alt="ApeForge Logo"
          width={iconSize}
          height={iconSize}
          className={`transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
        />
      )}
      <canvas ref={canvasRef} className={`${fontSize} font-bold logo-text`} aria-label="APEFORGE" />
    </Link>
  )
}


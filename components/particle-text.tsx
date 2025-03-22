"use client"

import { useEffect, useRef, useState } from "react"

interface ParticleTextProps {
  text: string
  size?: "small" | "medium" | "large"
  color?: string
  hoverColor?: string
  className?: string
  isActive?: boolean
}

export function ParticleText({
  text,
  size = "small",
  color = "white",
  hoverColor = "#3b82f6",
  className = "",
  isActive = false,
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Adjust sizes based on the text size
  const fontSize = size === "small" ? 18 : size === "medium" ? 28 : 42
  const canvasWidth = text.length * (size === "small" ? 12 : size === "medium" ? 18 : 26)
  const canvasHeight = size === "small" ? 30 : size === "medium" ? 45 : 60

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for high-DPI displays
    const dpr = window.devicePixelRatio || 1
    canvas.width = canvasWidth * dpr
    canvas.height = canvasHeight * dpr

    // Scale the context to account for the device pixel ratio
    ctx.scale(dpr, dpr)

    // Set canvas CSS dimensions
    canvas.style.width = `${canvasWidth}px`
    canvas.style.height = `${canvasHeight}px`

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

      // Draw text to get pixel data
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
      ctx.fillStyle = isActive ? hoverColor : color
      ctx.font = `bold ${fontSize}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(text, canvasWidth / 2, canvasHeight / 2)

      // Get image data scaled for DPR
      const imageData = ctx.getImageData(0, 0, canvas.width / dpr, canvas.height / dpr)
      const data = imageData.data

      // Sample pixels to create particles - reduce gap for higher density
      const gap = size === "small" ? 2 : size === "medium" ? 2 : 1
      for (let y = 0; y < canvasHeight; y += gap) {
        for (let x = 0; x < canvasWidth; x += gap) {
          const index = (y * canvasWidth + x) * 4
          if (data[index + 3] > 128) {
            // If pixel is not transparent
            particles.push({
              x,
              y,
              baseX: x,
              baseY: y,
              size: Math.random() * 1.2 + 0.8,
              color: isActive || isHovered ? hoverColor : color,
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
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)

      for (const p of particles) {
        if (isHovered || isActive) {
          // Add some random movement when hovered
          p.velocity.x += (Math.random() - 0.5) * 0.2
          p.velocity.y += (Math.random() - 0.5) * 0.2

          // Apply velocity with damping
          p.x += p.velocity.x
          p.y += p.velocity.y
          p.velocity.x *= 0.96
          p.velocity.y *= 0.96

          // Return to base position
          const dx = p.baseX - p.x
          const dy = p.baseY - p.y
          p.x += dx * 0.04
          p.y += dy * 0.04

          p.color = hoverColor
        } else {
          // Return to original position
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          p.color = color
        }

        ctx.fillStyle = p.color
        ctx.fillRect(p.x, p.y, p.size, p.size)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    const handleResize = () => {
      // Update canvas dimensions on resize
      canvas.width = canvasWidth * dpr
      canvas.height = canvasHeight * dpr
      canvas.style.width = `${canvasWidth}px`
      canvas.style.height = `${canvasHeight}px`
      ctx.scale(dpr, dpr)
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isHovered, isActive, text, size, color, hoverColor, canvasWidth, canvasHeight, fontSize])

  return (
    <canvas
      ref={canvasRef}
      className={`${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={text}
      style={{
        width: canvasWidth,
        height: canvasHeight,
      }}
    />
  )
}


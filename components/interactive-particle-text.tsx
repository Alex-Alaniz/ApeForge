"use client"

import { useRef, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface InteractiveParticleTextProps {
  text: string
  size?: "small" | "medium" | "large"
  color?: string
  hoverColor?: string
  className?: string
  isActive?: boolean
}

export function InteractiveParticleText({
  text = "APEFORGE",
  size = "medium",
  color = "white",
  hoverColor = "#3b82f6",
  className = "",
  isActive = false,
}: InteractiveParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  // Determine dimensions based on size and screen width
  const getFontSize = () => {
    const baseSize = size === "small" ? 24 : size === "medium" ? 48 : 72
    
    if (isMobile) {
      // Reduce font size on mobile
      return size === "small" ? 18 : size === "medium" ? 32 : 42
    }
    
    return baseSize
  }

  const getCanvasWidth = () => {
    const fontSize = getFontSize()
    // Ensure text fits within viewport
    const calculatedWidth = text.length * (fontSize * 0.6) // Approximate width based on font size
    const maxWidth = typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.9, calculatedWidth) : calculatedWidth
    return maxWidth
  }

  const getCanvasHeight = () => {
    const fontSize = getFontSize()
    return fontSize * 1.2 // Approximate height based on font size
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for high-DPI displays
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      setIsMobile(window.innerWidth < 768)

      const width = getCanvasWidth()
      const height = getCanvasHeight()

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    updateCanvasSize()

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      velocity: { x: number; y: number }
    }[] = []

    let textImageData: ImageData | null = null

    function createTextImage() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw text to get pixel data
      const fontSize = getFontSize()
      ctx.font = `bold ${fontSize}px monospace`
      ctx.fillStyle = isActive ? hoverColor : color
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(
        text,
        canvas.width / (2 * (window.devicePixelRatio || 1)),
        canvas.height / (2 * (window.devicePixelRatio || 1)),
      )

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    function createParticles() {
      if (!ctx || !canvas || !textImageData) return

      particles = []
      const data = textImageData.data
      const dpr = window.devicePixelRatio || 1

      // Sample pixels to create particles
      // Adjust particle density based on device (fewer particles on mobile)
      const gap = isMobile 
        ? (size === "small" ? 4 : size === "medium" ? 3 : 2) 
        : (size === "small" ? 3 : size === "medium" ? 2 : 1)
      
      for (let y = 0; y < canvas.height; y += gap * dpr) {
        for (let x = 0; x < canvas.width; x += gap * dpr) {
          const index = (y * canvas.width + x) * 4
          if (data[index + 3] > 128) {
            // If pixel is not transparent
            particles.push({
              x: x / dpr,
              y: y / dpr,
              baseX: x / dpr,
              baseY: y / dpr,
              size: Math.random() * 1.5 + 0.5,
              color: isActive ? hoverColor : color,
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

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1))

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = isMobile ? 70 : 100 // Smaller interaction radius on mobile
      const isInteracting = (isTouchingRef.current || !("ontouchstart" in window)) && mouseX > 0 && mouseY > 0 // Only interact if mouse is over canvas

      for (const p of particles) {
        if (isInteracting || isActive) {
          // Calculate distance from mouse to particle
          const rect = canvas.getBoundingClientRect()
          const canvasX = mouseX - rect.left
          const canvasY = mouseY - rect.top

          const dx = canvasX - p.x
          const dy = canvasY - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Repel particles from mouse
            const force = (maxDistance - distance) / maxDistance
            const angle = Math.atan2(dy, dx)
            const moveX = Math.cos(angle) * force * 15
            const moveY = Math.sin(angle) * force * 15

            p.x = p.baseX - moveX
            p.y = p.baseY - moveY
            p.color = hoverColor
          } else {
            // Return to original position with some randomness
            p.velocity.x += (Math.random() - 0.5) * 0.3
            p.velocity.y += (Math.random() - 0.5) * 0.3
            p.x += p.velocity.x
            p.y += p.velocity.y
            p.velocity.x *= 0.95
            p.velocity.y *= 0.95

            const dx = p.baseX - p.x
            const dy = p.baseY - p.y
            p.x += dx * 0.05
            p.y += dy * 0.05

            p.color = isActive ? hoverColor : color
          }
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

    createTextImage()
    createParticles()
    animate()

    const handleResize = () => {
      updateCanvasSize()
      createTextImage()
      createParticles()
    }

    const handleMove = (x: number, y: number) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [text, size, color, hoverColor, isActive, pathname, isMobile])

  // Use relative to ensure it remains responsive in its container
  return (
    <canvas
      ref={canvasRef}
      className={`${className} cursor-pointer select-none max-w-full`}
      style={{ display: "block" }}
    />
  )
}


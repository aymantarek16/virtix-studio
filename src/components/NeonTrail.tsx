"use client"

import { alpha } from "framer-motion"
import { useEffect, useRef } from "react"

export default function NeonTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const mouse = { x: width / 2, y: height / 2 }
    const trail: { x: number; y: number }[] = []

    const maxTrail = 25

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("mousemove", handleMove)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      trail.push({ x: mouse.x, y: mouse.y })
      if (trail.length > maxTrail) trail.shift()

      ctx.lineJoin = "round"
      ctx.lineCap = "round"

      for (let i = 0; i < trail.length - 1; i++) {
        const p1 = trail[i]
        const p2 = trail[i + 1]

        const alpha = i / trail.length

        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)

        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.lineWidth = 2 + alpha * 6

        ctx.shadowColor = "rgba(0, 212, 255, 0.8)"
        ctx.shadowBlur = 20

        ctx.stroke()
      }

      requestAnimationFrame(render)
    }

    render()

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute top-0 left-0 z-50"
    />
  )
}
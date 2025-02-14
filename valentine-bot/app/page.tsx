"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import FloatingHearts from "@/components/FloatingHearts"
import SwayingFlowers from "@/components/SwayingFlowers"
import AnimatedClouds from "@/components/AnimatedClouds"
import AnimatedGrass from "@/components/AnimatedGrass"
import AnimatedSun from "@/components/AnimatedSun"
import AnimatedTiger from "@/components/AnimatedTiger"

export default function Page1() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-50 overflow-hidden">
      <AnimatedClouds />
      <AnimatedGrass />
      <AnimatedSun />
      <AnimatedTiger />
      <FloatingHearts />
      <SwayingFlowers />
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-8 font-pacifico"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        Happy Valentine's Day, My Love! ❤️
      </motion.h1>
      <motion.div
        className="text-center max-w-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-xl text-red-500 mb-4 font-lato">
          Every day with you is a new adventure filled with joy and love.
        </p>
        <p className="text-xl text-red-500 mb-4 font-lato">
          Your smile brightens my world in ways I never thought possible.
        </p>
        <p className="text-xl text-red-500 mb-8 font-lato">
          I cherish every moment we spend together, creating beautiful memories. 💖
        </p>
      </motion.div>
      <Link href="/page2">
        <motion.button
          className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next Page
        </motion.button>
      </Link>
    </div>
  )
}


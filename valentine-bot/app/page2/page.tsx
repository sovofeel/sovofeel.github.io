"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import FloatingHeartsAndNotes from "@/components/FloatingHeartsAndNotes"
import DancingFigure from "@/components/DancingFigure"
import AnimatedClouds from "@/components/AnimatedClouds"
import AnimatedGrass from "@/components/AnimatedGrass"
import AnimatedSun from "@/components/AnimatedSun"
import AnimatedTiger from "@/components/AnimatedTiger"

export default function Page2() {
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
      <FloatingHeartsAndNotes />
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-8 font-pacifico"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 1 }}
        style={{
          textShadow: "0 0 8px rgba(255, 0, 0, 0.5)",
          animation: "glow 2s ease-in-out infinite alternate",
        }}
      >
        You Light Up My Life 🌟
      </motion.h1>
      <motion.div
        className="text-center max-w-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-xl text-red-500 mb-4 font-lato">Your laughter is the sweetest melody to my ears.</p>
        <p className="text-xl text-red-500 mb-4 font-lato">
          The way you care for others inspires me to be a better person.
        </p>
        <p className="text-xl text-red-500 mb-8 font-lato">
          With you, even the simplest moments become extraordinary. 🌟
        </p>
      </motion.div>
      <DancingFigure />
      <div className="flex justify-between w-full max-w-md mt-8">
        <Link href="/">
          <motion.button
            className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Previous Page
          </motion.button>
        </Link>
        <Link href="/page3">
          <motion.button
            className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next Page
          </motion.button>
        </Link>
      </div>
    </div>
  )
}


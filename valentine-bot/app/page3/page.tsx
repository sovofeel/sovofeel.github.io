"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import HeartFlowerBouquet from "@/components/HeartFlowerBouquet"
import SparklingText from "@/components/SparklingText"
import AnimatedClouds from "@/components/AnimatedClouds"
import AnimatedGrass from "@/components/AnimatedGrass"
import AnimatedSun from "@/components/AnimatedSun"
import AnimatedTiger from "@/components/AnimatedTiger"

export default function Page3() {
  const [isVisible, setIsVisible] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

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
      <SparklingText text="You Are My Everything 🥰" />
      <motion.div
        className="text-center max-w-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-xl text-red-500 mb-4 font-lato">You are my rock, my confidant, and my greatest supporter.</p>
        <p className="text-xl text-red-500 mb-4 font-lato">
          I'm grateful for your love, which makes every day feel like Valentine's Day.
        </p>
        <p className="text-xl text-red-500 mb-8 font-lato">
          Thank you for being you - the most incredible person I know. 💘
        </p>
      </motion.div>
      <HeartFlowerBouquet />
      <motion.button
        className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowThankYou(true)}
      >
        Thank You
      </motion.button>
      {showThankYou && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <h2 className="text-3xl font-bold text-red-600 mb-4 font-pacifico">I Love You! ❤️</h2>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
              onClick={() => setShowThankYou(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
      <Link href="/page2">
        <motion.button
          className="mt-4 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Previous Page
        </motion.button>
      </Link>
    </div>
  )
}


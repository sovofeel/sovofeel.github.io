"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ValentinePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <motion.div initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }} transition={{ duration: 0.5 }}>
        <svg
          className="w-64 h-64 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>
      <motion.h1
        className="mt-8 text-4xl font-bold text-red-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        С Днем святого Валентина, любимая!
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-red-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Ты - мое самое большое сокровище в этом мире!
      </motion.p>
    </div>
  )
}


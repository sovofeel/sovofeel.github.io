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
import LanguageSelector from "@/components/LanguageSelector"
import { useLanguage } from "@/contexts/LanguageContext"

const content = {
  en: {
    title: "You Are My Everything 🥰",
    text1: "You are my main Dumdumish and Boomboomsky.",
    text2: "I'm grateful for your love, which makes every day feel like Valentine's Day.",
    text3: "Thank you for being you - the cutest girl and curly-head I know. 💘",
    thankYouButton: "Thank You",
    closeButton: "Close",
    loveMessage: "I Love You! ❤️",
    prevButton: "Previous Page",
  },
  fr: {
    title: "Tu Es Mon Tout 🥰",
    text1: "Tu es mon principal Dumdumish et Boomboomsky.",
    text2: "Je suis reconnaissant pour ton amour, qui fait de chaque jour une Saint-Valentin.",
    text3: "Merci d'être toi - la fille la plus mignonne et bouclée que je connaisse. 💘",
    thankYouButton: "Merci",
    closeButton: "Fermer",
    loveMessage: "Je T'aime ! ❤️",
    prevButton: "Page Précédente",
  },
  ru: {
    title: "Ты - Моё Всё 🥰",
    text1: "Ты мой главный думдумыш и бумбумский.",
    text2: "Я благодарен за твою любовь, которая делает каждый день похожим на День святого Валентина.",
    text3: "Спасибо за то, что ты есть - самый милая девушка и кудряшик, которого я знаю. 💘",
    thankYouButton: "Спасибо",
    closeButton: "Закрыть",
    loveMessage: "Я Люблю Тебя! ❤️",
    prevButton: "Предыдущая Страница",
  },
  es: {
    title: "Eres Mi Todo 🥰",
    text1: "Eres mi principal Dumdumish y Boomboomsky.",
    text2: "Estoy agradecido por tu amor, que hace que cada día se sienta como el Día de San Valentín.",
    text3: "Gracias por ser tú - la chica más linda y rizada que conozco. 💘",
    thankYouButton: "Gracias",
    closeButton: "Cerrar",
    loveMessage: "¡Te Amo! ❤️",
    prevButton: "Página Anterior",
  },
}

export default function Page3() {
  const [isVisible, setIsVisible] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-50 overflow-hidden">
      <LanguageSelector />
      <AnimatedClouds />
      <AnimatedGrass />
      <AnimatedSun />
      <AnimatedTiger />
      <SparklingText text={content[language].title} />
      <motion.div
        className="text-center max-w-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-xl text-red-500 mb-4 font-lato">{content[language].text1}</p>
        <p className="text-xl text-red-500 mb-4 font-lato">{content[language].text2}</p>
        <p className="text-xl text-red-500 mb-8 font-lato">{content[language].text3}</p>
      </motion.div>
      <HeartFlowerBouquet />
      <motion.button
        className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowThankYou(true)}
      >
        {content[language].thankYouButton}
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
            <h2 className="text-3xl font-bold text-red-600 mb-4 font-pacifico">{content[language].loveMessage}</h2>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
              onClick={() => setShowThankYou(false)}
            >
              {content[language].closeButton}
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
          {content[language].prevButton}
        </motion.button>
      </Link>
    </div>
  )
}


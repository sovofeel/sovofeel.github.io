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
import LanguageSelector from "@/components/LanguageSelector"
import { useLanguage } from "@/contexts/LanguageContext"

const content = {
  en: {
    title: "Happy Valentine's Day, My Love! ❤️",
    text1: "Every hug brings happiness, peace, and joy.",
    text2: "Every song you sing is a banger (except the ones about... you know).",
    text3: "I love when you dance and sing. Or simply when you're near. 💖",
    button: "Next Page",
  },
  fr: {
    title: "Joyeuse Saint-Valentin, Mon Amour ! ❤️",
    text1: "Chaque câlin apporte bonheur, sérénité et joie.",
    text2: "Chaque chanson que tu chantes est un tube (sauf celles qui parlent de... tu sais).",
    text3: "J'adore quand tu danses et chantes. Ou simplement quand tu es près de moi. 💖",
    button: "Page Suivante",
  },
  ru: {
    title: "С Днем Святого Валентина, Любовь Моя! ❤️",
    text1: "Каждый прилип дарит счастье, спокойствие и радость.",
    text2: "Каждая твоя песня это бэнгер (не считая те, которые про ... ну ты поняла).",
    text3: "Люблю, когда ты танцуешь и поешь. Или просто когда ты рядом. 💖",
    button: "Следующая Страница",
  },
  es: {
    title: "¡Feliz Día de San Valentín, Mi Amor! ❤️",
    text1: "Cada abrazo trae felicidad, calma y alegría.",
    text2: "Cada canción que cantas es un éxito (excepto las que hablan de... ya sabes).",
    text3: "Me encanta cuando bailas y cantas. O simplemente cuando estás cerca. 💖",
    button: "Siguiente Página",
  },
}

export default function Page2() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-50 overflow-hidden">
      <LanguageSelector />
      {/* <AnimatedClouds /> */}
      <AnimatedGrass />
      <AnimatedSun />
      <AnimatedTiger />
      <FloatingHeartsAndNotes />
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-8 font-pacifico"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
        transition={{ duration: 1 }}
        style={{
          textShadow: "0 0 8px rgba(255, 0, 0, 0.5)",
          animation: "glow 2s ease-in-out infinite alternate",
        }}
      >
        {content[language].title}
      </motion.h1>
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
      <DancingFigure />
        <div className="mt-4">
        <Link href="/page3">
          <motion.button
            className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content[language].button}
          </motion.button>
        </Link>
        </div>
    </div>
  )
}


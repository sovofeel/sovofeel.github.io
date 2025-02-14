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
import LanguageSelector from "@/components/LanguageSelector"
import { useLanguage } from "@/contexts/LanguageContext"

const content = {
  en: {
    title: "Happy Valentine's Day, Albina! ❤️",
    text1: "Albina, you’re the most cheerful and beautiful person I know. Being with you makes every day so much better.",
    text2: "I love your energy, your love for singing and dancing, and those amazing curls.",
    text3: "We’ve been together for almost three years now, and I still feel lucky every single day to have you in my life. Thank you for being you. 💖",
    button: "Next Page",
  },
  fr: {
    title: "Joyeuse Saint-Valentin, Albina ! ❤️",
    text1: "Albina, tu es la personne la plus joyeuse et belle que je connaisse. Être avec toi rend chaque jour tellement meilleur.",
    text2: "J'adore ton énergie, ton amour pour le chant et la danse, et tes magnifiques boucles.",
    text3: "Nous sommes ensemble depuis presque trois ans maintenant, et je me sens encore chanceux chaque jour de t'avoir dans ma vie. Merci d'être toi. 💖",
    button: "Page Suivante",
  },
  ru: {
    title: "С Днем Святого Валентина, Альбина! ❤️",
    text1: "Альбина, ты самая жизнерадостная и красивая девушка, которую я знаю. С тобой каждый день становится лучше.",
    text2: "Я люблю твою энергию, твою любовь к танцам и пению, и твои потрясающие кудряшки.",
    text3: "Мы уже почти три года вместе, и я каждый день чувствую себя счастливчиком, что ты рядом. Спасибо, что ты есть. 💖",
    button: "Следующая Страница",
  },
  es: {
    title: "¡Feliz Día de San Valentín, Albina! ❤️",
    text1: "Albina, eres la persona más alegre y hermosa que conozco. Estar contigo hace cada día mejor.",
    text2: "Me encanta tu energía, tu amor por cantar y bailar, y esos rizos increíbles.",
    text3: "Ya casi llevamos tres años juntos, y cada día me siento afortunado de tenerte en mi vida. Gracias por ser tú. 💖",
    button: "Siguiente Página",
  },
}

export default function Page1() {
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
      <FloatingHearts />
      <SwayingFlowers />
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-8 font-pacifico"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 1 }}
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
      <Link href="/page2">
        <motion.button
          className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content[language].button}
        </motion.button>
      </Link>
    </div>
  )
}


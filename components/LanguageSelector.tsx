import type React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      className="absolute top-4 right-4 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "fr" | "ru" | "es")}
        className="bg-white border-2 border-red-500 text-red-600 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="ru">🇷🇺 Русский</option>
        <option value="es">🇪🇸 Español</option>
      </select>
    </motion.div>
  )
}

export default LanguageSelector


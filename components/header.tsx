"use client"

import { useLanguage } from "./language-provider"
import { Globe } from "lucide-react"
import CurlyLogo from "./svg/curly-logo"

export default function Header() {
  const { language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <CurlyLogo className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold text-emerald-800">Curly English</span>
        </div>

        <button
          onClick={() => setLanguage(language === "en" ? "ru" : "en")}
          className="flex items-center rounded-md border border-emerald-200 px-3 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
        >
          <Globe className="mr-2 h-4 w-4" />
          {language === "en" ? "RU" : "EN"}
        </button>
      </div>
    </header>
  )
}


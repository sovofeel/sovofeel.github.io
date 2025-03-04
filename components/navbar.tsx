"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { Home, BookOpen, HelpCircle, Users, User, Heart } from "lucide-react"

export default function Navbar() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", icon: <Home className="h-5 w-5" />, label: t("navigation.home") },
    { id: "trial", icon: <BookOpen className="h-5 w-5" />, label: t("navigation.trial") },
    { id: "why-learn", icon: <HelpCircle className="h-5 w-5" />, label: t("navigation.whyLearn") },
    { id: "classes", icon: <Users className="h-5 w-5" />, label: t("navigation.classes") },
    { id: "about", icon: <User className="h-5 w-5" />, label: t("navigation.about") },
    { id: "why-choose", icon: <Heart className="h-5 w-5" />, label: t("navigation.whyChoose") },
  ]

  return (
    <nav className="hidden lg:block sticky top-20 h-screen py-6 pr-2">
      <div className="flex flex-col items-center space-y-2 rounded-l-lg border-l border-t border-b bg-white/80 p-2 backdrop-blur-sm">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex flex-col items-center p-2 rounded-md transition-colors ${
              activeSection === item.id
                ? "bg-emerald-100 text-emerald-700"
                : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-600"
            }`}
          >
            {item.icon}
            <span className="mt-1 text-xs font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}


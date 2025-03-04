"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Instagram, Send, Mail, Phone } from 'lucide-react'
import CurlyLogo from "./svg/curly-logo"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <CurlyLogo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-emerald-800">Curly English</span>
            </div>
            <p className="text-emerald-700 max-w-md">
              {t("footer.description")}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-800">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link href="#trial" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  {t("navigation.trial")}
                </Link>
              </li>
              <li>
                <Link href="#why-learn" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  {t("navigation.whyLearn")}
                </Link>
              </li>
              <li>
                <Link href="#classes" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  {t("navigation.classes")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-800">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-600 mr-2" />
                <a href="mailto:info@curlyenglish.com" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  info@curlyenglish.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-600 mr-2" />
                <a href="tel:+12345678901" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  +1 (234) 567-8901
                </a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a 
                  href="https://instagram.com/albina.pro.eng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-100 p-2 rounded-full text-emerald-600 hover:bg-emerald-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://t.me/albinaproeng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-100 p-2 rounded-full text-emerald-600 hover:bg-emerald-200 transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-200 mt-8 pt-8 text-center text-emerald-600">
          <p>© {currentYear} Curly English. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}

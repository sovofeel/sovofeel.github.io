import type { Metadata } from "next"
import { Pacifico, Lato } from "next/font/google"
import "./globals.css"
import type React from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"

const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-pacifico" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

export const metadata: Metadata = {
  title: "Happy Valentine's Day, My Love!",
  description: "A special Valentine's Day message for my love",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${lato.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'
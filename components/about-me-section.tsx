"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import StatueOfLiberty from "./svg/statue-of-liberty"

export default function AboutMeSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <div className="rounded-full overflow-hidden w-64 h-64 relative">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Albina"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-25 w-32 h-32">
                <StatueOfLiberty className="w-full h-full" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-emerald-800">{t("aboutMe.headline")}</h2>
            <p className="text-lg text-emerald-700">{t("aboutMe.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


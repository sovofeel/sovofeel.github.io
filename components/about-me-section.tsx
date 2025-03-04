"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import StatueOfLiberty from "../images/StatueofLiberty.png"
import albinaImg1  from '../images/albina1.jpg'

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
                    src={albinaImg1}
                    alt="Albina"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
          <div className="relative">
            <h2 className="text-3xl font-bold text-emerald-800">{t("aboutMe.headline")}</h2>
            <p className="text-lg text-emerald-700">{t("aboutMe.description")}</p>
            <div className="absolute  -bottom-20 right-0  opacity-25 w-32 h-32">
                <Image
                    height={320}
                    style={{"transform": "rotate(22deg)"}}
                    src={StatueOfLiberty}
                    alt="StatueOfLiberty"
                    className="object-cover"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


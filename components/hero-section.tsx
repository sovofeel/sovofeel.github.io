"use client"

import { useLanguage } from "./language-provider"
// import CurlyGirl from "./svg/curly-girl"
// import NYSkyline from "./svg/ny-skyline"
import { Button } from "@/components/ui/button"
import { useSignUpModal } from "@/components/sign-up-modal"
import albinaImg1  from '../images/albina2.jpg'
import newYork from '../images/newYork.png'
import Image from "next/image";


export default function HeroSection() {
  const { t } = useLanguage()
  const { setIsOpen } = useSignUpModal()

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24" 
    style={{
      'backgroundPosition': '33% 100%',
      'backgroundSize': 'cover',
      'backgroundImage': `linear-gradient(to right, rgba(236,253,245, 0.97) 0 100%), url(${newYork.src})`}}
    >
      <div className="container mx-auto px-4"
      
      >
        <div className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-3/4 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 mb-6">{t("hero.headline")}</h1>
            <p className="text-lg text-emerald-700 mb-8 max-w-md">{t("hero.description")}</p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => setIsOpen(true)}
            >
              {t("hero.button")}
            </Button>
          </div>
          <div className="md:w-1/4 relative">
            <div className="relative z-10">
              <Image className="rounded-md" style={{"maxHeight": '600px', "width": 'auto'}}  alt="Logo" src={albinaImg1} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 top-0" >

      </div> */}
    </section>
  )
}


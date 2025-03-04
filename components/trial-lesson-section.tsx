"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useSignUpModal } from "@/components/sign-up-modal"
import Image from "next/image";
import albinaGif  from '../images/albinaGif.gif'


export default function TrialLessonSection() {
  const { t } = useLanguage()
  const { setIsOpen } = useSignUpModal()

  const steps = [
    t("trialLesson.freeLesson.steps.0"),
    t("trialLesson.freeLesson.steps.1"),
    t("trialLesson.freeLesson.steps.2"),
    t("trialLesson.freeLesson.steps.3"),
  ]

  return (
    <section id="trial" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-emerald-800">{t("trialLesson.headline")}</h2>
            <p className="text-lg text-emerald-700 max-w-md">{t("trialLesson.description")}</p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => setIsOpen(true)}
            >
              {t("trialLesson.button")}
            </Button>
          </div>

          <div className="lg:w-1/2 bg-emerald-50 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-emerald-800">{t("trialLesson.freeLesson.headline")}</h3>
                <ul className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-emerald-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
              <Image style={{"maxHeight": '150px', "width": 'auto', "borderRadius": "50%"}}  alt="Logo" src={albinaGif} />
                {/* <CurlyGirlStudying className="h-auto max-w-[180px]" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


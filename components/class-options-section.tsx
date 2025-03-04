"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { FormType, useSignUpModal } from "@/components/sign-up-modal"

export default function ClassOptionsSection() {
  const { t } = useLanguage()
  const { setIsOpen, setFormType } = useSignUpModal()

  const options = [
    {
      title: t("classOptions.groupLessons.title"),
      description: t("classOptions.groupLessons.description"),
      benefits: [
        t("classOptions.groupLessons.benefits.0"),
        t("classOptions.groupLessons.benefits.1"),
        t("classOptions.groupLessons.benefits.2"),
      ],
      button: t("classOptions.groupLessons.button"),
      type: "group",
    },
    {
      title: t("classOptions.individualLessons.title"),
      description: t("classOptions.individualLessons.description"),
      benefits: [
        t("classOptions.individualLessons.benefits.0"),
        t("classOptions.individualLessons.benefits.1"),
        t("classOptions.individualLessons.benefits.2"),
      ],
      button: t("classOptions.individualLessons.button"),
      type: "individual",
    },
  ]

  const handleButtonClick = (type: FormType) => {
    setFormType(type)
    setIsOpen(true)
  }

  return (
    <section id="classes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">{t("classOptions.headline")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {options.map((option, index) => (
            <Card
              key={index}
              className="border-emerald-100 bg-emerald-50/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-emerald-700">{option.description}</p>
                <div>
                  <p className="font-medium text-emerald-800 mb-2">{t("classOptions.benefits")}:</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="text-emerald-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => handleButtonClick(option.type as FormType)}
                >
                  {option.button}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


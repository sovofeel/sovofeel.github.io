"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"

export default function WhyChooseUsSection() {
  const { t } = useLanguage()

  const advantages = [
    t("whyChooseUs.advantages.0"),
    t("whyChooseUs.advantages.1"),
    t("whyChooseUs.advantages.2"),
    t("whyChooseUs.advantages.3"),
  ]

  return (
    <section id="why-choose" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">{t("whyChooseUs.headline")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-emerald-100 bg-emerald-50/50 shadow-sm">
              <CardContent className="pt-6">
                <p className="text-emerald-700">{advantage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


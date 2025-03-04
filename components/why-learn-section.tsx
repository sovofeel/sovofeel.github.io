"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, TrendingUp, GraduationCap, Handshake, Plane, Heart } from "lucide-react"

export default function WhyLearnEnglishSection() {
  const { t } = useLanguage()

  const reasons = [
    {
      title: t("whyLearn.cards.work.title"),
      description: t("whyLearn.cards.work.description"),
      icon: <Briefcase className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: t("whyLearn.cards.income.title"),
      description: t("whyLearn.cards.income.description"),
      icon: <TrendingUp className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: t("whyLearn.cards.university.title"),
      description: t("whyLearn.cards.university.description"),
      icon: <GraduationCap className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: t("whyLearn.cards.jobs.title"),
      description: t("whyLearn.cards.jobs.description"),
      icon: <Handshake className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: t("whyLearn.cards.traveling.title"),
      description: t("whyLearn.cards.traveling.description"),
      icon: <Plane className="h-10 w-10 text-emerald-600" />,
    },
    {
      title: t("whyLearn.cards.fears.title"),
      description: t("whyLearn.cards.fears.description"),
      icon: <Heart className="h-10 w-10 text-emerald-600" />,
    },
  ]

  return (
    <section id="why-learn" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">{t("whyLearn.headline")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-emerald-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {reason.icon}
                <CardTitle className="text-xl text-emerald-800">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-700">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


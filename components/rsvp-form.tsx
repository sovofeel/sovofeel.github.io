"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const drinkOptions = [
  { id: "champagne", label: "Шампанское" },
  { id: "red-wine", label: "Красное вино" },
  { id: "white-wine", label: "Белое вино" },
  { id: "non-alcoholic", label: "Безалкогольное" },
  { id: "vodka", label: "Водка" },
]

export function RSVPForm() {
  const [restrictions, setRestrictions] = useState("")
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>([])
  const [otherDrink, setOtherDrink] = useState("")
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleDrinkToggle = (drinkId: string) => {
    setSelectedDrinks((prev) =>
      prev.includes(drinkId)
        ? prev.filter((id) => id !== drinkId)
        : [...prev, drinkId]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation: at least one drink must be selected
    if (selectedDrinks.length === 0 && !isOtherSelected) {
      setError("Пожалуйста, выберите хотя бы один напиток")
      return
    }

    if (isOtherSelected && !otherDrink.trim()) {
      setError("Пожалуйста, укажите предпочитаемый напиток")
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare data for Google Sheets
      const drinks = [
        ...selectedDrinks.map(
          (id) => drinkOptions.find((d) => d.id === id)?.label || id
        ),
        ...(isOtherSelected && otherDrink ? [`Другое: ${otherDrink}`] : []),
      ]

      const formData = {
        restrictions: restrictions || "Нет ограничений",
        drinks: drinks.join(", "),
        timestamp: new Date().toISOString(),
      }

      // Send to API route
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Ошибка отправки")
      }

      setIsSubmitted(true)
    } catch {
      setError("Произошла ошибка. Попробуйте ещё раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#b4b99a]/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#585d46]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-[#352b22] mb-2">Спасибо!</h3>
        <p className="text-[#6b5c52] text-lg">Ваш ответ отправлен</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Food restrictions */}
      <div>
        <label className="block text-[#352b22] mb-2 font-medium text-lg">
          Есть ли у вас ограничения по еде или аллергия?
        </label>
        <textarea
          value={restrictions}
          onChange={(e) => setRestrictions(e.target.value)}
          placeholder="Напишите здесь..."
          className="w-full px-4 py-3 rounded-lg border border-[#d3c1ad] bg-white/50 text-[#352b22] text-lg placeholder:text-[#a78d76] focus:outline-none focus:ring-2 focus:ring-[#7696a5]/50 focus:border-transparent resize-none"
          rows={3}
        />
      </div>

      {/* Drinks */}
      <div>
        <label className="block text-[#352b22] mb-3 font-medium text-lg">
          Какой напиток предпочитаете?
        </label>
        <div className="space-y-2">
          {drinkOptions.map((drink) => (
            <label
              key={drink.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                  selectedDrinks.includes(drink.id)
                    ? "border-[#7696a5] bg-[#7696a5]"
                    : "border-[#d3c1ad] group-hover:border-[#7696a5]/50"
                )}
              >
                {selectedDrinks.includes(drink.id) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span
                className="text-[#352b22] text-lg cursor-pointer"
                onClick={() => handleDrinkToggle(drink.id)}
              >
                {drink.label}
              </span>
            </label>
          ))}

          {/* Other option */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              className={cn(
                "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                isOtherSelected
                  ? "border-[#7696a5] bg-[#7696a5]"
                  : "border-[#d3c1ad] group-hover:border-[#7696a5]/50"
              )}
              onClick={() => setIsOtherSelected(!isOtherSelected)}
            >
              {isOtherSelected && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span
              className="text-[#352b22] text-lg cursor-pointer"
              onClick={() => setIsOtherSelected(!isOtherSelected)}
            >
              Другое
            </span>
          </label>

          {isOtherSelected && (
            <input
              type="text"
              value={otherDrink}
              onChange={(e) => setOtherDrink(e.target.value)}
              placeholder="Укажите напиток..."
              className="ml-8 w-[calc(100%-2rem)] px-3 py-2 rounded border border-[#d3c1ad] bg-white/50 text-[#352b22] placeholder:text-[#a78d76] focus:outline-none focus:ring-2 focus:ring-[#7696a5]/50 focus:border-transparent text-base"
            />
          )}
        </div>
      </div>

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-3 px-6 rounded-lg border-2 border-[#7696a5] text-[#7696a5] font-medium text-lg transition-all duration-300",
          "hover:bg-[#7696a5] hover:text-white",
          "focus:outline-none focus:ring-2 focus:ring-[#7696a5]/50",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? "Отправка..." : "Отправить"}
      </button>
    </form>
  )
}

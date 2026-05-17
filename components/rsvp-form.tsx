"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function RSVPForm() {
  const [name,      setName]      = useState("")
  const [attend,    setAttend]    = useState<"yes" | "no" | "">("")
  const [phone,     setPhone]     = useState("")
  const [social,    setSocial]    = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)
  const [error,      setError]      = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim())  { setError("Пожалуйста, укажите имя и фамилию"); return }
    if (!attend)       { setError("Пожалуйста, отметьте ваше присутствие"); return }
    if (!phone.trim()) { setError("Пожалуйста, укажите номер телефона"); return }

    setSubmitting(true)
    try {
      const payload = {
        name:         name.trim(),
        attend,
        phone:        phone.trim(),
        social:       social.trim(),
        submitted_at: new Date().toISOString(),
      }
      const res = await fetch("/api/rsvp", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError("Произошла ошибка. Попробуйте ещё раз.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8 flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-[#9CAF88]/30 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#6B7F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-serif text-4xl text-[#3B2E24]">Спасибо!</p>
        <p className="text-[#5C4A3A] text-base leading-relaxed text-center max-w-[260px]">
          Ваш ответ принят. Ждём вас 23 июля!
        </p>
      </div>
    )
  }

  const inputCls = cn(
    "w-full px-4 py-3 rounded-2xl border border-[#6b7f4f]",
    "bg-transparent text-[#3B2E24] text-base",
    "placeholder:text-[#5C4A3A] focus:outline-none",
    "focus:ring-2 focus:ring-[#6b7f4f]/50 focus:border-transparent",
    "transition-all"
  )

  const labelCls = "block text-[#3B2E24] text-xs font-bold mb-1.5 uppercase tracking-[0.12em]"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name */}
      <div>
        <label className={labelCls}>Имя и фамилия</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Иван Иванов"
          className={inputCls}
        />
      </div>

      {/* Attendance */}
      <div>
        <label className={labelCls}>Ваше присутствие</label>
        <div className="flex flex-col gap-2">
          {([
            { val: "yes", label: "Да, с удовольствием" },
            { val: "no",  label: "К сожалению, не смогу" },
          ] as const).map(opt => (
            <button
              key={opt.val}
              type="button"
              onClick={() => setAttend(opt.val)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl border text-left transition-all duration-200",
                attend === opt.val
                  ? "border-[#6B7F4F] bg-[#6B7F4F]/10 text-[#3B2E24]"
                  : "border-[#6b7f4f] bg-transparent text-[#5C4A3A] hover:border-[#6B7F4F]"
              )}
            >
              <div className={cn(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                attend === opt.val ? "border-[#6B7F4F]" : "border-[#6b7f4f]"
              )}>
                {attend === opt.val && (
                  <div className="w-2 h-2 rounded-full bg-[#6B7F4F]" />
                )}
              </div>
              <span className="text-base">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className={labelCls}>Номер телефона</label>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="+7 900 000 00 00"
          className={inputCls}
        />
      </div>

      {/* Social */}
      <div>
        <label className={labelCls}>
          Соцсети{" "}
          <span className="text-[#BEA996] font-normal normal-case tracking-normal">(необязательно)</span>
        </label>
        <input
          type="text"
          value={social}
          onChange={e => setSocial(e.target.value)}
          placeholder="@nickname или ссылка"
          className={inputCls}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-600 text-sm text-center bg-red-50/60 rounded-xl px-3 py-2">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "w-full py-3.5 rounded-2xl border-2 border-[#6b7f4f]",
          "text-[#3B2E24] font-semibold text-base tracking-wide",
          "transition-all duration-300 hover:bg-[#6b7f4f] hover:text-white",
          "active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {submitting ? "Отправка..." : "Отправить"}
      </button>
    </form>
  )
}

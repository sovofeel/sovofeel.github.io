"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      // Target date: July 23, 2026, 18:00 in Ufa timezone (UTC+5)
      const targetDate = new Date("2026-07-23T18:00:00+05:00")
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000)
        const totalMinutes = Math.floor(totalSeconds / 60)
        const totalHours = Math.floor(totalMinutes / 60)
        const totalDays = Math.floor(totalHours / 24)
        const weeks = Math.floor(totalDays / 7)
        const days = totalDays % 7
        const hours = totalHours % 24
        const minutes = totalMinutes % 60
        const seconds = totalSeconds % 60

        setTimeLeft({ weeks, days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
            <span className="text-4xl md:text-5xl font-semibold text-[#352b22]">--</span>
            <span className="text-sm md:text-base text-[#6b5c52]">---</span>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.weeks, label: getWeeksLabel(timeLeft.weeks) },
    { value: timeLeft.days, label: getDaysLabel(timeLeft.days) },
    { value: timeLeft.hours, label: getHoursLabel(timeLeft.hours) },
    { value: timeLeft.minutes, label: getMinutesLabel(timeLeft.minutes) },
    { value: timeLeft.seconds, label: getSecondsLabel(timeLeft.seconds) },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
          <span className="text-4xl md:text-5xl font-semibold text-[#352b22]">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-sm md:text-base text-[#6b5c52] uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}

function getWeeksLabel(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return "неделя"
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "недели"
  return "недель"
}

function getDaysLabel(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return "день"
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "дня"
  return "дней"
}

function getHoursLabel(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return "час"
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "часа"
  return "часов"
}

function getMinutesLabel(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return "минута"
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "минуты"
  return "минут"
}

function getSecondsLabel(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return "секунда"
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "секунды"
  return "секунд"
}

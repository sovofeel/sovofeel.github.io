"use client"

// July 2026: 1st is Wednesday → Mon-based offset = 2
const DAYS   = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
const START  = 2   // Wednesday
const TOTAL  = 31
const WEDDING = 23

export function MiniCalendar() {
  const cells: (number | null)[] = []
  for (let i = 0; i < START; i++) cells.push(null)
  for (let d = 1; d <= TOTAL; d++) cells.push(d)

  return (
    <div className="w-full max-w-[320px] mx-auto select-none">
      {/* Month label */}
      <p className="text-center text-xs text-[#5C4A3A] uppercase tracking-[0.25em] mb-2 font-semibold">
        Июль 2026
      </p>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d, i) => (
          <div key={d}
            className={`text-center text-[10px] font-semibold py-0.5 ${
              i >= 5 ? "text-[#3B2E24]" : "text-[#8B735B]"
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date cells */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, i) => {
          if (day === null) return <div key={i} />

          const colIndex = i % 7
          const isWeekend = colIndex === 5 || colIndex === 6
          const isWedding = day === WEDDING

          return (
            <div key={i} className="flex items-center justify-center h-7">
              {isWedding ? (
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#6B7F4F]" />
                  <span className="relative text-white text-[11px] font-bold z-10">{day}</span>
                </div>
              ) : (
                <span className={`text-[11px] ${isWeekend ? "text-[#3B2E24] font-medium" : "text-[#3B2E24]"}`}>
                  {day}
                </span>
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-1.5 mt-2">
        <div className="w-3 h-3 rounded-full bg-[#6B7F4F]" />
        <p className="text-[11px] text-[#6B7F4F] font-semibold tracking-wide">
          23 — День свадьбы
        </p>
      </div>
    </div>
  )
}

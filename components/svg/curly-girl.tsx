export default function CurlyGirl({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="200" r="150" fill="#EDF7F1" />
      <path
        d="M170 120C170 120 150 140 150 180C150 220 175 250 175 250"
        stroke="#2E8B57"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M230 120C230 120 250 140 250 180C250 220 225 250 225 250"
        stroke="#2E8B57"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M140 160C140 160 120 180 120 220C120 260 140 280 140 280"
        stroke="#2E8B57"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M260 160C260 160 280 180 280 220C280 260 260 280 260 280"
        stroke="#2E8B57"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="200" cy="160" r="50" fill="#FFDDC1" />
      <path
        d="M180 150C180 150 185 160 200 160C215 160 220 150 220 150"
        stroke="#8B5A2B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="185" cy="140" r="5" fill="#8B5A2B" />
      <circle cx="215" cy="140" r="5" fill="#8B5A2B" />
      <path d="M170 270H230" stroke="#FFDDC1" strokeWidth="30" strokeLinecap="round" />
      <path d="M200 190V270" stroke="#FFDDC1" strokeWidth="30" strokeLinecap="round" />
      <path d="M170 270H230" stroke="#97DEFF" strokeWidth="10" strokeLinecap="round" />
      <rect x="180" y="220" width="40" height="60" rx="5" fill="#97DEFF" />
    </svg>
  )
}


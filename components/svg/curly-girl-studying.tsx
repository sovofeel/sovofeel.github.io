export default function CurlyGirlStudying({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="70" r="40" fill="#FFDDC1" />
      <path d="M85 65C85 65 90 72 100 72C110 72 115 65 115 65" stroke="#8B5A2B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="90" cy="60" r="3" fill="#8B5A2B" />
      <circle cx="110" cy="60" r="3" fill="#8B5A2B" />

      <path d="M70 50C70 50 60 60 60 80C60 100 70 110 70 110" stroke="#2E8B57" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M130 50C130 50 140 60 140 80C140 100 130 110 130 110"
        stroke="#2E8B57"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M60 70C60 70 50 80 50 100C50 120 60 130 60 130" stroke="#2E8B57" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M140 70C140 70 150 80 150 100C150 120 140 130 140 130"
        stroke="#2E8B57"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <rect x="70" y="110" width="60" height="60" rx="5" fill="#97DEFF" />
      <rect x="80" y="125" width="40" height="30" rx="2" fill="#FFFFFF" />
      <path d="M85 135H115" stroke="#333333" strokeWidth="2" />
      <path d="M85 145H105" stroke="#333333" strokeWidth="2" />
    </svg>
  )
}


export default function CurlyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="28" fill="#EDF7F1" />
      <path d="M22 24C22 24 24 15 32 15C40 15 42 24 42 24" stroke="#2E8B57" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 40C42 40 40 49 32 49C24 49 22 40 22 40" stroke="#2E8B57" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 27C25 27 21 32 21 36C21 40 25 45 25 45" stroke="#2E8B57" strokeWidth="3" strokeLinecap="round" />
      <path d="M39 27C39 27 43 32 43 36C43 40 39 45 39 45" stroke="#2E8B57" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4" fill="#2E8B57" />
    </svg>
  )
}


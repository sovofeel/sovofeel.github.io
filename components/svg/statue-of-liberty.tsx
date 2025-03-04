export default function StatueOfLiberty({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10V20M40 25H60M42 25V60M58 25V60M35 60H65M38 65H62M40 70H60M45 70V85M55 70V85M40 85H60"
        stroke="#2E8B57"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M48 10L35 5L48 15L65 5L52 10"
        stroke="#2E8B57"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 85H70V95H30V85Z" fill="#2E8B57" fillOpacity="0.2" />
    </svg>
  )
}


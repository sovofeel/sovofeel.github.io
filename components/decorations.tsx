"use client"

import { cn } from "@/lib/utils"

interface DecorationProps {
  className?: string
}

export function HeartDecoration({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function LeafDecoration({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

export function BranchDecoration({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-32 h-6", className)}
    >
      <path d="M0 12 Q30 8 60 12 Q90 16 120 12" />
      <path d="M20 12 Q25 6 30 10" />
      <path d="M40 12 Q45 18 50 14" />
      <path d="M70 12 Q75 6 80 10" />
      <path d="M90 12 Q95 18 100 14" />
    </svg>
  )
}

export function FlowerDecoration({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  )
}

export function WineGlassIcon({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-5 h-5", className)}
    >
      <path d="M8 22h8" />
      <path d="M12 11v11" />
      <path d="M5 3h14l-1.5 8.5a5.5 5.5 0 0 1-11 0L5 3z" />
    </svg>
  )
}

export function FeatherIcon({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-5 h-5", className)}
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  )
}

export function MapPinIcon({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-5 h-5", className)}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function FlowerEnvelopeIcon({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-8 h-8", className)}
    >
      <rect x="2" y="8" width="20" height="13" rx="2" />
      <path d="M22 10l-10 7-10-7" />
      <path d="M12 3c-1.5 0-3 .5-3 2s1.5 2 3 2 3-.5 3-2-1.5-2-3-2z" />
      <path d="M12 7v1" />
    </svg>
  )
}

export function NoShoutIcon({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-8 h-8", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
      <line x1="4" y1="4" x2="20" y2="20" />
    </svg>
  )
}

export function NoChildrenIcon({ className }: DecorationProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-8 h-8", className)}
    >
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v4" />
      <path d="M9 12l-2 6" />
      <path d="M15 12l2 6" />
      <path d="M10 18h4" />
      <line x1="4" y1="2" x2="20" y2="22" />
    </svg>
  )
}

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="leaves" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M30 5 Q35 15 30 25 Q25 15 30 5"
              fill="none"
              stroke="#585d46"
              strokeWidth="1"
            />
            <path
              d="M10 35 Q15 45 10 55 Q5 45 10 35"
              fill="none"
              stroke="#585d46"
              strokeWidth="1"
            />
            <path
              d="M50 40 Q55 50 50 60 Q45 50 50 40"
              fill="none"
              stroke="#585d46"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leaves)" />
      </svg>
    </div>
  )
}

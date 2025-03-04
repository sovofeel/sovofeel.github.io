"use client"

import type { ReactNode } from "react"
import { SignUpModalProvider } from "@/components/sign-up-modal"

export function Providers({ children }: { children: ReactNode }) {
  return <SignUpModalProvider>{children}</SignUpModalProvider>
}


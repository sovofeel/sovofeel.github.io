"use client"

import type React from "react"

import { useState, createContext, useContext, type ReactNode } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "./language-provider"
import { Check } from "lucide-react"

export type FormType = "general" | "group" | "individual"

interface SignUpModalContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  formType: FormType
  setFormType: (type: FormType) => void
}

const SignUpModalContext = createContext<SignUpModalContextType | undefined>(undefined)

export function SignUpModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType>("general")

  return (
    <SignUpModalContext.Provider value={{ isOpen, setIsOpen, formType, setFormType }}>
      {children}
      <SignUpModal />
    </SignUpModalContext.Provider>
  )
}

export function useSignUpModal() {
  const context = useContext(SignUpModalContext)
  if (context === undefined) {
    throw new Error("useSignUpModal must be used within a SignUpModalProvider")
  }
  return context
}

function SignUpModal() {
  const { isOpen, setIsOpen, formType } = useSignUpModal()
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit this data to your backend
    console.log({ name, phone, email, formType })
    setSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setName("")
      setPhone("")
      setEmail("")
      setSubmitted(false)
      setIsOpen(false)
    }, 3000)
  }

  const getFormTitle = () => {
    switch (formType) {
      case "group":
        return t("modal.groupTitle")
      case "individual":
        return t("modal.individualTitle")
      default:
        return t("modal.title")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-emerald-800">{getFormTitle()}</DialogTitle>
          <DialogDescription>{t("modal.description")}</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="text-center text-emerald-700">{t("modal.success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("modal.nameLabel")}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("modal.namePlaceholder")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t("modal.phoneLabel")}</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("modal.phonePlaceholder")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("modal.emailLabel")}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("modal.emailPlaceholder")}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              {t("modal.submitButton")}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}


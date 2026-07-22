"use client"

import { useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ResourcePopupProps {
  isOpen: boolean
  onClose: () => void
}

const card1Url = "https://tally.so/r/9qgdZV"
const card2Url = "https://tally.so/r/GxjrvO"

function Card({
  badge,
  title,
  subtitle,
  description,
  buttonLabel,
  variant,
  href,
}: {
  badge: string
  title: string
  subtitle: string
  description: string
  buttonLabel: string
  variant: "primary" | "outline"
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-[16px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:border-[#DD7430] hover:-translate-y-[6px] hover:shadow-lg"
    >
      <span className="self-start inline-block bg-[#DD7430] text-white text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1.5 rounded-md mb-5">
        {badge}
      </span>

      <h4 className="text-xl font-bold text-[#111827] leading-[1.3] mb-1">
        {title}
      </h4>

      <p className="text-sm text-[#6B7280] font-medium mb-3">
        {subtitle}
      </p>

      <p className="text-sm text-[#6B7280] leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {variant === "primary" ? (
        <span className="inline-flex items-center justify-center w-full h-11 rounded-lg bg-[#DD7430] text-white text-sm font-bold hover:bg-[#C96524] transition-colors duration-200">
          {buttonLabel}
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-full h-11 rounded-lg border-2 border-[#DD7430] text-[#DD7430] text-sm font-bold bg-white hover:bg-[#DD7430] hover:text-white transition-all duration-200">
          {buttonLabel}
        </span>
      )}
    </a>
  )
}

export default function ResourcePopup({ isOpen, onClose }: ResourcePopupProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleEscape])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Complimentary Executive Resources"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[860px] bg-white rounded-[20px] p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-lg flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] transition-all duration-200"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-[1.2] mb-3">
                Complimentary Executive Resources
              </h2>
              <p className="text-base md:text-lg font-semibold text-[#DD7430] mb-3">
                Accelerate Your Organisation&apos;s AI Transformation
              </p>
              <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg mx-auto">
                Choose the resource that best suits your organisation&apos;s current needs.
              </p>
            </div>

            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              <Card
                badge="FREE CONSULTATION"
                title="Complimentary Executive TNA Session"
                subtitle="TNA Session"
                description="Identify your organisation's AI readiness, workforce capability gaps and priority initiatives through a personalised executive consultation."
                buttonLabel="Book My Session"
                variant="primary"
                href={card1Url}
              />
              <Card
                badge="FREE WEBINAR"
                title="AI for Leaders"
                subtitle="1 Hour Executive Webinar"
                description="Learn how leaders build AI strategies that deliver measurable business value and avoid common AI adoption mistakes."
                buttonLabel="Reserve My Seat"
                variant="outline"
                href={card2Url}
              />
            </div>

            <div className="text-center mt-8">
              <button
                onClick={onClose}
                className="text-sm text-[#6B7280] hover:text-[#111827] underline underline-offset-2 transition-colors duration-200"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client"

import { MessageCircle } from "lucide-react"

const whatsappLink =
  "https://wa.me/60143538976?text=Hello%20LIT%20Digital%20Creators,%20I%20would%20like%20to%20know%20more%20about%20your%20corporate%20training."

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-8 left-8 w-14 h-14 rounded-2xl bg-[#25D366] text-white shadow-lg hover:bg-[#22c35e] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center z-40"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}

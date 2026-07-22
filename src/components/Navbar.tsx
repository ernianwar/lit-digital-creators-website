"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const whatsappLink = "https://wa.me/60143538976?text=Hi%20LDC,%20I%20have%20an%20enquiry%20about%20training.%20My%20name%20is..."

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "Community", href: "/community" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-18 md:h-20">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Images/Logo/LDC_Logo.png"
            alt="LIT Digital Creators"
            width={160}
            height={160}
            className="h-14 md:h-[100px] w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden xl:flex items-center justify-center flex-1 gap-0.5 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-base font-medium text-muted hover:text-foreground rounded-lg hover:bg-secondary transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" size="sm" className="ml-2" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Contact Us</a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-muted hover:text-foreground hover:bg-secondary rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <Button variant="primary" size="md" className="w-full" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Contact Us</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

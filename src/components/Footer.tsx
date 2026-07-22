"use client"

import { ArrowUp, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const mailtoLink = "mailto:hello@litdigitalcreators.com?subject=Corporate%20Training%20Enquiry&body=Hello%20LIT%20Digital%20Creators,%0A%0AI%20would%20like%20to%20enquire%20about%20your%20AI%20%26%20Digital%20Transformation%20services.%0A%0APlease%20contact%20me%20regarding%20the%20following:%0A%0AOrganisation:%0AContact%20Person:%0APhone%20Number:%0AEnquiry:%0A%0AThank%20you."
const tallyLink = "https://tally.so/r/rjW88p"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const socialLinks = [
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/lit-digital-creators/",
    label: "LinkedIn",
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-16 md:py-20">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-2 inline-block mb-4">
              <Image
                src="/Images/Logo/LDC_Logo.png"
                alt="LIT Digital Creators"
                width={200}
                height={63}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              Digital Skills for a LIT Future
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand transition-all duration-200 group/tooltip relative"
                >
                  <social.icon className="h-5 w-5 text-white" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-white text-[10px] font-medium px-2 py-1 rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/corporate-training" className="text-sm text-white/60 hover:text-white transition-colors">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-white/60 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Policies</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm text-white/60 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-white/60 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/pdpa-notice" className="text-sm text-white/60 hover:text-white transition-colors">
                  PDPA Notice
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={mailtoLink}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="h-3.5 w-3.5" />
                  hello@litdigitalcreators.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+60327796178"
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +603-27796178
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 mt-6">
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-fit" asChild>
                <a href={mailtoLink}>
                  <Mail className="h-3.5 w-3.5 mr-2" />
                  Email Us
                </a>
              </Button>
              <Button variant="primary" size="sm" className="w-fit" asChild>
                <a href={tallyLink} target="_blank" rel="noopener noreferrer">
                  Get a Quotation
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} LIT Digital Creators. All rights reserved.
            </p>
            <p className="text-xs text-white/30 mt-1">
              Company Registration Number: 202404003712 (LLP0041219)
            </p>
          </div>
          <p className="text-xs text-white/40">
            Digital Skills for a LIT Future
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Terms of Use
            </Link>
            <Link href="/cookie-policy" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Cookies
            </Link>
            <Link href="/pdpa-notice" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              PDPA
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-2xl bg-brand text-white shadow-lg hover:bg-brand-hover transition-all duration-200 flex items-center justify-center z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}

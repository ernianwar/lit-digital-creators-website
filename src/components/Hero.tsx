"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const mailtoLink = "mailto:hello@litdigitalcreators.com?subject=Corporate%20Training%20Enquiry&body=Hello%20LIT%20Digital%20Creators,%0A%0AI%20would%20like%20to%20enquire%20about%20your%20AI%20%26%20Digital%20Transformation%20services.%0A%0APlease%20contact%20me%20regarding%20the%20following:%0A%0AOrganisation:%0AContact%20Person:%0APhone%20Number:%0AEnquiry:%0A%0AThank%20you."
const tallyLink = "https://tally.so/r/rjW88p"

const hrdcMetric = {
  value: "HRDC Registered",
  label: "Training Provider",
}

const statMetrics = [
  {
    value: "1000+",
    label: "Professionals Upskilled",
  },
  {
    value: "30+",
    label: "Corporate & Government Projects",
  },
  {
    value: "95%",
    label: "Participant Satisfaction",
  },
  {
    value: "5+",
    label: "Years of Industry Experience",
  },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-secondary/50 to-white pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base md:text-lg lg:text-xl font-semibold text-brand tracking-[0.2em] uppercase mb-5"
            >
              Digital Skills for a LIT Future
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-foreground leading-tight tracking-tight mb-6">
              Transform Your<br />
              Workforce with<br />
              <span className="text-brand">AI & Digital<br />
              Transformation</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-lg">
              Increase your organisation&apos;s productivity through AI and Digital Transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="xl" asChild>
                <a href={mailtoLink}>
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={tallyLink} target="_blank" rel="noopener noreferrer">
                  Get a Quotation
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <Image
              src="/Images/Hero/hero-homepage.png"
              alt="LIT Digital Creators - AI & Digital Transformation"
              width={800}
              height={600}
              className="w-full h-auto rounded-3xl shadow-xl object-cover"
              priority
              loading="eager"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20 p-8 bg-white rounded-2xl border border-border/60 shadow-sm"
        >
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-6 pb-6 border-b border-border/50 mb-6">
            <Image
              src="/Images/Logo/Logo_HRDC.png"
              alt="HRDC"
              width={48}
              height={48}
              className="h-12 w-auto object-contain shrink-0"
              loading="lazy"
            />
            <div className="text-center md:text-left">
              <span className="text-2xl md:text-3xl font-extrabold text-foreground block leading-tight">{hrdcMetric.value}</span>
              <p className="text-sm text-muted mt-0.5">{hrdcMetric.label}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statMetrics.map((metric, i) => (
              <div key={i} className="text-center md:text-left">
                <span className="block text-2xl md:text-3xl font-extrabold text-foreground mb-1">{metric.value}</span>
                <p className="text-sm text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

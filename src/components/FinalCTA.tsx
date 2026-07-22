"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const tallyLink = "https://tally.so/r/rjW88p"

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-foreground via-foreground to-brand/90 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Can&apos;t Find the Right Solution?
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            We customise AI, Digital Transformation and Talent Development programs based on your organisation&apos;s goals, industry and workforce capability needs.
          </p>

          <Button
            variant="outline"
            size="xl"
            className="bg-white text-foreground border-white hover:bg-brand hover:text-white hover:border-brand"
            asChild
          >
            <a href={tallyLink} target="_blank" rel="noopener noreferrer">
              Get a Complimentary Training Needs Analysis Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

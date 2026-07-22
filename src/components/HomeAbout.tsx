"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            About <span className="text-brand">LIT Digital Creators</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto mb-8">
            We are Malaysia&apos;s premier AI & Digital Transformation consultancy, helping organisations increase productivity, adopt AI strategically, and build future-ready teams through practical training, consultancy, and digital transformation.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Shield, Building2, Bot, Sparkles } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "HRDC Registered Training Provider",
    description: "Certified and approved training programs eligible for HRDC claims.",
  },
  {
    icon: Building2,
    title: "Serving Corporate, Government & GLC",
    description: "Trusted by leading organisations across every major sector in Malaysia.",
  },
  {
    icon: Bot,
    title: "AI & Digital Transformation Consultancy",
    description: "Expert guidance and implementation for your digital journey.",
  },
  {
    icon: Sparkles,
    title: "Digital Skills for a LIT Future",
    description: "Empowering organisations with future-ready digital competencies.",
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-border/60">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
            Why Organisations Trust <span className="text-brand">LIT</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 bg-secondary/50 rounded-2xl border border-border/60 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

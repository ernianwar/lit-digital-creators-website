"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const features = [
  {
    title: "AI Transformation",
    description:
      "Integrate artificial intelligence into your operations to automate processes, enhance decision-making, and unlock new growth opportunities.",
    href: "/corporate-training#ai-transformation",
  },
  {
    title: "Talent Development",
    description:
      "Equip your team with future-ready digital skills through structured, practical training programs designed for modern workplaces.",
    href: "/corporate-training#talent-development",
  },
  {
    title: "Digital Productivity",
    description:
      "Boost efficiency with cutting-edge digital tools and workflows that streamline operations and maximise output across your organisation.",
    href: "/corporate-training#digital-productivity",
  },
  {
    title: "Digital Transformation for Leaders",
    description:
      "Develop visionary leaders who can navigate digital disruption and drive meaningful change within your organisation.",
    href: "/corporate-training#digital-transformation-for-leaders",
  },
  {
    title: "Creative and Marketing",
    description:
      "Elevate your brand and marketing capabilities with modern digital tools, AI-powered content strategies, and creative innovation.",
    href: "/corporate-training#creative-and-marketing",
  },
  {
    title: "Strategic Advisory",
    description:
      "Get expert guidance on your digital journey with tailored roadmaps that align technology investments with your business goals.",
    href: "/corporate-training#strategic-advisory",
  },
]

export default function WhyLIT() {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Why Choose <span className="text-brand">LIT</span>
          </h2>
          <p className="text-lg text-muted">
            We combine deep industry expertise with practical digital skills to deliver measurable outcomes for your organisation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={feature.href}
                className="group block p-8 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-lg hover:border-brand/20 transition-all duration-300 h-full"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

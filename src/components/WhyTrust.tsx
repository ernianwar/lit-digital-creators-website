"use client"

import { motion } from "framer-motion"

const trustItems = [
  {
    title: "HRDC Registered Training Provider",
    description: "Certified and approved training programs eligible for HRDC claims.",
  },
  {
    title: "Serving Corporate, Government & GLC",
    description: "Trusted by leading organisations across Malaysia.",
  },
  {
    title: "AI & Digital Transformation Consultancy",
    description: "Expert guidance and implementation for digital transformation.",
  },
  {
    title: "Practical & Industry Based Learning",
    description: "Hands-on training built around real workplace challenges, practical tools and immediate application.",
  },
  {
    title: "Customised Training for Your Staff",
    description: "Every training program is tailored to your organisation's objectives, industry requirements and workforce capability gaps.",
  },
  {
    title: "Industry Expert Trainers",
    description: "Delivered by experienced trainers with over 5 years of industry expertise in AI, Digital Transformation, Leadership and Workplace Productivity.",
  },
]

export default function WhyTrust() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-foreground">
            Why Organisations Trust<br />
            <span className="block text-brand mt-3">LIT Digital Creators</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              tabIndex={0}
              className="group cursor-pointer relative overflow-hidden rounded-[20px] border border-[#ECECEC] bg-white p-9 shadow-sm transition-all duration-300 hover:border-transparent hover:shadow-xl hover:-translate-y-2 focus-visible:border-transparent focus-visible:shadow-xl focus-visible:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") e.preventDefault()
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#DD7430] to-[#C85F1A] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-[32px] font-bold leading-[1.3] text-foreground group-hover:text-white group-focus-visible:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg leading-[1.8] text-[#6B7280] group-hover:text-white group-focus-visible:text-white transition-colors duration-300 mt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

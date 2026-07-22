"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import AboutCarousel from "@/components/AboutCarousel"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                  About <span className="text-brand">LIT Digital Creators</span>
                </h1>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  We are Malaysia&apos;s premier AI & Digital Transformation consultancy, dedicated to empowering organisations and communities through artificial intelligence, digital transformation, and practical digital skills.
                </p>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Our mission is to help organisations increase productivity, adopt AI strategically, and build future-ready teams through practical training, consultancy, and digital transformation.
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  We envision becoming Malaysia&apos;s leading AI & Digital Transformation ecosystem — driving digital skills development, innovation, and economic growth across the nation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AboutCarousel />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

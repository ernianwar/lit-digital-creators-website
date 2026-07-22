"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const totalReviews = 12
const reviewImages = Array.from({ length: totalReviews }, (_, i) => ({
  src: `/Images/Testimonials/review${i + 1}.png`,
  alt: `Client review ${i + 1}`,
}))

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isPaused, setIsPaused] = useState(false)

  const itemsPerPage = { desktop: 3, tablet: 2, mobile: 1 }

  const totalPages = Math.ceil(reviewImages.length / itemsPerPage.desktop)

  const paginate = useCallback(
    (newDirection: number) => {
      setPage((prev) => {
        const nextPage = (prev[0] + newDirection + totalPages) % totalPages
        return [nextPage, newDirection]
      })
    },
    [totalPages]
  )

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => paginate(1), 4000)
    return () => clearInterval(interval)
  }, [isPaused, paginate])

  const visibleReviews = reviewImages.slice(
    page * itemsPerPage.desktop,
    page * itemsPerPage.desktop + itemsPerPage.desktop
  )

  return (
    <section className="py-16 md:py-24 bg-secondary/50 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            What Our Clients <span className="text-brand">Say</span>
          </h2>
          <p className="text-lg text-muted">
            Real feedback from organisations we&apos;ve partnered with.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-10 px-2">
            <button
              onClick={() => paginate(-1)}
              className="pointer-events-auto w-11 h-11 rounded-xl bg-white shadow-md border border-border/60 flex items-center justify-center text-foreground hover:bg-brand hover:text-white transition-all"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="pointer-events-auto w-11 h-11 rounded-xl bg-white shadow-md border border-border/60 flex items-center justify-center text-foreground hover:bg-brand hover:text-white transition-all"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleReviews.map((review) => (
                <div
                  key={review.src}
                  className="bg-white rounded-2xl border border-border/60 shadow-sm overflow-hidden"
                >
                  <div className="p-5 pb-3">
                    <Quote className="h-6 w-6 text-brand/30 mb-2" />
                  </div>
                  <Image
                    src={review.src}
                    alt={review.alt}
                    width={400}
                    height={280}
                    className="w-full h-auto object-contain px-4 pb-4"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page ? "w-8 bg-brand" : "w-2 bg-border"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

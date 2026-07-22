"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const slides = [
  { src: "/Images/about/hero-about1.png", badge: "Government-Linked Companies (GLCs)" },
  { src: "/Images/about/hero-about2.png", badge: "Government-Linked Companies (GLCs)" },
  { src: "/Images/about/hero-about3.png", badge: "Government Agency Collaboration" },
  { src: "/Images/about/hero-about4.png", badge: "Public Training" },
  { src: "/Images/about/hero-about5.png", badge: "Government Agency Collaboration" },
]

export default function AboutCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [isPaused, setIsPaused] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (isPaused || !emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [isPaused, emblaApi])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  const scrollTo = (index: number) => emblaApi?.scrollTo(index)

  return (
    <div
      className="relative w-full max-w-[750px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl shadow-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative min-w-0 flex-[0_0_100%] h-[400px] md:h-[520px] overflow-hidden"
            >
              <Image
                src={slide.src}
                alt={slide.badge}
                fill
                className="object-cover transition-transform duration-[600ms] ease-in-out hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="inline-block bg-brand text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                  {slide.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 -left-4 w-11 h-11 rounded-xl bg-white shadow-md border border-border/60 flex items-center justify-center text-foreground hover:bg-brand hover:text-white transition-all z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 -right-4 w-11 h-11 rounded-xl bg-white shadow-md border border-border/60 flex items-center justify-center text-foreground hover:bg-brand hover:text-white transition-all z-10"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex items-center justify-center gap-2 mt-5">
        {Array.from({ length: slides.length }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-8 bg-brand" : "w-2 bg-border"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

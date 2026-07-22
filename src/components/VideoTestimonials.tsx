"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"

const videos = [
  { src: "/Videos/testimonial-01.mp4", title: "Client Testimonial" },
  { src: "/Videos/testimonial-02.mp4", title: "Client Testimonial" },
  { src: "/Videos/testimonial-03.mp4", title: "Client Testimonial" },
  { src: "/Videos/Testimonial4.mp4", title: "Client Testimonial" },
  { src: "/Videos/testimonial-05.mp4", title: "Client Testimonial" },
]

function VideoCard({
  video,
  index,
  onPlay,
}: {
  video: typeof videos[0]
  index: number
  onPlay: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-2xl border border-border/60 shadow-sm overflow-hidden cursor-pointer"
      onClick={onPlay}
    >
      <div className="relative w-full" style={{ aspectRatio: "600 / 750" }}>
        <video
          src={video.src}
          className="w-full h-full object-contain bg-black/5"
          preload="metadata"
          playsInline
          muted
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Play className="h-7 w-7 text-foreground ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-foreground">{video.title}</p>
      </div>
    </motion.div>
  )
}

export default function VideoTestimonials() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  const openModal = (src: string) => {
    setCurrentVideo(src)
    setModalOpen(true)
  }

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
    setModalOpen(false)
    setCurrentVideo(null)
  }

  useEffect(() => {
    if (modalOpen && modalVideoRef.current) {
      modalVideoRef.current.play()
    }
  }, [modalOpen])

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Video <span className="text-brand">Testimonials</span>
          </h2>
          <p className="text-lg text-muted">
            Hear directly from our clients about their transformation journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <VideoCard
              key={video.src}
              video={video}
              index={i}
              onPlay={() => openModal(video.src)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
              <video
                ref={modalVideoRef}
                src={currentVideo}
                className="w-full aspect-video object-contain"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

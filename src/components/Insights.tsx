"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { insights } from "@/data/insights"

const linkedinUrl = "https://www.linkedin.com/company/lit-digital-creators/"

export default function Insights() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Latest <span className="text-brand">Insights</span>
            </h2>
            <p className="text-lg text-muted">
              Thought leadership, industry trends, and practical guides from the LIT team.
            </p>
          </div>
          <Button variant="outline" size="md" asChild>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              Visit Our LinkedIn
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <motion.a
              key={post.title}
              href={`/insights/${post.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-6 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 relative bg-brand/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <Badge variant="secondary" className="self-start mb-3">
                {post.category}
              </Badge>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-muted">{post.date}</span>
                <span className="text-sm font-semibold text-brand flex items-center gap-1">
                  Read More
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
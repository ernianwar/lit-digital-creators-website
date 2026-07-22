import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { insights } from "@/data/insights"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
                Latest <span className="text-brand">Insights</span>
              </h1>
              <p className="text-lg text-muted">
                Thought leadership, industry trends, and practical guides from the LIT team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {insights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 relative bg-brand/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
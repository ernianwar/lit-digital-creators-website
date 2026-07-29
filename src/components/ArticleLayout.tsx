import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { insights, type InsightPost } from "@/data/insights"

interface ArticleLayoutProps {
  post: InsightPost
  children: React.ReactNode
}

export default function ArticleLayout({ post, children }: ArticleLayoutProps) {
  const related = insights.filter((p) => p.slug !== post.slug)

  return (
    <article>
      <div className="relative w-full aspect-[2/1] md:aspect-[3/1] overflow-hidden bg-brand/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

      <div className="container max-w-3xl mx-auto py-12 md:py-16">
        <div className="mb-8">
          <span className="inline-block bg-brand-light text-brand text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-muted leading-relaxed">
          {children}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <Button variant="outline" size="lg" asChild>
            <a
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue the Conversation on LinkedIn
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-16 pt-12 border-t border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Related Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/insights/${relatedPost.slug}`}
                className="group p-6 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 relative bg-brand/5">
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                </div>
                <Badge variant="secondary" className="self-start mb-3">
                  {relatedPost.category}
                </Badge>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                  {relatedPost.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
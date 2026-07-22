import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { insights } from "@/data/insights"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const post = insights.find((p) => p.slug === "petronas-lubricants")!
const related = insights.filter((p) => p.slug !== "petronas-lubricants")

export const metadata: Metadata = {
  title: "The Future of Work: Why Digital Skills Matter More Than Ever",
  description:
    "Explore the key digital competencies your workforce needs to thrive in an era of rapid technological change.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://litdigitalcreators.com/insights/petronas-lubricants",
  },
  openGraph: {
    title: "The Future of Work: Why Digital Skills Matter More Than Ever",
    description:
      "Explore the key digital competencies your workforce needs to thrive in an era of rapid technological change.",
    url: "https://litdigitalcreators.com/insights/petronas-lubricants",
    siteName: "LIT Digital Creators",
    locale: "en_MY",
    type: "article",
    images: [
      {
        url: "/images/insights/petronas-lubricants.jpeg",
        width: 1200,
        height: 630,
        alt: "The Future of Work: Why Digital Skills Matter More Than Ever",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Future of Work: Why Digital Skills Matter More Than Ever",
    description:
      "Explore the key digital competencies your workforce needs to thrive in an era of rapid technological change.",
    images: ["/images/insights/petronas-lubricants.jpeg"],
  },
}

export default function PetronasLubricantsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <article>
          <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
            <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden bg-brand/5 mb-8 md:mb-10">
              <Image
                src="/images/insights/petronas-lubricants.jpeg"
                alt="Professionals collaborating in a modern digital workplace"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] mb-4">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted mb-10">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted" />
                <span>{post.readingTime}</span>
              </div>

              {/* Introduction */}
              <section aria-label="Introduction" className="mb-8">
                <p className="text-muted leading-relaxed mb-4">
                  The way we work is changing faster than most organisations can adapt. Automation, artificial intelligence, and digital tools are reshaping job roles across every industry, not just in technology-focused sectors.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  For business leaders, this shift presents both a challenge and an opportunity. The challenge is ensuring that your workforce remains relevant and productive. The opportunity is building a digitally capable organisation that can respond quickly to market changes, adopt new technologies, and sustain long-term growth.
                </p>
                <p className="text-muted leading-relaxed">
                  Digital skills are no longer optional for a select few. They are becoming a core competency for every employee, from frontline staff to senior leadership.
                </p>
              </section>

              {/* Leadership Drives Digital Transformation */}
              <section aria-label="Leadership Drives Digital Transformation" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Leadership Drives Digital Transformation
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Digital transformation cannot succeed through technology investment alone. It requires active, visible leadership at every level of the organisation. When leaders model digital adoption, prioritise capability building, and communicate a clear vision, the entire organisation moves in the same direction.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Senior leaders who understand digital tools and their strategic applications make better decisions about technology investment, workforce planning, and organisational change. They are also better equipped to identify the skills their teams need to develop.
                </p>
                <p className="text-muted leading-relaxed">
                  Organisations where leadership actively champions digital upskilling consistently outperform those that delegate digital transformation to a single department or external vendor without executive ownership.
                </p>
              </section>

              {/* Complimentary Webinar CTA */}
              <section aria-label="Complimentary Webinar" className="mb-8 rounded-2xl bg-[#FAFAFA] border border-border/60 p-8 md:p-10">
                <p className="text-brand text-xs font-bold tracking-[0.15em] uppercase mb-4">
                  COMPLIMENTARY WEBINAR
                </p>

                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-[1.2] mb-6">
                  Ready to Lead Your Organisation into the AI Era?
                </h2>

                <p className="text-muted leading-relaxed mb-4">
                  Digital transformation starts with informed leadership.
                </p>

                <p className="text-muted leading-relaxed mb-6">
                  If you are exploring how artificial intelligence can improve productivity, decision making and business performance, join our complimentary 1hour online webinar designed specifically for business leaders.
                </p>

                <p className="text-muted leading-relaxed mb-6">
                  You will discover practical AI strategies, real business use cases and a structured approach to AI adoption that can help your organisation prepare for the future of work.
                </p>

                <h3 className="text-lg font-bold text-foreground mb-4">
                  What You Will Learn
                </h3>

                <ul className="space-y-3 mb-8">
                  {[
                    "Understanding today's AI landscape for business",
                    "Practical AI use cases across different business functions",
                    "Common mistakes organisations make when adopting AI",
                    "How to begin building an AI adoption roadmap",
                    "Live Q&A session",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white rounded-xl border border-border/60 p-6 mb-6">
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    AI for Leaders
                  </h4>
                  <p className="text-sm text-muted mb-3">
                    Complimentary 1Hour Online Webinar
                  </p>
                  <p className="text-sm text-muted">
                    <span className="text-foreground font-semibold">Designed for:</span> CEOs, Business Owners, Directors, Senior Management, HR &amp; L&amp;D Leaders
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button variant="primary" size="lg" asChild>
                    <a
                      href="https://tally.so/r/GxjrvO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register for the Complimentary Webinar
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted mt-4">
                  No technical background is required.
                </p>

                <p className="text-sm text-muted leading-relaxed mt-2">
                  Whether you are just starting your AI journey or looking to accelerate digital transformation, this session will provide practical insights that you can apply immediately within your organisation.
                </p>
              </section>

              {/* Preparing for the Future */}
              <section aria-label="Preparing for the Future" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Preparing for the Future
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  The pace of technological change will continue to accelerate. Organisations that invest in digital skills today will be better positioned to adapt to future disruptions, whether they come from new technologies, shifting market demands, or evolving workforce expectations.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Building digital capability is not a one-time initiative. It requires ongoing commitment, regular skills assessments, and a culture that encourages continuous learning.
                </p>
                <p className="text-muted leading-relaxed">
                  Leaders who treat digital upskilling as a strategic priority rather than an ad-hoc training program will build more resilient, agile, and competitive organisations.
                </p>
              </section>

              {/* Conclusion */}
              <section aria-label="Conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Conclusion
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Digital skills are no longer a competitive advantage. They are a baseline requirement for organisations that want to remain relevant in a rapidly changing economy.
                </p>
                <p className="text-muted leading-relaxed">
                  The responsibility for building digital capability rests with leadership. By prioritising digital upskilling, fostering a learning culture, and leading by example, business leaders can ensure their organisations are prepared for the future of work.
                </p>
              </section>

              {/* About LIT Digital Creators */}
              <section aria-label="About LIT Digital Creators" className="mb-12 pt-8 border-t border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About LIT Digital Creators
                </h2>
                <p className="text-muted leading-relaxed">
                  LIT Digital Creators is a corporate training and digital transformation company based in Malaysia. We help organisations build digital capability through structured training programs, executive education, and strategic advisory services. Our programs are HRDC claimable and designed for businesses at every stage of their digital transformation journey.
                </p>
              </section>

              {/* LinkedIn Section */}
              <section aria-label="Continue the conversation on LinkedIn" className="pt-8 border-t border-border/50">
                <p className="text-lg font-semibold text-foreground mb-4">
                  Continue the Conversation on LinkedIn
                </p>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={post.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn Discussion
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </section>

              {/* Related Articles */}
              <section aria-label="Related Articles" className="mt-16 pt-12 border-t border-border/50">
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
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
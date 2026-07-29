import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { insights } from "@/data/insights"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const post = insights.find((p) => p.slug === "hrdc-training-guide")!
const related = insights.filter((p) => p.slug !== "hrdc-training-guide")

export const metadata: Metadata = {
  title: "A Complete Guide to HRDC Claimable Training in Malaysia",
  description:
    "Everything you need to know about HRDC claimable training in Malaysia: eligibility, levy rates, claimable programs, application process, and how to choose the right training provider.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://litdigitalcreators.com/insights/hrdc-training-guide",
  },
  openGraph: {
    title: "A Complete Guide to HRDC Claimable Training in Malaysia",
    description:
      "Everything you need to know about HRDC claimable training in Malaysia: eligibility, levy rates, claimable programs, application process, and how to choose the right training provider.",
    url: "https://litdigitalcreators.com/insights/hrdc-training-guide",
    siteName: "LIT Digital Creators",
    locale: "en_MY",
    type: "article",
    images: [
      {
        url: "/Images/insights/petronas-lubricants.jpeg",
        width: 1200,
        height: 630,
        alt: "A Complete Guide to HRDC Claimable Training in Malaysia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Complete Guide to HRDC Claimable Training in Malaysia",
    description:
      "Everything you need to know about HRDC claimable training in Malaysia: eligibility, levy rates, claimable programs, application process, and how to choose the right training provider.",
    images: ["/Images/insights/petronas-lubricants.jpeg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Complete Guide to HRDC Claimable Training in Malaysia",
  description:
    "Everything you need to know about HRDC claimable training in Malaysia: eligibility, levy rates, claimable programs, and how to choose the right training provider.",
  image: "https://litdigitalcreators.com/Images/insights/petronas-lubricants.jpeg",
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  author: { "@type": "Organization", name: "LIT Digital Creators" },
  publisher: { "@type": "Organization", name: "LIT Digital Creators" },
}

export default function HrdcTrainingGuidePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article>
          <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
            <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden bg-brand/5 mb-8 md:mb-10">
              <Image
                src="/Images/insights/petronas-lubricants.jpeg"
                alt="Team collaborating on digital training strategy in a modern workplace"
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

              <section aria-label="Introduction" className="mb-8">
                <p className="text-muted leading-relaxed mb-4">
                  For employers registered under the Human Resource Development Corporation (HRDC) Act 2001, the levy paid each year represents both a statutory obligation and a valuable opportunity. HRDC claimable training allows organisations to recover training costs while building the workforce capabilities needed to stay competitive.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Yet many employers underutilise their levy, treat it as a sunk cost, or misunderstand what qualifies for claims. This guide covers the fundamentals of HRDC claimable training in Malaysia, from eligibility and levy rates to selecting the right programs and providers.
                </p>
                <p className="text-muted leading-relaxed">
                  Whether you are new to HRDC or looking to optimise your existing training strategy, this article provides a practical reference.
                </p>
              </section>

              <section aria-label="What Is HRDC and Who Needs to Register?" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Is HRDC and Who Needs to Register?
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  The Human Resource Development Corporation (HRDC) is a statutory body under the Ministry of Human Resources that regulates and promotes workforce training in Malaysia. It operates the HRD Levy (now known as the HRDC Levy) system, which funds structured employee development programs.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Employers registered under the HRDC Act contribute a monthly levy based on their employee wages. These contributions accumulate in a levy account that can be used to claim training grants when employees attend approved training programs.
                </p>
              </section>

              <section aria-label="HRDC Levy Rates and Grant Structure" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  HRDC Levy Rates and Grant Structure
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  The HRDC levy rate depends on the employer's category:
                </p>
                <div className="bg-[#FAFAFA] border border-border/60 rounded-xl p-5 md:p-6 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Category 1 (Mandatory)</strong> — Employers with 10 or more Malaysian employees must register and pay 1% of monthly wages (basic salary plus fixed allowances)</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Category 2 (Voluntary)</strong> — Employers with 5 to 9 Malaysian employees can choose to register and pay 0.5% of monthly wages</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Exempt Category</strong> — Employers with fewer than 5 Malaysian employees are generally exempt from registration and contributions</span>
                    </li>
                  </ul>
                </div>
                <p className="text-muted leading-relaxed mb-4">
                  The levy balance in your account determines how much grant you can claim. For most registered employers, HRDC grants cover up to 100% of eligible training costs per employee per year, subject to available levy balance and programme caps.
                </p>
                <p className="text-muted leading-relaxed">
                  Unused levy balances roll over year to year, meaning consistent training investment builds long-term capability without additional direct cost.
                </p>
              </section>

              <section aria-label="What Training Is HRDC Claimable?" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Training Is HRDC Claimable?
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  HRDC supports a broad range of training programs that contribute to workforce development. The key requirement is that the training must be structured, skills-focussed, and delivered by an approved provider.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Claimable training categories include:
                </p>
                <div className="bg-[#FAFAFA] border border-border/60 rounded-xl p-5 md:p-6 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Digital Skills & AI Training</strong> — Data analytics, AI literacy, automation, software proficiency, digital marketing</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Leadership & Management</strong> — Strategic thinking, change management, team leadership, executive coaching</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Technical & Vocational</strong> — Industry-specific certifications, engineering, quality management, safety training</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Soft Skills & Communication</strong> — Negotiation, presentation, cross-cultural communication, customer service</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Compliance & Regulatory</strong> — Industry-specific regulatory training, ISO standards, governance</span>
                    </li>
                  </ul>
                </div>
                <p className="text-muted leading-relaxed">
                  Training can be conducted in-house, through external providers, or via e-learning platforms, provided the training provider is registered with HRDC. LIT Digital Creators is a registered HRDC training provider offering a full range of digital and AI training programs.
                </p>
              </section>

              <section aria-label="How to Apply for HRDC Training Grants" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How to Apply for HRDC Training Grants
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Applying for HRDC training grants is a straightforward process managed through the HRDC e-TRiS (Electronic Training Registration and Information System) portal. Here is a step-by-step overview:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-[#FAFAFA] border border-border/60 rounded-xl p-5">
                    <p className="font-semibold text-foreground mb-1">Step 1: Plan Your Training</p>
                    <p className="text-muted text-sm leading-relaxed">
                      Identify the skills your organisation needs. Align training programs with business objectives to maximise the return on your HRDC investment.
                    </p>
                  </div>
                  <div className="bg-[#FAFAFA] border border-border/60 rounded-xl p-5">
                    <p className="font-semibold text-foreground mb-1">Step 2: Select a Registered Provider</p>
                    <p className="text-muted text-sm leading-relaxed">
                      Choose an HRDC-registered training provider that offers programs matching your needs (e.g. <strong className="text-foreground">LIT Digital Creators</strong>). Verify the provider's registration status on the HRDC portal.
                    </p>
                  </div>
                  <div className="bg-[#FAFAFA] border border-border/60 rounded-xl p-5">
                    <p className="font-semibold text-foreground mb-1">Step 3: Submit Grant Application</p>
                    <p className="text-muted text-sm leading-relaxed">
                      Log in to e-TRiS, complete the grant application form with training details, select employees, and submit. HRDC typically processes applications within 5 to 10 working days.
                    </p>
                  </div>
                  <div className="bg-[#FAFAFA] border border-border/60 rounded-xl p-5">
                    <p className="font-semibold text-foreground mb-1">Step 4: Conduct Training</p>
                    <p className="text-muted text-sm leading-relaxed">
                      Deliver the training as planned. Maintain attendance records, assessment results, and training materials for audit purposes.
                    </p>
                  </div>
                  <div className="bg-[#FAFAFA] border border-border/60 rounded-xl p-5">
                    <p className="font-semibold text-foreground mb-1">Step 5: Submit Grant Claim</p>
                    <p className="text-muted text-sm leading-relaxed">
                      After training completion, submit the grant claim through e-TRiS with supporting documents, including attendance sheets and certificates. HRDC reimburses approved claims to your company's bank account.
                    </p>
                  </div>
                </div>
                <p className="text-muted leading-relaxed">
                  Working with an experienced training provider simplifies this process. LIT Digital Creators handles documentation and compliance requirements, ensuring a seamless experience from registration to claim submission.
                </p>
              </section>

              <section aria-label="Common Mistakes to Avoid" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Common Mistakes to Avoid
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Many employers lose out on HRDC claims due to avoidable errors. Here are the most common pitfalls:
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">Treating training as a compliance exercise rather than a strategic investment.</strong> When training is chosen purely to utilise levy balance rather than meet business needs, the organisation gets little value even if the grant is maximised.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">Submitting incomplete or incorrect documentation.</strong> Missing attendance records, incorrect employee details, or non-compliant training materials can result in claim rejection or delayed payments.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">Waiting too long to submit claims.</strong> HRDC imposes timelines for claim submissions. Late submissions are automatically rejected, and the levy balance cannot be used for that training.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">Choosing non-compliant training providers.</strong> Not all training providers are HRDC-registered. Training from unregistered providers is not claimable, regardless of its quality or relevance.
                </p>
                <p className="text-muted leading-relaxed">
                  <strong className="text-foreground">Failing to plan for annual training requirements.</strong> Organisations that plan training at the last minute often choose generic programs that deliver limited business impact and miss the opportunity to align training with strategic goals.
                </p>
              </section>

              <section aria-label="Choosing the Right HRDC Training Provider" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Choosing the Right HRDC Training Provider
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  The quality of your training provider directly determines the impact of your HRDC investment. Here is what to look for:
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">HRDC Registration.</strong> Confirm that the provider is registered with HRDC and their registration is current. This is a non-negotiable requirement for grant claims.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">Industry Experience.</strong> Providers with practical industry experience deliver training that is relevant, actionable, and grounded in real business scenarios rather than theoretical frameworks.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">Customisation Capability.</strong> Every organisation has unique training needs. The best providers offer customised programs tailored to your industry, business objectives, and employee skill levels.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">Post-Training Support.</strong> Training that ends when the session ends delivers limited value. Providers who offer post-training resources, coaching, or follow-up assessments help ensure that learning translates into workplace capability.
                </p>
                <p className="text-muted leading-relaxed">
                  <strong className="text-foreground">Proven Track Record.</strong> Look for testimonials, case studies, and client references. A provider with a strong track record across multiple industries is more likely to deliver consistent quality.
                </p>
              </section>

              <section aria-label="Why Invest in HRDC Claimable Digital Training" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Invest in HRDC Claimable Digital Training
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  The business case for digital training has never been stronger. Rapid advances in AI, automation, and digital tools are reshaping industries, and organisations that fail to upskill their workforce risk falling behind.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  HRDC claimable digital training eliminates the cost barrier. Organisations can access high-quality digital skills programs at no direct cost by utilising their existing levy. This makes workforce digital transformation accessible to companies of all sizes.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Programs that focus on AI literacy, data analytics, digital marketing, and automation deliver measurable business outcomes: improved productivity, reduced operational costs, faster decision-making, and enhanced customer experiences.
                </p>
                <p className="text-muted leading-relaxed">
                  Most importantly, investing in digital training signals to employees that the organisation is committed to their professional development. This improves retention, attracts top talent, and builds a culture of continuous learning that sustains long-term competitiveness.
                </p>
              </section>

              <section aria-label="Conclusion" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Conclusion
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  HRDC claimable training is one of the most valuable tools available to Malaysian employers for building workforce capability. Understanding the levy system, knowing what qualifies for claims, and selecting the right training provider are the foundations of an effective training strategy.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  The organisations that maximise their HRDC investment are those that treat training as a strategic priority, choose programs that deliver measurable outcomes, and partner with experienced providers who understand both the regulatory requirements and the business impact of effective training.
                </p>
                <p className="text-muted leading-relaxed">
                  LIT Digital Creators is an HRDC-registered training provider specialising in digital skills, AI adoption, and leadership development. Contact us to discuss how we can help your organisation build the capabilities needed for the future of work.
                </p>
              </section>

              <section aria-label="Explore Our HRDC Training Programs" className="mb-8 rounded-2xl bg-[#FAFAFA] border border-border/60 p-8 md:p-10">
                <p className="text-brand text-xs font-bold tracking-[0.15em] uppercase mb-4">
                  HRDC CLAIMABLE TRAINING
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-[1.2] mb-4">
                  Explore Our Programs
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Browse our full range of HRDC claimable training programs in AI, digital transformation, and leadership development.
                </p>
                <Button variant="primary" size="lg" asChild>
                  <Link href="/hrdc-training">
                    View HRDC Training Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </section>

              <section aria-label="Continue the conversation on LinkedIn" className="pt-8 border-t border-border/50">
                <p className="text-lg font-semibold text-foreground mb-4">
                  Continue the Conversation on LinkedIn
                </p>
                <Button variant="outline" size="lg" asChild>
                  <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    Follow LIT Digital Creators
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </section>

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

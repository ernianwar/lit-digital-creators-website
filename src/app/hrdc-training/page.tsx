import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, CheckCircle, Building, Users, BookOpen, Award, BarChart3, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const siteUrl = "https://litdigitalcreators.com"

export const metadata: Metadata = {
  title: "HRDC Claimable Training | HRDC Grant & Levy Malaysia | LIT Digital Creators",
  description:
    "HRDC claimable corporate training programs in Malaysia. Maximise your HRDC levy for AI, digital transformation, leadership and workforce upskilling. Approved training provider.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${siteUrl}/hrdc-training`,
  },
  openGraph: {
    title: "HRDC Claimable Training | HRDC Grant & Levy Malaysia",
    description:
      "HRDC claimable corporate training programs in Malaysia. Maximise your HRDC levy for AI, digital transformation, leadership and workforce upskilling.",
    url: `${siteUrl}/hrdc-training`,
    siteName: "LIT Digital Creators",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: `${siteUrl}/Images/Logo/Logo_HRDC.png`,
        width: 800,
        height: 400,
        alt: "HRDC Registered Training Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRDC Claimable Training | HRDC Grant & Levy Malaysia",
    description:
      "HRDC claimable corporate training programs in Malaysia. Maximise your HRDC levy for AI, digital transformation, leadership and workforce upskilling.",
    images: [`${siteUrl}/Images/Logo/Logo_HRDC.png`],
  },
  keywords: [
    "HRDC claimable",
    "HRDC training",
    "HRDC grant",
    "HRDC levy",
    "HRD claim levy",
    "HRDC Malaysia",
    "HRDC registered training provider",
    "HRDC corporate training",
    "HRDC claimable program",
    "HRDF training Malaysia",
  ],
}

const programs = [
  {
    title: "AI & Digital Transformation",
    description: "From AI fundamentals to advanced digital strategy. Build workforce AI literacy and practical digital skills.",
    programs: [
      "AI for Workplace Productivity",
      "AI Leadership for Executives",
      "Microsoft Copilot & AI Tools",
      "Digital Transformation Strategy",
      "Data Analytics with Power BI",
      "Cybersecurity Awareness",
    ],
  },
  {
    title: "Leadership & Talent Development",
    description: "Develop future-ready leaders with structured programs designed for modern workplace challenges.",
    programs: [
      "AI Leadership for Managers",
      "Change Management",
      "Digital Leadership",
      "Agile Project Management",
      "High Impact Communication",
      "Design Thinking & Innovation",
    ],
  },
  {
    title: "Creative, Marketing & Digital Media",
    description: "Upskill your marketing and creative teams with hands-on digital and social media training.",
    programs: [
      "Social Media Marketing with Canva AI",
      "TikTok Content & Live Commerce",
      "Digital Marketing Strategy",
      "AI Content Creation",
      "Adobe Illustrator for Marketing",
      "Video Shooting & Editing",
    ],
  },
]

const benefits = [
  {
    icon: Building,
    title: "HRDC Registered Provider",
    description: "All our programs are HRDC claimable. We handle the documentation so you can focus on learning.",
  },
  {
    icon: Users,
    title: "Customised for Your Team",
    description: "Every program is tailored to your industry, objectives and workforce capability gaps.",
  },
  {
    icon: BookOpen,
    title: "Practical & Industry-Based",
    description: "Hands-on training with real workplace scenarios. No generic theory.",
  },
  {
    icon: Award,
    title: "Certified Trainers",
    description: "Delivered by experienced industry experts with proven track records.",
  },
  {
    icon: BarChart3,
    title: "Measureable Outcomes",
    description: "Pre- and post-training assessments to track capability growth and ROI.",
  },
  {
    icon: Clock,
    title: "Flexible Delivery",
    description: "On-site, virtual or hybrid. Schedule programs around your business needs.",
  },
]

export default function HrdcTrainingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Image
                  src="/Images/Logo/Logo_HRDC.png"
                  alt="HRDC Registered Training Provider"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="text-sm font-semibold text-brand tracking-[0.15em] uppercase">
                  HRDC Registered Training Provider
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                HRDC Claimable{" "}
                <span className="text-brand">Corporate Training</span>
              </h1>

              <p className="text-lg text-muted max-w-2xl mx-auto mb-4">
                Maximise your HRDC levy for workforce upskilling. We help organisations build AI, digital and leadership capabilities through structured, HRDC-approved training programs.
              </p>

              <p className="text-sm text-muted max-w-xl mx-auto mb-8">
                No complex claim procedures. We handle the HRDC documentation so your team can focus on learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="xl" asChild>
                  <a href="https://tally.so/r/9qgdZV">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="mailto:hello@litdigitalcreators.com?subject=HRDC%20Training%20Enquiry">
                    Enquire Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                { number: "1000+", label: "Professionals Upskilled" },
                { number: "30+", label: "Corporate Clients" },
                { number: "95%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.number} className="text-center p-8 bg-white rounded-2xl border border-border/60 shadow-sm">
                  <p className="text-4xl font-extrabold text-brand mb-2">{stat.number}</p>
                  <p className="text-sm text-muted font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                HRDC Claimable{" "}
                <span className="text-brand">Training Programs</span>
              </h2>
              <p className="text-lg text-muted">
                All programs are approved for HRDC levy claims. We manage the paperwork end-to-end.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {programs.map((category) => (
                <div
                  key={category.title}
                  className="p-8 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2 flex-1">
                    {category.programs.map((program) => (
                      <li key={program} className="text-sm text-muted flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                Why Choose Us for{" "}
                <span className="text-brand">HRDC Training</span>
              </h2>
              <p className="text-lg text-muted">
                We make HRDC claimable training simple, practical and impactful.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 bg-white rounded-2xl border border-border/60 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center mb-4">
                    <benefit.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <p className="text-brand text-xs font-bold tracking-[0.15em] uppercase mb-4">
                  START YOUR HRDC JOURNEY
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.2] mb-4">
                  Ready to Maximise Your HRDC Levy?
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto">
                  Book a free consultation. We will assess your training needs, recommend the right programs, and handle all HRDC claim documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto bg-white text-foreground hover:bg-gray-100" asChild>
                    <a href="https://tally.so/r/9qgdZV" target="_blank" rel="noopener noreferrer">
                      Get a Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10" asChild>
                    <a href="mailto:hello@litdigitalcreators.com">
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
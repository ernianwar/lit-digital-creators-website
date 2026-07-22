"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const mailtoLink = "mailto:hello@litdigitalcreators.com?subject=Corporate%20Training%20Enquiry&body=Hello%20LIT%20Digital%20Creators,%0A%0AI%20would%20like%20to%20enquire%20about%20your%20AI%20%26%20Digital%20Transformation%20services.%0A%0APlease%20contact%20me%20regarding%20the%20following:%0A%0AOrganisation:%0AContact%20Person:%0APhone%20Number:%0AEnquiry:%0A%0AThank%20you."

const solutions = [
  {
    title: "AI & Digital Transformation",
    description:
      "Comprehensive digital skills training tailored to your organisation's needs. From AI fundamentals to advanced digital transformation strategies.",
    programs: [
      "AI for Workplace Productivity",
      "Agentic AI & Workflow Automation",
      "Microsoft Copilot for Business",
      "Google Workspace AI",
      "Microsoft 365 Productivity",
      "Power BI for Business Intelligence & Data Analytics",
      "Cybersecurity Awareness & Digital Risk Management",
    ],
  },
  {
    title: "Leadership & Talent Development",
    description:
      "Build future-ready leaders and teams with structured development programs designed for modern workplaces.",
    programs: [
      "AI Leadership for Executives",
      "AI for Managers & Team Leaders",
      "Change Management",
      "Digital Leadership",
      "Agile Project Management",
      "High Impact Communication Skills",
      "Design Thinking & Innovation",
      "Sustainability & ESG Awareness",
      "Workplace Mental Wellness",
      "PR and Grooming Etiquette",
    ],
  },
  {
    title: "AI Strategy & Business Advisory",
    description:
      "Strategic AI advisory services to help your organisation identify opportunities, build roadmaps, and implement AI solutions effectively.",
    programs: [
      "AI Readiness Assessment",
      "Digital Transformation Roadmap",
      "AI Governance & Responsible AI",
      "Executive AI Advisory",
      "Digital Transformation Strategy",
      "AI Use Case Discovery Workshop",
    ],
  },
  {
    title: "Creative, Marketing & Digital Media",
    description:
      "Open enrollment programs for professionals looking to upskill in AI, digital productivity, and emerging technologies.",
    programs: [
      "Social Media Marketing with Canva AI",
      "TikTok Content & Live Commerce",
      "Adobe Illustrator for Marketing Design",
      "AI Content Creation & Prompt Engineering",
      "Social Media Strategy",
      "Digital Marketing Strategy",
      "Video Shooting and Editing for Social Media",
    ],
  },
]

export default function CorporateTrainingPage() {
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
                Our <span className="text-brand">Solutions</span>
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                End-to-end digital transformation solutions designed for enterprises, governments, and high-growth organisations.
              </p>
              <Button variant="primary" size="lg" asChild>
                <a href={mailtoLink}>
                  Enquire Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.slice(0, 3).map((solution, i) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group p-8 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {solution.programs.map((program) => (
                      <li key={program} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-brand mt-1.5 shrink-0">•</span>
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="self-start group/link text-brand hover:text-brand-hover"
                    asChild
                  >
                    <a href={mailtoLink}>
                      Enquire Now
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="group p-8 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {solutions[3].title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {solutions[3].description}
                </p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {solutions[3].programs.map((program) => (
                    <li key={program} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-brand mt-1.5 shrink-0">•</span>
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  size="sm"
                  className="self-start group/link text-brand hover:text-brand-hover"
                  asChild
                >
                  <a href={mailtoLink}>
                    Enquire Now
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <div className="lg:col-span-2">
                <div className="relative h-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-2xl p-9 md:p-10 flex flex-col overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand/10 rounded-full blur-3xl pointer-events-none" />

                  <p className="text-brand text-xs font-bold tracking-[0.15em] uppercase mb-4">
                    COMPLIMENTARY TNA SESSION
                  </p>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-[1.2] mb-4">
                    Can&apos;t Find the Right Solution?
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-xl">
                    Every organisation has unique capability needs.
                    <br />
                    We customise AI, Digital Transformation and Leadership &amp; Talent Development programs based on your business objectives, workforce capability gaps and organisational priorities.
                  </p>

                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto bg-white text-foreground hover:bg-gray-100"
                      asChild
                    >
                      <a
                        href="https://tally.so/r/9qgdZV"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get a Complimentary Training Needs Analysis Session
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
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

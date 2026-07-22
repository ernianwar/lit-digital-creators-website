"use client"

import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Award, Bot, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    icon: GraduationCap,
    title: "Corporate Training",
    description:
      "Comprehensive digital skills training tailored to your organisation's needs. From AI fundamentals to advanced digital transformation strategies.",
    href: "/corporate-training",
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
    icon: Award,
    title: "HRDC Claimable Training",
    description:
      "Fully HRDC claimable programs designed to maximise your training budget while delivering world-class digital skills development.",
    href: "/corporate-training#hrdc",
    programs: [
      "AI Leadership for Executives",
      "AI for Managers & Team Leaders",
      "Change Management",
      "Digital Leadership",
      "Agile Project Management",
      "High Impact Communication Skills",
      "Design Thinking & Innovation",
    ],
  },
  {
    icon: Bot,
    title: "AI Transformation Consultancy",
    description:
      "Strategic AI advisory services to help your organisation identify opportunities, build roadmaps, and implement AI solutions effectively.",
    href: "/corporate-training#consultancy",
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
    icon: Target,
    title: "Executive Coaching",
    description:
      "One-on-one and group coaching for C-suite leaders and senior management on digital leadership, AI strategy, and change management.",
    href: "/corporate-training#executive-coaching",
    programs: [
      "AI Leadership for Executives",
      "Digital Leadership",
      "Change Management",
      "Sustainability & ESG Awareness",
      "Workplace Mental Wellness",
      "PR and Grooming Etiquette",
    ],
  },
  {
    icon: Users,
    title: "Public Training",
    description:
      "Open enrollment programs for professionals looking to upskill in AI, digital productivity, and emerging technologies.",
    href: "/corporate-training#public-training",
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

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Our <span className="text-brand">Solutions</span>
          </h2>
          <p className="text-lg text-muted">
            End-to-end digital transformation solutions designed for enterprises, governments, and high-growth organisations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-8 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center mb-6 group-hover:from-brand group-hover:to-brand-hover transition-all duration-300">
                <solution.icon className="h-7 w-7 text-brand group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {solution.description}
              </p>
              <ul className="space-y-1.5 mb-6 flex-1">
                {solution.programs.map((p) => (
                  <li key={p} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-brand mt-1.5 shrink-0">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                size="sm"
                className="self-start group/link text-brand hover:text-brand-hover"
                asChild
              >
                <Link href={solution.href}>
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

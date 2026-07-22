"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import PopupProvider from "@/components/PopupProvider"

function BrandName({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-brand font-extrabold">LITC</span>
      <span className="text-[#222222] italic font-extrabold">ommunity</span>
    </span>
  )
}

const chipContent: Record<string, { heading: string; description: string }> = {
  "CSR & ESG Collaboration": {
    heading: "CSR & ESG Collaboration",
    description:
      "Partner with LIT Community to create meaningful CSR and ESG initiatives that improve access to AI, digital skills and lifelong learning.",
  },
  "Community Learning Programs": {
    heading: "Community Learning Programs",
    description:
      "Co-create community learning programs that empower individuals with practical AI, digital and leadership skills.",
  },
  "Digital Inclusion Initiatives": {
    heading: "Digital Inclusion Initiatives",
    description:
      "Support initiatives that bridge the digital divide and expand access to technology and future skills.",
  },
  "Employee Volunteering": {
    heading: "Employee Volunteering",
    description:
      "Empower your employees to contribute through mentoring, knowledge sharing and community learning activities.",
  },
  "Knowledge Sharing & Mentorship": {
    heading: "Knowledge Sharing & Mentorship",
    description:
      "Share expertise and industry experience to inspire learners and strengthen community capabilities.",
  },
  "Strategic Partnerships": {
    heading: "Strategic Partnerships",
    description:
      "Build long-term collaborations that create sustainable social impact through AI, digital skills and lifelong learning.",
  },
}

export default function CommunityPage() {
  const [selectedChip, setSelectedChip] = useState("CSR & ESG Collaboration")
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">

        {/* ─── 1. HERO ─── */}
        <section className="relative overflow-hidden bg-white min-h-[70vh] flex items-center">
          <div className="container py-24 md:py-32 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[760px] mx-auto text-center"
            >
              <p className="text-[42px] sm:text-[52px] md:text-[64px] leading-[1.1] font-extrabold tracking-tight mb-8">
                <BrandName />
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-foreground leading-[1.2] mb-5">
                Creating Opportunities Through AI, Digital Skills &amp; Lifelong Learning
              </h1>

              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[640px] mx-auto mb-8">
                Supporting SDG 4 (Quality Education) and SDG 8 (Decent Work &amp; Economic Growth) by making AI and digital skills more accessible through community learning, strategic partnerships and lifelong education.
              </p>

              <Button variant="primary" size="xl" asChild>
                <a href="https://tally.so/r/pb6G8y" target="_blank" rel="noopener noreferrer">
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <p className="text-sm text-muted mt-5">
                Free to Join &bull; Complimentary Learning &bull; Open to Everyone
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── 2. WHY LIT COMMUNITY EXISTS ─── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-[760px] lg:max-w-none mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <p className="text-sm font-semibold text-brand tracking-[0.15em] uppercase mb-4">
                  Our Purpose
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] mb-6">
                  Why <BrandName /> Exists
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                  <p>
                    Technology should create opportunities, not widen the digital divide.
                  </p>
                  <p>
                    <BrandName /> is the social impact initiative by LIT Digital Creators, dedicated to making AI and digital skills more accessible through complimentary learning, strategic partnerships and community collaboration.
                  </p>
                  <p>
                    Whether you&apos;re a student, entrepreneur, working professional or organisation, our mission is to create opportunities that inspire lifelong learning and meaningful impact.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:col-span-2 flex items-center justify-center"
              >
                <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
                  {["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((file) => (
                    <div
                      key={file}
                      className="aspect-square rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={`/images/community/${file}`}
                        alt=""
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 3. OUR IMPACT PILLARS ─── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px] mx-auto text-center mb-12"
            >
              <p className="text-sm font-semibold text-brand tracking-[0.15em] uppercase mb-4">
                Our Impact Pillars
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15]">
                Creating Impact Through 3 Focus Areas
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[760px] lg:max-w-none mx-auto">
              {[
                {
                  title: "Learn",
                  description:
                    "Expanding access to AI and digital skills through complimentary learning experiences that promote lifelong education.",
                },
                {
                  title: "Empower",
                  description:
                    "Building future talent, entrepreneurs and organisations with practical digital capabilities.",
                },
                {
                  title: "Impact",
                  description:
                    "Creating sustainable social impact through collaboration with corporate partners, government agencies and community organisations.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col justify-center p-8 bg-white rounded-2xl border border-border/60 hover:border-brand/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. OUR COMMUNITY GOALS 2026–2030 ─── */}
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px] mx-auto text-center mb-12"
            >
              <p className="text-sm font-semibold text-brand tracking-[0.15em] uppercase mb-4">
                Our Community Goals
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
                Our 2026–2030 Commitments
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[640px] mx-auto">
                Our 2026–2030 goals reflect <BrandName />&apos;s long-term commitment to expanding access to AI, digital skills and lifelong learning while contributing to SDG 4 (Quality Education) and SDG 8 (Decent Work &amp; Economic Growth).
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[760px] lg:max-w-none mx-auto">
              {[
                { number: "1,000+", label: "Community Participants" },
                { number: "700+", label: "Hours of Complimentary Learning Delivered" },
                { number: "70+", label: "Community Learning Sessions" },
                { number: "5", label: "Strategic Partners" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl border border-border/60 shadow-sm"
                >
                  <span className="text-4xl sm:text-5xl font-extrabold text-brand leading-[1.1] mb-3">
                    {stat.number}
                  </span>
                  <p className="text-sm text-muted leading-relaxed max-w-[180px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. COMMUNITY INITIATIVES ─── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px] mx-auto text-center mb-12"
            >
              <p className="text-sm font-semibold text-brand tracking-[0.15em] uppercase mb-4">
                Community Initiatives
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
                Creating Learning Opportunities That Matter
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[640px] mx-auto">
                <BrandName /> delivers complimentary learning initiatives that help individuals build practical AI, digital and leadership capabilities while creating positive impact for the wider community.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[760px] lg:max-w-none mx-auto">
              {[
                {
                  title: "AI Literacy",
                  description:
                    "Helping individuals understand and use AI responsibly through practical, accessible and real industry learning experiences.",
                },
                {
                  title: "Digital Skills Development",
                  description:
                    "Providing hands-on digital skills that improve productivity, employability and business capability.",
                },
                {
                  title: "Leadership & Future Skills",
                  description:
                    "Supporting professionals, entrepreneurs and future leaders with the skills needed to thrive in a rapidly changing world.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col p-8 bg-white rounded-[24px] border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. PARTNER WITH US ─── */}
        <section className="py-20 md:py-28 bg-[#FFF7F2]">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-[760px] lg:max-w-none mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <p className="text-sm font-semibold text-brand tracking-[0.15em] uppercase mb-4">
                  Partner With Us
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
                  Create Meaningful Impact Together
                </h2>
                <div className="text-base sm:text-lg text-muted leading-relaxed space-y-4 mb-8">
                  <p>
                    We welcome corporations, government agencies, educational institutions, NGOs and community organisations to collaborate with <BrandName /> in expanding access to AI, digital skills and lifelong learning.
                  </p>
                  <p>
                    Together, we can create meaningful opportunities that empower individuals, strengthen communities and build a future workforce.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {Object.keys(chipContent).map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setSelectedChip(chip)}
                      className={`inline-block px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                        selectedChip === chip
                          ? "bg-[#DD7430] text-white border-[#DD7430]"
                          : "text-foreground bg-white border-border/60 hover:border-brand/40"
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-2 flex items-start lg:pt-8"
              >
                <div className="w-full p-8 bg-white rounded-[24px] border border-border/60 shadow-sm">
                  <p className="text-xs font-semibold text-brand tracking-[0.1em] uppercase mb-3">
                    Community Partnership
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedChip}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {chipContent[selectedChip].heading}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-6">
                        {chipContent[selectedChip].description}
                      </p>
                      <p className="text-sm text-muted leading-relaxed mb-6">
                        Interested in collaborating with <BrandName />? We&apos;d love to explore how we can create meaningful impact together.
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <Button variant="primary" size="lg" className="w-full" asChild>
                    <a href="https://tally.so/r/QKaYMX" target="_blank" rel="noopener noreferrer">
                      Partnership Enquiry
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 7. LEARNING HUB ─── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px] mx-auto text-center mb-12"
            >
              <p className="text-sm font-semibold text-brand tracking-[0.15em] uppercase mb-4">
                Learning Hub
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] mb-5">
                Learning Resources
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[640px] mx-auto">
                Members of <BrandName /> will receive invitations through email and WhatsApp for webinars or learning hub sessions to support continuous learning beyond our community initiatives.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[760px] lg:max-w-none mx-auto">
              {[
                { title: "Recorded Webinars" },
                { title: "AI & Digital Guides" },
                { title: "Community Resources" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col p-8 bg-white rounded-[24px] border border-border/60 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <Badge variant="secondary" className="shrink-0 text-[11px] px-2.5 py-1">
                      Coming Soon
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. FOOTER NOTE ─── */}
        <section className="py-12 border-t border-border/50 bg-white">
          <div className="container text-center">
            <p className="text-sm text-muted max-w-2xl mx-auto leading-relaxed">
              <BrandName /> is the social impact initiative by LIT Digital Creators, dedicated to expanding access to AI, digital skills and lifelong learning through community collaboration and strategic partnerships.
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
      <PopupProvider />
    </>
  )
}

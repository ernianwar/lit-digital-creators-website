import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import HomeAbout from "@/components/HomeAbout"
import WhyTrust from "@/components/WhyTrust"
import Testimonials from "@/components/Testimonials"
import VideoTestimonials from "@/components/VideoTestimonials"
import Insights from "@/components/Insights"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import PopupProvider from "@/components/PopupProvider"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeAbout />
        <WhyTrust />
        <Testimonials />
        <VideoTestimonials />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <PopupProvider />
    </>
  )
}

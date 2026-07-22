import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
              Terms of Use
            </h1>
            <div className="space-y-6 text-muted text-base leading-relaxed">
              <p>Last updated: January 2026</p>

              <h2 className="text-xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">2. Services</h2>
              <p>LIT Digital Creators provides AI & digital transformation consultancy, corporate training, and related professional services. Details of our services are described on our website and are subject to change without notice.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">3. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, images, and software, is the property of LIT Digital Creators and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">4. User Conduct</h2>
              <p>You agree not to use this website for any unlawful purpose or in violation of these terms. You must not attempt to gain unauthorised access to our systems or interfere with the proper functioning of the website.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">5. Limitation of Liability</h2>
              <p>LIT Digital Creators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or our services.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">6. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">7. Contact</h2>
              <p>For questions about these Terms of Use, contact us at <a href="mailto:hello@litdigitalcreators.com" className="text-brand hover:text-brand-hover">hello@litdigitalcreators.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

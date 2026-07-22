import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function PDPANotice() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
              PDPA Notice
            </h1>
            <div className="space-y-6 text-muted text-base leading-relaxed">
              <p>Last updated: January 2026</p>

              <h2 className="text-xl font-bold text-foreground mt-8">1. PDPA Compliance</h2>
              <p>LIT Digital Creators complies with the Personal Data Protection Act 2010 (PDPA) of Malaysia. This notice explains how we process your personal data in accordance with the PDPA.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">2. Data Controller</h2>
              <p>LIT Digital Creators is the data controller responsible for the processing of your personal data. We are committed to protecting your personal data in accordance with the PDPA.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">3. Purpose of Processing</h2>
              <p>We process your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing training and consultancy services</li>
                <li>Processing registrations and enrolments</li>
                <li>HRDC grant applications and claims</li>
                <li>Communication regarding our services</li>
                <li>Compliance with legal and regulatory obligations</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8">4. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable laws and regulations.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">5. Data Subject Rights</h2>
              <p>Under the PDPA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Limit processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8">6. Contact</h2>
              <p>For any inquiries regarding your personal data or this PDPA Notice, contact our Data Protection Officer at <a href="mailto:hello@litdigitalcreators.com" className="text-brand hover:text-brand-hover">hello@litdigitalcreators.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

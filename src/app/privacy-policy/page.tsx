import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-gray max-w-none space-y-6 text-muted text-base leading-relaxed">
              <p>Last updated: January 2026</p>

              <h2 className="text-xl font-bold text-foreground mt-8">1. Introduction</h2>
              <p>LIT Digital Creators (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">2. Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fill out a contact or enquiry form</li>
                <li>Register for our training programs</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p>This information may include your name, email address, phone number, organisation name, and job title.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and manage our training and consultancy services</li>
                <li>Respond to your enquiries and communications</li>
                <li>Process registrations and HRDC claims</li>
                <li>Send relevant information about our services and updates</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8">4. Data Protection</h2>
              <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">5. Third-Party Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or for the purpose of delivering our services (e.g., HRDC processing).</p>

              <h2 className="text-xl font-bold text-foreground mt-8">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data held by us</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@litdigitalcreators.com" className="text-brand hover:text-brand-hover">hello@litdigitalcreators.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

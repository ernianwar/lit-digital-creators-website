import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
              Cookie Policy
            </h1>
            <div className="space-y-6 text-muted text-base leading-relaxed">
              <p>Last updated: January 2026</p>

              <h2 className="text-xl font-bold text-foreground mt-8">1. What Are Cookies</h2>
              <p>Cookies are small text files that are stored on your device when you visit a website. They help websites function properly, improve user experience, and provide analytics information.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">2. How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure our website functions correctly</li>
                <li>Remember your preferences</li>
                <li>Analyse how visitors use our website</li>
                <li>Improve our website performance</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8">3. Types of Cookies We Use</h2>
              <p><strong>Essential Cookies:</strong> Required for the website to function properly.</p>
              <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</p>
              <p><strong>Functional Cookies:</strong> Remember your preferences for a better experience.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">4. Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">5. Third-Party Cookies</h2>
              <p>We may use third-party services (such as analytics providers) that set their own cookies. These third parties have their own cookie policies.</p>

              <h2 className="text-xl font-bold text-foreground mt-8">6. Contact</h2>
              <p>For questions about this Cookie Policy, contact us at <a href="mailto:hello@litdigitalcreators.com" className="text-brand hover:text-brand-hover">hello@litdigitalcreators.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

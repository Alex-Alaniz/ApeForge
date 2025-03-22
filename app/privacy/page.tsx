import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-blue-500">Privacy Policy</h1>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg">
            <p>
              At ApeForge, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Collection of Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Website
              includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address,
                and telephone number, that you voluntarily give to us when you register with the Website or when you
                choose to participate in various activities related to the Website.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the
                Website, such as your IP address, browser type, operating system, access times, and the pages you have
                viewed.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the Website to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Increase the efficiency and operation of the Website.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
              <li>Notify you of updates to the Website.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclosure of Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
                necessary to respond to legal process, to investigate or remedy potential violations of our policies, or
                to protect the rights, property, and safety of others, we may share your information as permitted or
                required by any applicable law, rule, or regulation.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that
                perform services for us or on our behalf, including payment processing, data analysis, email delivery,
                hosting services, customer service, and marketing assistance.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Security of Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p className="mt-4">
              <strong>Email:</strong> privacy@apeforge.com
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


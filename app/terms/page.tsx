import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-blue-500">Terms of Service</h1>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg">
            <p>
              Welcome to ApeForge. By accessing or using our platform, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ApeForge, you agree to be bound by these Terms of Service and all applicable laws
              and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing
              this site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on ApeForge's website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on ApeForge's website are provided on an 'as is' basis. ApeForge makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall ApeForge or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on ApeForge's website, even if ApeForge or a ApeForge authorized representative has
              been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Revisions and Errata</h2>
            <p>
              The materials appearing on ApeForge's website could include technical, typographical, or photographic
              errors. ApeForge does not warrant that any of the materials on its website are accurate, complete or
              current. ApeForge may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Links</h2>
            <p>
              ApeForge has not reviewed all of the sites linked to its website and is not responsible for the contents
              of any such linked site. The inclusion of any link does not imply endorsement by ApeForge of the site. Use
              of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications to Terms of Service</h2>
            <p>
              ApeForge may revise these terms of service for its website at any time without notice. By using this
              website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
              submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Twitter, Github } from "lucide-react"
import { InteractiveParticleText } from "@/components/interactive-particle-text"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact <InteractiveParticleText text="APEFORGE" size="medium" className="inline-block" />
          </h1>
        </div>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Have questions, ideas, or want to collaborate? We'd love to hear from you.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Options */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-blue-500" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-gray-400 mb-2">For general inquiries:</p>
                    <a href="mailto:info@apeforge.io" className="text-blue-400 hover:text-blue-300">
                      info@apeforge.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Twitter className="h-6 w-6 mr-4 mt-1 text-blue-500" />
                  <div>
                    <h3 className="font-medium mb-1">Follow Us</h3>
                    <p className="text-gray-400 mb-2">Stay updated with our latest news:</p>
                    <a
                      href="https://x.com/AlexDotEth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      @AlexDotEth
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Github className="h-6 w-6 mr-4 mt-1 text-blue-500" />
                  <div>
                    <h3 className="font-medium mb-1">Contribute</h3>
                    <p className="text-gray-400 mb-2">Check out our open source projects:</p>
                    <a
                      href="https://github.com/apeforge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      github.com/apeforge
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Idea Section */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Submit an Idea</h2>
              <p className="text-gray-400 mb-6">
                Have an idea for a tool that would benefit the ApeChain ecosystem? We're always looking for new projects
                to forge.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="idea" className="block text-sm font-medium mb-1">
                    Your Idea
                  </label>
                  <textarea
                    id="idea"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                >
                  Submit Idea
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


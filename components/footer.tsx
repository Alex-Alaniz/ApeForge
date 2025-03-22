import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Company info */}
          <div className="mb-4 md:mb-0 md:w-1/3 text-left">
            <p className="text-gray-400 text-sm">ApeForge | BearifiedCo</p>
          </div>

          {/* Center - ApeChain logo */}
          <div className="mb-4 md:mb-0 md:w-1/3 flex justify-center">
            <Image
              src="/images/powered-by-apecoin-white.png"
              alt="Powered by ApeCoin"
              width={100}
              height={20}
              className="h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Right side - Navigation links */}
          <div className="md:w-1/3 flex gap-6 justify-center md:justify-end">
            <Link href="/faq" className="text-sm text-gray-400 hover:text-white">
              FAQ
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


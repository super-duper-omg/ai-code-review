import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-pink-600">BloomBoutique</span>
        </Link>
        <nav className="flex space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-pink-600">
            Features
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-pink-600">
            About
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-pink-600">
            Contact
          </Link>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


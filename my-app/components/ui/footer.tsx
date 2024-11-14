import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-gray-600">
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-xl">Enrich Education</h3>
            <p className="text-sm">Excellence in Education Since 2007</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-xl">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                123 Burwood Road, Burwood NSW 2134
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (02) 9123 4567
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@enricheducation.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-xl">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#" className="text-gray-600 hover:text-blue-600">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-gray-600 hover:text-blue-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>© 2024 Enrich Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

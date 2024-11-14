import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-blue-600">Enrich Education</h3>
            <p className="text-sm">Excellence in Education Since 2007</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-pink-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-purple-600">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Burwood Center:</p>
                  <p>1/4 Railway Pde, Burwood, 2034</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sydney CBD Center:</p>
                  <p>13/333 George St, Sydney, 2000</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-pink-500" />
                (02) 9123 4567
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-pink-500" />
                info@enricheducation.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-purple-600">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#" className="hover:text-blue-600 transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-purple-600">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-gray-700 bg-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm">
          <p>© 2024 Enrich Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
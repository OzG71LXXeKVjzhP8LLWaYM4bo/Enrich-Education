'use client'

import Link from "next/link"
import { MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { subscribeToNewsletter } from "@/app/newsletter"

export function Footer() {
  const [message, setMessage] = useState('')

  async function handleSubscribe(formData: FormData) {
    const result = await subscribeToNewsletter(formData)
    setMessage(result.message)
  }

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
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Level+4%2C+1%2F4+Railway+Pde%2C+Burwood%2C+2034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Level 4, 1/4 Railway Pde, Burwood, 2034
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sydney CBD Center:</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=13%2F333+George+St%2C+Sydney%2C+2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    13/333 George St, Sydney, 2000
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-pink-500" />
                <a 
                  href="https://wa.me/61430089992" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  +61 430 089 992
                </a>
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
          
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm">
          <p>© 2024 Enrich Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
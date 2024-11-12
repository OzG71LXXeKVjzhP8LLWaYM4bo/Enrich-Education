'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronDown, GraduationCap } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Enrich Education</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-blue-600 rounded-md hover:bg-blue-50"
            >
              HOME
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem key="about">
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
                    ABOUT
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] p-2 gap-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/ourstory"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Our Story
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/methodology"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Methodology
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/teachers"
              className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-600"
            >
              TEACHERS
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem key="courses">
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
                    COURSES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] p-2 gap-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/general"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            General Courses
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/oc"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            OC Prep
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/selective-prep"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Selective School Prep
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/scholarship-prep"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Scholarship Prep
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/hsc"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            HSC Courses
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/ib"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            IB Courses
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/further-literacy"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Further Literacy
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/further-quantitative-reasoning"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Further Quantitative Reasoning
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/contact">
              <Button className="bg-pink-500 text-white hover:bg-pink-600">CONTACT</Button>
            </Link>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <details className="group">
              <summary className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-blue-50 cursor-pointer">
                ABOUT
              </summary>
              <ul className="pl-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/ourstory"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/methodology"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Methodology
                  </Link>
                </li>
              </ul>
            </details>
            <Link
              href="/teachers"
              className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              TEACHERS
            </Link>
            <details className="group">
              <summary className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-blue-50 cursor-pointer">
                COURSES
              </summary>
              <ul className="pl-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/courses/general"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    General Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/oc"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    OC Prep
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/selective-prep"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Selective School Prep
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/scholarship-prep"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Scholarship Prep
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/hsc"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HSC Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/ib"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    IB Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/further-literacy"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Further Literacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/further-quantitative-reasoning"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Further Quantitative Reasoning
                  </Link>
                </li>
              </ul>
            </details>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">CONTACT</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
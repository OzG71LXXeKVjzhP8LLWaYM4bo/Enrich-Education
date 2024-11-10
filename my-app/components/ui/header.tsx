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
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
                    ABOUT
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] p-2 gap-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about"
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
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
                    COURSES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] p-2 gap-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/mathematics"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Mathematics
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/english"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            English
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses/sciences"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Sciences
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
                    TIMETABLES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] p-2 gap-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/timetables/term"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Term Timetable
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/timetables/holiday"
                            className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                          >
                            Holiday Programs
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-pink-500 text-white hover:bg-pink-600">CONTACT</Button>
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
    </header>
  )
}

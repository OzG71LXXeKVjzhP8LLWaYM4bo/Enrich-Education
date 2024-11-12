
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
import { GraduationCap, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/testimonials", label: "TESTIMONIALS" },
    { href: "/teachers", label: "TEACHERS" },
  ]

  const aboutItems = [
    { href: "/ourstory", label: "Our Story" },
    { href: "/methodology", label: "Methodology" },
  ]

  const courseItems = [
    { href: "/courses/general", label: "General Courses" },
    { href: "/courses/oc", label: "OC Prep" },
    { href: "/courses/selective-prep", label: "Selective School Prep" },
    { href: "/courses/scholarship-prep", label: "Scholarship Prep" },
    { href: "/courses/hsc", label: "HSC Courses" },
    { href: "/courses/ib", label: "IB Courses" },
    { href: "/courses/further-literacy", label: "Further Literacy" },
    { href: "/courses/further-quantitative-reasoning", label: "Further Quantitative Reasoning" },
  ]

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Enrich Education</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
                    ABOUT
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] p-2 gap-1">
                      {aboutItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
                    COURSES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] p-2 gap-1">
                      {courseItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/contact">
              <Button className="bg-pink-500 text-white hover:bg-pink-600">CONTACT</Button>
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-600 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
                <details className="group">
                  <summary className="text-lg font-medium text-gray-600 hover:text-blue-600 cursor-pointer">
                    ABOUT
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4">
                    {aboutItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
                <details className="group">
                  <summary className="text-lg font-medium text-gray-600 hover:text-blue-600 cursor-pointer">
                    COURSES
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4">
                    {courseItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
                <Link href="/contact" className="mt-4">
                  <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">CONTACT</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
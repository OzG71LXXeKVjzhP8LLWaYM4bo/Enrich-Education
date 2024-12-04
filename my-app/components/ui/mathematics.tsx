import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Course = {
  id: string
  title: string
  description: string
  subjects: string[]
  level: string
  duration: string
  price: number
}

const mathsCourses: Course[] = [
  {
    id: "hsc-math-advanced",
    title: "HSC Mathematics Advanced",
    description: "Comprehensive preparation for HSC Mathematics Advanced, covering calculus, statistical analysis, and more.",
    subjects: ["Calculus", "Statistical Analysis", "Financial Mathematics"],
    level: "Year 11-12",
    duration: "10 weeks per term",
    price: 850
  },
  {
    id: "hsc-math-extension-1",
    title: "HSC Mathematics Extension 1",
    description: "In-depth study of advanced mathematical concepts, preparing students for the Extension 1 exam.",
    subjects: ["Further Calculus", "Trigonometry", "Combinatorics"],
    level: "Year 11-12",
    duration: "10 weeks per term",
    price: 850
  },
  {
    id: "hsc-math-extension-2",
    title: "HSC Mathematics Extension 2",
    description: "Rigorous preparation for the most advanced HSC mathematics course, covering complex numbers, mechanics, and more.",
    subjects: ["Complex Numbers", "Mechanics", "Proof Techniques"],
    level: "Year 12",
    duration: "10 weeks per term",
    price: 850
  },
  {
    id: "year-10-math",
    title: "Year 10 Mathematics",
    description: "Foundational course to prepare students for senior high school mathematics and boost problem-solving skills.",
    subjects: ["Algebra", "Geometry", "Probability"],
    level: "Year 10",
    duration: "10 weeks per term",
    price: 850
  }
]

export default function MathematicsCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Mathematics Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers specialized mathematics courses designed to help students excel in their HSC exams and boost their problem-solving skills. Explore our offerings below and find the perfect course to enhance your mathematical abilities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mathsCourses.map((course) => (
            <Card key={course.id} className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{course.title}</CardTitle>
                <CardDescription className="text-white/80">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary" className="bg-blue-500 text-white">
                      {subject}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-white/80 mb-2">
                  <strong>Level:</strong> {course.level}
                </p>
                <p className="text-sm text-white/80 mb-2">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="text-sm text-white/80">
                  <strong>Price:</strong> ${course.price} per term
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/contact" passHref className="w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white transition-colors duration-300">
                    Contact Us
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
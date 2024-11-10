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

const ibCourses: Course[] = [
  {
    id: "ib-math-sl",
    title: "IB Mathematics SL",
    description: "Comprehensive preparation for IB Mathematics Standard Level, covering algebra, functions, trigonometry, vectors, statistics and probability, and calculus.",
    subjects: ["Algebra", "Functions", "Trigonometry", "Vectors", "Statistics", "Calculus"],
    level: "IB Year 1-2",
    duration: "10 weeks per term",
    price: 950
  },
  {
    id: "ib-math-hl",
    title: "IB Mathematics HL",
    description: "In-depth study of IB Mathematics Higher Level, including advanced topics in calculus, linear algebra, statistics, and probability theory.",
    subjects: ["Advanced Calculus", "Linear Algebra", "Complex Numbers", "Probability Theory"],
    level: "IB Year 1-2",
    duration: "10 weeks per term",
    price: 1050
  },
  {
    id: "ib-english-sl",
    title: "IB English Language and Literature SL",
    description: "Comprehensive course for IB English Language and Literature Standard Level, focusing on textual analysis, written expression, and oral communication.",
    subjects: ["Literary Analysis", "Language in Cultural Context", "Written Tasks", "Oral Presentations"],
    level: "IB Year 1-2",
    duration: "10 weeks per term",
    price: 950
  },
  {
    id: "ib-english-hl",
    title: "IB English Literature HL",
    description: "Advanced study of IB English Literature Higher Level, exploring a wide range of texts from different cultures and periods, with emphasis on critical analysis and creative response.",
    subjects: ["Detailed Literary Analysis", "Comparative Studies", "Literary Genres", "Creative Writing"],
    level: "IB Year 1-2",
    duration: "10 weeks per term",
    price: 1050
  }
]

export default function IBCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          IB Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers specialized IB courses designed to help students excel in their International Baccalaureate exams. Our courses cover both Standard Level (SL) and Higher Level (HL) for Mathematics and English. Explore our offerings below and find the perfect course to enhance your IB journey.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {ibCourses.map((course) => (
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
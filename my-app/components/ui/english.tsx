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

const englishCourses: Course[] = [
  {
    id: "hsc-english-advanced",
    title: "HSC English Advanced",
    description: "In-depth study of HSC English Advanced texts, essay writing skills, and literary analysis techniques.",
    subjects: ["Text Analysis", "Creative Writing", "Critical Thinking"],
    level: "Year 11-12",
    duration: "10 weeks per term",
    price: 850
  },
  {
    id: "hsc-english-standard",
    title: "HSC English Standard",
    description: "Comprehensive preparation for HSC English Standard, focusing on text comprehension and effective communication.",
    subjects: ["Text Types", "Language Analysis", "Essay Writing"],
    level: "Year 11-12",
    duration: "10 weeks per term",
    price: 850
  },
  {
    id: "hsc-english-extension-1",
    title: "HSC English Extension 1",
    description: "Advanced course for students taking English Extension 1, exploring complex texts and theoretical perspectives.",
    subjects: ["Literary Theory", "Comparative Study", "Extended Response"],
    level: "Year 11-12",
    duration: "10 weeks per term",
    price: 850
  },
  {
    id: "year-10-english",
    title: "Year 10 English",
    description: "Foundational course to prepare students for senior high school English and improve analytical and writing skills.",
    subjects: ["Text Analysis", "Essay Writing", "Creative Writing"],
    level: "Year 10",
    duration: "10 weeks per term",
    price: 850
  }
]

export default function EnglishCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          English Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers specialized English courses designed to help students excel in their HSC exams and improve their language skills. Explore our offerings below and find the perfect course to enhance your reading, writing, and analytical abilities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {englishCourses.map((course) => (
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
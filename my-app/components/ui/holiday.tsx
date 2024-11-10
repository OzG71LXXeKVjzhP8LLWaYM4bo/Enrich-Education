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

const holidayCourses: Course[] = [
  {
    id: "hsc-trial-prep",
    title: "HSC Trial Exam Preparation",
    description: "Intensive course to prepare students for HSC trial exams, covering key subjects and exam techniques.",
    subjects: ["Mathematics", "English", "Sciences"],
    level: "Year 12",
    duration: "2 weeks",
    price: 500
  },
  {
    id: "year-11-headstart",
    title: "Year 11 Headstart Program",
    description: "Get a head start on Year 11 subjects during the school holidays, building a strong foundation for HSC success.",
    subjects: ["Advanced Mathematics", "English Advanced", "Physics"],
    level: "Year 10 going to Year 11",
    duration: "1 week",
    price: 300
  },
  {
    id: "study-skills-bootcamp",
    title: "Study Skills Bootcamp",
    description: "Intensive program focusing on developing effective study habits, time management, and exam preparation strategies.",
    subjects: ["Time Management", "Note-taking", "Exam Strategies"],
    level: "Years 10-12",
    duration: "3 days",
    price: 250
  },
  {
    id: "hsc-english-essay-writing",
    title: "HSC English Essay Writing Workshop",
    description: "Focused workshop on improving essay writing skills for HSC English, including structure, analysis, and argumentation.",
    subjects: ["Essay Structure", "Text Analysis", "Argumentation"],
    level: "Years 11-12",
    duration: "4 days",
    price: 280
  }
]

export default function HolidayCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Holiday Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers specialized holiday courses designed to give students an extra boost during their school breaks. Explore our offerings below and find the perfect course to enhance your skills and prepare for upcoming challenges.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {holidayCourses.map((course) => (
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
                  <strong>Price:</strong> ${course.price}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/courses/holiday/${course.id}`} passHref className="w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white transition-colors duration-300">
                    Learn More
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
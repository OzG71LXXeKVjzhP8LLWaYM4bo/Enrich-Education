import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

type Course = {
  id: string
  title: string
  description: string
  subjects: string[]
  level: string
  duration: string
  price: number
  curriculum: string[]
}

const selectivePrepCourses: Course[] = [
  {
    id: "selective-year4",
    title: "Selective School Preparation - Year 4",
    description: "Early preparation course for the Selective High School Placement Test, focusing on building strong foundations in all test areas.",
    subjects: ["English", "Mathematics", "General Ability", "Writing"],
    level: "Year 4",
    duration: "10 weeks per term",
    price: 900,
    curriculum: [
      "Reading comprehension strategies",
      "Vocabulary development",
      "Basic mathematical operations and problem-solving",
      "Introduction to general ability questions",
      "Persuasive and creative writing techniques",
      "Time management skills",
      "Test-taking strategies",
      "Critical thinking exercises"
    ]
  },
  {
    id: "selective-year5",
    title: "Selective School Preparation - Year 5",
    description: "Comprehensive preparation course for Year 5 students, covering all components of the Selective High School Placement Test in depth.",
    subjects: ["Advanced English", "Advanced Mathematics", "General Ability", "Writing"],
    level: "Year 5",
    duration: "10 weeks per term",
    price: 900,
    curriculum: [
      "Advanced reading comprehension and analysis",
      "Complex mathematical problem-solving",
      "Extensive general ability practice",
      "Advanced writing techniques for various genres",
      "Mock tests and exam preparation",
      "Logical reasoning and critical thinking",
      "Speed and accuracy improvement strategies",
      "Interview skills (if applicable)"
    ]
  },
  {
    id: "selective-year6",
    title: "Selective School Preparation - Year 6",
    description: "Intensive final preparation course for Year 6 students, focusing on exam techniques, time management, and confidence building.",
    subjects: ["English Mastery", "Mathematics Mastery", "General Ability Mastery", "Writing Mastery"],
    level: "Year 6",
    duration: "10 weeks per term",
    price: 900,
    curriculum: [
      "Advanced text analysis and interpretation",
      "High-level mathematical concepts and applications",
      "Mastery of general ability question types",
      "Refined writing skills for maximum impact",
      "Intensive mock testing and feedback",
      "Advanced time management techniques",
      "Stress management and exam psychology",
      "Final preparation strategies and tips"
    ]
  }
]

export default function SelectivePrepCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Selective School Preparation Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers comprehensive Selective School preparation courses designed to give students the best chance of success in the Selective High School Placement Test. Our programs cater to students from Year 4 to Year 6, providing targeted preparation and support.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {selectivePrepCourses.map((course) => (
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
                <p className="text-sm text-white/80 mb-4">
                  <strong>Price:</strong> ${course.price} per term
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="curriculum">
                    <AccordionTrigger className="text-white hover:text-white/80">
                      View Curriculum
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-white/80">
                        {course.curriculum.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
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

const ocCourses: Course[] = [
  {
    id: "oc-year2",
    title: "OC Preparation - Year 2",
    description: "Early preparation course for the Opportunity Class placement test, focusing on building foundational skills in English and Mathematics.",
    subjects: ["English", "Mathematics", "General Ability", "Writing"],
    level: "Year 2",
    duration: "10 weeks per term",
    price: 850,
    curriculum: [
      "Reading comprehension strategies",
      "Vocabulary enhancement",
      "Basic mathematical operations",
      "Problem-solving techniques",
      "Introduction to general ability questions",
      "Creative writing exercises",
      "Time management skills",
      "Test-taking strategies"
    ]
  },
  {
    id: "oc-year3",
    title: "OC Preparation - Year 3",
    description: "Intensive preparation course for Year 3 students aiming for Opportunity Class placement, covering all aspects of the OC test.",
    subjects: ["English", "Mathematics", "General Ability", "Writing"],
    level: "Year 3",
    duration: "10 weeks per term",
    price: 900,
    curriculum: [
      "Advanced reading comprehension",
      "Critical thinking and analysis",
      "Advanced mathematical concepts",
      "Problem-solving and logical reasoning",
      "General ability test techniques",
      "Persuasive and creative writing",
      "Mock tests and exam preparation",
      "Interview skills (if applicable)"
    ]
  },
  {
    id: "oc-year4",
    title: "OC Extension - Year 4",
    description: "Post-placement course for successful OC students, designed to support and extend their learning in the Opportunity Class environment.",
    subjects: ["Advanced English", "Advanced Mathematics", "Critical Thinking", "Project-Based Learning"],
    level: "Year 4",
    duration: "10 weeks per term",
    price: 950,
    curriculum: [
      "Advanced literature analysis",
      "Complex mathematical problem-solving",
      "Critical and creative thinking exercises",
      "Research and presentation skills",
      "Introduction to debating",
      "Science and technology projects",
      "Study skills for gifted students",
      "Collaborative learning activities"
    ]
  }
]

export default function OCCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Opportunity Class (OC) Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers specialized Opportunity Class (OC) preparation courses designed to help students excel in the OC placement test and thrive in the accelerated learning environment. Our programs cater to students from Year 2 to Year 4, providing comprehensive preparation and support.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {ocCourses.map((course) => (
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
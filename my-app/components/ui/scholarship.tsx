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

const scholarshipPrepCourses: Course[] = [
  {
    id: "scholarship-year4",
    title: "Scholarship Preparation - Year 4",
    description: "Early preparation course for students aiming to secure scholarships for entry into private schools, focusing on building strong foundations across all key subject areas.",
    subjects: ["English", "Mathematics", "General Ability", "Writing"],
    level: "Year 4",
    duration: "10 weeks per term",
    price: 950,
    curriculum: [
      "Advanced reading comprehension strategies",
      "Creative and analytical writing techniques",
      "Problem-solving in mathematics",
      "Critical thinking and logical reasoning",
      "General knowledge and current affairs",
      "Time management and exam techniques",
      "Public speaking and presentation skills",
      "Interview preparation (if applicable)"
    ]
  },
  {
    id: "scholarship-year5",
    title: "Scholarship Preparation - Year 5",
    description: "Comprehensive scholarship preparation course for Year 5 students, covering all aspects of scholarship exams for private school entry.",
    subjects: ["Advanced English", "Advanced Mathematics", "General Ability", "Writing", "Interview Skills"],
    level: "Year 5",
    duration: "10 weeks per term",
    price: 1000,
    curriculum: [
      "In-depth literary analysis and interpretation",
      "Advanced mathematical concepts and problem-solving",
      "Extensive general ability and IQ-style questions practice",
      "Persuasive and creative writing mastery",
      "Critical thinking and analytical skills development",
      "Mock tests and personalized feedback",
      "Interview skills and confidence building",
      "Scholarship application guidance"
    ]
  },
  {
    id: "scholarship-year6",
    title: "Scholarship Preparation - Year 6",
    description: "Intensive final preparation course for Year 6 students applying for scholarships, focusing on exam techniques, time management, and building confidence across all test areas.",
    subjects: ["English Mastery", "Mathematics Mastery", "General Ability Mastery", "Writing Mastery", "Interview Mastery"],
    level: "Year 6",
    duration: "10 weeks per term",
    price: 1050,
    curriculum: [
      "Advanced text analysis and critical essay writing",
      "High-level mathematical reasoning and problem-solving",
      "Mastery of various general ability question types",
      "Refined writing skills for maximum impact in limited time",
      "Intensive mock testing with detailed analysis and feedback",
      "Advanced time management and stress control techniques",
      "In-depth interview preparation and practice",
      "Final preparation strategies and exam day tips"
    ]
  }
]

export default function ScholarshipPrepCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Scholarship Preparation Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers specialized Scholarship Preparation courses designed to help students excel in competitive scholarship exams for entry into prestigious private schools. Our comprehensive programs cater to students from Year 4 to Year 6, providing targeted preparation and support to maximize their chances of success.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {scholarshipPrepCourses.map((course) => (
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
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
  curriculum: string[]
}

const furtherQuantitativeReasoningCourses: Course[] = [
  {
    id: "quantitative-kindergarten",
    title: "Further Quantitative Reasoning - Kindergarten",
    description: "Advanced mathematics program for Kindergarten students, focusing on number sense and early problem-solving skills.",
    subjects: ["Number Sense", "Basic Operations", "Patterns", "Shapes"],
    level: "Kindergarten",
    duration: "10 weeks per term",
    curriculum: [
      "Advanced number recognition and counting",
      "Introduction to addition and subtraction",
      "Pattern recognition and creation",
      "2D and 3D shape exploration",
      "Basic measurement concepts",
      "Early problem-solving strategies",
      "Mathematical vocabulary development",
      "Hands-on math activities and games"
    ]
  },
  {
    id: "quantitative-year1-2",
    title: "Further Quantitative Reasoning - Year 1-2",
    description: "Comprehensive mathematics program for Year 1-2 students, enhancing numerical operations and logical thinking.",
    subjects: ["Advanced Operations", "Word Problems", "Geometry", "Data"],
    level: "Year 1-2",
    duration: "10 weeks per term",
    curriculum: [
      "Advanced addition and subtraction strategies",
      "Introduction to multiplication and division",
      "Word problem solving techniques",
      "Basic geometric concepts and measurements",
      "Data collection and simple graphs",
      "Mental math strategies",
      "Introduction to fractions",
      "Logic puzzles and mathematical games"
    ]
  },
  {
    id: "quantitative-year3-4",
    title: "Further Quantitative Reasoning - Year 3-4",
    description: "Advanced mathematics program for Year 3-4 students, focusing on complex operations and introductory algebra concepts.",
    subjects: ["Complex Operations", "Fractions and Decimals", "Algebra Foundations", "Problem Solving"],
    level: "Year 3-4",
    duration: "10 weeks per term",
    curriculum: [
      "Multi-step problem solving",
      "Advanced fractions and decimals",
      "Introduction to algebraic thinking",
      "Geometry and spatial reasoning",
      "Data analysis and probability",
      "Mathematical modeling",
      "Critical thinking in mathematics",
      "Real-world application of math concepts"
    ]
  },
  {
    id: "quantitative-year5-6",
    title: "Further Quantitative Reasoning - Year 5-6",
    description: "Intensive mathematics program for Year 5-6 students, preparing them for advanced math concepts and high school mathematics.",
    subjects: ["Pre-Algebra", "Advanced Problem Solving", "Statistics", "Mathematical Reasoning"],
    level: "Year 5-6",
    duration: "10 weeks per term",
    curriculum: [
      "Advanced algebraic concepts",
      "Complex problem-solving strategies",
      "Introduction to statistics and probability",
      "Geometry and trigonometry foundations",
      "Mathematical proof and reasoning",
      "Advanced mental math techniques",
      "Mathematical modeling of real-world scenarios",
      "Preparation for high school mathematics"
    ]
  }
]

export default function FurtherQuantitativeReasoningCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Further Quantitative Reasoning Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers advanced mathematics programs designed to enhance quantitative reasoning and problem-solving skills for students from Kindergarten to Year 6. Our courses focus on developing critical thinking, logical reasoning, and advanced mathematical concepts.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {furtherQuantitativeReasoningCourses.map((course) => (
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


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

const foundationCourses: Course[] = [
  {
    id: "foundation-kindergarten",
    title: "Foundation Kindergarten",
    description: "A comprehensive program designed to build a strong academic foundation for Kindergarten students, focusing on early literacy and numeracy skills.",
    subjects: ["Early Literacy", "Basic Numeracy", "Fine Motor Skills", "Social Skills"],
    level: "Kindergarten",
    duration: "10 weeks per term",
    price: 750,
    curriculum: [
      "Phonics and letter recognition",
      "Basic counting and number concepts",
      "Fine motor skill development",
      "Introduction to reading",
      "Basic writing skills",
      "Social interaction and cooperation",
      "Creative expression through art and play",
      "Early problem-solving skills"
    ]
  },
  {
    id: "foundation-year1-2",
    title: "Foundation Year 1-2",
    description: "A structured program to reinforce and expand on the foundational skills learned in Kindergarten, preparing students for more advanced learning in primary school.",
    subjects: ["Reading", "Writing", "Mathematics", "Critical Thinking"],
    level: "Year 1-2",
    duration: "10 weeks per term",
    price: 850,
    curriculum: [
      "Advanced phonics and reading comprehension",
      "Sentence structure and basic grammar",
      "Addition and subtraction",
      "Introduction to multiplication",
      "Basic geometry and measurement",
      "Critical thinking and problem-solving exercises",
      "Introduction to science concepts",
      "Developing study habits and organizational skills"
    ]
  },
  {
    id: "foundation-year3-4",
    title: "Foundation Year 3-4",
    description: "An enriching program designed to challenge and support students as they develop more complex academic skills and prepare for upper primary school.",
    subjects: ["Advanced Reading", "Essay Writing", "Advanced Mathematics", "Science"],
    level: "Year 3-4",
    duration: "10 weeks per term",
    price: 850,
    curriculum: [
      "Advanced reading comprehension strategies",
      "Essay structure and creative writing",
      "Multiplication and division",
      "Introduction to fractions and decimals",
      "Basic algebra concepts",
      "Scientific method and experiments",
      "Study skills and time management",
      "Public speaking and presentation skills"
    ]
  },
  {
    id: "foundation-year5-6",
    title: "Foundation Year 5-6",
    description: "A comprehensive program to prepare students for the challenges of high school, focusing on advanced academic skills and exam preparation techniques.",
    subjects: ["Complex Reading", "Advanced Writing", "Pre-Algebra", "Scientific Inquiry"],
    level: "Year 5-6",
    duration: "10 weeks per term",
    price: 850,
    curriculum: [
      "Analysis of complex texts",
      "Advanced essay writing and research skills",
      "Pre-algebra and introduction to variables",
      "Advanced problem-solving in mathematics",
      "Scientific inquiry and report writing",
      "Study techniques for exams",
      "Critical thinking and logical reasoning",
      "Introduction to digital literacy and online research"
    ]
  }
]

export default function FoundationCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Foundation Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers comprehensive foundation courses designed to build a strong academic base for students from Kindergarten to Year 6. Our programs focus on developing essential skills in literacy, numeracy, and critical thinking, preparing students for future academic success.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {foundationCourses.map((course) => (
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
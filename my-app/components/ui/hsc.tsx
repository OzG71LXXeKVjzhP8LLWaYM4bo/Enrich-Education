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

const hscCourses: Course[] = [
  {
    id: "hsc-english-advanced-2u",
    title: "HSC English Advanced (2 Unit)",
    description: "Comprehensive preparation for HSC English Advanced (2 Unit), focusing on advanced literary analysis, critical thinking, and essay writing skills.",
    subjects: ["Text Analysis", "Essay Writing", "Creative Writing", "Critical Thinking"],
    level: "Year 11-12",
    duration: "2 hours, 10 weeks per term",
    price: 950,
    curriculum: [
      "In-depth analysis of prescribed texts",
      "Advanced essay writing techniques",
      "Critical and creative response to texts",
      "Comparative study of texts",
      "Exploration of language, identity, and culture",
      "Examination techniques and time management",
      "Oral presentation skills",
      "Practice papers and mock exams"
    ]
  },
  {
    id: "hsc-english-extension-1",
    title: "HSC English Extension 1 (3 Unit)",
    description: "Advanced course for students taking 3 Unit English, focusing on complex literary theories and sophisticated textual analysis.",
    subjects: ["Literary Theory", "Advanced Textual Analysis", "Comparative Literature", "Critical Writing"],
    level: "Year 11-12",
    duration: "2 hours, 10 weeks per term",
    price: 950,
    curriculum: [
      "Exploration of complex literary theories",
      "Advanced intertextual analysis",
      "Sophisticated essay writing techniques",
      "In-depth study of literary movements and contexts",
      "Development of original critical perspectives",
      "Advanced research methodologies",
      "Extended response composition",
      "Intensive exam preparation and practice"
    ]
  },
  {
    id: "hsc-english-extension-2",
    title: "HSC English Extension 2 (4 Unit)",
    description: "Intensive course for 4 Unit English students, focusing on independent research and the creation of a major literary work.",
    subjects: ["Independent Research", "Creative Writing", "Literary Criticism", "Project Management"],
    level: "Year 12",
    duration: "2 hours, 10 weeks per term",
    price: 950,
    curriculum: [
      "Development of a sustained creative project",
      "Advanced creative writing techniques",
      "Critical reflection on the creative process",
      "In-depth exploration of literary forms and features",
      "Independent research methodologies",
      "Peer review and feedback processes",
      "Project management and time planning",
      "Preparation for major work submission and viva voce"
    ]
  },
  {
    id: "hsc-mathematics-advanced-2u",
    title: "HSC Mathematics Advanced (2 Unit)",
    description: "Intensive preparation for HSC Mathematics Advanced (2 Unit), covering all syllabus topics and focusing on problem-solving skills.",
    subjects: ["Calculus", "Statistical Analysis", "Financial Mathematics", "Trigonometry"],
    level: "Year 11-12",
    duration: "3 hours, 10 weeks per term",
    price: 950,
    curriculum: [
      "Functions and their applications",
      "Trigonometric functions and identities",
      "Calculus techniques and applications",
      "Exponential and logarithmic functions",
      "Statistical analysis and probability",
      "Financial mathematics",
      "Problem-solving strategies",
      "Exam techniques and past paper practice"
    ]
  },
  {
    id: "hsc-mathematics-extension-1",
    title: "HSC Mathematics Extension 1 (3 Unit)",
    description: "Advanced course for students taking 3 Unit Mathematics, covering complex mathematical concepts and problem-solving techniques.",
    subjects: ["Advanced Calculus", "Complex Numbers", "Mechanics", "Combinatorics"],
    level: "Year 11-12",
    duration: "3 hours, 10 weeks per term",
    price: 950,
    curriculum: [
      "Further calculus techniques and applications",
      "Trigonometric functions and inverse functions",
      "Complex numbers and geometry",
      "Vectors and vector applications",
      "Advanced statistical analysis",
      "Rates of change and parametric equations",
      "Advanced problem-solving strategies",
      "Intensive exam preparation and practice"
    ]
  },
  {
    id: "hsc-mathematics-extension-2",
    title: "HSC Mathematics Extension 2 (4 Unit)",
    description: "Intensive course for 4 Unit Mathematics students, focusing on advanced mathematical concepts and proof techniques.",
    subjects: ["Advanced Calculus", "Complex Numbers", "Mechanics", "Proof Techniques"],
    level: "Year 12",
    duration: "3 hours, 10 weeks per term",
    price: 950,
    curriculum: [
      "Advanced integration techniques",
      "Further work with complex numbers",
      "Mechanics and motion in a plane",
      "Proof by mathematical induction",
      "The nature of proof and further proof by contradiction",
      "Vectors and vector calculus",
      "Advanced problem-solving and proof strategies",
      "Intensive exam preparation and past paper practice"
    ]
  }
]

export default function HSCCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          HSC Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers comprehensive HSC preparation courses designed to help students excel in their final years of high school. Our programs cover key HSC subjects, providing in-depth content knowledge, exam strategies, and personalized support.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {hscCourses.map((course) => (
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
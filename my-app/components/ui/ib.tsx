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
  level: "SL" | "HL"
  duration: string
  pricePerTerm: number
  curriculum: string[]
}

const ibCourses: Course[] = [
  {
    id: "ib-english-a-sl",
    title: "IB English A: Language and Literature (SL)",
    description: "Comprehensive preparation for IB English A Standard Level, focusing on literary analysis, critical thinking, and essay writing skills.",
    subjects: ["Literary Analysis", "Comparative Study", "Essay Writing", "Oral Presentation"],
    level: "SL",
    duration: "2 hours per week, 10 weeks per term",
    pricePerTerm: 1000,
    curriculum: [
      "Analysis of literary and non-literary texts",
      "Comparative analysis across different text types",
      "Essay writing techniques",
      "Critical thinking and textual interpretation",
      "Oral commentary and presentation skills",
      "Language in cultural context",
      "Language and mass communication"
    ]
  },
  {
    id: "ib-english-a-hl",
    title: "IB English A: Language and Literature (HL)",
    description: "Intensive preparation for IB English A Higher Level, with advanced literary analysis, critical thinking, and extended essay writing skills.",
    subjects: ["Advanced Literary Analysis", "Comparative Study", "Extended Essay Writing", "Oral Presentation"],
    level: "HL",
    duration: "2 hours per week, 10 weeks per term",
    pricePerTerm: 1200,
    curriculum: [
      "In-depth analysis of literary and non-literary texts",
      "Advanced comparative analysis across different text types",
      "Extended essay writing techniques",
      "Advanced critical thinking and textual interpretation",
      "Higher-level oral commentary and presentation skills",
      "Language in cultural context",
      "Language and mass communication",
      "Literature - critical study and genres"
    ]
  },
  {
    id: "ib-math-aa-sl",
    title: "IB Mathematics: Analysis and Approaches (SL)",
    description: "Comprehensive preparation for IB Mathematics AA Standard Level, covering key mathematical concepts and problem-solving skills.",
    subjects: ["Algebra", "Functions", "Trigonometry", "Statistics"],
    level: "SL",
    duration: "3 hours per week, 10 weeks per term",
    pricePerTerm: 1000,
    curriculum: [
      "Number and algebra",
      "Functions",
      "Geometry and trigonometry",
      "Statistics and probability",
      "Calculus",
      "Mathematical exploration",
      "Problem-solving strategies"
    ]
  },
  {
    id: "ib-math-aa-hl",
    title: "IB Mathematics: Analysis and Approaches (HL)",
    description: "Intensive preparation for IB Mathematics AA Higher Level, covering advanced mathematical concepts and complex problem-solving skills.",
    subjects: ["Advanced Calculus", "Complex Algebra", "Advanced Functions", "Statistics and Probability"],
    level: "HL",
    duration: "3 hours per week, 10 weeks per term",
    pricePerTerm: 1200,
    curriculum: [
      "Advanced number theory and algebra",
      "Complex functions and equations",
      "Advanced geometry and trigonometry",
      "Advanced statistics and probability",
      "Higher-level calculus",
      "Mathematical exploration",
      "Advanced problem-solving strategies",
      "Use of technology in advanced mathematics"
    ]
  }
]

export default function IBCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          IB (International Baccalaureate) Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers comprehensive IB preparation courses designed to help students excel in their International Baccalaureate Diploma Programme. Our programs cover key IB subjects, providing in-depth content knowledge, exam strategies, and personalized support.
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
                <p className="text-sm text-white/80 mb-4">
                  <strong>Price per term:</strong> ${course.pricePerTerm}
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
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
    id: "hsc-english-advanced",
    title: "HSC English (Advanced)",
    description: "Comprehensive preparation for HSC English Advanced, focusing on advanced literary analysis, critical thinking, and essay writing skills.",
    subjects: ["Text Analysis", "Essay Writing", "Creative Writing", "Critical Thinking"],
    level: "Year 11-12",
    duration: "Full HSC program (2 years)",
    price: 1200,
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
    id: "hsc-mathematics-advanced",
    title: "HSC Mathematics Advanced",
    description: "Intensive preparation for HSC Mathematics Advanced, covering all syllabus topics and focusing on problem-solving skills.",
    subjects: ["Calculus", "Statistical Analysis", "Financial Mathematics", "Trigonometry"],
    level: "Year 11-12",
    duration: "Full HSC program (2 years)",
    price: 1200,
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
    id: "hsc-physics",
    title: "HSC Physics",
    description: "Comprehensive HSC Physics course, covering theoretical concepts, practical skills, and exam preparation.",
    subjects: ["Mechanics", "Electromagnetism", "Thermodynamics", "Quantum Physics"],
    level: "Year 11-12",
    duration: "Full HSC program (2 years)",
    price: 1200,
    curriculum: [
      "Advanced mechanics and motion",
      "Electromagnetism and its applications",
      "Thermodynamics and energy transfers",
      "Quantum mechanical nature of matter",
      "Practical laboratory skills",
      "Data analysis and scientific report writing",
      "Problem-solving in physics contexts",
      "Exam strategies and past paper practice"
    ]
  },
  {
    id: "hsc-chemistry",
    title: "HSC Chemistry",
    description: "In-depth HSC Chemistry course, focusing on theoretical understanding, practical skills, and exam techniques.",
    subjects: ["Organic Chemistry", "Physical Chemistry", "Inorganic Chemistry", "Analytical Techniques"],
    level: "Year 11-12",
    duration: "Full HSC program (2 years)",
    price: 1200,
    curriculum: [
      "Properties and structure of matter",
      "Reactive chemistry and chemical reactions",
      "Organic chemistry and polymers",
      "Applying chemical ideas",
      "Quantitative chemistry",
      "Practical laboratory skills and safety",
      "Data analysis and scientific report writing",
      "Exam preparation and problem-solving strategies"
    ]
  },
  {
    id: "hsc-biology",
    title: "HSC Biology",
    description: "Comprehensive HSC Biology course, covering all syllabus topics, practical skills, and exam preparation.",
    subjects: ["Genetics", "Ecology", "Evolution", "Biochemistry"],
    level: "Year 11-12",
    duration: "Full HSC program (2 years)",
    price: 1200,
    curriculum: [
      "Cell structure and function",
      "DNA and biotechnology",
      "Genetics and inheritance",
      "Ecosystem dynamics",
      "Human impact on the environment",
      "Evolution and biodiversity",
      "Practical skills and scientific investigations",
      "Data analysis and exam techniques"
    ]
  },
  {
    id: "hsc-economics",
    title: "HSC Economics",
    description: "Intensive HSC Economics course, focusing on economic theories, current affairs, and essay writing skills.",
    subjects: ["Microeconomics", "Macroeconomics", "Global Economy", "Economic Policies"],
    level: "Year 11-12",
    duration: "Full HSC program (2 years)",
    price: 1200,
    curriculum: [
      "Introduction to economics",
      "Markets and market failure",
      "Economic growth and development",
      "Economic policies and management",
      "Globalisation and international economics",
      "Current economic issues analysis",
      "Essay writing and data interpretation",
      "Exam strategies and practice papers"
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
                  <strong>Price:</strong> ${course.price} per year
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
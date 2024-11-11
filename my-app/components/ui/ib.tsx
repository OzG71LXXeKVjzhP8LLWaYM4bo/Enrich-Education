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

const ibCourses: Course[] = [
  {
    id: "ib-english-a",
    title: "IB English A: Language and Literature",
    description: "Comprehensive preparation for IB English A, focusing on advanced literary analysis, critical thinking, and essay writing skills.",
    subjects: ["Literary Analysis", "Comparative Study", "Essay Writing", "Oral Presentation"],
    level: "IB Diploma (Year 11-12)",
    duration: "2 years",
    price: 1300,
    curriculum: [
      "In-depth analysis of literary and non-literary texts",
      "Comparative analysis across different text types",
      "Advanced essay writing techniques",
      "Critical thinking and textual interpretation",
      "Oral commentary and presentation skills",
      "Language in cultural context",
      "Language and mass communication",
      "Literature - critical study and genres"
    ]
  },
  {
    id: "ib-math-aa",
    title: "IB Mathematics: Analysis and Approaches",
    description: "Intensive preparation for IB Mathematics AA, covering advanced mathematical concepts and problem-solving skills.",
    subjects: ["Calculus", "Algebra", "Functions", "Statistics and Probability"],
    level: "IB Diploma (Year 11-12)",
    duration: "2 years",
    price: 1300,
    curriculum: [
      "Number and algebra",
      "Functions",
      "Geometry and trigonometry",
      "Statistics and probability",
      "Calculus",
      "Mathematical exploration",
      "Problem-solving strategies",
      "Use of technology in mathematics"
    ]
  },
  {
    id: "ib-physics",
    title: "IB Physics",
    description: "Comprehensive IB Physics course, covering theoretical concepts, practical skills, and exam preparation.",
    subjects: ["Mechanics", "Thermodynamics", "Waves", "Electricity and Magnetism"],
    level: "IB Diploma (Year 11-12)",
    duration: "2 years",
    price: 1300,
    curriculum: [
      "Measurements and uncertainties",
      "Mechanics",
      "Thermal physics",
      "Waves",
      "Electricity and magnetism",
      "Circular motion and gravitation",
      "Atomic, nuclear and particle physics",
      "Energy production"
    ]
  },
  {
    id: "ib-chemistry",
    title: "IB Chemistry",
    description: "In-depth IB Chemistry course, focusing on theoretical understanding, practical skills, and exam techniques.",
    subjects: ["Organic Chemistry", "Physical Chemistry", "Analytical Chemistry", "Biochemistry"],
    level: "IB Diploma (Year 11-12)",
    duration: "2 years",
    price: 1300,
    curriculum: [
      "Stoichiometric relationships",
      "Atomic structure",
      "Periodicity",
      "Chemical bonding and structure",
      "Energetics/thermochemistry",
      "Chemical kinetics",
      "Equilibrium",
      "Acids and bases"
    ]
  },
  {
    id: "ib-biology",
    title: "IB Biology",
    description: "Comprehensive IB Biology course, covering all syllabus topics, practical skills, and exam preparation.",
    subjects: ["Cell Biology", "Genetics", "Ecology", "Human Physiology"],
    level: "IB Diploma (Year 11-12)",
    duration: "2 years",
    price: 1300,
    curriculum: [
      "Cell biology",
      "Molecular biology",
      "Genetics",
      "Ecology",
      "Evolution and biodiversity",
      "Human physiology",
      "Nucleic acids",
      "Metabolism, cell respiration and photosynthesis"
    ]
  },
  {
    id: "ib-economics",
    title: "IB Economics",
    description: "Intensive IB Economics course, focusing on economic theories, current affairs, and essay writing skills.",
    subjects: ["Microeconomics", "Macroeconomics", "International Economics", "Development Economics"],
    level: "IB Diploma (Year 11-12)",
    duration: "2 years",
    price: 1300,
    curriculum: [
      "Introduction to economics",
      "Microeconomics",
      "Macroeconomics",
      "International economics",
      "Development economics",
      "Quantitative techniques",
      "Economic theory and real-world application",
      "Extended essay in economics"
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
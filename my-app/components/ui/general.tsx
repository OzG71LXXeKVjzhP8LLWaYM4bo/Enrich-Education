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

const mainstreamCourses: Course[] = [
  {
    id: "mainstream-year7",
    title: "Mainstream Academic Support - Year 7",
    description: "Comprehensive academic support for Year 7 students, focusing on building strong foundations in core subjects and adapting to high school curriculum.",
    subjects: ["English", "Mathematics", "Science", "Study Skills"],
    level: "Year 7",
    duration: "2.5 hours per week, 10 weeks per term",
    price: 950,
    curriculum: [
      "Advanced reading comprehension and analysis",
      "Essay writing and text types",
      "Algebra and geometry foundations",
      "Scientific method and basic experiments",
      "Study skills and time management",
      "Critical thinking and problem-solving",
      "Research and presentation skills",
      "Exam preparation techniques"
    ],
  },
  {
    id: "mainstream-year8",
    title: "Mainstream Academic Support - Year 8",
    description: "Tailored academic support for Year 8 students, reinforcing core subject knowledge and developing advanced study techniques.",
    subjects: ["English", "Mathematics", "Science", "History"],
    level: "Year 8",
    duration: "2.5 hours per week, 10 weeks per term",
    price: 950,
    curriculum: [
      "Advanced literary analysis and interpretation",
      "Persuasive and analytical writing",
      "Algebra, geometry, and data analysis",
      "Physics and chemistry foundations",
      "Historical inquiry and source analysis",
      "Advanced research methods",
      "Public speaking and debating skills",
      "Exam strategies and time management"
    ],
  },
  {
    id: "mainstream-year9",
    title: "Mainstream Academic Support - Year 9",
    description: "Comprehensive academic program for Year 9 students, focusing on deepening subject knowledge and preparing for senior years of high school.",
    subjects: ["English", "Mathematics", "Science", "Geography"],
    level: "Year 9",
    duration: "2.5 hours per week, 10 weeks per term",
    price: 950,
    curriculum: [
      "Complex text analysis and interpretation",
      "Advanced essay writing and creative writing",
      "Trigonometry and advanced algebra",
      "Biology and environmental science",
      "Geographical skills and fieldwork techniques",
      "Critical and creative thinking",
      "Advanced study skills and note-taking",
      "Preparation for school assessments and exams"
    ],
  },
  {
    id: "mainstream-year10",
    title: "Mainstream Academic Support - Year 10",
    description: "Intensive academic support for Year 10 students, focusing on consolidating knowledge, preparing for senior subjects, and developing advanced academic skills.",
    subjects: ["English", "Mathematics", "Science", "Career Planning"],
    level: "Year 10",
    duration: "2.5 hours per week, 10 weeks per term",
    price: 950,
    curriculum: [
      "Advanced literary and media analysis",
      "Complex essay writing and argumentation",
      "Functions, calculus foundations, and statistics",
      "Physics, chemistry, and biology integration",
      "Career exploration and subject selection guidance",
      "Research project management",
      "Advanced analytical and critical thinking skills",
      "Exam mastery and stress management techniques"
    ],
  }
]

export default function MainstreamCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Mainstream Academic Support Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers comprehensive Mainstream Academic Support courses designed to help students in Years 7-10 excel in their studies. Our programs provide targeted support across core subjects, develop essential academic skills, and prepare students for the challenges of senior high school.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {mainstreamCourses.map((course) => (
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
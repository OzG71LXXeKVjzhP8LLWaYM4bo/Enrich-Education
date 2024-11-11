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

const furtherLiteracyCourses: Course[] = [
  {
    id: "literacy-kindergarten",
    title: "Further Literacy - Kindergarten",
    description: "Advanced literacy program for Kindergarten students, focusing on early reading skills and writing techniques.",
    subjects: ["Phonics", "Reading Comprehension", "Writing", "Vocabulary"],
    level: "Kindergarten",
    duration: "10 weeks per term",
    price: 750,
    curriculum: [
      "Advanced phonics and letter recognition",
      "Sight word mastery",
      "Basic sentence structure",
      "Introduction to story elements",
      "Handwriting practice",
      "Vocabulary building through context",
      "Listening comprehension exercises",
      "Early creative writing"
    ]
  },
  {
    id: "literacy-year1-2",
    title: "Further Literacy - Year 1-2",
    description: "Comprehensive literacy program for Year 1-2 students, enhancing reading fluency and writing skills.",
    subjects: ["Reading Fluency", "Comprehension", "Grammar", "Creative Writing"],
    level: "Year 1-2",
    duration: "10 weeks per term",
    price: 800,
    curriculum: [
      "Advanced phonics and word decoding",
      "Reading fluency and expression",
      "Comprehension strategies",
      "Basic grammar and punctuation",
      "Paragraph structure",
      "Narrative and descriptive writing",
      "Vocabulary expansion",
      "Introduction to different text types"
    ]
  },
  {
    id: "literacy-year3-4",
    title: "Further Literacy - Year 3-4",
    description: "Advanced literacy program for Year 3-4 students, focusing on critical reading and diverse writing styles.",
    subjects: ["Critical Reading", "Essay Writing", "Text Analysis", "Creative Writing"],
    level: "Year 3-4",
    duration: "10 weeks per term",
    price: 850,
    curriculum: [
      "Advanced comprehension techniques",
      "Critical analysis of texts",
      "Essay structure and planning",
      "Persuasive writing techniques",
      "Introduction to literary devices",
      "Editing and proofreading skills",
      "Public speaking and presentation",
      "Research skills and referencing"
    ]
  },
  {
    id: "literacy-year5-6",
    title: "Further Literacy - Year 5-6",
    description: "Intensive literacy program for Year 5-6 students, preparing them for high school English and advanced writing tasks.",
    subjects: ["Advanced Reading", "Essay Writing", "Literary Analysis", "Creative Writing"],
    level: "Year 5-6",
    duration: "10 weeks per term",
    price: 900,
    curriculum: [
      "Complex text analysis",
      "Advanced essay writing techniques",
      "Critical and analytical thinking",
      "Advanced grammar and syntax",
      "Creative writing workshops",
      "Debating and argumentation",
      "Media literacy",
      "Introduction to different literary genres"
    ]
  }
]

export default function FurtherLiteracyCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Further Literacy Courses
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers advanced literacy programs designed to enhance reading skills and writing techniques for students from Kindergarten to Year 6. Our courses focus on developing critical thinking, comprehension, and effective communication skills.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {furtherLiteracyCourses.map((course) => (
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
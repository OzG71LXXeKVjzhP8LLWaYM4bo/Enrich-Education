import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Course = {
  id: string
  title: string
  description: string
  subjects: string[]
  level: string
  duration: string
  price: number
}

const selectiveBundleCourse: Course = {
  id: "selective-bundle",
  title: "Selective School Preparation Bundle",
  description: "Comprehensive course designed to prepare students for all components of the Selective High School Placement Test.",
  subjects: ["English", "Mathematics", "General Ability", "Writing"],
  level: "Year 5-6",
  duration: "10 weeks per term",
  price: 1200
}

export default function SelectiveBundleCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Selective School Preparation Bundle
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers a comprehensive Selective School preparation bundle designed to give students the best chance of success in the Selective High School Placement Test. Our bundle covers all components of the test, providing a well-rounded preparation experience.
        </p>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">{selectiveBundleCourse.title}</CardTitle>
              <CardDescription className="text-white/80 text-lg">{selectiveBundleCourse.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectiveBundleCourse.subjects.map((subject) => (
                  <Badge key={subject} variant="secondary" className="bg-blue-500 text-white text-sm">
                    {subject}
                  </Badge>
                ))}
              </div>
              <p className="text-white/80 mb-2">
                <strong>Level:</strong> {selectiveBundleCourse.level}
              </p>
              <p className="text-white/80 mb-2">
                <strong>Duration:</strong> {selectiveBundleCourse.duration}
              </p>
              <p className="text-white/80 text-lg font-semibold">
                Price: ${selectiveBundleCourse.price} per term
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/contact" passHref className="w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white transition-colors duration-300 text-lg py-6">
                  Contact Us to Enroll
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
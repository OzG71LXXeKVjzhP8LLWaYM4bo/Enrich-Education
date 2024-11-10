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

const ocBundleCourse: Course = {
  id: "oc-bundle",
  title: "OC Preparation Bundle",
  description: "Comprehensive course designed to prepare students for all aspects of the Opportunity Class Placement Test.",
  subjects: ["English", "Mathematics", "General Ability", "Writing"],
  level: "Year 4",
  duration: "10 weeks per term",
  price: 1200
}

export default function OCBundleCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Opportunity Class (OC) Preparation Bundle
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-white/90">
          Enrich Education offers a comprehensive OC preparation bundle designed to give students the best chance of success in the Opportunity Class Placement Test. Our bundle covers all aspects of the test, providing a well-rounded preparation experience.
        </p>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">{ocBundleCourse.title}</CardTitle>
              <CardDescription className="text-white/80 text-lg">{ocBundleCourse.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {ocBundleCourse.subjects.map((subject) => (
                  <Badge key={subject} variant="secondary" className="bg-blue-500 text-white text-sm">
                    {subject}
                  </Badge>
                ))}
              </div>
              <p className="text-white/80 mb-2">
                <strong>Level:</strong> {ocBundleCourse.level}
              </p>
              <p className="text-white/80 mb-2">
                <strong>Duration:</strong> {ocBundleCourse.duration}
              </p>
              <p className="text-white/80 text-lg font-semibold">
                Price: ${ocBundleCourse.price} per term
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
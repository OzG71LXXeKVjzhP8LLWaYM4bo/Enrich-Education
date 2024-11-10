import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Our Story</h1>
        
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Our Beginning</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="mb-4">
                Enrich Education was founded in 2010 by a group of passionate educators who saw the need for high-quality, personalized tutoring services in Burwood, Sydney. What started as a small tutoring center has grown into a comprehensive educational institution, serving hundreds of students across various subjects and grade levels.
              </p>
              <p>
                Our founders' vision was to create a learning environment where every student could thrive, regardless of their starting point or learning style. This vision continues to drive our approach to education today.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="mb-4">
                At Enrich Education, our mission is to empower students to reach their full potential through personalized learning experiences, expert guidance, and a supportive community. We believe that every student has the capacity to excel, and we are committed to providing the tools, knowledge, and encouragement they need to succeed.
              </p>
              <p>
                We strive to:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Foster a love for learning that extends beyond the classroom</li>
                <li>Build confidence and self-esteem in our students</li>
                <li>Provide a nurturing and inclusive learning environment</li>
                <li>Continuously innovate our teaching methods to meet the evolving needs of our students</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <ul className="space-y-4">
                <li>
                  <strong className="text-xl">Excellence:</strong> We strive for excellence in everything we do, from our teaching methods to our student support.
                </li>
                <li>
                  <strong className="text-xl">Personalization:</strong> We recognize that every student is unique, and we tailor our approach to meet individual needs and learning styles.
                </li>
                <li>
                  <strong className="text-xl">Innovation:</strong> We continuously seek new and effective ways to enhance the learning experience for our students.
                </li>
                <li>
                  <strong className="text-xl">Community:</strong> We foster a supportive and inclusive community where students, parents, and educators work together towards shared goals.
                </li>
                <li>
                  <strong className="text-xl">Integrity:</strong> We uphold the highest standards of honesty, transparency, and ethical behavior in all our interactions.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-6 px-8">
              Join Our Learning Community
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
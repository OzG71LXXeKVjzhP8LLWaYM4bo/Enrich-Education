import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Target, Award, Lightbulb, TrendingUp } from "lucide-react"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Our Story</h1>
        
        {/* Hero Section */}
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-white mb-4">Empowering Minds Since 2005</h2>
                  <p className="text-white/90 mb-4">
                    Enrich Education was founded with a vision to provide exceptional educational support to students in Sydney. 
                    Our journey began with a small group of dedicated educators and has grown into a thriving community of learners and mentors.
                  </p>
                  <p className="text-white/90">
                    We believe in nurturing not just academic excellence, but also critical thinking, creativity, and a love for lifelong learning.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Enrich Education founders"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission and Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Mission and Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Excellence", icon: Award, description: "We strive for academic excellence in all our programs." },
              { title: "Personalized Learning", icon: Users, description: "We tailor our approach to each students unique needs and learning style." },
              { title: "Innovation", icon: Lightbulb, description: "We embrace innovative teaching methods and technologies." },
              { title: "Holistic Development", icon: Target, description: "We focus on developing well-rounded individuals." },
              { title: "Continuous Improvement", icon: TrendingUp, description: "We are committed to ongoing enhancement of our programs and methods." },
              { title: "Love for Learning", icon: BookOpen, description: "We aim to instill a lifelong passion for learning in our students." },
            ].map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <value.icon className="w-6 h-6 mr-2" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: 2005, event: "Enrich Education founded in Burwood" },
              { year: 2010, event: "Expanded to offer HSC preparation courses" },
              { year: 2015, event: "Launched online learning platform" },
              { year: 2018, event: "Opened second campus in Strathfield" },
              { year: 2020, event: "Introduced virtual classrooms during global pandemic" },
              { year: 2023, event: "Celebrated helping over 10,000 students achieve their goals" },
            ].map((milestone, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 flex items-center">
                  <Badge variant="secondary" className="text-lg font-bold mr-4">{milestone.year}</Badge>
                  <p className="text-white">{milestone.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section>
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6 md:p-10">
              <blockquote className="text-white italic text-lg mb-4">
                Enrich Education has been instrumental in my academic success. The dedicated teachers and personalized 
                approach helped me achieve results I never thought possible. Im grateful for the confidence and skills 
                Ive gained here.
              </blockquote>
              <p className="text-white font-semibold">- Sarah L., HSC Graduate 2023</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
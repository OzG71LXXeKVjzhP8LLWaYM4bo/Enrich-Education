import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Target, Award, Lightbulb, TrendingUp } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Our Story</h1>
        
        {/* Hero Section */}
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="md:w-1/2 pr-0 md:pr-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Empowering Minds Since 2007</h2>
                  <p className="text-white/90 mb-4">
                    Enrich Education was founded with a vision to provide exceptional educational support to students in Sydney. Our journey began with a small group of dedicated educators who would work around the clock to ensure students excel at school and has grown into a thriving community of learners and mentors.
                  </p>
                  <p className="text-white/90">
                    We believe in nurturing not just academic excellence, but also critical thinking, creativity, and a love for lifelong learning through educators who teach with heart.
                  </p>
                </div>
                <Separator orientation="vertical" className="mx-8 hidden md:block" />
                <div className="md:w-1/2 mt-8 md:mt-0 pl-0 md:pl-8">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/tyler.jpg?height=200&width=200"
                      alt="Tyler L"
                      width={200}
                      height={200}
                      className="shadow-lg mb-4"
                    />
                    <blockquote className="text-white italic text-lg mb-4">
                      Coming from Beijing in China, I was afraid of learning English and approaching my exams in the VCE. However, my teachers at Enrich Education quickly settled me in and inspired me to work hard to achieve the score required to get an offer from my dream university - University of Sydney. I am forever grateful for the academic advice and confidence from my time at Enrich.
                    </blockquote>
                    <p className="text-white font-semibold">- Tyler L, VCE Graduate 2019</p>
                  </div>
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
              { title: "Personalised Learning", icon: Users, description: "We tailor our approach to the needs of each student and their unique learning style." },
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
              { year: 2007, event: "Enrich Education founded in Cabramatta" },
              { year: 2010, event: "Our first ever student to rank 1st in English at James Ruse" },
              { year: 2015, event: "Launched a 24/7 communication channel to respond faster to students" },
              { year: 2018, event: "5th student to achieve a 99.95 ATAR" },
              { year: 2020, event: "Moved to Burwood" },
              { year: 2023, event: "First ever student to receive a full scholarship to UNSW Health Degree without any conditional terms. Over 90% achieved entry into a Selective School. 8th student to achieve a 99.95 ATAR." },
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
      </div>
    </div>
  )
}
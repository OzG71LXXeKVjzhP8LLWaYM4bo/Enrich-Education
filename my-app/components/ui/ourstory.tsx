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
        <section className="mb-16" aria-labelledby="hero-title">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="lg:w-1/3 flex flex-col items-center">
                  <Image
                    src="/sydher.jpeg"
                    alt="A graduate in school uniform"
                    width={300}
                    height={400}
                    className="shadow-lg rounded-lg object-cover w-full max-w-[300px]"
                    priority
                  />
                  <p className="text-white font-semibold mt-4 text-center">Tyler L, VCE Graduate 2019</p>
                </div>
                <div className="lg:w-2/3">
                  <h2 id="hero-title" className="text-3xl font-bold text-white mb-4">
                    Empowering Minds Since 2007
                  </h2>
                  <p className="text-white/90 mb-4">
                    Enrich Education was founded with a vision to provide exceptional educational support to students in
                    Sydney. Our journey began with a small group of dedicated educators who would work around the clock
                    to ensure students excel at school and has grown into a thriving community of learners and mentors.
                  </p>
                  <p className="text-white/90 mb-6">
                    We believe in nurturing not just academic excellence, but also critical thinking, creativity, and a
                    love for lifelong learning through educators who teach with heart.
                  </p>
                  <blockquote className="text-white italic text-lg border-l-4 border-white/50 pl-4">
                    Coming from Beijing in China, I was afraid of learning English and approaching my exams in the VCE.
                    However, my teachers at Enrich Education quickly settled me in and inspired me to work hard to
                    achieve the score required to get an offer from my dream university - University of Sydney. I am
                    forever grateful for the academic advice and confidence from my time at Enrich.
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Academic Excellence */}
        <section className="mb-16" aria-labelledby="excellence-title">
          <h2 id="excellence-title" className="text-3xl font-bold text-white mb-8 text-center">
            Academic Excellence
          </h2>
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6 md:p-10 space-y-8">
              <div className="flex flex-col items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signal-2025-02-02-180306_002-TDDczpaOBgOnrYY1Z42qYTvPE0bb4M.jpeg"
                  alt="Three students in formal school uniforms"
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-lg mb-6"
                  priority
                />
                <p className="text-white/90 text-center italic text-sm">
                  *Image from Sydney Morning Herald (December 17, 2024)
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <p className="text-white/90 text-lg leading-relaxed">
                  Our educators are fully qualified NESA accredited teachers and have also taught the International
                  Baccalaureate (IB) programme too while attaining the highest IB mark of 45.75 in addition to teaching
                  the HSC syllabus.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission and Values */}
        <section className="mb-16" aria-labelledby="mission-values-title">
          <h2 id="mission-values-title" className="text-3xl font-bold text-white mb-8 text-center">
            Our Mission and Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                icon: Award,
                description: "We strive for academic excellence in all our programs.",
              },
              {
                title: "Personalised Learning",
                icon: Users,
                description: "We tailor our approach to the needs of each student and their unique learning style.",
              },
              {
                title: "Innovation",
                icon: Lightbulb,
                description: "We embrace innovative teaching methods and technologies.",
              },
              {
                title: "Holistic Development",
                icon: Target,
                description: "We focus on developing well-rounded individuals.",
              },
              {
                title: "Continuous Improvement",
                icon: TrendingUp,
                description: "We are committed to ongoing enhancement of our programs and methods.",
              },
              {
                title: "Love for Learning",
                icon: BookOpen,
                description: "We aim to instill a lifelong passion for learning in our students.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <value.icon className="w-6 h-6 mr-2" aria-hidden="true" />
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
        <section className="mb-16" aria-labelledby="journey-title">
          <h2 id="journey-title" className="text-3xl font-bold text-white mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            {[
              { year: 2007, event: "Enrich Education founded in Cabramatta" },
              { year: 2010, event: "Our first ever student to rank 1st in English at James Ruse" },
              { year: 2015, event: "Launched a 24/7 communication channel to respond faster to students" },
              { year: 2018, event: "5th student to achieve a 99.95 ATAR" },
              { year: 2020, event: "Moved to Burwood" },
              {
                year: 2023,
                event:
                  "First ever student to receive a full scholarship to UNSW Health Degree without any conditional terms. Over 90% achieved entry into a Selective School. 8th student to achieve a 99.95 ATAR.",
              },
            ].map((milestone, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 flex items-center">
                  <Badge variant="secondary" className="text-lg font-bold mr-4">
                    {milestone.year}
                  </Badge>
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


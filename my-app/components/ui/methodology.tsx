import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90">
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Our Methodology</h1>
        
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">The Power of Hard Work</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="mb-4">
                At Enrich Education, we firmly believe that success is not just about innate talent, but about dedication, perseverance, and most importantly, hard work. Our methodology is built on the principle that every student has the potential to excel, given the right guidance and a strong work ethic.
              </p>
              <p>
                We have seen time and time again that students who commit to consistent, focused effort are the ones who achieve remarkable results. It is not about being naturally gifted; it is about being willing to put in the hours, tackle challenges head-on, and continuously push beyond your comfort zone.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Strict Homework Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="mb-4">
                One of the cornerstones of our methodology is our strict homework policy. We believe that regular, meaningful practice is essential for mastering any subject. Our homework assignments are carefully designed to reinforce classroom learning, encourage independent thinking, and build crucial time management skills.
              </p>
              <p className="mb-4">
                We expect all our students to complete their homework diligently and on time. This is not just about academic performance; it's about instilling discipline, responsibility, and a strong work ethic that will serve them well beyond their academic years.
              </p>
              <p>
                Our teachers provide detailed feedback on homework, ensuring that students understand their mistakes and learn from them. We also involve parents in this process, keeping them informed about their child's progress and any areas that need additional attention.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Fostering a Culture of Excellence</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="mb-6">
                At Enrich Education, we foster a culture where hard work is celebrated and excellence is the standard. We believe this approach prepares our students not just for academic success, but for life challenges beyond the classroom.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                  <span>We set high expectations and provide the support needed to meet them</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                  <span>We encourage students to embrace challenges as opportunities for growth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                  <span>We teach effective study techniques and time management skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                  <span>We recognize and reward consistent effort and improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                  <span>We help students develop resilience and perseverance in the face of difficulties</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-6 px-8">
              Experience Our Methodology
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Target, TrendingUp } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: GraduationCap,
      title: "Expert Teachers",
      description: "Learn from Qualified Australian Accredited Teachers, top HSC & VCE performers, IB Experts who know how guide students to excel in their school assessments."
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "With a maximum of nine students in a class, we ensure you get the personalised support you need to stay more focused in the classroom."
    },
    {
      icon: Target,
      title: "Specialised & Tailored Planning",
      description: "All our teacher-made programs are customised to ensure you maximise students likelihood of attaining top marks at school."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "We have a high retention rate and this shows through our students results. Our results speak for themselves."
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Why Choose Enrich Education?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


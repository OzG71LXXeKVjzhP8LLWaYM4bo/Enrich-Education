import { Hero } from "@/components/ui/hero";
import { Stats } from "@/components/ui/stats";
import StudentsRanking from "@/components/ui/studentsranking";
import TestimonialSlider from "@/components/ui/testimonials";
import { WhyChooseUs } from "@/components/ui/whychooseus";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <StudentsRanking />
        <Stats />
        <TestimonialSlider />
        <WhyChooseUs />
      </main>
    </div>
  )
}
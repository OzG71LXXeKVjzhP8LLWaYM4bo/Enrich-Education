import { Hero } from "@/components/ui/hero";
import { Stats } from "@/components/ui/stats";
import TestimonialSlider from "@/components/ui/testimonials";
import { WhyChooseUs } from "@/components/ui/whychooseus";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <TestimonialSlider />
      </main>
    </div>
  )
}
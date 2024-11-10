import { Hero } from "@/components/ui/hero";
import { Stats } from "@/components/ui/stats";
import { WhyChooseUs } from "@/components/ui/whychooseus";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <WhyChooseUs />
        <Stats />
      </main>
    </div>
  )
}
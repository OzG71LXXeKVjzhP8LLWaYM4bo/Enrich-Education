import { Hero } from "@/components/ui/hero";
import { Stats } from "@/components/ui/stats";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Stats />
      </main>
    </div>
  )
}
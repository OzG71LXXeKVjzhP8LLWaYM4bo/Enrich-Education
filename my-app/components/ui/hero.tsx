/*************  ✨ Codeium Command 🌟  *************/
import Image from "next/image";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/enrich-education-students-studying.JPG"
          alt="Students studying"
          fill
          className="object-cover"
          priority
          style={{ zIndex: -1 }} // Ensure the image stays below content
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90 z-1" />

      <div className="relative z-10 container mx-auto px-4 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          ENRICH EDUCATION SPECIALIST TUITION
        </h1>
        <div className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          Welcome
        </div>
        <p className="text-xl md:text-3xl mb-8 max-w-3xl mx-auto">
          Achieve Your Academic Goals with Sydney Premier Tutoring Service
        </p>
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 text-lg px-8 py-6">
          ENQUIRE NOW
        </Button>
      </div>
/******  3d9e9dd2-4ccb-4f85-aca7-69b899f19aa4  *******/
    </section>
  );
}

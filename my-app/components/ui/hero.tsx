import Image from "next/image"
import Link from "next/link"

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
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ENRICH EDUCATION SPECIALIST TUITION
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Achieve Your Academic Goals with Sydney Premier Tutoring Service
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 text-white hover:bg-yellow-600 text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            CLAIM YOUR FREE TRIAL
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
        <a href="#features" className="text-white animate-bounce inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
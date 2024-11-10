import Image from "next/image"

export function Stats() {
  const stats = [
    {
      value: "350",
      description: "Students achieved a Band 6 in their ACE HSC subjects",
    },
    {
      value: "112",
      description: "Students achieved an ATAR above 99.00",
    },
    {
      value: "7",
      description: "Students achieved a perfect ATAR of 99.95",
    },
    {
      value: "10",
      description: "Students achieved State Ranks in their ACE HSC subjects",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/enrich-education-students-studying.JPG"
          alt="Students studying"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-6xl font-bold text-white mb-8">RESULTS</h2>
        <p className="text-2xl text-white mb-16 max-w-4xl">
          Our students consistently excel in the HSC, achieving remarkable results across all subjects.
          Here's a snapshot of what our HSC tutoring can help you achieve:
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/10 rounded-3xl p-8 text-white border border-white/20"
            >
              <div className="text-6xl font-bold mb-4">{stat.value}</div>
              <div className="text-lg leading-tight">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <p className="text-xl text-white mt-16 text-center">
          Proof of the effectiveness of our HSC tutoring.
        </p>
      </div>
    </section>
  )
}
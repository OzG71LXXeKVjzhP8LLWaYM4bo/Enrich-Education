import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Teacher = {
  name: string
  image: string
  role: string
  subjects: string[]
  bio: string
}

const teachers: Teacher[] = [
  {
    name: "Dr. Emily Chen",
    image: "/placeholder.svg",
    role: "Senior Mathematics Tutor",
    subjects: ["Mathematics", "Physics"],
    bio: "Dr. Chen holds a Ph.D. in Applied Mathematics and has been teaching HSC students for over 10 years. Her students consistently achieve Band 6 results."
  },
  {
    name: "James Wilson",
    image: "/placeholder.svg",
    role: "English Literature Specialist",
    subjects: ["English Advanced", "English Extension 1"],
    bio: "James is a published author with a Master's in English Literature. He specializes in essay writing and critical analysis."
  },
  {
    name: "Dr. Sarah Thompson",
    image: "/placeholder.svg",
    role: "Science Coordinator",
    subjects: ["Chemistry", "Biology"],
    bio: "With a background in medical research, Dr. Thompson brings real-world applications to her science classes, inspiring students to excel in STEM subjects."
  },
  {
    name: "Michael Lee",
    image: "/placeholder.svg",
    role: "Economics and Business Studies Tutor",
    subjects: ["Economics", "Business Studies"],
    bio: "Michael has over 15 years of experience in the finance industry and holds an MBA. He helps students understand complex economic theories through practical examples."
  }
]

export function MeetUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Meet Our Expert Tutors
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-white mb-2">{teacher.name}</CardTitle>
                <p className="text-yellow-300 font-medium mb-2">{teacher.role}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {teacher.subjects.map((subject, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-blue-500 text-white">
                      {subject}
                    </Badge>
                  ))}
                </div>
                <p className="text-white/90 text-sm">{teacher.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
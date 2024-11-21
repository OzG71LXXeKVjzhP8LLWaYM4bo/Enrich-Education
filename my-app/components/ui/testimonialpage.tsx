import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: 'Gavin Liu',
    image: '/gavin.png?height=200&width=200',
    subject: 'Mandarin',
    atar: '99.90',
    achievements: '1st in Mandarin (QLD)',
    graduated: '2018 TSS - Southport',
    degree: 'UNSW Bachelor of Medical Studies/Doctor of Medicine'
  },
  {
    id: 2,
    name: 'Spencer Hu',
    image: '/Spencer- img5.webp?height=200&width=200',
    subject: 'Economics',
    atar: '99.95',
    achievements: '1st in Economics and 8th in Advanced English (NSW State Rank)',
    graduated: '2016 James Ruse',
    degree: 'Bachelor of Science in Economics (The Wharton School, University of Pennsylvania) (IVY League)'
  },
  {
    id: 3,
    name: 'Tyler Li',
    image: 'tyler.jpg?height=200&width=200',
    subject: 'Mandarin',
    atar: 'IB 45',
    achievements: '1st in Mandarin 7 in all IB Subjects',
    graduated: '2019 Haileybury',
    degree: 'USYD Bachelor of Science (Adv)/Doctor of Medicine'
  },
  {
    id: 4,
    name: 'Kat Zhang',
    image: '/kat.jpg?height=200&width=200',
    subject: 'English',
    atar: '99.85',
    achievements: '1st in English Extension (NSW) First-Class Honours',
    graduated: '2016 Rouse Hill Anglican College',
    degree: 'UNSW Bachelor of Arts/Law First Class honours'
  }
]

export default function TestimonialsPage() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Our Success Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#F0F4F8] overflow-hidden h-full">
              <div className="aspect-square relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <Badge className="bg-yellow-500 text-white mb-2 text-xs hover:bg-yellow-600">
                  {testimonial.subject}
                </Badge>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-gray-600 flex-shrink-0" />
                    <p className="text-gray-700">ATAR: {testimonial.atar}</p>
                  </div>
                  <div className="flex items-start gap-1">
                    <ArrowRight className="w-3 h-3 text-gray-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 line-clamp-2">{testimonial.achievements}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-gray-600 flex-shrink-0" />
                    <p className="text-gray-700">{testimonial.graduated}</p>
                  </div>
                  <div className="flex items-start gap-1">
                    <ArrowRight className="w-3 h-3 text-gray-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 line-clamp-2">{testimonial.degree}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
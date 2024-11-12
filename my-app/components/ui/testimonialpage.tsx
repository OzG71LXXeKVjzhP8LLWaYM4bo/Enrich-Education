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
    graduated: '2018 Some QLD school',
    degree: 'UNSW Bachelor of Medical Studies/Doctor of Medicine'
  },
  {
    id: 2,
    name: 'Jay Patel',
    image: '/placeholder.svg?height=200&width=200',
    subject: 'Chemistry',
    atar: '99.90',
    achievements: '7th in Chemistry (NSW)',
    graduated: '2018 Sydney Boys',
    degree: 'UNSW Bachelor of Medical Studies/Doctor of Medicine'
  },
  {
    id: 3,
    name: 'Justin Wu',
    image: '/placeholder.svg?height=200&width=200',
    subject: 'Chemistry',
    atar: '99.95',
    achievements: 'Dux, 15th in Chemistry (NSW), 8th in Maths Ext 1 (NSW)',
    graduated: '2016 James Ruse',
    degree: 'USYD Bachelor of Science (Adv)/Doctor of Medicine'
  },
  {
    id: 4,
    name: 'Sarah Chen',
    image: '/placeholder.svg?height=200&width=200',
    subject: 'Mathematics',
    atar: '99.85',
    achievements: '3rd in Mathematics Extension 2 (NSW)',
    graduated: '2017 North Sydney Girls',
    degree: 'USYD Bachelor of Engineering (Honours)/Commerce'
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
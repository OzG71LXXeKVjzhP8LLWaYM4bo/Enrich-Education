'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: 'Gavin Liu',
    image: '/placeholder.svg?height=200&width=200',
    subject: 'Mandarin',
    atar: '99.90',
    achievements: '1st in Mandarin (QLD)',
    graduated: '2018 Some QLD school',
    degree: 'UNSW Bachelor of Medical Studies/Doctor of Medicine'
  },
  {
    id: 2,
    name: 'Justin Wu',
    image: '/placeholder.svg?height=200&width=200',
    subject: 'Chemistry',
    atar: '99.95',
    achievements: 'Dux, 15th in Chemistry (NSW), 8th in Maths Ext 1 (NSW)',
    graduated: '2016 James Ruse',
    degree: 'USYD Bachelor of Science (Adv)/Doctor of Medicine'
  },
  {
    id: 3,
    name: 'Sarah Chen',
    image: '/placeholder.svg?height=200&width=200',
    subject: 'Mathematics',
    atar: '99.85',
    achievements: '3rd in Mathematics Extension 2 (NSW)',
    graduated: '2017 North Sydney Girls',
    degree: 'USYD Bachelor of Engineering (Honours)/Commerce'
  },
  {
    id: 4,
    name: 'Michael Zhang',
    image: '/placeholder.svg?height=200&width=200',
    subject: 'Physics',
    atar: '99.95',
    achievements: 'Dux, 5th in Physics (NSW), 12th in Chemistry (NSW)',
    graduated: '2018 James Ruse',
    degree: 'UNSW Bachelor of Engineering (Honours)/Science'
  }
]

const TestimonialSlider = () => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition - 1) % (testimonials.length * 100))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-600 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Success Stories</h2>
        <div className="relative">
          <div 
            className="flex transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(${position}%)` }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-64 flex-shrink-0 px-2">
                <Card className="bg-[#F0F4F8] overflow-hidden h-full">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider
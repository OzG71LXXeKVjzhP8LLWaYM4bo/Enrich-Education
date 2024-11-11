'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    role: 'Parent',
    content: 'Enrich Education has been a game-changer for my daughter. Her confidence in mathematics has soared, and her grades have improved significantly.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael T.',
    role: 'Student',
    content: 'The HSC preparation courses at Enrich Education were instrumental in helping me achieve my goal ATAR. The teachers are knowledgeable and supportive.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily W.',
    role: 'Parent',
    content: 'My son got into the selective school of our choice, thanks to the comprehensive preparation program at Enrich Education. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'David K.',
    role: 'Student',
    content: 'The IB courses at Enrich Education provided me with a solid foundation for my international studies. The teachers really understand the IB curriculum.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Lisa M.',
    role: 'Parent',
    content: 'The OC prep course was excellent. My daughter not only got into an OC class but also developed a love for learning. Thank you, Enrich Education!',
    rating: 5,
  },
  {
    id: 6,
    name: 'James R.',
    role: 'Student',
    content: 'The Further Literacy program has significantly improved my writing skills. I feel much more confident in my English classes now.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Sophia C.',
    role: 'Parent',
    content: 'Enrich Education\'s scholarship preparation program was thorough and effective. My son secured a scholarship at a prestigious private school.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Alex H.',
    role: 'Student',
    content: 'The Further Quantitative Reasoning course challenged me in the best way possible. It\'s helped me excel in my advanced math classes at school.',
    rating: 4,
  },
  {
    id: 9,
    name: 'Olivia P.',
    role: 'Parent',
    content: 'The general academic support my daughter receives at Enrich Education has boosted her overall performance at school. The tutors are fantastic!',
    rating: 5,
  },
  {
    id: 10,
    name: 'Daniel F.',
    role: 'Student',
    content: 'Preparing for the selective school test was stressful, but Enrich Education made it manageable. Their strategies and practice tests were invaluable.',
    rating: 5,
  },
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">What Our Students and Parents Say</h2>
        <div className="relative">
          <div 
            className="flex transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(${position}%)` }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-full flex-shrink-0 px-4">
                <Card className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <CardContent className="p-6">
                    <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </CardFooter>
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
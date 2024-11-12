'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const schools = [
  { name: 'Ruse', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'North Sydney Boys', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Sydney Grammar', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Sydney Boys', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Sydney Girls', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Baulkham Hills', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Fort Street', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'International Grammar', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Ascham', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Cranbrook', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Newington', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Trinity (Summer Hill)', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Loreto Kirribilli', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'MLC', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Meriden', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Scots', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Shore', logo: '/placeholder.svg?height=80&width=80' },
  { name: 'Westbourne', logo: '/placeholder.svg?height=80&width=80' },
]

const StudentsRanking = () => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition - 0.5) % (schools.length * 100))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our students ranked first in
        </h2>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(${position}%)` }}
          >
            {schools.concat(schools).map((school, index) => (
              <div key={`${school.name}-${index}`} className="flex-shrink-0 mx-4">
                <div className="bg-white p-4 rounded-lg shadow-md w-40 h-40 flex flex-col items-center justify-center">
                  <Image
                    src={school.logo}
                    alt={`${school.name} logo`}
                    width={80}
                    height={80}
                    className="mb-2"
                  />
                  <p className="text-sm text-center font-semibold text-gray-700">{school.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentsRanking
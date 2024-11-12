'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const schools = [
  { name: 'James Ruse', logo: '/Ruse.png?height=80&width=80' },
  { name: 'North Sydney Boys', logo: '/NSBH_Shield_new_colours.png?height=80&width=80' },
  { name: 'Sydney Grammar', logo: '/sydgrammar.png?height=80&width=80' },
  { name: 'Sydney Boys', logo: '/sydney-boys-hs-logo.png?height=80&width=80' },
  { name: 'Sydney Girls', logo: '/sydgirls.png?height=80&width=80' },
  { name: 'Baulkham Hills', logo: '/BHHSLogo.png?height=80&width=80' },
  { name: 'Fort Street', logo: '/fort street.png?height=80&width=80' },
  { name: 'Ascham', logo: '/ascham.png?height=80&width=80' },
  { name: 'Cranbrook', logo: '/Cranbrook_School,_Sydney_Logo.svg.png?height=80&width=80' },
  { name: 'Newington', logo: '/Newingtonlogo.png?height=80&width=80' },
  { name: 'Trinity', logo: '/trinity.png?height=80&width=80' },
  { name: 'Loreto Kirribilli', logo: '/Loretokirribilli.png?height=80&width=80' },
  { name: 'MLC', logo: '/MLC.png?height=80&width=80' },
  { name: 'Meriden', logo: '/MeridenCrest.png?height=80&width=80' },
  { name: 'Scots', logo: '/scots.png?height=80&width=80' },
  { name: 'Shore', logo: '/shore.png?height=80&width=80' },
  { name: 'Westbourne', logo: '/Westbourne-College-Sydney-logo-1.png?height=80&width=80' },
  { name: 'TSS-Southport', logo: '/SouthportSchool.png?height=80&width=80' },
  { name: 'Kincoppall Rose-Bay', logo: '/Kincoppal Rose Bay.png?height=80&width=80' },
  { name: "Haileybury", logo: '/Haileybury_au_crest.svg.png?height=80&width=80' },
]

const StudentsRanking = () => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 0.5)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (position < -100 * schools.length) {
      setPosition(0)
    }
  }, [position])

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
            {[...schools, ...schools, ...schools].map((school, index) => (
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
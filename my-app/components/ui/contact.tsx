'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import { Send, ChevronDown } from "lucide-react"

const subjectCategories = [
  {
    name: "Mathematics",
    subjects: ["Mathematics"]
  },
  {
    name: "English",
    subjects: ["English"]
  },
  {
    name: "IB Courses",
    subjects: ["IB Mathematics SL", "IB Mathematics HL", "IB English SL", "IB English HL"]
  },
  {
    name: "Preparation Courses",
    subjects: ["Selective School Prep", "OC Prep"]
  }
]

export default function ContactPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
  }

  return (
    <section className="relative min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg"
          alt="Students studying"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Enrich Education
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Contact Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2">Phone: (02) 9123 4567</p>
                <p className="font-semibold">Email: admin@enricheducation.com.au</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Campus Information:</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg">Burwood</h4>
                    <p>123 Burwood Road</p>
                    <p className="mt-2">Weekends: 9:30am – 5pm</p>
                    <p>Monday to Thursday: 3:30pm – 8:30pm</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">Strathfield</h4>
                    <p>Level 2, 40 The Boulevarde</p>
                    <p className="mt-2">Weekends: 9:30am – 5pm</p>
                    <p>Monday to Tuesday: 3:30pm – 8:30pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <Label className="text-gray-700">
                  Student full name <span className="text-red-400">*</span>
                </Label>
                <Input 
                  type="text" 
                  className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                  placeholder="Full name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700">
                    Student email <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    type="email" 
                    className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <Label className="text-gray-700">
                    Student contact no. <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    type="tel" 
                    className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                    placeholder="Student contact no."
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700">
                    Parent contact no. <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    type="tel" 
                    className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                    placeholder="Parent contact no."
                    required
                  />
                </div>
                <div>
                  <Label className="text-gray-700">
                    School <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    type="text" 
                    className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                    placeholder="School name"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-gray-700">
                  Current school year <span className="text-red-400">*</span>
                </Label>
                <RadioGroup defaultValue="year-7" className="flex flex-wrap gap-4 mt-1">
                  {["Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12"].map((year) => (
                    <div key={year} className="flex items-center space-x-2">
                      <RadioGroupItem value={year.toLowerCase().replace(/\s+/g, '-')} id={year.toLowerCase().replace(/\s+/g, '-')} />
                      <Label htmlFor={year.toLowerCase().replace(/\s+/g, '-')} className="text-gray-700">{year}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-gray-700">Subject interests</Label>
                <Accordion type="single" collapsible className="w-full">
                  {subjectCategories.map((category, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-gray-700">
                        {category.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {category.subjects.map((subject) => (
                            <div key={subject} className="flex items-center space-x-2">
                              <Checkbox
                                id={subject.toLowerCase().replace(/\s+/g, '-')}
                                checked={selectedSubjects.includes(subject)}
                                onCheckedChange={() => toggleSubject(subject)}
                              />
                              <Label
                                htmlFor={subject.toLowerCase().replace(/\s+/g, '-')}
                                className="text-gray-700"
                              >
                                {subject}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div>
                <Label className="text-gray-700">Message</Label>
                <Textarea 
                  className="bg-[#EBF3F9] border-0 mt-1 h-32 text-gray-700 placeholder-gray-500"
                  placeholder="Question/Message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white h-12 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
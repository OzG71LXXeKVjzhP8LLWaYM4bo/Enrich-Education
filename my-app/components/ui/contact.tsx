'use client'

import { useState, useEffect } from "react"
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
import { toast } from "@/hooks/use-toast"
import Image from "next/image"
import { Send, MapPin, Phone, Mail } from 'lucide-react'

const subjectCategories = [
  {
    name: "General Courses",
    subjects: ["General Academic Support"],
    grades: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    name: "OC Prep",
    subjects: ["OC Preparation"],
    grades: [3, 4, 5]
  },
  {
    name: "Selective Prep",
    subjects: ["Selective School Preparation"],
    grades: [4, 5, 6]
  },
  {
    name: "Scholarship Prep",
    subjects: ["Scholarship Preparation"],
    grades: [4, 5, 6]
  },
  {
    name: "HSC Courses",
    subjects: ["HSC English (Advanced)", "HSC Mathematics Advanced", "HSC Physics", "HSC Chemistry", "HSC Biology", "HSC Economics"],
    grades: [11, 12]
  },
  {
    name: "IB Courses",
    subjects: ["IB English A: Language and Literature", "IB Mathematics: Analysis and Approaches", "IB Physics", "IB Chemistry", "IB Biology", "IB Economics"],
    grades: [11, 12]
  },
  {
    name: "Further Literacy",
    subjects: ["Further Literacy"],
    grades: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    name: "Further Quantitative Reasoning",
    subjects: ["Further Quantitative Reasoning"],
    grades: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    name: "Early Learning",
    subjects: ["Early Literacy", "Early Numeracy", "School Readiness"],
    grades: [0]
  }
]

async function sendContactForm(formData: FormData) {
  const fullName = formData.get('fullName') as string
  const studentEmail = formData.get('studentEmail') as string
  const studentPhone = formData.get('studentPhone') as string
  const parentPhone = formData.get('parentPhone') as string
  const school = formData.get('school') as string
  const schoolYear = formData.get('schoolYear') as string
  const selectedSubjects = formData.get('selectedSubjects') as string
  const message = formData.get('message') as string

  const emailContent = `
    New Contact Form Submission:
    
    Full Name: ${fullName}
    Student Email: ${studentEmail}
    Student Phone: ${studentPhone}
    Parent Phone: ${parentPhone}
    School: ${school}
    School Year: ${schoolYear}
    Selected Subjects: ${selectedSubjects}
    
    Message:
    ${message}
  `

  // This is a placeholder for the actual email sending logic
  // In a real application, you would use a service like Resend, SendGrid, or your own SMTP server
  console.log('Sending email:', emailContent)

  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Simulating a successful email send
  if (Math.random() > 0.1) { // 90% success rate
    return { success: true }
  } else {
    throw new Error('Failed to send email')
  }
}

export default function ContactPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [filteredCategories, setFilteredCategories] = useState(subjectCategories)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
  }

  useEffect(() => {
    if (selectedYear) {
      const filtered = subjectCategories.filter(category => 
        category.grades.includes(selectedYear)
      )
      setFilteredCategories(filtered)
      setSelectedSubjects([]) // Reset selected subjects when year changes
    } else {
      setFilteredCategories([])
    }
  }, [selectedYear])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    formData.append('selectedSubjects', selectedSubjects.join(', '))
    formData.append('selectedYear', selectedYear ? selectedYear.toString() : '')

    try {
      await sendContactForm(formData)
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you soon!",
      })
      // Reset form fields here if needed
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen">
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

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Enrich Education
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <p className="font-semibold">+61 430 089 992</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <p className="font-semibold">info@enricheducation.com.au</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Campus Information:</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Burwood
                    </h4>
                    <p>Level 4, 1/4 Railway Pde, Burwood, 2034</p>
                    <p className="mt-2">Weekends: 9:30am – 5pm</p>
                    <p>Monday to Thursday: 3:30pm – 8:30pm</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Sydney CBD
                    </h4>
                    <p>13/333 George St, Sydney, 2000</p>
                    <p className="mt-2">Weekends: 9:30am – 5pm</p>
                    <p>Monday to Tuesday: 3:30pm – 8:30pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4">Burwood Location:</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5661042519855!2d151.10292661521125!3d-33.87748028065435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb3e3b3de41d%3A0xd626428f74d7cc1e!2s1%2F4%20Railway%20Parade%2C%20Burwood%20NSW%202134!5e0!3m2!1sen!2sau!4v1653281352161!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-gray-700">
                  Student full name <span className="text-red-400">*</span>
                </Label>
                <Input 
                  id="fullName"
                  name="fullName"
                  type="text" 
                  className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                  placeholder="Full name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="studentEmail" className="text-gray-700">
                    Student email <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="studentEmail"
                    name="studentEmail"
                    type="email" 
                    className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="studentPhone" className="text-gray-700">
                    Student contact no. <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="studentPhone"
                    name="studentPhone"
                    type="tel" 
                    className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                    placeholder="Student contact no."
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="parentPhone" className="text-gray-700">
                    Parent contact no. <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="parentPhone"
                    name="parentPhone"
                    type="tel" 
                    className="bg-[#EBF3F9] border-0 mt-1 text-gray-700 placeholder-gray-500"
                    placeholder="Parent contact no."
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="school" className="text-gray-700">
                    School <span className="text-red-400">*</span>
                  </Label>
                  <Input 
                    id="school"
                    name="school"
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
                <RadioGroup 
                  name="schoolYear"
                  defaultValue="year-7" 
                  className="flex flex-wrap gap-4 mt-1"
                  onValueChange={(value) => {
                    const yearNumber = value === 'kindergarten' ? 0 : parseInt(value.split('-')[1]);
                    setSelectedYear(yearNumber);
                  }}
                >
                  {["Kindergarten", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12"].map((year) => (
                    <div key={year} className="flex items-center space-x-2">
                      <RadioGroupItem value={year.toLowerCase().replace(/\s+/g, '-')} id={year.toLowerCase().replace(/\s+/g, '-')} />
                      <Label htmlFor={year.toLowerCase().replace(/\s+/g, '-')} className="text-gray-700">{year}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {selectedYear && (
                <div>
                  <Label className="text-gray-700">Subject interests</Label>
                  <Accordion type="single" collapsible className="w-full">
                    {filteredCategories.map((category, index) => (
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
              )}

              <div>
                <Label htmlFor="message" className="text-gray-700">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  className="bg-[#EBF3F9] border-0 mt-1 h-32 text-gray-700 placeholder-gray-500"
                  placeholder="Question/Message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white h-12 text-lg"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
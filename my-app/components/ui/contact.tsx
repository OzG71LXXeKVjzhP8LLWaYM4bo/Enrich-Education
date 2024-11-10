import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Send } from "lucide-react"

export function Contact() {
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
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          ENRICH EDUCATION SPECIALIST TUITION
        </h1>
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-16">
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
                <RadioGroup defaultValue="year-10" className="flex gap-4 mt-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="year-10" id="year-10" />
                    <Label htmlFor="year-10" className="text-gray-700">Year 10</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="year-11" id="year-11" />
                    <Label htmlFor="year-11" className="text-gray-700">Year 11</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="year-12" id="year-12" />
                    <Label htmlFor="year-12" className="text-gray-700">Year 12</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-gray-700">Subject interests</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-1">
                  {[
                    "Chemistry",
                    "Physics",
                    "Biology",
                    "Maths",
                    "Economics",
                    "UCAT",
                    "Yr. 10 Science",
                    "Yr. 10 Maths"
                  ].map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox id={subject.toLowerCase()} />
                      <Label htmlFor={subject.toLowerCase()} className="text-gray-700">
                        {subject}
                      </Label>
                    </div>
                  ))}
                </div>
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
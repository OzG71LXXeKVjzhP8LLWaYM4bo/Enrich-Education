import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const timetableData = [
  {
    category: "Foundations",
    classes: [
      { year: "Kindergarten", times: ["Sat 8:45am-11:45am", "Sat 1:00pm-4:00pm"] },
      { year: "Year 1", times: ["Sat 8:45am-11:45am", "Sat 1:00pm-4:00pm"] },
      { year: "Year 2", times: ["Sat 8:45am-11:45am", "Sat 1:00pm-4:00pm"] },
      { year: "Year 3", times: ["Sat 8:45am-11:45am", "Sat 1:00pm-4:00pm"] },
      { year: "Year 4", times: ["Sat 8:45am-11:45am", "Sat 1:00pm-4:00pm"] },
      { year: "Year 5", times: ["Sat 8:45am-11:45am", "Sat 12:30pm-3:30pm"] },
      { year: "Year 6", times: ["Sun 8:45am-11:45am", "Sat 1:00pm-4:00pm"] },
    ]
  },
  {
    category: "Further Literacy",
    classes: [
      { year: "Kindergarten", times: ["Sun 8:45am-10:15am"] },
      { year: "Year 1", times: ["Sun 8:45am-10:15am"] },
      { year: "Year 2", times: ["Sun 8:45am-10:15am"] },
      { year: "Year 3", times: ["Sun 8:45am-10:15am"] },
      { year: "Year 4", times: ["Sun 8:45am-10:15am"] },
      { year: "Year 5", times: ["Sun 8:45am-10:15am"] },
      { year: "Year 6", times: ["Sun 8:45am-10:15am"] },
    ]
  },
  {
    category: "OC",
    classes: [
      { year: "Year 2", times: [] },
      { year: "Year 3", times: [] },
      { year: "Year 4", times: [] },
    ]
  },
  {
    category: "Selective",
    classes: [
      { year: "Year 4", times: ["Tuesday"] },
      { year: "Year 5", times: [] },
      { year: "Year 6", times: [] },
    ]
  },
  {
    category: "Scholarship Prep",
    classes: [
      { year: "Year 7", times: ["English - Thursday 5:45pm-7:45pm", "Maths - Saturday 8:45am-11:15am"] },
      { year: "Year 8", times: ["English - Thursday 5:45pm-7:45pm", "Maths - Saturday 2.30pm-5pm"] },
      { year: "Year 9", times: ["English - Thursday 5:45pm-7:45pm", "Maths - Saturday 3:30pm-6pm"] },
      { year: "Year 10", times: ["English - Sunday 12pm-2pm", "Maths - Saturday 1.30pm-4pm"] },
      { year: "Year 11", times: [
        "English (Advanced) - Sunday 3.30pm-5:30pm",
        "English (Standard) - Sunday 1.30pm-3.30pm",
        "Maths Advanced (2U) - Saturday 8:30am-11:45am",
        "Maths Extension I (3U) - Saturday 12:30pm-3:45pm",
        "Maths Extension II (4U) - Saturday 3:45pm-7pm"
      ]},
      { year: "Year 12", times: [
        "English (Advanced) - Sunday 2pm-4pm",
        "English (Standard) - Sunday 1.30pm-3.30pm",
        "Maths Advanced (2U) - Saturday 8:30am-11:45am",
        "Maths Extension I (3U) - Saturday 12:30pm-3:45pm",
        "Maths Extension II (4U) - Saturday 3:45pm-7pm"
      ]},
    ]
  },
  {
    category: "IB Higher Level",
    classes: [
      { year: "Year 11", times: [
        "English Lit (HL) - Sunday 2pm-4pm",
        "English Language & Lit (HL) - Sunday 2pm-4pm",
        "Maths AI (HL)",
        "Maths AA (HL)"
      ]},
      { year: "Year 12", times: [
        "English Lit (HL) - Sunday 2pm-4pm",
        "English Language Lit (HL) - Sunday 2pm-4pm",
        "Maths AI (HL)",
        "Maths AA (HL)"
      ]},
    ]
  },
  {
    category: "IB Standard Level",
    classes: [
      { year: "Year 11", times: [
        "English Lit (SL) - Sunday 2pm-4pm",
        "English Language & Lit (SL) - Sunday 2pm-4pm",
        "Maths AI (SL)",
        "Maths AA (SL)"
      ]},
      { year: "Year 12", times: [
        "English Lit (SL) - Sunday 2pm-4pm",
        "English Language Lit (SL) - Sunday 2pm-4pm",
        "Maths AI (SL)",
        "Maths AA (SL)"
      ]},
    ]
  },
]

export default function TimetablePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-blue-500/90 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Class Timetable</h1>
        <div className="space-y-8">
          {timetableData.map((category, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">Year</TableHead>
                      <TableHead className="text-white">Times</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.classes.map((cls, clsIndex) => (
                      <TableRow key={clsIndex}>
                        <TableCell className="font-medium text-white">{cls.year}</TableCell>
                        <TableCell className="text-white">
                          {cls.times.length > 0 ? (
                            <ul className="list-disc list-inside">
                              {cls.times.map((time, timeIndex) => (
                                <li key={timeIndex}>{time}</li>
                              ))}
                            </ul>
                          ) : (
                            "TBA"
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
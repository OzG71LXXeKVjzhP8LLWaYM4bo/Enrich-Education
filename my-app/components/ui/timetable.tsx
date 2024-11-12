import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const timetableData = [
  {
    category: "Foundations",
    classes: [
      { year: "Kindergarten" },
      { year: "Year 1" },
      { year: "Year 2" },
      { year: "Year 3" },
      { year: "Year 4" },
      { year: "Year 5" },
      { year: "Year 6" },
    ]
  },
  {
    category: "Further Literacy (Advanced Reading Skills & Writing Techniques)",
    classes: [
      { year: "Kindergarten" },
      { year: "Year 1" },
      { year: "Year 2" },
      { year: "Year 3" },
      { year: "Year 4" },
      { year: "Year 5" },
      { year: "Year 6" },
    ]
  },
  {
    category: "Further Quantitative Reasoning (Advanced Maths & Critical Thinking Skills)",
    classes: [
      { year: "Kindergarten" },
      { year: "Year 1" },
      { year: "Year 2" },
      { year: "Year 3" },
      { year: "Year 4" },
      { year: "Year 5" },
      { year: "Year 6" },
    ]
  },
  {
    category: "OC",
    classes: [
      { year: "Year 2" },
      { year: "Year 3" },
      { year: "Year 4" },
    ]
  },
  {
    category: "Selective Prep",
    classes: [
      { year: "Year 4" },
      { year: "Year 5" },
      { year: "Year 6" },
    ]
  },
  {
    category: "Scholarship Prep (For Entry to Private Schools)",
    classes: [
      { year: "Year 4" },
      { year: "Year 5" },
    ]
  },
  {
    category: "General",
    classes: [
      { year: "Year 7" },
      { year: "Year 8" },
      { year: "Year 9" },
      { year: "Year 10" },
    ]
  },
  {
    category: "HSC",
    classes: [
      { year: "Year 11" },
      { year: "Year 12" },
    ]
  },
  {
    category: "IB",
    classes: [
      { year: "Year 11 (HL)" },
      { year: "Year 12 (HL)" },
      { year: "Year 11 (SL)" },
      { year: "Year 12 (SL)" },
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
                      <TableHead className="text-white">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.classes.map((cls, clsIndex) => (
                      <TableRow key={clsIndex}>
                        <TableCell className="font-medium text-white">{cls.year}</TableCell>
                        <TableCell>
                          <Button variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                            Claim your free trial
                          </Button>
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
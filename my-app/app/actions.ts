'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactForm(formData: FormData) {
  const fullName = formData.get('fullName') as string
  const studentEmail = formData.get('studentEmail') as string
  const studentPhone = formData.get('studentPhone') as string
  const parentEmail = formData.get('parentEmail') as string
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
    Parent Email: ${parentEmail}
    Parent Phone: ${parentPhone}
    School: ${school}
    School Year: ${schoolYear}
    Selected Subjects: ${selectedSubjects}
    
    Message:
    ${message}
  `

  try {
    await resend.emails.send({
      from: 'Enrich Education <noreply@enricheducation.com.au>',
      to: 'anthonyk@westbournecollege.com.au',
      subject: 'New Contact Form Submission',
      text: emailContent,
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Failed to send email')
  }
}
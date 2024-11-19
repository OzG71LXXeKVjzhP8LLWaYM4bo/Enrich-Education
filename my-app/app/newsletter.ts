'use server'

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
    return { success: false, message: 'Email is required' }
  }

  try {
    // Add email to Supabase
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email })

    if (error) throw error

    // Send welcome email
    await resend.emails.send({
      from: 'Enrich Education <newsletter@enricheducation.com>',
      to: email,
      subject: 'Welcome to Enrich Education Newsletter',
      html: `
        <h1>Welcome to Enrich Education Newsletter!</h1>
        <p>Thank you for subscribing. We're excited to keep you updated with our latest news and offers.</p>
      `
    })

    return { success: true, message: 'Successfully subscribed to the newsletter!' }
  } catch (error) {
    console.error('Error:', error)
    return { success: false, message: 'An error occurred. Please try again later.' }
  }
}
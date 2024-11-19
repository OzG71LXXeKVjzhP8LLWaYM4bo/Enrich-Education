'use server'

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY

if (!resendApiKey) {
  throw new Error('Missing Resend API key')
}

const resend = new Resend(resendApiKey)

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
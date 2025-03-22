"use server"

import { z } from "zod"

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    const result = ContactFormSchema.safeParse({ name, email, message })

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
        message: "Validation failed. Please check your inputs.",
      }
    }

    // Log the submission (in a real app, you'd send an email or store in a database)
    console.log("Form submission received:", { name, email, message })

    // Here you would typically send an email or store the data
    // For example, using a service like SendGrid, Mailgun, or storing in a database

    // Simulate a delay to mimic API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "An error occurred while submitting the form. Please try again.",
    }
  }
}

// For the idea submission form
export async function submitIdeaForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const idea = formData.get("idea") as string

    // Validate form data
    const IdeaFormSchema = z.object({
      name: z.string().min(2, { message: "Name must be at least 2 characters" }),
      email: z.string().email({ message: "Please enter a valid email address" }),
      idea: z.string().min(20, { message: "Please provide more details about your idea (at least 20 characters)" }),
    })

    const result = IdeaFormSchema.safeParse({ name, email, idea })

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
        message: "Validation failed. Please check your inputs.",
      }
    }

    // Log the submission
    console.log("Idea submission received:", { name, email, idea })

    // Simulate a delay to mimic API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Thank you for sharing your idea! We'll review it and get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting idea:", error)
    return {
      success: false,
      message: "An error occurred while submitting your idea. Please try again.",
    }
  }
}


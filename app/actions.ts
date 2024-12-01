'use server'

export async function submitEmail(formData: FormData): Promise<void> {
  const email = formData.get('email')?.toString()

  if (!email) {
    throw new Error('Email is required')
  }

  try {
    // Your email submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000))
  } catch (error) {
    throw new Error('Failed to submit email')
  }
} 
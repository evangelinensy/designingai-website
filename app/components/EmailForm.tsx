'use client'

import { useFormStatus } from 'react-dom'
import { useTransition, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from 'lucide-react'
import { submitEmail } from "@/app/actions"

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <Button type="submit" disabled={pending}>
      <Send className="mr-2 h-4 w-4" />
      {pending ? 'Joining...' : 'Join Waitlist'}
    </Button>
  )
}

export function EmailForm() {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    setMessage('')
    startTransition(async () => {
      try {
        await submitEmail(formData)
        setMessage('Thanks for joining the waitlist!')
      } catch (error) {
        setMessage('Something went wrong. Please try again.')
      }
    })
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <form className="flex space-x-2" action={handleSubmit}>
        <Input
          className="max-w-lg flex-1"
          placeholder="Enter your email"
          type="email"
          name="email"
          required
        />
        <SubmitButton />
      </form>
      {message && (
        <p className={`text-sm ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Join the waitlist to get early access when we launch.
      </p>
    </div>
  )
}
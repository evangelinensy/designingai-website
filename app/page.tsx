import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Users, BookOpen, Send } from 'lucide-react'
import { EmailForm } from "@/app/components/EmailForm"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logonew2.png"
            alt="DesigningAI.co Logo"
            width={38}
            height={38}
            className="h-10 w-10"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="mailto:evangeline@designingai.co"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Shape the Future of AI Design
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join a community of designers and product leaders creating exceptional AI experiences. Get exclusive
                  resources, insights, and connect with peers.
                </p>
              </div>
              <EmailForm />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Exclusive Resources</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Access curated resources, templates, and best practices for designing AI products.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Community</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with fellow designers and product leaders shaping the future of AI.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Learning Hub</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay updated with the latest trends, case studies, and insights in AI design.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 DesigningAI.co. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="mailto:evangeline@designingai.co" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}


import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Oleksii Fisher. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


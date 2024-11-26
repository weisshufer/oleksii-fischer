"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RocketIcon, BrainCircuitIcon, GlobeIcon } from 'lucide-react'

const projects = [
  {
    title: "Domira Digital Ecosystem",
    description: "A platform empowering migrants with streamlined services for integration in host countries.",
    tags: ["AI", "Cloud Computing", "FullStack"],
    icon: GlobeIcon
  },
  {
    title: "Business Process Automation Suite",
    description: "Custom solution for SMEs to automate routine tasks and increase efficiency.",
    tags: ["Automation", "NoCode", "Integration"],
    icon: BrainCircuitIcon
  },
  {
    title: "Digital Transformation Roadmap",
    description: "Strategic plan for businesses to adopt and leverage digital technologies.",
    tags: ["Strategy", "Digital Transformation", "Consulting"],
    icon: RocketIcon
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Notable Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors h-full flex flex-col">
                <CardHeader>
                  <project.icon className="w-12 h-12 mb-4 text-blue-400" />
                  <CardTitle className="text-gray-100">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4 text-gray-400">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-500 bg-opacity-20 text-blue-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


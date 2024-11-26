"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { RocketIcon, BrainCircuitIcon, GlobeIcon } from 'lucide-react'

export default function About() {
  const items = [
    {
      icon: RocketIcon,
      title: "IT Leadership",
      description: "Leading IT operations at Hörgeräte Seifert GmbH, optimizing digital processes for enhanced efficiency."
    },
    {
      icon: BrainCircuitIcon,
      title: "AI & Automation",
      description: "Leveraging AI for business process automation, driving digital transformation for SMEs."
    },
    {
      icon: GlobeIcon,
      title: "Domira Vision",
      description: "Creating a digital ecosystem to empower migrants with streamlined integration services."
    }
  ]

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-12 text-gray-300 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          With over a decade of expertise in digital technology, I'm passionate about driving innovation and transformation in the IT sector.
        </motion.p>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <item.icon className="w-12 h-12 mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


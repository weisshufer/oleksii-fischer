"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "IT Department Head",
    company: "Hörgeräte Seifert GmbH",
    period: "Nov 2017 – Present",
    location: "Planegg, Germany",
    description: "Leading IT operations, overseeing automation, and optimizing digital processes to enhance efficiency and customer service."
  },
  {
    title: "Co-Founder/Chief Technology Officer",
    company: "digiasset GmbH",
    period: "May 2020 – May 2022",
    location: "Munich, Germany",
    description: "Co-founded a company focusing on IT consultancy. Designed and deployed innovative solutions for client businesses."
  },
  {
    title: "IT Consultant",
    company: "Self-employed",
    period: "Mar 2019 – Sep 2020; Jun 2022 – Jun 2024",
    location: "Munich, Germany",
    description: "Freelanced in business automation projects, helping clients save time and money by reducing routine processes."
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`w-full md:w-[calc(50%-20px)] bg-gray-800 border-gray-700 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">{exp.title}</h3>
                  <Badge variant="secondary" className="mb-2">{exp.company}</Badge>
                  <p className="text-sm text-gray-400 mb-2">{exp.period} | {exp.location}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" style={{ top: `calc(${index * 100 / (experiences.length - 1)}% - 8px)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


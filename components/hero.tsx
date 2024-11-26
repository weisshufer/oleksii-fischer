"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MainNav } from "./nav"
import { motion } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Automation', 'Innovation', 'Transformation'],
    loop: 0,
  })

  return (
    <section className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <MainNav />
      
      <div className="flex-grow flex flex-col justify-center items-center text-center z-10 px-4">
        <motion.h1 
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Oleksii Fisher
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl lg:text-3xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Digital Technology Expert
        </motion.p>
        <motion.div
          className="text-2xl sm:text-3xl lg:text-4xl mb-8 h-[3rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Driving <span className="text-blue-400">{text}</span>
          <Cursor cursorStyle='_' />
        </motion.div>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            <Link href="#about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link href="#about" className="animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </Link>
      </motion.div>
    </section>
  )
}


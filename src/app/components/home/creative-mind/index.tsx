'use client'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Zap, Heart, Focus } from 'lucide-react'

function CreativeMind() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const beliefs = [
    {
      title: "Simplicity is power",
      description: "We believe that the most powerful tools are the ones that do less, but do it perfectly. Every interaction with Slate Link is intentional and meaningful.",
      icon: <Zap size={48} className="text-purple-600 dark:text-purple-400" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Emotion is design",
      description: "Technology should feel human. We create deeply personal, emotionally resonant experiences that understand and adapt to your needs.",
      icon: <Heart size={48} className="text-emerald-600 dark:text-emerald-400" />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Presence is productivity",
      description: "True productivity comes from being present. Slate Link helps you focus on what matters, not on managing distractions.",
      icon: <Focus size={48} className="text-blue-600 dark:text-blue-400" />,
      color: "from-blue-500 to-blue-600"
    }
  ]

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })
  
  return (
    <section id='about'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-12 md:gap-24'>
            <div className='max-w-5xl text-center'>
              <motion.div {...bottomAnimation(-1)}>
                <h2 className='text-5xl md:text-6xl font-bold mb-8'>
                  At our core, we believe
                </h2>
                <p className='text-xl text-dark_black/70 dark:text-white/70 leading-relaxed font-medium'>
                  Slate is a human-first technology studio focused on building tools that restore clarity, focus, and intentionality in the digital age.
                </p>
              </motion.div>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-10 w-full'>
              {beliefs.map((belief, index) => {
                return (
                  <motion.div {...bottomAnimation(index)} key={index}>
                    <div className='bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-10 rounded-3xl h-full hover:scale-105 transition-all duration-500 border border-white/50 dark:border-white/10'>
                      <div className='mb-8'>
                        {belief.icon}
                      </div>
                      <h3 className='text-3xl font-bold mb-6 text-dark_black dark:text-white'>
                        {belief.title}
                      </h3>
                      <p className='text-dark_black/70 dark:text-white/70 leading-relaxed text-lg'>
                        {belief.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.div {...bottomAnimation(3)} className='text-center max-w-4xl'>
              <p className='text-2xl text-dark_black/80 dark:text-white/80 leading-relaxed mb-8 font-medium'>
                We're reimagining what devices should feel like — responsive, beautiful, purposeful, and never overwhelming.
              </p>
              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-8'>
                <div className='text-3xl font-bold text-purple-600 dark:text-purple-400'>
                  Not just tools. Companions.
                </div>
                <div className='text-3xl font-bold text-emerald-600 dark:text-emerald-400'>
                  Not just screens. Experiences.
                </div>
              </div>
              <div className='text-4xl font-bold text-dark_black dark:text-white'>
                That's Slate.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreativeMind

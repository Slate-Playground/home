'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, RotateCcw, Cpu, LayoutGrid, Lock } from 'lucide-react';

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: "Always-on Display",
      description: "A 2.8 inch low-power screen that shows calm, glanceable information without demanding attention.",
      icon: <Monitor size={28} className="text-purple-600 dark:text-purple-400" />,
      bg_color: "bg-gradient-to-br from-purple-50/80 to-purple-100/80 dark:from-purple-900/30 dark:to-purple-800/30",
      txt_color: "text-purple-900 dark:text-purple-100",
      border_color: "border-purple-200/50 dark:border-purple-700/30"
    },
    {
      title: "Tactile Interface",
      description: "Rotary-based controls that feel natural and intentional. No swipes, no clutter, just focused interaction.",
      icon: <RotateCcw size={28} className="text-emerald-600 dark:text-emerald-400" />,
      bg_color: "bg-gradient-to-br from-emerald-50/80 to-emerald-100/80 dark:from-emerald-900/30 dark:to-emerald-800/30",
      txt_color: "text-emerald-900 dark:text-emerald-100",
      border_color: "border-emerald-200/50 dark:border-emerald-700/30"
    },
    {
      title: "Custom SlateOS",
      description: "Built from scratch for speed, intent, and emotional resonance. Every interaction is purposeful.",
      icon: <Cpu size={28} className="text-blue-600 dark:text-blue-400" />,
      bg_color: "bg-gradient-to-br from-blue-50/80 to-blue-100/80 dark:from-blue-900/30 dark:to-blue-800/30",
      txt_color: "text-blue-900 dark:text-blue-100",
      border_color: "border-blue-200/50 dark:border-blue-700/30"
    },
    {
      title: "Modular System",
      description: "Timers, notes, weather, reminders — all seamlessly integrated through a focused widget ecosystem.",
      icon: <LayoutGrid size={28} className="text-orange-500 dark:text-orange-300" />,
      bg_color: "bg-gradient-to-br from-orange-50/80 to-orange-100/80 dark:from-orange-900/30 dark:to-orange-800/30",
      txt_color: "text-orange-900 dark:text-orange-100",
      border_color: "border-orange-200/50 dark:border-orange-700/30"
    },
    {
      title: "Private by Design",
      description: "Local-first with encrypted SD storage. Your data stays yours, always.",
      icon: <Lock size={28} className="text-red-600 dark:text-red-400" />,
      bg_color: "bg-gradient-to-br from-red-50/80 to-red-100/80 dark:from-red-900/30 dark:to-red-800/30",
      txt_color: "text-red-900 dark:text-red-100",
      border_color: "border-red-200/50 dark:border-red-700/30"
    },
    {
      title: "Lightweight",
      description: "Slate Link is incredibly light, so you barely notice it’s there—perfect for all-day, everyday carry.",
      icon: <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-purple-400"><span className="font-bold text-white text-lg">g</span></span>,
      bg_color: "bg-gradient-to-br from-emerald-50/80 to-purple-100/80 dark:from-emerald-900/30 dark:to-purple-800/30",
      txt_color: "text-emerald-900 dark:text-emerald-100",
      border_color: "border-emerald-200/50 dark:border-purple-700/30"
    },
  ]
  
  return (
    <section id='features' className='relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-emerald-500/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-purple-500/5 rounded-full blur-3xl'></div>
      
      <div ref={ref} className='2xl:py-20 py-11 relative z-10'>
        <div className='container'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col justify-center items-center gap-12 lg:gap-20'>
              <motion.div
                initial={{ y: '10%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='max-w-5xl text-center'>
                <div className='flex items-center justify-center gap-3 mb-8'>
                  <span className='text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-wide uppercase'>Features</span>
                </div>
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className='text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight'>
                  Designed for{' '}
                  <span className='instrument-font italic font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent'>
                    intention.
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className='text-xl md:text-2xl text-dark_black/70 dark:text-white/70 leading-relaxed font-medium max-w-4xl mx-auto'>
                  Every element serves a purpose. Every interaction is meaningful. 
                  This is technology that understands you.
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ y: '10%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                {features.map((feature, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      className={`${feature.bg_color} backdrop-blur-sm flex flex-col p-6 rounded-2xl gap-4 hover:shadow-2xl transition-all duration-500 border ${feature.border_color} shadow-lg hover:shadow-xl group`}>
                      <div className='flex items-center gap-3'>
                        <div className='p-3 bg-white/60 dark:bg-white/10 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300'>
                          {feature.icon}
                        </div>
                        <div className='flex-1'>
                          <h5 className={`${feature.txt_color} text-lg font-bold mb-2`}>
                            {feature.title}
                          </h5>
                          <p className='text-dark_black/70 dark:text-white/70 leading-relaxed text-sm'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ y: '10%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className='relative overflow-hidden rounded-3xl'>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-emerald-600'></div>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/90 to-emerald-600/90 backdrop-blur-sm'></div>
              
              <div className='relative flex flex-col gap-8 xl:flex xl:flex-row items-center justify-between py-16 px-8 sm:px-16 w-full'>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className='text-center xl:text-left'>
                  <h4 className='text-white text-2xl md:text-3xl font-bold mb-4 leading-tight'>
                    It's not a phone. It's not a smartwatch.
                    <br /> 
                    <span className='instrument-font italic font-bold'>It's a companion.</span>
                  </h4>
                  <p className='text-white/80 text-lg max-w-2xl'>
                    Designed to be quietly powerful, always present, never intrusive.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className='flex flex-col sm:flex-row gap-4 items-center'>
                  <Link
                    href='/contact'
                    className='group relative bg-white text-purple-600 font-bold rounded-2xl flex items-center gap-4 py-4 px-8 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 overflow-hidden'>
                    <span className='relative z-10 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-lg group-hover:text-white'>
                      Join Waitlist
                    </span>
                    <div className='relative z-10 w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-45'>
                        <path
                          d='M5 12H19M19 12L12 5M19 12L12 19'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </Link>
                  
                  <Link
                    href='#technology'
                    className='group border-2 border-white/30 text-white font-bold bg-white/10 backdrop-blur-sm gap-3 rounded-2xl flex items-center justify-between py-4 px-8 hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg hover:shadow-2xl hover:shadow-white/25 hover:scale-105'>
                    <span className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                      Learn More
                    </span>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-1'>
                      <path
                        d='M5 12H19M19 12L12 5M19 12L12 19'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation

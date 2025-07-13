'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, RotateCcw, Cpu } from 'lucide-react';
import Logo from '../../layout/header/Logo';

function HeroSection() {
  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 overflow-hidden'>
        {/* Premium gradient background */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-emerald-50/50 dark:from-purple-950/20 dark:via-black dark:to-emerald-950/20'></div>
        
        {/* Animated background elements */}
        <div className='absolute top-24 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-24 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        
        <div className='container relative z-10'>
          <div className='flex flex-col gap-16'>
            {/* ---------------- heading text --------------- */}
            <motion.div
              initial={{ y: '10%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='relative flex flex-col text-center items-center gap-10'>
              
              {/* Premium badge */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-dark_black/80 backdrop-blur-md rounded-full border border-white/30 dark:border-white/10 shadow-lg'>
                <div className='flex items-center gap-2'>
                  <Logo variant="playful" size="sm" />
                </div>
                <div className='w-1 h-1 bg-purple-600 dark:bg-purple-400 rounded-full'></div>
                <span className='text-sm font-medium text-dark_black/70 dark:text-white/70'>Human-First Technology</span>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='space-y-6'>
                <h1 className='font-bold w-full text-6xl md:text-7xl lg:text-8xl leading-tight'>
                  Meet the&nbsp;
                  <span className='instrument-font italic font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent'>
                    Slate Link.
                  </span>
                </h1>
                <p className='max-w-4xl text-xl md:text-2xl text-dark_black/70 dark:text-white/70 leading-relaxed font-medium'>
                  A minimalist offline-first companion device built to help you think, focus, and live better. 
                  It's like a second brain — ultra-portable, glanceable, and emotionally tuned.
                </p>
              </motion.div>

              {/* Premium feature highlights */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='flex flex-col items-center gap-6 mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl'>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className='flex items-center gap-3 p-4 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-white/30 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg'>
                      <Monitor size={20} className='text-purple-600 dark:text-purple-400' />
                    </div>
                    <div className='text-left'>
                      <h3 className='font-semibold text-dark_black dark:text-white text-sm'>Always-on Display</h3>
                      <p className='text-xs text-dark_black/60 dark:text-white/60'>2.8" low-power screen</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className='flex items-center gap-3 p-4 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-white/30 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg'>
                      <RotateCcw size={20} className='text-emerald-600 dark:text-emerald-400' />
                    </div>
                    <div className='text-left'>
                      <h3 className='font-semibold text-dark_black dark:text-white text-sm'>Tactile Interface</h3>
                      <p className='text-xs text-dark_black/60 dark:text-white/60'>Rotary-based controls</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className='flex items-center gap-3 p-4 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-white/30 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300'>
                    <div className='p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg'>
                      <Cpu size={20} className='text-blue-600 dark:text-blue-400' />
                    </div>
                    <div className='text-left'>
                      <h3 className='font-semibold text-dark_black dark:text-white text-sm'>Custom SlateOS</h3>
                      <p className='text-xs text-dark_black/60 dark:text-white/60'>Built from scratch</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: '10%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='flex flex-col items-center justify-center gap-10'>
              <div className='flex flex-col items-center justify-center gap-8 w-full sm:flex-row'>
                {/* ----------- Premium CTA Button -------------- */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <Link
                    href='/contact'
                    className='group relative bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold flex flex-row justify-between items-center py-5 px-10 rounded-full w-fit border border-transparent transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 overflow-hidden'>
                    {/* Animated background */}
                    <div className='absolute inset-0 bg-gradient-to-r from-emerald-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    
                    <span className='relative flex text-start transform transition-transform duration-500 ease-in-out group-hover:translate-x-4 text-lg px-4'>
                      Join Waitlist
                    </span>
                    <svg
                      width='28'
                      height='28'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='relative transform transition-transform duration-500 ease-in-out group-hover:translate-x-1'>
                      <path
                        d='M5 12H19M19 12L12 5M19 12L12 19'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <Link
                    href='#features'
                    className='group text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-3 hover:gap-4 transition-all duration-300 text-lg px-6 py-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20'>
                    <span>Learn More</span>
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

              {/* --------------- Premium Early Access -------------- */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className='flex items-center justify-center mt-8'>
                <div className='flex items-center gap-3 px-6 py-3 bg-white/40 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 dark:border-white/10'>
                  <div className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></div>
                  <p className='text-sm font-medium text-dark_black/70 dark:text-white/70'>
                    Be among the first to experience Slate Link
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

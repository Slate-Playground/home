'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

function Faq() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqData = [
    {
      question: "What exactly is Slate Link?",
      answer: "Slate Link is a minimalist offline-first companion device designed to help you think, focus, and live better. It's like a second brain — ultra-portable, glanceable, and emotionally tuned. Unlike phones, it doesn't want your attention; it gives you space, structure, and flow."
    },
    {
      question: "How is Slate Link different from my phone or smartwatch?",
      answer: "Slate Link is purposefully limited. It has a small 2.8 inch low-power screen, rotary-based UI (no swipes), and runs our custom SlateOS built from scratch. It's designed to be quietly powerful — not to compete for your attention like traditional devices."
    },
    {
      question: "What can I do with Slate Link?",
      answer: "Slate Link features a modular widget system for timers, notes, weather, reminders, and more. It's designed for focused tasks and intentional interactions. Think of it as a digital companion that helps you stay present and productive without the distractions of a full smartphone."
    },
    {
      question: "Is Slate Link really offline-first?",
      answer: "Yes! Slate Link uses encrypted SD-based memory and is designed to work primarily offline. Your data stays local and private. While it can connect to the internet when needed, it's built to function independently and give you control over your digital life."
    },
    {
      question: "When will Slate Link be available?",
      answer: "We're currently in the final stages of development and testing. Join our waitlist to get priority access to the first production run. Early Access is free, and we also offer a Founder Circle tier for those who want exclusive benefits and direct access to our team."
    },
    {
      question: "What's included in the Founder Circle?",
      answer: "Founder Circle members get everything in Early Access plus a custom engraved device, 1-on-1 onboarding session, lifetime software updates, exclusive founder events, and a direct line to the Slate team. It's for those who believe in the future of focused technology."
    },
    {
      question: "Can I develop apps for Slate Link?",
      answer: "Yes! Slate Link features an open app ecosystem where you can install focused utilities with one click. We're building a community of developers who share our vision of intentional, distraction-free technology."
    },
    {
      question: "What's SlateOS?",
      answer: "SlateOS is our custom operating system built from scratch specifically for Slate Link. It's designed for speed, intent, and emotional resonance. Unlike traditional operating systems, it's optimized for focused interactions rather than endless scrolling and notifications."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id='faq'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className='flex flex-col gap-12 md:gap-20'
          >
            <motion.div 
              variants={itemVariants}
              className='max-w-4xl text-center mx-auto'
            >
              <h2 className='text-5xl md:text-6xl font-bold mb-6'>
                Got questions? We've got{' '}
                <span className='instrument-font italic font-bold dark:text-white/90 text-purple-600 dark:text-purple-400'>
                  answers
                </span>
              </h2>
              <p className='text-xl text-dark_black/70 dark:text-white/70 leading-relaxed font-medium'>
                Everything you need to know about Slate Link and our vision for focused technology.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className='flex flex-col max-w-5xl mx-auto'
            >
              <Accordion
                type='single'
                collapsible
                className='flex flex-col gap-6'>
                {faqData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className='p-8 border border-purple-200 dark:border-purple-700 rounded-3xl group hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10'>
                      <AccordionTrigger className='group-hover:cursor-pointer'>
                        <h4 className='text-dark_black dark:text-white/80 text-left font-bold text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>
                          {item.question}
                        </h4>
                      </AccordionTrigger>
                      <AccordionContent>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className='text-base font-normal text-dark_black/70 dark:text-white/70 leading-relaxed pt-4'
                        >
                          {item.answer}
                        </motion.p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Faq

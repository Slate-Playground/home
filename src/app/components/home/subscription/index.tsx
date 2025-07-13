"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { Star, CheckCircle, ArrowRight } from 'lucide-react'

function Subscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission for waitlist
    console.log('Email submitted:', email);
    setEmail('');
  };

  const waitlistTiers = [
    {
      name: "Early Access",
      description: "Be among the first to experience Slate Link",
      price: "Free",
      features: [
        "Priority access to first production run",
        "Exclusive founder community access",
        "Direct feedback channel to our team",
        "Limited edition founder badge",
        "Early access to SlateOS updates"
      ],
      bg_color: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      text_color: "text-purple-900 dark:text-purple-100",
      border_color: "border-purple-200 dark:border-purple-700"
    },
    {
      name: "Founder Circle",
      description: "For those who believe in the future of focused technology",
      price: "$19",
      features: [
        "Everything in Early Access",
        "Custom engraved device",
        "1-on-1 onboarding session",
        "Lifetime software updates",
        "Exclusive founder events",
        "Direct line to Slate team"
      ],
      bg_color: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
      text_color: "text-emerald-900 dark:text-emerald-100",
      border_color: "border-emerald-200 dark:border-emerald-700"
    }
  ];

  return (
    <section id='pricing'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-12 md:gap-20'>
            {/* Pricing Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='max-w-5xl text-center mx-auto'
            >
              <h2 className='text-5xl md:text-6xl font-bold mb-8'>
                Join the{' '}
                <span className='instrument-font italic font-semibold dark:text-white/90 text-purple-600 dark:text-purple-400'>
                  waitlist
                </span>
              </h2>
              <p className='text-xl text-dark_black/70 dark:text-white/70 leading-relaxed font-medium mb-4'>
                Be among the first to experience a device that's built to be quietly powerful — and powerfully quiet.
              </p>
              <p className='text-sm text-dark_black/50 dark:text-white/50 mb-12'>
                Built with love by one person, for people who value intentional technology.
              </p>
            </motion.div>
            
            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              {waitlistTiers.map((tier, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`${tier.bg_color} p-10 rounded-3xl border ${tier.border_color} hover:shadow-2xl transition-all duration-500`}
                  key={index}>
                  <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-6'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <p className='py-3 px-6 bg-purple-600 text-white rounded-full text-sm font-bold'>
                            {tier.name}
                          </p>
                          {tier.name === "Founder Circle" && (
                            <Star className='w-5 h-5 text-yellow-500' fill="currentColor" />
                          )}
                        </div>
                        <div className='text-right'>
                          <span className={`text-4xl font-bold ${tier.text_color}`}>
                            {tier.price}
                          </span>
                          {tier.price !== "Free" && (
                            <span className={`text-sm ${tier.text_color} opacity-70`}>
                              /one-time
                            </span>
                          )}
                        </div>
                      </div>
                      <p className={`${tier.text_color} opacity-80 text-lg font-medium`}>
                        {tier.description}
                      </p>
                    </div>
                    
                    <div className='flex flex-col gap-6'>
                      <p className={`${tier.text_color} font-bold text-lg`}>What's included:</p>
                      <ul className='flex flex-col gap-4'>
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-start gap-4'>
                            <CheckCircle className='w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0' />
                            <p className={`${tier.text_color} text-base`}>{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href='/contact'
                      className='group text-white font-bold bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full flex items-center gap-4 py-4 px-8 w-fit hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg'>
                      <span className='group-hover:translate-x-2 transform transition-transform duration-300 ease-in-out'>
                        Join Waitlist
                      </span>
                      <ArrowRight className='w-5 h-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='text-center max-w-3xl mx-auto'
            >
              <p className='text-dark_black/60 dark:text-white/60 text-base font-medium mb-4'>
                Limited spots available. Join the waitlist to be notified when we launch.
              </p>
              <p className='text-sm text-dark_black/40 dark:text-white/40'>
                Early Access is free. Founder Circle helps support development and gets you exclusive benefits.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription

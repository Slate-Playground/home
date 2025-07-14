'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Loader2, Heart } from 'lucide-react'
import { useSlatePass } from '../../../contexts/SlatePassContext'
import { useRouter } from 'next/navigation'

function ContactForm() {
  const { user, joinWaitlist, getWaitlistStatus, signIn } = useSlatePass()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'join-waitlist',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState('')
  const [alreadyJoined, setAlreadyJoined] = useState(false)
  const [error, setError] = useState('')
  
  // Check waitlist status on mount if logged in
  useEffect(() => {
    if (user) {
      getWaitlistStatus().then(setAlreadyJoined)
    }
  }, [user])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      interest: 'join-waitlist',
      message: '',
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)
    setProgress(0)
    setCurrentStep('Preparing your message...')
    setError('')

    // If already joined, show confirmation
    if (alreadyJoined) {
      setSubmitted(true)
      setLoader(false)
      return
    }

    // Simulate progress
    const steps = [
      { progress: 25, step: 'Validating your information...' },
      { progress: 50, step: 'Connecting to our servers...' },
      { progress: 75, step: 'Sending your message...' },
      { progress: 100, step: 'Message sent successfully!' }
    ]
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400))
      setProgress(steps[i].progress)
      setCurrentStep(steps[i].step)
    }

    // Join waitlist in Supabase
    const { error } = await joinWaitlist(formData.message)
    if (error) {
      setError(error.message || 'Something went wrong. Please try again.')
      setLoader(false)
      return
    }
    setTimeout(() => {
      setSubmitted(true)
      setLoader(false)
      setProgress(0)
      setCurrentStep('')
      setAlreadyJoined(true)
      reset()
    }, 500)
  }

  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[40vh]'>
        <p className='text-lg mb-6'>Sign in to join the waitlist and get early access to Slate Link.</p>
        <button
          onClick={() => router.push('/signin')}
          className='bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300'>
          Sign In / Create Account
        </button>
      </div>
    )
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-purple-500/20 before:via-white before:to-emerald-500/20 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-purple-600/20 dark:before:via-black dark:before:to-emerald-600/20 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='relative flex flex-col text-center items-center'
            >
              <h2 className='font-bold w-full max-w-4xl text-4xl md:text-5xl'>
                Get in touch with
                <span className='instrument-font italic font-semibold dark:text-white/90 text-purple-600 dark:text-purple-400'>
                  {' '}
                  Slate
                </span>
              </h2>
              <p className='text-xl text-dark_black/70 dark:text-white/70 leading-relaxed font-medium mt-6 max-w-2xl'>
                We'd love to hear from you about Slate Link and our vision for focused technology.
              </p>
            </motion.div>
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className='flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-emerald-50 dark:from-purple-900/20 dark:to-emerald-900/20 border border-purple-200 dark:border-purple-700'
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className='flex items-center gap-3'
                  >
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                    <h5 className='text-emerald-600 dark:text-emerald-400 font-semibold'>
                      Thank you! We'll get back to you soon.
                    </h5>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='text-dark_black/70 dark:text-white/70'
                  >
                    We've received your message and will respond within 24 hours.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href='/'
                      className='group w-fit text-purple-600 dark:text-purple-400 font-semibold bg-transparent rounded-full flex items-center gap-4 py-3 px-6 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-purple-200 dark:border-purple-700 transition-all duration-300'>
                      <span className='group-hover:translate-x-2 transform transition-transform duration-300 ease-in-out'>
                        Back to home
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
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className='flex flex-col bg-white dark:bg-dark_black rounded-3xl p-10 gap-8 border border-white/50 dark:border-white/10 shadow-xl'
                >
                  <div className='flex flex-col md:flex md:flex-row gap-6'>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className='w-full'
                    >
                      <label htmlFor='name' className='font-semibold text-dark_black dark:text-white'>Your Name</label>
                      <input
                        className='w-full mt-2 rounded-2xl border px-5 py-4 outline-none transition-all duration-300 dark:border-white/20 focus:border-purple-600 dark:focus:border-purple-400 dark:bg-black/40 focus:ring-2 focus:ring-purple-500/20'
                        id='name'
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter your name'
                        required
                        disabled={loader}
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className='w-full'
                    >
                      <label htmlFor='email' className='font-semibold text-dark_black dark:text-white'>Your Email</label>
                      <input
                        className='w-full mt-2 rounded-2xl border px-5 py-4 outline-none transition-all duration-300 dark:border-white/20 focus:border-purple-600 dark:focus:border-purple-400 dark:bg-black/40 focus:ring-2 focus:ring-purple-500/20'
                        id='email'
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter your email'
                        required
                        disabled={loader}
                      />
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className='w-full'
                  >
                    <label htmlFor='interest' className='font-semibold text-dark_black dark:text-white'>
                      What can we help you with?
                    </label>
                    <select
                      className='w-full mt-2 text-base px-5 py-4 rounded-2xl border transition-all duration-300 dark:border-white/20 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none dark:bg-black/40 focus:ring-2 focus:ring-purple-500/20'
                      name='interest'
                      id='interest'
                      value={formData.interest}
                      onChange={handleChange}
                      disabled={loader}>
                      <option value='join-waitlist'>Join Slate Link Waitlist</option>
                      <option value='partnership'>Partnership Inquiry</option>
                      <option value='press'>Press & Media</option>
                      <option value='support'>Support & Questions</option>
                      <option value='other'>Other</option>
                    </select>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className='w-full'
                  >
                    <label htmlFor='message' className='font-semibold text-dark_black dark:text-white'>Message</label>
                    <textarea
                      className='w-full mt-2 rounded-2xl border px-5 py-4 outline-none transition-all duration-300 dark:border-white/20 focus:border-purple-600 dark:focus:border-purple-400 dark:bg-black/40 focus:ring-2 focus:ring-purple-500/20'
                      name='message'
                      id='message'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Tell us more about your inquiry...'
                      rows={4}
                      required
                      disabled={loader}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {!loader ? (
                      <button
                        type='submit'
                        className='group w-fit text-white font-bold bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full flex items-center gap-4 py-4 px-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105'>
                        <span className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                          Send Message
                        </span>
                        <Send className="w-5 h-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <div className='w-fit'>
                        <button 
                          disabled
                          className='bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 opacity-90'
                        >
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </button>
                        
                        {/* Progress indicator */}
                        <div className='mt-4 max-w-xs'>
                          <div className='flex justify-between text-sm text-dark_black/60 dark:text-white/60 mb-2'>
                            <span>{currentStep}</span>
                            <span>{progress}%</span>
                          </div>
                          <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden'>
                            <motion.div
                              className='h-full bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full'
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

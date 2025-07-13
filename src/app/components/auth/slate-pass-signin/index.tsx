'use client'

import { useState } from 'react'
import { useSlatePass } from '../../../../contexts/SlatePassContext'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SlatePassSignIn() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  const { signIn, signUp, resetPassword } = useSlatePass()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      if (isSignUp) {
        const { error } = await signUp(formData.email, formData.password, formData.name)
        if (error) {
          setError(error.message)
        } else {
          setSuccess('Check your email to confirm your Slate Pass account!')
        }
      } else {
        const { error } = await signIn(formData.email, formData.password)
        if (error) {
          setError(error.message)
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordReset = async () => {
    if (!formData.email) {
      setError('Please enter your email address first.')
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      const { error } = await resetPassword(formData.email)
      if (error) {
        setError(error.message)
      } else {
        setSuccess('Password reset email sent! Check your inbox.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='relative w-full pt-44 2xl:pb-20 pb-10 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-emerald-50/50 dark:from-purple-950/20 dark:via-black dark:to-emerald-950/20'></div>
      <div className='absolute top-24 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse'></div>
      
      <div className='container relative z-10'>
        <div className='flex justify-center items-center min-h-[70vh]'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='w-full max-w-lg'>
            
            {/* Slate Pass Header */}
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center gap-3 mb-8'>
                <h1 className='text-4xl font-bold text-dark_black dark:text-white'>
                  Slate Pass
                </h1>
              </div>
              <p className='text-lg text-dark_black/70 dark:text-white/70'>
                {isSignUp ? 'Create your Slate Pass account' : 'Sign in to your Slate Pass'}
              </p>
            </div>

            {/* Form */}
            <div className='bg-white/80 dark:bg-dark_black/80 backdrop-blur-xl rounded-3xl p-10 border border-white/30 dark:border-white/10 shadow-2xl'>
              <form onSubmit={handleSubmit} className='space-y-8'>
                {isSignUp && (
                  <div>
                    <label className='block text-sm font-semibold text-dark_black dark:text-white mb-3'>
                      Full Name
                    </label>
                    <div className='relative'>
                      <User size={20} className='absolute left-4 top-1/2 transform -translate-y-1/2 text-dark_black/40 dark:text-white/40' />
                      <input
                        type='text'
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className='w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none transition-all duration-300'
                        placeholder='Enter your full name'
                        required={isSignUp}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className='block text-sm font-semibold text-dark_black dark:text-white mb-3'>
                    Email Address
                  </label>
                  <div className='relative'>
                    <Mail size={20} className='absolute left-4 top-1/2 transform -translate-y-1/2 text-dark_black/40 dark:text-white/40' />
                    <input
                      type='email'
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className='w-full pl-12 pr-4 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none transition-all duration-300'
                      placeholder='Enter your email'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-dark_black dark:text-white mb-3'>
                    Password
                  </label>
                  <div className='relative'>
                    <Lock size={20} className='absolute left-4 top-1/2 transform -translate-y-1/2 text-dark_black/40 dark:text-white/40' />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className='w-full pl-12 pr-12 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none transition-all duration-300'
                      placeholder='Enter your password'
                      required
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-4 top-1/2 transform -translate-y-1/2 text-dark_black/40 dark:text-white/40 hover:text-dark_black dark:hover:text-white transition-colors'>
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className='p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-2xl'>
                    <p className='text-red-600 dark:text-red-400 text-sm'>{error}</p>
                  </div>
                )}

                {success && (
                  <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-2xl'>
                    <p className='text-emerald-600 dark:text-emerald-400 text-sm'>{success}</p>
                  </div>
                )}

                <button
                  type='submit'
                  disabled={loading}
                  className='w-full bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold py-4 rounded-2xl hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'>
                  {loading ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                      {isSignUp ? 'Creating Account...' : 'Signing In...'}
                    </>
                  ) : (
                    <>
                      {isSignUp ? 'Create Slate Pass' : 'Sign In'}
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>

              {/* Additional Actions */}
              <div className='mt-8 space-y-6'>
                {!isSignUp && (
                  <button
                    onClick={handlePasswordReset}
                    disabled={loading}
                    className='w-full text-purple-600 dark:text-purple-400 text-sm hover:underline transition-colors'>
                    Forgot your password?
                  </button>
                )}
                
                <div className='text-center'>
                  <button
                    onClick={() => {
                      setIsSignUp(!isSignUp)
                      setError('')
                      setSuccess('')
                    }}
                    className='text-dark_black/70 dark:text-white/70 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
                    {isSignUp ? 'Already have a Slate Pass? Sign in' : "Don't have a Slate Pass? Create one"}
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className='text-center mt-10'>
              <p className='text-sm text-dark_black/60 dark:text-white/60'>
                By continuing, you agree to our{' '}
                <Link href='/terms-and-conditions' className='text-purple-600 dark:text-purple-400 hover:underline'>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href='/privacy-policy' className='text-purple-600 dark:text-purple-400 hover:underline'>
                  Privacy Policy
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
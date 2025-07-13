'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, Clock, CheckCircle } from 'lucide-react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showEngagingLoader, setShowEngagingLoader] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [eta, setEta] = useState(3)

  const thankYouMessages = [
    "Thank you for your patience",
    "We're crafting something special for you",
    "Almost there, just a moment more",
    "Preparing your premium experience",
    "Your journey with Slate begins now"
  ]

  const etaMessages = [
    "Just a few seconds...",
    "Almost ready...",
    "Final touches...",
    "Launching now..."
  ]

  useEffect(() => {
    // Quick loading threshold - if it's fast, don't show progress
    const quickLoadThreshold = 800 // 800ms
    let quickLoadTimer: NodeJS.Timeout
    let engagingLoadTimer: NodeJS.Timeout

    // Start quick load timer
    quickLoadTimer = setTimeout(() => {
      // If still loading after 800ms, switch to engaging loader
      setShowEngagingLoader(true)
      
      // Start engaging loading experience
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + Math.random() * 15 + 5
        })
      }, 200)

      // Cycle through thank you messages
      const messageInterval = setInterval(() => {
        setCurrentMessage(prev => (prev + 1) % thankYouMessages.length)
      }, 1500)

      // Update ETA
      const etaInterval = setInterval(() => {
        setEta(prev => Math.max(0, prev - 0.5))
      }, 500)

      // Complete loading after realistic time
      engagingLoadTimer = setTimeout(() => {
        setIsLoaded(true)
        clearInterval(progressInterval)
        clearInterval(messageInterval)
        clearInterval(etaInterval)
      }, 3000)

      return () => {
        clearInterval(progressInterval)
        clearInterval(messageInterval)
        clearInterval(etaInterval)
        clearTimeout(engagingLoadTimer)
      }
    }, quickLoadThreshold)

    // If loading completes quickly, just finish
    const fastLoadTimer = setTimeout(() => {
      setIsLoaded(true)
      clearTimeout(quickLoadTimer)
    }, 100)

    return () => {
      clearTimeout(quickLoadTimer)
      clearTimeout(fastLoadTimer)
      clearTimeout(engagingLoadTimer)
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50/50 via-white to-emerald-50/50 dark:from-purple-950/20 dark:via-black dark:to-emerald-950/20">
        <div className="flex items-center justify-center min-h-screen">
          {!showEngagingLoader ? (
            // Quick, simple loading for fast loads
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-4"
              >
                <Heart className="w-10 h-10 text-purple-600 mx-auto" fill="currentColor" />
              </motion.div>
              <p className="text-sm text-dark_black/60 dark:text-white/60">
                Loading Slate...
              </p>
            </motion.div>
          ) : (
            // Engaging loading experience for slower loads
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-md mx-auto px-6"
            >
              {/* Animated heart icon */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-6"
              >
                <Heart className="w-12 h-12 text-purple-600 mx-auto" fill="currentColor" />
              </motion.div>

              {/* Thank you message */}
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-semibold text-dark_black dark:text-white mb-4"
                >
                  {thankYouMessages[currentMessage]}
                </motion.h2>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-dark_black/60 dark:text-white/60 mb-2">
                  <span>Loading your experience</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* ETA and status */}
              <div className="flex items-center justify-center gap-2 text-sm text-dark_black/70 dark:text-white/70">
                <Clock className="w-4 h-4" />
                <span>
                  {eta > 0 ? `${etaMessages[Math.floor(eta)]} (${Math.ceil(eta)}s)` : 'Launching...'}
                </span>
              </div>

              {/* Subtle sparkles animation */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
              </motion.div>
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-1/4 right-1/4"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
} 
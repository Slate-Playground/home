'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SigninPage() {
  const router = useRouter()

  useEffect(() => {
    router.push('/slate-pass')
  }, [router])

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex items-center gap-3'>
        <div className='w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin'></div>
        <span className='text-dark_black dark:text-white'>Redirecting to Slate Pass...</span>
      </div>
    </div>
  )
}

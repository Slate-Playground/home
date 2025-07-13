'use client'

import { useSlatePass } from '../../../contexts/SlatePassContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'

interface ProtectedRouteProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { user: slatePassUser, loading: slatePassLoading } = useSlatePass()
  const router = useRouter()

  const isLoading = slatePassLoading
  const isAuthenticated = slatePassUser

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/slate-pass')
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='flex items-center gap-3'>
          <Loader2 size={24} className='animate-spin text-purple-600' />
          <span className='text-dark_black dark:text-white'>Loading...</span>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return fallback || null
  }

  return <>{children}</>
} 
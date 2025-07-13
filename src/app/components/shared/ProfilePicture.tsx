'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProfilePictureProps {
  user?: {
    display_name?: string | null
    username?: string | null
    email?: string | null
    avatar_url?: string | null
  }
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const ProfilePicture = ({ user, size = 'md', className = '' }: ProfilePictureProps) => {
  const [imageError, setImageError] = useState(false)
  
  // Get initials from user data
  const getInitials = () => {
    if (user?.display_name) {
      return user.display_name
        .split(' ')
        .map(name => name.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    if (user?.username) {
      return user.username.charAt(0).toUpperCase()
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase()
    }
    return 'U'
  }

  // Generate gradient based on name
  const getGradient = () => {
    const name = user?.display_name || user?.username || user?.email || 'user'
    const hash = name.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-emerald-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-pink-500 to-rose-500',
      'from-cyan-500 to-blue-500',
      'from-teal-500 to-emerald-500',
      'from-red-500 to-orange-500',
      'from-violet-500 to-purple-500'
    ]
    
    return gradients[Math.abs(hash) % gradients.length]
  }

  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-2xl'
  }

  // If user has avatar URL and no image error, show image
  if (user?.avatar_url && !imageError) {
    return (
      <div className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
        <Image
          src={user.avatar_url}
          alt={user.display_name || 'Profile picture'}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  // Otherwise show gradient with initials
  return (
    <div 
      className={`relative rounded-full bg-gradient-to-br ${getGradient()} flex items-center justify-center text-white font-semibold ${sizeClasses[size]} ${className}`}
    >
      <span className="select-none">{getInitials()}</span>
    </div>
  )
}

export default ProfilePicture 
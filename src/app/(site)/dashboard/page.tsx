'use client'

import { useSlatePass } from '../../../contexts/SlatePassContext'
import ProtectedRoute from '../../components/auth/ProtectedRoute'
import { motion } from 'framer-motion'
import { 
  User, 
  Mail, 
  Calendar, 
  Settings, 
  LogOut, 
  Smartphone, 
  Clock, 
  Users, 
  Bell, 
  Shield, 
  Download,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  MapPin,
  Phone,
  Briefcase,
  Activity,
  Monitor,
  Zap,
  TrendingUp,
  Eye,
  MessageSquare
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import Logo from '../../components/layout/header/Logo'
import ProfilePicture from '../../components/shared/ProfilePicture'

export default function DashboardPage() {
  const { 
    user: slatePassUser, 
    userProfile, 
    userSettings,
    userSessions,
    userActivities,
    userApps,
    userRatings,
    dashboardStats,
    refreshUserData,
    signOut: slatePassSignOut 
  } = useSlatePass()
  const router = useRouter()

  const handleSignOut = () => {
    slatePassSignOut()
    router.push('/')
  }

  const handleRefresh = async () => {
    await refreshUserData()
  }

  // Calculate dynamic data based on user profile and real data
  const getWaitlistPosition = () => {
    if (!userProfile?.created_at) return 1247
    const createdAt = new Date(userProfile.created_at)
    const now = new Date()
    const daysSinceCreation = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24))
    // Simulate waitlist position based on join date (earlier = better position)
    return Math.max(1, 2000 - daysSinceCreation * 10)
  }

  const getEstimatedShipDate = () => {
    const position = getWaitlistPosition()
    if (position <= 100) return 'Q1 2024'
    if (position <= 500) return 'Q2 2024'
    if (position <= 1000) return 'Q3 2024'
    return 'Q4 2024'
  }

  const getDeviceStatus = () => {
    if (!userProfile) return 'Pending Profile'
    if (!userProfile.display_name) return 'Profile Incomplete'
    return 'Ready for Launch'
  }

  const getTier = () => {
    const position = getWaitlistPosition()
    if (position <= 100) return 'Founder'
    if (position <= 500) return 'Early Access'
    if (position <= 1000) return 'Beta Tester'
    return 'Waitlist'
  }

  // Check if we're in static export mode
  const isStaticExport = typeof window === 'undefined' || !process.env.NEXT_PUBLIC_SUPABASE_URL

  const dashboardData = {
    waitlistPosition: getWaitlistPosition(),
    totalWaitlist: 15420,
    estimatedShipDate: getEstimatedShipDate(),
    deviceStatus: getDeviceStatus(),
    tier: getTier(),
    notifications: isStaticExport ? 0 : (dashboardStats.totalActivities || 0),
    lastActive: isStaticExport ? 'Demo Mode' : (dashboardStats.lastActivity ? 
      new Date(dashboardStats.lastActivity).toLocaleDateString() : 
      'Never')
  }

  const quickActions = [
    {
      title: 'Complete Profile',
      description: userProfile?.display_name ? 'Profile complete' : 'Add your details',
      icon: userProfile?.display_name ? CheckCircle : User,
      action: () => console.log('Complete profile'),
      disabled: !!userProfile?.display_name
    },
    {
      title: 'Update Preferences',
      description: 'Manage your Slate Link settings',
      icon: Settings,
      action: () => console.log('Update preferences')
    },
    {
      title: 'View Timeline',
      description: 'See development progress',
      icon: Clock,
      action: () => console.log('View timeline')
    },
    {
      title: 'Invite Friends',
      description: 'Share Slate Link with others',
      icon: Users,
      action: () => console.log('Invite friends')
    }
  ]

  const activityStats = [
    {
      title: 'Total Sessions',
      value: isStaticExport ? 'Demo' : dashboardStats.totalSessions,
      icon: Monitor,
      color: 'purple'
    },
    {
      title: 'Active Sessions',
      value: isStaticExport ? 'Demo' : dashboardStats.activeSessions,
      icon: Zap,
      color: 'emerald'
    },
    {
      title: 'Activities',
      value: isStaticExport ? 'Demo' : dashboardStats.totalActivities,
      icon: Activity,
      color: 'blue'
    },
    {
      title: 'Apps Rated',
      value: isStaticExport ? 'Demo' : dashboardStats.appsRated,
      icon: Star,
      color: 'amber'
    }
  ]

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
    <ProtectedRoute>
      <section className='relative w-full pt-32 2xl:pb-20 pb-10 overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-emerald-50/50 dark:from-purple-950/20 dark:via-black dark:to-emerald-950/20'></div>
        <div className='absolute top-24 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse'></div>
        
        <div className='container relative z-10'>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='max-w-7xl mx-auto'
          >
            {/* Header */}
            <motion.div variants={itemVariants} className='mb-8'>
              <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
                <div className='flex-1'>
                  <div className='flex items-center gap-4 mb-4'>
                    <ProfilePicture 
                      user={userProfile ?? {}} 
                      size="lg" 
                      className="shadow-lg"
                    />
                    <div>
                      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-dark_black dark:text-white'>
                        Welcome back,{' '}
                        <span className='text-purple-600 dark:text-purple-400'>
                          {userProfile?.display_name || slatePassUser?.user_metadata?.name || 'Slate User'}
                        </span>
                      </h1>
                      <p className='text-base md:text-lg text-dark_black/70 dark:text-white/70'>
                        Your Slate Link journey continues here
                      </p>
                    </div>
                  </div>
                  {isStaticExport && (
                    <div className='flex items-center gap-2 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 rounded-full w-fit'>
                      <AlertCircle className='w-4 h-4 text-amber-600 dark:text-amber-400' />
                      <span className='text-sm font-medium text-amber-600 dark:text-amber-400'>
                        Demo Mode - Static Export
                      </span>
                    </div>
                  )}
                </div>
                
                <div className='flex items-center gap-3 flex-wrap'>
                  <button
                    onClick={handleRefresh}
                    className='flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300'
                  >
                    <ArrowRight className='w-4 h-4 text-blue-600 dark:text-blue-400 rotate-90' />
                    <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                      Refresh
                    </span>
                  </button>
                  
                  <div className='flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full'>
                    <Bell className='w-4 h-4 text-purple-600 dark:text-purple-400' />
                    <span className='text-sm font-medium text-purple-600 dark:text-purple-400'>
                      {dashboardData.notifications} new
                    </span>
                  </div>
                  
                  <button
                    onClick={handleSignOut}
                    className='flex items-center gap-2 px-4 py-2 text-dark_black/70 dark:text-white/70 hover:text-dark_black dark:hover:text-white transition-colors duration-300'
                  >
                    <LogOut className='w-4 h-4' />
                    <span className='text-sm'>Sign Out</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Main Dashboard Grid */}
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8'>
              {/* Waitlist Status Card */}
              <motion.div variants={itemVariants} className='xl:col-span-2'>
                <div className='bg-white dark:bg-dark_black rounded-3xl p-6 md:p-8 border border-white/50 dark:border-white/10 shadow-xl h-full'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>
                    <h2 className='text-xl md:text-2xl font-bold text-dark_black dark:text-white'>
                      Your Waitlist Status
                    </h2>
                    <div className='flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-fit'>
                      <CheckCircle className='w-4 h-4 text-emerald-600 dark:text-emerald-400' />
                      <span className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>
                        {dashboardData.tier}
                      </span>
                    </div>
                  </div>
                  
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6'>
                    <div className='text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                      <div className='text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1'>
                        #{dashboardData.waitlistPosition}
                      </div>
                      <div className='text-xs md:text-sm text-dark_black/60 dark:text-white/60'>
                        Your Position
                      </div>
                    </div>
                    <div className='text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                      <div className='text-2xl md:text-3xl font-bold text-dark_black dark:text-white mb-1'>
                        {dashboardData.totalWaitlist.toLocaleString()}
                      </div>
                      <div className='text-xs md:text-sm text-dark_black/60 dark:text-white/60'>
                        Total Waitlist
                      </div>
                    </div>
                    <div className='text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                      <div className='text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1'>
                        {dashboardData.estimatedShipDate}
                      </div>
                      <div className='text-xs md:text-sm text-dark_black/60 dark:text-white/60'>
                        Estimated Ship
                      </div>
                    </div>
                  </div>
                  
                  <div className='bg-gray-100 dark:bg-gray-800 rounded-2xl p-4'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='text-sm font-medium text-dark_black dark:text-white'>
                        Progress to Launch
                      </span>
                      <span className='text-sm text-dark_black/60 dark:text-white/60'>
                        {Math.round((dashboardData.waitlistPosition / dashboardData.totalWaitlist) * 100)}%
                      </span>
                    </div>
                    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3'>
                      <div 
                        className='bg-gradient-to-r from-purple-600 to-emerald-600 h-3 rounded-full transition-all duration-1000'
                        style={{ width: `${Math.min((dashboardData.waitlistPosition / dashboardData.totalWaitlist) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Device Status Card */}
              <motion.div variants={itemVariants}>
                <div className='bg-white dark:bg-dark_black rounded-3xl p-6 md:p-8 border border-white/50 dark:border-white/10 shadow-xl h-full'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl'>
                      <Smartphone className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                    </div>
                    <h2 className='text-xl font-bold text-dark_black dark:text-white'>
                      Slate Link Status
                    </h2>
                  </div>
                  
                  <div className='space-y-4 mb-6'>
                    <div className='flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
                      <span className='text-sm text-dark_black/60 dark:text-white/60'>Status</span>
                      <span className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>
                        {dashboardData.deviceStatus}
                      </span>
                    </div>
                    <div className='flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
                      <span className='text-sm text-dark_black/60 dark:text-white/60'>Last Active</span>
                      <span className='text-sm font-medium text-dark_black dark:text-white'>
                        {dashboardData.lastActive}
                      </span>
                    </div>
                    <div className='flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
                      <span className='text-sm text-dark_black/60 dark:text-white/60'>Tier</span>
                      <span className='text-sm font-medium text-purple-600 dark:text-purple-400'>
                        {dashboardData.tier}
                      </span>
                    </div>
                  </div>
                  
                  <button className='w-full bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold py-3 rounded-2xl hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
                    <Download className='w-4 h-4' />
                    Download SlateOS
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className='mb-8'>
              <h2 className='text-xl md:text-2xl font-bold text-dark_black dark:text-white mb-6'>
                Quick Actions
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    onClick={action.action}
                    disabled={action.disabled}
                    whileHover={action.disabled ? {} : { scale: 1.02 }}
                    whileTap={action.disabled ? {} : { scale: 0.95 }}
                    className={`bg-white dark:bg-dark_black rounded-3xl p-6 border border-white/50 dark:border-white/10 shadow-xl transition-all duration-300 text-left group ${
                      action.disabled 
                        ? 'opacity-60 cursor-not-allowed' 
                        : 'hover:shadow-2xl hover:shadow-purple-500/10'
                    }`}
                  >
                    <div className='flex items-center gap-4'>
                      <div className={`p-3 rounded-2xl transition-colors duration-300 ${
                        action.disabled
                          ? 'bg-emerald-100 dark:bg-emerald-900/30'
                          : 'bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50'
                      }`}>
                        <action.icon className={`w-6 h-6 ${
                          action.disabled
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-purple-600 dark:text-purple-400'
                        }`} />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-semibold text-dark_black dark:text-white mb-1 truncate'>
                          {action.title}
                        </h3>
                        <p className='text-sm text-dark_black/60 dark:text-white/60 line-clamp-2'>
                          {action.description}
                        </p>
                      </div>
                      {!action.disabled && (
                        <ArrowRight className='w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0' />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Activity Stats */}
            <motion.div variants={itemVariants} className='mb-8'>
              <h2 className='text-xl md:text-2xl font-bold text-dark_black dark:text-white mb-6'>
                Activity Stats
              </h2>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {activityStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className='bg-white dark:bg-dark_black rounded-3xl p-6 border border-white/50 dark:border-white/10 shadow-xl flex flex-col items-center justify-center text-center'
                  >
                    <div className={`p-3 rounded-2xl mb-4 ${
                      stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                      stat.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                      stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                      'bg-amber-100 dark:bg-amber-900/30'
                    }`}>
                      <stat.icon className={`w-8 h-8 ${
                        stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                        stat.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                        stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        'text-amber-600 dark:text-amber-400'
                      }`} />
                    </div>
                    <div className='font-bold text-2xl md:text-3xl text-dark_black dark:text-white mb-2'>
                      {stat.value}
                    </div>
                    <div className='text-xs md:text-sm text-dark_black/60 dark:text-white/60'>
                      {stat.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div variants={itemVariants} className='mb-8'>
              <div className='bg-white dark:bg-dark_black rounded-3xl p-6 md:p-8 border border-white/50 dark:border-white/10 shadow-xl'>
                <h2 className='text-xl md:text-2xl font-bold text-dark_black dark:text-white mb-6'>
                  Recent Activities
                </h2>
                <div className='space-y-3'>
                  {userActivities.slice(0, 5).map((activity, index) => (
                    <div key={index} className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                      <div className='p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex-shrink-0'>
                        <Activity className='w-4 h-4 text-purple-600 dark:text-purple-400' />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='font-medium text-dark_black dark:text-white truncate'>
                          {activity.activity_type}
                        </div>
                        <div className='text-sm text-dark_black/60 dark:text-white/60'>
                          {new Date(activity.created_at).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  {userActivities.length === 0 && (
                    <div className='text-center py-8 text-dark_black/60 dark:text-white/60'>
                      No recent activities
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* User Sessions */}
            <motion.div variants={itemVariants} className='mb-8'>
              <div className='bg-white dark:bg-dark_black rounded-3xl p-6 md:p-8 border border-white/50 dark:border-white/10 shadow-xl'>
                <h2 className='text-xl md:text-2xl font-bold text-dark_black dark:text-white mb-6'>
                  Active Sessions
                </h2>
                <div className='space-y-3'>
                  {userSessions.filter(s => s.is_active).slice(0, 3).map((session, index) => (
                    <div key={index} className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                      <div className='p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex-shrink-0'>
                        <Monitor className='w-4 h-4 text-emerald-600 dark:text-emerald-400' />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='font-medium text-dark_black dark:text-white truncate'>
                          {session.device_info?.browser || 'Unknown Browser'}
                        </div>
                        <div className='text-sm text-dark_black/60 dark:text-white/60 truncate'>
                          {session.ip_address} • {new Date(session.last_activity).toLocaleString()}
                        </div>
                      </div>
                      <div className='w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0'></div>
                    </div>
                  ))}
                  {userSessions.filter(s => s.is_active).length === 0 && (
                    <div className='text-center py-8 text-dark_black/60 dark:text-white/60'>
                      No active sessions
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Account Information */}
            <motion.div variants={itemVariants}>
              <div className='bg-white dark:bg-dark_black rounded-3xl p-6 md:p-8 border border-white/50 dark:border-white/10 shadow-xl'>
                <h2 className='text-xl md:text-2xl font-bold text-dark_black dark:text-white mb-6'>
                  Account Information
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                    <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex-shrink-0'>
                      <User className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='text-sm text-dark_black/60 dark:text-white/60'>Display Name</div>
                      <div className='font-medium text-dark_black dark:text-white truncate'>
                        {userProfile?.display_name || 'Not provided'}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                    <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex-shrink-0'>
                      <Mail className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='text-sm text-dark_black/60 dark:text-white/60'>Email</div>
                      <div className='font-medium text-dark_black dark:text-white truncate'>
                        {userProfile?.email || slatePassUser?.email}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                    <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex-shrink-0'>
                      <User className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='text-sm text-dark_black/60 dark:text-white/60'>Username</div>
                      <div className='font-medium text-dark_black dark:text-white truncate'>
                        {userProfile?.username || 'Not provided'}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                    <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex-shrink-0'>
                      <MapPin className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='text-sm text-dark_black/60 dark:text-white/60'>Location</div>
                      <div className='font-medium text-dark_black dark:text-white truncate'>
                        {userProfile?.location || 'Not provided'}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                    <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex-shrink-0'>
                      <Calendar className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='text-sm text-dark_black/60 dark:text-white/60'>Member Since</div>
                      <div className='font-medium text-dark_black dark:text-white'>
                        {userProfile?.created_at ? new Date(userProfile.created_at).toLocaleDateString() : 'Unknown'}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
                    <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex-shrink-0'>
                      <Shield className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='text-sm text-dark_black/60 dark:text-white/60'>Account Status</div>
                      <div className='font-medium text-emerald-600 dark:text-emerald-400'>
                        {userProfile?.is_verified ? 'Verified' : 'Pending Verification'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ProtectedRoute>
  )
} 
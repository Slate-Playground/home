'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session, AuthChangeEvent } from '@supabase/supabase-js'
import { createClient } from '../lib/supabase'

// Comprehensive interfaces based on your Supabase schema
interface SlateUserProfile {
  id: string
  email: string
  username: string
  display_name: string
  avatar_url: string | null
  bio: string | null
  location: string | null
  website: string | null
  is_verified: boolean
  is_public: boolean
  created_at: string
  updated_at: string
  last_login: string | null
  login_count: number
}

interface UserProfile {
  id: string
  user_id: string
  theme_preference: string
  notification_settings: any
  privacy_settings: any
  created_at: string
  updated_at: string
}

interface UserSession {
  id: string
  user_id: string
  session_token: string
  device_info: any
  ip_address: string
  user_agent: string
  is_active: boolean
  created_at: string
  last_activity: string
}

interface UserActivity {
  id: string
  user_id: string
  activity_type: string
  activity_data: any
  ip_address: string
  user_agent: string
  created_at: string
}

interface App {
  id: string
  name: string
  description: string
  icon_url: string | null
  category: string
  is_active: boolean
  version: string
  created_at: string
  updated_at: string
}

interface Rating {
  id: string
  user_id: string
  app_id: string
  rating: number
  review: string | null
  created_at: string
  updated_at: string
}

interface DashboardStats {
  totalSessions: number
  activeSessions: number
  totalActivities: number
  appsRated: number
  averageRating: number
  lastActivity: string | null
}

interface SlatePassContextType {
  user: User | null
  userProfile: SlateUserProfile | null
  userSettings: UserProfile | null
  userSessions: UserSession[]
  userActivities: UserActivity[]
  userApps: App[]
  userRatings: Rating[]
  dashboardStats: DashboardStats
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, name: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: any }>
  updateProfile: (updates: Partial<SlateUserProfile>) => Promise<{ error: any }>
  updateSettings: (updates: Partial<UserProfile>) => Promise<{ error: any }>
  fetchUserData: (userId: string) => Promise<void>
  refreshUserData: () => Promise<void>
}

const SlatePassContext = createContext<SlatePassContextType | undefined>(undefined)

export function SlatePassProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<SlateUserProfile | null>(null)
  const [userSettings, setUserSettings] = useState<UserProfile | null>(null)
  const [userSessions, setUserSessions] = useState<UserSession[]>([])
  const [userActivities, setUserActivities] = useState<UserActivity[]>([])
  const [userApps, setUserApps] = useState<App[]>([])
  const [userRatings, setUserRatings] = useState<Rating[]>([])
  const [dashboardStats, setDashboardStats] = useState<DashboardStats>({
    totalSessions: 0,
    activeSessions: 0,
    totalActivities: 0,
    appsRated: 0,
    averageRating: 0,
    lastActivity: null
  })
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabase, setSupabase] = useState<ReturnType<typeof createClient> | null>(null)

  // Initialize Supabase client lazily to avoid issues during static generation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSupabase(createClient())
    }
  }, [])

  // Fetch user profile from slate_pass_users table
  const fetchUserProfile = async (userId: string) => {
    if (!supabase) return null
    
    try {
      const { data, error } = await supabase
        .from('slate_pass_users')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching user profile:', error)
        return null
      }

      return data as SlateUserProfile
    } catch (error) {
      console.error('Error fetching user profile:', error)
      return null
    }
  }

  // Create user profile in slate_pass_users table
  const createUserProfile = async (userId: string, email: string, name: string) => {
    if (!supabase) return null
    
    try {
      const { data, error } = await supabase
        .from('slate_pass_users')
        .insert([
          {
            id: userId,
            email: email,
            username: email.split('@')[0], // Use email prefix as username
            display_name: name,
            location: null,
            bio: null,
            avatar_url: null,
            website: null,
            is_verified: false,
            is_public: true,
            login_count: 0
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Error creating user profile:', error)
        return null
      }

      return data as SlateUserProfile
    } catch (error) {
      console.error('Error creating user profile:', error)
      return null
    }
  }

  // Fetch user settings from user_profiles table
  const fetchUserSettings = async (userId: string) => {
    if (!supabase) return null
    
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single()

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error fetching user settings:', error)
        return null
      }

      return data as UserProfile
    } catch (error) {
      console.error('Error fetching user settings:', error)
      return null
    }
  }

  // Fetch user sessions from user_sessions table
  const fetchUserSessions = async (userId: string) => {
    if (!supabase) return []
    
    try {
      const { data, error } = await supabase
        .from('user_sessions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) {
        if (error.code === 'PGRST116') {
          console.warn('User sessions table not found, using demo data')
          return []
        }
        if (error.code === '42501') {
          console.warn('No permission to access user_sessions table, using demo data')
          return []
        }
        console.error('Error fetching user sessions:', error)
        return []
      }

      return data as UserSession[]
    } catch (error) {
      console.error('Error fetching user sessions:', error)
      return []
    }
  }

  // Fetch user activities from user_activity table
  const fetchUserActivities = async (userId: string) => {
    if (!supabase) return []
    
    try {
      const { data, error } = await supabase
        .from('user_activity')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(50) // Limit to recent activities

      if (error) {
        if (error.code === 'PGRST116') {
          console.warn('User activity table not found, using demo data')
          return []
        }
        if (error.code === '42501') {
          console.warn('No permission to access user_activity table, using demo data')
          return []
        }
        console.error('Error fetching user activities:', error)
        return []
      }

      return data as UserActivity[]
    } catch (error) {
      console.error('Error fetching user activities:', error)
      return []
    }
  }

  // Fetch apps from apps table
  const fetchApps = async () => {
    if (!supabase) return []
    
    try {
      const { data, error } = await supabase
        .from('apps')
        .select('*')
        .eq('is_active', true)
        .order('name', { ascending: true })

      if (error) {
        // Handle specific error cases
        if (error.code === 'PGRST116') {
          // Table doesn't exist or no data
          console.warn('Apps table not found or empty, using demo data')
          return []
        }
        if (error.code === '42501') {
          // Permission denied
          console.warn('No permission to access apps table, using demo data')
          return []
        }
        console.error('Error fetching apps:', error)
        return []
      }

      return data as App[]
    } catch (error) {
      console.error('Error fetching apps:', error)
      return []
    }
  }

  // Fetch user ratings from ratings table
  const fetchUserRatings = async (userId: string) => {
    if (!supabase) return []
    
    try {
      const { data, error } = await supabase
        .from('ratings')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) {
        if (error.code === 'PGRST116') {
          console.warn('Ratings table not found, using demo data')
          return []
        }
        if (error.code === '42501') {
          console.warn('No permission to access ratings table, using demo data')
          return []
        }
        console.error('Error fetching user ratings:', error)
        return []
      }

      return data as Rating[]
    } catch (error) {
      console.error('Error fetching user ratings:', error)
      return []
    }
  }

  // Calculate dashboard statistics
  const calculateDashboardStats = (
    sessions: UserSession[],
    activities: UserActivity[],
    ratings: Rating[]
  ): DashboardStats => {
    const activeSessions = sessions.filter(s => s.is_active).length
    const averageRating = ratings.length > 0 
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length 
      : 0

    return {
      totalSessions: sessions.length,
      activeSessions,
      totalActivities: activities.length,
      appsRated: ratings.length,
      averageRating: Math.round(averageRating * 10) / 10,
      lastActivity: activities[0]?.created_at || null
    }
  }

  // Fetch all user data
  const fetchUserData = async (userId: string) => {
    try {
      // Check if we're in a static export environment
      if (typeof window === 'undefined') {
        console.warn('Running in static export mode - some features may be limited')
        return
      }

      const [profile, settings, sessions, activities, apps, ratings] = await Promise.all([
        fetchUserProfile(userId),
        fetchUserSettings(userId),
        fetchUserSessions(userId),
        fetchUserActivities(userId),
        fetchApps(),
        fetchUserRatings(userId)
      ])

      setUserProfile(profile)
      setUserSettings(settings)
      setUserSessions(sessions)
      setUserActivities(activities)
      setUserApps(apps)
      setUserRatings(ratings)
      setDashboardStats(calculateDashboardStats(sessions, activities, ratings))
    } catch (error) {
      console.error('Error fetching user data:', error)
      // In static export, we might not have access to all tables
      // Set default values to prevent errors
      setUserSessions([])
      setUserActivities([])
      setUserApps([])
      setUserRatings([])
      setDashboardStats({
        totalSessions: 0,
        activeSessions: 0,
        totalActivities: 0,
        appsRated: 0,
        averageRating: 0,
        lastActivity: null
      })
    }
  }

  // Manual refresh function for real-time updates
  const refreshUserData = async () => {
    if (user) {
      await fetchUserData(user.id)
    }
  }

  useEffect(() => {
    if (!supabase) return

    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setUser(session?.user ?? null)
      
      // Fetch user profile if user exists
      if (session?.user) {
        const profile = await fetchUserProfile(session.user.id)
        setUserProfile(profile)
        await fetchUserData(session.user.id) // Fetch all user data for the initial session
      }
      
      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        setSession(session)
        setUser(session?.user ?? null)
        
        if (session?.user) {
          // Fetch or create user profile
          let profile = await fetchUserProfile(session.user.id)
          
          // If profile doesn't exist, create one
          if (!profile && event === 'SIGNED_IN') {
            profile = await createUserProfile(
              session.user.id,
              session.user.email!,
              session.user.user_metadata?.name || session.user.email!.split('@')[0]
            )
          }
          
          setUserProfile(profile)
          await fetchUserData(session.user.id) // Fetch all user data for the new session
        } else {
          setUserProfile(null)
          setUserSettings(null)
          setUserSessions([])
          setUserActivities([])
          setUserApps([])
          setUserRatings([])
          setDashboardStats({
            totalSessions: 0,
            activeSessions: 0,
            totalActivities: 0,
            appsRated: 0,
            averageRating: 0,
            lastActivity: null
          })
        }
        
        setLoading(false)
      }
    )

    // Set up real-time subscriptions for user data
    let userProfileSubscription: any = null
    let userActivitySubscription: any = null
    let userSessionSubscription: any = null

    const setupRealtimeSubscriptions = async () => {
      if (!supabase) return
      
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        // Subscribe to user profile changes
        userProfileSubscription = supabase
          .channel('user_profile_changes')
          .on(
            'postgres_changes',
            {
              event: '*',
              schema: 'public',
              table: 'slate_pass_users',
              filter: `id=eq.${user.id}`
            },
            async (payload: any) => {
              console.log('User profile updated:', payload)
              const updatedProfile = await fetchUserProfile(user.id)
              setUserProfile(updatedProfile)
            }
          )
          .subscribe()

        // Subscribe to user activity changes
        userActivitySubscription = supabase
          .channel('user_activity_changes')
          .on(
            'postgres_changes',
            {
              event: '*',
              schema: 'public',
              table: 'user_activity',
              filter: `user_id=eq.${user.id}`
            },
            async (payload: any) => {
              console.log('User activity updated:', payload)
              const updatedActivities = await fetchUserActivities(user.id)
              setUserActivities(updatedActivities)
              // Recalculate dashboard stats
              const sessions = await fetchUserSessions(user.id)
              const ratings = await fetchUserRatings(user.id)
              setDashboardStats(calculateDashboardStats(sessions, updatedActivities, ratings))
            }
          )
          .subscribe()

        // Subscribe to user session changes
        userSessionSubscription = supabase
          .channel('user_session_changes')
          .on(
            'postgres_changes',
            {
              event: '*',
              schema: 'public',
              table: 'user_sessions',
              filter: `user_id=eq.${user.id}`
            },
            async (payload: any) => {
              console.log('User session updated:', payload)
              const updatedSessions = await fetchUserSessions(user.id)
              setUserSessions(updatedSessions)
              // Recalculate dashboard stats
              const activities = await fetchUserActivities(user.id)
              const ratings = await fetchUserRatings(user.id)
              setDashboardStats(calculateDashboardStats(updatedSessions, activities, ratings))
            }
          )
          .subscribe()
      }
    }

    // Set up subscriptions after initial session load
    setTimeout(setupRealtimeSubscriptions, 1000)

    return () => {
      subscription.unsubscribe()
      if (userProfileSubscription) userProfileSubscription.unsubscribe()
      if (userActivitySubscription) userActivitySubscription.unsubscribe()
      if (userSessionSubscription) userSessionSubscription.unsubscribe()
    }
  }, [supabase.auth])

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { error: new Error('Supabase not initialized') }
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  const signUp = async (email: string, password: string, name: string) => {
    if (!supabase) return { error: new Error('Supabase not initialized') }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          full_name: name,
        }
      }
    })
    return { error }
  }

  const signOut = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
  }

  const resetPassword = async (email: string) => {
    if (!supabase) return { error: new Error('Supabase not initialized') }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { error }
  }

  const updateProfile = async (updates: Partial<SlateUserProfile>) => {
    if (!user) return { error: new Error('No user logged in') }
    if (!supabase) return { error: new Error('Supabase not initialized') }

    try {
      const { data, error } = await supabase
        .from('slate_pass_users')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single()

      if (error) {
        console.error('Error updating profile:', error)
        return { error }
      }

      setUserProfile(data as SlateUserProfile)
      return { error: null }
    } catch (error) {
      console.error('Error updating profile:', error)
      return { error }
    }
  }

  const updateSettings = async (updates: Partial<UserProfile>) => {
    if (!user) return { error: new Error('No user logged in') }
    if (!supabase) return { error: new Error('Supabase not initialized') }

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single()

      if (error) {
        console.error('Error updating settings:', error)
        return { error }
      }

      setUserSettings(data as UserProfile)
      return { error: null }
    } catch (error) {
      console.error('Error updating settings:', error)
      return { error }
    }
  }

  const value = {
    user,
    userProfile,
    userSettings,
    userSessions,
    userActivities,
    userApps,
    userRatings,
    dashboardStats,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
    updateSettings,
    fetchUserData,
    refreshUserData,
  }

  return (
    <SlatePassContext.Provider value={value}>
      {children}
    </SlatePassContext.Provider>
  )
}

export function useSlatePass() {
  const context = useContext(SlatePassContext)
  if (context === undefined) {
    throw new Error('useSlatePass must be used within a SlatePassProvider')
  }
  return context
} 
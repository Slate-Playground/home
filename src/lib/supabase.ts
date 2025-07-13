import { createBrowserClient } from '@supabase/ssr'

let supabaseClient: ReturnType<typeof createBrowserClient> | null = null

export function createClient() {
  if (supabaseClient) {
    return supabaseClient
  }

  // Hardcoded Supabase configuration (safe to expose - these are public keys)
  const supabaseUrl = 'https://vibnwcdfwcevljszkzbv.supabase.co'
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYm53Y2Rmd2Nldmxqc3premJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMDg2NTQsImV4cCI6MjA2Nzg4NDY1NH0.uuYDTPljuFGlNH1mQKtW3hdoJquqpeLIhRULeShyIng'

  supabaseClient = createBrowserClient(supabaseUrl, supabaseAnonKey)
  return supabaseClient
} 
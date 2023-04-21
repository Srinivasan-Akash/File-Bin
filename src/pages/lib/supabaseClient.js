import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://daiwqgqerbxwhngqojdg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhaXdxZ3FlcmJ4d2huZ3FvamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5ODIxMzksImV4cCI6MTk5NzU1ODEzOX0.qQxPWLGvd-5E1EfU6UYodGkWODYvRkZe5w1stlYZSAo')
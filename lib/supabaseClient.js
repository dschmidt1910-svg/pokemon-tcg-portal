import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jjxlmasrjzcagmtdetcu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqeGxtYXNyanpjYWdtdGRldGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzODIxMDQsImV4cCI6MjA4Nzk1ODEwNH0.F1Ttffhy2FHtgP0GcetoiULzmfEepZHRG5UCTDM8-6w)'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

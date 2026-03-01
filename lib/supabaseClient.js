import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jjxlmasrjzcagmtdetcu.supabase.co/'
const supabaseAnonKey = 'sb_publishable_WNYvGKher-leQgUQtRlL5g_ZliyFqp0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

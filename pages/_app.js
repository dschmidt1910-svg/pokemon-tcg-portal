import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Prüfen, ob URL Magic Link Parameter enthält
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSessionFromUrl({ storeSession: true })
      if(error) console.log("Fehler beim Magic Link:", error.message)
      else if(data.session) console.log("User eingeloggt:", data.session.user.email)
    }

    handleAuth()
  }, [])

  return <Component {...pageProps} />
}

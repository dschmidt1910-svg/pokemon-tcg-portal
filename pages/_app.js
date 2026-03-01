import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // nur auf Client ausführen
    if (typeof window !== 'undefined') {
      supabase.auth.getSessionFromUrl({ storeSession: true })
        .then(({ data, error }) => {
          if(error) console.log("Fehler beim Magic Link:", error.message)
          else if(data.session) console.log("User eingeloggt:", data.session.user.email)
        })
    }
  }, [])

  return <Component {...pageProps} />
}

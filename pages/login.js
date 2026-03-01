import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Client-only
    if(typeof window !== 'undefined') {
      supabase.auth.getSessionFromUrl({ storeSession: true })
        .then(({ data, error }) => {
          if(error) setMessage("Fehler beim Magic Link: " + error.message)
          else if(data.session) setMessage("User eingeloggt: " + data.session.user.email)
        })
        .catch(err => console.log("Magic Link Fehler:", err))
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'https://pokemon-tcg-portal.vercel.app/cards'
      }
    })
    if(error) setMessage("Fehler: " + error.message)
    else setMessage("Check deine Mail für den Login-Link!")
  }

  return (
    <div style={{padding:40}}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="E-Mail" required style={{padding:8, marginRight:10}}/>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

'use client' // Next.js 13+ optional, falls App Router

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [message, setMessage] = useState('')

  // Client-only Magic Link Handling
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('access_token')) { // Supabase schickt access_token
        supabase.auth.getSessionFromUrl({ storeSession: true })
          .then(({ data, error }) => {
            if (error) setMessage("Fehler beim Magic Link: " + error.message)
            else if (data.session) setMessage("User eingeloggt: " + data.session.user.email)
          })
          .catch(err => console.log("Magic Link Fehler:", err))
      }
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
if (process.env.NODE_ENV === 'development') {
  // automatisch einen Test-User setzen
  setUser({ email: "test@pokemon.com", name: "Test User" });
  return;
}

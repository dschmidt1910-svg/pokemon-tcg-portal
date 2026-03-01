import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) setMessage('Fehler: ' + error.message)
    else setMessage('Check deine E-Mail für den Login-Link!')
  }

  return (
    <div style={{padding: 40}}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{padding: 8, marginRight: 10}}
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

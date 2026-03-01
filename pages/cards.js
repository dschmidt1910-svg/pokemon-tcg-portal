'use client' // Next.js 13+ App Router nur client

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Cards() {
  const [cards, setCards] = useState([
    { id: 1, name: "Pikachu", set: "Base Set", image: "https://images.pokemontcg.io/base1/58.png", have: false },
    { id: 2, name: "Glurak", set: "Base Set", image: "https://images.pokemontcg.io/base1/4.png", have: false },
    { id: 3, name: "Bisasam", set: "Base Set", image: "https://images.pokemontcg.io/base1/1.png", have: false }
  ])
  const [user, setUser] = useState(null)

  // Prüfen, ob User eingeloggt ist
  useEffect(() => {
    if(typeof window !== 'undefined') {
      supabase.auth.getUser().then(({ data }) => {
        if(data.user) setUser(data.user)
      })
    }
  }, [])

  // Kartenstatus toggle und Supabase speichern
  const toggleHave = async (id) => {
    if(!user) {
      alert("Bitte zuerst einloggen!")
      return
    }

    const newCards = cards.map(card => {
      if(card.id === id) card.have = !card.have
      return card
    })
    setCards(newCards)

    const { error } = await supabase
      .from('collection')
      .upsert({ card_id: id, have: newCards.find(c => c.id === id).have, user_id: user.id })

    if(error) console.log("Fehler beim Speichern:", error.message)
  }

  return (
    <div style={{padding: 40}}>
      <h1>Deutsche Pokémon Testkarten</h1>
      {!user && <p style={{color:'red'}}>Bitte erst <a href="/login">einloggen</a></p>}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))',
        gap:15
      }}>
        {cards.map(card => (
          <div key={card.id} style={{
            border:'1px solid #ccc',
            padding:10,
            borderRadius:10,
            background: card.have ? '#d4f7d4' : '#fff',
            cursor:'pointer'
          }} onClick={() => toggleHave(card.id)}>
            <img src={card.image} alt={card.name} style={{width:'100%', height:'150px', objectFit:'contain'}}/>
            <h3 style={{fontSize:'14px'}}>{card.name}</h3>
            <p style={{fontSize:'12px'}}>Set: {card.set}</p>
            <p style={{fontSize:'12px'}}>{card.have ? '✔ Habe ich' : 'Noch nicht'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

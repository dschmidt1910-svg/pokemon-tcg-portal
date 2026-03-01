import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Cards() {
  const [cards, setCards] = useState([
    { id: 1, name: "Pikachu", set: "Base Set", image: "https://images.pokemontcg.io/base1/58.png", have: false },
    { id: 2, name: "Glurak", set: "Base Set", image: "https://images.pokemontcg.io/base1/4.png", have: false },
    { id: 3, name: "Bisasam", set: "Base Set", image: "https://images.pokemontcg.io/base1/1.png", have: false }
  ])

  const toggleHave = (id) => {
    const newCards = cards.map(card => {
      if(card.id === id) card.have = !card.have
      return card
    })
    setCards(newCards)
  }

  return (
    <div style={{padding: 40}}>
      <h1>Deutsche Pokémon Testkarten (kleiner)</h1>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))', // kleiner als vorher
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

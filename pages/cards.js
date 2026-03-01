import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Cards() {
  const [cards, setCards] = useState([
    { id: 1, name: "Pikachu", set: "Base Set", image: "https://images.pokemontcg.io/base1/58.png", have: false },
    { id: 2, name: "Glurak", set: "Base Set", image: "https://images.pokemontcg.io/base1/4.png", have: false },
    { id: 3, name: "Bisasam", set: "Base Set", image: "https://images.pokemontcg.io/base1/1.png", have: false }
  ])

  const toggleHave = async (id) => {
    const newCards = cards.map(card => {
      if(card.id === id) card.have = !card.have
      return card
    })
    setCards(newCards)

    // ❗ Später hier Supabase speichern
    // await supabase.from('collection').upsert({ card_id: id, have: card.have })
  }

  return (
    <div style={{padding: 40}}>
      <h1>Deutsche Pokémon Karten (Test)</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(150px,1fr))', gap:20}}>
        {cards.map(card => (
          <div key={card.id} style={{
            border:'1px solid #ccc',
            padding:10,
            borderRadius:8,
            background: card.have ? '#d4f7d4' : '#fff',
            cursor:'pointer'
          }} onClick={() => toggleHave(card.id)}>
            <img src={card.image} alt={card.name} style={{width:'100

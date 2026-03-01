import { useEffect, useState } from 'react'

export default function Cards() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards?q=set.id:base1&orderBy=set.releaseDate&language:de')
      .then(res => res.json())
      .then(data => {
        setCards(data.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{padding: 40}}>
      <h1>Deutsche Pokémon Karten</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(150px,1fr))', gap:20}}>
        {cards.map(card => (
          <div key={card.id} style={{border:'1px solid #ccc', padding:10, borderRadius:8}}>
            <img src={card.images.small} alt={card.name} style={{width:'100%'}}/>
            <h3>{card.name}</h3>
            <p>Set: {card.set.name}</p>
            {card.cardmarket?.prices?.averageSellPrice && (
              <p>Preis: €{card.cardmarket.prices.averageSellPrice}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

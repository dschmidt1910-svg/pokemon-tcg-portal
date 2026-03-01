export default function Home() {
  const cards = [
    { id: 1, name: "Pikachu", set: "Base Set", image: "https://images.pokemontcg.io/base1/58.png" },
    { id: 2, name: "Glurak", set: "Base Set", image: "https://images.pokemontcg.io/base1/4.png" },
    { id: 3, name: "Bisasam", set: "Base Set", image: "https://images.pokemontcg.io/base1/1.png" }
  ];

  return (
    <div style={{padding: 40}}>
      <h1>Testkarten auf Startseite</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(150px,1fr))', gap:20}}>
        {cards.map(card => (
          <div key={card.id} style={{border:'1px solid #ccc', padding:10, borderRadius:8}}>
            <img src={card.image} alt={card.name} style={{width:'100%'}}/>
            <h3>{card.name}</h3>
            <p>Set: {card.set}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

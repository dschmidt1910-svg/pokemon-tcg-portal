import { supabase } from '../lib/supabaseClient'

export default function Home() {
  const cards = [
    { id: 1, name: "Pikachu", set: "Base Set", image: "https://images.pokemontcg.io/base1/58.png" },
    { id: 2, name: "Glurak", set: "Base Set", image: "https://images.pokemontcg.io/base1/4.png" },
    { id: 3, name: "Bisasam", set: "Base Set", image: "https://images.pokemontcg.io/base1/1.png" }
  ];

  return (
    <div style={{padding: 40}}>
      <h1>Deutsche Pokémon Testkarten</h1>

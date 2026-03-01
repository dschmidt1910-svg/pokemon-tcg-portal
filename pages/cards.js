import { useEffect, useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  const fetchCards = async () => {
    let query = "";

    if (search) query += name:${search} ;
    if (type) query += types:${type};

    const response = await fetch(
      https://api.pokemontcg.io/v2/cards?q=${query}&page=${page}&pageSize=20
    );

    const data = await response.json();
    setCards(data.data);
  };

  useEffect(() => {
    fetchCards();
  }, [search, type, page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pokémon Cards</h1>

      {/* 🔍 Suchfeld /}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/ 🔥 Typ Filter */}
      <select value={type} onChange={(e) =>setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
        <option value="Lightning">Lightning</option>
        <option value="Psychic">Psychic</option>
        <option value="Darkness">Darkness</option>
        <option value="Metal">Metal</option>
        <option value="Fairy">Fairy</option>
        <option value="Fighting">Fighting</option>
        <option value="Dragon">Dragon</option>
        <option value="Colorless">Colorless</option>
      </select>

      {/* 🃏 Karten Grid /}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px" }}>
        {cards.map((card) => (
          <div key={card.id}>
            <img
              src={card.images.small}
              alt={card.name}
              style={{ width: "100%" }}
            />
            <p>{card.name}</p>
          </div>
        ))}
      </div>

      {/ 📄 Pagination */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/books/random")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  function addFavorite() {
    const KEY = "@hp:favorites";
    const list = JSON.parse(localStorage.getItem(KEY)) || [];
    list.push(book);
    localStorage.setItem(KEY, JSON.stringify(list));

    alert("Livro adicionado aos favoritos!");
  }

  if (!book) return <p style={{ textAlign: "center" }}>Carregando...</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
      <img
        src={book.cover}
        style={{ width: 200, marginBottom: 10, cursor: "pointer" }}
        onClick={() => navigate("/detalhes", { state: { book } })}
      />

      <h2>Livro {book.number} - {book.originalTitle}</h2>

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button onClick={() => navigate("/detalhes", { state: { book } })}>
          Ver detalhes
        </button>

        <button onClick={addFavorite}>
          Favoritar 
        </button>
      </div>

      <Link to="/favoritos" style={{ marginTop: 20 }}>
        Ver Favoritos
      </Link>
    </div>
  );
}

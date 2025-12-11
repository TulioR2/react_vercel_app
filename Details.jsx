import { useLocation, useNavigate } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const book = state?.book;

  if (!book) return <p style={{ textAlign: "center" }}>Nenhum livro selecionado</p>;

  function addFavorite() {
    const KEY = "@hp:favorites";
    const list = JSON.parse(localStorage.getItem(KEY)) || [];
    list.push(book);
    localStorage.setItem(KEY, JSON.stringify(list));

    alert("Adicionado aos favoritos!");
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
      <h2>Livro {book.number} - {book.originalTitle}</h2>

      <img src={book.cover} style={{ width: 200 }} />

      <p><b>Data de publicação:</b> {book.releaseDate}</p>
      <p><b>Páginas:</b> {book.pages}</p>
      <p><b>Descrição:</b> {book.description}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <button onClick={() => navigate("/")}>Voltar</button>
        <button onClick={addFavorite}>Favoritar ⭐</button>
      </div>
    </div>
  );
}

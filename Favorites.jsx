import React, { useEffect, useState } from 'react';

export default function Favorites() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('@hp:favorites')) || [];
    setList(data);
  }, []);

  function handleRemove(book) {
    const filtered = list.filter(
      (b) =>
        b.number !== book.number ||
        b.originalTitle !== book.originalTitle
    );

    localStorage.setItem('@hp:favorites', JSON.stringify(filtered));
    setList(filtered);
  }

  return (
    <div className="max-w-3xl mx-auto text-white">
      <h1 className="text-3xl mb-6">Favoritos</h1>

      {list.length === 0 && <p>Nenhum favorito ainda.</p>}

      <ul className="space-y-4">
        {list.map((b, idx) => (
          <li
            key={idx}
            className="bg-slate-800 rounded-xl p-4 flex gap-4 items-center"
          >
            <img
              src={b.cover}
              alt={b.originalTitle}
              className="w-16 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="font-semibold">{b.originalTitle}</h2>
              <p className="text-sm text-slate-400">
                Livro {b.number}
              </p>
            </div>

            <button
              onClick={() => handleRemove(b)}
              className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

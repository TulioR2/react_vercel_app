export const RANDOM_BOOK_URL = 'https://potterapi-fedeperin.vercel.app/en/books/random'

export async function fetchRandomBook(){
  const res = await fetch(RANDOM_BOOK_URL)
  if(!res.ok) throw new Error('Falha ao obter o livro')
  const data = await res.json()
  return data
}

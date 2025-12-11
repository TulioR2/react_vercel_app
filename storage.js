const STORAGE_KEY = 'favoritesBooks'

export function loadFavorites(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY)
    if(!raw) return []
    return JSON.parse(raw)
  }catch(e){
    console.error('Erro lendo favoritos', e)
    return []
  }
}

export function saveFavorites(list){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  }catch(e){
    console.error('Erro salvando favoritos', e)
  }
}

export function addFavorite(book){
  const list = loadFavorites()
  const exists = list.some(b => b.number === book.number && b.originalTitle === book.originalTitle)
  if(!exists){
    list.push(book)
    saveFavorites(list)
  }
}

export function removeFavorite(number, originalTitle){
  let list = loadFavorites()
  list = list.filter(b => !(b.number === number && b.originalTitle === originalTitle))
  saveFavorites(list)
  return list
}

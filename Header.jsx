import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h2>Bliblioteca Harry Potter </h2>
      <nav>
        <Link to="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
        <Link to="/favoritos" style={{ color: 'white' }}>Favoritos</Link>
      </nav>
    </header>
  )
}

export default Header

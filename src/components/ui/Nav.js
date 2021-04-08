import React from 'react'
import pokeball from '../../img/pokeball.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <table><tbody><tr><th>
        <img 
          src={pokeball} 
          style={{ width: '40px'}} 
          alt = 'Loading' 
          align="left"
        />
        </th><th><h4>Pokedex</h4></th></tr></tbody></table>
      </div>

      <ul className="nav-links">
        <Link to='/'>
          <li>Search</li>
        </Link>
        <Link to='/pokemons'>
          <li>Pokemons</li>
        </Link>
        <Link to='/items'>
          <li>Items</li>
        </Link>
      </ul>
      
    </nav>
  )
}

export default Nav

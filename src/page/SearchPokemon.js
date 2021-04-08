import axios from 'axios';
import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/pokemons/PokemonCard';
import Preface from '../components/ui/Preface';
import plusle from '../img/plusle.gif'

const SearchPokemon = () => {

  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState({});

  const search = (e) => {
    e.preventDefault()

    console.log(query)

    fetchItem()
  }

  const fetchItem = async () => {
    const result = await axios(`https://pokeapi.co/api/v2/pokemon/${query}`)

    console.log(result.data)
    setPokemon(result.data)
  }

  const onChange = (q) => {
    setQuery(q)
  }

  const ShowPokemon = () => {
    if (pokemon.name) {
      return (
        <section className="cards">
          <PokemonCard pokemon={pokemon} />
        </section>
      );
    } else {
      return (
        <div>
          <Preface />
          <div className="center">
          <img style={{width: '400px', marginTop: '60px'}} src={plusle} alt='' />
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <form className="search_pokemon" onSubmit={search}>
        <input
          type='text'
          placeholder='Search pokemon'
          value={query}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
      <ShowPokemon />
    </div>
  )
}

export default SearchPokemon

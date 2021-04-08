import React from 'react'
import Spinner from '../ui/Spinner'
import PokemonCard from './PokemonCard'

const PokemonGrid = ({pokemons, isLoading}) => {
  return isLoading ? (
    <Spinner />
  ) : (
  <section className="cards">
    {pokemons.map(pokemon => (
      <PokemonCard key={pokemon.name} pokemon={pokemon}/>
    ))}
  </section>
  )
}

export default PokemonGrid

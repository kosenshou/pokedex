import React from 'react'

const PokemonCard = ({pokemon}) => {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt='' />
      <img src={pokemon.sprites.back_default} alt='' />

      <p>Name: {pokemon.forms[0].name}</p>

      <p>Base Experience: {pokemon.base_experience}</p>

      <p>Height: {pokemon.height}</p>

      <p>Weight: {pokemon.weight}</p>
      <br></br>
      Types: <ul>
      {pokemon.types.map(type => (
        <li><span/>{type.type.name}</li>
      ))}
      </ul>
      <br></br>
      Stats: <ul>
      {pokemon.stats.map(stat => (
        <li><span/>{stat.stat.name}: {stat.base_stat}</li>
      ))}
      </ul>
    </div>
  )
}

export default PokemonCard

import React, { useEffect, useState } from 'react';
// import '../App.css';
import axios from 'axios';
import PokemonGrid from '../components/pokemons/PokemonGrid';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)

      // console.log(result.data.forms[0].name);
      console.log(result.data.results);
      // setPokemons(result.data.results);

      const pokedata = result.data.results;

      // cache pokemon data as json in localStorage

      let pokemonCacheData = [pokedata.length];

      for (let i = 0; i < pokedata.length; i++) {
        let pdCache = localStorage.getItem(pokedata[i].name)
        let pd = null;
        if (pdCache) {
          pdCache = JSON.parse(pdCache)
        } else {
          pd = await axios(pokedata[i].url);
          try {
            localStorage.setItem(pokedata[i].name, JSON.stringify(pd.data));
          } catch (e) {
            localStorage.clear()
          }
          pdCache = pd.data;
        }
        
        pokemonCacheData[i] = pdCache;
      }

      // console.log(pokemonCacheData);
      setPokemons(pokemonCacheData);
      setIsLoading(false);
    }

    fetchItems()
  }, [offset])

  const randomize = () => {
    setOffset(Math.floor(Math.random() * (897-12)));
    console.log(offset)
    setIsLoading(true)
  }

  return(
    <div>
      <div className="center">
        <br></br>
        <button onClick={randomize}>Randomize</button>
      </div>
      <PokemonGrid pokemons={pokemons} isLoading={isLoading} />
    </div>
  );
}

export default Pokemons;

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card'
import Nav from './components/Nav';

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('1');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(`https://pokeapi.co/api/v2/pokemon/${query}`)

        // console.log(result.data.forms[0].name);
        console.log(result.data)
        setPokemon(result.data);
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchItems()
  }, [query])

  const search = () => {
    setQuery(text);
  }

  const onChange = (query) => {
    setText(query)
  }

  return(
    <div>
      <Nav />

      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="search_button" onClick={search}>Search</button>

      <Card pokemon={pokemon} isLoading={isLoading}/>
    </div>
  );
}

export default App;

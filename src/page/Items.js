import React, { useEffect, useState } from 'react';
// import '../App.css';
import axios from 'axios';
import ItemGrid from '../components/items/ItemGrid';

const Items = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/item?limit=12&offset=${offset}`)

      console.log(result.data.results);

      const itemdata = result.data.results;

      // cache items data as json in localStorage

      let itemCacheData = [itemdata.length];

      for (let i = 0; i < itemdata.length; i++) {
        let itemCache = localStorage.getItem(itemdata[i].name)
        let item = null;
        if (itemCache) {
          itemCache = JSON.parse(itemCache)
        } else {
          item = await axios(itemdata[i].url);
          try {
            localStorage.setItem(itemdata[i].name, JSON.stringify(item.data));
          } catch (e) {
            localStorage.clear()
          }
          itemCache = item.data;
        }
        
        itemCacheData[i] = itemCache;
      }

      // console.log(pokemonCacheData);
      setItems(itemCacheData);
      setIsLoading(false);
    }

    fetchItems()
  }, [offset])

  const randomize = () => {
    setOffset(Math.floor(Math.random() * (1000-12)));
    console.log(offset)
    setIsLoading(true)
  }

  return(
    <div>
      <div className="center">
        <br></br>
        <button onClick={randomize}>Randomize</button>
      </div>
      <ItemGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default Items;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/ui/Nav'
import SearchPokemon from './page/SearchPokemon'
import Pokemons from './page/Pokemons'
import Items from './page/Items';

const App = () => {
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={SearchPokemon} />
          <Route path="/pokemons" exact component={Pokemons} />
          <Route path="/items" exact component={Items} />
        </Switch>
        {/* <div className='footer'>
          <p>Developed by Louie Aroy</p>
        </div> */}
      </div>
    </Router>
  );
}

export default App;

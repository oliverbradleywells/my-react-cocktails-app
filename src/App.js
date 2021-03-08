import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Index from './Pages/Index';
import SearchResults from './Pages/SearchResults';
import CocktailDetail from './Pages/CocktailDetail';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          component={(props) => <Index {...props} newProp="newProp" />}
        />
        <Route
          path="/search/:cat"
          component={(props) =>
            <SearchResults {...props} newProp="newProp" />}
        />
        <Route
          exact
          path="/search"
          component={(props) =>
            <SearchResults {...props} newProp="newProp" />}
        />
        <Route
          path="/cocktail/:id"
          component={CocktailDetail}
        />
      </Switch>
    </BrowserRouter>

  )
}

export default App;
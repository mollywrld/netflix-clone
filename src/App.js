import "./App.css";
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import pagenotfound from "./components/pagenotfound";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Action from "./components/Action";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=b7aa9933a6d97bef1e6a7e0dda7979fa&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="/action" component={Action}/>
        <Route path="*" component={pagenotfound} />
      </Switch>
    </div>
  );
}


export default App;

import React, { useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';
import {APP_ID} from './config';
import {APP_KEY} from './config';

const App = () => {

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');

  useEffect(() => {
    getRecipes();
  }, []);

  // Resolved CORS issue by fetching from client - server - server(the one we want data from), as appose to client - server.
  const getRecipes = async () => {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
 };




  return(
    <div className="App">
    <form className = "search-form">
    <input className="search-bar" type="text"/>
    <button className="search-button" type="submit">Search</button>
    </form>
    {recipes.map(recipe => (
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
      image={recipe.recipe.image}/>
    ))}
    </div>
  );
}

export default App;

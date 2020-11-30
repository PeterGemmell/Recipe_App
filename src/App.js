import React from "react";
import logo from './logo.svg';
import './App.css';
import {APP_ID} from './config'
import {APP_KEY} from './config'

const App = () => {

  const APP_ID = '';
  const APP_KEY = '';

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return(
    <div className="App">
    <form>
    <input type="text"/>
    <button></button>
    </form>
    </div>
  );
}

export default App;

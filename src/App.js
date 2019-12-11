import React, {useEffect, useState} from "react"; 
import Recipe from "./Recipe";
import './App.css';
import { async } from "q";
import { trackPromise } from "react-promise-tracker";
import content from "./content.module.css";

const App = () => {
  
  const APP_ID = "58dea41c";
  const APP_KEY = "4e1d28a618a9c2eb81fcfa4178360030";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect( () => {
      getRecipes()
  }, [query]);

  const getRecipes = async () => {
    trackPromise(
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response => response.json())
    .then(data => setRecipes(data.hits))
    );
   
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>  {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const clear = e => {
    setRecipes([]);
  }

  return (
    
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit" onClick={clear}>Search</button>
      </form>
      {console.log(recipes)}

      <div className={content.main}>
        <div className={content.cards}>
          {recipes.map(recipe => (
            <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            healthLabels={recipe.recipe.healthLabels}
            />
          ))};
      </div>
    </div>
      </div>
      
  );
}

export default App;

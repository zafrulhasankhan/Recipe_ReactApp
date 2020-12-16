import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';


const App = ()=>{

  const App_id = "9dbc75cb";
  const App_key ="b5b34fa969a87998e830a53fcb54cfc6";
 


const [recipes,setrecipes] = useState([]);
const [search,setsearch] = useState("");
const [query,setquery] = useState('chicken');



useEffect(()=>{
  getRecipes();

} ,[query]);

const updateSearch = e =>{
  setsearch(e.target.value);
  //console.log({search})
}

const getsearch = e =>{
  e.preventDefault();
  setquery(search);
  setsearch('');
}


const getRecipes =async()=>{
  const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`);
  const data = await response.json();
  setrecipes(data.hits);
  //console.log(data.hits);
  }


return (
    <div className="App">
      <form className="search-form" onSubmit={getsearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button type="submit" className="search-button">search</button>
      </form>

      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe
         title={recipe.recipe.label} 
         calories={recipe.recipe.calories}
         image ={recipe.recipe.image}
         ingredients ={recipe.recipe.ingredients}
         />
      ))}
      </div>
      

      
     
    </div>
  );
}

export default App;

import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './components/ImageStyle';
import './components/Recipe.card.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  CardActions,
   CardContent,
   Grid,
   Typography
 } from "@material-ui/core";
import useStyles from './components/ImageStyle.js';
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
  console.log(data.hits);
  }
const classes = useStyles();

return (
    <div className="App">


     <CardActions>
          <Grid container justify="center">
            <div className="input-box">
           <form className="search-form" onSubmit={getsearch}>
            <p style={{color:'white',fontSize:'17px'}}><b><u>Nasim's Recipe  App</u></b></p>
            <input className="search-bar" placeholder="Search Your  Recipe" type="text" value={search} onChange={updateSearch}></input><br></br><br></br>
             <button className="btn btn-primary" type="submit" >Search</button>
          </form>
         </div>
        </Grid>
      </CardActions>
      
      {(recipes?.length)?(
        <div className="container">
           <div className="row">
           {recipes?.map(recipe=>(
             <div className="card" style={{background:'black'}}>
               
                 <div style={{background:'#141414'}}>
                    <div className={classes.logoContainer}>
                        <img src={recipe?.recipe?.image} className={classes.alanLogo}  alt=""not found/>
                   </div>
                   <p style={{fontSize:'25px',textAlign:'center'}}>{recipe?.recipe?.label}</p>
                </div>  
                
                <div class="card-body">
                  <p>
                  <p style={{fontWeight:'bold',color:'white'}}><span style={{color:'pink'}}>Calories:</span> {recipe?.recipe?.calories} K.Cal.</p>
                  <p style={{fontWeight:'bold',color:'fuchsia'}}><u>Instructions</u></p>
                    <ol>
                      {(recipe?.recipe?.ingredients).map(ingredient=>(
                        <li>{ingredient?.text}</li>
                 
                       ))}
                    </ol>
                </p>
                </div>
            </div>
         ))}
     </div>
  
   </div>
      ):(

        <CardActions>
        <Grid container justify="center">
        <div className="playercard">
           <h5>Not Found...</h5>
        </div>
        </Grid>
        </CardActions>

      )}
      
      
            
      <br></br>
      <p className="creater"  style={{textAlign:"center"}}><b>Created by</b><a href="https://web.facebook.com/zafrulhasan.nasim" target="_blank"><b>Zafrul Hasan Nasim</b> </a></p>
    
     
    </div>
  );
}

export default App;

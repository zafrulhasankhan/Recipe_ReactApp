import React from 'react';
import style from '../components/recipe.module.css';


const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} className={style.img} alt=""></img>
        </div>
    );
}

export default Recipe;
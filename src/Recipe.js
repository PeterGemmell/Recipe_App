import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
  return(
    <div className={style.recipe}>
    <h1><u>{title}</u></h1>
    <ol>
    {ingredients.map(ingredient =>(
      <li>{ingredient.text}</li>
    ))}
    </ol>
    <p><b>Calories<br></br></b>{calories}</p>
    <img className={style.image} src={image} alt=""/>
    </div>
  );
};


export default Recipe;

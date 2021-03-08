import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cocktail(props) {
  const [ingredients, setIngredients] = useState([]);

  const {
    idDrink: id,
    strDrink: name,
    strCategory: category,
    strDrinkThumb: image,
    strGlass: glass,
  } = props.cocktail;

  function getIngredients() {
    let array = [];
    for (let i = 1; i < 16; i++) {
      const name = `strIngredient${i}`;
      array = [...array, props.cocktail[name]];
    }

    setIngredients(array);
  }

  useEffect(() => {
    getIngredients();
  }, [])

  return (
    <Link to={`/cocktail/${id}`}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Glass: {glass}</p>
      <img src={`${image}/preview`} alt={name} />
      {ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient}</p>
      ))}
    </Link>
  )

}

export default Cocktail;
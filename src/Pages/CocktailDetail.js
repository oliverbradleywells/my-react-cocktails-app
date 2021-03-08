import { useEffect, useState } from "react";

function CocktailDetail(props) {
  const [ingredients, setIngredients] = useState([]);
  const [cocktail, setCocktail] = useState({});

  const { 
    idDrink: id,
    strDrink: name, 
    strCategory: category,
    strDrinkThumb: image,
    strGlass: glass,
  } = cocktail;

  function getIngredients() {
    let array = [];
    for (let i = 1; i < 16; i++) {
      const name = `strIngredient${i}`;
      array = [...array, cocktail[name]];
    }

    setIngredients(array);
  }


  async function fetchCocktailDetail() {
    const response = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`);
    const data = await response.json();
    setCocktail(data && data.drinks && data.drinks[0]);
    console.log(data);
  } 

  useEffect(() => {
    fetchCocktailDetail();
  }, []);

  useEffect(() => {
    getIngredients();
  }, [cocktail]);

  return (
    <div>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Glass: {glass}</p>
      <img src={`${image}/preview`} alt={name} />
      {ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient}</p>
      ))}
    </div>
  )
 
}

export default CocktailDetail;
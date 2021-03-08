import { useEffect, useState } from "react";
import Cocktail from "../Components/Cocktail";

function SearchResults(props) {
  const [searchResults, setSearchResults] = useState([]);
  console.log(props);
  
  async function fetchDataSearch() {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.match.params.cat}`);
    const data = await response.json();
    setSearchResults(data && data.drinks);
  }

  useEffect(() => {
    fetchDataSearch();
  }, []);

  return (
    <main>
      <h1>Search Reasults</h1>
      {searchResults.map((result, index) => (
        <Cocktail cocktail={result} key={index} />
      ))}
    </main>
  )
}

export default SearchResults;
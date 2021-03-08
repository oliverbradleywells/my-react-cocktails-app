import { useEffect, useState } from "react";
import Cocktail from "../Components/Cocktail";
import SearchBar from "../Components/Search/SearchBar";


function Index(props) {
    console.log(props);
    const [randomCocktail, setRandomCocktail] = useState(null);

    async function fetchCocktailData() {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await response.json();
        setRandomCocktail(data && data.drinks && data.drinks[0]);
    }

    useEffect(() => {
        fetchCocktailData();
    }, []);

    return (
        <main>
            <h1>A Mix With A Twist</h1>
            <SearchBar />
            {randomCocktail &&
                <>
                    <h2>Cocktail advice:</h2>
                    <Cocktail cocktail={randomCocktail} />
                </>
            }

        </main>
    )
}

export default Index;
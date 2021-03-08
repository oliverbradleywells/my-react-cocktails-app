
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.fetchDataSearch(searchQuery);
      }}>
        <input name="search" onChange={(e) => setSearchQuery(e.target.value)} />
        <Link to={`/search/${searchQuery}`}>Search</Link>
      </form>
    </div>
  )
}

export default SearchBar;
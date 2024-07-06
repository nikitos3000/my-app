import React, { useState, useContext, createContext } from "react";
import "./search.css";

const myContext = createContext('search')

const Search = () => {
  const [search, setSearch] = useState("");

  const InputStatus = (event) => {
    setSearch(event.target.value);
  };

  const Search = () => {
    if (search === "") {
      alert("ошибка");
    }
    console.log(search);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={InputStatus}
        placeholder="Search..."
      />
      <button onClick={Search}>Search</button>
    </div>
  );
};

export default Search;

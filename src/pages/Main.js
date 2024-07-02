import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import axios from "axios";

const Main = () => {
  const [character, setCharacter] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((res) => {
      setCharacter(res.data.results);
    });
  }, []);

  console.log(character);
  return (
    <div>
      <Search />
      <div className="cards-container">
        {character.map((obj, index) => (
          <Card key={index} id={obj.id} name={obj.name} img={obj.image} />
        ))}
      </div>
    </div>
  );
};

export default Main;

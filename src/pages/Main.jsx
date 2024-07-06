import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function getCharacter (){
  const { data } = await axios.get("https://rickandmortyapi.com/api/character/")
  return data.results
}

const Main = () => {

  const {data , isLoading, isSuccess, isError} = useQuery(
    {QueryKey: ['Character'],
      queryFn: getCharacter})

  return (
    <div>
      <Search />
      <div className="cards-container">
        {data.map((obj, index) => (
          <Card key={index} id={obj.id} name={obj.name} img={obj.image} />
        ))}
      </div>
    </div>
  );
};

export default Main;

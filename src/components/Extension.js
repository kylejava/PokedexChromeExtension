import {React, useState, useEffect} from 'react';
import { FilledInput, TextField } from '@mui/material';
import "../styles/extension.css"
import query from '../services/QueryService.js';
import ImageDisplay from './ImageDisplay'
function Extension() {
  const [pokemonName, setpokemonName] = useState("");
  const [query, setQuery] = useState({
    "name":"",
    "number":0,
    "type":[],
    "picture":"",
    "shiny_picture":"",
    "description":""
  });
  useEffect(() => {
    setpokemonName(pokemonName.toLowerCase())
    try{
      fetch("https://pokeapi.co/api/v2/pokemon/" +pokemonName.toLowerCase())
        .then(response =>{
          return(response.json())
        })
        .then(data =>{
          let types = []
          let pokemon_types = data["types"]
          for(let i = 0; i <(pokemon_types).length;i++){
            types.push(pokemon_types[i]["type"]["name"])
          }
          console.log(types)
          setQuery(query => ({...query, name:data["name"], "number":data["id"], "type":types, "picture":data["sprites"]["other"]["official-artwork"]["front_default"], "shiny_picture":data["sprites"]["other"]["official-artwork"]["front_shiny"]}))

        })
        .catch((err) =>{
          //setQuery(query => ({...query, name:"", "number":"", "type":[""], "picture":"https://w7.pngwing.com/pngs/190/415/png-transparent-pokemon-gold-and-silver-pokemon-heartgold-and-soulsilver-pokemon-ruby-and-sapphire-question-mark-text-trademark-logo.png", "shiny_picture":"https://w7.pngwing.com/pngs/190/415/png-transparent-pokemon-gold-and-silver-pokemon-heartgold-and-soulsilver-pokemon-ruby-and-sapphire-question-mark-text-trademark-logo.png"}))
        });
    }
    catch(err){
      console.log(err)
    }

    try{
      fetch("https://pokeapi.co/api/v2/pokemon-species/"+pokemonName.toLowerCase())
      .then(response =>{
        return(response.json())
      })
      .then(data => {
        //setQuery(query => ({...query, picture:"", "number":data["id"], "type":types}))

      })
    }
    catch(err){

    }
  }, [pokemonName]);

  return (
    <div class = "box">
      <p>Please Enter A Pokemon Name Or PokeDex Number</p>
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange ={(event) => setpokemonName(event.target.value)} />
      <p>{query["name"]}</p>
      <p>{query["number"]}</p>
      <p>{query["type"]}</p>
      < ImageDisplay
        picture = {query["picture"]}
        shiny_picture = {query["shiny_picture"]}
      />
    </div>
  );
}

export default Extension;

export default async function query(pokemon){
  pokemon = pokemon.toLowerCase()
  try{
    fetch("https://pokeapi.co/api/v2/pokemon-species/" +pokemon)
      .then(response =>{
        return(response)
      })
      /*.then(data =>{
        return(data)
      })*/

  }catch(err){
    console.log(err);
  }
}

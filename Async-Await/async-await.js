const someAsyncFn = async () => "Returns something"; 

// without await keyword, the value returned would be a Promise that shoule be chained with .then()
const result =  await someAsyncFn();

console.log(result); // "Returns something"

// Use case, fetch petition
async function getPokemons() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    const pokemons= await res.json();
    console.log(pokemons.results); // Array of 5 pokemons
}

getPokemons()
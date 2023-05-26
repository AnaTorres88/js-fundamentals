// fetch() method
// Basic synthax let promise = fetch(url, [options])

// GET

    // using async and await

    // fetch returns promises
async function getPokemons() {
    // use fetch() with the mandatory path
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    // another await resolves the promise;
    const pokemons= await res.json();
    console.log(pokemons.results); // Array of 5 pokemons
}

getPokemons();

// POST
// This is only an expample to show the synthax
// makes use of the optional object

// we can use try catch blocks

let response;
try {
    response = await fetch('someurl', {
        Method: 'POST',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: '...'
    })
} catch(error) {
    // error handling
}

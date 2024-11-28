function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => {
        if(!response.ok) {
             throw new Error('Pokemon not found');
            }
            return reponse.json();
        })
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.log('There was a problem fetching the data:', error);
        })
}

getPokemon()
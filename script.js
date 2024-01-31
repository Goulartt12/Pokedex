async function fetchData(){

    try{
        const name = document.getElementById("name");
        const id = document.getElementById("id");
        const type = document.getElementById("type");
        const ability = document.getElementById("weight");
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
   
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        const typ = data['types'][0]['type']['name'];

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        name.textContent = `Name: ${data.name}`
        id.textContent = `Pokedex Id: ${data.id}`
        type.textContent = `Type: ${typ}`
        weight.textContent = `Weight: ${(data.weight)/10}kg`

    }
    catch(error){
        console.error(error);
    }
}

import { useState } from 'react';
import BuildTeam from './teamBuilder'


function FetchPokemon() {
    const [pokemon, setPokemon] = useState({
        id: "",
        name: "",
        sprite: ""
    });
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value);
    }

    function fetchPokemon(event) {

        const chosenPokemon = value ? value.toLowerCase() : Math.floor(Math.random() * 151) + 1

        fetch('https://pokeapi.co/api/v2/pokemon/' + chosenPokemon)
            .then(res => res.json())
            .then(pokeData => {
                setPokemon({
                    id: pokeData.id,
                    name: pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1),
                    sprite: pokeData.sprites.front_default
                });
                setValue("")
            })
            .catch(err => alert("Invalid Pokémon Name or Number"));

        if (event) event.preventDefault()
    }

    return (
        <div>
            <form id="input" onSubmit={fetchPokemon}>
                <label>Choose Pokémon Name or Number: </label>
                <input type="text" placeholder="randomize" value={value} onChange={handleChange} />
                <input type="submit" value="Gotcha!" ></input>
            </form>
            <img src={pokemon.sprite} alt={pokemon.name}></img>
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
            <BuildTeam pokemon={pokemon} />
        </div>
    )
}

export default FetchPokemon
import { Component } from 'react';
import BuildTeam from './teamBuilder'

class FetchPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [{
                id: "",
                name: "",
                sprite: "",
            }],
            value: "",
        };
        this.fetchPokemon = this.fetchPokemon.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    fetchPokemon(event) {

        const chosenPokemon = this.state.value ? this.state.value.toLowerCase() : Math.floor(Math.random() * 151) + 1

        fetch('https://pokeapi.co/api/v2/pokemon/' + chosenPokemon)
            .then(res => res.json())
            .then(pokemon => {
                this.setState({ id: pokemon.id });
                this.setState({ name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) });
                this.setState({ sprite: pokemon.sprites.front_default });
                this.setState({ value: "" })
            })
            .catch(err => alert("Invalid Pokémon Name or Number"));


        if (event) event.preventDefault()
    }

    render() {
        return (
            <div id="container">
                <form id="input" onSubmit={this.fetchPokemon}>
                    <label>Choose Pokémon Name or Number: </label>
                    <input type="text" placeholder="randomize" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Gotcha!" ></input>
                </form>
                <img src={this.state.sprite} alt={this.state.name}></img>
                <p>{this.state.name}</p>
                <p>{this.state.id}</p>
                <BuildTeam pokemon={this.state} />
            </div>
        )
    }
}

export default FetchPokemon
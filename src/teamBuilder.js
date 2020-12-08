import { useState } from 'react'


function BuildTeam(props) {

const [pokemonOnHand, setPokemon] = useState([props.pokemon])
    
    function addToTeam() {
        const newTeam = pokemonOnHand.slice();
        const newPokemon = props.pokemon;
        if (newPokemon.id !== "") {
        newTeam.push(newPokemon);
        setPokemon(newTeam);}
    }

    function renderTableData() {
        return pokemonOnHand.map((pokemonOnHand, index) => {
            const { id, name, sprite, } = pokemonOnHand //destructuring
            return (
                <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td><img src={sprite} alt={name} /></td>
                </tr>
            )
        })
    }

    function renderTableHeader() {
        const header = Object.keys(pokemonOnHand[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    return (
        <div>
            <button onClick={addToTeam}>Add to Team</button>
            <h1 id='title'>Your Team</h1>
            <table id='team'>
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    )
}

export default BuildTeam
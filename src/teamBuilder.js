import { Component } from 'react'

class BuildTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: [
                { id: '', name: '', sprite: ''},
            ]
        }
        this.addToTeam = this.addToTeam.bind(this); 
    }

    addToTeam() {
        let pokeslice = this.state.pokemon.slice();
        let newPokemon = this.props.pokemon;
        pokeslice.push(newPokemon);
        this.setState({pokemon : pokeslice});
    }

    renderTableData() {
        return this.state.pokemon.map((pokemon, index) => {
            const { id, name, sprite, } = pokemon //destructuring
            return (
                <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td><img src={sprite} alt={name}/></td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.pokemon[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
    render() {
        return (<>
             <div>
             <button onClick={this.addToTeam}>Add to Team</button>
            <h1 id='title'>Your Team</h1>
            <table id='team'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
        </>)
    }
}


export default BuildTeam
import { Component } from 'react';
import FetchPokemon from './pokeFetcher'

class App extends Component {
  
  render() {
    return <div>
      <FetchPokemon />
    </div>
  }
}

export default App;

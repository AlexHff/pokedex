import React, { Component } from 'react';
import Navigator from './Navigator';
import './styles/App.css';
import pokemons from './../assets/pokedex.json';

console.log(pokemons);

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Navigator />
                <p>
                    Pokedex
                </p>
            </div>
        );
    }
}

export default App;

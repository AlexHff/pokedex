import React, { Component } from 'react';
import Navigator from './Navigator';
import PokemonList from './PokemonList';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import PokemonDetail from './PokemonDetail';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navigator />
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={PokemonList} />
                        <Route path="/pokemon/:name" component={PokemonDetail} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import data from './../assets/pokedex.json';

class PokemonList extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            pokemonFile: data.pokemon,
            currentIndex: 0,
            hasMore: true,
            isLoading: false
        };

        window.onscroll = debounce(() => {
            const {
                loadPokemons,
                state: {
                    isLoading,
                    hasMore,
                },
            } = this;

            if (isLoading || !hasMore) return;

            if (window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight) {
                loadPokemons();
            }
        }, 100);
    }

    componentDidMount() {
        this.loadPokemons();
    }

    loadPokemons = () => {
        this.setState({ isLoading: true }, () => {
            this.setState({
                hasMore: (this.state.pokemons.length < data.pokemon.length),
                isLoading: false,
                pokemons: [
                    ...this.state.pokemons,
                    ...this.state.pokemonFile.slice(
                        this.state.currentIndex, this.state.currentIndex + 20
                    ),
                ],
                currentIndex: this.state.currentIndex + 20,
            });
        });
    }

    render() {
        return (
            <div className="PokemonList">
                {this.state.pokemons.map(pokemon => (
                    <div className="PokemonCard" key={pokemon.id}>
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <Card style={{ width: '10rem', cursor: 'pointer' }}>
                                <Card.Img variant="top" src={pokemon.img} />
                                <Card.Title>{pokemon.name}</Card.Title>
                            </Card>
                        </Link>
                        <br />
                    </div>
                ))}
                <hr />
                {this.state.isLoading &&
                    <div>Loading...</div>
                }
            </div>
        );
    }
}

export default PokemonList;

import React, { Component } from 'react';
import data from './../assets/pokedex.json';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PokemonDetail extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getPokemon = () => {
        const ref = this.props.match.params.name;
        return data.pokemon.find( ({ name }) => name === ref);
    }

    render() {
        const pokemon = this.getPokemon();
        const types = pokemon.type.map((type) =>
            <li key={type}>{type}</li>
        );
        const weaknesses = pokemon.weaknesses.map((weakness) =>
            <li key={weakness}>{weakness}</li>
        );
        return (
            <div className="PokemonDetail">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pokemon.img} />
                    <Card.Body>
                        <Card.Title>{pokemon.num} {pokemon.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Type: {types}</ListGroupItem>
                        <ListGroupItem>Height: {pokemon.height}</ListGroupItem>
                        <ListGroupItem>Weight: {pokemon.weight}</ListGroupItem>
                        <ListGroupItem>Weaknesses: {weaknesses}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Link to="/">Back to home</Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default PokemonDetail;

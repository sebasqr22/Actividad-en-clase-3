import './App.css';
import React from "react";
import StarWarsCharacter from "./StarWarsCharacter";

export default class Starwarspeople extends React.Component {
    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = "https://swapi.dev/api/people/"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results, loading: false });
        console.log(data.results);
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.person) {
            return <div>didn´t get a person</div>;
        }

        return (
        <div>
            <StarWarsCharacter array= {this.state.person}></StarWarsCharacter>
        </div>
        );
    }
}
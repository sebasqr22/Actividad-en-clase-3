import './App.css';
import Alert from './Alert';
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

export default class StarWarsCharacter extends React.Component{
    personas = [
        {}
    ]
    renderPersonajes(perso, index){
        return(
            <tr key={index}>
                <td>{perso.name}</td>
                <td>{perso.height}</td>
                <td>{perso.mass}</td>
                <td>{perso.hair_color}</td>
                <td>{perso.skin_color}</td>
                <td>{perso.eye_color}</td>
                <td>{perso.birth_year}</td>
                <td>{perso.gender}</td>
            </tr>
        )
    }
    render(){
        let lista = this.props.array;
        return(<div className="Personajes">
        <ReactBootStrap.Table border="10">
  <thead>
    <tr>
      <th>Name</th>
      <th>Height</th>
      <th>Mass</th>
      <th>Hair Color</th>
      <th>Skin Color</th>
      <th>Eye Color</th>
      <th>Birthyear</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
   {lista.map(this.renderPersonajes)}
  </tbody>
</ReactBootStrap.Table>

    </div>
    );    
        }
    }
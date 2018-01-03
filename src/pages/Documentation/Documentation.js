import React from "react";
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import Document from "../../components/Document";
import "./Documentation.css";

const Documentation = (props) => (
  <div>
    <Header logo="Simple PokeAPI" slogan="Easy Pokemon Information"/>
    <Subheader />
    <Document title="Pokemon" text="Pokemon are the creatures that inhabit the world of the Pokemon games. Pokemon can requested by their name or pokemon id. If no name or id is specified then the full list of Pokemon will be returned." domain={props.domain} example="{name or id}"/>
    <Document title="Type" text="Types are properties for Pokémon and their moves. As of Generation VI, there are 18 types: Normal, fire, Fighting, Water, Flying, Grass, Poison, Electric, Ground, Psychic, Rock, Ice, Bug, Dragon, Ghost, Dark, Steel and Fairy. Use any of the listed types as a paramater to grab the pokemon who have that type." domain={`${props.domain}type/`} option="fire" example="{name}"/>
    <Document title="Other Options" text="Pokemon can also be filtered by height, weight, or base_experience. Simply add the '?' symbol at the end of any the endpoints and the follow the 'name=value' standard of RESTFul APIs." domain={`${props.domain}?`} example="{name=value}"/>
  </div>
)

export default Documentation;

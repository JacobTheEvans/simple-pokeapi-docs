import React from "react";
import Request from "../Request";
import "./Example.css";

const Example = (props) => (
  <div className="example">
    <h1>Try it out</h1>
    <Request endpoint={props.domain} exampleText="pikachu" hint="Need a hint? Try pokemon/1 or pokemon/bulbasaur"/>
  </div>
)

export default Example;

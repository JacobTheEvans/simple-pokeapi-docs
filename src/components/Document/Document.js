import React from "react";
import Request from "../Request";
import "./Document.css";

const Document = (props) => (
  <div className="document">
    <h1>{props.title}</h1>
    <p className="desc-text">{props.text}</p>
    <Request endpoint={props.domain} option={props.option} exampleText={props.example}/>
  </div>
)

export default Document;

import React from "react";
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import Example from "../../components/Example";

const Home = (props) => (
  <div>
    <Header logo="Simple PokeAPI" slogan="Easy Pokemon Information"/>
    <Subheader />
    <Example domain={props.domain}/>
  </div>
)

export default Home;

import React from "react";
import "./Header.css";

const Header = (props) => (
  <header className="header">
    <h1>{props.logo}</h1>
    <h2>{props.slogan}</h2>
  </header>
)

export default Header;

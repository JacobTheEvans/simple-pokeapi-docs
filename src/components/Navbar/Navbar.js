import React from "react";
import FontAwesome from "react-fontawesome";
import Dropdown, {DropdownTrigger, DropdownContent} from "react-simple-dropdown";
import {Link} from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="brand">Simple PokeAPI</Link>
        <ul className="nav-items">
          <li>
            <Link to="/documentation">Documentation</Link>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://pokeapi.co/">Original API</a>
          </li>
        </ul>
        <Dropdown className="dropdown-area" ref="dropdown">
          <DropdownTrigger>
            <button className="mobile-toggler">
              <FontAwesome name="bars"/>
            </button>
          </DropdownTrigger>
          <DropdownContent>
            <ul className="mobile-nav">
              <li>
                <Link to="/documentation" onClick={() => this.refs.dropdown.hide()}>Documentation</Link>
              </li>
              <li>
                <a rel="noopener noreferrer" target="_blank" href="/symbols" onClick={() => this.refs.dropdown.hide()}>Original API</a>
              </li>
            </ul>
          </DropdownContent>
        </Dropdown>
      </nav>
    )
  }
}

export default Navbar;

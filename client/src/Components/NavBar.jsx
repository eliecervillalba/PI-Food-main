// import libraries and styles
import React from "react";
import Logo from "../logoHenry.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

// build component
function NavBar() {
  return (
    <header className="navbar">
      <div className="header-nav">
        <img id="logoHenry" src={Logo} width="20" height="20" alt="" />
        <h3>Henry Food App</h3>
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/recipe">Create Recipe</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

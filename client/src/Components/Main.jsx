import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Your Favorite Recipes</h1>
        <Link to="/home">
          <button>Get Start</button>
        </Link>
      </div>
    </div>
  );
}

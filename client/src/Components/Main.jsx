import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="container">
      <h1 className="title">Your Favorite Recipes</h1>
      <Link to="/home">
        <button className="btn-start">Get Start</button>
      </Link>
    </div>
  );
}

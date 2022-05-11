import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="container">
      <div className="title-container">
        <p>HENRY FOOD APP</p>
        <Link to="/home">
          <button className="btn-start">Get Start</button>
        </Link>
      </div>
    </div>
  );
}
